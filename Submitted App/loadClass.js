console.log('loadClass.js is loading!');

function loadClassData() {
  const params = new URLSearchParams(window.location.search);
  let courseName = params.get('course');
  
  // If course parameter doesn't exist, try category parameter (for backward compatibility)
  if (!courseName) {
    courseName = params.get('category');
    if (courseName) {
      // Convert underscores back to spaces for category parameter
      courseName = courseName.replace(/_/g, ' ');
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
            <md-chip-set class="tagss">
              <md-suggestion-chip label="Course Review"></md-suggestion-chip>
              <md-suggestion-chip label="${course.getSubject()}"></md-suggestion-chip>
            </md-chip-set>
            <div class="symbols">
              <span class="material-symbols-rounded" style="font-variation-settings:'FILL' 0; font-size: 5vh" onclick="fill(this)">thumb_up</span>
              <span class="material-symbols-rounded" style="font-variation-settings:'FILL' 0; font-size: 5vh" onclick="fill(this)">thumb_down</span>
              <span class="material-symbols-rounded" style="font-variation-settings:'FILL' 0; font-size: 5vh" onclick="fill(this)">flag</span>
            </div>
          </div>
        `;
      });
      commentsContainerFinal.innerHTML = commentsHTML;
    }
    
    console.log('Course loaded:', course.getClassName());
    console.log('Subject:', course.getSubject());
    console.log('Rating:', course.getAverageRating());
    console.log('Description:', course.getDescription());
  } else {
    console.error('No course data available');
  }
}