class Rectangle {
    constructor (w, h, color) {
        this.width = Number(w)
        this.height = Number(h)
        this.color = color
    }
    calcArea() {
       return  this.width * this.height 
    }
}