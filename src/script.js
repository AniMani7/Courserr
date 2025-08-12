let curentFilters = [];
let bookmarks = [];
let currentAnimations = [];
let searchQuery = '';

const unfilled= "style=\"font-variation-settings:'FILL' 0\"";

function updateFilterButtons() {
  // Get all unique subjects from the courseMap
  const allCourses = Array.from(courseMap.values());
  const subjects = [...new Set(allCourses.map(course => course.getSubject()))];
  
  console.log("Available subjects:", subjects);
  
  // Find the filter area
  const filterArea = document.querySelector('.filterArea');
  if (filterArea) {
    let filterHTML = '';
    
    // Add subject filters dynamically
    subjects.forEach(subject => {
      filterHTML += `<span class="filterChip"><md-filter-chip label="${subject}" onclick="filter(this.label)"></md-filter-chip></span>`;
    });
    
    // Add bookmarked filter
    filterHTML += `<span class="filterChip"><md-filter-chip label="Bookmarked" onclick="filter(this.label)"></md-filter-chip></span>`;
    
    filterArea.innerHTML = filterHTML;
    
    // Update the visual state of all filter chips based on current filters
    const filterChips = document.querySelectorAll('md-filter-chip');
    filterChips.forEach(chip => {
      const chipLabel = chip.label.toLowerCase();
      if (curentFilters.includes(chipLabel)) {
        chip.selected = true;
      } else {
        chip.selected = false;
      }
    });
  }
}

function load() {
  if(sessionStorage.getItem("bookmarks") === null) {
    bookmarks = [];
  } else {
    bookmarks = sessionStorage.getItem("bookmarks").split(",");
  }
  curentFilters = [];
  console.log("Page loaded, bookmarks and filters initialized");
  
  // Initialize filter chip states after a short delay to ensure DOM is ready
  setTimeout(() => {
    updateFilterButtons();
  }, 100);
}

function dothing() {
  let body = document.getElementById('classGrid');
  let totalHTML = "";
  
  // Check if courseMap exists and has data
  if (typeof courseMap === 'undefined' || courseMap.size === 0) {
    console.error("courseMap is not available or empty");
    body.innerHTML = "<p>No courses available</p>";
    return;
  }
  
  // Update filter buttons dynamically
  updateFilterButtons();
  
  // Get all courses from the courseMap
  const allCourses = Array.from(courseMap.values());
  console.log("Total courses loaded:", allCourses.length);
  console.log("Current filters:", curentFilters);
  console.log("Search query:", searchQuery);
  
  if(curentFilters.length === 0 && !searchQuery) {
     for (let i = 0; i < allCourses.length; i++) {
            const course = allCourses[i];
            if(bookmarks.includes(course.getClassName())) {
                  totalHTML += makeHTML(course, true);
                } else {
                  totalHTML += makeHTML(course, false);
                }
    }
  } else {
    for (let i = 0; i < allCourses.length; i++) {
            const course = allCourses[i];
            let shouldShow = false;
            
            // Check search query first
            if (searchQuery) {
                const courseName = course.getClassName().toLowerCase();
                const courseSubject = course.getSubject().toLowerCase();
                const courseDescription = course.getDescription().toLowerCase();
                
                if (courseName.includes(searchQuery) || 
                    courseSubject.includes(searchQuery) || 
                    courseDescription.includes(searchQuery)) {
                    shouldShow = true;
                }
            } else {
                shouldShow = true; // If no search query, show by default
            }
            
            // Then apply filter logic if there are active filters
            if (shouldShow && curentFilters.length > 0) {
                shouldShow = false; // Reset and check filters
                
                for (let j = 0; j < curentFilters.length; j++) {
                  const filter = curentFilters[j];
                  
                  if (filter === "bookmarked") {
                    if (bookmarks.includes(course.getClassName())) {
                      shouldShow = true;
                      break;
                    }
                  } else if (filter.toLowerCase() === course.getSubject().toLowerCase()) {
                    shouldShow = true;
                    break;
                  }
                }
            }
            
            if (shouldShow) {
              if(bookmarks.includes(course.getClassName())) {
                totalHTML += makeHTML(course, true);
              } else {
                totalHTML += makeHTML(course, false);
              }
            }
    }
  }
    body.innerHTML = totalHTML;
}

function makeHTML(course, fill) {
  let bodyHTML = "";
  console.log('makeHTML called for course:', course.getClassName());
  // Always use lowercase, no spaces, for subject class assignment
  const subjectClass = course.getSubject().replace(/\s+/g, '').toLowerCase();
  if (fill === true) {
    let classCardDiv = `<div class="classCard ${subjectClass}" onclick="openClass('${course.getClassName()}')" >`;
    let headerDiv = `<div class="classHeader">` + `<span class="material-symbols-rounded"${unfilled}>${course.getIcon()}</span><div class="className" onclick="openClass('${course.getClassName()}')"><u>${course.getClassName()}</u></div><span class="material-symbols-rounded" style="cursor: pointer;font-variation-settings:'FILL' 1" onclick="fav(this)" id="${course.getClassName()}">bookmark</span></div>`;
    // Add subjectClass to classRate for color
    let starDiv = `<div class="classRate ${subjectClass}">` + numberToStars(course.getAverageRating()) + `</div>`;
    let descriptionDiv = `<div class="classDes">${course.getDescription()}</div></div>`;
    let htmlCard = classCardDiv + headerDiv + starDiv + descriptionDiv;
    bodyHTML += htmlCard;
  } else {
    let classCardDiv = `<div class="classCard ${subjectClass}"  >`;
    let headerDiv = `<div class="classHeader">` + `<span class="material-symbols-rounded"${unfilled}>${course.getIcon()}</span><div class="className" onclick="openClass('${course.getClassName()}')"><u>${course.getClassName()}</u></div><span class="material-symbols-rounded" style="cursor: pointer;font-variation-settings:'FILL' 0" onclick="fav(this)" id="${course.getClassName()}">bookmark</span></div>`;
    // Add subjectClass to classRate for color
    let starDiv = `<div class="classRate ${subjectClass}">` + numberToStars(course.getAverageRating()) + `</div>`;
    let descriptionDiv = `<div class="classDes">${course.getDescription()}</div></div>`;
    let htmlCard = classCardDiv + headerDiv + starDiv + descriptionDiv;
    bodyHTML += htmlCard;
  }
  console.log('Generated HTML for', course.getClassName(), ':', bodyHTML.substring(0, 200) + '...');
  return bodyHTML;
}

function numberToStars(rating) {
  let output = "";
  for(i = 0; i < 5; i++) {
    if(i < rating) {
      output += "<span class=\"material-symbols-rounded\">star</span>";
    } else {
      output += "<span class=\"material-symbols-rounded\"" + unfilled + ">star</span>";
    }
  }
  return(output);
}

function loopThroughClasses() {
    // Loop through all courses from courseMap
    if (typeof courseMap === 'undefined' || courseMap.size === 0) {
        console.error("courseMap is not available");
        return;
    }
    
    const allCourses = Array.from(courseMap.values());
    for (let i = 0; i < allCourses.length; i++) {
        const course = allCourses[i];
        
        // Access and display various properties of each class
        alert(`Course: ${course.getSubject()}`);
        alert(`Average Rating: ${course.getAverageRating()}`);
        alert(`Average Grade: ${course.getAverageGrade()}`);
        alert(`Duration: ${course.getDuration()}`);
        alert(`Description: ${course.getDescription()}`);
        alert(`---`);  // Separator between courses
    }
}

function filter(type) {
  let body = document.getElementById('classGrid');
  const filterType = type.toLowerCase();
  
  if(curentFilters.includes(filterType)) {
    curentFilters[curentFilters.indexOf(filterType)] = "";
  } else {
    curentFilters.push(filterType);
  }
  curentFilters = curentFilters.filter(item => item !== "");
  
  console.log("Filter applied:", type, "Current filters:", curentFilters);
  
  // Update the visual state of the filter chip
  const filterChips = document.querySelectorAll('md-filter-chip');
  filterChips.forEach(chip => {
    if (chip.label.toLowerCase() === filterType) {
      if (curentFilters.includes(filterType)) {
        chip.selected = true;
      } else {
        chip.selected = false;
      }
    }
  });
  
  body.innerHTML = "";
  dothing();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] with the element at random index
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function searchCourses() {
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearSearch');
    
    searchQuery = searchInput.value.toLowerCase().trim();
    
    // Show/hide clear button
    if (searchQuery.length > 0) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
    
    // Refresh the course display
    dothing();
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearSearch');
    
    searchInput.value = '';
    searchQuery = '';
    clearButton.style.display = 'none';
    
    // Refresh the course display
    dothing();
}

function fav(element) {
   let fillValue;
   //alert(element.id);
    if (element.style.cssText.includes("1")) {
        fillValue = "'FILL' 0";  // If it's filled, switch to unfilled.
        bookmarks[bookmarks.indexOf(element.id)] = "";
    } else {
        fillValue = "'FILL' 1";  // If it's unfilled, switch to filled.
        bookmarks.push(element.id);
    }
    element.style.fontVariationSettings = fillValue;
    bookmarks = bookmarks.filter(item => item !== "");
    sessionStorage.setItem("bookmarks", bookmarks);
    //alert(sessionStorage.getItem("bookmarks"));
}

function openClass(className) {
    console.log('Opening class:', className);
    window.location.href = './classPage.html?category=' + encodeURIComponent(classToOpen);
}