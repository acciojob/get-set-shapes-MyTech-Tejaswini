//complete this code
class Rectangle {
	width
	height
	constructor(width,height){
		this.width = width
		this.height = height
	}

	get width(){
		return this.width
	}

	get height(){
		return this.height
	}

	getArea(width, height){
		return this.width * this.height
	}
}

class Square extends Animal {
	side
	constructoe(width,height,side){
		this.side = side
		this.width = side
		this.height = side
	}

	getPerimeter(side){
		return 4 * side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
