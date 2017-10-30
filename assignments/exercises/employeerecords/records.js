var employees = [];

function Employee (name, jobTitle, salary, status){
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = "Full Time";
  this.PrintEmployeeForm = function(){
    return ("Employee's Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
  }
}

var luke = new Employee("Luke", "Hoarder", "Practically Destitute");
luke.status = "Dead Inside";

var tom = new Employee("Tom", "Beet Farmer", "$21,000");
tom.status = "Chronically depressed";

var wendy = new Employee("Wendy", "Burger God", "$200,000");
wendy.status = "Making Money";

employees.push(luke, tom, wendy);
console.log(employees);
