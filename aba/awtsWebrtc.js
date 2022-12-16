//B"H

function KoyrayAwtsmoos() {
    var rtc = null;
    Peulos.call(this)

    this.on("addStream", str => {
        if(
            rtc == null
        ) return;
        
        if(str&&str.getTracks) {
            str.getTracks()
            .forEach(q=> {
                rtc.addTrack(
                    q,
                    str
                )
            })
        }

    })

    this.on("makeAnswer", (cb) => {
        if(
            rtc == null
        ) return;

        rtc.createAnswer()
        .then(ans => {
            rtc.setLocalDescription(ans)
            .then(() => {
                this.poyl(
                    "madeAnswer",
                    ans
                )
                if(typeof(cb)
                == "function") {
                    cb(ans)
                }
            })
        })
    });

    this.on("acceptAnswer", ansSDP => {
        rtc.setRemoteDescription(ansSDP)
        .then(() => {
            console.log("SET",ansSDP)
        }).catch(e=>console.log("ER",e))
    })

    this.on("acceptInvite", (sdp,cb) => {
        if(
            rtc == null
        ) return;
        
        var toychin = 
        new RTCSessionDescription(
            sdp
        );

        rtc.setRemoteDescription(
            toychin
        ).then(() => {
            this.poyl(
                "setToychin",
                toychin
            )
            if(typeof(cb)
            == "function") {
                cb(toychin)
            }
        })
    })

    this.on("makeOffer", () => {
        rtc
        .createOffer()
        .then(of => {
            rtc
            .setLocalDescription(
                of
            ).then(() => {
                this.poyl(
                    "gotDescription",
                    rtc.localDescription   
                )
            })
        })
    })

    this.on("start", () => {
        rtc = new 
        RTCPeerConnection({
            iceServers: [
                {
                    urls: 
                    "stun:stun.stunprotocol.org"
                }
            ]
        });

        rtc.addEventListener(
            "icecandidate",
            e => {
                //handled(e)
                
                this.poyl(
                    "gotIce",
                    e.candidate
                )
            }
        )

        rtc.addEventListener(
            "track",
            e => {
                console.log("Got track",e)
                this.poyl(
                    "track",
                    e
                )
            }
        )

        rtc.addEventListener(
            "negotiationneeded",
            e => {
                
            }
        )
    })

    this.on("addIce", sdp => {
        if(rtc === null) {
            return console.log("Nawl?");
        }

        if(
            sdp === null
        ) return console.log("LOL");
 
        /*
        if(typeof(sdp) 
            != "string")
            return console.log("NO");
        */

        console.log("Adding ice",sdp)

        var ic = 
        new RTCIceCandidate(sdp)

        rtc
        .addIceCandidate(ic);

        console.log("ADDED",ic)
    })
    
    Object.defineProperties(this,{
        
        start:{
            get:()=>()=>{
                this.poyl("start")
            }
        },
        addStream: {
            get: () => ic => {
                this.poyl("addStream",ic)
            }
        },
        addIce: {
            get: () => ic => {
                this.poyl("addIce",ic)
            }
        }
    });

    function handled(e) {
        console.log("Handle",e)
    }

}

function Peulos() {
    var evs = {}
    Object.defineProperties(this, {
        on: {
            get: () => (nm,fnc) => {
                if(
                    typeof(nm) != 
                    "string"
                ) return;

                if(typeof(
                    fnc
                ) != "function") {
                    return;
                }

                if(!evs[nm]) {
                    evs[nm] = []
                }

                evs[nm].push(fnc)

            }
        },
        poyl: {
            get: () => (nm,dt) => {
                if(
                    typeof(nm) != 
                    "string"
                ) return;

                if(evs[nm]) {
                    evs[nm]
                    .forEach(q=> {
                        q(dt)
                    })
                }
            }
        }
    })
}
