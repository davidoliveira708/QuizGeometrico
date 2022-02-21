function Pergunta19() {
  
    background(img)



  image( imgBack , 20 , 10 , 30 , 30 )



  noStroke()

  fill('#000000 ')

  textSize(20)

  text( 'Pergunta 19' , 200 , 20 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgLosango , 160 , 130 , 80 , 100 )
  
  
  
  fill('#000000')
  noStroke()
  textSize(25)
  text('Como se calcula a área do losango?' , 200 , 100 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  for( x = 90 ; x < 310 ; x += 120 ) {

       for( y = 250 ; y < 320 ; y += 40 )

            rect( x , y , 100 , 30 , 5 )

       }
  
  image( imgFormTrap , 115 , 239 , 50 , 50 )
  image( imgFormFalsa , 115 , 280 , 50 , 50 )
  image( imgFormQuad , 235 , 238 , 50 , 50 )
  image( imgFormLos , 235 , 278 , 50 , 50 )
  
  }