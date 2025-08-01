class Class {
    constructor(dualCredit, subject, usualGrade, prerequisite, duration, semesterOffered, honorsAP, description, ratings = [], comments = [], averageTimePerWeek = [], icon, className, grades = [], classDifficulty = [], tags = []) {
        this.dualCredit = dualCredit;
        this.subject = subject;
        this.usualGrade = usualGrade;
        this.prerequisite = prerequisite;
        this.duration = duration; // 'semester' or 'year'
        this.honorsAP = honorsAP; // 'honors', 'AP', or 'none'
        this.description = description;
        this.ratings = ratings.filter(rating => this.validateRating(rating));
        this.comments = comments;
        this.averageTimePerWeek = averageTimePerWeek;
        this.icon = icon;
        this.className = className;
        this.mainColor =  this.mainColor;
        this.accentColor = this.accentColor;
        this.grades = grades; // Array of letter grades for this class 
        this.averageGrade = this.calculateAverageGradeFromLetters(this.grades);
        this.semesterOffered = semesterOffered; // 'Both', 'Fall', 'Spring'
        this.classDifficulty = classDifficulty; // Array of difficulty ratings
        this.tags = tags; // Array of tags for this class
    }

    validateRating(rating) {
        if (rating >= 0 && rating <= 5) {
            return true;
        } else {
            console.log(`Invalid rating: ${rating}. Rating should be between 0 and 5.`);
            return false;
        }
    }

    getAverageRating() {
        if (this.ratings.length === 0) return 0;
        const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
        let rate = Math.round(sum / this.ratings.length.toFixed(2));
        return (rate);    
    }

    //Fix later into constant and helper
    calculateAverageGradeFromLetters(gradesArray) {
    if (!gradesArray || gradesArray.length === 0) return null;
    const letterToValue = {
        'A+': 4.3, 'A': 4.0, 'A-': 3.7,
        'B+': 3.3, 'B': 3.0, 'B-': 2.7,
        'C+': 2.3, 'C': 2.0, 'C-': 1.7,
        'D+': 1.3, 'D': 1.0, 'D-': 0.7,
        'F': 0.0
    };
    const valueToLetter = [
        { min: 4.15, letter: 'A+' },
        { min: 3.85, letter: 'A' },
        { min: 3.5, letter: 'A-' },
        { min: 3.15, letter: 'B+' },
        { min: 2.85, letter: 'B' },
        { min: 2.5, letter: 'B-' },
        { min: 2.15, letter: 'C+' },
        { min: 1.85, letter: 'C' },
        { min: 1.5, letter: 'C-' },
        { min: 1.15, letter: 'D+' },
        { min: 0.85, letter: 'D' },
        { min: 0.5, letter: 'D-' },
        { min: 0, letter: 'F' }
    ];
    const validGrades = gradesArray.filter(g => letterToValue.hasOwnProperty(g));
    if (validGrades.length === 0) return null;
    const sum = validGrades.reduce((acc, g) => acc + letterToValue[g], 0);
    const avg = sum / validGrades.length;
    // Find the closest letter grade
    const averageLetter = valueToLetter.find(v => avg >= v.min).letter;
    this.averageGrade = averageLetter;
    return averageLetter;
}
    // Getters
    getDualCredit() { return this.dualCredit; }
    getSubject() { return this.subject; }
    getUsualGrade() { return this.usualGrade; }
    getPrerequisite() { return this.prerequisite; }
    getDuration() { return this.duration; }
    getHonorsAP() { return this.honorsAP; }
    getDescription() { return this.description; }
    getAverageGrade() { return this.averageGrade; }
    getRatings() { return this.ratings; }
    getComments() { return this.comments; }
    getGrades() { return this.grades; }
    getAverageTimePerWeek() {
        if (!Array.isArray(this.averageTimePerWeek) || this.averageTimePerWeek.length === 0) return 0;
        const sum = this.averageTimePerWeek.reduce((acc, val) => acc + val, 0);
        return sum
    }
    getIcon() { return this.icon; }
    getClassName() { return this.className; }
    getMainColor(){
        return this.mainColor;
    }
    getAccentColor(){
        return this.accentColor;
    }
    getSemesterOffered() {
        return this.semesterOffered; // 'Both', 'Fall', 'Spring'        
    }
    getClassDifficulty() {
        if (!Array.isArray(this.classDifficulty) || this.classDifficulty.length === 0) return 0;
        const sum = this.classDifficulty.reduce((acc, val) => acc + val, 0);
        return sum
    }
    
    getTags() { return this.tags; }

    // Display info in JSON format
    toJSON() {
        return JSON.stringify({
            dualCredit: this.dualCredit,
            subject: this.subject,
            usualGrade: this.usualGrade,
            prerequisite: this.prerequisite,
            duration: this.duration,
            honorsAP: this.honorsAP,
            description: this.description,
            averageGrade: this.averageGrade,
            averageRating: this.getAverageRating(),
            ratings: this.ratings,
            comments: this.comments,
            averageTimePerWeek: this.averageTimePerWeek,
            icon: this.icon,
            className: this.className,
            tags: this.tags
        }, null, 2); // Indent with 2 spaces for readability
    }
}