const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

class Employee{
  constructor( name, bonusPercentage, totalCompensation, totalBonus ){
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  } // end constructor
} // end Employee class

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log( employees );

let employeesFromClass = [];

function setEmployee( empObject ){

  let percentInt = percentage(empObject.reviewRating, empObject.annualSalary, empObject.employeeNumber);
  let salaryInt = parseInt(empObject.annualSalary);
  let totalBonus = (percentInt/100) * salaryInt;
  let totalCompensation = totalBonus + salaryInt;
  employeesFromClass.push(new Employee(empObject.name, percentInt, totalCompensation, totalBonus));
}
$(document).ready(function(){
  for(employee of employees){
    setEmployee(employee);
  }

  $('#button').on('click', function(){
    for (employee of employeesFromClass){
      $('#employList').append('<li>'+employee.name+': Percentage = '+ employee.bonusPercentage+
      ' Compensation = '+employee.totalCompensation+' Bonus = '+employee.totalBonus +'</li>')
    }
  });
});


function percentage( rating, salary, number){
  let percentage = 0;

  if (rating <= 2){
    return 0;
  }
  else if(rating === 3){
    percentage = 4;
  }
  else if(rating=== 4){
    percentage = 6;
  }
  else if(rating === 5){
    percentage = 10;
  }

  if(number.length === 4){
    percentage += 5;
  }

  if(parseInt(salary) > 65000){
    percentage--;
  }

  if(percentage > 13){
    percentage = 13;
  }
  return percentage;
}
