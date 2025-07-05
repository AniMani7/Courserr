class Class {
    constructor(dualCredit, subject, usualGrade, prerequisite, duration, honorsAP, description, averageGrade, ratings = [], comments = [], averageTimePerWeek, icon, className, grades = []) {
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

    calculateAverageGradeFromLetters(gradesArray) {
        if (!gradesArray || gradesArray.length === 0) return null;
        const letterToValue = { 'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0 };
        const valueToLetter = ['F', 'D', 'C', 'B', 'A'];
        const validGrades = gradesArray.filter(g => letterToValue.hasOwnProperty(g));
        if (validGrades.length === 0) return null;
        const sum = validGrades.reduce((acc, g) => acc + letterToValue[g], 0);
        const avg = sum / validGrades.length;
        const rounded = Math.round(avg);
        const averageLetter = valueToLetter[rounded];
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
    getAverageTimePerWeek() { return this.averageTimePerWeek; }
    getIcon() { return this.icon; }
    getClassName() { return this.className; }
    getMainColor(){
        return this.mainColor;
    }
    getAccentColor(){
        return this.accentColor;
    }

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
            className: this.className
        }, null, 2); // Indent with 2 spaces for readability
    }
}