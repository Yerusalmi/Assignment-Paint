	
	







	
	
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
	
	// color palatte
	var colorSpan = document.createElement('span');
		colorSpan.style.display = 'block';
		colorSpan.innerHTML = 'Pick a brush color:';
	
	var colorInput = document.createElement('input'); 
		colorInput.type = 'color';
	
	// Background color palatte
	var colorBgSpan = document.createElement('span');
		colorBgSpan.style.display = 'block';
		colorBgSpan.innerHTML = 'Pick a background color:';
	
	var colorBgInput = document.createElement('input');
		colorBgInput.type = 'color';
	
	
	
	
	
	var heighName = document.createElement('span');
	heighName.style.display = 'block';
	heighName.innerHTML = 'Custom Brush Size:';
	
	var radiuscustom = document.createElement('input');
	radiuscustom.id = 'hight';
	radiuscustom.setAttribute('type', 'number')
	var br = document.createElement('br');
	

	
	var totalSpan = document.createElement('span');
	totalSpan.style.display = 'block';
	totalSpan.innerHTML = 'Custom Brush Radius:';
	var totalRadius = document.createElement('input');
	totalRadius.id = 'borderradius';
	totalRadius.setAttribute('type', 'number')
	
	
	buttons.appendChild(customizer);
	
	customizer.appendChild(colorSpan);
	customizer.appendChild(colorInput);
	customizer.appendChild(colorBgSpan);
	customizer.appendChild(colorBgInput);

	customizer.appendChild(heighName);
	customizer.appendChild(radiuscustom);

	customizer.appendChild(totalSpan);
	customizer.appendChild(totalRadius);

	
	var originalHeight;
	var originalWidth;

	var canvasHeight = prompt('Height of your canvas in pixels:', 'Default: 350');
	var canvasWidth = prompt('Width of your canvas in pixels:', 'Default: 350');
	
	if ((isNaN(canvasHeight)) || (canvasHeight < 300)) {
		originalHeight = 350;
		originalWidth = 350;
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
	canvas.style.backgroundColor = 'lightgrey';
	canvas.style.overflow = 'hidden';
	canvas.style.position = 'relative';
	canvas.style.border = '1px solid black';
	canvas.className = 'hello';

	var customRadius = 10;
	var customBorderRadius = 10;
		
	// Eraser
		    
		 //   var eraser = document.getElementById('myEraser');
		//    eraser.addEventListener("click", function(){
			    
		    
	colorBgInput.addEventListener("change", function() {
		canvas.style.backgroundColor = colorBgInput.value;	
	});	
	
	
		    
			    
	
		document.addEventListener("mousemove", function(click){
			
			document.addEventListener("change", function() {	//	Custom brush size on empty fields
				var yourHeight = document.getElementById('hight');
				if (radiuscustom.value === ''){
					customRadius = 10;
				} else {
				customRadius = yourHeight.value;
				}
				
				var csmRadius = document.getElementById('borderradius');
				if (totalRadius.value === ''){
					customBorderRadius = 50;
				} else {
				customBorderRadius = csmRadius.value;
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
			var denemeColor = document.getElementById('deneme');
		    
		    var screenWidth = document.documentElement.clientWidth;
		    var newScreen = screenWidth/2
		    
		    var kare = document.createElement('div');
		    canvas.appendChild(kare)
		    kare.style.height = customRadius + 'px';
		    kare.style.width = customRadius + 'px';
		    kare.style.position = 'absolute';
		    kare.style.backgroundColor = colorInput.value;
		    kare.style.top = y +'px';
		    kare.style.left = x +'px';
		    kare.style.borderRadius = customBorderRadius + 'px'; // circle
		    
		    
		    
		    
		    
		 

		});
		
		


