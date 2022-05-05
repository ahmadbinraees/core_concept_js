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
