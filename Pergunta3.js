function Pergunta3() {
  background( img )
  
  image( imgBack , 20 , 10 , 30 , 30 )
  
  textAlign( CENTER , CENTER )
  
  noStroke()
  textSize(20)
  textFont(fontOswald)
  fill('#000000')
  text( 'Pergunta 3' , 200 , 20 )
  
 
  fill('#CEE3F6')
  stroke('#000000')
  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgP1, 55 , 145 , 320 , 80 )
  
  
  fill('#000000')
  noStroke()
  textSize(23)
  text('Qual alternativa apresenta respectivamente,\n o nome correto das figuras abaixo?' , 200 , 100 )
  
  fill('#CEE3F6')
  stroke('#000000')
  
  for( x = 90 ; x < 310 ; x += 120 ) {
    
    for( y = 250 ; y < 320 ; y += 40 ) {
      
      rect( x , y , 100 , 30 , 5 )
    
    }
  }
  
  fill('#000000')
  noStroke()
  textFont(fontOswald)
  textSize(10)
  text('Circulo, Retângulo,\n Triângulo e Circulo.' , 140 , 262 )
  text('Circulo, Quadrado,\n Retângulo e Triângulo.' , 140 , 302 )//Certa
  text('Triângulo, Quadrado,\n Circulo e Retângulo.' , 260 , 262 )
  text('Quadrado, Retângulo,\n Circulo e Triângulo.' , 260 , 302 )
  
  }