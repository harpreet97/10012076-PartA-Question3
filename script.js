
let viewEmployeeResult = document.querySelector("#viewEmployees");
let btnDetail = document.getElementById("btnDetails");
var emplArray = [];
var result="Details: <br />";

document.addEventListener("DOMContentLoaded", function () {

    alert("Welcome");
    InputAllEmployees();

});

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
        result += myData + "<br/>";
    }
}


function InputAllEmployees() {
    // An array is used for collecting the information of Employees.

    var count = 1;
    for (var employee = 0; employee <= 2; employee++) {

        // Asking the user to enter thier data.
        Firstname = prompt("What is the firstname of " + count + " employee?")
        Lastname = prompt("What is the lastname of " + count + " employee?")
        Salary = prompt("What is the annual salary of " + count + " employee?")

        var employeeObject = new Person(Firstname, Lastname, Salary);

        emplArray[employee] = employeeObject;
        count++;
    }
}

btnDetail.addEventListener("click", function () {

    alert("Information of all the employees");
    var count = 1;
    for (var data = 0; data < emplArray.length; data++) {
        result += "Detail of " + count + " employee - ";
        var getData = emplArray[data];
        var personObj = new Person(getData._Firstname, getData._Lastname, getData._Salary);
        personObj.SayHello();
        count++;
    }
    viewEmployeeResult.innerHTML = result;
});




