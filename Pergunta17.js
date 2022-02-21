function Pergunta17() {
  
    background(img)



  image( imgBack , 20 , 10 , 30 , 30 )



  noStroke()

  fill('#000000 ')

  textSize(20)

  text( 'Pergunta 17' , 200 , 20 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgQuad , 160 , 145 , 120 , 80 )
  
  
  
  fill('#000000')
  noStroke()
  textSize(25)
  text('Como se calcula a área do retângulo?' , 200 , 100 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  for( x = 90 ; x < 310 ; x += 120 ) {

       for( y = 250 ; y < 320 ; y += 40 )

            rect( x , y , 100 , 30 , 5 )

       }
  
  
  image( imgFormQuad , 115 , 241 , 50 , 50 )
  image( imgFormRect , 115 , 283 , 50 , 50 )
  image( imgFormTria , 235 , 238 , 50 , 50 )
  image( imgFormTrap , 235 , 279 , 50 , 50 )

  
  }