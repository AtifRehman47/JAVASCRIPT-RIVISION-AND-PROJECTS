let Number = document.querySelector('.grade-input');
let Show = document.querySelector('.show');

function calculate() {
          let Marks = Number.value 
          
          if (Marks >= 850) {
                Show.innerHTML = 'AOne';              
          }else if(Marks >= 750){
                 Show.innerHTML = 'A Grade'             
          }else if (Marks >= 600) {
                  Show.innerHTML = 'B Grade'            
          }else if (Marks >= 450) {
                  Show.innerHTML = 'C Grade'            
          }else{
                 Show.innerHTML = 'Tray Again'             
          }
}