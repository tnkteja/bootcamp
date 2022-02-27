Array.prototype.rotateLeft = function (d) {
    while(d>0) {
        let left = this[0];
        for(let i=0;i<this.length-1;i++) {
            this[i]=this[i+1];
        }
        this[this.length-1]=left;
        d--;
    }
}
Array.prototype.rotateRight = function(d) {
    while(d>0) {
        let right = this[this.length-1];
        for(let i=this.length-1;i>0;i--) {
            this[i]=this[i-1];
        }
        this[0]=right;
        d--;
    }
    console.log(this)
}

let r=[1,2,3]

// r.rotateLeft(1)

r.rotateRight(2);
console.log(r);