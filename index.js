

var i = 0 ;
while(i < document.querySelectorAll(".drum").length ){
    document.querySelectorAll(".drum")[i].addEventListener("click",whenclicked);
  
    i++;
}


function whenclicked()
{
var buttontext = this.innerHTML ;
annimation(buttontext);

switch (buttontext) {
    case "w":
       
        var audio1 = new Audio("./sounds/tom-1.mp3");
        audio1.play();
        break;

        case "a" :
            var audio2 = new Audio("./sounds/tom-2.mp3");
            audio2.play();
            
            break;
    
            case "s" :
                var audio3 = new Audio("./sounds/tom-3.mp3");
                audio3.play();
                
                break;
        
                case "d" :
                    var audio4 = new Audio("./sounds/tom-4.mp3");
                    audio4.play();
                    
                    break;
                    case "j" :
                        var audio7 = new Audio("./sounds/snare.mp3");
                        audio7.play();
                        
                        break;
                
                        case "k" :
                            var audio5 = new Audio("./sounds/crash.mp3");
                            audio5.play();
                            
                            break;
                    
                            case "l" :
                                var audio6 = new Audio("./sounds/kick-bass.mp3");
                                audio6.play();
                                
                                break;
                        
                                    default:
                                        break;
                                }

                               
}


document.addEventListener("keypress",keyboard_response);


function keyboard_response(event){
   
    
var keypress_rand = event.key ;

annimation(keypress_rand);

switch (keypress_rand) {
    case "w" :
        var audio1 = new Audio("./sounds/tom-1.mp3");
        audio1.play();
        
        break;
        case "a" :
            var audio2 = new Audio("./sounds/tom-2.mp3");
            audio2.play();
            
            break;
    
            case "s" :
                var audio3 = new Audio("./sounds/tom-3.mp3");
                audio3.play();
                
                break;
        
                case "d" :
                    var audio4 = new Audio("./sounds/tom-4.mp3");
                    audio4.play();
                    
                    break;
                    case "j" :
                        var audio7 = new Audio("./sounds/snare.mp3");
                        audio7.play();
                        
                        break;
                
                        case "k" :
                            var audio5 = new Audio("./sounds/crash.mp3");
                            audio5.play();
                            
                            break;
                    
                            case "l" :
                                var audio6 = new Audio("./sounds/kick-bass.mp3");
                                audio6.play();
                                
                                break;
                        
                                    default:
                                        break;
                                }

   

}

function annimation (current_sit){
  
    var activebutton = document.querySelector("." + current_sit);
    activebutton.classList.add("pressed");
    setTimeout( function() {

 activebutton.classList.remove("pressed");
        
    }, 100);
 


    
}

