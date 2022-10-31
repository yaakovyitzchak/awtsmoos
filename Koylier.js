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
        
        var koyleemLinks=op.koyleem||op.audio||op.voices||op.sounds
        var lk=op.loaded||op.loadedKoyleem||op.lk
        var derech=op.derech||"./"
        if(koyleemLinks) {
         // rd(JSON. stringify(op))
          getKoyleem(koyleemLinks, derech).then(r=>{
            if(typeof(lk)=="function"){
              lk(r)
            }
            rd(r)
          }).catch(j=>jh(j))
        } else jh("LOL nothing")
  }
    })
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
					
					ad.oncanplay=()=>{
						r(ad)
						
					}
					
					ad.src=info
					//console.log(",",m=ad,a)
					ad.onerror=(n)=>{
					 j(ad. src)
						
					}
    })
         
  }
}

function KoylGoof(){
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
  
  Object. defineProperties(this, {
    koyleem: {
      get: ()=> koyleem
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
    length: {
      get: ()=> {
        var lengths=koyleem. map(u=>
          u. length
        )
        var longest=Math.max(
         ... lengths
        )
        return longest || koyleem. length
      }
    },
    play: {
      get: ()=>()=>{
        koyleem. forEach(k=>{
          k.play()
          playing=true
          
        })
      }
    },
    pause: {
      get: ()=>()=>{
        koyleem. forEach(k=>{
          k.pause()
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
  
  this.  play=()=>{
    this. audio. paused=false
    this. audio. play()
  }
  this. pause=()=>{
    this. audio. paused=true
    if(typeof(this. audio. pause)=="function") {
      this. audio. pause()
    }
  }
  
  var length=0
  
  /*
  this. audio. currentTime=Number. MAX_SAFE_NUMBER
  length=this. audio. currentTime
  this. audio. currentTime=0*/
  Object. defineProperties(this, {
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
		url="./"+url
		
		fetch(url)
		. then(r=>r.json())
		.catch(w=>j(w))
		. then(r=>{
		  rr(r)
		}).catch(w=>j(w))
  })
}