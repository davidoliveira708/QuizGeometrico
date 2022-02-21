function Perdeu1() {
  
  background(img)
  
  
  if( mouseX >= 90 && mouseX <= 310 && mouseY >= 283 && mouseY <= 315 ) {
    
    fill('#CEE3F6')
    stroke('#000000')
    rect( 90 , 283 , 220 , 30 , 5 )
    
    } else {
      
      fill('#FFFFFF')
      
      }
  
  
  
  noStroke()
  fill('#000000')
  textSize( 23 )
  textFont(fontOswald)
  text( 'TENTAR NOVAMENTE' , 200, 295)
  
  image( imgGO , 50 , 20 , 300 , 300 )
  
  frameRate(15)
  image( per[z] , k , 310 , 100 , 100 )
  
  z++
  k+=3
  
  if( z > 14 ) {
    
    z = 0
    
    }
  
  if( k > 400 ) {
    
    k = -30 
    
    }
  
  }
