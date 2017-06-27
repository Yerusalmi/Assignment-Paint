	
	var everything = document.getElementsByTagName('body')[0];
	var mainDiv = document.createElement('div');
	everything.appendChild(mainDiv);
	mainDiv.classList.add('contain');
	var canvasArea = document.createElement('div');
	canvasArea.classList.add('col');
	mainDiv.appendChild(canvasArea);
	
	var buttons = document.createElement('div');
	mainDiv.appendChild(buttons);
	
	
	
	var customizer = document.createElement('div');
	customizer.id = 'customDetails';
	
	
	var colorInput = document.createElement('input'); // color palatte
	colorInput.type = 'color';
	
	
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
	
	customizer.appendChild(colorInput);
	customizer.appendChild(heighName);
	customizer.appendChild(heightcustom);
	customizer.appendChild(br);
	customizer.appendChild(widthName);
	customizer.appendChild(widthcustom);
	
	var originalHeight;
	var originalWidth;

	var canvasHeight = prompt('Height of your canvas in pixels:', 'Default: 500');
	var canvasWidth = prompt('Width of your canvas in pixels:', 'Default: 500');
	var bgColor = prompt('Background Color: (default:white)', 'black,white,grey,lightgrey'); // BG color prompt
	
	if ((isNaN(canvasHeight)) || (canvasHeight < 500)) {
		originalHeight = 500;
		originalWidth = 500;
	} else {
		originalHeight = canvasHeight;
		originalWidth = canvasWidth;
	}
	console.log(canvasHeight);
	console.log(canvasWidth);
	console.log(originalHeight);
	console.log(originalWidth);

	var canvas = document.createElement("div");
	canvasArea.appendChild(canvas);
	canvas.style.width = originalHeight + 'px';
	canvas.style.height = originalWidth + 'px';
	canvas.style.backgroundColor = bgColor;
	canvas.style.overflow = 'hidden';
	canvas.style.position = 'relative';
	canvas.style.border = '1px solid black';
	canvas.className = 'hello';

	var customheight = 10;
	var customwidth = 10;

		
	// Eraser
		    
		 //   var eraser = document.getElementById('myEraser');
		//    eraser.addEventListener("click", function(){
			    
			    
			    
			    
	
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
			if (click.buttons === 2) {
				alert('sag click');
				return;
			}
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
		    kare.style.backgroundColor = colorInput.value;
		    kare.style.top = y +'px';
		    kare.style.left = x-10 +'px';
		    kare.style.borderRadius = '50px'; // circle
		    
		    
		 

		});
		
		


