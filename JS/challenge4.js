let john = {
    fullname :'john',
    mass : 80,
    height : 180,
    BMI : function() {
        return this.mass / this.height * this.height;
    } 
};



let mark = {
    fullname :'mark',
    mass : 70,
    height : 160,
    BMI : function() {
        return this.mass / this.height * this.height;
    } 
}


if(john.BMI()> mark.BMI()){
    console.log("john bmi : " + john.BMI());
    console.log("john high");
}else{
    console.log("mark high");
}