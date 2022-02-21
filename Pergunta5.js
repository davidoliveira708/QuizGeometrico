function Pergunta5() {
  
  background( img )
  
  textAlign( CENTER , CENTER )
  
  image( imgBack , 20 , 10 , 30 , 30 )
  
  noStroke()
  textSize(20)
  textFont(fontOswald)
  fill('#000000')
  text('Pergunta 5' , 200 , 20 )
  
  fill('#CEE3F6')
  stroke('#000000')
  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgQuad , 160 , 145 , 80 , 80 )
  
  
  fill('#000000')
  noStroke()
  textSize(25)
  text('Quantos lados tem um Quadrado?' , 200 , 100 )
  
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
  textSize(18)
  text('2' , 140 , 260 )
  text('5' , 140 , 300 )
  text('3' , 260 , 260 )
  text('4' , 260 , 300 )//Certa
  
  }