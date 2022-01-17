//B"H
ATZMUS()
function ATZMUS() {
	var geoms = {
		plane: {
			reg: "PlaneGeometry",
			buf: "PlaneBufferGeometry",
			deef: [1,1,1]
		},
		box: {
			reg: "BoxGeometry",
			buf: "BoxBufferGeometry",
			deef: [1,1,1]
		},
		sphere: {
			reg: "SphereGeometry",
			buf: "SphereBufferGeometry",
			deef: [0.5, 7, 7]
		},
		cylinder: {
			reg: "CylinderGeometry",
			buf: "CylinderBufferGeometry",
			deef: [0.5, 0.5, 1,6]
		}
	}

	var mawchs={
		mats:[],geoms:[],textures:[],images:[],
		dataPacks:[]
	}


	var madeMawchs = false;
	ATZMUS={
		texture: function(opts={}) {
			var nm;
			if(typeof(opts) == "string")
				nm = opts;
			else if(typeof(opts.name) == "string")
				nm = opts.name
			
			if(!nm) return null;
			
			var tx = mawchs.textures.find(t => 
								   t[0] == nm					   
								  )
			if(tx) return tx[1];
			
			var data = ATZMUS.getData(nm)
			if(!data) return null;
			
			var tl = new THREE.TextureLoader();
			
			var toyxt = tl.load(data[1],tx=>{
				var cnv = document
				.createElement("canvas")
				
				/*tx.image.width = 512;
				tx.image.height=256;
				tx.image.needsUpdate = true*/
				tx.minFilter = THREE.LinearFilter;
			})
			
			
			mawchs.textures.push([
				data[0], toyxt
			])
			
			return toyxt;

			
		},
		getData: function(opts={}) {
			var nm;

			if(typeof(opts) == "string") {
				nm = opts;
			} else if(opts.name) nm = opts.name;
			else return null;
			
			var fnd = null;
			mawchs
				.dataPacks.forEach(d => 
					d.forEach(s => {
							if(s[0] == nm) {
								fnd = s;   
							}
						}
					)
				)
			
			return fnd;
		},
		prepareMaterials: function(opts={}) {
			if(typeof(opts) == "string") {
				
			}
		},
		loadData: function(opts={}) {
			return new Promise((rs,rj) => {
				if(!madeMawchs) {
					madeMawchs = true;
					window.mawchsawnify = function(d) {
						mawchs.dataPacks.push(d)	
					}
				}
				
				var ar = [];
				if(opts && typeof(opts)=="object") {
					ar = Array.from(opts)
				}

				var it = 0
				function getIt() {
					var scr = document
					.createElement("script")	
					scr.src = ar[it]+".html"
					document.head.appendChild(scr)
					scr.onload = () => {
						if(it < ar.length - 1) {
							it++;
							getIt();
						} else {
							rs(true)
						}
					}
				}
				if(ar.length) getIt()
				else rs(false)
			})
		},
		Mawchsawn: mawchs,
		tsoor: function(opts={}) {
			var can = document.createElement("canvas")  
			var wd = opts.width || ts*4;
			var ht = opts.height || ts*4;
			can.wdith = wd;
			can.height = ht;

			var ctx = can.getContext("2d");
			var tx = new THREE.CanvasTexture(can);
			this.ctx=ctx;
			this.tx = tx;
		},

		Geo:function(opts={}) {

			if(!opts.cb)opts.cb=()=>{}
			var cl = opts.shape || "box"

			var isBuf = !!opts.isBuff
			var args = opts.args || null;


			var geo = geoms[cl];
			if(!geo) geo=geoms.box;

			if(!args)
				args=geo.deef;

			var ty = isBuf?geo.buf:geo.reg;
			var realG;

			var g = mawchs.geoms.find(x=> (
				x.type == ty &&
				objEq(Object.values(x.parameters)
					  .filter(z=>z),args)
			))


			if(!g) {
				var G = new THREE[ty](...args)
				if(geo.action) geo.action(G)
				mawchs.geoms.push(G)
				return G;
			}

			return g

		},
		Mat:function(opts={}) {

			if(!opts.cb)opts.cb=()=>{}
			var cl = opts.color || "white"
			var txt = opts.tseeyooree;
			
			var realTx = opts.texture
			var ts;
			if(txt) {
				ts = new ATZMUS.tsoor()
			}

			var finishedTxture;
			var tc;
			if(typeof(cl) == "string")
				tc= new THREE.Color(cl)
			else tc = cl
			
			if(typeof(realTx) == "string") {
				var mtx = mawchs.textures.find(z=>
					z[0] == realTx						   
				);
				if(mtx) finishedTxture = mtx[1];
				else {
					var ntxt = ATZMUS.texture(realTx);
					if(ntxt) finishedTxture = ntxt;
				}
			} else
			if(typeof(txt) == "string") {
				if(typeof(tseeyooreem[txt]) == 
				   "function") {
					console.log(ts.ctx,
								ts.canvas,
								tseeyooreem[txt],txt)
					if(ts) {
						tseeyooreem[txt](ts.ctx)
						ts.tx.needsUpdate=true
					}
					finishedTxture = ts.tx;

				}
			}

			var g = mawchs.mats.find(x=> (
				objEq(x.color,tc) &&
				//(x.texture && finishedTxture) &&
				finishedTxture == x.map
					
			))
			if(!g) {
			/*
				console.log("new texture!",g,realTx,
					finishedTxture,
					mawchs.mats)*/
				var lm=new THREE.
				MeshLambertMaterial
				//  MeshBasicMaterial
				({
					color:tc
				})
				
				lm.transparent = true
				lm.needsUpdate=true

				lm.map = finishedTxture
				if(lm.texture) {

					lm.map.needsUpdate = true;
					lm.needsUpdate = true;
				}


				mawchs.mats.push(lm)

				return lm
			}
			

			return g

		},
		Kav:function(opts={}) {
			if(!opts.cb)opts.cb=()=>{}
			Object.defineProperties(this,{

			})
		},
		Nawees:function(opts={}) {
			var isBuff = opts.buff

			var scale={}
			var position = {}
			var mat = ATZMUS.Mat({
				color: opts.color
			})
			var geom = ATZMUS.Geo({
				isBuff,
				shape: opts.shape
			})
			this.pashut = new THREE.Mesh(
				geom,
				mat
			)
			var t = this
			var shape
			var matt;

			var isDS = opts.doubleSided;
			if(isDS) 
				t.doubleSided = isDS;
			var curTx = null
			Object.defineProperties(this,{
				scale: {
					get:()=>scale
				},
				position: {
					get:()=>position
				},
				
				texture: {
					get:()=>curTx,
					set:v =>{
						var w;
						if(typeof(v) != "object"||!v)
							w={}
						if(typeof(v)=="string")
							w = {
								texture:v
							}
						var g = ATZMUS.Mat(w)

						t.pashut.material=g
					}
				},
				shape: {
					get:()=>t.pashut.geometry.type,
					set:v =>{
						var w;
						if(typeof(v) != "object"||!v)
							w={}
						if(typeof(v)=="string")
							w = {
								shape:v

							}
						var g = ATZMUS.Geo(w)

						t.pashut
							.geometry=g
					}
				},
				material: {
					get:()=>matt,
					set:v => {
						if(!v) v = {}
						var mt = new ATZMUS.Mat(v)

						t.pashut.material = mt;
						matt = {
							mat: mt,
							//ctx: t.pashut.material.map.image.getContext("2d")
						};

						if(isDS) t.doubleSided = isDS;
					}
				},
				color: {
					get:()=>t.color,
					set:v =>{
						var mat = ATZMUS.Mat({
							color: v
						})
						t.pashut
							.material=mat
					}
				},
				doubleSided: {
					get: () => {
						t.pashut.material.side
					},
					set: (v) => {
						t.pashut.material.side=THREE.DoubleSide
					}
				}
			})
		}
	}
	
	
    function objEq(ob1,ob2) {
		var eq = true
		var props1 = Object.keys(ob1)
		var props2 = Object.keys(ob2)
		if(props1.length != props2.length)
			return false

		props1.forEach(z=> {
			if(ob1[z] !== ob2[z]) 
				eq = false
		})
		return eq
	}
}
