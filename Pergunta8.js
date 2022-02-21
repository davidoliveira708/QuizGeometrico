function Pergunta8() {
  
    background(img)



  image( imgBack , 20 , 10 , 30 , 30 )



  noStroke()

  fill('#000000 ')

  textSize(20)

  text( 'Pergunta 8' , 200 , 20 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgLosango , 160 , 130 , 80 , 100 )
  
  
  fill('#000000')
  noStroke()
  textSize(23)
  text('Qual é o nome da figura geométrica abaixo?' , 200 , 100 )



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

  text( 'Trapézio ' , 140 , 262 )

  text( 'Losango ' , 140 , 302 )//Certa

  text( 'Quadrado ' , 260  , 262 )

  text( 'Triângulo ' , 260 , 302 )
  
  
  }