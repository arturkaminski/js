// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
    let x = contacts.length;
    for(let i=0; i< contacts.length; i++){
      if((contacts.length -1) == i ){
        console.log("No such name");
     }
      else if((contacts[i]["firstName"] == name)){
            console.log(name);
            if(i.hasOwnProperty(prop)){
              console.log("it has prop");
              console.log(prop);
              console.log("\n**********************\n")
              console.log(i);
              console.log("\n**********************\n")
              return i[prop];
            }
            else{
              return "No such property";
            }
      }
       
       
  // Only change code above this line
}
}
console.log(lookUpProfile("Akira", "likes"));
console.log(contacts.length);
//console.log(lookUpProfile("Ania", "Hej ho"));
