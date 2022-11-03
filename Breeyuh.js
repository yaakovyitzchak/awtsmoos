//BH
if(window. AWTSMOOS)
  AWTSMOOS. Breeyuh=Breeyuh;
function Breeyuh()  {
    var zmanKawtsawr=0.1// smallest time unit,  10th of second
    peuluh. call(this)
    var te = {}
    this. te=te
    var editor=this
    var nmid=0
    var id=()=>"BH_"+Date. now()+"_"
      +Math. floor(Math. random()*771)
      +((nmid++)*72)
    var myId=id()
    var interval;
    var events=[]
    var neemsheches=[]
    var koopuh=new Koopuh()
    
    style()
    
    this. on("loop",()=>{
      if(length){
        events. forEach(i=>i())
        events=[]
      }
      
      if(neemsheches. length){
        neemsheches. forEach(i=>i())
        
      }
      editor. poyl("heesHawvoos")
    })
  
    this. start=()=>{// through clicking
      if(!te.koylEenyan) {
        te.koylEenyan = new AudioContext()
      }
     
      eved.postMessage(8)
    }
    
    
    this. KoylMakor=KoylMakor;
    this. hawveeShtareem=hawveeShtareem;
    this. koopuh=koopuh
    var inp;
    var fr;
    var _cstcns=false
    var oldal=null
    
    Object. defineProperties (this, {
      insertIntoArray:{
        get:()=>(ar,el,ind)=>{
          if(
            ind<0 || ind >= ar. length-1
          ) return false; 
          
          ar.push(null);
          var i;
          for(
            i = ar.length-1;  
            i > ind; 
            i--
          ) {
            ar[i] = ar[i-1];
          }
          ar[ind]=el;
          return true;
        }
      },
      shoymayr:{
        get: ()=>(ob={})=>{
          var shaym=ob.shaym
          var bts=ob.dayuh;
          var ty=ob. type; 
          if(!ty) {
            var a=document.createElement ("a")
            var b=new Blob([bts],{
              type:"application/octet-stream"
            })
            a. download=shaym
            var u=URL. createObjectURL(b)
            if(u) {
              a.href=u
              a. click()
            } else return "not working "
          }
        }
      },
      numbereyes:{
        get:()=>input=>{
          input. type="tel";
          var last=""
          input. addEventListener("input", up)
          function up(){
            if(isNaN(input. value)) {
              input. value=last
            } else {
              last=input. value
            }
          }
          Object. defineProperties(input,{
            up: {
              get: ()=>up
            },
            value1: {
              get: ()=> parseFloat(
                input. getAttribute("value")
              ), 
              set(v) {
                input. setAttribute("value", v)
                input. dispatchEvent(
                  new Event("input",v)
                )
              }
            }
          })
        }
      },
      customAlert:{
        get: ()=>function(){
          if(oldal) return
          /*
          oldal=alert;
          window. alert=function() {
            var lert=document.createElement ("div")
            lert.className=myId+"alert"
            var msgb=document. createElement("div")
            msgb.className=myId+"msg"
            
            var k=document. createElement ("button")
            k. onclick=()=>{
              lert. parentNode. removeChild(lert)
            }
            k. innerHTML="Okay?!"
            
            
            lert.appendChild(msgb)
            br(lert)
            lert. appendChild(k)
            Array. from(arguments)
            .forEach(a=>{
              msgb. innerHTML=a+'<br>'
            })
            document.  body. appendChild(lert)
          }*/
        }
      },
      customConsole: {
        get:()=>()=>{
          if(_cstcns) return
          _cstcns=true
          var oc=console. log; 
          /*
          console. log=function(){
            oc(["hi",... arguments])
            var html=Array. from(arguments). map(k=>{
              if(typeof(k)=="object")
                return editor. objectViewer(k)
              else return k;
            })
            alert("cob Con: "+html)
          }*/
        
        }
      },
      objectViewer:{
        get:()=>function obv(ob){
          /*
          var txt="{"
          var k;
          for(k in ob){
          // txt+=obv(obk)
          }*/
          return JSON. stringify (ob)
        }
      },
      tzavEved:{//"command" Worker 
        get: ()=>(cmd,ob,cb)=>new Promise((r,j)=>{
          var koyray
          if(ob&&ob. callback)
					  koyray=ob. callback
					  
					
          if(typeof(cb)=="string")
					   koyray=cb
					 
					 if(!koyray)
					  koyray=id()
					  
           function m(e) {
					  var k;
					  
					  if(e. data. log)
					    console. log("logged", JSON.stringify(e. data))
					   

					  for(k in e.data) {
					    
					    if(k==koyray) { 
					      eved. removeEventListener("message", m)
					      r(e. data[k])
					    }
					  }
					 }
					 eved. addEventListener("message",m)
					 var sn={};
					 if(typeof(cmd)=="string") {
					   sn[cmd]={
					     dawss: ob,
					     callback: koyray
					   }
					 }
					 eved. onerror=e=>console. log(e)

					 eved.postMessage(sn)
        })
          
        
      }
    })
    
    editor. customAlert()
    editor. customConsole()
    
    var eved=asayEved(function(){
      //
      var Bh
      ="hi there"
      
      console.log(Bh)
      var shleechooseem={
        
        dawsify(on,cb){
          
          var am=on. amount
          var b=on. dayuh; 
          var nlng=Math. ceil(b. length / 8)
          var n=new Uint8Array(nlng)
          
          var i;
          var k;
          var btst=[]
          var cr=0;
          var nm;
          for(i=0;i<nlng; i++){
            btst=Array(8).fill(0)
            for(k=0;k<8;k++) {
              nm = b[cr]
              if(nm || nm==0) {
               btst[k]=Math. abs(nm)>am?1:0
              } //else console. log("nope", nm,k,i,cr,b,btst)
              cr++
            }
            n[i] = parseInt(btst.join(""),2)
              
          }
          koyrayAwchor (n,cb)
        },
        lipt(akw,cb){
          //
          
          var sr = akw.sr||akw. sampleRate
  				var dayuh = akw.dayuh||akw.data
  				var frakShins = akw.fractionsOfSecond||
				  	akw.fos;
				  frakShins = 1/frakShins
          console. log(frakShins)
          var liperty=makeLipsinkify(sr,dayuh,frakShins)
         
          if(liperty)
            koyrayAwchor (liperty,cb)
          else koyrayAwchor("error !",cb)
        }
      }
      
      function getCbString(ob) {
        return ob.cb||ob.callback||
          ob.koyrayAwchor||ob.kaw
      }
      
      function koyrayAwchor(msg,cb) {// callback
        var rs={}
        if(typeof(cb)!=="string")
          cb="neeshlum"
        rs[cb]=msg;
       
        postMessage(rs)
      }
      
      function makeLipsinkify(sr,q,fractionsOfSecond) {    
  			var newL=Math.floor((q.length/sr)*fractionsOfSecond);
  			var step = q.length/newL;
  
  			var newFl = new Float32Array(newL);
  			var i;
  			var offset = 0;
  			for(i = 0; i < q.length; i+=step) {
  				if(i+step < q.length) {
  					var dataAm = q.slice(i,i+step)
  
  					var avRij = aver(dataAm)
  					if(offset<newFl.length){
  						newFl[offset] = avRij
  						offset++;
  					}
  				}
  			   // newFl[fldata.slice(i+offset,i+offset+step)]offset)
  			}
  
  			function aver(ar) {
  				var av = 0;
  				var i;
  				for(i = 0; i < ar.length;i++) {
  					av+=ar[i]
  				}
  				av = av / ar.length
  				return av;
  			}
  			
  			return newFl
  		}
  		
  		onmessage=e=>{
  		  var k;
  		  var fnc
 
  		  for(k in e.data) {
  		    
  		    fnc=shleechooseem[k]
  		    if(typeof (fnc)=="function") {
  		      var d=e.data[k].dawss
  		      var cb=getCbString(e. data[k])
  		      
  		      fnc(d||e.data[k],cb)
  		    }
  		  }
  		};

    });
    function doEvent(fnc) {
      events. push(fnc)
    }
    
    editor.awsayEved=editor. asayEved=asayEved
    function asayEved(fnc) {
      
      var cl="console.log=function(){postMessage({log: 'from Eved: '+Array. from(arguments). map(j=>JSON.stringify(j))})};"
      var str=//editor. objectViewer+";"+
       // cl+
       
      eval("`("+fnc+")()`")
      
      var bl=new Blob([
        str
      ]
      , {
        type: "text/javascript"
      }
      )
      
      var ul=URL. 
        createObjectURL(
          bl
        )
     // console. log(ul)
      var wk=new Worker(
        ul
      )
     
      
      return wk;
    }
    function br(p) {
      var g=document.createElement ("br")
      p. appendChild(g)
    }
    var sty;
    function style() {
      var f=document.createElement ("style")
      sty=f
      document. head. appendChild(f)
      f.innerHTML=`
        .${myId}redlight{
          display: block; 
          width: 32px;
          height: 32px
        }
        .${myId}alert{
          position: absolute; 
          width: 40%;
          #height: 18%;
          padding: 6px;
          left: 50%;top:20%;
          transform: translate(-50%,0);
          background: cyan;
          word-break:break-word;
          box-shadow: 0px 0px 5px black inset;
        }
        
      `
    }
    
    this. peuluh=window. peuluh
    
    
    function MawdrayguhChaylik(op={}){// timeline component
      peuluh. call(this)
      var offset=op.offset;
      var chaylik=op.chaylik;
      var self=this; 
      Object. defineProperties(this, {
        offset:{
          get:()=>offset, 
          set(v) {
            offset=v
          }
        },
        pause: {
          get:()=>new Promise((r,j)=>{
            if(!chaylik) j("no chaylik")
            chaylik. pause(). then(r)
              . catch(j)
          })
        },
        currentZmanKavTime:{
          get:()=>chaylik.chaylikZman+self. start
        },
        playFrom: {
          get: ()=>(
            t
            /*
              layer/ timeline time, could
              be out of bounds of chaylik so have to check
            */
          )=>new Promise((r,j)=>{
            var chaylikTime/*time to
              start from chaylik's time,  
              which then offsets to makor time
              based off its start trim.
              has to subtract from beginning
              of timeline chaylik, when this
              section starts in timeline. 
              
              */ = t- self. start;
              if(
                self. start <= t &&
                self. end >= t &&
                chaylikTime >=0 &&
                chaylikTime <= chaylik. duration
              ) {
                chaylik. playFrom(chaylikTime)
                  . then(r). catch(j)
              } else j("out of bounds")
          })
        },
        start: {// start time in timeline layer itself, can change
          // if offset is moved by user etc.
          get:()=>offset, 
          set(v){
            offset=v
            self. poyl(
              "zawz", offset
            )
          }
        },
        end: {
          get:()=>offset+self. duration
        },
        duration: {
          get:()=>chaylik. duration
        },
        chaylik: {
          get:()=>chaylik
        }
      })
    }
    
    function Mawdrayguh(op={}) {
      var chawluhkeem=[]
      var self=this; 
      var ct=0;
      Object. defineProperties(this,  {
        hoyseef:{
          get:()=>(op={})=>{
            var mk=op.koyl||op.makor||op.koylMakor;
            var st=op. start||0; 
            var en=op. end || mk?mk. duration: 0;
            var chay=op.koylChaylik
            var offset = op. offset||0
             //
            if(!chay) {
              chay=new KoylChaylik({
                makor: mk,
                start:st,
                en: end
              })
            }
            
            var mawdrayguhChaylik=new MawdrayguhChaylik ({
              chaylik:chay,
              offset
            })
            
            var atZman=self. chaylikAtZman(offset, mawdrayguhChaylik);
            if(atZman>-1) {
              
              self. zawzAwcharZman(
                offset,
                mawdrayguhChaylik
              )
              
              editor. insertIntoArray(
                chawluhkeem,
                mawdrayguhChaylik,
                atZman
              );
            } else {
              chawluhkeem. push
                (mawdrayguhChaylik)
            }
            
            mawdrayguhChaylik. on("zawz", (timeMoved, oldTime) =>{
              var atZman=self. chaylikAtZman(timeMoved,mawdrayguhChaylik)
              if(atZman>-1) {
                mawdrayguhChaylik. offset=oldTime
                return false; 
              }
              return true; 
              
            })
          }
        },
        zawzAwcharZman:{// move tracks which exist in layer after certain time
          get: ()=>(time, chaylik)=>{
            var afterZman=self. chawluhkeemAfterZman(time)
            afterZman. forEach(k=>{
              k. start+=chaylik. end
            })
          }
        },
        chawluhkeemAfterZman:{
          get:()=>zman=>chawluhkeem. 
              filter(j=>
                j.start<=zman &&
                j.end>=zman
              )
        },
        chaylikAtZman:{
          get:()=>(zman,ch)=>
            chawluhkeem. 
              findIndex(j=>
                j.start<=zman+ch. duration &&
                j.end >= zman
              )
          
        },
        duration: {
          get: ()=>{
            var ttl=0
            chawluhkeem. forEach(j=>{
              ttl+=j. duration
            })
            return ttl;
          }
        },
        currentTime:{
          get: ()=>ct,
          set: v=> {
            chawluhkeem. forEach(k=>{
              k. currentTime=v- offset
            })
            ct=v;
          }
        }
      })
    }
    
    function ZmanKav/*timeline*/(op={}){
      var mawdraygos/*layers*/=[];
      var currentTime;
      var curTime;
      Object. defineProperties(this,  {
        mawdraygos: {
          get:()=> mawdraygos
        },
        currentTime: {
          get: ()=>currentTime,
          set(v) {
            
            activeMawdraygos. forEach(h=>{
              h. currentTime=v;
            })
          }
        },
        curTime: {
          get: ()=>currentTime 
        },
        activeMawdraygos:{
          get: ()=> mawdraygos. filter(k=>k)
        },
        playFrom:{
          get:()=>(tm)=>new Promise((r,j)=>{
            activeMawdraygos. forEach(k=>{
              k.playFrom(tm)
            })
          })
        },
        pause:{
          get:()=>(tm)=>new Promise((r,j)=>{
            activeMawdraygos. forEach(k=>{
              k. pause  (tm)
            })
          })
        },
        hoyseef: {
          get: ()=>(op={})=>{
            var mawd=op.mawd||op.mawdrayguh
              || op.layer
            
            
            var m=mawdraygos[mawd];
            if(!m) {
              m=mawdraygos[mawd] = new Mawdrayguh()
            }
            
            m.hoyseef(op)
          }
        }
      })
    }
    
    function KoylChaylik/*audio segment*/(op={}){
      var start=op. start||0; 
      
      var makor=op.makor||op.mawkoyr||op.mawkor
        ||op.makoyr||op. source;
      var end=op. end||makor. duration; 
        
      var ct=0
      Object. defineProperty(this,  {
        chaylikZman:{
          get:()=>{
            if(! makor) return 0;
            return makor.currentTime - start; 
          }
        },
        makor:{
          get: ()=>makor
        },
        end: {// trim end from source
          get:()=>end, 
          set(v){
            end=v
          }
        },
        start: {// trim start from source
          get:()=>start, 
          set(v){
            start=v
          }
        },
        playFrom: {
          get: ()=>t=>new Promise((r,j) =>{
            if(!makor) j("no source")
            var adjTime = t+start
            makor. playFrom(adjTime). then(r). catch(j)
          })
            
          
        },
        pause: {
          get: ()=>t=>new Promise((r,j) =>{
            if(!makor) j("no source")
            var adjTime = t+start
            makor. pause(t). then(r). catch(j)
          })
            
          
        },
        currentTime: {
          get:()=>ct,
          set(v){
            ct=v
            this. playFrom(v);
          }
        },
        duration: {
          get:()=>{
            if(!makor) return 0;
            return makor. duration - start - end
          }
        }
      })
    }
    
    this.ZmanKavShoymayuh=window. ZmanKavShoymayuh
    
    
    function mawseem() {
    editor.on("paused",  val=>{
      editor. paused=val
    })
    
    editor.on("played",  val=>{
      editor. paused=! val
    })
    
    var itt;
    editor.on("played", ()=>{
        itt=setInterval(()=>editor.poyl("loop"),1000/30)
    })
  
    editor. on("paused", ()=>{
      if(itt) {
        clearInterval(itt)
      }
    })
    
    editor.on("updated",  ()=>{
      editor. poyl("loop")
    })
    }
    
    mawseem()
    this.teemuh=teemuh;
    function teemuh(s,el){
      el. innerHTML=""
      if(s. meen=="koyl") {
        var nm=document. createElement ("div")
        nm. innerHTML="Previewing: "+s. shaym
        var pl=document. createElement ("button")
        pl. innerHTML="Taweel<br>[aka \"Play\"]"//"Play"
        
        var zman=new ZmanKavShoymayuh({
          myId,
          hoyvehToyr/*current time indicator style*/:`
            background: blue;
            width:2px;
          `,
          koylMawkom:`
            width:88%;
            height: 15px;
          
            border: 1px solid black; 
          `
        })
        zman.poyl("shoymayuhKoyl",s.koylMakor)
        function go() {
          zman.poyl("heesHawvoos")
        }
        z.on("updated", ()=>{
          editor. poyl("updated")
        }) 
        editor. on("heesHawvoos",go)// get back to: remove event
        var t=document. createElement("div")
        
        var volNm=document. createElement("div")
        volNm. className=myId+"number"
        
        
        var lipt=document. createElement ("button")
        lipt. innerHTML="koyl story? <br>[get sound waves]"
        lipt. onclick =()=>{
          lipt. innerHTML="getting sound waves..."
          s.koylMakor.koylStory()
          . then(r=>{
            lipt. innerHTML="got them. again? "
          
          })
        }
        var forward=document.createElement ("button")
        forward. innerHTML="forward"
        forward. onclick=()=>{
          s.koylMakor.currentTime += zmanKawtsawr;
          editor. poyl("updated")
        }
        var back=document.createElement("button")
        back. innerHTML="back"
        back. onclick=()=>{
          editor. poyl("updated")
          s.koylMakor.currentTime -= zmanKawtsawr;
        }
        
        var time=document. createElement("div")
        zman.on("updatePointer",t=>{
          time. innerHTML=t
        })
        
        var amount=document. createElement ("input")
        editor. numbereyes(amount)
        amount. value=0
        amount. up()
        var onOrOff=document. createElement ("div")
        onOrOff. className=myId+"redlight"
        zman.on("volume", inv=>{
          var v=inv
          if(amount. value > 0) {
            if(
              Math. abs(
                inv
              ) > amount. value
            ) {
             // v=amount. value
              onOrOff. style. background="green"
            } else {
            
              onOrOff. style. background="red"
            }
          }
          volNm. innerHTML=v
        })
        pl.onclick=()=>{
         
          if(!s.koylMakor. paused) {
            pl. innerHTML="pausing..."
            s.koylMakor. pause()
            . then(t=>{
              pl. innerHTML="play? "
              editor. poyl("paused",  true)
            }). catch(h=>{
              pl. innerHTML="couldn't pause. again? "
              console. log(h)
            })
            
          } else {
            pl. innerHTML="playing..."
            s.koylMakor. play()
            . then(u=>{
              pl. innerHTML="pause?"
              editor. poyl("played",  true)
            }). catch(j=>{
              console. log(j)
              pl.innerHTML ="couldn't play. again?!"
            })
          }
        }
        
        var sv=document.createElement("button")
        sv. innerHTML="save koyl dayuh"
        sv. onclick=()=>{
            sv. innerHTML="generating koyl dayuh..."
            s.koylMakor.dawsify({
              amount: amount. value
            }). then(ab=>{
              console.log("got", rt=ab);
              sv.innerHTML="downloading"
              editor. shoymayr({
                shaym: myId+"_dayuh.awtsmoos",
                dayuh: ab
              })
            })
            
        }
        t. appendChild(nm)
        br(t)
        t. appendChild(pl)
        br(t)
        t.appendChild (forward)
      
        t. appendChild(back)
        br(t)
        t.appendChild (time)
        br(t)
        t. appendChild(lipt)
        t. appendChild (volNm)
        br(t)
        t.appendChild (amount)
        br(t)
        t. appendChild(onOrOff)
        zman. appendTo(t)
        br(t)
        t. appendChild(sv)
        el.appendChild(t)
        
      }
    }
     
    this. Koopuh=Koopuh;
    function Koopuh() {
    // Array call(this)
      var koop=[]
      Object. defineProperties(this, {
        tayn: {
          get:()=>(s)=>{
            var ind=koop. indexOf(s)
            if(ind<0) {
              koop. push(s)
              
            }
          }
        },
        list: {
          get:()=>{
            return koop
          }
        }
      })
    }
    
    
    this. taynliKoopuh=taynliKoopuh
    function taynliKoopuh (shtar) {
      koopuh.tayn(shtar)
    }
    function Shtar(op={}){
      var file=op.file
      this. shaym=file. name
      var path; 
      Object. defineProperties(this, {
        file:{
          get:()=>file
        }, 
        path:{
          get:()=>path, 
          set(v){
            path=v
          }
        }, 
        arrayBuffer:{
          get: ()=>()=>new Promise((r,j)=>{
            
              var fr=new FileReader ();
              
              fr. onload=()=>{
                
                r(fr. result)
                
              }
              
              fr.onerror=j
              fr.readAsArrayBuffer(file)
            
          })
        }
      })
    }
    
    
    
    function hawveeShtareem(op={}){
      var n=op. files
      var kl=op.koylLoad||op. loadAudio
      var koylifyAfter=op.koylifyAfter||op.koylStory || op.koyl
        || op. processAudio||op. analyzeAudio
      if(!n) {
        if(!inp) {
          inp =document.createElement ("input")
          inp. type="file"
          inp. multiple=true
          
        }
        return new Promise((r,k)=>{
          
          inp.onchange=()=>{
            var ar=Array. from(inp. files). map(h=>new Shtar({
              file: h
              
            }))
            oyd(ar,r)
          }
          
          inp.onerror=k
          
          inp.click()
        })
      } else {
        console. log("trying", op,n)
        return new Promise((r,j)=>{
            var ar=Array. from(n)
            
            . map(h=>new Shtar({
                file: h. file, 
                orech: h. path
            }))
            oyd(ar,r)
          });
      }
      
      
      function oyd(ar,r){
        if(kl) {
          ar. forEach(h=>{
            var mkz=[]
            var kl=new editor. KoylMakor({
              shtar: h
            })
            mkz. push(kl)
            editor. taynliKoopuh(kl.shtar)
            editor. all(
              mkz,
              c=>c.masoyShtar(c.shtar),
              e=>console. log("error:  ",e)
            ). then(()=>{
              if(koylifyAfter) {
                editor. all(
                  editor. koopuh. list, 
                  c=>c.koylStory(),
                  e=>console. log("sorry wrote, ",e)
                ). then(f=>d)
              } else d()
              
              function d() {
                r(editor. koopuh. list)
              }
              
            });
          })
        } else r(ar)
      }
        
      
    }
    
    this.  all=all
    function all(ar,fnc, prog) {
          return new Promise((r,j)=>{
            var c=0
            function p(er) {
              
              if(c >= ar. length) {
                if(er) j(er)
                else
                r()
              } else {
                var cr=ar[c]
              
                  fnc(cr). then(r=>{
                    c++
                    
                    p()
                  }). catch(e=>{
                    p(e)
                  })
                
                if(typeof(prog)=="function"){
                  prog(c)
                }
                
              }
            }
            p()
          })
          
        }
    function KoylMakor(op={}) {
          var self=this
          var _ct = 0;
					var isPlaying = false;
					var timePaused = 0;

					var timeStarted = 0;
					var offset = 0;

					var src;
          var ready=false
          var dayuhKoyl
          var sampleRate
					var crnT = () => te.koylEenyan.currentTime
					var isAudio=false
					var shtar=op.shtar
					
					var gawlDaws=null; //wav data
					var gawleem=null
					Object.defineProperties(this, {
					  gawleem: {
					    get:()=>{
					      return gawleem
					    }, set(v){
					      gawleem/*adjusted*/=v;
					    }
					  },
					  gawlDaws: {
					    get:()=>{
					      return gawlDaws
					    }, set(v){
					      gawlDaws=v;
					    }
					  },
					  dawsify:{
					    get: ()=>(ob={})=>new Promise((r,j)=>{
					      editor.tzavEved("dawsify",{
					       amount:ob. amount,
					       dayuh:gawleem
					        
					      }). then(bar=>{
					        r(bar)
					      })
					      //lrubin@telernet.com
					    })
					      
					    
					  },
					  koylStory: {
					    get: ()=> (fs=zmanKawtsawr)=>new Promise((r,j)=>{
					      
					      if(gawlDaws) {
  					      editor. tzavEved("lipt", {
  					        dayuh:gawlDaws,
  					        sampleRate,
  					        fractionsOfSecond:typeof(fs)=="number"?fs:zmanKawtsawr
  					        
  					      }). then(ob=>{
  					        self. gawleem=ob
  					        console.log(ob,"hi h")
  					        r(ob)
  					      }). catch(j)
					      } else j("no dawss!")
					    })
					      
					    
					  },
					  masoyShtar:{
					    get: ()=>(s=shtar)=>new Promise ((r,j)=>
					      s.arrayBuffer().then(a=>{

					        self. masooyDaws(a). then(k=>{
  					        s.meen="koyl"
  					        s.koylMakor=self
  					        self. shtar=s;
  					        r(k)
  					      }). catch(j)
					      })
					      . catch(n=>j(n))
					    )
					  },
					  masooyDaws: {
					    
					    get: ()=> arrayBuf => new Promise((r,j)=>{
					      var cawp = arrayBuf.slice(0,arrayBuf.length);
        				
        				
        				te.koylEenyan.decodeAudioData(cawp)
        				. then(k=>{
        				  cawp=null
          				dayuhKoyl = k;
          				gawlDaws=dayuhKoyl. getChannelData(0)
          				gawlDaws=gawlDaws. slice(0,gawlDaws. length)
          		    sampleRate=dayuhKoyl.sampleRate
          				ready=true
          				
          				r(dayuhKoyl)
        				}). catch(e=>{
        				  isAudio = false;
        					cawp=null
        					console. log(e)
        					return j("no go");
        				})
        				
        				
                
					    })
					  },
					  dayuhKoyl:{
					    get: ()=>dayuhKoyl
					  },
					  loadData:{
					    get:()=>this. masooyDaws
					  },
					  ready: {
					    get: ()=>ready
					  },
					  shtar: {
					    get: ()=>shtar,
					    set:v=>{
					      shtar=v
					    }
					  },
					  currentTime: {
					    get:() =>self. curTime,
					    set:v=>{
					      curTime=v
					      if(! self. paused) {
					        self. playFrom(v)
					      } else {
					        timePaused=v
					      }
					    }
					  },// use to change time
						curTime: {
							get: () => {
								if(self.isp) {
									_ct = ((
										crnT()
										- (timeStarted))+offset)
								} else {
								
									_ct = self.tp
								}
								
								
								return _ct
							},
							set: v  => {
								_ct = v;
								
							}
						},
						src: {
							get: () => src,
							set: v  => {
								src = v	
							}
						},
						tp: {
							get: () => timePaused,
							set: v  => {
								timePaused=v
							}
						},
						isp: {
							get: () => isPlaying,
							set: v  => {
								isPlaying=v
							}
						},
						timePaused:{
						  get:()=>self.tp
						},
						paused: {
						  get:()=>!isPlaying
						},
						isPlaying:{
						  get:()=>self. isp
						},
						resume: {
						  get: ()=>()=>self.playFrom(self. curTime)
						},
						play:{
						  get:()=>self. resume
						},
						playFrom: {
						  get:()=>(startT,isor=true) => 
    						new Promise((r,j) => {
                  if(! ready) j("not ready")
                  if(startT>self. duration)
                    startT=0
                    
    							if(self.src) {
    							  
    								self.src.onended = () => {
    
    									self.src = null;
    									startIt(startT)
    									r(self.curTime,isor)
    								};
    								try {
    									self.src.stop()	
    								}
    								catch(e){
    									j("WOw dude like what just hapIned?!"+e)	
    								}
    							} else {
    								startIt(startT,isor)
    								r(self.curTime)
    							}
    
    						})
						},
						pause:{
						  get:   () => 
    						()=> new Promise((r,j) => {
    							if(!self.src) j("wow dude like what r u thinking");
    							self.src.onended = () => {
    
    								self.tp = ((
    									crnT()
    									- (timeStarted))+offset)
    								
    								self.isp = false;
    								
    								
    								self.src = null
    								r(self.curTime)
    							};
    							src.stop();
    						})
					
						},
						duration: {
						  get: ()=> {
        				if(dayuhKoyl) {
        					return dayuhKoyl.duration	
        				} else return 0;
        			}
						},
						dayuhKoyl:{
						  get:()=>dayuhKoyl
						},
						sampleRate: {
						  get: ()=>sampleRate
						}
					})
					
					function startIt(startT,isOrig=true) {
					  if(!dayuhKoyl)
					    return 
						src = te.koylEenyan.createBufferSource()
						src.buffer=dayuhKoyl
						src.connect(te.koylEenyan.destination)
						src.start(0,startT||undefined)
						isPlaying = true
						if(isOrig) offset = startT;
						timeStarted = crnT()
						timePaused = timeStarted
						self.curTime = startT
						return true
					}
    }

}