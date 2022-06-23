class List {
    constructor () {
  this.list = [];
  this.size = this.list.length
}
  add(element) {
    this.list.push(element);
    this.list = this.list.sort((a,b) => a - b)
    this.size = this.list.length
  } 
  remove(index) {
    if (index >= 0 && index < this.list.length) {
    this.list.splice(index, 1);
    this.size = this.list.length
}
  }
  get(index) {
    if (index >= 0 && index < this.list.length) {
    return this.list[index];
    } else {
        throw new Error('Invalid index!')
    }
  }
}