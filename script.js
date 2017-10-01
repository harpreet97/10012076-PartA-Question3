
var Firstname;
var Lastname;
var Salary;

class Person 
{
    
        
        
        constructor(Firstname, Lastname, Salary) {
          this._Firstname = Firstname;
          this._Lastname = Lastname;
          this._Salary = Salary;
        }
    
        SayHello() {
            console.log(`My Firstname is ${this._Firstname} and Lastname is ${this._Lastname} and my salary is ${this._Salary}`);
        }
    }
    alert("Welcome")
    var emplArray=[];
    var count=1;
    for (var employee = 0; employee <=2; employee++) {

         Firstname =prompt("What is the firstname of "+count+" employee")
        Lastname = prompt("What is the lastname of "+count+" employee")
        Salary = prompt("What is the salary of "+count+" employee")

        var employeeObject=new Person(Firstname,Lastname,Salary);
        
        emplArray[employee]=employeeObject;
        count++;
    }

    alert("Display the information of all the employees");

    for(var data=0;data<emplArray.length;data++){
     debugger;
     var getData=emplArray[data];
     var personObj=new Person(getData._Firstname,getData._Lastname,getData._Salary);
      personObj.SayHello();
    }