//BH
if(!window.AWTSMOOS) {
	AWTSMOOS = ATZMOOS = ATZ = AWTS = function(){
		
	};
}

Object.defineProperty(AWTSMOOS,"Nuhguh",{
	get:()=>function(opts={}) {
		var ID = "BH_"
			+Date.now()
		
		var blocks = []
		window.bb=blocks
		AWTS.html({
				tag:"style",
				innerHTML: 
			
			`
					.relative{
						position:relative;
						width:100%;height:100%;
					}

					.${ID}pan{
						position:absolute;
						right:156px;
						bottom:26px;
						box-shadow:0 0 6px black;
						width:63px;
						height:100px;
						background:tan;
					}

					.${ID}pan .top{
						width:100%;
						height:50%;
						
					}
						
					.${ID}pan .top:hover{
						cursor:pointer
					}
					
					.${ID}pan .top:active{
						box-shadow:0 0 8px black inset;
					}
					.${ID}pan .top::after{
						content:"${'\\'+'21fe'}";
						transform:rotate(270deg) scale(4) translate(-20%,30%);
						display:inline-block
					}


					.${ID}pan .bottom{
						width:100%;
						height:50%;
						
					}
						
					.${ID}pan .bottom:hover{
						cursor:pointer
					}
					
					.${ID}pan .bottom:active{
						box-shadow:0 0 8px black inset;
					}
					.${ID}pan .bottom::after{
						content:"${'\\'+'21fe'}";
						transform:rotate(90deg) scale(4) translate(25%,-20%);
						display:inline-block
					}
	

					.${ID}awveeric{
						position:absolute;
						bottom:26px;
						right:26px;
						width:72px;height:72px;
						box-shadow:0px 0px 8px black;
						opacity:0.6;
						background:cyan;
						transition: background 0.3s;
					}

					.${ID}awveeric:hover{
						#box-shadow:0px 0px 16px black;
						#background:white;
						cursor:pointer;
					}

					.${ID}awveeric:active{
						box-shadow:0px 0px 16px black inset;
						background:blue;
					}

					.${ID+"roochos"}{ 
					margin:0;
					position:absolute;
					bottom:26px;
					left:26px;
					display:inline-block;
					width:100;height:100;
					box-shadow: 0px 0px 5px black;
					opacity:0.7;
					border-radius:55%;
					#background:Cyan;
					}
					.${ID}Kawd{
						z-index:3;
						display:inline-block;
						width:18%;height:18%;
						position:relative;
						left:50%;top:50%;
						transform:translate(-50%,-50%);
						box-shadow:0px 0px 6px black inset;
						background:orange;
						border-radius:50%;
						pointer-events:none
					}
					.${ID}chaylik.peenuh{
						background:yellow;
					}
					.${ID}chaylik{
						transition:background 0.2s;
						position:absolute;
						background:blue;
						z-index:2;
						width:34%;height:34%;
						box-shadow:0px 0px 6px black inset;
						left:0;


						pointer-events:none;
						top:0;
						transform:translate(0,0)
					}
				`

			})
		
		var isd = false
		this.resetPosition=()=>{
			Object.keys(defaultKawdoyrification)
			.forEach(k=>{
				kawdoyr.style[k]=defaultKawdoyrification[k]
			})
			blocks.forEach(b=>{
				b.style.background=""
			})
		}
		
		document.addEventListener("mouseup",()=>{
			isd=false
			//atzmo.resetPosition()
			//atzmo.resetRoochos()
		})
		
		
		/*document.addEventListener("touchend",()=>{
			isd=false
			atzmo.resetPosition()
			atzmo.resetRoochos()
		})*/
		
		
		document.addEventListener("mousedown",()=>{
			isd=true
		})
		
		var bounds;
		var fc
		window.bn=()=>fc.bounds
		window.gfc=()=>fc;
		var kawdoyr
		var defaultKawdoyrification;
		
		
		var spaceBar = AWTSMOOS.html({
			className:ID+"awveeric",
			events:t=>({
				contextmenu(e){
					e.preventDefault()
				},
				mousedown(e) {
					atzmo.roochos.space=1
				},
				touchstart(e){
					atzmo.roochos.space=1
				},
				touchend(e){
					atzmo.roochos.space=0	
				},
				mouseup(e){
					atzmo.roochos.space=0	
				}
			})
		});
		
		var cameraPan = AWTSMOOS.html({
			className:ID+"pan",
			events:t=>({
				contextmenu(e){
					e.preventDefault()
				}
			}),
			toldos:t=>[
				{
					className:"top",
					events:{
						mousedown(e) {
							atzmo.roochos.panUp=1
						},
						touchstart(e){
							atzmo.roochos.panUp=1
						},

						touchend(e){
							atzmo.roochos.panUp=0	
						},
						mouseup(e){
							atzmo.roochos.panUp=0	
						}
					}
				},
				
				{
					className:"bottom",
					events:{
						mousedown(e) {
							atzmo.roochos.panDown=1
						},
						touchstart(e){
							atzmo.roochos.panDown=1
						},

						touchend(e){
							atzmo.roochos.panDown=0	
						},
						mouseup(e){
							atzmo.roochos.panDown=0	
						}
					}
				}
			]
		})
		var arrows = AWTSMOOS.html({
			tag:"div",
			className:ID+"roochos",
			toldos:[{
				start(c) {
					bounds = c.getClientRects()[0]//getBoundingClientRect()
					fc=c;
					c.bounds=bounds;
					console.log("hi33",bounds)
					/*c.addEventListener("mousemove",e=>{
						console.log("wow")
					})*/
				},
				events: t=> ({
					contextmenu(e){
						e.preventDefault()
					},
					mousedown(e) {

						isd=true
						moveInner(t,e)	
					},
					touchstart(e){
						isd = true
						touchMove(t,e)				
					},
					
					mouseup(e){
						
						atzmo.resetPosition()
						atzmo.resetRoochos()
						isd=false
					},
					touchend(e){
						
						atzmo.resetPosition()
						atzmo.resetRoochos()
						isd=false
					},
					touchmove(e){
						touchMove(t,e)
					},
					mousemove(e){
						moveInner(t,e)
					//	console.log("hi?")
					}
				}),
				className:"relative",
				toldos: [
					{
						shaym:"kadoyr",
						className:ID+"Kawd",
						start(y) {
							var cs = getComputedStyle(y)
							var left = cs.left
							var top = cs.top
							var transform = cs.transform
							defaultKawdoyrification = {
								left,top,transform	
							}
							kawdoyr=y;
							y.bounds = y.getClientRects()[0]	
						}
					},
					{
						shaym:"chaylickElyon",
						className:ID+"chaylik",
						start(y){
							blocks.push(y)
							var st=getComputedStyle(y)
							.transform
							y.style.transform = st;
							y.style.left="50%"
							y
								.style
								.transform
								+="translateX(-50%)"
							y.bounds = y.getClientRects()[0]

						}
					},
					{
						shaym:"chaylickTachton",
						className:ID+"chaylik",
						start(y){
							blocks.push(y)							
							var st=getComputedStyle(y)
							.transform
							y.style.transform = st;
							y.style.left="50%"
							y.style.top ="100%"
							y
								.style
								.transform
								+="translate(-50%,-100%)"
							y.bounds = y.getClientRects()[0]
						}
					},
					{
						shaym:"chaylickYawmeen",
						className:ID+"chaylik",
						start(y){
							blocks.push(y)
							var st=getComputedStyle(y)
							.transform
							y.style.transform = st;
							y.style.left="100%"
							y.style.top ="50%"
							y.style.transform
								+="translate(-100%,-50%)"
							y.bounds = y.getClientRects()[0]
						}
					},
					{
						shaym:"chaylickSmoyl",
						className:ID+"chaylik",
						start(y){
							blocks.push(y)
							var st=getComputedStyle(y)
							.transform
							y.style.transform = st;
							
							y.style.top ="50%"
							y.style.transform+="translate(0,-50%)"
							y.bounds = y.getClientRects()[0]
						}
					}//corners
					,
					{
						shaym:"chaylickElyonSmoyl",
						className:ID+"chaylik peenuh",
						start(y){
							blocks.push(y)
							var st=getComputedStyle(y)
							.transform
							y.style.transform = st;
							y.bounds = y.getClientRects()[0]
						//	y.style.left="50%"
					//	y.style.transform+="translateX(-50%)"

						}
					},
					{
						shaym:"chaylickTachtonSmoyl",
						className:ID+"chaylik peenuh",
						start(y){
							blocks.push(y)							
							var st=getComputedStyle(y)
							.transform
							y.style.transform = st;
						//	y.style.left="50%"
							y.style.top ="100%"
							y
								.style
								.transform
								+="translate(0,-100%)"
							y.bounds = y.getClientRects()[0]
						}
					},
					{
						shaym:"chaylickYawmeenElyon",
						className:ID+"chaylik peenuh",
						start(y){
							blocks.push(y)
							var st=getComputedStyle(y)
							.transform
							y.style.transform = st;
							y.style.left="100%"
						//	y.style.top ="50%"
							y
								.style
								.transform
								+="translate(-100%,0)"
							y.bounds = y.getClientRects()[0]
						}
					},
					{
						shaym:"chaylickYawmeenTachtoyn",
						className:ID+"chaylik peenuh",
						start(y){
							blocks.push(y)
							var st=getComputedStyle(y)
							.transform
							y.style.transform = st;
							y.style.left="100%"
							y.style.top ="100%"
							y.style
								.transform+="translate(-100%,-100%)"
							y.bounds = y.getClientRects()[0]
						}
					}
				]
			}]
			
		})
		
		var map = {
			top:"chaylickElyon",
			bottom:"chaylickTachton",
			right:"chaylickYawmeen",
			left:"chaylickSmoyl",
			
			lefttop:"chaylickElyonSmoyl",
			leftbottom:"chaylickTachtonSmoyl",
			rightbottom:"chaylickYawmeenTachtoyn",
			
			righttop:"chaylickYawmeenElyon",
			space:false
		};
		
		function touchMove(t,e) {
			var x1 = Math.abs(e.touches[0]
				.clientX - fc.bounds.x)
			var y1 = Math.abs(e.touches[0]
				.clientY - fc.bounds.y)
			//console.log("hi",x1,y1,e.touches[0].clientX,e.touches[0].clientY,bounds.x,bounds.y)
			//console.log(e.touches[0])
			isd = true
			moveInner(t,{
				clientX:e.touches[0].clientX,
				clientY:e.touches[0].clientY,
				offsetX:x1,
				offsetY:y1
			})
		}
		
		addEventListener("resize",e=>{
			console.log("OK")
			blocks.forEach(q=>{
				q.bounds = q.getClientRects()[0]
			})
			fc.bounds = bounds = fc.getClientRects()[0]
			kawdoyr.bounds = kawdoyr.getClientRects()[0]
		})
		
		var kad;
		window.hh=()=>kad
		function moveInner(t,e) {
			if(!isd) return;
			
//			console.log(e)	
			var x = e.offsetX;
			var y = e.offsetY
		//	console.log(x,y)
			kad = t("kadoyr")
			kad.style.left=x
			kad.style.top=y
			
			var mx=e.clientX
			var my=e.clientY
			pawgeeshuh(mx,my,blocks)
			window.jj=t;
			
		}
		
		
		var reverseMap = Object.fromEntries(
			Object.entries(map)
			.map(q=>[
				q[1],q[0]
			])
		)
		
		var starting = Object.fromEntries(
			Object.keys(map).map(q=>[
				q,0
			])
		)
		
		
		map=reverseMap;
		
		this.directions = this.roochos = starting;
		var atzmo = this;
		var hitting = []
		var mapt;
		this.resetRoochos = ()=>{
			Object.keys(this.roochos)
			.forEach(q=>{
				this.roochos[q] = 0
			})
			hitting=[]
		};
		var ind
		var hitin;
		function pawgeeshuh(x,y,blocks) {
			
			atzmo.resetRoochos()
			blocks.forEach(b=>{
				hitin = !hitting.includes(b)
				if(hitin)
					b.style.background="";
				
				if(boundsInBounds(
					{
						width:kad.bounds.width,
						height:kad.bounds.height,
						x:x-kad.bounds.width/2//:x+bounds.x
						,
						y:y-kad.bounds.height/2//:y+bounds.y
					},b.bounds
				)) {
					hitting.push(b)
					//console.log(b.shaym)
				
				} else{// if(!hitin){
					ind = hitting.indexOf(b)
					
					if(ind<=-1) return;
					
					b.style.background="";
					hitting.splice(ind,1)
					console.log("DID")
				}
			})
			
			if(!hitting.length) return;
			hitting.forEach(b=>{
//				if(b.style.background=="cyan")return
				mapt = map[b.shaym]
			//	console.log(mapt,b.shaym,map)
				if(!mapt) return;
				atzmo.roochos[mapt] = 1
				
				b.style.background="cyan"
			})
			//hitting = []
		}
		
		function boundsInBounds(b1,b2) {
			//console.log(b1,b2)
			return (
				b1.x + b1.width > b2.x&&
				b1.x < b2.x + b2.width &&
				b1.y + b1.height > b2.y&&
				b1.y < b2.y + b2.height
				/*b1.x + b1.width >
				b2.x &&
				b1.x < b2.x + b2.width &&
				
				b1.y + b1.height >
				b2.y &&
				b1.y < b2.y + b2.height*/
			)
		}
		
		
		this.update=()=>{};
		this.setPosition=()=>{};
	}
})
