class Node {
    constructor(data, next) {
        this.data=data;
        this.next=next;
    }

    toString() {
        let curr = this;
        while(this.next != undefined) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}



let next = new Node(100)
for(let i=0;i<100;i++) {
    let node = new Node(99-i);
}