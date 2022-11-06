//B"H
function Makor(otp={}){

  
  
  
  this.get=analyze;
  function analyze(op={}){
  
    return new Promise((rd,jh)=>{
      
      if(op.hash) {
        Makor.getHashInfo({hash:op.hash}).then(j=>{
          
          analyze(j).then(gh=>{
            rd(gh)
          }).catch(j=>jh(j))
        }).catch(h=>jh(h))
      } else {
        op=lowerCaseify(op)
        var koyleemLinks=op.koyleem||op.audio||op.voices||op.sounds
        var lk=op.loaded||op.loadedkoyleem||op.lk
        var derech=op.derech||"./"
        var dayuh = op.dayuh;
        var ksawv/*script*/=op. script||op.ksawv
        if(koyleemLinks) {
         // rd(JSON. stringify(op))
          getKoyleem(koyleemLinks, derech).then(r=>{
            if(typeof(lk)=="function"){
              lk(r)
            }
            if(dayuh) {
              getDayuh(dayuh,derech). then(d=>{
                r.dayuh=d;
                if(typeof(ksawv)=="string") {
                  console. log("mukk",derech,ksawv)
                  Makor.loadScript(derech+"/"+ksawv)
                  . then(h=>{
                    console. log("striving",kk=h,mm=d,vv=r,r.dayuh)
                    rd(r)
                  }). catch(e=>{
                    console. log(e)
                    rd(r)
                  })
                } else
                  rd(r)
              })
            } else
              rd(r)
          }).catch(j=>jh(j))
        } else jh("LOL nothing")
  }
    })
  }
  
  function getDayuh(dy,dr) {
    var  cr=0
    var rez={}
    var keys=null
    return new Promise((r,j)=>{
      if(typeof(dy)=="object")
        g1()
      else j()
      function g1() {
        if(! keys) {
          keys=Object. keys(dy)
        }
        var c=dy[keys[cr]]
        if(!c) {
          r(rez)
        } else {
          var ob={}
          
          getFile(dr+"/"+c,y=>y.blob())
          . then(t=>{
            t.arrayBuffer(). then(ab=>
              dn(new Uint8Array(ab))
            )
            
          }). catch(e=>{
            console. log(e)
            dn()
          })
          
          function dn(d) {
            rez[keys[cr].toLowerCase()] = d;
            cr++;
            g1()
          }
        }
      }
    })
  }
  
  function getFile(url,fn) {
    var cb=typeof(fn)=="function"? fn:
      r=>r. text;
    return new Promise((rs,j)=>{
      fetch(url)
      . then(cb)
      . catch(j)
      . then(r=>{
        rs(r)
      })
      . catch(j)
    })
  }
  
  function lowerCaseify(ob) {
    if(ob === null || typeof (ob)!="object")
      return ob
    var rt={};
    var k
    for(k in ob) {
      rt[k. toLowerCase()] = ob[k]
    }
    return rt
  }
  this. kool=null
  var s=this
  function getKoyleem(klz,b="./") {
    var ad=new KoylGoof()
    return new Promise((r,j)=>{
      loadKoyleem(klz,ad, b).then(f=>{
        s. kool=ad
        r(f)
      }).catch(q=>j(q))
      
    })
    
  
    function loadKoyleem(s,a,b){
			var ind=0
			return new Promise((r,j)=>{
			
				  if(typeof(s)!="object")
				    return j("no object")
				  
				  var k=Object. keys(s)
			//	  document. body. innerHTML=JSON . stringify (k)

				  var total=k. length; 
				  if(! total) j("dude you have nothing")
				  
				  var cur=0
				  charvoice()
				  function charvoice(){
				    
				    var v=s[k[cur]]
				  //  r("study"+v+k[cur])
				    if(!v||v. constructor. name!="Array")
				      return chessed()
				    
				    var done=0
				    
				    function chessed (errors){
				      if(cur >= k. length-1){
				        ad. errors=errors
				        r(ad)
				      } else {
				        cur++
				        charvoice()
				      }
				    }
				    return attemptLink(chessed)
				    function attemptLink(cb) {
				      var lk =v[done]; 
				      var sb=lk.substring(6)
				      if(! sb.includes(
				        "http:/"
				      ) && !sb. includes(
				        "https:"
				      )) lk = "./"+b+"/"+lk
				      
				      console.  log("koyling off",lk)
				      var errors=[]
				      function goOn(er){
				        if(er) errors.push(er)
				        if(
				          done>=v. length-1 ||
				          !er
				        ) {
				          cb(errors)
				        } else {
				          done++
				          attemptLink(cb)
				        }
				      }
				      loadKoyl(lk)
				    	. then(r=>{
					      a.push(new Koyl({
					        shaym: k[cur],
					        path: lk,
					        audio: r
					      }))
					      
				    		goOn()
				    	}). catch(e=>{
				    	  /*
				    	  a.push(new Koyl())
					      
					      */
					      var en={
					        shaym: k[cur],
					        path: lk,
					        error:e
					      }
				    	  goOn(en)
					//	dn(n)	
			    		})
				    }
				  }
					
			})
		}
  }
  
  function loadKoyl(info){
    return new Promise((r,j)=>{
          var ad=document.createElement("audio")
					
					ad.addEventListener("loadedmetadata",()=>{
						r(ad)
						
					})
					
					ad.src=info
					//console.log(",",m=ad,a)
					ad.onerror=(n)=>{
					 j(ad. src)
						
					}
    })
         
  }
}

function KoylGoof(){
  peuluh. call(this)
  var koyleem=[]
  this. push=(h)=>{
    koyleem. push(h)
    
    /*
    var kl=koyleem. length-1
  
    if(! this. hasOwnProperty(kl)
    ) {
      var ob={
      }
      ob[kl]={
        get:()=>koyleem[kl]
      }
      Object. defineProperty(this,ob)
    }
    */
    
  }
  var playing=false
  var self=this
  var dayuh
  Object. defineProperties(this, {
    koyleem: {
      get: ()=> koyleem
    },
    
    doydeem:{// audio levels at current tenth of second
      get: ()=>(tnth)=>{
        return koyleem. map(y=>({
          doydee:y.getDoydee(tnth),
          shaym: y. shaym
        }))
      }
    },
    dayuh:{
      get: ()=>dayuh, 
      set(v) {
        console. log("seeing", v, koyleem)
        dayuh=v
        Object. keys(v). forEach(y=>{
          var sh=koyleem. find(g=>g. shaym. toLowerCase()==y)
          if(sh) {
            
            sh.gawleemB=v[y]
            console. log(y,sh,v[y])
          }
        })
      }
    },
    setMikoyros: {
      get: ()=>mks=>{
       mks. forEach(f=>{
         if(f. path) {
           var k=koyleem. find(b=>{
             if(b.orech==f. path) {
               if(!b.did) {
                 b. did=true; 
                 return b;
               }
             }
           })
           
           if(k) {
             k.setMikoyr(f.koylMakor)
           }
         }
       })
       koyleem. forEach(j=>j. did=false)
      }
    },
    goyluhmeem:{// blobs
      get: ()=>()=>new Promise((t,m)=>{
        var blobs=[]
        var n=0
        var c
        function g1() {
          if(n>koyleem. length-1) {
            t(blobs)
          } else {
            c=koyleem[n]
            c.dayuhChai(). then(b=>{
              blobs. push({
                blob: b,
                file: b,
                path: c.orech
              })
              n++;
              g1()
            }). catch(e=>{
              n++;g1()
            })
          }
        }
        
        g1()
      })
        
      
    },
    playing: {
      get: ()=> playing
    },
    longest:{
      get:()=>fnc=> {
        if(typeof(fnc)!="function") {
          fnc=(k)=>k;
        }
        var lengths=koyleem. map(fnc)
        var longest=Math.max(
         ... lengths
        )
        return longest
      }
    },
    duration: {
      get:()=>{
        
        return this. longest(u=>
          u. duration
        )
      }
    },
    curTime: {
      get:()=>this. currentTime, 
      set(v){
        this. currentTime=v
      }
    },
    currentTime: {
      get:()=>{
        return this. longest(u=>u.currentTime)
      }, 
      set(v){
        koyleem. forEach(t=>{
          t. currentTime=v
        })
      }
    },
    length: {
      get: ()=> {
        
        return koyleem. length
      }
    },
    play: {
      get: ()=>()=>{
        koyleem. forEach(k=>{
          k.play(). then(k=>{
            self. poyl("play")
          })
          playing=true
          
        })
      }
    },
    pause: {
      get: ()=>()=>{
        koyleem. forEach(k=>{
          k.pause(). then(r=>{
            self. poyl("pause")
          })
          playing=false
          
        })
      }
    }
  })
}

function Koyl(o={}){
  this. shaym=o. name||o.shaym
  this. orech=o. path||o. orech||o. derech
  this. audio=o. audio||o.koyl
  
  this.  error=o.error
  
  
  
  
  var length=0
  var gawleem
  /*
  this. audio. currentTime=Number. MAX_SAFE_NUMBER
  length=this. audio. currentTime
  this. audio. currentTime=0*/
  Object. defineProperties(this, {
    play: {
      get: ()=>()=>new Promise((r,j) => {
        this. audio. paused=false
        this. audio. play(). then(r)
      })
    },
    getDoydee:{// binary time data of audio
      get:()=>tnth=>{// at trnth of second
        if(! gawleem) return 0;
        //"no gawleem yet";
        
        var e8th=Math.floor(tnth/8)// time of tenth of second, but each byte is 8
      
        var nm=gawleem[e8th]
        
        if(!nm) {
          //console. log("no", tnth, gawleem, e8th)
          return 0;
          //
        }
        var offset=tnth%e8th
        
        if(offset >8)
        console. log(offset,"right")
        var bit=(nm >>> offset) & 1;
        return bit
      }
    },
    currentTime: {
      get:()=>Math. floor(this. audio. currentTime*10)/10,
      set(v) {
        this. audio. currentTime=v
      }
    },
    curTime: {
      get:()=>this. audio. currentTime
    },
    pause: {
      get: ()=>()=>new Promise((r,j) => {
        this. audio. paused=true
        if(typeof(this. audio. pause)=="function") {
          this. audio. pause()
          r()
        } else r()
      })
    },
    length: {
      get: ()=>{
        var buf=this. audio. buffered
        var l=buf. length; 
        var total=0
        var i=0
        for(i;i<l;i++){
          total+=buf. end(i)-buf. start(i)
        }
        return length
      }
    }, 
    gawleemB:{
      get:()=>gawleem,
      set(v){
        gawleem=v
      }
    },
    duration: {
      get:()=>this. audio. duration
    },
    setMikoyr: {
      get: ()=>mk=>{
        this. audio=mk
      }
    },
    keys: {
      get:()=>getKeys(this. audio)
    },
    dayuhChai/*raw data/ bytes*/:{
      get:()=>(buff=false)=>new Promise((rs,j)=>{
        fetch(this. orech)
          . then(r=>r.blob())
            . catch(e=>j)
          . then(r=>rs(
              buff?(()=>
                r.arrayBuffer()
              ) : r
          )). catch(e=>j)
      })
    }
  })
  
  
}

function getKeys(ob){
    var ad=[]
    var k;
    for(k in ob){
      ad. push(k)
    }
    
    return ad
  }
Makor.getHashInfo=(op={})=>{
  
  return new Promise((rr,j)=>{
    
  
  var loyk=op.hash;
  console. log("tend", loyk,op)
  var fail1=op.fail1||op.fail
	var fail2=op.fail2
  var url=""
  
  try {
			url = atob(loyk)
		} catch(e) {
		  if(typeof(fail1)=="function")
		    fail1(e)
			j(e+"")
		}
		
		
		fetch(url)
		. then(r=>r.json())
		.catch(w=>j(w))
		. then(r=>{
		  rr(r)
		}).catch(w=>j(w))
  })
}


Makor.loadScript=loadScript

