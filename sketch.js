const speed = 5;
const acc = 9.8;
const fRate = 60;

let faucets = [];
let colors = [];
let img;
let j;
function preload() {
	img = loadImage('colorTest.png');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(fRate);

	//generate faucets
	for(let i = 0; i < width; i += 8 ) {
		let f = new Faucet(i);
		faucets.push(f);
	}

	colors = imageToArray(img)

}

function imageToArray(_img) {
	let arr = [];
	let ratio = width / height;
	let h = faucets.length / ratio;
	img.resize(faucets.length, h/1.7);
	j = _img.height - 1;
	_img.loadPixels();
	for(let i = 0; i < _img.pixels.length; i++) {
		let b = brightness(_img.pixels[i]);
		let bFin = round(b/100);
		arr.push(bFin);
	}

	return arr;
}


function draw() {
	background(151);
	for (let i = 0; i < img.width; i++) {
		let index = (i + (j * img.width)) * 4;
		colors[index] === 0 ? faucets[i].isOn = true : faucets[i].isOn = false;
	}

	if( j > 0){
		j--;
	} else {
		for( let f of faucets){
			f.isOn = false;
		};
	}


	for( let f of faucets){
		f.makeItRain(speed, acc, fRate);
	}


}
