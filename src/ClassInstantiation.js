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
    [4,3,2], //classDifficulty
    ["Hands-on Learning", "Practical Skills", "Science-based", "Career Preparation"] // tags
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
    [4,3,2], //classDifficulty
    ["Hands-on Learning", "Practical Skills", "Science-based", "Career Preparation"] // tags
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
    [4,3,2], //classDifficulty
    ["Hands-on Learning", "Environmental Science", "Conservation", "Natural Resources"] // tags
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
    [4,3,2], //classDifficulty
    ["Hands-on Learning", "Animal Care", "Biology", "Practical Skills"] // tags
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
    [4,3,2], //classDifficulty
    ["Hands-on Learning", "Plant Biology", "Horticulture", "Landscaping"] // tags
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
    [4,3,2], //classDifficulty
    ["Hands-on Learning", "Food Safety", "Chemistry", "Industry Skills"] // tags
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
    [4,3,2], //classDifficulty
    ["Hands-on Learning", "Engineering", "Technology", "Mechanics"] // tags
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
    [4,3,2], //classDifficulty
    ["Business Skills", "Mathematics", "Entrepreneurship", "Management"] // tags
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
    [4,3,2], //classDifficulty
    ["Advanced Biology", "Animal Industry", "Global Market", "Dual Credit"] // tags
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
    [4,3,2], //classDifficulty
    ["Advanced Biology", "Crop Production", "Plant Genetics", "Dual Credit"] // tags
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
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const ComputerAidedManufacturing = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "In this beginning CAD class, students explore computer-based design systems and are challenged to invent, innovate, and problem solve while designing and building projects. Primary emphasis is on design, with hands-on use of software and equipment including a laser engraver, 3D printer, CNC plasma cutter, and screen-printing tools.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Computer-aided Manufacturing", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const introductiontoCarpentry = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students learn the basics of carpentry and woodworking techniques with a strong emphasis on lab safety, proper setup, and correct operation of equipment. Required build projects demonstrate proficiency in safe tool use and foundational skills.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Carpentry", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const introductionToManufacturing = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "An introduction to manufacturing with hands-on metal fabrication techniques. Students practice cutting, bending, welding, and machining while completing required projects to prove safe setup and operation of shop equipment.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Manufacturing", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const engineeringCADDDrafting = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "10, 11, 12", // usualGrade
    "Computer Aided Manufacturing", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Use CADD tools to produce complete 2D and 3D drawings. Students develop proportion, geometric construction, scaling, visualization, and design skills through a range of modeling applications and drafting exercises.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Engineering CADD Drafting", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const architecturalCADDDrafting = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "10, 11, 12", // usualGrade
    "Computer Aided Manufacturing", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Apply CADD to architectural design problems, exploring floor plans, elevations, and site considerations. Coursework examines energy savings, renewable resources, and environmental impact within building design.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Architectural CADD Drafting", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const manufacturingAndWelding = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "10, 11, 12", // usualGrade
    "Intro to Manufacturing", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "A second-level metalworking course that advances skills from Intro to Manufacturing. Focus areas include metal removal, precision machining, out-of-position welding, reading welding diagrams, and welding accuracy using equipment such as the engine lathe, vertical mill, SMAW/GMAW/TIG/oxy-acetylene welders, plasma cutter, and CNC plasma table. Projects integrate materials and processes in individual and team builds.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Manufacturing and Welding", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedManufacturingAndWelding = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "10, 11, 12", // usualGrade
    "Manufacturing and Welding", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "A third-level metalworking course emphasizing advanced machining and welding techniques. Students design and build complex projects that combine multiple skills and content areas, with opportunities to work with CNC technologies individually and in teams.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Manufacturing and Welding", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const woodworking1 = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "10, 11, 12", // usualGrade
    "Introduction to Carpentry", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Builds on Intro to Carpentry skills. Students learn woodworking techniques such as joinery, epoxy work, and finishing, and are expected to design and build multiple wood projects. Additional topics may include basic CAD/3D modeling, basic CNC programming, and use of the laser engraver.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Woodworking 1", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const woodworking2 = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "10, 11, 12", // usualGrade
    "Woodworking 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "An advanced continuation of Woodworking 1 focusing on complex joinery, in-depth project planning, and participation in a production run emphasizing student enterprise. Students continue to utilize laser engraving and CNC technologies.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Woodworking 2", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const carpentry1 = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "10, 11, 12", // usualGrade
    "Introduction to Carpentry", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Focuses on the building trades with an emphasis on residential carpentry. Students learn basic home repair and introductory construction skills including plumbing, electrical, framing, drywall, and basic concrete applications. Course goal: build a small structure.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Carpentry 1", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const carpentry2 = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "10, 11, 12", // usualGrade
    "Carpentry 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advances residential construction knowledge with project estimation, planning, and jobsite safety. Capstone objective: plan and build a functional tiny house.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Carpentry 2", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const contractWoodworking = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "11, 12", // usualGrade
    "Woodworking 2 and Carpentry 2", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students contract individually with the instructor for project scope and work schedule. Independent lab work on approved projects occurs with instructor oversight. Application and prior communication with the instructor are required before registration.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Contract Woodworking", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const itecContractAdvancedTechnology = new Class(
    false, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "11, 12", // usualGrade
    "Woodworking 2, Carpentry 2 OR Advanced Metals and Welding **Instructor Approval", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Individually contracted advanced lab experience with instructor approval. Students work independently on woods, metals, or hybrid projects to deepen technical skills. Application and prior communication with the instructor are required before registration.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "ITEC Contract Advanced Technology", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const internshipProgram1 = new Class(
    true, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "11, 12", // usualGrade
    "**Instructor Approval Required", // prerequisite
    "Semester (2-period block)", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "A dual-credit, two-period block designed to launch students toward highly skilled occupations. After an application and interest inventory, students are placed with quality employers for a semester-long unpaid internship. Emphasis is on initiative, professionalism, and meeting independent course requirements and deadlines.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Internship Program 1 – Dual Credit Courses", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const internshipProgram2 = new Class(
    true, // dualCredit
    "Applied Sciences, Technology, Engineering, and Manufacturing", // subject
    "12", // usualGrade
    "Internship 1 – Seniors only", // prerequisite
    "Semester (2-period block)", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "A continuation of Internship 1 that deepens workplace skills and experiences. Students may explore additional fields or continue in a chosen path to further build occupational knowledge and professionalism in a dual-credit, two-period block format.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Internship Program 2 – Dual Credit Courses", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const foundationsOf2DArt = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "A one-semester introduction to 2D art with basic experiences in drawing, painting, printmaking, and art history. Students should bring a sketchbook. Serves as the prerequisite for all 2D courses except Graphic Design, 4D Art, and Photography.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Foundations of 2-Dimensional Art (2-D Art)", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const drawingPaintingPrintmaking = new Class(
    false, // dualCredit
    "art education", // subject
    "10, 11, 12", // usualGrade
    "Foundations of 2-D ART", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory course in drawing, painting, and printmaking with a focus on composition. Students should bring a sketchbook; one sheet of mat board is requested (provided if needed). Work includes both realistic and abstract art using media such as pen and ink, colored pencil, printmaking ink, watercolor, and acrylic.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Drawing, Painting, Printmaking", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedDrawingPaintingPrintmaking = new Class(
    false, // dualCredit
    "art education", // subject
    "10, 11, 12", // usualGrade
    "Foundations of 2-D ART, Drawing, Painting, Printmaking", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced Levels 2–7 taken sequentially. Often scheduled with beginning levels in the same period. Students bring a sketchbook; one sheet of mat board is requested (provided if needed). Each level offers deeper study of art styles and advanced techniques, with choice of materials on select projects.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Drawing, Painting, Printmaking – Levels 2-7", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const graphicDesign1 = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "One-semester introduction to advertising and commercial art. Students apply elements and principles of design to create logos, product ads, posters, and web pages. Adobe Illustrator, InDesign, and Photoshop are taught; projects are customer-driven. One sheet of mat board is requested (provided if needed).", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Graphic Design", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedGraphicDesign = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "Graphic Design", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced Graphic Design Levels 2–7 taken sequentially. Often scheduled alongside beginning levels. Students create advanced, portfolio-ready design projects using Adobe InDesign, Photoshop, and Illustrator. One sheet of mat board is requested (provided if needed).", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Graphic Design: Levels 2-7", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const foundationsOf3DArt = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory course in 3D art covering ceramics, fibers, mixed media, jewelry, and metal tooling. Students learn the elements and principles of design in three-dimensional media. Prerequisite for Jewelry, Ceramics, and Advanced 3D Art. Students should bring a sketchbook.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Foundations of 3-Dimensional (3-D) Art", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advanced3DArt = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "Foundations of 3-D Art", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced Levels 2–8 taken sequentially. Often scheduled alongside beginning levels. Students develop individually determined projects and apply advanced skills in greater depth.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced 3-D Art: Levels 2-8", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const ceramics1 = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "Foundations of 3-D Art", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Expands concepts from Foundations of 3D Art in a studio environment. Students manage all phases of ceramics work, from wedging clay to kiln loading. Includes hand-built forms, wheel-thrown pottery, and glazing techniques. Serious commitment to work is expected.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Ceramics I", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedCeramics = new Class(
    false, // dualCredit
    "art education", // subject
    "10, 11, 12", // usualGrade
    "Foundations of 3-D Art; Ceramics 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Levels 2–7 enable students to advance their ceramics skills through organized, individual study programs. Students and instructors set specific goals for the semester. Often scheduled alongside beginning levels. Serious commitment required.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Ceramics: Levels 2-7", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const jewelry1 = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "Foundations of 3-D Art", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduction to jewelry design and construction using various techniques. Builds on foundational skills with cold-construction, soldering, and casting methods.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Jewelry I", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedJewelry = new Class(
    false, // dualCredit
    "art education", // subject
    "10, 11, 12", // usualGrade
    "Foundations of 3-D Art; Jewelry 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Levels 2–7 in jewelry offer advanced exploration of adornment and techniques through individualized study. Often scheduled with beginning levels. Some material costs may apply.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Jewelry: Levels 2-7", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const foundationsOf4DArt = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory course in 4D art and animation using Adobe Creative Cloud and other programs to create special effects in print and video.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Foundations of 4-Dimensional Art (4D Art) & Animation", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advanced4DArt = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "Foundations of 4-D Art", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced study of hypermedia and animation. Students use Adobe Creative Cloud and other programs to create works, study animation history and principles, and produce their own videos and animations. Often scheduled with beginning levels.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced 4D Art & Animation: Levels 2-8", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const photography1 = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers darkroom photography fundamentals, including 35mm camera operation, black-and-white film development, and printing. Approximate materials cost: $75–$100. Cameras available for checkout. Serious commitment expected.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Photography I", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedPhotography = new Class(
    false, // dualCredit
    "art education", // subject
    "9, 10, 11, 12", // usualGrade
    "Photography 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Levels 2–8 in photography deepen skills with 35mm and digital photography. Includes advanced darkroom techniques (photograms, multiple exposures, texture screens, toning, solarization) and digital editing using Adobe Photoshop and Lightroom. Approximate materials cost: $75–$100.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Photography: Levels 2-8", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const introductionToBusiness = new Class(
    false, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "9, 10", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Overview of entrepreneurship, management, human resources, marketing, and finance/accounting. Students explore the business world and begin developing skills sought by employers.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Business", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const marketingAndSelling = new Class(
    false, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Project-based course introducing marketing concepts and basic sales techniques. Students explore creativity and innovation through hands-on projects across industries.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Marketing and Selling", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const accounting1 = new Class(
    true, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduces the accounting cycle, financial reporting, and recording transactions for sole proprietorships. Students engage in hands-on simulations and activities applicable to all business careers.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Accounting 1 – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const businessAndPersonalLaw = new Class(
    false, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Explores criminal, civil, employment, contract, consumer law, and estate planning through real and historic cases. Students learn legal rights and procedures for individuals and businesses.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Business and Personal Law", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const entrepreneurship1 = new Class(
    false, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers business creation fundamentals. Students develop a business plan including marketing, financial projections, and operational planning to launch a new venture.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Entrepreneurship 1", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const accounting2 = new Class(
    false, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "11, 12", // usualGrade
    "Accounting 1", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Expands on Accounting 1 by deepening understanding of accounting principles. Students participate in advanced simulations and activities to strengthen technical accounting skills.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Accounting 2", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const entrepreneurship2 = new Class(
    false, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students operate Little Cyclone Central, a student-run enterprise. Responsibilities include managing production, inventory, finances, marketing, staffing, and operational policies.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Entrepreneurship 2", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const businessEngagementCollaborative = new Class(
    true, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "11, 12", // usualGrade
    "Any Business or Information Solutions course or Instructor Approval", // prerequisite
    "Semester (2-period block)", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Work-based learning program connecting students with local businesses. Includes project work, mentoring, resume building, mock interviews, and job shadows to build professional skills and networks.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Business Engagement Collaborative – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedBusinessEngagementCollaborative = new Class(
    true, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "11, 12", // usualGrade
    "Business Engagement Collaborative", // prerequisite
    "Semester (2-period block)", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Continuation of Business Engagement Collaborative with higher-level projects, deeper industry connections, and mentoring of first-year BEC students. Includes job shadows and mock interviews.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Business Engagement Collaborative – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const internshipProgramBusiness = new Class(
    true, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "11, 12", // usualGrade
    "Instructor Approval Required", // prerequisite
    "Semester (2-period block)", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Internship 1: Semester-long unpaid placement with a quality employer based on application and interests. Highly independent with emphasis on initiative, professionalism, and meeting deadlines. Internship 2: Builds on Internship 1 with further career exploration and skill development.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Internship Program – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const entrepreneurship3 = new Class(
    false, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "12", // usualGrade
    "Entrepreneurship 2", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students imagine, pitch, start, and run their own business throughout the year. Participate in pitch competitions for feedback and funding opportunities. Focus on entrepreneurial skill development.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Entrepreneurship 3/Start Up", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const personalFinance = new Class(
    false, // dualCredit
    "Business, Finance, Marketing, & Management", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Required course for seniors focusing on budgeting, paying for college, debt management, and strategies for financial independence and stability.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Personal Finance – Graduation Requirement", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const english9Workshop = new Class(
    false,
    "English",
    "9",
    "None",
    "Semester",
    "Fall",
    "None",
    "Introduces creative (narrative & poetry), informational (journalistic), and argumentative writing skills, including close reading and academic documentation.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "English 9 Workshop (writing)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const english9Literature = new Class(
    false,
    "English",
    "9",
    "None",
    "Semester",
    "Spring",
    "None",
    "Focuses on reading, analysis, and speaking skills. Units include independent reading, Romeo & Juliet, and great speakers, with individual and group discussions.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "English 9 Literature (literature)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const basicComposition = new Class(
    false,
    "English",
    "10",
    "None",
    "Semester",
    "Both",
    "None",
    "Improves grammar, punctuation, and writing conventions through the writing process. Students write expository, comparison/contrast, and argumentative papers.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Basic Composition (writing)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const creativeWriting10 = new Class(
    false,
    "English",
    "10",
    "None",
    "Semester",
    "Both",
    "None",
    "Introduces fiction, poetry, and song lyric writing. Includes workshops, feedback, and publication preparation for an authentic audience.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Creative Writing (writing)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const mythologyFantasyFolklore = new Class(
    false,
    "English",
    "10",
    "None",
    "Semester",
    "Both",
    "None",
    "Explores global storytelling traditions, author’s craft, and cultural purpose. Possible texts: Norse Mythology, The Hobbit, A Wizard of Earthsea.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Mythology, Fantasy, Folklore (literature)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const surveyOfLiterature10 = new Class(
    false,
    "English",
    "10",
    "None",
    "Semester",
    "Both",
    "None",
    "Students choose books of literary merit to improve reading stamina and analysis skills, preparing for AP Lit, college, and lifelong reading.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Survey of Literature (10th) (literature)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const americanLiterature = new Class(
    false,
    "English",
    "10",
    "None",
    "Full Year",
    "Both",
    "None",
    "Covers American literature from colonization to present. Fall: nonfiction & rhetoric; Spring: literary analysis. Strongly suggested before AP English.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "American Literature (writing & literature)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const speech = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Teaches public speaking and communication through expository, persuasive, and demonstrative speeches, with focus on research, style, and critique.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Speech (writing)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const multimediaComposition = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Spring",
    "None",
    "Combines media analysis with creation of blogs, podcasts, videos, and digital images. Emphasizes critical thinking about purpose, form, and content.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Multimedia Composition (writing)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const introToJournalism = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Fall",
    "None",
    "Project-based course on news, features, and opinion writing. Involves pitching ideas, research, drafting, revising, and publication in the school paper.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Introduction to Journalism (writing)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const activismAndSocialJusticeLit = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Examines literature tied to social justice movements. Topics include race, gender, environment, and human rights, with emphasis on critical analysis.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Activism & Social Justice Lit. (literature)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const horrorLiterature = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Analyzes symbolism and cultural roles of horror literature. Includes creative writing, research, and analysis of texts like Frankenstein and The Shining.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Horror Literature (literature)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const scienceFictionLiterature = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Studies science fiction across eras and subgenres, connecting science and literature through creative, analytical, and informational writing.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Science-Fiction Literature (literature)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const shakespeare = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Covers Shakespeare’s sonnets and plays from comedy, tragedy, and history. Focuses on critical thinking, textual analysis, and performance activities.",
    [4.0, 3.5, 3.8],
    ["Challenging but worth it.", "Helped me understand better."],
    [4,0,2],
    "calculate",
    "Shakespeare (literature)",
    ['A+','B-','A'],
    [4,3,2],
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"]
);

const surveyOfLiterature12 = new Class(
    false, // dualCredit
    "English", // subject
    "12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Student-selected literary works to build stamina and advanced analysis (character, setting, structure, POV, imagery, figurative language). Meets Iowa Core 11–12 Literacy standards and prepares for AP, college, and lifelong reading.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Survey of Literature (12th) (Literature)", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const drama = new Class(
    false, // dualCredit
    "English", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Explores theater through major plays/playwrights, acting and directing techniques, and stagecraft basics (set, lighting, sound). Includes improvisation and scene interpretation.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Drama", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedJournalism = new Class(
    false, // dualCredit
    "English", // subject
    "10, 11, 12", // usualGrade
    "Introduction to Journalism or Multimedia Composition", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Motivated composition course producing The WEB (AHS newspaper). Student editors assign/edit news, features, and opinion; integrate interviews and research; create publishable stories, columns, and critiques as independent digital communicators.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Adv. Journalism (AHS Newspaper – The Web)", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const spiritYearbook = new Class(
    false, // dualCredit
    "English", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Produces the school yearbook: reporting, captions, photography, page layout, Photoshop, advertising, and deadline-driven production. May require after-school/summer work; emphasizes creativity and teamwork.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "SPIRIT (AHS Yearbook)", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const americanSocietyThroughFilm_HUM121 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Semester Literature & Humanities", // Semester Offered
    "None", // honorsAP
    "Dual AHS English & Sociology credit plus DMACC HUM121. Analyzes American culture through film; applies sociological lenses; emphasizes critical viewing, discussion, and written critique in a two-period daily block format.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "American Society Through Film* (HUM 121)", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const apEnglishLanguageAndComposition_ENG105_106 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level rhetoric/writing course focusing on rhetorical analysis of nonfiction and evidence-centered argumentative writing. Daily reading/writing; prepares for AP exam and earns DMACC Comp I & II (ENG 105/106) credit; must be taken for DMACC credit.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "AP English Language & Composition* (ENG 105 & 106) – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const apEnglishLiteratureAndComposition_LIT101_185 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level study of literature, poetry, and drama with AP preparation; includes required summer reading. Meets DMACC Lit 101 & 185 requirements while cultivating advanced literary analysis and critical writing.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "AP English Literature & Composition* (Lit 101 & 185) – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advancedCreativeWriting_ENG221 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Semester writing", // Semester Offered
    "None", // honorsAP
    "Advanced workshop in fiction, poetry, and lyrics. Emphasizes critique, revision, reading professional models, and preparing polished work for publication for an authentic audience (DMACC ENG221 credit).", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advanced Creative Writing (11-12)* (ENG221) – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const worldLiterature2_LIT151 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Semester literature", // Semester Offered
    "None", // honorsAP
    "Examines enduring human values across global literary traditions. Possible readings include The Kite Runner, One Hundred Years of Solitude, and Things Fall Apart (DMACC LIT151; offered 26–27).", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "World Literature 2* (LIT 151) (Offered 26-27) – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);
const introductionToHumanServices = new Class(
    false, // dualCredit
    "Human Services", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduces careers and opportunities in Human Services supporting individuals and families. Topics include career prep, family, parenting, money management, decision-making, communication, nutrition, and roles in family, community, and workforce.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Human Services", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const lifespanNutritionAndWellness = new Class(
    false, // dualCredit
    "Human Services", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Laboratory course applying lifetime wellness and nutrition principles for informed personal choices and careers in hospitality, education, human services, and health sciences.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Lifespan Nutrition and Wellness", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const childDevelopment1 = new Class(
    false, // dualCredit
    "Human Services", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers child growth and development from conception to age one, including childcare practices and parenting. Introduces education/training requirements for early childhood career paths.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Child Development I", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const childDevelopment2 = new Class(
    false, // dualCredit
    "Human Services", // subject
    "10, 11, 12", // usualGrade
    "Child Development I", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Focuses on child growth and development ages 2–8, including guidance techniques, developmental milestones, and child-related issues. May include observations, hands-on activities, and lab work.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Child Development II", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const earlyChildhoodEducation1 = new Class(
    false, // dualCredit
    "Human Services", // subject
    "10, 11, 12", // usualGrade
    "Child Development II", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduces careers in early childhood education through observational experiences and learning about foundational practices, teacher traits, and aptitudes for quality education.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Early Childhood Education I", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const earlyChildhoodEducation2 = new Class(
    false, // dualCredit
    "Human Services", // subject
    "10, 11, 12", // usualGrade
    "Early Childhood Education I", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Continues preparation for child education careers with skills in communication, developmental observation, problem-solving, and activity planning. Includes weekly lab work with young children.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Early Childhood Education II", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const earlyChildhoodEducation3 = new Class(
    false, // dualCredit
    "Human Services", // subject
    "11, 12", // usualGrade
    "Early Childhood Education II", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Hands-on experience in a professional child lab setting. Involves demonstrating employment skills, maintaining a healthy environment, implementing curriculum, and fostering positive relationships with children.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Early Childhood Education III – Field Experience", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const internshipProgram_HumanServices = new Class(
    true, // dualCredit
    "Human Services", // subject
    "11, 12", // usualGrade
    "Instructor Approval Required", // prerequisite
    "Semester (2-period block)", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Internship 1: Semester-long unpaid placement with an employer based on application and interests. Highly independent with focus on initiative and professionalism. Internship 2: Builds on Internship 1 with further career exploration and advanced skills.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Internship Program (Internship 1 & Internship 2) – Dual Credit Courses", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const advertising = new Class(
    false, // dualCredit
    "Information Solutions", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers history and development of advertising, industry standards, and career opportunities. Students use web-based software to create creative marketing materials.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Advertising", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const videoProduction = new Class(
    false, // dualCredit
    "Information Solutions", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Explores video production history, industry standards, and career opportunities. Students develop skills in various aspects of production using art, design, and technology integration.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Video Production", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const webDesign = new Class(
    false, // dualCredit
    "Information Solutions", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers history, standards, and career paths in web design. Students gain hands-on skills using elements of art, principles of design, and technology integration for web development.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Web Design", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);

const microsoftCertification = new Class(
    true, // dualCredit
    "Information Solutions", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Prepares students for official Microsoft Word and Excel certification through business simulations. Credentials can be added to resumes, college, job, and scholarship applications.", // description
    [4.0, 3.5, 3.8], // ratings
    ["Challenging but worth it.", "Helped me understand better."], // comments
    [4,0,2], // averageTimePerWeek
    "calculate", // icon
    "Microsoft Certification* – Dual Credit Course", // className
    ['A+','B-','A'], // grades
    [4,3,2], //classDifficulty
    ["Research", "Critical Thinking", "Problem Solving", "Capstone"] // tags
);
const algebra1AB = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Interpret the structure of expressions, create equations that describe numbers or relationships. Understand solving equations as a process of reasoning and explain the reasoning. Solve equations and inequalities in one variable. Represent and solve equations and inequalities graphically. Understand the concept of a function and use function notation. Interpret functions that arise in applications in terms of the context. Interpret linear models. Scientific calculator required.", // description
    [4.0, 3.8, 3.6], // ratings
    ["Good for building fundamentals.", "Challenging if new to algebra."], // comments
    [5,0,3], // averageTimePerWeek
    "calculate", // icon
    "Algebra 1AB", // className
    ['A','B+','B'], // grades
    [3,2,3], // classDifficulty
    ["Algebra", "Functions", "Equations", "Foundations"] // tags
);

const algebra1 = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "The description of the essential standards of this course are those of Algebra 1AB. These standards will be expanded upon and at times be covered at a faster pace. Students wishing to pursue a program of study/career related to mathematics should enroll in this course. Scientific calculator required.", // description
    [4.2, 4.0, 3.7], // ratings
    ["Faster pace than Algebra 1AB.", "Good prep for advanced math."], // comments
    [6,0,4], // averageTimePerWeek
    "calculate", // icon
    "Algebra 1*", // className
    ['A','B+','B-'], // grades
    [4,3,3], // classDifficulty
    ["Algebra", "Advanced Pace", "Functions", "Equations"] // tags
);

const geometryAB = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "Algebra 1AB or Algebra 1", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Understand congruence in terms of rigid motions. Prove geometric theorems. Define trigonometric ratios and solve problems involving right triangles. Use coordinates to prove simple geometric theorems algebraically. Apply geometric concepts in modeling situations. Scientific calculator, protractor, compass, ruler required.", // description
    [4.0, 3.9, 3.7], // ratings
    ["Loved the proofs section.", "Lots of hands-on work."], // comments
    [5,0,3], // averageTimePerWeek
    "calculate", // icon
    "Geometry AB", // className
    ['A','B','B+'], // grades
    [3,3,3], // classDifficulty
    ["Geometry", "Proofs", "Trigonometry", "Modeling"] // tags
);

const geometry = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "Algebra 1AB or Algebra 1", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers Geometry AB content at a faster pace and greater depth. Recommended for students pursuing advanced mathematics. Requires scientific calculator, protractor, compass, ruler.", // description
    [4.3, 4.0, 3.8], // ratings
    ["Challenging but rewarding.", "Excellent prep for Algebra 2."], // comments
    [6,0,4], // averageTimePerWeek
    "calculate", // icon
    "Geometry", // className
    ['A','B+','B'], // grades
    [4,3,3], // classDifficulty
    ["Geometry", "Advanced Pace", "Proofs", "Trigonometry"] // tags
);

const algebra2 = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "11, 12", // usualGrade
    "Algebra 1AB or Algebra 1, Geometry AB or Geometry", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Extend the properties of exponents to rational exponents. Interpret the structure of expressions. Write expressions in equivalent forms to solve problems. Perform arithmetic operations on polynomials. Understand the relationship between zeros and factors of polynomials. Understand solving equations as a process of reasoning and explain the reasoning. Represent and solve equations and inequalities graphically. Interpret functions that arise in applications in terms of the context. Build a function that models a relationship between two quantities.", // description
    [4.1, 3.8, 3.6], // ratings
    ["Key bridge to Pre-Calculus.", "Lots of graphing."], // comments
    [6,0,4], // averageTimePerWeek
    "calculate", // icon
    "Algebra 2", // className
    ['A','B+','B'], // grades
    [4,3,3], // classDifficulty
    ["Algebra", "Polynomials", "Functions", "Modeling"] // tags
);
const advancedAlgebra2 = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "Algebra 1AB or Algebra 1, Geometry AB or Geometry", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Topics from the Common Core Curriculum will be covered but explored in greater depth and detail than in Algebra 2. Includes sequences and series, quadratic functions, fractional exponents, roots, and logarithms. Strongly recommended for students who will take Pre-Calculus the following year. Graphing calculator required.", // description
    [4.4, 4.1, 3.9], // ratings
    ["Good challenge before Pre-Calc.", "Lots of practice problems."], // comments
    [7,0,5], // averageTimePerWeek
    "calculate", // icon
    "Advanced Algebra 2", // className
    ['A','B+','B'], // grades
    [4,4,3], // classDifficulty
    ["Algebra", "Advanced Pace", "Functions", "Logarithms"] // tags
);

const computerScience = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "10, 11, 12", // usualGrade
    "Sophomore or higher grade level", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers computer science fundamentals including history of computers, program organization, control structures, classes, encapsulation, inheritance, Boolean logic, arrays, strings, algorithms, file I/O, and intermediate graphics. Emphasizes problem solving.", // description
    [4.5, 4.2, 4.0], // ratings
    ["Fun and practical coding skills.", "Great intro to programming."], // comments
    [5,0,4], // averageTimePerWeek
    "calculate", // icon
    "Computer Science", // className
    ['A','A-','B+'], // grades
    [3,3,3], // classDifficulty
    ["Programming", "Problem Solving", "Logic", "Algorithms"] // tags
);

const statistics = new Class(
    true, // dualCredit
    "Mathematics", // subject
    "11, 12", // usualGrade
    "Algebra 2 or Advanced Algebra 2", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "College-level course in data collection, organization, analysis, interpretation, and presentation. Includes hypothesis testing and real-world applications. Emphasizes critical thinking and problem solving. Graphing calculator required.", // description
    [4.3, 4.0, 3.8], // ratings
    ["Real-life applications.", "Heavy on projects and data work."], // comments
    [6,0,4], // averageTimePerWeek
    "calculate", // icon
    "Statistics (MAT 157)", // className
    ['A','B+','B'], // grades
    [4,3,3], // classDifficulty
    ["Data Analysis", "Statistics", "Critical Thinking", "Research"] // tags
);

const preCalculus = new Class(
    true, // dualCredit
    "Mathematics", // subject
    "11, 12", // usualGrade
    "Algebra 2 or Advanced Algebra 2", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "College-level course combining algebra and geometry to prepare for calculus. Covers trigonometric identities, graphs, triangle solutions, and circular function modeling. Graphing calculator required.", // description
    [4.5, 4.2, 4.0], // ratings
    ["Good bridge to calculus.", "Lots of trig and graphing."], // comments
    [7,0,5], // averageTimePerWeek
    "calculate", // icon
    "Pre-Calculus (MAT 129)", // className
    ['A','B+','B'], // grades
    [4,4,3], // classDifficulty
    ["Trigonometry", "Functions", "Modeling", "Pre-Calc"] // tags
);

const apCalculusAB = new Class(
    true, // dualCredit
    "Mathematics", // subject
    "11, 12", // usualGrade
    "Pre-Calculus", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "AP Calculus AB prepares students for the AP Exam in Calculus AB. Covers limits, derivatives, integrals, and the Fundamental Theorem of Calculus. Requires strong algebra, trig, and Pre-Calculus skills. Graphing calculator required.", // description
    [4.6, 4.4, 4.1], // ratings
    ["Challenging but rewarding.", "Heavy workload but worth it."], // comments
    [8,0,6], // averageTimePerWeek
    "calculate", // icon
    "AP Calculus (AB) (MAT 211)", // className
    ['A','B+','B-'], // grades
    [5,4,4], // classDifficulty
    ["Calculus", "AP", "Derivatives", "Integrals"] // tags
);




const courseMap = new Map();

// Agricutlure
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

// Business
courseMap.set("Accounting 1 (ACC104)", accounting1);
courseMap.set("Business Engagement Collaborative (ADM221)", businessEngagementCollaborative);
courseMap.set("Advanced Business Engagement Collaborative (ADM936)", advancedBusinessEngagementCollaborative);
courseMap.set("Internship Program 1 (WBL110)", internshipProgram1);
courseMap.set("Internship Program 2 (WBL150)", internshipProgram2);
courseMap.set("Introduction to Business", introductionToBusiness);

// English
courseMap.set("English 9 Workshop", english9Workshop);
courseMap.set("English 9 Literature", english9Literature);
courseMap.set("Basic Composition", basicComposition);
courseMap.set("Creative Writing", creativeWriting10);
courseMap.set("Mythology, Fantasy, Folklore", mythologyFantasyFolklore);
courseMap.set("Survey of Literature (10th)", surveyOfLiterature10);
courseMap.set("American Literature", americanLiterature);
courseMap.set("Speech", speech);
courseMap.set("Multimedia Composition", multimediaComposition);
courseMap.set("Introduction to Journalism", introToJournalism);
courseMap.set("Activism & Social Justice Literature", activismAndSocialJusticeLit);
courseMap.set("Horror Literature", horrorLiterature);
courseMap.set("Science-Fiction Literature", scienceFictionLiterature);
courseMap.set("Shakespeare", shakespeare);
courseMap.set("American Society Through Film", americanSocietyThroughFilm_HUM121);
courseMap.set("Survey of Literature (12th)", surveyOfLiterature12);
courseMap.set("Drama", drama);
courseMap.set("Advanced Journalism", advancedJournalism);
courseMap.set("SPIRIT (AHS Yearbook)", spiritYearbook);
courseMap.set("AP English Language & Composition (ENG 105 & 106)", apEnglishLanguageAndComposition_ENG105_106);
courseMap.set("AP English Literature & Composition (LIT 101 & 185)", apEnglishLiteratureAndComposition_LIT101_185);
courseMap.set("Advanced Creative Writing (ENG221)", advancedCreativeWriting_ENG221);
courseMap.set("World Literature 2 (LIT 151)", worldLiterature2_LIT151);

// Human Services
courseMap.set("Introduction to Human Services", introductionToHumanServices);
courseMap.set("Lifespan Nutrition and Wellness", lifespanNutritionAndWellness);
courseMap.set("Child Development I", childDevelopment1);
courseMap.set("Child Development II", childDevelopment2);
courseMap.set("Early Childhood Education I", earlyChildhoodEducation1);
courseMap.set("Early Childhood Education II", earlyChildhoodEducation2);
courseMap.set("Early Childhood Education III – Field Experience", earlyChildhoodEducation3);
courseMap.set("Internship Program 1 (Human Services)", internshipProgram1);
courseMap.set("Internship Program 2 (Human Services)", internshipProgram2);

// Information Solutions
courseMap.set("Advertising", advertising);
courseMap.set("Video Production", videoProduction);
courseMap.set("Web Design", webDesign);
courseMap.set("Microsoft Certification* – Dual Credit Course", microsoftCertification);

// Mathematics
courseMap.set("Algebra 1AB", algebra1AB);
courseMap.set("Algebra 1", algebra1);
courseMap.set("Geometry AB", geometryAB);
courseMap.set("Geometry", geometry);
courseMap.set("Algebra 2", algebra2);
courseMap.set("Advanced Algebra 2", advancedAlgebra2);
courseMap.set("Computer Science", computerScience);
courseMap.set("Statistics (MAT 157)", statistics);
courseMap.set("Pre-Calculus (MAT 129)", preCalculus);
courseMap.set("AP Calculus (AB) (MAT 211)", apCalculusAB);
console.log('Total classes loaded:', courseMap ? courseMap.size : 'courseMap undefined');
console.log('Class names:', courseMap ? Array.from(courseMap.keys()) : 'No classes');