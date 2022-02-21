function menu() {
  
  background(img);
  
  
  for( i = 0 ; i < qtElementos ; i++ ) {
    
    fill(vCor[i])
    vX[i] = vX[i] + vVelX[i]
    
    if( vX[i] < 0 ) {
      vX[i] = random(400,800)
      }
    
    image( imgC1 , vX[i] , vY[i] , 30 , 30 )
    image( imgC2 , vY[i] , vX[i] , 30 , 30 )
    
    }
  
  
  
  stroke('#000000')
  

  //Jogar
  if( mouseX >= 130 && mouseX <= 290 && mouseY >= 187 && mouseY <= 237 ) {
   
    fill("#CEE3F6")
    rect( 130 , 187 , 160 , 50 , 10 )
    
  } else {
    
    fill('#F2F2F2')
  }
  

  
  //Instruções
  if( mouseX >= 130 && mouseX <= 290 && mouseY >= 238 && mouseY <= 288 ) {
    
    fill("#CEE3F6")
    rect( 130 , 238 , 160 , 50 , 10 )
    
  } else {
    
    fill('#F2F2F2')
  }

 
  
  //Créditos
  if( mouseX >= 130 && mouseX <= 290 && mouseY >= 289 && mouseY <= 339 ) {
    
    fill("#CEE3F6")
    rect( 130 , 289, 160 , 50 , 10 )
    
  } else {
    
    fill('#F2F2F2')
  }
    
  

  textAlign( CENTER , CENTER )
  
  fill("#000000")
  noStroke()
  textSize( 30 )
  textFont(fontOpenSans)
  text( " Jogar " , 208 , 206 )
  text( " Instruções " , 208 , 259 )
  text( " Créditos " , 208 , 310 )
  
  
 // image( imgDetalhe , 20 , 50 , 300 , 300 )
  image( imgM , 15 , -60 , 380 , 400 )
  
  
  }
