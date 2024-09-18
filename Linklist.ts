class Nod {
    public value: number;
    public next: Nod | null;


    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}


class Linklist {
    public head: Nod | null | any;
    public tail: Nod | null | any;
    public length: number;


    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;       
    }


    insertHead (value: number){
        let node = new Nod(value)

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    insertTail(value: number){
        let node = new Nod(value)
        if (!this.head) {
            this.head = node;
            this.tail =  this.head
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    removeTail(){
        if (!this.head) {
         return console.log("Cannot remove tail");
         
        } else {
         let current = this.head;
         let newTail = current;

         while(current.next) {
            newTail = current;
            current = current.next
         }
         this.length++;
         return this;
        }
    }

    removeHead(){
        if (!this.head) {
         return console.log("Cannot remove Head");
         
        } else {
         let current = this.head;
         this.head = current.next;

         this.length++;
         return this;
     }
    }
    

    get(index: number){
        if (index < 0 || index>= this.length) {
            return undefined
        } else {
            let count: number = 0;
            let current = this.head;
            while (index !== count){
                current = current.next;
                count++
            }
            return current;
        }
    }

    set(index: number, value: number){
        let node = this.get(index);

        if(node){
            node.value = value
            return true
        }else{
            return false;
        }
        
    }

    insert (index: number, value: number){
        let node = new Nod (value);
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.insertHead(value);
        if(index === this.length) return this.insertTail(value)
 
         let prev = this.get(index -1)
         let temp = prev.next;
 
         prev.next = node;
         node.next = temp;
 
         this.length++;
         return true;
     }

    remove  (index: number, value: number){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.removeHead();
        if(index === this.length) return !!this.removeTail()

        let prev = this.get(index -1)
        let temp = prev.next;

        prev.next = temp.next;

        this.length--;
        return true;
    }
   

}

let linklist = new Linklist
linklist.insertHead(1)
linklist.insertTail(2)
linklist.insertTail(4)
linklist.insertTail(6)
linklist.insertTail(8)
linklist.insertTail(10)

console.clear();
console.log();

// console.log("Head Removed", linklist.removeHead());
// console.log("Got By Index", linklist.get(2));
// console.log("Set By Index", linklist.set(2, 14));
// console.log("Insert By Index", linklist.set(2, 3));
console.log("Remove By Index", linklist.set(5, 10));
console.log(linklist);









