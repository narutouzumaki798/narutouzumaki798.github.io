

function setup(){

    var height=730; 
    var width=1530;
	createCanvas(1600,700);
	background(0);

}
var i=0;
var a=10.0; var b=750.0; var c=0.0;  var d=0.8; 
function draw() {
	//if(i%5==0)
	background(0);
    fill(255,0,0);
    ellipse(b,a,100,100);
    a=a+c;
    c=c+2.0;
    if(a>=height && c>=0.0)c=c*(-d);
}

function mousePressed(){
 
 if(mouseX<=1500 && mouseY>=100)
 {
  b=mouseX; a=mouseY; c=0.0;
  } 


}