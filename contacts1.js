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
for(const i of contacts){
  if( i.firstName == name){
      console.log("n\i == name \n")
  }
    else if(contacts.hasOwnProperty([i][prop]){
   //   console.log("n\contacts.i.hasOwnProperty\n")
   //   console.log(contacts[i][prop]);
   //   return contacts[i][prop];
    }
   // else{
   //   console.log("\nNo such propertyn\n");
   //   return "No such property";
   // }
  else{
      console.log("\nNo such contact\n");
      return "No such contact";
  }
}
}
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
