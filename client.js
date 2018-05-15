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

function bonusPerc( rating ){
  let bonusP = 0;

  if(rating === 3){
      bonusP = 4;
  }
  else if(rating ===4){
    bonusP = 6;
  }
  else if(rating === 5 ){
    bonusP =  10;
  }
}

function bonusVetModifier(totalBonus, number){
  if(number.length === 4){
    totalBonus*= 1.05;
  }
  return totalBonus;
}

function bonusSalModifier(totalBonus, salary){
  if(parseInt(salary) > 65000){
    totalBonus = totalBonus * (99/100);
  }
  return totalBonus;
}


function bonusBounds(totalBonus, salary){
  let bonusPerc = totalBonus/salary * 100;
  let boundedBonus = bonusPerc;
  if(bonusPerc < 0){
    boundedBonus = 0;
  }
  else if(bonusPerc > 13){
    boundedBonus = 13;
  }
  return boundedBonus * salary / 100;
}


let employeesFromClass = [];

function setEmployee( empObject ){
  let percentInt = bonusPerc(empObject.reviewRating);
  let salaryInt = parseInt(empObject.annualSalary);
  let totalBonus = (percentInt/100) * parseInt(empObject.annualSalary);
  totalBonus = bonusVetModifier(totalBonus, empObject.employeeNumber);
  totalBonus = bonusSalModifier(totalBonus, salaryInt);
  totalBonus = bonusBounds(totalBonus, salaryInt);
  let totalCompensation = totalBonus + salaryInt;
  employeesFromClass.push(new Employee(empObject.name, percentInt, totalBonus, totalCompensation));
}

for(employee of employees){
  setEmployee(employee);
}
