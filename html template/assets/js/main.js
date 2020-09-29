/*
	Projection by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

})(jQuery);

let usernames = ["10401","10402","10403","10404","10405","10406","10407","10408","10409","10410","10411","10412","10413","10414","10415","10416","10417","10418","10419","10420"]
//let passwordBox;
let passwords = ["rladnjsghl","rlackdals","alscksghd","qkrdPgns","qkrwjddnr","qkrwnstkd","qkrwldlf","qotjwns","tjdwnsgur","thsxodnjs",'dhdbtkd','dntmdgus','dbxorbs','dlrjsdnjs','dlrnjsgus','dldudwns','dldndcjs','dlwowls','dlwngus','dlgusals'];
let loginButton;
let username;
let password;
let footer;
let cnv;
let users;
function preload(){
    users = loadJSON('users.json');
}
function setup(){
    loginButton = select(".button.alt");
    loginButton.mousePressed(checklogin);
    noCanvas();
}

function draw(){
    if(keyIsPressed&&keyCode == 13){
        checklogin();
    }
        
}
function checklogin(){
    console.log("yyoo");
    let usernameR = false;
    let passwordR = false;
    let usernameV = username.value();
    console.log(usernameR + " " + passwordR);
    let num;
    for(let i = 0; i<usernames.length; i++){
        if(usernames[i] == usernameV){
            usernameR = true;
            num = i;
        }
    }
    if(usernameR&&passwords[num] == password.value()){
        passwordR = true;
    }
    console.log(usernameR + " " + passwordR);
    if(usernameR == true&&passwordR == true){
        console.log("freshPrince");
        footer.hide();
    }
    
}