//B"H
function ZmanKavShoymayuh(ops={}){
      var z=this
      var tme=0
      peuluh. call(this)
      var myId=ops.myId||ops.id|| "BH_"+Date.now()
      var plb=document. createElement("div") // background for playing
      plb.className=myId+"holder"
      
      plb.onclick=e=>{
        var x=e. clientX
        var dx=x/ plb.clientWidth
        
        this. poyl("update", dx*totalTime)
      }
      
      var cr=document. createElement("div")
      plb. appendChild(cr)
      cr. className=myId+"currentTimePointer"
      var totalTime=0
      var width;
      Object. defineProperties (this ,{
        appendTo:{
          get:()=>p=>{
            p. appendChild(plb)
            width=plb.clientWidth
          }
        },
        className:{
          get:()=>cr. className
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
        
        cr. style.  left=(
          (time/ totalTime)*plb.clientWidth
        )+"px"
        

      })
      
      this.on("shoymayuhKoyl",koyl=>{
        totalTime=koyl.duration
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
         editor. poyl("updated")
          koyl.currentTime=t
        })
        editor.on("heesHawvoos",heesHawvoos)
      })
      
    }