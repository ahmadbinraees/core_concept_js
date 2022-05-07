// object is like variable. object contain multiple value with property;

var personData = {
    firstName: "Ahmad",
    lastName: "Bin Raees",
    age: 24,
    gmail: "ahmadullahbinraees@gmail.com",
    fb: "www.facebook.com/ahmadbinraees",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(personData);

name = personData.fullName();
console.log(name);



var someUser = {
    firstName: "Tom",
    lastName: "Henry",
    age: 23,
    phon: 80303030,
    gmail: "henry555@gmail.com",
    roll: 45,
    address: "Dop Colony, street CIL, Banker Road - 2343",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(someUser);

var userFullName = someUser.fullName();
console.log(userFullName);