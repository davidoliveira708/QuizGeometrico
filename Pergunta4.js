function Pergunta4() {
  background( img )
  
  image( imgBack , 20 , 10 , 30 , 30 )
  
  textAlign( CENTER , CENTER )
  
  noStroke()
  textSize(20)
  textFont(fontOswald)
  fill('#000000')
  text('Pergunta 4' , 200 , 20 )
  
  fill('#CEE3F6')
  stroke('#000000')
  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgTria , 160 , 145 , 80 , 80 )
  
  
  fill('#000000')
  noStroke()
  textSize(25)
  text('Quantos lados tem um Triângulo?' , 200 , 100 )
  
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
  text('3' , 140 , 260 )//Certa
  text('2' , 140 , 300 )
  text('1' , 260 , 260 )
  text('4' , 260 , 300 )
    
  
  } 