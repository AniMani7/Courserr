const introductionToAgriscience = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "9,10", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This course introduces students to the whole agricultural education program. Students will learn about classroom and FFA opportunities and develop a Supervised Agricultural Experience (SAE). Other units include communication in agriculture and agricultural sciences investigation. Students are strongly encouraged to take Agriculture, Food, and Natural Resources with this course.", // description
    [4.0, 3.5, 3.8, 5], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Agriscience", // className
    ['A','B','C', 'D-'],// grades
    [4,3,2] //classDifficulty
);

const AgricultureFoodAndNaturalResources = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "9,10", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "This course continues to build off of skills learned in Introduction to Agriscience while focusing on the natural resources, plant and animal, and power, structural and technical systems pathways of agriculture. Students are strongly encouraged to take introduction to Agriscience with this course.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Agriculture, Food, & Natural Resources", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
);

const NaturalResources = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "9,10,11,12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students will examine the importance of natural resources in our lives and how to manage them for our benefit. Education units will include opportunities in natural resources, soil formation and physical properties, land use, conservation and management, soil fertility, wildlife management, air and water quality management, and weather and climate.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Natural Resources", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
);

const AnimalScience = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "10,11,12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "In this introductory animal science course students will learn about the value and utilization of animals in our lives, covering both livestock and companion animals. Animal nutrition, growth, health, behavior, reproduction, and genetics will be explored.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Animal Science", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
);
const PlantScience = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "10,11,12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This course will focus on landscaping, floriculture, and vegetable and flower production. Hands-on activities may include plant propagation and growth, soils and growing media, plant protection, and integrated pest management.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Plant Science", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
); 
const FoodScienceAndSafety = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "10,11,12", // usualGrade
    "None", // prerequisite
    "Year", // duration
    "Year-long", // Semester Offered
    "None", // honorsAP
    "Students will complete hands-on activities, projects, and problems that simulate actual concepts and situations found in the food science and safety industry, allowing students to build content knowledge and technical skills. Students will investigate areas of food science, including food safety, food chemistry, food processing, food product development, and marketing.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Food Science & Safety", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
); 

const AgriculturalPowerAndTechnology = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "10,11,12", // usualGrade
    "None", // prerequisite
    "Year", // duration
    "Year-long", // Semester Offered
    "None", // honorsAP
    "Agriculture Power and Technology course is a foundation course within the CASE sequence of courses. The course provides students a variety of experiences that are in the fields of agricultural engineering. Students are immersed in inquiry-based exercises that tie in the math and science of agricultural mechanics and engineering.  Throughout the course, students apply technical skills while becoming competent in the process used to operate, repair, engineer, and design agricultural tools and equipment.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Agricultural Power and Technology", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
);

const AgriculturalBusinessFoundation = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "11,12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This CASE course utilizes activities, projects, and problems that incorporate business mathematics and reading and writing components in the context of agriculture. This course is structured for all students to experience an overview of agricultural business management. Students will learn about starting a business, the cost of doing business, how to manage risk, and finalizing a business plan.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Agricultural Business Foundation", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
);

const AdvancedAnimalScience = new Class(
    true, // dualCredit
    "Agriculture", // subject
    "11,12", // usualGrade
    "Animal Science", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This course explores issues impacting the United States and the international animal industry. The main emphasis of the course is on the animal industry in the global market, animal production management, anatomy and physiology, and marketing of farm animals.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Animal Science", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
);

const AdvancedPlantScience = new Class(
    true, // dualCredit
    "Agriculture", // subject
    "11,12", // usualGrade
    "Plant Science", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This course explores the general principles of crop production and management. Major areas of study include food production, crop classification, plant growth factors, seed production and variety selection.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Plant Science", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
);

const AgResearchAndDevelopmentCapstone = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This capstone course will culminate students’ experiences in agriculture based on the pathway of study they pursued.  In this course students will develop and Improve critical thinking and employability skills as they learn to solve real-world problems, conduct research, analyze data, and develop new products and protocols.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Ag Research & Development Capstone", // className
    ['A+','B-','A'], // grades
    [4,3,2] //classDifficulty
);





const courseMap = new Map();
courseMap.set("Introduction to Agriscience",introductionToAgriscience);
courseMap.set("Agriculture, Food, & Natural Resources", AgricultureFoodAndNaturalResources);
courseMap.set("Natural Resources", NaturalResources);
courseMap.set("Animal Science", AnimalScience);
courseMap.set("Plant Science", PlantScience);
courseMap.set("Food Science & Safety", FoodScienceAndSafety);
courseMap.set("Agricultural Power and Technology", AgriculturalPowerAndTechnology);
courseMap.set("Agricultural Business Foundation", AgriculturalBusinessFoundation);
courseMap.set("Advanced Animal Science", AdvancedAnimalScience);
courseMap.set("Advanced Plant Science", AdvancedPlantScience);
courseMap.set("Ag Research & Development Capstone", AgResearchAndDevelopmentCapstone);

