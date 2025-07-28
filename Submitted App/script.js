let curentFilters = [];
let bookmarks = [];
let currentAnimations = [];

const unfilled= "style=\"font-variation-settings:'FILL' 0\"";


function load() {
  if(sessionStorage.getItem("bookmarks") === null) {
    bookmarks = [];
} else {
  bookmarks = sessionStorage.getItem("bookmarks").split(",");
}
}

function updateFilterButtons() {
  // Get all unique subjects from the courseMap
  const allCourses = Array.from(courseMap.values());
  const subjects = [...new Set(allCourses.map(course => course.getSubject()))];
  
  // Find the filter area
  const filterArea = document.querySelector('.filterArea');
  if (filterArea) {
    let filterHTML = '';
    
    // Add subject filters
    subjects.forEach(subject => {
      filterHTML += `<span class="filterChip"><md-filter-chip label="${subject}" onclick="filter(this.label)"></md-filter-chip></span>`;
    });
    
    // Add bookmarked filter
    filterHTML += `<span class="filterChip"><md-filter-chip label="Bookmarked" onclick="filter(this.label)"></md-filter-chip></span>`;
    
    filterArea.innerHTML = filterHTML;
  }
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
  console.log("All course names:", allCourses.map(c => c.getClassName()));
  
  if(curentFilters.length ===0) {
     for (let i = 0; i < allCourses.length; i++) {
            const course = allCourses[i];
            console.log("Processing course:", course.getClassName());
            if(bookmarks.includes(course.getClassName())) {
                  totalHTML += makeHTML(course, true);
                } else {
                  totalHTML += makeHTML(course, false);
                }
    }
  } else {
    for (let i = 0; i < allCourses.length; i++) {
            const course = allCourses[i];
            if(curentFilters.includes("bookmarked")) {
              if(bookmarks.includes(course.getClassName())) {
                totalHTML += makeHTML(course, true);
              }
            } 
            if(curentFilters.includes(course.getSubject())) {
              if(curentFilters.includes("bookmarked")) {
                
              } else {
            if(bookmarks.includes(course.getClassName())) {
                  totalHTML += makeHTML(course, true);
                } else {
                  totalHTML += makeHTML(course, false);
                }
            }
            }
            
    }
  }
    body.innerHTML = totalHTML;
}

function makeHTML(course, fill) {
  let bodyHTML = "";
  console.log('makeHTML called for course:', course.getClassName());
  
  if(fill === true) {
            let classCardDiv = "<div class=\"classCard " + course.getSubject() + "\" onclick=\"openClass(\'" + course.getClassName() + "\')\" >";
            let headerDiv = "<div class=\"classHeader\">" + "<span class=\"material-symbols-rounded\"" + unfilled + ">" + course.getIcon() + "</span><div class=\"className\" onclick=\"openClass(\'" + course.getClassName() + "\')\"><u>" + course.getClassName() + "</u></div><span class=\"material-symbols-rounded\" style=\"cursor: pointer;font-variation-settings:'FILL' 1\" onclick=\"fav(this)\" id=\"" + course.getClassName() + "\">bookmark</span></div>";
            let starDiv = "<div class=\"classRate\">" + numberToStars(course.getAverageRating()) + "</div>";
            let descriptionDiv = "<div class=\"classDes\">" + course.getDescription() + "</div></div>";
            let htmlCard = classCardDiv + headerDiv + starDiv + descriptionDiv;
            bodyHTML += htmlCard;
  } else {
    let classCardDiv = "<div class=\"classCard " + course.getSubject() + "\"  >";
    let headerDiv = "<div class=\"classHeader\">" + "<span class=\"material-symbols-rounded\"" + unfilled + ">" + course.getIcon() + "</span><div class=\"className\" onclick=\"openClass(\'" + course.getClassName() + "\')\"><u>" + course.getClassName() + "</u></div><span class=\"material-symbols-rounded\" style=\"cursor: pointer;font-variation-settings:'FILL' 0\" onclick=\"fav(this)\" id=\"" + course.getClassName() + "\">bookmark</span></div>";
            let starDiv = "<div class=\"classRate\">" + numberToStars(course.getAverageRating()) + "</div>";
            let descriptionDiv = "<div class=\"classDes\">" + course.getDescription() + "</div></div>";
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
  if(curentFilters.includes(type.toLowerCase())) {
    curentFilters[curentFilters.indexOf(type.toLowerCase())] = "";
  } else {
    curentFilters.push(type.toLowerCase());
  }
  curentFilters = curentFilters.filter(item => item !== "");
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

function openClass(className) {
    // Navigate to class page with the course name
    alert('openClass called with: ' + className);
    console.log('openClass called with:', className);
    window.location.href = `classPage.html?course=${encodeURIComponent(className)}`;
}

