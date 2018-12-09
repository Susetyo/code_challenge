var rot = 3.14/4;

function setup(){
	createCanvas(400,400);
}

function draw(){
	background(51);

	var len = 100;
	stroke(255);
	translate(200,height)
	branch(100);
}

function branch(len){
	line(0, 0, 0, -len);
	translate(0, -len);
	// push();
	// rotate(rot);
	// line(0,0,0, -len);
	// pop();
	// push();
	// rotate(-rot);
	// line(0,0,0, -len);
	
	if (len > 4){
		push();
		rotate(rot);
		branch(len * 0.67);
		pop();
		push();
		rotate(-rot);
		branch(len * 0.67);
		pop();
	}
}