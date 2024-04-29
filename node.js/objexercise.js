var cerdentials = {
    username: "jashan123",
    password: "lkjxjiajxiax"
}

var empDetails = {
    name:"jashan",
    age: 32,
    leaves: 11
}
 
if (cerdentials.username == "jashan123" && cerdentials.password == "lkjxjiajxiax")
( console.log("logged in"))

empDetails.__proto__ =cerdentials;
console.log('username: ${empDetails.username}');
console.log('password: ${empDetails.password}');

const leaves_taken=5;
console.log('${e}');