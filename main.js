var scrollSpeed = 1;


var randomarray = [ 100, 350, 600 ];
var randomint;
    
    // default position
    var current = 0;
    
    // riktning
    var direction = 'h';

isPaused = false;
//$('#player').addClass('floating');
function generateEnemy(){
    randomint = Math.floor(Math.random()* 3) + 0;
    
    $('.enemy').css('right', '-2px');
    $('.enemy').css('top', ''+randomarray[randomint]+'px');
    $('.enemy').animate({"right": '+=1600px'}, 1100, 'linear');

   // console.log($('.enemy').css('right'));
                
}
function gameLoop(isPaused, isButtonPressed){



    // 1 pixel rad i taget
    current -= 1;
        
    // move the background with backgrond-position css properties
    if(!isPaused){
        $('div.clouds').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px");

        
    //When booosting
    } else {
        //-4500px på 1620 ms!
        $('div.clouds').animate({"backgroundPosition": "-=4500px", },1620);
        
                                 
        $('#player').animate({"left": '+=300px'}, 1500);
        $('#player').animate({"left": '-=300px'}, 900);
    }
   /* if(!isButtonPressed){
        $('.floating').animate({'top': '+=30px'}, 500, 'linear');
        $('.floating').animate({'top': '-=30px'}, 500, 'linear');
        
    }*/

}




function collision(){
    
        var x1 = $('#player').offset().left;
        var y1 = $('#player').offset().top;
        var h1 = $('#player').outerHeight(true);
        var w1 = $('#player').outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $('.enemy').offset().left;
        var y2 = $('.enemy').offset().top;
        var h2 = $('.enemy').outerHeight(true);
        var w2 = $('.enemy').outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
         return true;
      } else {
          $('#GameOver').fadeIn(2000);
          //$('#player').fadeOut(50).fadeIn(50);
          return false;
      }
}

//y-värden:
//100
//350
//600
isButtonPressed = false;
window.addEventListener("keyup", function(e){
    isButtonPressed = true;
    
    var position = $('#player').css('top').slice(0, -2);
		switch(e.keyCode)
		{
			case 38: // up arrow
                console.log(position);
             //   $('#player').removeClass('floating');
                if(position <= 350 ){
                  //  $('#player').animate({"top": '80px'}, 500);
                    $('#player').animate({"top": '100px'}, 500);
                } else if(position <= 600 && position > 350){
                //    $('#player').animate({"top": '340px'}, 500);
                    $('#player').animate({"top": '350px'}, 400);
                }
                    
				//$('#player').css('display', 'none');
				break;
			case 40: // down arrow
               // $('#player').removeClass('floating');
				if(position >= 100 && position < 349){
                    //$('#player').animate({"top": '360px'}, 500);
                    $('#player').animate({"top": '350px'}, 500);
                } else if(position >= 350 && position < 559){
                    //$('#player').animate({"top": '610px'}, 500);
                    $('#player').animate({"top": '600px'}, 500);
                }
                    
				break;
			case 32: // key P pauses the game
                console.log("bajs");
                //$('#player').removeClass('floating');
                isPaused = true;
                e.preventDefault();
                $('div.clouds').animate({"top": '300px'},300);
				break;		
		}
	});

/*if(bajs){
    $('.floating').animate({'top': '+=20px'}, 500, 'linear');
    $('.floating').animate({'top': '-=20px'}, 900, 'linear');
}*/
    


//setInterval(bgscroll, scrollSpeed);
    window.setInterval(function(e){
        generateEnemy();
        
    }, 1200);

//invoking game loop
window.setInterval(function(){

       // console.log(isPaused);
        gameLoop(isPaused, isButtonPressed);
        var isCollided = collision();
        if(isPaused == true)
            isPaused = false;
        
            
    
},scrollSpeed);


    