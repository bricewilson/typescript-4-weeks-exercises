function GetPersonInfo(name: string, age: number, jobTitle: string): string {

  return `${name} is ${age} years old and works as a ${jobTitle}.`;

}

let people = [
  {name: 'Marie', age: 35, jobTitle: 'TypeScript Developer'},
  {name: 'Daniel', age: 30, jobTitle: 'Node.js Developer'},
  {name: 'Lanier', age: 22, jobTitle: '.NET Developer'}
];

for (const person of people) {

  let personInfo: string = GetPersonInfo(person.name, person.age, person.jobTitle);

  console.log(personInfo);
  
}