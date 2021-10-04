class Student {
    constructor(firstName, lastName, stId, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.stId = stId;
        this.grades = grades;
    }

    set setFirstName(name) {
        this.firstName = name;
    }

    set setLastName(surname) {
        this.lastName = surname;
    }

    get getAvgGrade() {
        let gradeSum = 0;
        this.grades.forEach(element => {
            gradeSum += element;
        });
        return gradeSum / this.grades.length;
    }

    printStudent() {
        console.log(this.firstName + " " + this.lastName + " avg grade: " + this.getAvgGrade);
    };
}

let st = new Student("", "", "12345", [4, 4, 3, 2, 5, 4, 4, 3]);
st.setFirstName = "Jon";
st.setLastName = "Doe";
st.printStudent();