let firstName: string = "Joshua";
let lastName: string = "Arrants";

//name function 
function fullName(firstName:string, lastName:string): string {
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(fullName(firstName, lastName));