function Pergunta12() {
  
    background(img)



  image( imgBack , 20 , 10 , 30 , 30 )



  noStroke()

  fill('#000000 ')

  textSize(20)

  text( 'Pergunta 12' , 200 , 20 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgQuad , 160 , 145 , 80 , 80 )
  
  
  fill('#000000')
  noStroke()
  textSize(25)
  text('Quantos vértices tem um quadrado?' , 200 , 100 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  for( x = 90 ; x < 310 ; x += 120 ) {

       for( y = 250 ; y < 320 ; y += 40 )

            rect( x , y , 100 , 30 , 5 )

       }

  fill('#000000 ')

  noStroke()

  textFont(fontOswald)

  textSize(15)

  text( '5 ' , 140 , 262 )

  text( '1 ' , 140 , 302 )

  text( '2 ' , 260  , 262 )

  text( '4 ' , 260 , 302 )//Certa
  
  }