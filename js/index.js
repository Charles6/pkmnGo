var menuPush = false;

function move() {
	if (menuPush == false) {
		console.log("turning on");
		document.getElementById('bottomButton').innerHTML = 
			'<button id="newtop" class="buttons" onclick="top1Push()">Poke<br>Dex</button>';
		document.getElementById('bottomButton').style.marginTop = 100+"px";
		document.getElementById('newtop').style.opacity = 1;
		document.getElementById('newtop').style.opacity = 1;
		document.getElementById('newtop').style.opacity = 1;
		document.getElementById('newtop').style.opacity = 1;
		document.getElementById('wrapper').style.backgroundColor = "#99ff33";
		document.getElementById('wrapper').style.opacity = 0.8;

		document.getElementById('leftButton').style.marginTop = 25 + "px";
		document.getElementById('leftButton').style.marginLeft = -200 + "px";
		document.getElementById('leftButton').innerHTML = 
			'<button id="newleft" class="buttons" onclick="leftPush()">Poke<br>mon</button>';

		document.getElementById('rightButton').style.marginTop = -100 + "px";
		document.getElementById('rightButton').style.marginLeft = 200 + "px";
		document.getElementById('rightButton').innerHTML = 
			'<button id="newright" class="buttons" onclick="rightPush()">Items</button>';

		document.getElementById('bottomButton2').innerHTML = 
			'<button id="newtop2" class="buttons" onclick="top2Push()">Shop</button>';
		document.getElementById('bottomButton2').style.marginTop = 100 +"px";
		menuPush = true;
		return;
	}
	if (menuPush == true) {
		console.log("turning off");
		document.getElementById('bottomButton').style.marginTop = 500+"px";
		document.getElementById('bottomButton2').style.marginTop = -100 +"px";
		document.getElementById('leftButton').style.marginTop = -100 + "px";
		document.getElementById('leftButton').style.marginLeft = 0 + "px";
		document.getElementById('rightButton').style.marginTop = -100 + "px";
		document.getElementById('rightButton').style.marginLeft = 0 + "px";
		setTimeout(function() {
			document.getElementById('bottomButton').innerHTML = '';
			document.getElementById('bottomButton2').innerHTML = '';
			document.getElementById('leftButton').innerHTML = '';
			document.getElementById('rightButton').innerHTML = '';
		}, 600);
		document.getElementById('wrapper').style.backgroundColor = "white";
		document.getElementById('wrapper').style.opacity = 0;
		menuPush = false;
		return;
	}

	
};

function top1Push() {
	console.log("one");
};
function top2Push() {
	console.log("two");
};
function leftPush() {
	console.log("left");
};
function rightPush() {
	console.log("right");
};