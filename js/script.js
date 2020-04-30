// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!

$(document).ready(function(){
	$('#tip').click(function(){
		$('#quote_1').text('This is my new quote')
	})
});

$(document).ready(function(){
	$('.sidebarBtn').click(function(){
		$('.sidebar').toggleClass('active');
		$('.sidebarBtn').toggleClass('toggle');
		$('.sidebarBtn').toggleClass('toggle');
		$('.sidebarBtn').toggleClass('leftyoujerk');
	})
});

$(document).ready(function(){
	$(".menu").on("change", function(event) {
		var choice = $(this).val();
		$(".item.active").removeClass("active");
		$("." + choice).addClass("active");
	});

	$(document).ready(function(){
		$(".card").click(function() {
			$(this).toggleClass("active");
		});
	});


	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",

		},
		{
			quote:"Believe you can and you're halfway there.",

		},
		{
			quote:"It does not matter how slowly you go as long as you do not stop.",

		},
		{
			quote:"Don't watch the clock; do what it does. Keep going.",

		},
		{
			quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",

		},
		{
			quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",

		},
		{
			quote:"Expect problems and eat them for breakfast.",

		},
		{
			quote:"Start where you are. Use what you have. Do what you can.",

		},
		{
			quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",

		},
		{
			quote:"Be yourself; everyone else is already taken.",

		},
		{
			quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",

		},
		{
			quote:"Always remember that you are absolutely unique. Just like everyone else.",

		},
		{
			quote:"Do not take life too seriously. You will never get out of it alive.",

		},
		{
			quote:"People who think they know everything are a great annoyance to those of us who do.",

		},
		{
			quote:"Procrastination is the art of keeping up with yesterday.",

		},
		{
			quote:"Get your facts first, then you can distort them as you please.",

		},
		{
			quote:"A day without sunshine is like, you know, night.",

		},
		{
			quote:"Don't sweat the petty things and don't pet the sweaty things.",

		},
		{
			quote:"Always do whatever's next.",

		},
		{
			quote:"Atheism is a non-prophet organization.",

		},
		{
			quote:"Hapiness is not something ready made. It comes from your own actions.",

		}

		];


		$('#tip').click(function(evt){
		//define the containers of the info we target
		var quote = $('#tip').text();
		var quoteGenius = $('#quote').text();
		//prevent browser's default action
		evt.preventDefault();
		//getting a new random number to attach to a quote and setting a limit
		var sourceLength = quoteSource.length;
		var randomNumber= Math.floor(Math.random()*sourceLength);
		//set a new quote
		for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			
		//console.log(newQuoteText,newQuoteGenius);
		var timeAnimation = 500;
		var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
      	quoteContainer.html('');
      	quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'								</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
    });  
      break;
			};//end for loop

		});//end quoteButton function

	});//end document ready

	const btnScrollToTop = document.querySelector("#btnScrollToTop");

	btnScrollToTop.addEventListener("click", function () {
		window.scrollTo({
			top:0,
			left:0,
			behavior:"smooth"
		});

	});

	var colors = new Array(
		[62,35,255],
		[60,255,60],
		[255,35,98],
		[45,175,230],
		[255,0,255],
		[255,128,0]);

	var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

	if ( $===undefined ) return;

	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb("+r1+","+g1+","+b1+")";

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb("+r2+","+g2+","+b2+")";

	$('#gradient').css({
		background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
			background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

		step += gradientSpeed;
		if ( step >= 1 )
		{
			step %= 1;
			colorIndices[0] = colorIndices[1];
			colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
}
}

setInterval(updateGradient,10);


$('#show').hide()
$('#click').on('click', function () {
	$('#show').toggle(1000);
	
});

$(document).ready(function(){
	$('#show_2').hide()
	$('#click_2').on('click', function () {
		$('#show_2').toggle(1000);
	});
});

$(document).ready(function(){
	$('#show_3').hide()
	$('#click_3').on('click', function () {
		$('#show_3').toggle(1000);
	});
});

$(document).ready(function(){
	$('#show_4').hide()
	$('#click_4').on('click', function () {
		$('#show_4').toggle(1000);
	});
});

var Game      = Game      || {};
var Keyboard  = Keyboard  || {}; 
var Component = Component || {};

/**
 * Keyboard Map
 */
 Keyboard.Keymap = {
 	37: 'left',
 	38: 'up',
 	39: 'right',
 	40: 'down'
 };

/**
 * Keyboard Events
 */
 Keyboard.ControllerEvents = function() {
 	
  // Setts
  var self      = this;
  this.pressKey = null;
  this.keymap   = Keyboard.Keymap;
  
  // Keydown Event
  document.onkeydown = function(event) {
  	self.pressKey = event.which;
  };
  
  // Get Key
  this.getKey = function() {
  	return this.keymap[this.pressKey];
  };
};

/**
 * Game Component Stage
 */
 Component.Stage = function(canvas, conf) {  
 	
  // Sets
  this.keyEvent  = new Keyboard.ControllerEvents();
  this.width     = canvas.width;
  this.height    = canvas.height;
  this.length    = [];
  this.food      = {};
  this.score     = 0;
  this.direction = 'right';
  this.conf      = {
  	cw   : 10,
  	size : 5,
  	fps  : 1000
  };
  
  // Merge Conf
  if (typeof conf == 'object') {
  	for (var key in conf) {
  		if (conf.hasOwnProperty(key)) {
  			this.conf[key] = conf[key];
  		}
  	}
  }
  
};

/**
 * Game Component Snake
 */
 Component.Snake = function(canvas, conf) {
 	
  // Game Stage
  this.stage = new Component.Stage(canvas, conf);
  
  // Init Snake
  this.initSnake = function() {
  	
    // Itaration in Snake Conf Size
    for (var i = 0; i < this.stage.conf.size; i++) {
    	
      // Add Snake Cells
      this.stage.length.push({x: i, y:0});
  }
};

  // Call init Snake
  this.initSnake();
  
  // Init Food  
  this.initFood = function() {
  	
    // Add food on stage
    this.stage.food = {
    	x: Math.round(Math.random() * (this.stage.width - this.stage.conf.cw) / this.stage.conf.cw), 
    	y: Math.round(Math.random() * (this.stage.height - this.stage.conf.cw) / this.stage.conf.cw), 
    };
};

  // Init Food
  this.initFood();
  
  // Restart Stage
  this.restart = function() {
  	this.stage.length            = [];
  	this.stage.food              = {};
  	this.stage.score             = 0;
  	this.stage.direction         = 'right';
  	this.stage.keyEvent.pressKey = null;
  	this.initSnake();
  	this.initFood();
  };
};

/**
 * Game Draw
 */
 Game.Draw = function(context, snake) {
 	
  // Draw Stage
  this.drawStage = function() {
  	
    // Check Keypress And Set Stage direction
    var keyPress = snake.stage.keyEvent.getKey(); 
    if (typeof(keyPress) != 'undefined') {
    	snake.stage.direction = keyPress;
    }
    
    // Draw White Stage
    context.fillStyle = "white";
    context.fillRect(0, 0, snake.stage.width, snake.stage.height);
    
    // Snake Position
    var nx = snake.stage.length[0].x;
    var ny = snake.stage.length[0].y;
    
    // Add position by stage direction
    switch (snake.stage.direction) {
    	case 'right':
    	nx++;
    	break;
    	case 'left':
    	nx--;
    	break;
    	case 'up':
    	ny--;
    	break;
    	case 'down':
    	ny++;
    	break;
    }
    
    // Check Collision
    if (this.collision(nx, ny) == true) {
    	snake.restart();
    	return;
    }
    
    // Logic of Snake food
    if (nx == snake.stage.food.x && ny == snake.stage.food.y) {
    	var tail = {x: nx, y: ny};
    	snake.stage.score++;
    	snake.initFood();
    } else {
    	var tail = snake.stage.length.pop();
    	tail.x   = nx;
    	tail.y   = ny;  
    }
    snake.stage.length.unshift(tail);
    
    // Draw Snake
    for (var i = 0; i < snake.stage.length.length; i++) {
    	var cell = snake.stage.length[i];
    	this.drawCell(cell.x, cell.y);
    }
    
    // Draw Food
    this.drawCell(snake.stage.food.x, snake.stage.food.y);
    
    // Draw Score
    context.fillText('Score: ' + snake.stage.score, 5, (snake.stage.height - 5));
};

  // Draw Cell
  this.drawCell = function(x, y) {
  	context.fillStyle = 'rgb(170, 170, 170)';
  	context.beginPath();
  	context.arc((x * snake.stage.conf.cw + 6), (y * snake.stage.conf.cw + 6), 4, 0, 2*Math.PI, false);    
  	context.fill();
  };
  
  // Check Collision with walls
  this.collision = function(nx, ny) {  
  	if (nx == -1 || nx == (snake.stage.width / snake.stage.conf.cw) || ny == -1 || ny == (snake.stage.height / snake.stage.conf.cw)) {
  		return true;
  	}
  	return false;    
  }
};


/**
 * Game Snake
 */
 Game.Snake = function(elementId, conf) {
 	
  // Sets
  var canvas   = document.getElementById(elementId);
  var context  = canvas.getContext("2d");
  var snake    = new Component.Snake(canvas, conf);
  var gameDraw = new Game.Draw(context, snake);
  
  // Game Interval
  setInterval(function() {gameDraw.drawStage();}, snake.stage.conf.fps);
};


/**
 * Window Load
 */
 window.onload = function() {
 	var snake = new Game.Snake('stage', {fps: 100, size: 4});
 };

 $(document).ready(function(){
 	$('.box').on("click", function() {
  // Set clicked class on current .div (box) 
  $(this).addClass('clicked');
  // Check that .game does not have class gameover, has the class player1 and does not have classes clicked1 or clicked2 (already clicked)
  if ( !$('.game').hasClass('gameover') && $('.game').hasClass('player1') && !$(this).hasClass('clicked1') && !$(this).hasClass('clicked2') ) {
    // If not, add class clicked1 (pink player clicked), toggle player1 class on .game DIV (player2's turn), set .winner DIV html to blue players turn
    $(this).addClass('clicked1');
    $('.game').toggleClass('player1');
    $('.winner').html('<span style="color:#35ea97;">Green</span> players turn!');
  // Same thing but this time we check that .game DIV does not have player1 class so it's blue players turn
} else if ( !$('.game').hasClass('gameover') && !$('.game').hasClass('player1') && !$(this).hasClass('clicked1') && !$(this).hasClass('clicked2') ) {
	$(this).addClass('clicked2');
	$('.game').toggleClass('player1');
	$('.winner').html('<span style="color:#333333;">Grey</span> players turn!')
}
});

// Check for a winner
$('.game').on("click", function() {
  // Pink player winning combinations
  if ( !$('.game').hasClass('gameover') &&
  	$(".box:nth-child(1)").hasClass('clicked1') && $(".box:nth-child(2)").hasClass('clicked1') && $(".box:nth-child(3)").hasClass('clicked1') || 
  	$(".box:nth-child(4)").hasClass('clicked1') && $(".box:nth-child(5)").hasClass('clicked1') && $(".box:nth-child(6)").hasClass('clicked1') || 
  	$(".box:nth-child(7)").hasClass('clicked1') && $(".box:nth-child(8)").hasClass('clicked1') && $(".box:nth-child(9)").hasClass('clicked1') || 
  	$(".box:nth-child(1)").hasClass('clicked1') && $(".box:nth-child(4)").hasClass('clicked1') && $(".box:nth-child(7)").hasClass('clicked1') || 
  	$(".box:nth-child(2)").hasClass('clicked1') && $(".box:nth-child(5)").hasClass('clicked1') && $(".box:nth-child(8)").hasClass('clicked1') || 
  	$(".box:nth-child(3)").hasClass('clicked1') && $(".box:nth-child(6)").hasClass('clicked1') && $(".box:nth-child(9)").hasClass('clicked1') || 
  	$(".box:nth-child(1)").hasClass('clicked1') && $(".box:nth-child(5)").hasClass('clicked1') && $(".box:nth-child(9)").hasClass('clicked1') || 
  	$(".box:nth-child(3)").hasClass('clicked1') && $(".box:nth-child(5)").hasClass('clicked1') && $(".box:nth-child(7)").hasClass('clicked1') ) {
      // Set HTML on .winner DIV to winning player
      $('.winner').html('<span style="color: #333333;">Grey</span> player wins!');
      // Add class gameover to .game DIV to prevent further play
      $('.game').addClass('gameover');
      // Show the .go DIV with overlay GAME OVER text
      $('.go').css('visibility', 'visible');
  // Blue player winning combinations
} else if ( !$('.game').hasClass('gameover') && 
	$(".box:nth-child(1)").hasClass('clicked2') && $(".box:nth-child(2)").hasClass('clicked2') && $(".box:nth-child(3)").hasClass('clicked2') || 
	$(".box:nth-child(4)").hasClass('clicked2') && $(".box:nth-child(5)").hasClass('clicked2') && $(".box:nth-child(6)").hasClass('clicked2') || 
	$(".box:nth-child(7)").hasClass('clicked2') && $(".box:nth-child(8)").hasClass('clicked2') && $(".box:nth-child(9)").hasClass('clicked2') || 
	$(".box:nth-child(1)").hasClass('clicked2') && $(".box:nth-child(4)").hasClass('clicked2') && $(".box:nth-child(7)").hasClass('clicked2') || 
	$(".box:nth-child(2)").hasClass('clicked2') && $(".box:nth-child(5)").hasClass('clicked2') && $(".box:nth-child(8)").hasClass('clicked2') || 
	$(".box:nth-child(3)").hasClass('clicked2') && $(".box:nth-child(6)").hasClass('clicked2') && $(".box:nth-child(9)").hasClass('clicked2') || 
	$(".box:nth-child(1)").hasClass('clicked2') && $(".box:nth-child(5)").hasClass('clicked2') && $(".box:nth-child(9)").hasClass('clicked2') || 
	$(".box:nth-child(3)").hasClass('clicked2') && $(".box:nth-child(5)").hasClass('clicked2') && $(".box:nth-child(7)").hasClass('clicked2') ) {
	$('.winner').html('<span style="color: #35ea97;">Green</span> player wins!');
	$('.game').addClass('gameover');
	$('.go').css('visibility', 'visible');
  // All boxes are clicked and no winner
} else if ( $('.box:nth-child(1)').hasClass('clicked') && $('.box:nth-child(2)').hasClass('clicked') && $('.box:nth-child(3)').hasClass('clicked') &&     $('.box:nth-child(4)').hasClass('clicked') && $('.box:nth-child(5)').hasClass('clicked') && $('.box:nth-child(6)').hasClass('clicked') && $('.box:nth-child(7)').hasClass('clicked') && $('.box:nth-child(8)').hasClass('clicked') && $('.box:nth-child(9)').hasClass('clicked') ) {
	$('.winner').html('It\'s a tie!');
	$('.game').addClass('.gameover');
	$('.go').css('visibility', 'visible');
}
});

// Reset game, remove all classes from .box DIV's, add class player1 to .game DIV if not already there, reset html of .winner DIV, remove gameover class from .game DIV, remove .go overlay DIV
$('button.reset').on("click", function() {
	$('.box').removeClass('clicked1');
	$('.box').removeClass('clicked2');
	if ( !$('.game').hasClass('player1') ) {
		$('.game').addClass('player1'); 
	}
	$('.winner').html('<span style="color:#333333;">Grey</span> players turn!');
	$('.game').removeClass('gameover');
	$('.box').removeClass('clicked');
	$('.go').css('visibility', 'hidden');
});
});




$(document).ready(function(){
	$(".menu").on("change", function(event) {
		var choice = $(this).val();
		$(".item.active").removeClass("active");
		$("." + choice).addClass("active");
	});

// End of Your Code . Don't delete that line below!!
});