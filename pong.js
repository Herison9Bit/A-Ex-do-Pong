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
    if (ybolinhadoenzo > width || xbolinhadoenzo < 0){
        xvb *= -1;
        
    }
    if (xbolinhadoenzo > width || ybolinhadoenzo < 0){
        yvb *= -1;    
    
}
