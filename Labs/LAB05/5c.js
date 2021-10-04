let createStudent = (firstName, lastName, index, grades) => {
    let student = { firstName, lastName, index, grades, subjects: ["TIN", "GRK", "BYT", "ZPR"] }
    return student;
}
console.log(createStudent("Jon", "Doe", "12345", [4, 4, 3, 2, 5, 4, 4, 3]))