//BH
var Peuluh=peuluh;
var ls=koysayv=loadScript
Peuluh.hoyseefToyr/*add style*/=(className,txt)=>{
  var tags=document. documentElement. getElementsByTagName ("style")
  var at=Array. from(tags)
  if(!at)  {
    at=[document.createElement ("style")]
    document. body. appendChild (at[0])
  }
  var has=at. find(k=>k. innerHTML. includes(".className"))
  if(!has) {
    at[0]. innerHTML+="."+className+"{\n\t"+txt+"\n}"
    return true
  } 
  return false
}
Peuluh.drag=function(op={}){
  var self=this
  var rayk=(j)=>{
    
  // console.  log("takes",j )
  }
  var st=op. rosh||op. start||rayk
  var tc=op.toych||op. middle ||op. during||
    op. drag||op. dragging||rayk
  var sf=op. soyf||op. end||op. finished||rayk
  var  el=op.el||op. element|| op.yesod||op.html
  var er=op.rer||op.error|| op. kawshyaw||rayk;
  function rosh(r) {
    r. me=self
    if(r. touches) 
      r.awts// mobile
        =r. touches; 
      else r. awts=r
    st(r)
  }
  
  function toych(g) {
    
    g. me=self
    if(g. touches) 
      g.awts// mobile
        =g. touches[0]; 
    else g. awts=g
    tc(g)
  }
  function soyf(k) {
    k. me=self
    if(k. touches) 
      k.awts// mobile
        =k. touches; 
      else k. awts=k
    sf(k)
  }
  if(
    el
    /*el. 
    constructor. 
    name. 
    toLowerCase (). includes("html")*/
  
  ) {
    mouseDownEvents()
  } else er("no html found yet")
  
  function mouseDownEvents() {
    el. addEventListener("mousemove",e=>{
      var btn=(e. button||e. buttons)
      if(!el.moved) {
        
        el. moved=e;
        if(btn)
          rosh(e)
      } else if(btn){
        toych(e)
      } else up(e)
    })
  }
  
  function up(e) {
    if(e&&e. target)
      e. target. moved=null
    soyf(e)
  }
  el. addEventListener ("mouseup",up)
  el. addEventListener("mouseleave", up)
  function events() {
    el. addEventListener("dragstart",rosh)
    el. addEventListener("dragend",soyf)
    el. addEventListener("drag",toych)
    
    el. addEventListener("touchstart",rosh)
    el. addEventListener("touchend",soyf)
    el. addEventListener("touchmove",toych)
  }
}
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