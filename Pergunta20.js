function Pergunta20() {
  
    background(img)



  image( imgBack , 20 , 10 , 30 , 30 )



  noStroke()

  fill('#000000 ')

  textSize(20)

  text( 'Pergunta 20' , 200 , 20 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgCirculo , 160 , 145 , 80 , 80 )

  
  fill('#000000')
  noStroke()
  textSize(25)
  text('Como se calcula a área do circulo?' , 200 , 100)


  fill('#CEE3F6 ')

  stroke('#000000 ')

  for( x = 90 ; x < 310 ; x += 120 ) {

       for( y = 250 ; y < 320 ; y += 40 )

            rect( x , y , 100 , 30 , 5 )

       }
  
  image( imgFormCirc , 115 , 241 , 50 , 50 )
  image( imgFormTrap , 115 , 278 , 50 , 50 )
  image( imgFormQuad , 235 , 238 , 50 , 50 )
  image( imgFormRect , 235 , 283 , 50 , 50 )

  
  }