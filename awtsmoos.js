//B"H
A = AWT = AWTSMOOS =
AWTSMUS = ATZMOOS = ATSMOOS = 
AWTSMUS = ATSMUS = 
OTSMOOS = OTZMOOS = 
OTZMUS = OTSMUS = O =
OT = AW = AT = AWTS = 
ATZMUS;

(function() {
	function metafyrical() {
	var met = Array.from(document.getElementsByTagName("meta"))
	if(met.length < 1) {
		bodiedNodes = []
		var s = new MutationObserver(function(yo,k){
			console.log(yo,bodiedNodes.map(x=>x.innerText))
			yo.forEach(x=>{
				x.addedNodes.forEach(y=> {
					var name = y.nodeName
					if(name[0] == "#")
						name = name.substr(1)
					var el = document.createElement(name)
					var conten = y.innerHTML
					var tx = y.innerText
					el.innerHTML = conten || ""
					if(!conten) el.innerText = tx || ""
					bodiedNodes.push(el)
					
					y.parentNode.removeChild(y)
				})
			})
    		
		})
		s.observe(document.body,{
			childList:true
		})
		var prs = new DOMParser()
		ps=prs
		document.addEventListener("readystatechange", () => {
			if(document.readyState == "complete") {
				s.disconnect()	
				var tx = document.documentElement.innerHTML
				var ifr = document.createElement("iframe")
				ifr.style.cssText = "border:0;position:absolute;"+
					"left:0;top:0;width:100%;height:100%"

				var dc = prs.parseFromString(tx,"text/html")
				doyk = dc
				w=ifr
				
				bodiedNodes.forEach(x=>{
					dc.body.appendChild(x)
				});
				
				var allTxt = document.documentElement.innerHTML
				dc = prs.parseFromString(allTxt,"text/html")
				document.documentElement.innerHTML = ""
				
				document.body.appendChild(ifr)
				
				var meto = document.createElement("meta")
				meto.setAttribute("charset","utf-8")
				ifr.contentDocument.head.appendChild(meto)
				
				var scr = document.createElement("script")
				scr.src=location
					.href
					.substring
				(0,location.href.lastIndexOf("/"))+"/"
					+"atzmus2.js"
				ifr.contentDocument.head.appendChild(scr)
				scr.onload=()=>{
				var sc = document.createElement("script")
				sc.innerHTML="console.log(8889,window.A)"
				
				ifr.contentDocument.body.appendChild(sc)
					
					
					bodiedNodes
					.forEach(x => {
						ifr.contentDocument.body.appendChild(x)
					})
				}
				/*
				Array
					.from(
					dc.head.children
				)
				.forEach(x => {
					ifr.contentDocument.head.appendChild(x)
				})
				
				Array
					.from(
					dc.body.children
				)
				.forEach(x => {
					ifr.contentDocument.body.appendChild(x)
				})
				//ifr.contentDocument.documentElement.innerHTML=allTxt
			/*	
				
				w = ifr;
				Array
					.from(
					dc.body.children
				)
				.forEach(x => {
					console.log(x,ifr.contentDocument)
					
				})
			/*		ifr
					.contentDocument
					.documentElement
					.innerHTML=///src=URL.createObjectURL(new Blob([
					"<!DOCTYPE html><meta charset='utf-8'>" + 
					dc
					.documentElement
					.innerHTML
				], {
					type:"text/html"	
				}))
*/
				

			}
		})
		console.log(ss=s)
		/*
		*/
	}
	}
	
	var oyss = (new function() {
		
		var oys = "אבגדהוזחטיכךלמםנןסעפףצץקרשתְֱֲֳִֵֶַָֹֺֻּֽ",
			voyls = {
				'ֽ':"ee",
				'ֻ':"oo",
				'ָ':"uh",
				'ַ':"aw",
				'ֶ':"eh",
				'ֵ':"ay",
				'ִ':"ee",
				'ֳ':"uh",
				'ֲ':"aw",
				'ֱ':"eh",
				'ְ':"ih",
				'ֹ':"o"
			},
			aytsh = [
				'ְ','ֱ',
				'ֳ','ָ','ֶ'
			],
			needUp = [
				
			],
			aytshEng = [
				"uh", "eh", "ih"
			],
			letors = {
				"א":"",
				"ב":"v",
				"ג":"g",
				"ד":"d",
				"ה":"h",
				"ו":"v",
				"ז":"z",
				"ח":"ch",
				"ט":"t",
				"י":"y",
				"כ":"ch",
				"ל":"l",
				"מ":"m",
				"נ":"n",
				"ס":"s",
				"ע":"",
				"פ":"f",
				"צ":"ts",
				"ק":"k",
				"ר":"r",
				"ש":"sh",
				"ת":"s",
				"ך":"ch",
				"ם":"m",
				"ן":"n",
				"ף":"f",
				"ץ":"ts"
			},
			dag = 'ּ',
			dawgisht = {
				"ב":"b",
				"ו":"oo",
				"כ":"c",
				"פ":"p",
				"ת":"t",
				"ך":"ck",
				"ף":"p"	
			},
			choy = 'ֹ',
			choyluhmd = {
				"ו":"o"	
			},
			numbs = [
				1488,
				1489,
				1490,
				1491,
				1492,
				1493,
				1494,
				1495,
				1496,
				1497,
				1499,
				1498,
				1500,
				1502,
				1501,
				1504,
				1503,
				1505,
				1506,
				1508,
				1507,
				1510,
				1509,
				1511,
				1512,
				1513,
				1514,
				1456,
				1457,
				1458,
				1459,
				1460,
				1461,
				1462,
				1463,
				1464,
				1465,
				1466,
				1467,
				1468,
				1469
			],
			eng = [
				"Aleph",
				"Bays",
				"Gimel",
				"Dales",
				"Hey",
				"Vuhv",
				"Zaeein",
				"Ches",
				"Tes",
				"Yood",
				"Chawf",

				"Lamed",
				"Mem",

				"Noon",

				"Sawmech",
				"Aeein",
				"Fay",

				"Tzadeek",

				"Koof",
				"Raysh",
				"Shin",
				"Suhf",
				"Final_Chawf",
				"Final_Mem",
				"Final_Noon",
				"Final_Fay",
				"Final_Tzadeek",
				"Koobootz",


			],
			actshual = oys

		
		this.koylify = function(heeb="") {
			if(typeof(heeb) != "string")
				return "LOL what is this?"

			var splat = heeb.split("")
			var reezAr = []
			var i
			var voylzz=[]
			var vi = 0
			for(i = 0; i < splat.length; i++) {
				var af, lst
				if(i < splat.length - 1)
					af = splat[i + 1]
				if(voylzz.length > 0 && vi > 0)
					lst = voylzz[vi - 1]
				var cr = splat[i]
				var lt = letors[splat[i]]
				var vw = voyls[splat[i]]
				if(lt) {
					if(af == dag) {
						if(dawgisht[splat[i]])
							lt=dawgisht[splat[i]]
					}
					if(af == choy) {
						if(choyluhmd[cr])
							lt = ""//choyluhmd[cr]
					}
					if(lt.length > 0) {
						vi++

						voylzz.push([lt,0])
					}
					reezAr.push(lt)
				}else
				if(vw) {
				//	if(lst[1]) 
					if(aytshEng.includes(lst[0])) {
						vw = vw.length > 1 ? 
							vw[0].toUpperCase() +
							vw.substr(1) : vw.toUpperCase()	
					}
					vi++
					voylzz.push([vw,1])
					
					reezAr.push(vw)
				}
				else if(splat[i] == " ")
					reezAr.push(" ")
			}
			console.log(voylzz, vw, vi, cr)
			return reezAr.join("")
		}
		
		var gematriaMap = {
			1: "א",
			2: "ב",
			3: "ג",
			4: "ד",
			5: "ה",
			6: "ו",
			7: "ז",
			8: "ח",
			9: "ט",
			10: "י",
			20: "כ",
			30: "ל",
			40: "מ",
			50: "נ",
			60: "ס",
			70: "ע",
			80: "פ",
			90: "צ",
			100: "ק",
			200: "ר",
			300: "ש",
			400: "ת",
			500: "ך",
			600: "ם",
			700: "ן",
			800: "ף",
			900: "ץ"
		}
		
		function numberificly(nm) {
			var noom = nm.toString();
			var places = [], i, k,
				digits = "1234567890",
				full = "",
				finished = 0
			for(i = 0; i < noom.length; i++) {
				full = ""
				var restOfLength = noom.length - i;
				for(k = 0; k < restOfLength - 1; k++) {
					full += 0
				}
				full = noom[i] + full
				finished = parseInt(full)

				places.push(finished)

			}
			places = places.map(y => {
				var x = y;
				if(x > 900) {
					var cur = x;
					var arr = []
					for(i = x; i >= 0; i--) {
						var it = x - 900
						if(it >= 0) {
							arr.push(900)
							x = it
						} else {
							arr.push(numberificly(x))
							break
						}



					}
					return arr.flat()
				}
				return x
			})
			return places.flat().filter(x => x)
		}
		
		function arraysEqual(array1,array2) {
			var isEqual = true;
			array1.forEach((q,i)=>{
				array2.forEach((k,p)=>{
					if(
						array1[i] !== array2[i] ||
						array1[p] !== array2[p]
					) {
						isEqual = false
					}
				})
			})
			return isEqual;
		}
		
		function numberToHebrew(nm) {
			var list = numberificly(nm)
			
			//special cases of numbers
			var cases = [
				[
					[
						10,
						5
					],
					[
						"ט",
						"ו"
					]
				],
				
				[
					[
						10,
						6
					],
					[
						"ט",
						"ז"
					]
				]
			]
			
			var caseInd = 0
			
			function doCase() {
				var now = cases[caseInd]
				if(now) {
					var first = now[0]
					var doesMatch = true
					var lengthOfNumbersToCheck = first.length
					var arrayAtEndOfList = list.slice(list.length - lengthOfNumbersToCheck)
					doesMatch = arraysEqual(arrayAtEndOfList,now[0])
					
					if(doesMatch) {
						first.forEach((q,i) => {
							var listInd = list.length-first.length+i
							if(listInd >=0 && listInd < list.length) {

								list[listInd] = now[1][i]
							}
						})
					}
				//	console.log(arrayAtEndOfList,now[0],list,doesMatch,list)
					caseInd++;
					doCase()
				}
			}
			
			doCase()
			var hebrew = list.map(q=>
				(g=>(g?g:q))(gematriaMap[q])								
			)
			
			return hebrew.join("")
			
		}
		
		var isEnglish = false
		if(oys[0].charCodeAt(0) !== 1488){
			isEnglish = true
			actshual = eng.join("$")
			var maftaychos = Object.keys(gematriaMap)
			gematriaMap = Object.fromEntries(
				eng.map((e, i) => (
					[
						maftaychos[i],
						eng[i]
					]
				))
			)
		}
		/*
		
		old
		
					first.forEach((q,i) => {
						var listInd = list.length-1-first.length+i
						if(listInd >=0 && listInd < list.length) {
							
							if(list[listInd] != q) {
								doesMatch = false
							}
						}
					})
		*/
		
		this.gematria = nm => {
			if(typeof(nm) == "number") {
				return numberificly(nm).map(x => (
					gematriaMap[x]
				)).join(
					isEnglish ? "$" 
					: ""
				)

			} else if(typeof(nm) == "string") {
				var list = actshual.split(
					isEnglish ? "$" :
					""
				)
				var words = nm.split(" ")
				var lettersInWords = words.map(w => (
					w.split(
						isEnglish ? "$" :
						""
					)
				))//.filter(x => x)
				var keys = Object.keys(gematriaMap),
					vals = Object.values(gematriaMap)
				var numbersFromLetters = lettersInWords.map((y) => 
															y.map(x => 
																  (vals.includes(x)) ? 
																  keys[vals.indexOf(x)]
																  : ""
																 ).join(".")
														   ).join(" ")//.filter(x => x)
//9294058690
				return numbersFromLetters
			}
		}

		this.toString = () => 
		actshual
	})
	
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
	
	var mawchsawn = {
	    tzurahs: [], choymayreem: [],
		mats:[],geoms:[],textures:[],images:[],
		dataPacks:[]
	}
	var mawchs = mawchsawn
	
	var madeMawchs = false;
	Object.defineProperties(ATZMUS, {
		Osios: {
                get: () => oyss
				
        },
		
		gdpw: {
			get:()=>this.getDataPackWith
		},
		chootifyClass: {
			get:()=>c=>{
				var str = ""
				if(typeof(c) == "function") {
					
				}
			}
		},
		getDataPackWith: {
			get:()=>function(opts={}) {
				var nm;

				if(typeof(opts) == "string") {
					nm = opts;
				} else if(opts.name) nm = opts.name;
				else return null;

				var fnd = null;
				mawchs
					.dataPacks.some(d => {
					
					return d.some(s => {
						if(s[0].includes(nm)) {
							fnd = d;   
							return true
						}
					})
					
				})

				return fnd;
			}
		},
		getData: {
			get:()=>function(opts={},onlySome=false) {
				var nm;

				if(typeof(opts) == "string") {
					nm = opts;
				} else if(opts.name) nm = opts.name;
				else return null;

				var fnd = null;
				var founds = []
				mawchs
					.dataPacks.forEach(d => 
						d.forEach(s => {
								if(
									!onlySome?
									s[0] == nm
								  	:s[0].includes(nm)
								) {
									fnd = s;   
									if(onlySome) {
										founds.push(s)	
									}
								}
							}
						)
					)

				return !onlySome?fnd:founds;
			}
		},
		
		loadData: {
			get:()=>function(opts={}) {
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
						if(
						1
						//	ar[it].length == 1 && typeof(ar[it]) == "object"
						) {
							var scr = document
							.createElement("script")	
							scr.src = ar[it]//+".html"
							document.head.appendChild(scr)
							scr.onload = () => {
								isDone()	
							}
						} else if(ar.length == 2) {
							mawchsawnify(ar[it][0],ar[it][1])	
							isDone()
						}
						
						function isDone() {
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
			}
		},
        Mawchsawn: {
                get: () => mawchsawn
				
        },
		Shaym: {
			get: () => () => {
				var rez = "", i;
				for(i = 0; i < (Math.random() + 10) * 10; i++) {
					rez += (o => 
						o[
							Math.floor(
								Math.random() * 
								o.length
							)
						]
					)(ATZMUS.Osios.toString().split(""))
				}
				return rez
			}
		},
		
		FindInScene:{
			get:()=>(sc,fnc)=>{
				var found = []
				sc.traverse(r=>{
					if(fnc(r)) {
						found.push(r)
					}
				})
				return found;
			}
		},
		FindDeepTolda: {
			get:()=>
				function fdt(t1, name) {
					var it = t1.children.find(q=>q.name.includes(name))
					if(it) return it;
					else {
						var i, cur;
						for(
							i = 0;
							i < t1.children.length;
							i++
						) {
							cur = fdt(
								t1.children[(i)], name
							)
							if(cur) return cur;
						}
						return null;
					}
				}
		},
		Dawfeem: {
			get: function() {
				return function(f,cbn) {
					var trilz = []
					function  g(p, cb) {
						if(!ATZMUS.dawfeem[p]) {
							var sc = document.createElement("script")
							sc.src = p + ".js"
							document.head.appendChild(sc)
							sc.onload = () => {
								if(cb) (cb(1))
								
								ATZMUS.dawfeem[p] = 1;
							}
							sc.onerror = () => {
								
								ATZMUS.dawfeem[p] = 0;
								if(cb) (cb(0))
								//else rj(0)
							}
						} else {
							if(cb) (cb(1))
							//else rs(1)
						}
					}
					var ind = 0;
					
					return new Promise((rs,rj) => 
						(a => 
							g(a[ind], function oy(s) { 
								++ind < f.length ?
									g(a[ind], oy) 
								: typeof(cbn) == "function" ?
									rs(cbn(1)) : rs(1)


							})
						)(Array
						.from(f))
					)
					
				}
			}
		},
		Tzimtzoom: {
			get: () => function(opts = {}) {
				return new Promise((rs,rj) => {
					threeify()
					var oyl = s => {
						if(s) {
							var oy = opts.olam ||
								opts.oyluhm ||
								opts.oylum || 
								opts.world || {},
								st = opts.start||{},
								w
							if(oy) w = new ATZMUS.Olam(oy)
							if(w) {
								w.start(st)
								rs(w)
							} else rj({w,msg:"LOL what?"})
						}
					}
					if(opts.dawfeem) 
						ATZMUS.Dawfeem(opts.dawfeem).then(oyl)
					else oyl(1)
				})
				
			}
		},
		Eved:{
			get:()=>function(n,shoymayuh) {
				//first parameter: web worker data string, or function
				// to get string from
				//second: listeners that happen to web worker from the thread it's
				//called in;
				var str;
				var wk;
				var url;
				if(typeof(n) == "string"){
					str = n	
				}
				
				if(typeof(n) == "object") {
					if(
						n.constructor.name.includes("HTML") &&
					    n.constructor.name.includes("Element") &&
						typeof(n.innerText) == "string"
					) {
						str = n.innerText	
					}
				}
				
				if(typeof(n) == "function") {
					str = "("+n+")()"
						
				}
				
				str = str.split("@n")
				.join("\n")
				
				if(typeof(str) == "string") {
					str = eval(
						"`" +
						"//B\"H"
						+"\\n"+
						str+"`")
					
					url = URL.createObjectURL(new Blob([
						str
					]))
				}
				
				if(typeof(url) == "string") {
					wk = new Worker(url)
				}
				
				if(typeof(shoymayuh) == "object") {
					var k;
					wk.addEventListener("message",e=>{
						for(k in e.data) {
							if(typeof(shoymayuh[k]) == "function") {
								shoymayuh[k](e.data)
							}
						}
					})
				}
				
				wk.awts = (nm,d) => {
					var ob = {}
					if(typeof(nm) == "string") {
						ob[nm] = d;	
					} 
					
					if(typeof(nm) == "object") {
						ob = nm;	
					}
					
					wk.postMessage(ob)
				}
				
				return wk;
			}
		},
		HtmlNode: {
			get: () => function(opts) {
				if(!opts || !typeof(opts) == "object") {
					if(typeof(opts) == "string") {
						opts = {innerHTML:opts}	
					} else
						opts = {}	
				}
				var tag = opts.tag || "div",
					el = document.createElement(tag),
					parent = opts.parent || document.body,
					exclusions = "tag events attributes children style",
					toyldoys = [],
					listenerFunctions = {},
					t = (n) => toyldoys.find(q=>
						q.shaym == n
					),
					map = {
						events: (obj) => {
							if(typeof(obj) == "function") {
								obj = obj(t)	
							}
							var k;
							for(k in obj) {
								var eventName = k
								var fnc = obj[k]
								//console.log("doing",k,fnc,obj)
								if(typeof(fnc) == "function") {
									el.addEventListener(eventName, fnc)
									if(!listenerFunctions[k]) {
										listenerFunctions[k] = []
									}
									listenerFunctions[k].push(fnc)
								}
							}
							
						},
						style(st) {
							if(typeof(st) == "string"){
								el.style.cssText=st;return;
							}
							if(!st || typeof(st) != "object")
								return;
							
							var k;
							for(k in st) {
								el.style[k] = st[k]	
							}
						},
						attributes: (name, value) => {
							el.setAttribute(name, value)
						},
						toldos: (a)=>map.children(a),
						children(otherArray) {
							var oa;
							if(typeof(otherArray) == "function") {
								oa = otherArray(t)
							} else 
							if(typeof(otherArray.forEach)=="function") {
								oa = otherArray	
							} else {
								oa = [otherArray]
							}
								
							
							oa.forEach(x => {
								var ch = new ATZMUS.HtmlNode({
									...x,
									parent: el
									
								})
								toyldoys.push(ch)
							})
						}
					}
				
				
				parent.appendChild(el)
				Object.entries(opts).forEach(x => {
					if(!exclusions.split(" ").includes(x[0])) {
						el[x[0]] = x[1]
					}
				})
				
				Object.entries(map).forEach(x => {
					if(opts[x[0]]) {
						x[1](opts[x[0]])
					}
				})
				
				var hees = opts.heesCheel||opts.start;
				if(typeof(hees) == "function") {
					hees(el,t)
				}
				
				return el;
				   
			}
		},
		html: {
			get: () => AWTSMOOS.HtmlNode	
		}
	})
	
	
thr=threeify
function threeify() {
	Object.defineProperties(ATZMUS, {
		Gavvan: {
			get: () => function col(op) {
				var rez = {r:0, g: 0, b: 0}
				if(typeof(op) == "object") {
					for(var k in op) {
						if(rez[k] !== undefined) {
							if(typeof(op[k]) == "number") {
								rez[k] = op[k]
							}
						}
					}
				} else if(typeof(op) == "string") {
					if(window.THREE) {
						var colObj = new THREE.Color(op)
						colObj = col(colObj)
						rez = colObj
					}
				}
				return rez
			}
		},
		Chochmah: {
			get: () => function(opts = {}) {
				var events = {}
				var meta = "$_awl"
				var slf = this
				Object.defineProperties(this, {
					meta:{
						get:()=>meta,
						set:v=>{meta=v}
					},
					on: {
						get: () => (name, func) => {
							if(!events[name]) events[name] = []
							events[name].push((...data) => {
								if(typeof func == "function") {
									func(...data)
								}
							})
							
							slf.ayshPeula(meta, {
								
								name,
								function: func

							})

						}
					},
					events: {
						get: () => () => events
					},
					machehPeulos: {
						get: () => (name) => {
							name ? (events[name] = []) 
							: events = {}
						}
					},
					eventNames: {
						get:() => Object.keys(events)
					},
					ayshPeula /*fireEvent*/: {
						get: () => (name, ...data) => {
							var it = events[name]
							if(it) {
								it.forEach(x => {
									x(...data)
								})
							}
						}
					}
				})
				
			}
		},
		ChayoosShoymayr: {
			get: () => function(opts) {
				ATZMUS.Chochmah.call(this, ...arguments)
				var makor,
					startZman = 0,
					hoyvehZman = 0,
					meedosLiShomayr = [],
					maftaychosShelChayoos = [],
					
					hoyvehChayoos,
					hoyvehChayoosZman = 0,
					heesCheelChayoosZman = 0,
					currentChayoosIndex, 
					nextChayoosIndex, 
					chayoosMakor,
					i, c, n, rez, rezObj,
					zeh = null, co = null, rz, az, factor,
					startedPlaying = false
				this.on("heesCheel", saychil => {
					makor = saychil.makor
					meedosLiShomayr = saychil.meedos
					startZman = Date.now()
				})
				
				this.on("chayoosMaftayach",  () => {
					hoyseefChayoosMaftayach()
				})
				
				this.on("poysayk", () => {
					if(maftaychosShelChayoos % 2 !== 0)
						hoyseefChayoosMaftayach()
					this.ayshPeula("siyaym", maftaychosShelChayoos)
				})
				
				
				this.on("heesCheelLiChoyzayrBiZman", saychil => {
					hoyvehChayoos = saychil.chayoos
					chayoosMakor = saychil.makor
					startedPlaying = true
				})
				
				this.on("hissHavoos", dealtuh => {
					if(startedPlaying) {
						startedPlaying = false;
						heesCheelChayoosZman = Date.now()
					}
					hoyvehChayoosZman = (
						Date.now() - 
						heesCheelChayoosZman
					);
					if(is(hoyvehChayoos, "Array")) {
						
						window.hc = hoyvehChayoos
						var isBreak = false
						for(
							i = currentChayoosIndex || 0;
							i < hoyvehChayoos.length - 1;
							i++
						) {
							
							c = hoyvehChayoos[i]
							n = hoyvehChayoos[i + 1]
							currentChayoosIndex = null;
							nextChayoosIndex = null;
							
							if(
								c.zman <= hoyvehChayoosZman &&
								n.zman >= hoyvehChayoosZman
							) {
								currentChayoosIndex = i;
								nextChayoosIndex = i + 1;
								isBreak = true
							}
							
							if(
								currentChayoosIndex !== null &&
								nextChayoosIndex    !== null 
							//	&& chayoosMakor
							) {

								var propsCurrent = (
									mischuhshayvMeedosBiHoyveh(
										c,
										n,
										hoyvehChayoosZman,
										dealtuh
									)
								)
								
								
								Object.keys(propsCurrent).forEach(m => {
									this.ayshPeula("chayoosChadash", {
										maftayach: m,
										chasheevoos: propsCurrent[m]
									})
									
								})
								console.log("yes", propsCurrent,
									hoyvehChayoosZman
								)
							} else {
							/*	console.log("?!",currentChayoosIndex,
								nextChayoosIndex,i,c.zman,hoyvehChayoosZman,
								n.zman
								)*/
							}
							if(isBreak) {
								break;
							}
						}
						
						
					}
				})
				
				function mischuhshayvMeedosBiHoyveh(rayshees, acharees, zman) {
					rezObj = {}
					az = acharees.zman
					rz = rayshees.zman
					Object.keys(rayshees.meedos).forEach(k => {
						rez = {}
						rezObj[k] = rez
						Object.keys(rayshees.meedos[k]).forEach(kk => {
							zeh = rayshees.meedos[k][kk]
							co = acharees.meedos[k][kk]
							
							if(zeh !== null && co !== null) {
								
								factor = (
									(
										zman - rz
									)
										/ 
									(
										az - rz
									)
								)
								
								rez[kk] = (
									zeh + (co - zeh) * factor
								)
								
							}
							
							/*
							 percent = current / total
							 percent of 7 between 5 and 10?
							 well percent of 6 between 0 and 10 is
							 6 / 10
							 
							 but between 5 and 10
							 
							 it can't be 7 / 10
							 
							 really the total of between 5 and 10 is 5
							 
							 so 7 percent of between 5 and 10 is really
							 
							 the total amount, after 5, that it's complete
							 
							 so (7 - 5) / (10 - 5) or 2 / 5, should be the same
							 percent as the percent of 7 in the interval of
							 5 and 10
							 
							 so the percentage of p in (intervalStart, intervalEnd)
							 is (p - intervalStart) / (intervalEnd - intervalStart)
							 
							 once have the percentage
							 
							 how do we convert it back
							 given a percentage in an interval, like above
							 and given a second interval, with a start and end
							 how do we calculate the percentage amount
							 in the second interval
							 such that it matches the percentage amount
							 in the first interval...
							 
							 so in the above example, lets change it to
							 the value of 6 from 4 to 10
							 so that would be (6 - 4) / (10 - 4)
							 or
							 2 / 6 = 1 / 3
							 
							 now, if we have a second interval, 3 to 7, how 
							 do we calculate the value that is 1/3 of the way
							 between 3 and 7?
							 
							 ...................................
							 
							 well the interval of 3 and 7
							 is really the same distance as (3 - 3) to (7 - 3) or
							 0 to 4
							 to to calculate 1/3 of 4, just multiple 1/3 * 4
							 then to find how far that is between 3 and 7, just
							 add it back to 3 so 
							 3 + (7 - 3) * 1 / 3
							 should be 1 / 3 of the way between 3 and 7
							 so given a factor, and a start and an end, to calculate
							 the current value,
							 it is:
							 start + (end - start) * factor
							*/
							
							
						});
					})
					return rezObj
				}
				
				function hoyseefChayoosMaftayach() {
					console.log("WHAT?!", makor)
					if(makor && makor.chootify) {
						hoyvehZman = Date.now() - startZman
						if(meedosLiShomayr) {
							var makorMeedos = makor.chootify(
								meedosLiShomayr
							)
							
							maftaychosShelChayoos.push({
								zman: hoyvehZman,
								...(
									makorMeedos ? 
										{
											meedos: makorMeedos
										}
									: false
								)
							})
						}
					}
				}
			}
		},
		AyinReshes: {
			get: () => function(opts={}) {
				return new Promise((rs,rj) => {
					var a = document.createElement("a")
					var w = opts.world || opts.olam
							|| opts.oylum || opts.oyluhm
					var sl = opts.sl || opts.startLater
					if(!w) 
						return rj({msg: "LOL need a world to record!!"})
					var width = opts.width || opts.roychawv ||
								opts.rochav || opts.rochawv || 720
					var height = opts.height || opts.oyrech ||
								opts.orech || opts.orich || opts.oyirch || 480
					var notRend = opts.notRend || opts.dontRender || opts.norend ||
									opts.nr || false
					var tmpRend = new THREE.WebGLRenderer()
					var tmpCawm = new THREE.PerspectiveCamera(
						75,
						0,
						0.01,
						10000
					)
					if(notRend) 
						w.isRendering = false
					tmpRend.setSize(width,height)
					tmpRend.domElement.style.cssText = 
						"position:absolute;"+
						"top:-" + height + 
						"px;"
					document.body.appendChild(tmpRend.domElement)
					
					tmpCawm.aspect = (
						tmpRend.domElement.clientWidth /
						tmpRend.domElement.clientHeight
					)
					tmpCawm.updateProjectionMatrix()

					tmpCawm.position.copy(
						w.original.camera.position
					)
					tmpCawm.rotation.copy(
						w.original.camera.rotation
					)
					tc = tmpCawm
				//	w.original.scene.add(tmpCawm)
					
					var loyp = (function me() {
						tmpCawm.position.copy(
							w.original.camera.position
						)
						tmpCawm.rotation.copy(
							w.original.camera.rotation
						)
						tmpRend.render(
							w.original.scene,
						//	w.original.camera
							tmpCawm
						)
						requestAnimationFrame(me)
					})
								   
										   
					var dm = w.original.renderer
						.domElement
					var mr
					var stree
					var dur = opts.dur || opts.duration ||
								opts.time || opts.zman
					var dc = opts.dc || opts.dontClick ||
							opts.dontDown || opts.dd ||
							opts.dontDownload
					var slf = this
					var oda = opts.oda || opts.ondataavailable
					this.start = () => {
						stree = tmpRend.domElement.captureStream()
						as=stree
						mr = new MediaRecorder(stree, {
							mimeType: "video/webm;codecs=h264"
						})
						mr.start()
						mr.ondataavailable = e => {
							a.href = URL.createObjectURL(e.data)
							a.download = (opts.name || "oy") + ".webm"
							if(!dc) a.click()
							if(typeof(oda) == "function")
								oda(a)
							delete mr
							tmpRend.domElement.parentNode.removeChild(
								tmpRend.domElement	
							)
						}
						if(dur) {
							setTimeout(function(){
								slf.stop()
								rs(this,mr,a)
							}, dur)	
						} else
						rs(this,mr, a)
					}
					
					this.stop = () => {
						if(mr) mr.stop()
						stree.removeTrack(stree.getVideoTracks()[0])
						delete stree
						clearInterval(loyp)
						w.isRendering = true
					}
					
					if(!sl) this.start()
				})
			}
		},//3103464048
		Heeoolee: {
			get: () => function(opts = {}) {
				ATZMUS.Chochmah.call(this, ...arguments)
				
				var listeners = opts.listeners || {}
				Object.keys(listeners).forEach(k => {
					if(typeof(listeners[k]) == "function") {
						this.on(k, listeners[k])
					} else if(listeners[k].constructor.name == "Array") {
						
						listeners[k].forEach(x => {

							this.on(k, x);
						})
					}
				})
				this.listeners = listeners;
				
				var dafeem = {},
					defaults = [];
				
				Object.defineProperties(this, {
					chootify: {
						get: () => (
							props
						) => {
							
							if(!is(props, "Array")) {
								props = this.yesodos || []
							}
							
							/*if(!props.includes("sayfur")) {
								if(this.minyanDafeem() > 0) {
									props.push("sayfur")
								}
							}*/
							
							var ownProps = (
								
								Object.
								getOwnPropertyNames(this)
							).filter(x => (
								props.includes(x)
							)),
								result = {}
							
							ownProps.forEach(x => {
								var current = this[x]
								if(is(this[x], "Array")) {
									var old = current
									
									current = old.map(prop => 
										typeof(prop.chootify) ==
										"function" ? 
										prop.chootify() :
										null
									)
								}
								
								if(
									typeof(current) ==
										"object"
								)
								var otherProps = (
									current.yesodos || 
									Object
									.getOwnPropertyNames(
										current
									)
								)
								result[x] = (
								typeof(current) != "undefined" ?
									typeof(current.chootify) ==
									"function" ? 
									current.chootify(otherProps) :
									current
								: null
								)
							})
							
							
							return (result);
							
							
						}
					},
					minyanDafeem: {
						get: () => () => {
							var i = 0, k
							for(k in dafeem) {
								i++
							}
							return i;
						}
					},
					
					yesodos: {
						get: () => defaults
					},
					hoyseefYesod: {
						get: () => shaym => {
							if(typeof(shaym) == "string") {
								var exists = defaults.indexOf(shaym) > -1
								if(!exists) {
									defaults.push(shaym)
								}
							}
						}
					},
					hoyseefYesodos: {
						get: () => arr => {
							if(is(arr, "Array")) {
								arr.forEach(d => {
									this.hoyseefYesod(d)
								})
							} else {
								this.ayshPeula("teekoon", {
									soog: "teekoonOsios",
									teekoon: "not chooteem!"
								})
								return false;
							}
						}
					},
					koysayvDaf: {
						get: () => (shaym, toychen) => {
							if(
								typeof(shaym) == "string" &&
								typeof(toychen) == "string"
							) {
								dafeem[shaym] = toychen
								return true;
							} else {
								this.ayshPeula("teekoon", {
									soog: "teekoonOsios",
									teekoon: "not chooteem!"
								})
								return false;
							}
						}
					},
					motzayDaf: {
						get: () => shaym => (
							(typeof(shaym) == "string") &&
								dafeem[shaym] || null
						)
					},
					misakaynDaf: {
						get: () => (shaym, chadash) => {
							var it = dafeem[shaym]
							if(it) {
								if(typeof(chadash) == "string") {
									dafeem[shaym] = chadash
								} else {
									this.ayshPeula("teekoon", {
										soog: "teekoonOsios",
										teekoon: e
									})
								}
							} else {
								this.ayshPeula("teekoon", {
									soog: "teekoonDaf",
									teekoon: e
								})
							}
						}
					},
					korayDaf: {
						get: () => shaym => {
							var it = dafeem[shaym]
							if(it) {
								
								var fnc;
								try {
									fnc = Function("self", it)
								} catch(e) {
									this.ayshPeula("teekoon", {
										soog: "teekoonSofreem",
										teekoon: e
									})
								}
								
								if(fnc) {
									try {
										fnc(this)
									} catch(e) {
										this.ayshPeula("teekoon", {
											soog: "ratzZmanTeekoon",
											teekoon: e
										});
									}
								}
							}
						}
					},
					michayDaf: {
						get: () => shaym => {
							var it = dafeem[shaym]
							if(it) {
								delete dafeem[shaym]
							}
						}
					},
					sayfur: {
						get: () => dafeem
					},
					daf: {
						get: () => d => {
							if(typeof(d) == "object") {
								this.koysayvDaf(d.shaym, d.toychen)
								this.korayDaf(d.shaym)

							}
						}
					}
				})
				
				
				var dafeems = opts.dafeem;
				var daf = opts.daf
				if(typeof(daf) == "object") {
					this.daf(daf)
				}
				
				if(is(dafeems, "Array")) {
					dafeems.forEach(d => {
						this.daf(d)
					})
				}

				this.ayshPeula("neeoor", this)
			}
		},
		Kav: {
			get: () => function(opts = {}) {
				ATZMUS.Heeoolee.call(this, ...arguments)
				var self = this
				if(typeof(opts) != "object") opts = {}
				var propsNames = (
					
					Object.keys(opts) || []
				),
					props = {}
				
				propsNames.forEach(p => {
					var ownProps = (
						Object.
						getOwnPropertyNames(this)
					)
					!ownProps.includes(p) && (() => {
						Object.defineProperty(this, p, {
							get: () => props[p],
							set: v => {
								self.ayshPeula(
									"set", {
										property: p,
										value: v
									}
								)
								props[p] = v
							}
						})
						this[p] = opts[p]
					})()
				})
				
				this.hoyseefYesodos(propsNames)
			}
		},
		Davar: {
			get: () => function(opts = {}) {
				ATZMUS.Heeoolee.call(this, ...arguments)
				
				
				
				var self = this
				if(typeof opts.meen == "string") {
					this.meen = opts.meen
				}
				
				if(typeof opts.meenim == "object") {
					this.meenim = (
						Array.apply(0, opts.meenim)
					).filter(x => typeof(x) == "string");
				}
				
				var kavProps = {
					"position": 0,
					"rotation":0,
					"scale":3,
					"quaternion":0
				},
					subProps = "xyz".split(""),
					kavPropNames = Object.keys(kavProps),
					actualKaveem = {}
					
				kavPropNames.forEach(kp => {
					var it = opts[kp]
					
					Object.defineProperty(this, kp, {
						get: () => actualKaveem[kp],
						set: v  => {
							var obj = Object.fromEntries(
								subProps.map(sp => [
									sp, 0
								])
							),
								kav = new ATZMUS.Kav(
									obj
								)
							kav.on("set", props => {
								
								self.ayshPeula("set", {
									
									property: kp,
									subProperty: (
										props.property
									),
									value: (
										props
										.value
									)
								}, this)
							})
							actualKaveem[kp] = (
								kav
							)
							
							if(typeof(v) == "number") {
								subProps.forEach(sp => {
									
									kav[sp] = v
								})
							}
							
							if(typeof(v) == "object") {
								Object.keys(v).forEach(k => {
									kav[k] = v[k]
								})
							}
							
							self.ayshPeula("finishedSet",{
								property:kp
							})
						}
					})
					var that = typeof(it) 
							!= "undefined" ?  it : null
					this[kp] = (
						(that !== null && that) || 
						kavProps[kp]
					)
					
				})
				
				this.ayshPeula("keema", this);
			}
		},
		Taroves: {
			get: () => function(opts = {}) {
				ATZMUS.Heeoolee.call(this, ...arguments)
				
				var type = opts.type || opts.basic,
					base = opts.base,
					map = opts.map || {},
					defArgs = [1,1,1],
					arguments2 = opts.arguments || opts.args || defArgs
					
				if(arguments2) {
					if(arguments2.constructor.name !== "Array") {
			//			arguments2 = [arguments2]
					}
				}
				var found = map[type],
					pashut, constructor, myArgs
					
				if(window[base]) {
					var it = window[base][found]
					if(it) {
						constructor = it
						myArgs = arguments2
						
					} else if(base[opts.basic]) {
						constructor = it
						myArgs = defArgs
					
					}
					
					Object.defineProperties(this, {
						malchus: {
							get: () => () => !pashut ? (
								pashut = new constructor(...myArgs) 
							) : pashut
							|| null
						},
						constructor: {
							get: () => constructor
						},
						arguments: {
							get: () => myArgs
						},
						type: {
							get: () => type
						},
						found: {
							get: () => found
						},
						base: {
							get: () => base
						}
					})
				}
			}
		},
		
		Tzurification: {
		    get: () => function(opts={}) {
		        if(!opts.arguments)
		            opts.arguments = []
		        if(opts.arguments.length < 1)
		            opts.arguments.push({color:"blue"})
		            
		        var myCol = opts.arguments.find(ar => ar.color)
		        if(myCol) myCol = myCol.color
		        var isIt = mawchsawn.tzurahs.find(c => (
		            c.type == opts.type &&
		            c.arguments.find(arg => (
		                arg.color == myCol
		            ))
		        ))
		        
		        
		        if(isIt) {
		            return isIt;
		        }
		        else {
		            var ch =  new ATZMUS.Tzurah(
						opts
					);
					if(ch) {
					    mawchsawn.tzurahs.push(ch)
					    return ch
					}
		        }
		        return null;
		    }    
		},
		Choymayrifier: {
		    get: () => function(opts={}) {
		        if(!opts.arguments)
		            opts.arguments = []
		        if(!opts.type)
		            opts.type="boxBuffer"
		        var isIt = mawchsawn.choymayreem.find(c => (
		            c.type == opts.type && (
		                
		                arrayEQ(c.arguments, opts.arguments) 
		                
		            )
		        ))
		        if(isIt) return isIt;
		        else {
		            var ch =  new ATZMUS.Chomer(
						opts
					);
					if(ch) {
					    mawchsawn.choymayreem.push(ch)
					    return ch
					}
		        }
		        return null;
		    }    
		},
		Chomer: {
			get: () => function(opts = {}) {
				ATZMUS.Taroves.call(this, {
					...opts,
					basic: "boxBuffer",
					base: "THREE",
					map: {
						"boxBuffer": "BoxBufferGeometry",
						"box": "BoxGeometry",
						"circleBuffer": "CircleBufferGeometry",
						"circle": "CircleGeometry",
						"coneBuffer": "ConeBufferGeometry",
						"cone": "ConeGeometry",
						"cylinderBuffer": "CylinderBufferGeometry",
						"cylinder": "CylinderGeometry",
						"dodecahedronBuffer": "DodecahedronBufferGeometry",
						"dodecahedron": "DodecahedronGeometry",
						"edges": "EdgesGeometry",
						"extrudeBuffer": "ExtrudeBufferGeometry",
						"extrude": "ExtrudeGeometry",
						"icosahedronBuffer": "IcosahedronBufferGeometry",
						"icosahedron": "IcosahedronGeometry",
						"latheBuffer": "LatheBufferGeometry",
						"lathe": "LatheGeometry",
						"octahedronBuffer": "OctahedronBufferGeometry",
						"octahedron": "OctahedronGeometry",
						"parametricBuffer": "ParametricBufferGeometry",
						"parametric": "ParametricGeometry",
						"planeBuffer": "PlaneBufferGeometry",
						"plane": "PlaneGeometry",
						"polyhedronBuffer": "PolyhedronBufferGeometry",
						"polyhedron": "PolyhedronGeometry",
						"ringBuffer": "RingBufferGeometry",
						"ring": "RingGeometry",
						"shapeBuffer": "ShapeBufferGeometry",
						"shape": "ShapeGeometry",
						"sphereBuffer": "SphereBufferGeometry",
						"sphere": "SphereGeometry",
						"tetrahedronBuffer": "TetrahedronBufferGeometry",
						"tetrahedron": "TetrahedronGeometry",
						"textBuffer": "TextBufferGeometry",
						"text": "TextGeometry",
						"torusBuffer": "TorusBufferGeometry",
						"torus": "TorusGeometry",
						"torusKnotBuffer": "TorusKnotBufferGeometry",
						"torusKnot": "TorusKnotGeometry",
						"tubeBuffer": "TubeBufferGeometry",
						"tube": "TubeGeometry",
						"wireframe": "WireframeGeometry"
					}
				})
				
			}
		},
		Tzurah: {
			get: () => function(opts = {}) {
				ATZMUS.Taroves.call(this, {
					...opts,
					basic: "basic",
					base: "THREE",
					map: {
						basic: "MeshBasicMaterial",
						depth: "MeshDepthMaterial",
						distance: "MeshDistanceMaterial",
						lambert: "MeshLambertMaterial",
						matcap: "MeshMatcapMaterial",
						normal: "MeshNormalMaterial",
						phong: "MeshPhongMaterial",
						physical: "MeshPhysicalMaterial",
						standard: "MeshStandardMaterial",
						toon: "MeshToonMaterial",
						points: "MeshPointsMaterial",
						rawShader: "RawShaderMaterial",
						shaderMaterial: "ShaderMaterial",
						shadowMaterial: "ShadowMaterial",
						spriteMaterial: "SpriteMaterial"
					}
				})
				
			}
		},
		Nivra: {
			get: () => function(opts = {}) {
				var loaded = false
				var onloadedFunctions = []
				var otherListeners = (
									opts.arguments &&
									opts.arguments.listeners ||
									opts.listeners
								),
					lastened = addFunctionsAsArrayToObject(
							{
								...(
									otherListeners
								)
							},
							{
								neeoor(){},
								loaded(self) {
								
									loaded = true
									onloadedFunctions.forEach(x => {
										x()
									})
							
								},
								ready: funct => (
									(tmp => 
										!loaded ? 
											onloadedFunctions.push(tmp)
										: tmp()
									)(() =>
										typeof(funct) == "function" ?
											funct()
										:	(()=>{
											console.log("this " + 
											funct + 
											"isn't a function?!")
										})()
									)
								),
								set(data, self) {
									var tmp = data => {
										
										(pash => 
											pash
											[data.property]
											[data.subProperty] = data.value
										)(self.pashut || {})
									}
									if(loaded) tmp(data)
									else onloadedFunctions.push(() => tmp(data))
								}	
							}
						)
				
				var tar = new ATZMUS.Taroves({
					...opts,
					map: {
						domem: "Domem",
						ohr: "Ohr",
						ayin: "Ayin"
					},
					basic: "domem",
					base: "ATZMUS",
					arguments: {
						...opts,
						listeners: lastened
					}
				})
				var oldOpts = opts;
				
			//	this.on("getOpts", () => oldOpts)
				
				
					if(tar.constructor && tar.arguments) {
						tar.constructor.call(this, tar.arguments);

					}
					
				
				
			}
		},
		
		
		Geo:{
			get:()=>function(opts={}) {

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

			}
		},
		
		texture: {
			get:()=>function(opts={}) {
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
					
					/*
					var cnv = document
					.createElement("canvas")

					tx.image.width = 512;
					tx.image.height=256;
					tx.image.needsUpdate = true*/
					tx.minFilter = THREE.LinearFilter;
				})


				mawchs.textures.push([
					data[0], toyxt
				])

				return toyxt;


			}
		},
		tsoor: {
			get:()=>function(opts={}) {
				var can = document.createElement("canvas")  
				var wd = opts.width || ts*4;
				var ht = opts.height || ts*4;
				can.wdith = wd;
				can.height = ht;

				var ctx = can.getContext("2d");
				var tx = new THREE.CanvasTexture(can);
				this.ctx=ctx;
				this.tx = tx;
			}
		},

		
		Mat:{
			get:()=>function(opts={}) {

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
					/*	console.log(ts.ctx,
									ts.canvas,
									tseeyooreem[txt],txt)*/
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
					
					lm.isAwtsmoosified = lm.isAwts 
						= lm.awts = true;

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

			}
		},
		
		Etsem:{
			get:()=>function(opts={}) {
				
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
				
				var t = this
				var shape
				var matt;

				var isDS = opts.doubleSided;
				if(isDS) 
					t.doubleSided = isDS;
				var curTx = null

				var isd = opts.domem;
				if(isd) {
					ATZMUS.Nivra.call(this, isd);
					
				} else {
					
					Object.defineProperties(this,{
						scale: {
							get:()=>scale
						},
						playChayoos:{
							get:()=>()=>{}
						},
						
						chayoosShefuh:{
							get:()=>()=>{}
						},
						pauseChayoos:{
							get:()=>()=>{}
						},
						position: {
							get:()=>position
						},
						on:{
							get:()=>()=>{}
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
								if(!t.pashut.material) {
									var g = ATZMUS.Mat(w)

									t.pashut.material=g
								} else {
									//cob4
									var tx = AWTS.texture(w.texture)
									if(!tx) return;
									t.pashut.material.map = tx;
									t.pashut.material.map.needsUpdate = true;
									t.pashut.material.needsUpdate = true;
								}
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
							get:()=>{
								if(matt) return matt;
								if(t.pashut&&t.pashut.material) {
									matt = t.pashut.material	
								}
								return matt;
							},
							set:v => {
								if(!v) v = {}
								
								var mt = v.isAwts?v:new ATZMUS.Mat(v)

								t.pashut.material = mt;
								matt = //{
									//mat: 
									mt
									//,
									//ctx: t.pashut.material.map.image.getContext("2d")
								//};

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
					
					
					
					var ist = opts.three
					var newMat = opts.mat
					this.pashut;
					
					if(ist) {
						this.pashut=ist
						if(newMat) {
							this.material=mat;
						}
					}
					else this.pashut = new THREE.Mesh(
						geom,
						mat
					)
				}

				this.boyray=(sc)=>{
					var scene=sc
					var nivra=this;
					if(this.ayshPeula){
						nivra.on("sealayk", () => {
							var old = scene.children.includes(nivra.pashut)
							
							if(old) {
								scene.remove(nivra.pashut)	
							}
						})
						nivra.on("goofChadash", () => {
							scene.add(nivra.pashut)
							nivra.ayshPeula("cheedaysh")
						})
						nivra.ayshPeula("boray", this)

						nivra.ayshPeula("ready", () => {
							//console.log("iijiji",nivra)
							
							if(nivra.pashut) {
								scene.add(nivra.pashut)
								nivra.ayshPeula("cheedaysh")
								
								if(nivra.meen) {
									self.ayshPeula(
										"addMeen", 
										nivra.meen, 
										nivra
									);
								}

								if(nivra.meenim) {

									nivra.meenim.forEach(x => {
										self.ayshPeula(
											"addMeen", 
											x, 
											nivra
										);
									})
								}	
							}
						})
						
					} else 
          			sc.add(this.pashut)	
					
				}

			}
		},
		EtsemOld: {
			get: () => function(opts={}) {
				var cl = opts.color ||
						opts.gavan ||
						opts.gawvin ||
						opts.gawvawn ||
						"blue";
				var sh = opts.shape
				var up = opts.update || 
						opts.hissHavoos
				var hees = opts.heesCheel ||
				            opts.heessCheel ||
				            opts.start
				var listeners = {}
				
				var txtU = opts.txtU || opts.textureUpdate ||
				    opts.tzeeyoorHeessHawVoos || opts.th
				    
				
				var mainHees = (a, b) => {
					if(typeof(txtU) == "function") {
					    txtU(this.tz)
					    this.tz.map.needsUpdate = true
					}
				}
				if(typeof(up) == "function") {
					listeners.hissHavoos = (a, b) => {
					    mainHees(a, b)
					    up(b)
					}
				}
				var txt = opts.texture || opts.textu ||
				    opts.tzeeyur
				
				var mainHeess = b => {
				    if(txt) {
    				    var can = document.createElement("canvas")
    				    var ctx = can.getContext("2d")
    				    can.width = 128 * this.pashut.scale.x
    				    can.height = 128 * this.pashut.scale.y
    				    var map = new THREE.CanvasTexture(can)
    			        console.log(asd=this,this.pashut)
    				    this.pashut.material.map = map
    				    this.pashut.material.needsUpdate = true
    				    txt(ctx)
    				    this.tzeeyoor = this.tz = {
    				        ctx, map
    				    }
    				    
    				}
				}
				listeners.heesCheel = mainHeess
				if(typeof(hees) == "function") {
					listeners.heesCheel = (b) => {
					    mainHeess(b)
						hees(b)
					}
				}
				
				    
				
				var arguments = [{
					tzurah: {
						type: "lambert",
						arguments: [{
							color:cl
						}]	
					},
					chomer: {
						type: sh
					},
					listeners
				}]
				ATZMUS.Nivra.call(this, ...arguments)
				
				
			}
				
		},
		average:{
			get:()=>(ob={})=>{
				var av = 0;
				var nms = 0
				Object.keys(ob)
				.forEach(k=>{
					if(typeof(ob[k])=="number"){
						nms++;
						av+=ob[k]
					}
				})
				av /= nms
				return av;
			}
		},
		Sequence: {
			get: () => function(opts={}) {
				var ets = opts.etsem||{}
				var tx = opts.textureList||[]
				var ind;
				var name = opts.name || opts.shaym
				
				function checkAndAdjust(fin) {
					var v = fin
					if(typeof(v) != "number") {
						return 0;

					}

					if(isNaN(v)) {
						return 0;	
					}

					if(v<0) v = 0;

					if(v >= tx.length) {
						v = v % tx.length//tx.length	
					}
					return v;
				}
				Object.defineProperties(this,{
					etsem:{
						get:()=>ets
					},
					name:{
						get:()=>name
					},
					textures:{
						get:()=>tx
					},
					
					tseeyooreem:{
						get:()=>tx
					},
					
					textureNames:{
						get:()=>tx
					},
					textureList:{
						get:()=>tx
					},
					currentIndex:{
						get:()=>ind
					},
					
					cur:{
						get:()=>this.currentIndex
					},
					curInd:{
						get:()=>this.currentIndex
					},
					curIndex:{
						get:()=>this.currentIndex
					},
					
					add:{
						get:()=>this.increment
					},
					increment:{
						get:()=>()=>{
							var ad = checkAndAdjust(ind+1)
							
							
							ind = ad
							
							ets.texture = tx[ind]
							
							return ind;
						}
					},
					length: {
						get:()=>{
							if(tx&&tx.length)
								return tx.length
							return 0;
						}
					},
					set:{
						get: () => v=>{
							var ad = checkAndAdjust(v)
							
							
							ind = ad
							
							ets.texture = tx[ind]
						}
					}
				})
			}
			
		},
		Domem: {
			get: () => function(opts = {}) {
				ATZMUS.Davar.call(this, ...arguments);
				
				var self = this
				this.hoyseefYesodos([
					"position",
					"rotation",
					"scale",
					"quaternion",
					"tzurah",
					"chomer",
					"model"
				])
				
				Object.defineProperties(this, {
					pashut: {
						get: () => m
					}
				})
				
				this.on(this.meta, d=>{
					if(!this.olam) return;
					if(d.name == "hissHavoos") {
						this.makeUpdatable()
					}
				})
				var chayooseem = opts.chayooseem
				var seq = opts.sequences;
				
				
				var model = opts["model"]
				var m = {
					
					position:new THREE.Vector3(),
					rotation:new THREE.Vector3(),
					scale:{
						x:1,y:1,z:1	
					}
				}
				
				this.on("getTziur", cb => 
					typeof(cb) == "function" ?
						cb(opts) : 0
				)
				
				tzurah = opts.material || opts.tzurah
				chomer = opts.geometry || opts.chomer
				var started = false;
				var loadedModel, modelString, olam, alreadyLoaded = false,
					animations = [], mixer, maeesuhz = {}
				this.an=animations
				this.on("loaded", () => {
					this.tzurah = tzurah
					this.chomer = chomer
					m.coyb = this;
					this.ayshPeula("heesCheel", this)
				})
				this.needsHeeshavoos=true
				this.on("hissHavoos", (d) => {
					//console.log(0)
					if(animations.length > 0) {
						if(
							mixer
							&& typeof(mixer.update) == "function"
						) {
							mixer.update(d)
						}
					}
				})
				
				var foundSequences = {}
				this.on("cheedaysh", () => {
					if(!mixer) {
						mixer = new THREE.AnimationMixer(m)
					} else {
						mixer._root = m
					}
					maeesuhz = {}
					if(animations) {
						animations.forEach(a => {
							if(typeof(a.name) == "string") {
								maeesuhz[a.name] = mixer.clipAction(a)
								maeesuhz[a.name].play()
								maeesuhz[a.name].paused = true
							}
						})
					}
					
					if(chayooseem){
					
						chayooseem = this.generateChayooseem(chayooseem)
				
						Object.keys(chayooseem)
						.forEach(k=>{
						/*	Object.defineProperty(maeesuhz,{
								get:()=>maeesuhz[chayooseem[k]]
							})*/
							var mawee = maeesuhz[chayooseem[k]]
							maeesuhz[k] = mawee
						})
					}
					
					if(typeof(seq)=="object") {
						var g;
						var cs;
						for(g in seq) {
							cs = seq[g]
							var tx = cs.textures||cs.textureNames
							var on = cs.objectName||
									cs.shaymDavar;
							if(!(typeof(tx)=="object"&&
							   typeof(on)=="string")){
								tx=cs
								on=""
							}
							var k;
							var fn;
							
							
							fn = AWTSMOOS.FindDeepTolda(
								self.pashut,on
							)
							
							if(!fn) {
								return
							}
							
							for(k in tx){
								AWTS.texture(tx[k])
							}
							

							var foundEtsem = new AWTS.Etsem({
								three:fn,
								mat:"awts"
							});
							
							
							

							foundSequences[g] = new AWTS.Sequence({
								etsem: foundEtsem,
								name:on,
								textureList:tx
							});
							
							foundSequences[g].set(0)
						}
					}
					
					this.on("finishedSet",a=>{
						if(!a.property=="scale")return;
						var av = AWTS.average(this.scale.chootify())
						Object.keys(maeesuhz)
						.forEach(k=>{
							this.chayoosShefuh(k,av)
						})
						
					})
					mixer.update(0)
					//this.makeUpdatable()
				})
				
				this.on("boray", (olam) => {
					this.olam = olam
					if(!started) {
						started = true
						if(typeof(model) == "string") {
							this.model = model
						} else {
							var geom = ATZMUS.Choymayrifier(
								chomer
							)
							var	material = ATZMUS.Tzurification(
									tzurah
								)
							var geomM = geom.malchus(),
								matM = material.malchus()

							
							m = new THREE.Mesh(geomM, matM)
							this.ayshPeula("loaded", this)
						}
					}
				})
				
				var cameras = [];
				Object.defineProperties(this, {
					cameras:{
						get:()=>cameras
					},
					modelURL: {
						get: () => modelString
					},
					sequences: {
						get: () => foundSequences
					},
					seeqs: {
						get: () => foundSequences
					},
					
					seeq: {
						get: () => this.getSeeq
					},
					getSeeq: {
						get: () => v=> self.getSequence(v)
					},
					addSeq:{
						get:()=>v=>{
							var seeq = self.getSeeq(v)
							if(!seeq) return;
							return seeq.add()
							
						}
					},
					makeUpdatable:{
						get:()=>()=>{
							if(!this.isInUpdate){
								
								this.olam.updates.push(this)	
							}
						}
					},
					
					makeNotUpdatable:{
						get:()=>()=>{
							if(!this.isInUpdate){
								
								this.olam.updates.push(this)	
							}
						}
					},
					getSequence: {
						get: () => v=>{
							var y = foundSequences[v]
							if(y) return y;
//							return null;
						}
					},
					generateChayooseem:{
						get:()=>h=>{
							return Object.fromEntries(
								Object.entries(h)
								.map(q=>(
									(a=>
										a&&a.name?[q[0],a.name]:null
									)	  
									(
										this
										.animations
										.find(z=>
											  z.name.includes(q[1])
										)
									))
								).filter(q=>q)
							)
						}
					},
					isInUpdate:{
						get:()=>(
							this.olam&&
							this.olam.updates.includes(this)
						)
					},
					color: {
						get: () => this.tzurah?
							this.tzurah.malchus().material.color:null,
						set: o => {
							if(!this.tzurah) return;
						    var exists = ATZMUS.Tzurification({
						        type: this.tzurah.type,
						        arguments: [
						            {
						                color: o
						            }    
						        ]
						    })
						    if(exists) {
						        this.pashut.material = exists.malchus()
						        this.tzurah = exists
						    } else {
						        this.pashut.material.color = new THREE.Color(o)
						    }
						}
					},
					
					olam: {
						get: () => olam,
						set: o => olam = o
					},
					animations: {
						get: () => animations
					},
					maeesuhz: {
						get: () => maeesuhz
					},
					mixer: {
						get:() => mixer
					},
					
					pauseAll:{
						get:()=>(er)=>{
							try {
								Object.keys(maeesuhz)
								.forEach(q=>{
									this.pauseChayoos(q)
								})
							} catch(e){
								if(typeof(er)=="function"){
									er(e)
								}
							}
						}
					},
					playAll:{
						get:()=>(settings=false)=>{
							try {
								Object.keys(maeesuhz)
								.forEach(q=>{
									this.playChayoos(q,settings)
									
							//	console.log(settings,q,222)
								})
							} catch(e){
								var er = settings.error
								if(typeof(er)=="function"){
									er(e)
								}
							}
						}
					},
					setChayoosToOneTime: {
						get: () => name => {
							var n = maeesuhz[name]
							if(n) {
								n.loop = THREE.LoopOnce
							}
						}
					},
					getChayoos: {
						get: () => name => maeesuhz[name]
					},
					pauseChayoos: {
						get: () => shaym => {
							var act = maeesuhz[shaym]
							if(act) {
								act.paused = true
							}
						}
					},
					chayoosShefuh: {
						get: () => (shaym, nm) => {
							var act = maeesuhz[shaym]
							if(act) {
								//var sca=AWTS.average(this.scale)
								if(typeof(nm) == "number") {
									if(act.timeScale!==nm)
										act.timeScale = nm;
								} else return act.timeScale
							}
						}
					},
					resetChayoos: {
						get: () => shaym => {
							var act = maeesuhz[shaym]
							if(act) {
								act.time = 0;
							}
						}
					},
					zmanShelChayoos: {
						get: () => (shaym, nm) => {
							var act = maeesuhz[shaym]
							if(act) {
								if(typeof(nm) == "number") {
									act.time = nm;
								}
								
							}
						}
					},
					playChayoos: {
						get: () => (shaym,settings=false) => {
							this.makeUpdatable()
							var act = maeesuhz[shaym]
							if(act) {
								if(!act.paused) return;
								act.paused = false
							//	console.log(settings,shaym,222)
								if(typeof(settings)=="object"){
									
									//	console.log("ih",act)
									Object.keys(settings)
									.forEach(k=>{
										if(act.hasOwnProperty(k)){
											
											act[k] = settings[k]	
										}
									})
								}
								act.play()
							}
						}
					},
					model: {
						get: () => {
							//console.log("hi")
							return model;
						},
						set: str => {

							if(typeof(str) == "string") {
								
								modelString = str
								if(THREE.GLTFLoader) {
									var l = new THREE.GLTFLoader()
									l.load(modelString, gltf => {
										
										console.log("LOL a buy",er=gltf)
										var gr;
										if(gltf.cameras) {
											cameras = gltf.cameras;
										}
										animations = gltf.animations
										if(gltf.scenes.length > 1) {
										//	gr = new THREE.Group()
										
											gltf.scenes.forEach(scene => {
												gr=(scene)
											})
											this.ayshPeula("sealayk")
											m = gr
											
										} else if(gltf.scenes.length == 1) {
											this.ayshPeula("sealayk")
											m = gltf.scenes[0]
										}
										
										if(m) {
											if(!alreadyLoaded) {
												this.ayshPeula("loaded", this)
												
												alreadyLoaded = true
											} else {
												this.ayshPeula("goofChadash")
											}
											
											function addCoyb(lst) {
												if(is(lst, "Array")) {
													lst.forEach(x => {
														x.coyb = self
														if(x.children) {
															addCoyb(x.children)
														}
													})
												}
											}
											if(m.children) {
												addCoyb(m.children)
											}
											
										} else {
											this.ayshPeula("problemLoading")
										}
									})
								}
							}
						}
					}
				})
			}
		},
		Ayin: {
			get: () => function(opts={}) {
				ATZMUS
				.Davar
				.call(this, ...arguments)
				
				
			}
		},
		
		Olam: {
			get: () => function(opts = {}) {
				ATZMUS.Davar.call(this, ...arguments)
				var self = this;
				var renderer, scene, camera, 
					eyein,
					interval,
					originalCan,
					html = opts.html || [],
					htmlElements = [],
					listeners = opts.listeners || {},
					customSize = opts.customSize,
					awlph = opts.choyshech ||
							opts.dark ||
							opts.black,
					dawfs = opts.dawfeem
					
					self = this;
				var clock = new THREE.Clock()
				renderer = new THREE.WebGLRenderer({
					alpha:!awlph,
					background:{
						r:1,
						b:0.2,
						g:0.5
					},                                                         
					antialias:true,
					...(
						opts.toyarim || {}
					)
				});
				if(opts.toyarim && opts.toyarim.originalCanvas) {
					originalCan =  opts.toyarim.originalCanvas
					
				}
				var cb = ()=>{}
				var loydid=false
				if(dawfs) {
					ATZMUS.Dawfeem(dawfs)
					.then(()=>{
						if(loydid) cb()
						else
						loydid=true
					})
				}
				
				scene = new THREE.Scene()
				camera = new THREE.PerspectiveCamera(
					75,
					0,
					0.01,
					10000
				)
				scene.coyb = this
				camera.position.z = 5
				Object.entries(listeners).forEach(x => {
					this.on(x[0], x[1])
				})
				
				html.forEach(x => {
					htmlElements.push(new ATZMUS.HtmlNode(x))
				})
				
				var delta = 0;
				var nivrayim = [],
					updates = [];
				var subLists = {};
				var dafim = {};
				var mouse = {x:0,y:0, clicked:false}
				var isRendering = true
				this.updates=updates
				var activeCam = camera;
				function loop() {
					delta = clock.getDelta()
					if(isRendering)
						renderer.render(scene, activeCam)
					
					updates.forEach(u => {
						u.ayshPeula("hissHavoos", delta, u);
					})
					self.ayshPeula("hissHavoos", delta, self)
					//setTimeout(loop, 16)
				}
				
			//	setupLights()
				
				function setupLights() {
					var light = new THREE.HemisphereLight(0xffffff, 0x444444)
					light.position.set(0, 20, 0)
					scene.add(light)
					
					var light2 = new THREE.DirectionalLight(0xffffff)
					light2.position.set(0, 20, 10)
					scene.add(light2)
					
					var light3 = new THREE.HemisphereLight(0xffffff, 0x444444)
					light.position.set(0, 20, -20)
					scene.add(light2)
					
					var light2 = new THREE.DirectionalLight(0xffffff)
					light2.position.set(0, 20, -10)
					scene.add(light3)
				}
				
				this.on("heesCheelKavZireeka", () => {
					if(renderer) {
						
						de = originalCan || renderer.domElement
						addEventListener("mousemove", e => {
							//console.log(e)
							it=e
							mouse.flatX = (
								
								e.clientX + scrollX 
								- de.offsetLeft
							)
							mouse.flatY = (
								
								e.clientY + scrollY
								- de.offsetTop
								
							)
						
							mouse.x = (
								mouse.flatX /
								de.clientWidth * 2 - 1
							)
							mouse.y = -1 * (
								mouse.flatY /
								de.clientHeight
							) * 2 + 1
							
							//clip space
						});
						
						
					}
				});
				
				addEventListener("mousedown", e => {
					mouse.clicked = true;
					if(!curSelected) {
						self.ayshPeula("kolYotzay")
					}
				});
				
				addEventListener("mouseup", e => {
					mouse.clicked = false;
				});
				var okd = false
				var caster = new THREE.Raycaster();
				var inter = [], lastInter = [],
						justLeft = true;
				this.on("kavZorayk", (info = {}) => {
					var meenim = info.meenim,
						meen = info.meen,
						otherList = info.list,
						mawtzatzaw = (
							typeof(info.mawtzatzaw) == "function" ? 
								info.mawtzatzaw : (() => {})
						),
						ayin = (
							typeof(info.ayin) == "function" ?
								info.ayin : (() => {})
						)
						
					
					
						
					
					if(is(meenim, "Array")) {
						meenim.forEach(x => {
							is(x, "String") &&
								(m => 
									castIt(m)
								)(
									mapIt(self.meen(x))
									
								)
						})
						
					}
					
					is(meen, "String") &&
						castIt(
							mapIt(self.meen(meen))
							
						);
					
					!meen && !meenim &&
						castIt(
							mapIt(nivrayim)
							
						)
						
						
					is(otherList, "Array") &&
						castIt(otherList);
					
					function mapIt(lst) {
						return lst.map(x => (p => {
							function ungroupIt(first) {
								var other = Array.from(first)
								for(let i = 0; i < other.length; i++) {
									
									if(other[i].children) {
										other[i] = single(other[i])
									}
								}
								var groups = findGroupsInChildren(first).map(g => 
									ungroupIt(g.children)
								).flat()
								return [first, groups].flat()
								function findGroupsInChildren(ch) {
									var groups = []
									ch.forEach(c => {
										if(c.type == "Group") {
											groups.push(c)
										}
										if(c.children) {
											var found = findGroupsInChildren(c.children)
											if(found.length > 0)
												groups.push(
													found
												)
										}
									})
									return groups.flat()

								}
								function single(thing) {
									var ar = [],
										ig = false

									for(let i = 0; i < thing.length; i++) {
										ar.push(thing[i])
										if(thing[i].type == "Group") {
											if(!ig) ig = []
											ig.push(i);
										}
									}

									if(ig !== false) {
										ig.forEach(g => {
											ar[g] = ungroupIt(ar[g].children)
											
										})
									}

									return ar.flat();
								}
							}
							return ungroupIt(p.children).flat()
							
						})(x.pashut))
					}
					function castIt(list) {

						list = list.flat()

						
						caster.setFromCamera(mouse, camera);
						inter = caster.intersectObjects(list)
						is(mawtzatzaw, "Function") && 
						inter.length > 0 ? (() => {
							mawtzatzaw(
								inter
							)
							lastInter = inter
							justLeft = false
							
						})()
						: 0
						
						
						inter.length < 1 ? (() => {
							if(!justLeft) {
								ayin(lastInter)
							
								justLeft = true;
							}
						})():0
						
					}
				})
				
				this.on("addMeen", (meenName, meen) => {
					if(
						typeof(meenName) == "string" && 
						!subLists[meenName]
					) {
						subLists[meenName] = [];
					}
					subLists[meenName] && 
						subLists[meenName].push(meen);
				});
				
				var curSelected, maftaychos = {}, prest = {}
				this.on("zeemaynMaftaychos", () => {
					addEventListener("keyup", e => {
						if(maftaychos[e.keyCode]) {
							delete maftaychos[e.keyCode]
						}
						if(prest[e.keyCode]) {
							delete prest[e.keyCode]
						}
						self.ayshPeula("maftayachLimaeeluh", e)
					})
					
					addEventListener("keydown", e => {
						//e.preventDefault()
						maftaychos[e.keyCode] = e
						if(!prest[e.keyCode]) {
							self.ayshPeula("maftayachKoytesh", e)
							prest[e.keyCode] = true
						}
						self.ayshPeula("maftayachLimahtuh", e)
					})
				})
				
				this.on("makeThingsClickable", (potentshul) => {
					
					this.ayshPeula("heesCheelKavZireeka")
					var meen, meenim
					if(is(potentshul, "Array")) 
						meenim = potentshul
					if(is(potentshul, "String")) 
						meen = potentshul
					
					var startedClicked = false,
						startedDown = false, obj = null
					this.on("hissHavoos", () => {
						
						this.ayshPeula("kavZorayk", {
							meen,
							meenim,
							mawtzatzaw(zeeveem) {
								if(
									zeeveem[0].object != obj 
									&& obj !== null
								) {

									obj.coyb.ayshPeula(
										"achbarYotzay", obj
									)
								}
								if(zeeveem[0]) {
									obj = zeeveem[0].object
									var it = (
										zeeveem[0]
										.object
										.coyb
									)
									
									if(it) it
									.ayshPeula("achbarNeechnas", zeeveem[0])
									
									if(mouse.clicked) {
										if(it) it
										.ayshPeula(
											"achbarMatah", zeeveem[0]
										)
										
										if(!startedClicked) {
											if(it) it
											.ayshPeula(
												"achbarLoMatee", zeeveem[0]
											)
											startedClicked = true
										}
										curSelected = it
										startedDown = true;
									} else if(
										startedDown &&
										startedClicked
									) {
										if(it) it
										.ayshPeula(
											"achbarLemaeelaw", zeeveem[0]
										)
										curSelected = it
										startedDown = false;
									}
								}
								
							},
							ayin(zeeveem) {
								
								if(zeeveem[0]) {
									
									var it = (
										zeeveem[0]
										.object
										.coyb
									)
									if(it) it
									.ayshPeula("achbarYotzay", zeeveem[0].object)
								}
								curSelected = null
								
							}
						})
						
						if(!mouse.clicked) {
							startedClicked = false
					//		startedDown = false;
						}
					})
				})
				
				this.hoyseefYesodos([
					"nivrayim",
				//	"dafeem",
					"shaym"
				])
				
				function hoyseefDaf(daf) {
					var shaym = daf.shaym
					var goof = daf.goof
					if(
						(typeof(shaym) == "string")
					) {
						dafim[shaym] = goof
					}
				}
				
				if(typeof opts.dafeem == "object") {
					var k
					for(k in opts.dafeem) {
						hoyseefDaf({
							shaym: k,
							goof: opts.dafeem[k]
						})
					}
				}
				
				Object.defineProperties(this, {
					meenim: {
						get: () => () => subLists
					},
					meen: {
						get: () => name => {
							return (subLists[name]) || [];
						}
					},
					hoyseefDaf: {
						get: () => hoyseefDaf
					},
					dafeem: {
						get: () => dafim
					},
					achbar: {
						get:() => mouse
					},
					luachHamaftaychos: {
						get: () => maftaychos
					},
					maftayach: {
						get: () => m => maftaychos[m]
					},
					activeCam:{
						get:()=>activeCam,
						set:v=>{
							var otc=activeCam;
							v.aspect=otc.aspect;
							
							activeCam=v;
							activeCam.updateProjectionMatrix()
						}
					},
					start: {
						get: () => (opts = {}) => {
							var parent = opts.parent || document.body,
								FPS = opts.fps || 60
							parent.appendChild(renderer.domElement)
							renderer.domElement.style.position = "absolute"
							renderer.domElement.style.left = 0
							renderer.domElement.style.top = 0
							renderer.domElement.style.width = "100%"
							renderer.domElement.style.height = "100%"
							renderer.domElement.style.zIndex = -1
							addEventListener("resize", resize)
							resize()
							function resize() {
								
								renderer.setSize(
									parent.clientWidth,
									parent.clientHeight
								)
								
								activeCam.aspect = (
									renderer.domElement.clientWidth /
									renderer.domElement.clientHeight
								)
								activeCam.updateProjectionMatrix()
								
								loop()
							}
							if(interval) clearInterval(interval)
							interval = setInterval(loop,1000/FPS)
							
							this.ayshPeula("start")
						}
					},
					nivrayim: {
						get: () => nivrayim
					},
					maloy: {
						get: () => function(choots) {
							if(typeof(choots) != "object")
								choots = {}
							var k;
							for(k in choots) {
								if(k == "nivrayim") {
									choots[k].forEach(n => {
										var niv;
										try {
											niv = (
												new ATZMUS.Nivra(
													n
												)
											)
										} catch(e){}
										if(niv) {
											self.hoyseef(niv)
										} 
										
									})
								}
							}
						}
					},
					hoyseef: {
						get: () => nivra => {
							nivra.on("sealayk", () => {
								var old = scene.children.includes(nivra.pashut)
								var oldn = nivrayim.indexOf(nivra)
								if(oldn > -1) {
									delete nivrayim[oldn]
								}
								if(old) {
									scene.remove(nivra.pashut)	
								}
							})
							nivra.on("goofChadash", () => {
								scene.add(nivra.pashut)
								nivra.ayshPeula("cheedaysh")
							})
							nivra.ayshPeula("boray", this)
							
							nivra.ayshPeula("ready", () => {
								if(nivra.pashut) {
									scene.add(nivra.pashut)
									nivra.ayshPeula("cheedaysh")
									nivrayim.push(nivra)
									
								/*	if(nivra.eventNames.includes(
										"hissHavoos"
									)) updates.push(nivra)*/
									
									if(nivra.meen) {
										self.ayshPeula(
											"addMeen", 
											nivra.meen, 
											nivra
										);
									}
									
									if(nivra.meenim) {
									
										nivra.meenim.forEach(x => {
											self.ayshPeula(
												"addMeen", 
												x, 
												nivra
											);
										})
									}	
								}
							})
						}
					},
					interval: {
						get: () => interval
					},
					html: {
						get: () => html
					},
					isRendering: {
						get: () => isRendering,
						set: v  => (isRendering = v)
					},
					original: {
						get: () => ({
							renderer,
							scene,
							camera
						})
					},
					
					renderer: {
						get: () => (
							renderer
						)
					},
					scene: {
						get: () => (
							scene
						),
						set:s=>{
							scene = s	
						}
					},
					
					camera: {
						get: () => (
							camera
						),
						set(c){
							camera=c	
						}
					},
					domCanvas: {
						get: () => 
							(originalCan || renderer.domElement)
					}
				})
				//hihi
			}
		}
	});
}
})()
function ATZMUS() {
	
}

function addFunctionsAsArrayToObject(fobj1, fobj2) {
	var obj1 = {},
		obj2 = {}, k, j;
	//one at a time
	if(
		typeof(fobj1) == "object" && 
		typeof(fobj2) == "object"
	) {
		for(k in fobj1) {
			doIt(obj1, k, fobj1[k])
		}
		
		for(k in fobj2) {
			doIt(obj2, k, fobj2[k])
		}
		
		for(k in obj1) {
			if(!obj2[k]) obj2[k] = [];
			obj1[k].forEach(x => {
				obj2[k].push(x)
			})

		}
		
		function doIt(obj, k, it) {
			(
				typeof(it) == "function" ?
					(obj[k] = [it])
				: typeof(it) == "object" ?
					(obj[k] = []) &&
					(Array.apply(0, it).forEach(x => (
						typeof(x) == "function" ?
							obj[k].push(x) : 0
					))) : 0
			)
		}
		return obj2;
	}
	
}

function addFunctionsAsArrayToObjecta(fobj1, fobj2) {
	var obj1 = {},
		obj2 = {}, k;
	
	for(k in fobj1) {
		obj1[k] = fobj1[k]
	}
	for(k in fobj2) {
		obj2[k] = fobj2[k]
	}
	
	if(
		typeof(obj1) == "object" &&
		typeof(obj2) == "object"
	) {
		
		for(k in obj1) {
			if(
				typeof obj1[
					k
				] == "function"
			) {
				obj1[k] = [
					obj1[k]
				]
			}
			for(j in obj2) {
				if(k == j) {
					if(
						typeof obj2[
							j
						] == "function"
					) {
						obj2[j] = [
							obj2[j]
						];
						
					}
					
					
					
					if(
						obj1[k]
						.constructor
						.name == "Array" &&
						
						obj2[j]
						.constructor
						.name == "Array"
					) {
						obj1[k].forEach(x => {
							obj2[j].push(x);
						});
					}
				} else {
					if(is(obj1[k],"Array")) {
						obj2[k] = [];
						obj1[k].forEach(x => {
							obj2[k].push(x);
						});
					}
				}
			}
		}
	}
	return obj2;
}
function objEq(obj1, obj2) {
	var t = true, k, j;
	if(
		(typeof(obj1) == "object") &&
		(typeof(obj2) == "object")
	) {
		
		for(k in obj1) {
			if(
				!Object.keys(obj2).includes(k) ||
				obj2[k] !== obj1[k]
			) t = false
		}
		
		for(j in obj2) {
			if(
				!Object.keys(obj1).includes(j) ||
				obj1[j] !== obj2[j]
			) t = false
		}
		/*for(j in obj2) {
			if(k !== j) t = false
			else if(obj1[k] !== obj2[j]) t = false
		}*/
	}
	
	return t
}

function arrayEQ(ar1, ar2) {
    var isEqual = true
    if(ar1.length != ar2.length) return false;
    ar1.forEach((a, i, ar) => {
        if(
            
            ar1[i] != ar2[i]
        ) isEqual = false
    })
    return isEqual
}

function is(it, that) {
	return (
		(it === that) ||
		(
			typeof(it) !== "undefined" &&
			typeof(that) !== "undefined" &&
			(
				(
					typeof(that) == "string" &&
					it.constructor.name == that
				) || 
				(
					typeof(that) == "function" &&
					it.constructor == that
				)
			)
		)
	)
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

ATZMUS.dawfeem = {}