let canvas = oCanvas.create({
  canvas: '#canvas',
  background: 'black',
  fps: 60
});
console.log(canvas.height);
let userScore = 0;
let score = canvas.display.text({
	x: 10,
	y: 10,
	font: "18px bold",
	text: "Score:",
	fill: "white"
});

let points = canvas.display.text({
	x: 75,
	y: 10,
	font: "18px bold",
	text:  userScore,
	fill: "white"
});

let circle = canvas.display.ellipse({
	x: 300,
	y: canvas.height + 50,
	radius: 25,
	fill: "white"
});

canvas.addChild(circle);
canvas.addChild(score);
canvas.addChild(points);

canvas.setLoop(() => {
	if (circle.y > -50) {
		circle.y = circle.y - 3
	} else {
		circle.y = canvas.height + 50;
	}

	if (circle.y < -30 ) {
		circle.x = Math.floor(Math.random() * canvas.width);
	}
}).start();

circle.bind("click tap", () => {
	userScore ++;
	points.text = userScore;
	circle.y = canvas.height + 50;
	circle.x = Math.floor(Math.random() * canvas.width);
});
