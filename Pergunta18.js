function Pergunta18() {
  
    background(img)



  image( imgBack , 20 , 10 , 30 , 30 )



  noStroke()

  fill('#000000 ')

  textSize(20)

  text( 'Pergunta 18' , 200 , 20 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgTrap , 160 , 145 , 80 , 80 )
  
  
  fill('#000000')
  noStroke()
  textSize(25)
  text('Como se calcula a área do trapézio?' , 200 , 100 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  for( x = 90 ; x < 310 ; x += 120 ) {

       for( y = 250 ; y < 320 ; y += 40 )

            rect( x , y , 100 , 30 , 5 )

       }
  
  image( imgFormRect , 115 , 243 , 50 , 50 )
  image( imgFormQuad , 115 , 280 , 50 , 50 )
  image( imgFormTrap , 235 , 237 , 50 , 50 )
  image( imgFormFalsa , 235 , 280 , 50 , 50 )

  
  }