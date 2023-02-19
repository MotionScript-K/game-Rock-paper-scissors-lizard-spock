//создание основного блока
var body = document.querySelector("body");
//кнопка рестарт
addObject("button","restart","restartBtn",body,"Сброс");
var resbtn = document.getElementById("restart");
$("#restart").click(function(){
  location.reload();
});
//Участники
addObject("div","players","players",body,"ТЫ --- ИИ");
//подсчет результатов
addObject("div","resBox","resBox",body,null);

var resContainer = document.getElementById("resBox");
addObject("div","first","resBox1",resContainer,null);
addObject("div","second","resBox1",resContainer,null);

var resContainer1 = document.getElementById("first");
var resContainer2 = document.getElementById("second");
var number1 = 0;
var number2 = 0;

//создание интерфейс игры : игрок - поле - ИИ
addObject("div","playerBox","playerBox",body,null);
for(i = 1; i <= 3; i++){
var targetBox = document.getElementById("playerBox");
addObject("div","gameBox-"+[i],"gameBox",targetBox,null);
};

var playerBox = document.getElementById("gameBox-1");
var objectBox = document.getElementById("gameBox-2");
var iiBox = document.getElementById("gameBox-3");

addObject("div","playerImg","playerImg",playerBox,null);
addObject("div","iiImg","iiImg",iiBox,null);
addObject("div","scoreBox","scoreBox",objectBox,null);
//создание места под выпавшие карты
var scoreBox = document.getElementById("scoreBox");
for(i = 1; i <= 2; i++){
  addObject("div","scoreId-"+[i],"objectScore",scoreBox,null);
  };
//создание места под карты
addObject("div","playerTarget","playerTarget",body,null);
//заполнение картами игры
var targetCard = document.getElementById("playerTarget");
for(e = 1; e <= 5; e++){
  var container = document.createElement("div");
  container.id = [e];
  container.className = "cardBox";
  container.style.setProperty('--imgObjectGame', 'url("img/r'+[e]+'.jpg")');
  targetCard.appendChild(container);
  };

//создаем правила игры и схему
addObject("div","line","line",body,null);
addObject("div","rulesGame","rulesText",body,"Правила игры");
addObject("div","rules","rules",body,null);
//обработчик хода игрока
x=0;
y=0;
$(".cardBox").click(function(){
  whatIsThis(this);
  iiround();
  if(x==1 && y == 2 || x==1 && y==4){number1++}
  else if(x==2 && y == 4 || x==2 && y==3){number1++}
  else if(x==4 && y == 3 || x==4 && y==5){number1++}
  else if(x==3 && y == 5 || x==3 && y==1){number1++}
  else if(x==5 && y == 1 || x==5 && y==2){number1++}

  else if(x==1 && y==1||x==2 && y==2||x==3 && y==3||x==4 && y==4||x==5 && y==5){}
else{number2++}
resContainer1.innerHTML = "<h1>"+number1+"</h1>";
resContainer2.innerHTML = "<h1>"+number2+"</h1>";
});

//функция ход ИИ
function iiround(){
  var gameObjectIi = document.getElementById("scoreId-1");
  var randome = getRandomInt(1,6);
  gameObjectIi.style.setProperty('--imgObjectTarget', 'url("img/r'+randome+'.jpg")');
  y = randome;
  return y;
};
//функция рандом
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
//функция ход игрока
function whatIsThis(target){
  var gameObject = document.getElementById("scoreId-2");
  var number = target.id;
  gameObject.style.setProperty('--imgObjectTarget', 'url("img/r'+number+'.jpg")');
  x = number;
  return x;
};
//функция создания элмента
function addObject(obj,idObj,classObj,parent,textObj){
var container = document.createElement(obj);
container.id = idObj;
container.className = classObj;
container.innerHTML = textObj;
parent.appendChild(container);
};
