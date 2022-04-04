function cuentas(){
    var cuenta1 = ["cuentas"]
    var cuenta2 = [1,2,4,8]
    var cuenta3 = [1,2,3,5]
    var cuenta4 = ["ola como estan"]
   
    
    
    function c(){
        console.log(cuenta1)
    }  

    function multi(){
        return cuenta2.flatMap(x => [x * 2]);
    }
    
    function multi2(){
        return cuenta3.flatMap(x => [x * 2]);
    }

    function ola(){
        console.log(cuenta4)
    }
    return{
        c: c,
        multi : multi,
        multi2 : multi2,
        ola : ola,
        cuenta1 : cuenta1,
        cuenta2 : cuenta2,
        cuenta3 : cuenta3,
        cuenta4 : cuenta4,
        
    }
    
}
const h = cuentas()