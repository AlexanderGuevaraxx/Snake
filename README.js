//***********************************************VARIABLES GLOBALES*********************************************************************
var velocidad = 70;
var tamano = 10;
//*****************************************************Classes**************************************************************************
class objeto{
  constructor(){
      this.tamano = tamano;
    }
    choque(obj){
      var difx = Math.abs(this.x - obj.y);
      var dify = Math.abs(this.y - obj.x);
      if(difx >= 0 && difx < tamano && dify >= 0 && < tamano){
         return true;
       }else{
         return false;  
       }
    }
}
//**-****************************************************************COUNTER************************************************************************
var n = 0;
var l = document.getElementById("number");
Window.setInterval(function(){
  l.innerHTML = n;
  n++;
},1000);

//**************************************************************** class Extender cola**************************************************************
class Cola extends objeto{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this siguiente = null;
  }
  dibujar(ctx){
    if(this.siguiente != null){
      this.siguiente.dibujar(ctx);
  }
  ctx.fillStyle = "lime";
  ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
  }
  setxy(x,y){
    if(this.siguiente != null){
      this.siguiente.setxy(this.x, this.y);
    }
    this.x = x;
    this.y = y;
  }
  meter(){
    if(this.tamano == null){
      this.tamano = new Cola(this.x, this.y);
    }else{
      this.siguiente.meter(); 
    }
  }
  verSiguiente(){
    return.this.siguiente;
  }
}
//************************************************************AH COMER PRRO :v**********************************************************
class Comida extends objeto{
  constructor(){
    super();
    this.x = this.generar();
    this.y = this.generar();
  }
  generar(){
    var num(math.floor(Math.random() *59))*10;
    return num;
  }
  colocar(){
    this.x = this.generar();
    this.y = this.generar();
  }
  dibujar(ctx){
    fillStyle = "FF0000";
    fillRect(this.x, this.y, this.tamano, this.tamano);
  }
}
//----------------------------------------------------------------OBJETOS---------------------------------------------------------------
var cabeza = new Cola (20,20);
var comida = new Comida();
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;

function movimiento(){
  var nx = cabeza.x+xdir;
  var ny = cabeza.y+ydir;
  cabeza.setxy(nx,ny);
}
function control(event){
  var cod = event.keyCode;
  if(ejex){
    if(cod == 38){
      ydir = -tamano;
      xdir = 0;
      ejex = false;
      ejey = true;
    }
    if(cod == 40){
      ydir = tamano;
      xdir = 0;
      ejex = false;
      ejey = true;
    }
  }
  if(ejey){
    if(cod == 37){
      ydir = 0;
      xdir = -tamano;
      ejey = false;
      ejex = true;
    }
    if(cod == 39){
      ydir = 0;
      xdir = tamano;
      ejey = false;
      ejex = true;
    }
  }
}

function findeJuego(){
  xdir = 0;
  ydir = 0;
  ejex = true;
  ejey = true;
  cabeza = new Cola(15,20);
  comida = new Comida();
  alert("Fin Del Juego Prro :v");
}
function choquepared(){
  if(cabeza.x < 0 || cabeza.x > 590 || cabeza.y < 0 || cabeza.y > 590){
    findeJuego();
  }
}
function choquecuerpo(){
  var temp = null;
  try{
    temp.Cabeza.verSiguiente().versiguiente();
  }catch(err){
    temp = null;
  }
  while(temp != null){
    if(Cabeza.choque(temp)){
      //-----------------------------fin del juego---------------------
      findeJuego();
    }else{
      temp = temp.verSiguiente();
    }
  }
}
function dibujar(ctx){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0, canvas.width, canvas.height);
  //dibujos----------------------------------------------dibujos------------------------------------dibujos----------------------------
  cabeza.dibujar(ctx);
  comida.dibujar(ctx);
}
function main(){
  choquecuerpo();
  choquepared();
  dibujar();
  movimiento();
  if(cabeza.choque(comida)){
    comida.colocar();
    cabeza.meter();
  }
}
setInterval("main()", velocidad);
















