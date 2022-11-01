//BH
var Peuluh=peuluh;
var ls=koysayv=loadScript

function loadScript(src) {
  return new Promise((r,j)=>{
    var ind=0
    var cur;
    var ar;
    if(typeof(src) == "string") {
      ar=[src]
    } else if(src&&typeof(src)=="object") {
      ar=Array. from(src)
    }
    function get() {
      cur=ar[ind]
      if(!cur) {
        return r()
      } 
      var sc=document.createElement ("script")
      sc.src=cur
      sc.onload=()=>{
        nxt()
      }
      sc.onerror=(e)=>{
        j(e)
        nxt()
      }
      function nxt() {
        ind++;
        get()
      }
      document. body. appendChild(sc)
    }
    get()
  })
}
function peuluh(){
      var evz={}
      Object. defineProperties (this, {
        on:{
          get:()=>(name, fun)=>{
            var g=evz[name]
            if(!g) evz[name]=[]
            evz[name]. push(fun)
          }
        },
        poyl:{
          get:()=>(name, data)=>{
            if(evz[name]) {
              evz[name]. forEach(o=>{
                o(data)
              })
            }
          }
        }
      })
    }