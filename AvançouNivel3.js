function AvançouNivel3() {
  
  background(img)
  
  if( mouseX >= 90 && mouseX <= 310 && mouseY >= 283 && mouseY <= 315 ) {
    
    fill('#CEE3F6')
    stroke('#000000')
    rect( 90 , 283 , 220 , 30 , 5 )
    
    } else {
      
      fill('#FFFFFF')
      
      }
  
  fill('#000000')
  noStroke()
  textFont(fontOswald)
  textSize(23)
  text('PRÓXIMO NÍVEL' , 200 , 295 )
  
  image( imgAvançou , 35 , 50 , 330 , 330 )
  
  frameRate(15)
  image( img[z] , k , 310 , 100 , 100 )
  
  z++
  k+=3
  
   if( z > 14 ) {
     
     z = 0
     
     }
  
   if( k > 400 ) {
     
     k = -30
     
     }
  
  }