class NodoD {
    constructor(dato, next, back){
        this.dato = dato;
        this.next = next;
        this.back = back;
    }
}

class ListaCDE{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(dato){
        let newnode = new NodoD(dato);
        if(this.size===0){
            this.head = newnode;
            this.tail = newnode;
            newnode.next = this.tail;
            newnode.back = this.head;
            this.size++;
            return newnode.dato;
        }

        let current = this.head;

        for(let i=0; i<this.size; i++){
            current = current.next;
            if(current === this.tail){
                this.tail.next = newnode;
                newnode.next = this.head;
                newnode.back = this.tail;
                this.head.back = newnode
                this.head = newnode;
                this.size++
                return newnode.dato;
            }
        }
    }

    insertLast(dato){
        let newnode = new NodoD(dato);
        if(this.size===0){
            this.head = newnode;
            this.tail = newnode;
            newnode.next = this.tail;
            newnode.back = this.head;
            this.size++;
            return newnode.dato;
        }
        this.tail.next = newnode;
        newnode.back = this.tail;
        newnode.next = this.head;
        this.head.back = newnode;
        this.tail = newnode;
        this.size++;
        return this.tail.dato;
    }

    insertAt(dato, index){
        if(index < 0 || index>this.size || index === ""){
            return alert('Índice no aceptado');
        } else if(index == 0 ){
            this.insertFirst(dato);
            return console.log('Valor insertado')
        } else if(index == this.size){
            this.insertLast(dato);
            return console.log('Valor insertado')
        }else{
            let newnode = new NodoD(dato);
            console.log(index)
            let current =this.head;

            for(let i=0; i < index; i++){
                current = current.next;
            }

            current.back.next = newnode;
            newnode.back = current.back;
            newnode.next = current;
            current.back = newnode;
            this.size++;
            return newnode.dato;
        }
    }

    removeFirst(){
        if(this.size===0){
            return null;
        }
        
        let current = this.head;
        
        if(this.size===1){
            this.head = null;
            this.tail = null;
            this.size = 0;
            return current.dato;
        }

        this.tail.next = this.head.next;
        this.head.next.back = this.tail;
        this.head = this.head.next;
        this.size--;
        return current.dato;
    }

    removeLast(){
        if(this.size===0){
            return null;
        }
        
        let current = this.tail;
        
        if(this.size===1){
            this.head = null;
            this.tail = null;
            this.size = 0;
            return current.dato;
        }

        this.tail.back.next = this.head;
        this.head.back = this.tail.back;
        this.tail = this.tail.back;
        this.size--;
        return current.dato;
    }

    removeData(dato){
        if(this.size===0){
            return null;
        }
        let current = this.head;
        let previous;
        let i = 0
        if(i === 0 && current.dato === dato){
            this.removeFirst();
            return current.dato;
        }
        for(i=0; i<this.size; i++){
            previous = current;
            current = current.next;
            if(current.dato === dato){
                previous.next = current.next;
                current.next.back = previous
                this.size--;
                return current.dato;
            }
        }
        this.size--;
    }

    removeFrom(index){
        if(this.size < 0 || index > this.size || index === ''){
            return alert('Índice no válido')
        } else if(index == 0){
            this.removeFirst();
            return;
        }else if(index == this.size-1){
            this.removeLast();
            return;
        } else {
            let current = this.head;
            for(let i=0; i<index; i++){
                current = current.next;
            }
            current.back.next = current.next;
            current.next.back = current.back;
            this.size--;
            return current.dato;
        }
    }

    removeList(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    Print(){
        if(this.size===0){
        return null;
        }
        let current = this.head;
        let mostrar = "";
        for(let i=0; i<this.size; i++){
            mostrar += `<span class="badge rounded-pill bg-primary">${current.dato}</span>`
            current = current.next;
        }
        return mostrar
    }

    isEmpty(){
        if(this.size === 0) return 'VACÍA'
        else return 'con elementos'
    }

    reversePrint(){
        if(this.size===0) return alert('No hay elementos en la Lista Circular Doble')
        let current = this.tail;
        let mostrar = "";
        for(let i=this.size-1; i>=0; i--){
            mostrar += current.dato + ' <---> ' 
            current = current.back;
        }
        return alert(mostrar.slice(0, mostrar.length-7));
    }
}

export {ListaCDE}