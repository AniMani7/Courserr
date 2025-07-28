console.log('loadClass.js is loading!');

function loadClassData() {
  // Get course name from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  let courseName = '';

  if (categoryParam) {
      // Convert back from underscore format to space format
      courseName = categoryParam.replace(/_/g, ' ');
      console.log('Course name from URL:', courseName);
  } else {
      console.error('No category parameter found in URL');
      // Fallback to course parameter if category doesn't exist
      const courseParam = urlParams.get('course');
      if (courseParam) {
          courseName = courseParam;
          console.log('Course name from fallback parameter:', courseName);
      }
  }
  
  console.log('loadClassData called with courseName:', courseName);
  console.log('courseMap exists:', typeof courseMap !== 'undefined');
  if (typeof courseMap !== 'undefined') {
    console.log('courseMap size:', courseMap.size);
    console.log('courseMap keys:', Array.from(courseMap.keys()));
  }
  
  if (courseName && courseMap.has(courseName)) {
    const course = courseMap.get(courseName);
    console.log('Course found:', course.getClassName());
    return course;
  } else {
    console.error('Course not found:', courseName);
    return null;
  }
}

function displayCourseDetails() {
  console.log('displayCourseDetails called');
  const course = loadClassData();
  if (course) {
    console.log('Course loaded successfully:', course.getClassName());
    // Update page title
    document.title = course.getClassName() + " - Courserr";
    
    // Update course information on the page using the correct element IDs
    const classNameElement = document.getElementById('className');
    const classPageClassNameElement = document.getElementById('classPageClassName');
    const teachersElement = document.getElementById('teachers');
    const starRateElement = document.getElementById('starRate');
    
    console.log('Found elements:', {
      classNameElement: !!classNameElement,
      classPageClassNameElement: !!classPageClassNameElement,
      teachersElement: !!teachersElement,
      starRateElement: !!starRateElement
    });
    
    if (classNameElement) classNameElement.textContent = course.getClassName();
    if (classPageClassNameElement) classPageClassNameElement.textContent = course.getClassName();
    if (teachersElement) teachersElement.textContent = course.getSubject() + " Department";
    if (starRateElement) {
      // Create star rating display
      let starsHTML = "";
      const rating = course.getAverageRating();
      console.log('Course rating:', rating);
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          starsHTML += "<span class=\"material-symbols-rounded\" style=\"font-variation-settings:'FILL' 1;font-size: 5vh\">star</span>";
        } else {
          starsHTML += "<span class=\"material-symbols-rounded\" style=\"font-variation-settings:'FILL' 0;font-size: 5vh\">star</span>";
        }
      }
      starRateElement.innerHTML = starsHTML;
    }
    
    // Update prerequisites
    const prereqElement = document.querySelector('.classPageClassPrereq ul');
    if (prereqElement) {
      if (course.getPrerequisite() === "None") {
        prereqElement.innerHTML = "<li>None</li>";
      } else {
        prereqElement.innerHTML = `<li>${course.getPrerequisite()}</li>`;
      }
    }
    
    // Update description
    const descriptionElement = document.querySelector('.classPageClassDecription p');
    if (descriptionElement) {
      descriptionElement.textContent = course.getDescription();
    }
    
    // Update Quick Hits section
    const quickHitsElement = document.querySelector('.classPageBORDERS ul');
    if (quickHitsElement) {
      quickHitsElement.innerHTML = `
        <li>Homework: ~${course.getAverageTimePerWeek() || 2} hours/week</li>
        <li>Average Grade: ${course.getAverageGrade() || 'B'}</li>
        <li>Duration: ${course.getDuration()}</li>
        <li>Grade Level: ${course.getUsualGrade()}</li>
        <li>Dual Credit: ${course.getDualCredit() ? 'Yes' : 'No'}</li>
        <li>Honors/AP: ${course.getHonorsAP()}</li>
      `;
    }
    
    // Update tags based on course subject
    const tagsElement = document.querySelector('.classPageClassTagsArea');
    if (tagsElement) {
      let tagsHTML = "";
      if (course.getSubject() === "Agriculture") {
        tagsHTML = `
          <md-suggestion-chip label="Hands-on Learning"></md-suggestion-chip>
          <md-suggestion-chip label="Practical Skills"></md-suggestion-chip>
          <md-suggestion-chip label="Science-based"></md-suggestion-chip>
          <md-suggestion-chip label="Career Preparation"></md-suggestion-chip>
        `;
      } else {
        tagsHTML = `
          <md-suggestion-chip label="Academic"></md-suggestion-chip>
          <md-suggestion-chip label="Core Subject"></md-suggestion-chip>
        `;
      }
      tagsElement.innerHTML = tagsHTML;
    }
    
    // Create dynamic graph based on course data
    setTimeout(() => {
      createDynamicGraph(course);
    }, 100);
    
    // Update comments dynamically
    const commentsContainer = document.getElementById('commentsContainer');
    if (!commentsContainer) {
      // If commentsContainer doesn't exist, create it and replace existing comment boxes
      const existingComments = document.querySelectorAll('.commentBox');
      if (existingComments.length > 0) {
        const firstComment = existingComments[0];
        const newContainer = document.createElement('div');
        newContainer.id = 'commentsContainer';
        newContainer.innerHTML = '<!-- Comments will be added here dynamically -->';
        firstComment.parentNode.insertBefore(newContainer, firstComment);
        
        // Remove all existing comment boxes
        existingComments.forEach(comment => comment.remove());
      }
    }
    
    // Add comments from course data
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
      // If no comments from course data, show a message
      commentsContainerFinal.innerHTML = `
        <div class="commentBox">
          <div class="textt">No reviews available for this course yet. Be the first to share your experience!</div>
          <div class="ratee">-</div>
        </div>
      `;
    }
    
    console.log('Course loaded:', course.getClassName());
    console.log('Subject:', course.getSubject());
    console.log('Rating:', course.getAverageRating());
    console.log('Description:', course.getDescription());
  } else {
    console.error('No course data available');
  }
}

function createDynamicGraph(course) {
  console.log('createDynamicGraph called for course:', course.getClassName());
  
  // Check if Chart.js is available
  if (typeof Chart === 'undefined') {
    console.error('Chart.js is not loaded');
    return;
  }
  
  console.log('Chart.js is available:', typeof Chart);
  
  // Check if canvas element exists
  const canvas = document.getElementById('myChart');
  if (!canvas) {
    console.error('Canvas element with id "myChart" not found');
    return;
  }
  
  console.log('Canvas element found:', canvas);
  console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
  
  // Test if we can create a simple chart first
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
    console.log('Test chart created successfully');
    testChart.destroy(); // Remove test chart
  } catch (error) {
    console.error('Error creating test chart:', error);
    return;
  }
  
  // Get course hours and grades
  const hours = course.getAverageTimePerWeek();
  const grades = course.getGrades();
  
  console.log('Course hours:', hours);
  console.log('Course grades:', grades);
  
  // Convert letter grades to numeric values for the graph
  const letterToValue = {
    'A+': 13, 'A': 12, 'A-': 11,
    'B+': 10, 'B': 9, 'B-': 8,
    'C+': 7, 'C': 6, 'C-': 5,
    'D+': 4, 'D': 3, 'D-': 2,
    'F': 1
  };
  
  // Create data points from actual course data
  const xyValues = [];
  
  // If we have both hours and grades, use them
  if (hours && grades.length > 0) {
    const minLength = Math.min(hours.length, grades.length);
    for (let i = 0; i < minLength; i++) {
      const gradeValue = letterToValue[grades[i]];
      if (gradeValue && hours[i] >= 0) {
        xyValues.push({
          x: gradeValue,
          y: hours[i]
        });
      }
    }
  }
  
  // If no data or insufficient data, create some sample points based on average
  if (xyValues.length < 3) {
    const avgHours = course.getAverageTimePerWeek();
    const avgGrade = course.getAverageGrade();
    const avgGradeValue = letterToValue[avgGrade] || 9; // Default to B if no grade
    
    console.log('Creating sample data points. Avg hours:', avgHours, 'Avg grade:', avgGrade);
    
    // Create sample data points around the average
    xyValues.push(
      { x: avgGradeValue - 1, y: Math.max(0, avgHours - 1) },
      { x: avgGradeValue, y: avgHours },
      { x: avgGradeValue + 1, y: avgHours + 1 }
    );
  }
  
  console.log('Final xyValues for graph:', xyValues);
  
  // Linear regression function
  function linearRegression(data) {
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

  const { slope, intercept } = linearRegression(xyValues);

  const lineValues = [];
  for (let x = 1; x <= 13; x++) {
    lineValues.push({ x: x, y: slope * x + intercept });
  }

  console.log('Creating chart with data points:', xyValues.length);

  try {
    // Create the chart
    const chart = new Chart("myChart", {
      type: "scatter",
      data: {
        datasets: [{
          label: `${course.getClassName()} Data`,
          pointRadius: 8,
          pointBackgroundColor: "rgba(69, 196, 176, 0.8)",
          pointBorderColor: "rgba(69, 196, 176, 1)",
          pointBorderWidth: 2,
          data: xyValues
        }, {
          label: 'Trend Line',
          type: 'line',
          data: lineValues,
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
                const grades = {
                  1: 'F', 2: 'D-', 3: 'D', 4: 'D+', 5: 'C-', 6: 'C', 7: 'C+', 
                  8: 'B-', 9: 'B', 10: 'B+', 11: 'A-', 12: 'A', 13: 'A+'
                };
                return grades[value];
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
              max: Math.max(10, Math.ceil(Math.max(...xyValues.map(p => p.y)) + 2)),
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
                const grades = {
                  1: 'F', 2: 'D-', 3: 'D', 4: 'D+', 5: 'C-', 6: 'C', 7: 'C+', 
                  8: 'B-', 9: 'B', 10: 'B+', 11: 'A-', 12: 'A', 13: 'A+'
                };
                const hours = tooltipItem.yLabel;
                return `Grade: ${grades[gradeValue]}, Hours: ${hours.toFixed(1)}/week`;
              }
              return data.datasets[tooltipItem.datasetIndex].label;
            }
          }
        }
      }
    });
    
    console.log('Chart created successfully:', chart);
  } catch (error) {
    console.error('Error creating chart:', error);
  }
}