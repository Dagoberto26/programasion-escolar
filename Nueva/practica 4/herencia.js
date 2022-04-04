class casa1 {
    
    constructor(){
        this.propiedada=0;
    }
    metodo(){
        console.log("que honda mundo");
    }
}

class casa2 extends casa1{
    constructor(){
        super();
    }
}

class casa3 extends casa2{
    constructor(){
        super();
    }
}

const vamos = new casa3();
vamos.metodo()