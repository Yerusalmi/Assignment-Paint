	
	var everything = document.getElementsByTagName('body')[0];
	var mainDiv = document.createElement('div');
	everything.appendChild(mainDiv);
	mainDiv.classList.add('contain');
	var canvasArea = document.createElement('div');
	canvasArea.classList.add('col');
	mainDiv.appendChild(canvasArea);
	
	var buttons = document.createElement('div');
	mainDiv.appendChild(buttons);
	
	
	
	var red = document.createElement('button');
	red.setAttribute('data-color', '0');
	red.setAttribute('onClick', 'getColor(event);');
	red.innerHTML = 'Red';
	var blue = document.createElement('button');
	blue.setAttribute('data-color', '1')
	blue.setAttribute('onClick', 'getColor(event);');
	blue.innerHTML = 'Blue';
	var green = document.createElement('button');
	green.setAttribute('data-color', '2')
	green.setAttribute('onClick', 'getColor(event);');
	green.innerHTML = 'Green';
	var purple = document.createElement('button');
	purple.setAttribute('data-color', '3')
	purple.setAttribute('onClick', 'getColor(event);');
	purple.innerHTML = 'Purple';
	var orange = document.createElement('button');
	orange.setAttribute('data-color', '4')
	orange.setAttribute('onClick', 'getColor(event);');
	orange.innerHTML = 'Orange';
	
	buttons.appendChild(red);
	buttons.appendChild(blue);
	buttons.appendChild(green);
	buttons.appendChild(purple);
	buttons.appendChild(orange);
	var customizer = document.createElement('div');
	customizer.id = 'customDetails';
	
	var heighName = document.createElement('span');
	heighName.style.display = 'block';
	heighName.innerHTML = 'Custom Brush Height:';
	var heightcustom = document.createElement('input');
	heightcustom.id = 'hight';
	var br = document.createElement('br');
	
	var widthName = document.createElement('span');
	widthName.style.display = 'block';
	widthName.innerHTML = 'Custom Brush Width:';
	var widthcustom = document.createElement('input');
	widthcustom.id = 'width';
	
	
	buttons.appendChild(customizer);
	

	customizer.appendChild(heighName);
	customizer.appendChild(heightcustom);
	customizer.appendChild(br);
	customizer.appendChild(widthName);
	customizer.appendChild(widthcustom);

	var canvasHeight = prompt('Height of your canvas:', 'in pixels');
	var canvasWidth = prompt('Width of your canvas:', 'in pixels');

	var canvas = document.createElement("div");
	canvasArea.appendChild(canvas);
	canvas.style.width = canvasHeight + 'px';
	canvas.style.height = canvasWidth + 'px';
	canvas.style.backgroundColor = 'lightgrey';
	canvas.style.overflow = 'hidden';
	canvas.style.position = 'relative';
	canvas.className = 'hello';

	var colors = ['red','blue','green','purple','orange']
	var t = 'black';
	var customheight = 10;
	var customwidth = 10;

	function getColor(event) {
			t = event.target.getAttribute('data-color'); 
			console.log(t);
		}
	
		document.addEventListener("mousemove", function(click){
			
			document.addEventListener("change", function() {	//	Custom brush size on empty fields
				var yourHeight = document.getElementById('hight');
				if (yourHeight.value === ''){
					customheight = 10;
				} else {
				customheight = yourHeight.value;
				}
				var yourWidth = document.getElementById('width');
				if (yourWidth.value === ''){
					customwidth = 10;
				} else {
				customwidth = yourWidth.value;
				}
			});
			


			if (click.buttons !== 1) return;
				var x = event.clientX;     // Get the horizontal coordinate
				var y = event.clientY;     // Get the vertical coordinate
				var coor = "X coords: " + x + ", Y coords: " + y;
			
			console.log(click);
			console.log(coor);
		    
		    var kare = document.createElement('div');
		    canvas.appendChild(kare)
		    kare.style.height = customheight + 'px';
		    kare.style.width = customwidth + 'px';
		    kare.style.position = 'absolute';
		    kare.style.backgroundColor = colors[t];
		    kare.style.top = y +'px';
		    kare.style.left = x-10 +'px';
		    kare.style.borderRadius = '50px'; // circle
		 

		});
		
		


