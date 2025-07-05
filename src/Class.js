class Class {
    constructor(dualCredit, subject, prerequisite, duration, honorsAP, description, averageGrade, ratings = [], comments = [], averageTimePerWeek, icon, className) {
        this.dualCredit = dualCredit;
        this.subject = subject;
        this.prerequisite = prerequisite;
        this.duration = duration; // 'semester' or 'year'
        this.honorsAP = honorsAP; // 'honors', 'AP', or 'none'
        this.description = description;
        this.averageGrade = averageGrade;
        this.ratings = ratings.filter(rating => this.validateRating(rating));
        this.comments = comments;
        this.averageTimePerWeek = averageTimePerWeek;
        this.icon = icon;
        this.className = className;
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

    // Getters
    getDualCredit() { return this.dualCredit; }
    getSubject() { return this.subject; }
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

    // Display info in JSON format
    toJSON() {
        return JSON.stringify({
            dualCredit: this.dualCredit,
            subject: this.subject,
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
