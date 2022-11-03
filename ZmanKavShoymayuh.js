//B"H
function ZmanKavShoymayuh(ops={}){
      var z=this
      var self=this
      var tme=0
      peuluh. call(this)
      
      var myId=ops.myId||ops.id|| "BH_"+Date.now()
      var plb=document. createElement("div") // background for playing
      plb.className=myId+"holder"
      
      var isNoygayuh=false; // is touching progress bar or not
      var toyreemNoysawfeem={
        hoyvehToyr:ops.hoyvehToyr||"",
        koylMawkom:ops.koylMawkom||""
      }
      
      
      plb.onclick=e=>{
        var x=plb.clientWidth-e.offsetX
        var dx=(x/ plb.clientWidth)//-plb. offsetLeft
        console. log(tr=plb,e,plb. clientWidth,x,dx, totalTime, dx/ totalTime)
        var tt=Math. floor(
          dx*totalTime*10
        )/10
        this. poyl("update", tt)
      }
      
      var cr=document. createElement("div")
      plb. appendChild(cr)
      plb.etsem=true
      cr. className=myId+"currentTimePointer"
      
      function hoyseefed() {
        if(window. Peuluh) {
      
      /*
          Peuluh. drag({
            html: plb,
            kawshaw(j) {
              console. log(j) 
            }, 
            soyf(r){
              isNoygayuh=false
            },
            rosh(r) {
              
              console.  log(r,6666)
              isNoygayuh=true
              r. me. started=r. awts. offsetX
            },
            toych(r)  {
              console. log(r.awts.offsetX,r. me. started)
              if(r. me. started) {
                cr. style. left=(
                  r. awts. offsetX -9
                //  r. me. started
                )+"px"
              }
            }
          })
          
          */
          Peuluh.hoyseefToyr(plb. className, `
            display: block; 
            position: relative;
          `+toyreemNoysawfeem.koylMawkom/*audio timeline container*/)
          Peuluh.hoyseefToyr(cr. className,`
            position: absolute; 
            display: inline-block; 
            user-select: none; 
            z-index:7;
            height: 100%;
          `+toyreemNoysawfeem.hoyvehToyr)
        }
      }
      var totalTime=0
      var width;
      
      Object. defineProperties (this ,{
        appendTo:{
          get:()=>p=>{
            p. appendChild(plb)
            width=plb.clientWidth
            hoyseefed()
            self.poyl("updatePointer", koyl?koyl. currentTime: 0)
          }
        },
        className:{
          get:()=>cr. className
        },
        holder:{
          get:()=>plb
        },
        totalTime:{
          get:()=>totalTime,
          set:(v)=>totalTime=v
        },
        time:{
          get:()=>tme,
          set:(v)=>{
            z.poyl("update", v)
          }
        }
      })
      
      this.  on("updatePointer",  time=>{
        tme=time
        
        if(!isNoygayuh) {
          cr. style.  left=(
            (-time/ totalTime)*plb.clientWidth
            +plb. clientWidth
            //-plb. offsetLeft
          )+"px"
        }

      })
      
      
      this.on("shoymayuhKoyl",koyl=>{
        totalTime=koyl.duration
        console. log(mm=koyl)
        function heesHawvoos() {
        
          if(koyl.curTime>koyl. duration) {
            koyl. pause()
            koyl. currentTime=koyl. duration
            
          }
          
          z.poyl("updatePointer",koyl.curTime)
          if(koyl.gawleem) {
            z.poyl("volume", koyl.gawleem[Math. floor(
              koyl. curTime/zmanKawtsawr//10th of second
            )]) 
          }
          if(koyl.gawleemB) {
            z.poyl("volume", koyl.getDoydee(
              Math. floor(
                koyl. curTime/zmanKawtsawr
              )
            ))
          }
          
          
        }
        
        z.on("update", t=>{
          z. poyl("updated")
          koyl.currentTime=t
        })
        self.on("heesHawvoos",heesHawvoos)
      })
      
    }