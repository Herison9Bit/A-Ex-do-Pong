//bolinha
let xbolinhadoenzo = 300;
let ybolinhadoenzo = 200;
let tambolinhadoenzo = 25;

let xvb = 6
let yvb = 6

function setup(){
    //aqui vou criar minha "mesa"
createCanvas(1366,720);
}

function draw(){
    //aqui vou po a cor da "mesa"
    background(25,25,112);
    nossabolinha(xbolinhadoenzo,ybolinhadoenzo,tambolinhadoenzo)
    movebolinha();
    kikabolinha();
}

// omg bolinha mexe wooooo
function nossabolinha(xbolinhadoenzo,ybolinhadoenzo, tambolinhadoenzo){
    circle (xbolinhadoenzo,ybolinhadoenzo,tambolinhadoenzo);
}
function movebolinha(){
    xbolinhadoenzo = xbolinhadoenzo + xvb
    ybolinhadoenzo = ybolinhadoenzo + yvb
}
function kikabolinha(){
    if (xBolinha > width || xBolinha < 0){
        xvelo *= -1;
        if (xBolinha < 0) {
          mortes++;
        }
        if (yBolinha > height || yBolinha < 0){
        yvelo *= -1;
        }
    
}



    

function criaRaquete(xRaquete,yRaquete,larguraRaquete,alturaRaquete){
    fill("green");
    rect(xRaquete,yRaquete,larguraRaquete,alturaRaquete);
}

function MovimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
      yRaquete -=10;
  }
  if(keyIsDown(DOWN_ARROW)){
      yRaquete +=10;
  }
}

function colideRaquete(){
    if(xBolinha - raiobolinha < xRaquete + larguraRaquete && yBolinha - raiobolinha < yRaquete + alturaRaquete && yBolinha + raiobolinha > yRaquete){
        xvelo *= -1;
        pontos++;
    }
}

function mostraPlacar() {
  fill(0);
  textSize(24);
  text("Mortes: " + mortes, 10, 30);
  text("Pontos: " + pontos, 10, 60);
}
