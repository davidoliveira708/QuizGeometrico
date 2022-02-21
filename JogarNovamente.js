function JogarNov() {
  
  background(img)
  
  if( mouseX >= 90 && mouseX <= 310 && mouseY >= 320 && mouseY <= 350 ) {
    
    fill('#CEE3F6')
    stroke('#000000')
    rect( 90 , 320 , 220 , 30 , 5 )
    
    } else {
      
      fill('#FFFFFF')
      
      }
  
  fill('#000000')
  noStroke()
  textFont(fontOswald)
  textSize(23)
  text('JOGAR NOVAMENTE' , 200 , 330 )
  
  image( imgJN , 35 , -80 , 330 , 330 )
  image( imgJN2 , 100 , 120 , 200 , 200 )
     
  
  }