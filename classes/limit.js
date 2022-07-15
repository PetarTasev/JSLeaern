class Stringer {
    constructor (string, index) {
        this.innerString = string 
        this.innerLength = Number(index)
    }

    increase(length) {
        this.innerLength += length
    }
    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0
        } else {
        this.innerLength -= length
        }
    }
    toString() {
        const mid = this.innerString
       const final  =  mid.slice(0, this.innerLength)
        
       if (this.innerLength < mid.length) {
        return (final + '...')
       } else {
        return (final)
       }
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test