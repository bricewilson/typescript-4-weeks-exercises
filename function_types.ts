function GetPersonInfo(name: string, age: number, jobTitle: string): string {

  return `${name} is ${age} years old and works as a ${jobTitle}.`;

}

type PersonInfoFunc = (name: string, age: number, jobTitle: string) => string;

let myFunc: PersonInfoFunc = GetPersonInfo;