function Pergunta11() {
  
    background(img)



  image( imgBack , 20 , 10 , 30 , 30 )



  noStroke()

  fill('#000000 ')

  textSize(20)

  text( 'Pergunta 11' , 200 , 20 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  rect( 10 , 60 , 380 , 180 , 5 )
  image( imgVértices , 160 , 145 , 80 , 80 )
  
  
  fill('#000000')
  noStroke()
  textSize(23)
  text('O que são vértices nas figuras geométricas?' , 200 , 100 )



  fill('#CEE3F6 ')

  stroke('#000000 ')

  for( x = 90 ; x < 310 ; x += 120 ) {

       for( y = 250 ; y < 320 ; y += 40 )

            rect( x , y , 100 , 30 , 5 )

       }

  fill('#000000 ')

  noStroke()

  textFont(fontOswald)

  textSize(11)

  text( 'São Pontos onde nada\n se intercepta ' , 140 , 262 )

  text( 'São os lados da figura', 140 , 302 )

  
  textSize(7)
  text( 'É um ponto em que\n duas ou mais curvas,\n retas ou arestas se encontram ' , 260  , 262 )//Certa

  textSize(10)
  text( 'É um ponto em que\n a figura não é dobrada' , 260 , 302 )
  
  }