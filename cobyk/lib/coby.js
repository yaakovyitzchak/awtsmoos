var COBY = new (function() {
 this.p = Processing;
 this.t=THREE;
 this.mouseX = 0;
 this.mouseY = 0;
  this.Keyboard = new (function() {
   this.keysDown = [];
   for(var i = 0; i < 200; i++) {
     this.keysDown[i] = false;
   }
   this.RIGHT = 39;
   this.LEFT = 37;
   this.UP = 38;
   this.DOWN = 40;
   this.setKeyDown = function(key) {
     COBY.Keyboard.keysDown[key] = true;
   };
   this.setKeyUp = function(key) {
     COBY.Keyboard.keysDown[key] = false;
   };
   this.isKeyDown = function(key) {
     return COBY.Keyboard.keysDown[key];
   };
 });
  document.body.onkeydown = function(e) {
   COBY.Keyboard.setKeyDown(e.keyCode);

 
 };
  document.body.onkeyup = function(e) {
   COBY.Keyboard.setKeyUp(e.keyCode);
 };
 document.body.onmousemove = function(e) {
   COBY.mouseX = e.x;
   COBY.mouseY = e.y;
 };
 this.shapes = {
   cube:new THREE.BoxGeometry(1,1,1),
   cylinder: new THREE.CylinderGeometry(0.5, 0.5, 1),
   plane: new THREE.PlaneBufferGeometry(1,1),
 };
 this.textures = {
   white:new THREE.MeshLambertMaterial({color:"white"}),
   red:new THREE.MeshLambertMaterial({color:"red"}),
   purple:new THREE.MeshLambertMaterial({color:"purple"}),
   blue:new THREE.MeshLambertMaterial({color:"blue"}),
   pink:new THREE.MeshLambertMaterial({color:"pink"}),
   gray:new THREE.MeshLambertMaterial({color:"gray"}),
   yellow:new THREE.MeshLambertMaterial({color:"yellow"}),
   green:new THREE.MeshLambertMaterial({color:"green"})
 };
  
this.loadTexture = function(name, path) {
  COBY.textures[name] = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture(path)
      });
  console.log(COBY.textures);
};

this.GUIContainer = function(obj) {
	this.div = document.createElement("div");
	this.div.style.position="absolute";
	this.div.style.left=(obj.x || 0) + "px";
	this.div.style.top=(obj.y || 0) + "px";
	this.div.style.background=obj.color || "white";
	this.div.style.width = (obj.width || 100) + "px";
	this.div.style.height = (obj.height || 100) + "px";
	this.div.style.display = obj.invisible ? "none" : "block";
	var that = this;
	this.add = function(g) {
		that.div.appendChild(g.div);
	};
	if(document.body) {
		document.body.appendChild(this.div);
	}
};

this.GUIObject = function(obj) {
	this.div = document.createElement("div");
	this.div.style.position="absolute";
	this.div.style.left=(obj.x || 0) + "px";
	this.div.style.top=(obj.y || 0) + "px";
	this.div.style.background=obj.color || "white";
	this.div.style.width = (obj.width || 100) + "px";
	this.div.style.height = (obj.height || 100) + "px";
	if(obj.text) {
		this.div.innerHTML = "<p class='gTxt'>" + obj.text + "</p>";
	}
	if(obj.type === "button") {
		this.div.className = "btn";
	} 
};

this.Cobject = function(obj,world) {
 this.width=obj.width||1;
 this.height=obj.height||1;
 this.depth=obj.depth||1;
 this.position = new THREE.Vector3();
 this.rotation = {x:0,y:0,z:0};
 this.forReference = obj.forReference;
 if(obj.position) {
this.position.x = obj.position.x || 0;
this.position.y = obj.position.y || 0;
this.position.z = obj.position.z || 0;
 }
 if(obj.rotation) {
 this.rotation.x = obj.rotation.x || 0;
 this.rotation.y = obj.rotation.y || 0;
 this.rotation.z = obj.rotation.z || 0;
 }
 this.worldParent = world || false;
 this.followMouse = obj.followMouse || false;
 this.update=obj.update||function(c){};
 this.start = obj.start || function(){};
 this.texture = COBY.textures[obj.texture];
 //this.texture.wrapS = this.texture.wrapT = THREE.MirroredRepeatWrapping;

 this.mesh=new THREE.Mesh(COBY.shapes[obj.shape],this.texture);
 var self = this;
 
 this.updateTexture = function(path) {
	self.mesh.material.map.image.src = path;
	self.mesh.material.needsUpdate = true;
 }
 
 this.superUpdate = function(cob) {
   self.mesh.scale.set(self.width,self.height,self.depth);
   self.mesh.position.copy(self.position);
   self.mesh.rotation.set(self.rotation.x,self.rotation.y,self.rotation.z);
   self.update(cob);
 };
 

};
function webglAvailable() {
		try {
			var canvas = document.createElement( 'canvas' );
			return !!( window.WebGLRenderingContext && (
				canvas.getContext( 'webgl' ) ||
				canvas.getContext( 'experimental-webgl' ) )
			);
		} catch ( e ) {
			return false;
		}
	}
this.World=function (obj) {
   this.width = window.innerWidth;
   this.height = window.innerHeight;
   this.loadTextures = function(texts) {
     for(var i = 0; i < texts.length; i++) {
       COBY.loadTexture(texts[i].name, texts[i].path);
     }
   };
  
   if(obj) {
   this.width=obj.width || window.innerWidth;
   this.height=obj.height || window.innerHeight;
   if(obj.textures) {
     this.loadTextures(obj.textures);
   }
   }
   
   this.scene=new THREE.Scene();
   this.camera = new THREE.PerspectiveCamera( 75, this.width   / this.height, 0.1, 10000 );
   this.camera.name = "camera";
//if ( webglAvailable() ) {
		this.renderer = new THREE.WebGLRenderer({alpha:true});
//	} else {
	//	this.renderer = new THREE.CanvasRenderer();
//	}

this.renderer.setSize(this.width,this.height);
this.renderer.setClearColor(0x000000, 0);

this.renderer.domElement.style.position="absolute";
this.renderer.domElement.style.left="0";
this.renderer.domElement.style.top="0";

this.camera.position.z=5;

this.cobs = [];
this.meshes=[];
var that=this;
this.light = function(x,y,z,inten) {
    var directionalLight1=new THREE.DirectionalLight(0xffffff);
    directionalLight1.position.set(x,y,z,inten || 1);
	directionalLight1.name == "light";
    that.scene.add(directionalLight1);
};
this.lights = function() {
  var ambientLight = new THREE.AmbientLight( 0x606060 );
				that.scene.add( ambientLight );

				var directionalLight = new THREE.DirectionalLight( 0xffffff );
				directionalLight.position.set( 1, 0.75, -0.5 ).normalize();
				that.scene.add( directionalLight );
};
  this.lights();
this.add=function(obj){
   if(!obj.forReference) {
   if(obj.mesh) {
   that.scene.add(obj.mesh);
   that.meshes.push(obj.mesh);
   that.cobs.push(obj);
   } else {
	that.scene.add(obj);
   }
     
	 
     
   }
   obj.start(obj);
};

this.cob = function(c) {
	that.add(new COBY.Cobject(c,that));
};

this.addCobjects = function(cobs) {
  for(var i = 0; i < cobs.length; i++) {
    that.add(new COBY.Cobject(cobs[i],that));
  }
};

this.empty = function() {
    that.meshes = [];
	that.cobs = [];
	for(var i = that.scene.children.length - 1; i >= 0; i--) {
			that.scene.remove(that.scene.children[i]);
	}
	that.scene.add(that.camera);
	that.lights();
  console.log("just actually emptied..feels good");
};

this.update=function (){
  // noprotect
   for(var i=0;i<that.cobs.length;i++) {
	that.cobs[i].superUpdate(that.cobs[i]);
   }
   that.loop();
   that.renderer.render(that.scene, that.camera);
};
this.loop=function(){
   
};
this.canvas=this.renderer.domElement;


this.start = function(div) {
  if(!div)
	document.body.appendChild(this.canvas);
  else
	div.appendChild(this.canvas);
  function sketchProc(proc) {
    // noprotect
      proc.draw=function(){    
         that.update();
      };
   }
   var procInst=new Processing(document.createElement("canvas"),sketchProc);
};
};
})();

