

function Pergunta2() {
  background( img )
  
  image( imgBack , 20 , 10 , 30 , 30 )
  
  textAlign( CENTER , CENTER )
  
  noStroke()
  textSize( 20 )
  textFont(fontOswald)
  fill('#000000')
  text( 'Pergunta 2' , 200 , 20 )
  
  fill('#CEE3F6')
  stroke('#000000')
  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgQuad , 160 , 145 , 80 , 80 )
  
  
  fill('#000000')
  noStroke()
  textSize(25)
  text('Qual é o nome dessa figura abaixo?', 200 , 100 )

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
  textSize(15)
  text( 'Quadrado' , 140 , 261 )//Certa
  text( 'Retângulo' , 140 , 301 )
  text( 'Circulo' , 260 , 261 )
  text( 'Triângulo' , 260 , 301 )
  
  }

    









