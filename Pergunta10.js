function Pergunta10() {
  
    background(img)



  image( imgBack , 20 , 10 , 30 , 30 )



  noStroke()

  fill('#000000 ')

  textSize(20)

  text( 'Pergunta 10' , 200 , 20 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgBandeira , 140 , 145 , 120 , 80 )
  
  
  fill('#000000')
  noStroke()
  textSize(23)
  text('Quais figuras geométricas estão presentes\n na bandeira do Brasil?' , 200 , 100 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  for( x = 90 ; x < 310 ; x += 120 ) {

       for( y = 250 ; y < 320 ; y += 40 )

            rect( x , y , 100 , 30 , 5 )

       }

  fill('#000000 ')

  noStroke()

  textFont(fontOswald)

  textSize(12)

  text( 'Retângulo,Losango\n e Circulo' , 140 , 262 )//Certa

  text( 'Quadrado,Retângulo\n e Triângulo ' , 140 , 302 )

  text( 'Quadrado, Losango\n e Retângulo ' , 260  , 262 )

  text( 'Trapézio,Retângulo\n e Losango' , 260 , 302 )
  
  }