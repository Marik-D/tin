function Student(firstName, lastName, stId, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.stId = stId;
    this.grades = grades;

    this.printStudent = () => {
        console.log(this.firstName + " " + this.lastName + " avg grade: " + this.getAvgGrade());
    }

    this.setFullName = (name, surname) => {
        this.firstName = name;
        this.lastName = surname;
    }

    this.getAvgGrade = () => {
        let gradeSum = 0;
        this.grades.forEach(element => {
            gradeSum += element;
        });
        return gradeSum / grades.length;
    }
}

let st = new Student("", "", "12345", [4, 4, 3, 2, 5, 4, 4, 3]);
st.setFullName("Jon", "Doe");
st.printStudent();