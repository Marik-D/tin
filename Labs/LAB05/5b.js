function Student(firstName, lastName, stId, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.stId = stId;
    this.grades = grades;

    this.printStudent = () => {
        let gradeSum = 0;
        this.grades.forEach(element => {
            gradeSum += element;
        });
        let avgGrade = gradeSum / grades.length;
        console.log(this.firstName + " " + this.lastName + " avg grade: " + avgGrade);
    }
}

let st = new Student("Jon", "Doe", "12345", [4, 4, 3, 2, 5, 4, 4, 3]);
st.printStudent();