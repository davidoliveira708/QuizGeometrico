function mouseClicked() {

//MENU
  
  if(tela == 0){

    
  //Jogar
   
    if(mouseX >= 130 && mouseX <= 290 && mouseY >= 187 && mouseY <= 237 ) {

     tela = 1
      
     som.play()
     somTeclas.play()
     som.loop()
     
     //console.log("Jogar")

  
}

  //Instruções

  if(mouseX >= 130 && mouseX <= 290 && mouseY >= 238 && mouseY <= 288 ) {

    tela = 2
    
    somTeclas.play()

    //console.log("Instruções")

    }

  //Créditos

  if(mouseX >= 180 && mouseX <= 290 && mouseY >= 289 && mouseY <= 339 ) {

    tela = 3
    
    somTeclas.play()

     //console.log("Créditos")

    }  

    }
  

   
  
   else if(tela == 1){

   
         //Pergunta 1
       
      if( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) {
        
        tela = 4
        somVitoria.play()
        
        } else {
          
       
          if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {
            
            tela = 8
        somDerrota.play()
        
      }
    }
  }

  
  
  
  
   //Pergunta 2
      
 else if ( tela == 4 ) {
    
    if( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) {
      
      console.log('Sim')
      
      tela = 5
      somVitoria.play()
      
      
      } else {
        
        if(( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {
          
        console.log('Não')
          
        tela = 8
        somDerrota.play() 
          
          
          }
        }
     }
  
    
  
    //Pergunta3
  
    else if( tela == 5 ) {
      
      if( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) {
        
        tela = 6 
        somVitoria.play()
        
        } else {
          
          if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 320 && mouseY >= 290 && mouseY <= 320 )) {
            
            tela = 8
            somDerrota.play()
            
            }
          }
      }
  
  
   //Pergunta 4
  
    else if( tela == 6 ) {
      
      if( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) {
        
        tela = 7
        somVitoria.play()
        
        } else {
          
          if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {
            
        tela = 8
        somDerrota.play()   
            
            
            }
          }
      }
  
     
  
      //Pergunta 5
  
     else if( tela == 7 ) {
       
      if( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 ) {
        
        tela = 9
        //somVitoria.play()
        somAvançou.play()
        
        } else {
          
          if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 )) {
            
          tela = 8
          somDerrota.play()
            
            }
          }
       }
  
  
  
  
       //Pergunta 6
  
       else if( tela == 11 ) {

      

          if( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) {

           tela = 12 

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 210 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 210 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
      //Pergunta 7
  
  else if( tela == 12 ) {

      

             if( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) {

           tela = 13

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
      
      //Pergunta 8
  
  else if( tela == 13 ) {

      

             if( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) {

           tela = 14 

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
      //Pergunta 9
  
  
  else if( tela == 14 ) {

      

             if( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 ) {

           tela = 15

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
      //Pergunta 10
  
  else if( tela == 15 ) {

      

             if( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) {

           tela = 26

          // somVitoria.play()
           somAvançou.play()
               
       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
      //Pergunta 11
  
  
  else if( tela == 16 ) {

      

             if( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) {

           tela = 17

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
      //Pergunta 12
  
  
  else if( tela == 17 ) {

      

             if( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 ) {

           tela = 18

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
      //Pergunta 13
  
  
  else if( tela == 18 ) {

      

             if( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) {

           tela = 19 

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
      //Pergunta 14
  
  else if( tela == 19 ) {

      

             if( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) {

           tela = 20 

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
      //Pergunta 15
  
  else if( tela == 20 ) {

      

         if( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 ) {

           tela = 27

          // somVitoria.play()
           somAvançou.play()
             
             
       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
      //Pergunta 16
  
  else if( tela == 21 ) {

      

             if( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) {

           tela = 22 

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
      //Pergunta 17
  
  else if( tela == 22 ) {

      

             if( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) {

           tela = 23 

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
      //Pergunta 18
  
  
  else if( tela == 23 ) {

      

             if( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) {

           tela = 24 

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
      //Pergunta 19
  
  else if( tela == 24 ) {

      

             if( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 ) {

           tela = 25 

           somVitoria.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
      //Pergunta 20
  
  
  else if( tela == 25 ) {

      

             if( mouseX >= 90 && mouseX <= 190 && mouseY >= 250 && mouseY <= 280 ) {

           tela = 28 

         //  somVitoria.play()
            somGanhou.play()

       } else {

        if(( mouseX >= 90 && mouseX <= 190 && mouseY >= 290 && mouseY <= 320 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 250 && mouseY <= 280 ) || ( mouseX >= 210 && mouseX <= 310 && mouseY >= 290 && mouseY <= 320 )) {

          tela = 8

          somDerrota.play()

        }

    }

}
  
  
  
  
  //TELA AVANÇOU
  
   else if( tela == 9 ) {
     
    if( mouseX >= 90 && mouseX <= 310 && mouseY >= 283 && mouseY <= 315 ) {
      
      tela = 11
      somTeclas.play()
      
      }
     }
  
  //TELA AVANÇOU 2
  
  else if( tela == 26 ) {
    
    if( mouseX >= 90 && mouseX <= 310 && mouseY >= 283 && mouseY <= 315 ) {
      
      tela = 16
      somTeclas.play()
      
      }
    }
  
  
  //TELA AVANÇOU 3
  
  else if( tela == 27 ) {
    
    if( mouseX >= 90 && mouseX <= 310 && mouseY >= 283 && mouseY <= 315 ) {
      
      tela = 21
      somTeclas.play()
      
      }
    }
  
  
  
  //TELA JOGAR NOVAMENTE
  
  else if( tela == 28 ) {
    
    if( mouseX >= 90 && mouseX <= 310 && mouseY >= 320 && mouseY <= 350 ) {
      
      tela = 0
      somTeclas.play()
      
      }
    }
  
  
  
  //TELA PERDEU
  
   else if( tela == 8 ) {
    
    if( mouseX >= 90 && mouseX <= 310 && mouseY >= 283 && mouseY <= 315 ) {
      
      tela = 1
      somTeclas.play()
      
      }
    }
  
  
  
  
  //Voltar

    if(( tela == 2 || tela == 3 || tela == 1 || tela == 4 || tela == 5 || tela == 6 || tela == 7 || tela == 11 || tela == 12 || tela == 13 || tela == 14 || tela == 15 || tela == 16 || tela == 17 || tela == 18 || tela == 19 || tela == 20 || tela == 21 || tela == 22 || tela == 23 || tela == 24 || tela == 25 ) && mouseX >= 20 && mouseX <= 50 && mouseY >= 10 && mouseY <= 40) {

     tela = 0
    
    somTeclas.play()

    }
  
}