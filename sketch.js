//O nome do jogo é Quiz Geométrico, nesse jogo os jogadores irão entender como funciona as figuras Geométricas e a geometria. O jogo consiste em responder perguntas básicas sobre como funciona as figuras Geométricas.

//link do Código: https://editor.p5js.org/david.oliveira.708/sketches/Nhfka5oiO

//link do código em full screen: https://editor.p5js.org/david.oliveira.708/full/Nhfka5oiO

//link do video explicativo: https://youtu.be/3EF5blsxvmM




var tela = 0;
var img;
var imgBack;
var imgC;
var imgM;
var imgGO;
var imgCred;

var som;
var somTeclas;
var somVitoria;
var somDerrota;


var fontOswald;
var fontCairo;


//Animação da tela do Menu
var vX = []
var vY = []
var vCor = []
var vVelX = []

var qtElementos = 5


//Animação Avançou
var img = []
var per = []
var z = 0
var k = 0


function preload() {
  
  
  
  //Imagens Gerais
  img = loadImage('Imagens/ImgMenu.jpg')
  imgBack = loadImage('Imagens/Back1.png')
  imgC = loadImage('Imagens/MyFoto.jpeg')
  imgEduc = loadImage('Imagens/ImgEducadora.jpg')
  imgM = loadImage('Imagens/Quiz.png')
  imgGO = loadImage('Imagens/GameOver.png')
  imgP1 = loadImage('Imagens/FigurasP1.png')
  imgAvançou = loadImage('Imagens/Avançou.png')
  imgJN = loadImage('Imagens/imgJN.png')
  imgC1 = loadImage('Imagens/Circle1.png')
  imgC2 = loadImage('Imagens/Circle2.png')
  imgJN2 = loadImage('Imagens/GanhouJ.png')
  
  
  
  
  //Imagens das fases
  imgTria = loadImage('Imagens/Triangulo.png')
  imgQuad = loadImage('Imagens/Quadrado.png')
  imgBandeira = loadImage('ImagensDasFases/Bandeira.png')
  imgCirculo = loadImage('ImagensDasFases/Circulo.png')
  imgLosango = loadImage('ImagensDasFases/Losango.png')
  imgTrap = loadImage('ImagensDasFases/Trap.png')
  imgVértices = loadImage('ImagensDasFases/Vértices.png')
  imgFormCirc = loadImage('ImagensDasFases/FórmulaCirculo.png')
  imgFormFalsa = loadImage('ImagensDasFases/FórmulaFalsa.png')
  imgFormLos = loadImage('ImagensDasFases/FórmulaLosango.png')
  imgFormQuad = loadImage('ImagensDasFases/FórmulaQuad.png')
  imgFormRect = loadImage('ImagensDasFases/FórmulaRect.png')
  imgFormTria = loadImage('ImagensDasFases/FórmulaTriângulo.png')
  imgFormTrap = loadImage('ImagensDasFases/FórmulaTrap.png')
  
  
  
  //Sons
  som = createAudio('Sons/M.mp3')
  somTeclas = createAudio('Sons/MudançaTecla.mp3')
  somVitoria = createAudio('Sons/GameSuccess2.mp3')
  somDerrota = createAudio('Sons/GameNegative1.mp3')
  somAvançou = createAudio('Sons/Victory.mp3')
  somGanhou = createAudio('Sons/SomGanhou.mp3')
  
  
  
  
  //Fonts
  fontOpenSans = loadFont('Fontes/OpenSans.ttf')
  fontOswald = loadFont('Fontes/Oswald.ttf')
  
  
  //Animação Avançou e Perdeu
  for( c=0 ; c<15 ; c++ ) {
    
    img[c] = loadImage('./AniAvançou/img'+c+'.png')
    per[c] = loadImage('./AniPerdeu/per'+c+'.png')
    
    }
  
  
  
  
  }


function setup() {
  createCanvas( 400 , 400);
  
  for( i = 0 ; i < qtElementos ; i++ ) {
    
    vX[i] = random(400,800)
    vY[i] = random(1,400)
    vCor[i] = random(0,255)
    vVelX[i] = random(-4,-1)
    
    }
  
}

function draw() {
  
  //Menu
  if( tela == 0 ) {
    menu();
    
  
    
  }
  
  //Instruções
  else if( tela == 2 ) {
    ComoJogar();
    
  }
  
  //Créditos
  else if( tela == 3 ) {
    Creditos();
    
  }
  
  else if( tela == 1 ) {
    Pergunta1();
    
  }
  
  else if(tela == 4) {
    Pergunta2();
  
  }

  else if(tela == 5) {
    Pergunta3();

  }
  
  else if(tela == 6) {
    Pergunta4();
    
  }
  
  else if(tela == 7) {
    Pergunta5();
    
  }
  
  else if(tela == 8) {
    Perdeu1();
  
  }
  else if(tela == 9) {
    AvançouNivel();
    
  }
  else if(tela == 26) {
    AvançouNivel2()
  
  }
  else if(tela == 27) {
    AvançouNivel3()
    
  }
  else if(tela == 28) {
    JogarNov()
    
  }
  else if(tela == 10) {
    Sorteio()
    
  }
  else if(tela == 11) {
    Pergunta6()
    
  }
  else if(tela == 12) {
    Pergunta7()
    
  }
  else if(tela == 13) {
    Pergunta8()
    
  }
  else if(tela == 14) {
    Pergunta9()
    
  }
  else if(tela == 15) {
    Pergunta10()
    
  }
  else if(tela == 16) {
    Pergunta11()
    
  }
  else if(tela == 17) {
    Pergunta12()
    
  }
  else if(tela == 18) {
    Pergunta13()
    
  }
  else if(tela == 19) {
    Pergunta14()
    
  }
  else if(tela == 20) {
    Pergunta15()
    
  }
  else if(tela == 21) {
    Pergunta16()
    
  }
  else if(tela == 22) {
    Pergunta17()
    
  }
  else if(tela == 23) {
    Pergunta18()
    
  }
  else if(tela == 24) {
    Pergunta19()
    
  }
  else if(tela == 25) {
    Pergunta20()
    
  }
  
}
  