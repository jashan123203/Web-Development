var employee ={
    firstname:"john",
    lastname:"smith",
    desgination:"clerk",
    salary: 30000,
    experince: 4,

    method: function promote(){
        if(this.desgination="clerk" && this.experince >3)
        {
            this.desgination = "senior clerk";
            this.salary=10*(this.salary)
            console.log('Congratulation You have prometed \n Salary updated to:$(this.salary)')
        }
    }
method2: function fullname(){
    console.log('fullname: $(this.first_name))
}
}