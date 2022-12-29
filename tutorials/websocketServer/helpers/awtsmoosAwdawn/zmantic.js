//B"H
var emes = require("./emes.js")
var http = require("http")

var Awts = new emes.AwtsmoosAwdawn();

var awdawneem = [];
var serv = http.createServer((r,j) => {
    j.end("B\"H!")
}).listen(8081, start => {
    
    serv.on(
        "upgrade", 
        Awts.shoymayuh( (sock,req) => {
            var exists = awdawneem.indexOf(sock)
            if(exists < 0) {
                awdawneem.push(sock);
                
            } 
            var id = randomID()

            Awts.koysayv(sock,JSON.stringify({
                you: id
            }))
            sock.id = id;

            
            
        },(data, sock) => {
            
            var ob = Awts.j(data);
            
            var k;
            for(k in ob) {
                var c = callbacks[k];
                if(typeof(c) == "function") {
                    c(data,sock)
                }
                
            }
            
            
        }, (sock) => {
            if(awdawneem.includes(sock)) {
                awdawneem.splice(awdawneem.indexOf(sock),1)
            }
        })
    )


    
})

var callbacks = {
    broadcast: (data, sock) => {
        
        awdawneem.forEach(w=> {
            
            try {
                Awts.koysayv(w,data);
            } catch(e){
                console.log(e)
            }
            
        })
    }
}

function randomID() {
    return "BH_" + 
    Date.now() + "_" + 
    (
        Math.floor(
            Math.random() * 
            77007700
        ) + 770
    ) + "_" + awdawneem.length
}
