let myObject = { a: 1, b: true, c: "three", getA: function() { return this.a }, setA: function(value) { this.a = value } }

function printObject(o) {
    let r = "";
    for (let i in o) {
        if (o.hasOwnProperty(i)) {
            r += `${i} : ${typeof o[i]}\n`;
        }
    }
    console.log(r);
}

myObject.setA(2);
console.log(myObject.getA());
printObject(myObject);