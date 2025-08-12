// this file handles loading individual class pages
// pretty much just takes the course name from URL and displays all the info

function loadClassData() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  let courseName = '';

  if (categoryParam) {
      courseName = decodeURIComponent(categoryParam);
      console.log('found course from URL:', courseName);
  } else {
      // fallback for older URLs
      const courseParam = urlParams.get('course');
      if (courseParam) {
          courseName = courseParam;
          console.log('got course from fallback:', courseName);
      }
  }
  
  if (!courseMap) {
    console.error('courseMap not loaded yet!');
    return null;
  }
  
  // try exact match first
  if (courseName && courseMap.has(courseName)) {
    const course = courseMap.get(courseName);
    console.log('found exact match:', course.getClassName());
    return course;
  } 
  
  // try case insensitive match
  if (courseName && courseMap) {
    console.log('exact match failed, trying case-insensitive...');
    const allCourses = Array.from(courseMap.keys());
    
    const match = allCourses.find(name => name.toLowerCase() === courseName.toLowerCase());
    if (match) {
      console.log('Found case-insensitive match:', match);
      return courseMap.get(match);
    }
    
    // try partial matching
    const partialMatch = allCourses.find(name => 
      name.toLowerCase().includes(courseName.toLowerCase()) ||
      courseName.toLowerCase().includes(name.toLowerCase())
    );
    if (partialMatch) {
      console.log('Found partial match:', partialMatch);
      return courseMap.get(partialMatch);
    }
  }
  
  // course not found
  console.error('course not found:', courseName);
  if (courseMap) {
    console.log('Available courses are:');
    Array.from(courseMap.keys()).forEach((name, index) => {
      console.log(`${index + 1}. "${name}"`);
    });
  }
  return null;
}

function displayCourseDetails() {
  console.log('loading course details...');
  const course = loadClassData();
  
  if (!course) {
    console.error('no course data available');
    return;
  }
  
  console.log('course loaded:', course.getClassName());
  
  // update the page title
  document.title = course.getClassName() + " - Courserr";
  
  // get all the DOM elements we need to update
  const classNameEl = document.getElementById('className');
  const classPageClassNameEl = document.getElementById('classPageClassName');
  const teachersEl = document.getElementById('teachers');
  const starRateEl = document.getElementById('starRate');
  
  // update the course name in both places
  if (classNameEl) classNameEl.textContent = course.getClassName();
  if (classPageClassNameEl) classPageClassNameEl.textContent = course.getClassName();
  
  // set the teacher/department
  if (teachersEl) teachersEl.textContent = course.getSubject() + " Department";
  
  // create the star rating display
  if (starRateEl) {
    let starsHTML = "";
    const rating = course.getAverageRating();
    console.log('course rating:', rating);
    
    // create 5 stars, filled or empty based on rating
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starsHTML += "<span class=\"material-symbols-rounded\" style=\"font-variation-settings:'FILL' 1;font-size: 5vh\">star</span>";
      } else {
        starsHTML += "<span class=\"material-symbols-rounded\" style=\"font-variation-settings:'FILL' 0;font-size: 5vh\">star</span>";
      }
    }
    starRateEl.innerHTML = starsHTML;
  }
  
  // update prerequisites section
  const prereqEl = document.querySelector('.classPageClassPrereq ul');
  if (prereqEl) {
    if (course.getPrerequisite() === "None") {
      prereqEl.innerHTML = "<li>None</li>";
    } else {
      prereqEl.innerHTML = `<li>${course.getPrerequisite()}</li>`;
    }
  }
  
  // update the description
  const descEl = document.querySelector('.classPageClassDecription p');
  if (descEl) {
    descEl.textContent = course.getDescription();
  }
  
  // update the quick hits section with course stats
  const quickHitsEl = document.querySelector('.classPageBORDERS ul');
  if (quickHitsEl) {
    quickHitsEl.innerHTML = `
      <li>Homework: ~${course.getAverageTimePerWeek() || 2} hours/week</li>
      <li>Average Grade: ${course.getAverageGrade() || 'B'}</li>
      <li>Duration: ${course.getDuration()}</li>
      <li>Grade Level: ${course.getUsualGrade()}</li>
      <li>Dual Credit: ${course.getDualCredit() ? 'Yes' : 'No'}</li>
      <li>Honors/AP: ${course.getHonorsAP()}</li>
    `;
  }
  
  // add tags dynamically from the course object
const tagsEl = document.querySelector('.classPageClassTagsArea');
if (tagsEl) {
  let tagsHTML = "";
  const courseTags = course.getTags();
  if (courseTags && courseTags.length > 0) {
    // Generate tags from the course's tag array
    courseTags.forEach(tag => {
      tagsHTML += `<md-suggestion-chip label="${tag}"></md-suggestion-chip>`;
    });
  } else {
    tagsHTML = `
      <md-suggestion-chip label="Academic"></md-suggestion-chip>
      <md-suggestion-chip label="Core Subject"></md-suggestion-chip>
    `;
  }
  tagsEl.innerHTML = tagsHTML;
}
  
  // create the graph (with a small delay to make sure everything is loaded)
  setTimeout(() => {
    createDynamicGraph(course);
  }, 100);
  
  // handle comments section
  const commentsContainer = document.getElementById('commentsContainer');
  if (!commentsContainer) {
    // if comments container doesn't exist, create it and remove old comment boxes
    const existingComments = document.querySelectorAll('.commentBox');
    if (existingComments.length > 0) {
      const firstComment = existingComments[0];
      const newContainer = document.createElement('div');
      newContainer.id = 'commentsContainer';
      newContainer.innerHTML = '<!-- Comments will be added here dynamically -->';
      firstComment.parentNode.insertBefore(newContainer, firstComment);
      
      // remove all the old comment boxes
      existingComments.forEach(comment => comment.remove());
    }
  }
  
  // add the actual comments from course data
  const commentsContainerFinal = document.getElementById('commentsContainer');
  if (commentsContainerFinal && course.getComments().length > 0) {
    let commentsHTML = '';
    course.getComments().forEach((comment, index) => {
      const rating = course.getRatings()[index] || course.getAverageRating();
      commentsHTML += `
        <div class="commentBox">
          <div class="textt">${comment}</div>
          <div class="ratee">${rating}</div>
        </div>
      `;
    });
    commentsContainerFinal.innerHTML = commentsHTML;
  } else if (commentsContainerFinal) {
    // if no comments, show a message
    commentsContainerFinal.innerHTML = `
      <div class="commentBox">
        <div class="textt">No reviews available for this course yet. Be the first to share your experience!</div>
        <div class="ratee">-</div>
      </div>
    `;
  }
  
  console.log('finished loading course:', course.getClassName());
}

function createDynamicGraph(course) {
  console.log('creating graph for:', course.getClassName());
  
  // make sure Chart.js is loaded
  if (typeof Chart === 'undefined') {
    console.error('Chart.js not loaded!');
    return;
  }
  
  // find the canvas element
  const canvas = document.getElementById('myChart');
  if (!canvas) {
    console.error('canvas element not found');
    return;
  }
  
  // test if we can create a chart first
  try {
    const testChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Test'],
        datasets: [{
          label: 'Test',
          data: [1],
          borderColor: 'red'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
    console.log('test chart worked, destroying it...');
    testChart.destroy(); // clean up test chart
  } catch (error) {
    console.error('test chart failed:', error);
    return;
  }
  
  // get the course data we need
  const hours = course.getAverageTimePerWeek();
  const grades = course.getGrades();
  
  console.log('course hours:', hours);
  console.log('course grades:', grades);
  
  // convert letter grades to numbers for the graph
  const gradeValues = {
    'A+': 13, 'A': 12, 'A-': 11,
    'B+': 10, 'B': 9, 'B-': 8,
    'C+': 7, 'C': 6, 'C-': 5,
    'D+': 4, 'D': 3, 'D-': 2,
    'F': 1
  };
  
  // create data points from the actual course data
  const dataPoints = [];
  
  // if we have both hours and grades, use them
  if (hours && grades.length > 0) {
    const minLength = Math.min(hours.length, grades.length);
    for (let i = 0; i < minLength; i++) {
      const gradeValue = gradeValues[grades[i]];
      if (gradeValue && hours[i] >= 0) {
        dataPoints.push({
          x: gradeValue,
          y: hours[i]
        });
      }
    }
  }
  
  // if we don't have enough data, create some sample points
  if (dataPoints.length < 3) {
    const avgHours = course.getAverageTimePerWeek();
    const avgGrade = course.getAverageGrade();
    const avgGradeValue = gradeValues[avgGrade] || 9; // default to B
    
    console.log('creating sample data. avg hours:', avgHours, 'avg grade:', avgGrade);
    
    // create some points around the average
    dataPoints.push(
      { x: avgGradeValue - 1, y: Math.max(0, avgHours - 1) },
      { x: avgGradeValue, y: avgHours },
      { x: avgGradeValue + 1, y: avgHours + 1 }
    );
  }
  
  console.log('final data points:', dataPoints);
  
  // calculate the trend line
  function calcTrendLine(data) {
    let n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

    data.forEach(point => {
      sumX += point.x;
      sumY += point.y;
      sumXY += point.x * point.y;
      sumX2 += point.x * point.x;
    });

    let slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    let intercept = (sumY - slope * sumX) / n;

    return { slope, intercept };
  }

  const { slope, intercept } = calcTrendLine(dataPoints);

  // create points for the trend line
  const trendLinePoints = [];
  for (let x = 1; x <= 13; x++) {
    trendLinePoints.push({ x: x, y: slope * x + intercept });
  }

  console.log('creating chart with', dataPoints.length, 'data points');

  try {
    // create the actual chart
    const chart = new Chart("myChart", {
      type: "scatter",
      data: {
        datasets: [{
          label: `${course.getClassName()} Data`,
          pointRadius: 8,
          pointBackgroundColor: "rgba(69, 196, 176, 0.8)",
          pointBorderColor: "rgba(69, 196, 176, 1)",
          pointBorderWidth: 2,
          data: dataPoints
        }, {
          label: 'Trend Line',
          type: 'line',
          data: trendLinePoints,
          borderColor: "rgba(19, 103, 138, 1)",
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          borderDash: [5, 5]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontColor: "#000000",
            fontSize: 14,
            fontStyle: 'bold'
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              min: 1,
              max: 13,
              callback: function(value) {
                const gradeLabels = {
                  1: 'F', 2: 'D-', 3: 'D', 4: 'D+', 5: 'C-', 6: 'C', 7: 'C+', 
                  8: 'B-', 9: 'B', 10: 'B+', 11: 'A-', 12: 'A', 13: 'A+'
                };
                return gradeLabels[value];
              },
              fontColor: "#000000",
              fontSize: 14
            },
            scaleLabel: {
              display: true,
              labelString: 'Grade',
              fontColor: "#000000",
              fontSize: 16,
              fontStyle: 'bold'
            },
            gridLines: {
              color: "rgba(200,200,200,0.2)"
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: Math.max(10, Math.ceil(Math.max(...dataPoints.map(p => p.y)) + 2)),
              fontColor: "#000000",
              fontSize: 14
            },
            scaleLabel: {
              display: true,
              labelString: 'Hours per Week',
              fontColor: "#000000",
              fontSize: 16,
              fontStyle: 'bold'
            },
            gridLines: {
              color: "rgba(200,200,200,0.2)"
            }
          }]
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
          }
        },
        tooltips: {
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontColor: "#ffffff",
          bodyFontColor: "#ffffff",
          borderColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          callbacks: {
            label: function(tooltipItem, data) {
              if (tooltipItem.datasetIndex === 0) {
                const gradeValue = tooltipItem.xLabel;
                const gradeLabels = {
                  1: 'F', 2: 'D-', 3: 'D', 4: 'D+', 5: 'C-', 6: 'C', 7: 'C+', 
                  8: 'B-', 9: 'B', 10: 'B+', 11: 'A-', 12: 'A', 13: 'A+'
                };
                const hours = tooltipItem.yLabel;
                return `Grade: ${gradeLabels[gradeValue]}, Hours: ${hours.toFixed(1)}/week`;
              }
              return data.datasets[tooltipItem.datasetIndex].label;
            }
          }
        }
      }
    });
    
    console.log('chart created successfully!');
  } catch (error) {
    console.error('error creating chart:', error);
  }
}