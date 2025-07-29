import re
import pandas as pd
import json

# Input files
CSV_FILE = "Courserr Class Rating Form (Responses) - Form Responses 1 (1).csv"
JS_FILE = "classes.js"
OUTPUT_FILE = "classes.updated1.js"

# Load CSV
df = pd.read_csv(CSV_FILE)

# Load JS code
with open(JS_FILE, "r", encoding="utf-8") as f:
    js_code = f.read()


# Append new value to a named array in the class code
def append_to_field(class_code, field_name, new_value):
    if pd.isna(new_value) or new_value is None:
        print(f"  Skipping {field_name}: value is None or NaN")
        return class_code

    print(f"  Trying to append {new_value} to {field_name}")

    # More comprehensive patterns to match different comment formats
    patterns = [
        rf"(\[[^\]]*?\])\s*,?\s*//\s*{re.escape(field_name)}",
        rf"(\[[^\]]*?\])\s*,?\s*//\s*{re.escape(field_name.lower())}",
        rf"(\[[^\]]*?\])\s*,?\s*//\s*{re.escape(field_name.capitalize())}",
        rf"(\[[^\]]*?\])\s*,?\s*//\s*{re.escape(field_name.upper())}",
        # Alternative patterns without comments
        rf'{re.escape(field_name)}\s*:\s*(\[[^\]]*?\])',
        rf'{re.escape(field_name.lower())}\s*:\s*(\[[^\]]*?\])',
    ]

    for i, pattern in enumerate(patterns):
        match = re.search(pattern, class_code, re.IGNORECASE)
        if match:
            print(f"    Found match with pattern {i + 1}: {match.group(1)}")
            try:
                # Clean up the array string before evaluation
                array_str = match.group(1).strip()

                # Handle empty arrays
                if array_str == "[]":
                    existing = []
                else:
                    # Try to safely evaluate the array
                    # Replace single quotes with double quotes for JSON parsing
                    json_str = array_str.replace("'", '"')
                    try:
                        existing = json.loads(json_str)
                    except json.JSONDecodeError:
                        # Fallback to eval if JSON parsing fails
                        existing = eval(array_str)

                if not isinstance(existing, list):
                    existing = []

                print(f"    Current array: {existing}")

                # Append new_value to existing array
                if isinstance(new_value, str):
                    if new_value.strip():
                        # Clean the string value
                        cleaned_value = new_value.strip().replace('"', "'")
                        existing.append(cleaned_value)
                        print(f"    Added string value: {cleaned_value}")
                    else:
                        print(f"    String value is empty, skipping")
                        return class_code
                else:
                    existing.append(new_value)
                    print(f"    Added non-string value: {new_value}")

                # Convert back to JavaScript array format
                updated_array = str(existing).replace('"', "'")
                print(f"    Updated array: {updated_array}")

                # Replace the array in the code
                updated_code = class_code[:match.start(1)] + updated_array + class_code[match.end(1):]
                print(f"    Code changed: {updated_code != class_code}")
                return updated_code

            except Exception as e:
                print(f"    Error processing {field_name}: {e}")
                continue

    print(f"    No match found for {field_name}")
    # Debug: Show potential matches
    lines = class_code.split('\n')
    for i, line in enumerate(lines):
        if field_name.lower() in line.lower():
            print(f"    Found potential match on line {i + 1}: {line.strip()}")

    return class_code


# Find the column headers that contain class names
subject_columns = [col for col in df.columns if 'Classes' in col or 'class' in col.lower()]
print(f"Found subject columns: {subject_columns}")

# Improved pattern to match class definitions
pattern = re.compile(
    r'(const\s+\w+\s*=\s*new\s+Class\s*\([^)]*\)\s*;)',
    re.MULTILINE | re.DOTALL
)

matches = pattern.findall(js_code)
print(f"Found {len(matches)} class definitions")


# Extract class names from each match
def extract_class_name(class_block):
    """Extract the className from a class block"""
    # Try different patterns to find the className
    patterns = [
        r'"([^"]+)"\s*,?\s*//\s*className',
        r'"([^"]+)"\s*,?\s*//\s*class\s*name',
        r'"([^"]+)"\s*,?\s*//\s*name',
        r'className\s*:\s*"([^"]+)"',
        r'name\s*:\s*"([^"]+)"',
    ]

    for pattern in patterns:
        match = re.search(pattern, class_block, re.IGNORECASE)
        if match:
            return match.group(1).strip()

    # Fallback: extract from string parameters
    string_params = re.findall(r'"([^"]+)"', class_block)
    if len(string_params) >= 1:
        # Look for parameters that look like class names
        for param in string_params:
            if len(param) > 3 and (' ' in param or 'to' in param.lower() or 'intro' in param.lower()):
                return param.strip()

    return None


# Print all found class names for debugging
print("\nFound classes:")
for i, class_block in enumerate(matches):
    class_name = extract_class_name(class_block)
    print(f"{i + 1}. {class_name}")

# Create a dictionary to track classes and their updates
class_updates = {}

# Process each row in the CSV
for idx, row in df.iterrows():
    class_name = None

    # Find the class name from subject columns
    for col in subject_columns:
        val = str(row.get(col, '')).strip()
        if val and val.lower() not in ["nan", ""]:
            class_name = val
            break

    if not class_name:
        print(f"Row {idx}: No class name found")
        continue

    print(f"\nProcessing row {idx}: Looking for class '{class_name}'")

    # Extract data from the row with improved error handling
    entry = {
        "rating": None,
        "comment": "",
        "grade": "",
        "time": None,
        "difficulty": None,
    }

    # Handle rating
    rating_col = "What rating would you give the class?"
    if rating_col in row and pd.notna(row[rating_col]):
        try:
            rating_val = float(row[rating_col])
            if 1 <= rating_val <= 5:  # Validate rating range
                entry["rating"] = rating_val
        except (ValueError, TypeError):
            print(f"  Invalid rating value: {row[rating_col]}")

    # Handle comment
    comment_col = "What is your review on the class?"
    if comment_col in row and pd.notna(row[comment_col]):
        comment = str(row[comment_col]).strip()
        if comment and comment.lower() != "nan":
            entry["comment"] = comment.replace('"', "'").replace('\n', ' ')

    # Handle grade
    grade_col = "What was your ending grade?"
    if grade_col in row and pd.notna(row[grade_col]):
        grade = str(row[grade_col]).strip()
        if grade and grade.lower() != "nan":
            entry["grade"] = grade

    # Handle time
    time_col = "How much time did you spend on the course per week? (Answer to the nearest hour)"
    if time_col in row and pd.notna(row[time_col]):
        try:
            time_val = int(float(row[time_col]))
            if time_val >= 0:  # Validate time is non-negative
                entry["time"] = time_val
        except (ValueError, TypeError):
            print(f"  Invalid time value: {row[time_col]}")

    # Handle difficulty
    difficulty_col = "How difficult was the class?"
    if difficulty_col in row and pd.notna(row[difficulty_col]):
        try:
            difficulty_val = int(float(row[difficulty_col]))
            if 1 <= difficulty_val <= 5:  # Validate difficulty range
                entry["difficulty"] = difficulty_val
        except (ValueError, TypeError):
            print(f"  Invalid difficulty value: {row[difficulty_col]}")

    # Create a mapping for common class name variations
    class_name_mappings = {

        # Add more mappings as needed
    }

    # Find matching class with improved matching
    matched = False
    search_name = class_name.lower()

    # Check if there's a mapping for this class name
    if search_name in class_name_mappings:
        search_name = class_name_mappings[search_name]
        print(f"  Mapped '{class_name}' to '{search_name}'")

    for i, class_block in enumerate(matches):
        block_class_name = extract_class_name(class_block)

        if block_class_name:
            block_name_lower = block_class_name.lower()

            # Try multiple matching strategies
            match_found = False

            # 1. Exact match
            if block_name_lower == search_name:
                match_found = True
                print(f"✅ Found exact match: {block_class_name}")

            # 2. Fuzzy match - check if one contains the other
            elif (search_name in block_name_lower or
                  block_name_lower in search_name):
                match_found = True
                print(f"✅ Found fuzzy match: {block_class_name}")

            # 3. Check for key words match
            elif any(word in block_name_lower for word in search_name.split() if len(word) > 3):
                match_found = True
                print(f"✅ Found keyword match: {block_class_name}")

            if match_found:
                # Use the most recent version of this class block
                current_block = class_updates.get(i, class_block)
                updated_block = current_block

                # Update each field
                for field_name, field_value in [
                    ("ratings", entry["rating"]),
                    ("comments", entry["comment"]),
                    ("grades", entry["grade"]),
                    ("averageTimePerWeek", entry["time"]),
                    ("difficulty", entry["difficulty"]),
                    ("Difficulty", entry["difficulty"]),  # Try both cases
                ]:
                    if field_value is not None and field_value != "":
                        new_block = append_to_field(updated_block, field_name, field_value)
                        if new_block != updated_block:
                            updated_block = new_block
                            print(f"  Added {field_name}: {field_value}")

                # Store the updated version
                class_updates[i] = updated_block
                matched = True
                print(f"✅ Updated: {class_name} -> {block_class_name}")
                break

    if not matched:
        print(f"❌ Class not found: '{class_name}'")
        available_classes = [extract_class_name(block) for block in matches]
        print(f"Available classes: {[name for name in available_classes if name]}")

# Apply all updates to the JS code
print(f"\nApplying {len(class_updates)} class updates...")
updated_js_code = js_code

# Sort by index to ensure we replace in correct order
for i in sorted(class_updates.keys()):
    updated_block = class_updates[i]
    original_block = matches[i]

    if updated_block != original_block:
        class_name = extract_class_name(original_block)
        print(f"Updating class: {class_name}")
        print(f"  Original length: {len(original_block)}")
        print(f"  Updated length: {len(updated_block)}")

        # Debug: show first 100 chars of each
        print(f"  Original starts: {original_block[:100]}...")
        print(f"  Updated starts: {updated_block[:100]}...")

        # Use more robust replacement
        if original_block in updated_js_code:
            # Replace only the first occurrence to avoid issues with similar blocks
            updated_js_code = updated_js_code.replace(original_block, updated_block, 1)
            print(f"✅ Applied updates to class: {class_name}")

            # Verify the replacement worked
            if updated_block in updated_js_code:
                print(f"  ✅ Replacement verified")
            else:
                print(f"  ❌ Replacement failed - updated block not found")
        else:
            print(f"❌ ERROR: Original block not found in js_code for class: {class_name}")
            # Try to find partial matches for debugging
            if original_block[:50] in updated_js_code:
                print(f"  Found partial match (first 50 chars)")
            if original_block[-50:] in updated_js_code:
                print(f"  Found partial match (last 50 chars)")

            # Last resort: try to find the block by class name and replace manually
            class_pattern = rf'(const\s+\w+\s*=\s*new\s+Class\s*\([^)]*"{re.escape(class_name)}"[^)]*\)\s*;)'
            class_match = re.search(class_pattern, updated_js_code, re.DOTALL)
            if class_match:
                print(f"  Found class by name pattern, attempting manual replacement")
                updated_js_code = updated_js_code.replace(class_match.group(1), updated_block, 1)
                print(f"  ✅ Manual replacement successful")
            else:
                print(f"  ❌ Could not find class by name pattern either")
    else:
        print(f"No changes needed for class: {extract_class_name(original_block)}")

# Verify the changes were made
print(f"\nVerifying changes in final JS code...")
verification_passed = True

for i, updated_block in class_updates.items():
    original_block = matches[i]
    if updated_block != original_block:
        class_name = extract_class_name(original_block)
        if updated_block in updated_js_code:
            print(f"✅ Verified: Updated block exists in final JS code for {class_name}")
        else:
            print(f"❌ ERROR: Updated block NOT found in final JS code for {class_name}")
            verification_passed = False

if verification_passed:
    # Save updated JS file with explicit file handling
    try:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            f.write(updated_js_code)
        print(f"\n🎉 Done! Output written to {OUTPUT_FILE}")
        print(f"File size: {len(updated_js_code)} characters")

        # Double-check the file was actually written
        with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
            written_content = f.read()

        if written_content == updated_js_code:
            print(f"✅ File write verified successfully")
        else:
            print(f"❌ File write verification failed - content mismatch")
            print(f"Expected length: {len(updated_js_code)}, Actual length: {len(written_content)}")

    except Exception as e:
        print(f"❌ Error writing file: {e}")

else:
    print(f"\n❌ Verification failed. Check the script logic before saving.")
    # Save anyway for debugging with error info
    try:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            f.write(updated_js_code)
        print(f"⚠️ File saved anyway for debugging purposes: {OUTPUT_FILE}")
    except Exception as e:
        print(f"❌ Error writing debug file: {e}")

# Final summary
print(f"\n=== SUMMARY ===")
print(f"Total rows processed: {len(df)}")
print(f"Classes updated: {len(class_updates)}")
print(f"Original JS length: {len(js_code)} characters")
print(f"Updated JS length: {len(updated_js_code)} characters")
print(f"Changes made: {len(js_code) != len(updated_js_code)}")