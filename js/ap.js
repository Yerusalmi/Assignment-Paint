
// Creating the basic HTML
	var everything = document.getElementsByTagName('body')[0];
	var mainDiv = document.createElement('div');
		everything.style.marginTop = '30px';
		everything.style.overflow = 'hidden';
		mainDiv.classList.add('contain');
	var canvasArea = document.createElement('div');
		canvasArea.style.display = 'inline-block';	
	var buttons = document.createElement('div');
		buttons.style.width = '180px';
		buttons.style.display = 'inline-block';
		buttons.style.verticalAlign = 'top';
		buttons.style.paddingLeft = '10px';
		buttons.style.paddingRight = '10px';
		
		everything.appendChild(mainDiv);
		mainDiv.appendChild(buttons);
		mainDiv.appendChild(canvasArea);
	
	var customizer = document.createElement('div');
		customizer.id = 'customDetails';
	
	// color palatte input
	var colorSpan = document.createElement('span');
		colorSpan.style.display = 'block';
		colorSpan.innerHTML = 'Brush color:';
	
	var colorInput = document.createElement('input'); 
		colorInput.type = 'color';
		colorInput.style.width = '115px';

	// Background color palatte input
	var colorBgSpan = document.createElement('span');
		colorBgSpan.style.display = 'block';
		colorBgSpan.innerHTML = 'Background color:';
	
	var colorBgInput = document.createElement('input');
		colorBgInput.type = 'color';
		colorBgInput.setAttribute('value', '#d3d3d3');
		colorBgInput.style.width = '115px';
	
	var heighName = document.createElement('span');
		heighName.style.display = 'block';
		heighName.innerHTML = 'Brush Size:';
	
	var radiuscustom = document.createElement('input');
		radiuscustom.id = 'hight';
		radiuscustom.style.width = '90px';
		radiuscustom.setAttribute('type', 'range');
		radiuscustom.setAttribute('min', '1');
		radiuscustom.setAttribute('max', '50');
		radiuscustom.setAttribute('step', '1');
		radiuscustom.setAttribute('value', '10');
	var br = document.createElement('br');

	var totalSpan = document.createElement('span');
		totalSpan.style.display = 'block';
		totalSpan.innerHTML = 'Brush Radius:';
	var totalRadius = document.createElement('input');
		totalRadius.id = 'borderradius';
		totalRadius.setAttribute('type', 'number')
		totalRadius.style.width = '115px';
	
	// Appending the Elements
	buttons.appendChild(customizer);
	customizer.appendChild(colorSpan);
	customizer.appendChild(colorInput);
	customizer.appendChild(colorBgSpan);
	customizer.appendChild(colorBgInput);
	customizer.appendChild(heighName);
	customizer.appendChild(radiuscustom);
	customizer.appendChild(totalSpan);
	customizer.appendChild(totalRadius);

	// Custom Canvas Height
	var originalHeight;
	var originalWidth;
	
	// Don't go over screen height and width
	var screenHeight = screen.height;
	var screenWidth = window.innerWidth;
	
	var canvasHeight;
	var canvasWidth;
	

	// Custom Canvas Size Prompt
	var canvasHeight = prompt('Height of your canvas in pixels:', 'Default: 350');
		if (canvasHeight > screenHeight) {
			canvasHeight = screenHeight - 200;
			console.log(screenHeight)
		}
	var canvasWidth = prompt('Width of your canvas in pixels:', 'Default: 350');
		if (canvasWidth > screenWidth) {
			canvasWidth = screenWidth - 200;
			console.log(screenWidth)
		}
	
	// If custom cavas size is not a number
	if ((isNaN(canvasHeight)) || (canvasHeight < 300)) {
		originalHeight = 350;
		originalWidth = 350;
	} else {
		originalHeight = canvasHeight;
		originalWidth = canvasWidth;
	}
	
	var canvas = document.createElement("div");
		canvas.style.width = originalWidth + 'px';
		canvas.style.height = originalHeight + 'px';
		canvas.style.backgroundColor = 'lightgrey';
		canvas.style.overflow = 'hidden';
		canvas.style.position = 'relative';
		canvas.style.border = '1px solid black';
		canvas.className = 'hello';
	
		canvasArea.appendChild(canvas);
		
	var customRadius = 10;
	var customBorderRadius = 10;
		
	// Eraser
	var eraserButton = document.createElement('div')
	eraserButton.id = 'myEraser';
	eraserButton.style.width = '50px';
	eraserButton.style.marginTop = '10px';
	eraserButton.style.marginBottom = '10px';
	eraserButton.style.height = '50px';
	eraserButton.style.cursor = 'pointer';
	eraserButton.style.backgroundSize = 'cover';
	eraserButton.style.backgroundImage = 'url("http://vignette1.wikia.nocookie.net/battlefordreamislandfanfiction/images/a/a5/Eraser_Pose.png/revision/latest?cb=20160711202643")';
	
	// Get the color of Background
	eraserButton.addEventListener("click", function(){	
		colorInput.value = colorBgInput.value
	});			    
		    
	customizer.appendChild(eraserButton);
	
	// Reset button
	var reseter = document.createElement('button');
		reseter.id = 'resetthem';
		reseter.style.marginTop = '10px';
		reseter.innerHTML = 'Reset them ALL';
		reseter.style.width = '140px';
	
	
	// Click listener for reset button
	reseter.addEventListener("click", function(){
		canvas.innerHTML = '';
	});
	
	// Click listener for BG input button	    
	colorBgInput.addEventListener("change", function() {
		canvas.style.backgroundColor = colorBgInput.value;
		colorBgInput.style.backgroundColor = colorBgInput.value;	
	});	
	
	// Click listener for brush color button
	colorInput.addEventListener("change", function() {
		colorInput.style.backgroundColor = colorInput.value;	
	});	
	


/*  Counters for straight line (not complete)
			var co1 = [];
			var co2 = []
			var counter = 0;			
*/
			
			 
	// Track mouse move
	canvas.addEventListener("mousemove", function(click){
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
			

		
		if (click.buttons !== 1) return; // right click listener
		if (click.buttons === 2) {
			alert('sag click');
			return; 
		}
			var x = event.clientX;     // Get the horizontal coordinate
			var y = event.clientY;     // Get the vertical coordinate
			var coor = "X coords: " + x + ", Y coords: " + y;

		
/* For making straight lines (not complete)
				if(counter == 0){
					co1=[x-180,y-30];
					var insideLine = document.createElementNS('http://www.w3.org/2000/svg','line');
				    insideLine.setAttribute('x1', co2[0]);
				    insideLine.setAttribute('y1', co2[1]);
				    insideLine.setAttribute('x2', co1[0]);
				    insideLine.setAttribute('y2', co1[1]);
				    insideLine.style.stroke = colorInput.value;
				    insideLine.style.strokeWidth = customRadius + 'px';
					drawLine.appendChild(insideLine);
					
					co2 = [];
					counter ++;

				}
				else if  (counter == 1){
					co2 = [x-185,y-30];
// 						
					var insideLine = document.createElementNS('http://www.w3.org/2000/svg','line');
				    insideLine.setAttribute('x1', co1[0]);
				    insideLine.setAttribute('y1', co1[1]);
				    insideLine.setAttribute('x2', co2[0]);
				    insideLine.setAttribute('y2', co2[1]);
				    insideLine.style.stroke = colorInput.value;
				    insideLine.style.strokeWidth = customRadius + 'px';
					drawLine.appendChild(insideLine);
					counter = 0;
				}
				
				
				console.log(co1,co2,counter);
*/
				
				
			
	var denemeColor = document.getElementById('deneme');
	var screenWidth = document.documentElement.clientWidth;
	var newScreen = screenWidth/2
	
 	
	
	var kare = document.createElement('div'); // Small divs for the brush
		kare.style.height = customRadius + 'px';
		kare.style.width = customRadius + 'px';
		kare.style.position = 'absolute';
		kare.style.backgroundColor = colorInput.value;
		kare.style.top = y - 30 +'px';
		kare.style.left = x -185  +'px';
		kare.style.borderRadius = customBorderRadius + 'px'; // circle or not
		
	canvas.appendChild(kare)

	}); // Mouse move - END
		
/*  For making straight lines (not complete)
	var drawLine = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		drawLine.style.height = originalHeight + 'px';
		drawLine.style.width = originalWidth + 'px';
		drawLine.style.display = 'block';
		canvas.appendChild(drawLine)
*/

	// LocalStorage save and load & clear		
	var loader = document.createElement('button');
		loader.innerHTML = 'Loader';
		loader.id = 'load';
		loader.style.marginLeft = '10px';
		loader.style.width = '65px';
		
	var saver = document.createElement('button');
		saver.innerHTML = 'Save';
		saver.id = 'save';
		saver.style.width = '65px';
		
	var clearer = document.createElement('button');
		clearer.innerHTML = 'Clear Local Storage';
		clearer.id = 'cleaningLocal';
		clearer.style.marginTop = '10px';
		clearer.style.width = '140px';
		
	// Appending the buttons	
	customizer.appendChild(saver);
	customizer.appendChild(loader);
	customizer.appendChild(reseter);
	customizer.appendChild(clearer);
		
	// LocalStorage clear	
	clearer.addEventListener("click", function(){
			localStorage.clear();
	});
	
	// Save to LocalStorage	
	function saveData(){
	  localStorage.setItem("canvas", canvas.innerHTML);
	}
	
	// Clean the whole 'canvas' area.
	function restoreData(){
	  canvas.innerHTML = localStorage.getItem("canvas");
	}
			    
	// Click Listener for save and load.
	loader.addEventListener("click", restoreData);
	saver.addEventListener("click", saveData);
		




