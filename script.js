
var Firstname;
var Lastname;
var Salary;

class Person {
    get Firstname() {
        return this._Firstname;
    }

    set Firstname(value) {
        this._Firstname = value;
    }

    get Lastname() {
        return this._Lastname
    }

    set Lastname(value) {
        this._Lastname = value;

    }

    get Salary() {
        return this._Salary
    }

    set Salary(value) {
        this._Salary = value;

    }

    constructor(firstname, lastname, salary) {
        this._Firstname = firstname;
        this._Lastname = lastname;
        this._Salary = parseFloat(salary);
    }

    SayHello() {
        var myData = `The name of employee is ${this._Firstname} ${this._Lastname} and his annual salary is ${this._Salary}.`;
        $("#viewEmployees").append(myData + "</br>");
    }
}
alert("Welcome")
// An array is used for collecting the information of Employees.
var emplArray = [];
var count = 1;
for (var employee = 0; employee <= 2; employee++) {

    Firstname = prompt("What is the firstname of " + count + " employee?")
    Lastname = prompt("What is the lastname of " + count + " employee?")
    Salary = prompt("What is the annual salary of " + count + " employee?")

    var employeeObject = new Person(Firstname, Lastname, Salary);

    emplArray[employee] = employeeObject;
    count++;
}

// This function to used to run control events.
$(document).ready(function () {
    $("#btnDetails").click(function () {

        alert("Information of all the employees");
        count = 1;
        for (var data = 0; data < emplArray.length; data++) {
            $("#viewEmployees").append("Detail of " + count + " employee - </br>");
            var getData = emplArray[data];
            var personObj = new Person(getData._Firstname, getData._Lastname, getData._Salary);
            personObj.SayHello();
            count++;
        }
    });
});



