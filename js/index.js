let canvas = oCanvas.create({
  canvas: '#canvas',
  background: '#0cc',
  fps: 60
});

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

let touchables = [];
let objectGenerator = new ObjectGenerator();
let object;
let id = 1;
let index;
canvas.addChild(score);
canvas.addChild(points);

setInterval(() => {
	if (touchables.length < 15) {
		id = id + 1;
		object = objectGenerator.generate;
		touchable = canvas.display.image(object.start);
		touchable.id = id;
		touchable.name = object.name;
		touchable.end = object.end ? object.end : {};
		touchables.push(touchable);
		touchables.forEach((touchable) => {
			touchable.bind("click tap", () => {
				userScore ++;
				points.text = userScore;				
				touchable.y = canvas.height + 1;
				touchable.x = Math.floor(Math.random() * canvas.width);
				for (let count = 0; count < touchables.length; count++) {
					if (touchables[count].id === touchable.id) {
						touchables.splice(count, 1);
					}
				}
			});			
		});
		canvas.addChild(touchable);
	}
}, 2300);

canvas.setLoop(() => {
	touchables.forEach((bubble) => {
		if (bubble.y > -30) {
			bubble.y = bubble.y - 3
		} else {
			bubble.y = canvas.height + 1;
		}
	
		if (bubble.y < -30 && bubble.id && bubble.name != "normal") {			
			index = touchables.map(function(x) { return x.id }).indexOf(bubble.id);
			delete touchables[index];

		}
	});
}).start();