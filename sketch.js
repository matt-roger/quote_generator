var url = 'https://quota.glitch.me/random';
var quote;
var auth;
var data;
var button;

function setup() {
  createCanvas(400, 400);
  loadJSON(url,gotData);
  button = createButton('Change Quote');
  button.position(298, 378);
}

function gotData(info){
  data = info;
  quote = data.quoteText;
  auth = data.quoteAuthor;
}

function draw() {
  background(0);
  
  textSize(20);
  fill(255)
  let t = quote + '\n' + '-'+ auth;
  text(t, 0, 200, width-10);
  button.mousePressed(setup)
}