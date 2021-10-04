class Person {
    constructor(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.surname;
    }

    set setFirstName(name) {
        this.firstName = name;
    }

    set setLastName(surname) {
        this.lastName = surname;
    }

}

class Student extends Person {
    constructor(name, surname, stId, grades) {
        super(name, surname)
        this.stId = stId;
        this.grades = grades;
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