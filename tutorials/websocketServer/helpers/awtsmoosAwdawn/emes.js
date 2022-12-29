//B"H
var crypto = require("crypto");
exports.AwtsmoosAwdawn = function() {
    var curSock;
    Object.defineProperties(this, {
        shoymayuh: {
            get: () => (start,cb,closed) =>{
                return ((req,sock) => {
                    
                    if(req && sock)
                        handleRosh(req, sock)
                    
                    if(typeof(cb) == "function") {
                        cb("",sock,req)
                        sock.on("data", data => {
                            
                            
                            var daws = null;
                            try {
                                daws = prf(data)
                            } catch(e){
                                console.log(e)
                            }
                            
                            if(!daws) {
                                
                                if(typeof(closed) == "function") {
                                    closed(sock,data)
                                } 
                                return
                            }
                            cb(daws, sock, req)
                        })
                    }
                    if(typeof(start) == "function") {
                        start(sock,req)
                    }
                    sock.on("close", (...args)=>{
                        console.log("HI!",args)
                        
                    })
                    
                })
            }
            
        },

        koysayv: {
            get: () => (sock, str) =>{
            //    console.log("GOT",str)
                var daws;
                try {
                    daws = sn(str)
                } catch(e) {
                    console.log(e)
                }
                
                if(!daws) {
                    return console.log("issue")
                }
          //      console.log(rba(daws),"WRITING")
                sock.write(daws)
            }
        },
        j: {
            get: () => str => {
                
                try {
                    return JSON.parse(str)
                } catch(e) {
                    return {}
                }
            }
        },
        s: {
            get: () => js => {
                
                try {
                    return JSON.stringify(js)
                } catch(e){
                    return ""
                }
            }
        }

    })
}


function handleRosh(req,sock) {
    if(
        req.headers["upgrade"]
        !== "websocket"
    ) sock.end(
        "HTTP/1.1 400 LOL why"
    )

    var ki = req.headers[
        "sec-websocket-key"
    ]

    if(!ki) return;
    var hash = hasher(ki);
    var roysheem = [
        "HTTP/1.1 101 awtsmoosification",
        "Upgrade: WebSocket",
        "Connection: Upgrade",
        "Sec-WebSocket-Accept: "+
        hash
    ]

    var pro = req.headers[
        "sec-websocket-protocol"
    ] || ""
    
    var allProtos = (
        pro.split(",")
        .map(w=>w.trim())
    )
    if(allProtos.includes(
        "json"
    )) {
        roysheem.push(
            "Sec-Websocket-Protocol: json"
        )
    }

    var roysheemChoot = (
        roysheem.join("\r\n")
        +"\r\n\r\n"
    )

    sock.write(
        roysheemChoot
    )
}



function sn(str) {
    var lengthOfPayload = Buffer.byteLength(str);

    var lengthOfPayloadLength = (
        lengthOfPayload < 126 ? 
            lengthOfPayload
        :
        lengthOfPayload < Math.pow(2, 16/*2 bytes*/) ? 
            126 : 127
    );

   // var isPayloadLengthSeparate = lengthOfPayload > 125;
    var encodedMessage = Buffer.alloc(
        2 + /*first two
            bytes contain the header data:
            first byte:
                first bit of first byte:
                    FIN, if finished
                next 3 bits: reserved.

                Next 4 bits: number representing opcode

            second byte:
                first bit of second byte:
                    isMask
                next 7 bits: lengthOfPayloadLength.
                    if < 126, then the
                        next 4 bytes are the mask,
                        only IF the isMask is true
                    if == 126, then 
                        the next 2 bytes contain 
                        the length of the payload,
                        followed by 4 bytes of the mask
                        [IF isMask is one, if not, absent],
                        following by the payloa data 
                    if == 127, then
                        the next 8 bytes contain the length
                        of the payload, follow by 4 bytes
                        of the mask, then the payload bytes
        */
       +lengthOfPayload
       + (
            lengthOfPayloadLength < 126 ? 0
            : lengthOfPayloadLength == 126 ? 
            2 : lengthOfPayloadLength == 127 ? 8
            :8
        )
    )

    encodedMessage.writeUint8(
        0b10000001/*
            FIN, first bit, set to one,
            because only one message.
            Opcode set to 0001, which
            is the "text" type
        */,
        0
    )

  //  console.log("writing length",lengthOfPayloadLength)
    encodedMessage.writeUInt8(
        lengthOfPayloadLength,
        1
    )

    var offset = 2;
    if(lengthOfPayloadLength  > 125) {
        
        if(lengthOfPayloadLength == 126) {
            encodedMessage.writeUint16BE(
                lengthOfPayload,
                offset
            )
            offset += 2;
        } else if(lengthOfPayloadLength == 127){
            encodedMessage.writeBigUint64BE(
                lengthOfPayload,
                2
            )
            offset += 8;
            
        }
    }

    /*
    console.log(str+"",str,str.split,2222)
    str.split("").forEach((b,i) => {
      //  console.log("writing",b,"at",offset+i)
        encodedMessage.writeUInt8(
            b.charCodeAt(0),
            offset + i 
        )
    })
*/
    encodedMessage.write(str.toString(), offset)
 

    return encodedMessage


}



function prf/*processFrame*/
(buf/*aka frame*/){
    /*
     *structure of first byte:
         1: if its the last frame in buffer
         2 - 4: reserved bits
         5 - 8: a number which shows what type of message it is. Chart:

             "0": means we continue
             "1": means this frame contains text
             "2": means this is binary
             "0011"(3) - "0111" (11): reserved values
             "1000"(8): means connection closed
             "1001"(9): ping (checking for response)
             "1010"(10): pong (response verified)
             "1010"(11) - "1111"(15): reserved for "control" frames
     structure of second byte:
        1: is it "masked"
        2 - 8: length of payload, if less than 126.
            if 126, 2 additional bytes are added
            if 127 (or more), 6 additional bytes added (total 8)

     * */
    
    var finished = true
    var isContinuation = false
    

    var FIN = sb(buf[0],0,1)
    /*
        first byte
    */
    if(FIN == 0) {
        finished
        
    }
    var reserved = sb(
        buf[0], 
        1,4
    )

    var opcode = sb(
        buf[0],
        4, 8
    )

    if(opcode == 0 && FIN == 0) {
        isContinuation = true;

    }
    if(
        opcode == 1
    )  {
        type = "text"
    } 

    if(opcode == 2) {
        type = "binary"
    }

    if(opcode == 8) {
        /*
            means closed
            check if closed connection ("1000"(8))

        */
       
       type = "closed"
       console.log("CLOSED")
       return null;
    }

    
    var isMask = sb(
        buf[1],/*
            2nd byte
        */
        0,
        1
    )

    if(isMask) {
        isMasked = true
    }

    var payloadLength = sb(
        buf[1],
        1,
        8
    )

    

    var maskingKey;
    var payloadData;

    var endOfData;
    
    if(payloadLength < 126) {
        /*
            if less than 126, then that is
            the length
        */
        maskingKey = buf.slice(2,6)
        

        payloadData = buf.slice(
            6,
            6+payloadLength
        )
        endOfData = 6 + payloadLength
    } else if(payloadLength == 126) {
        /*
            if exactly 126, then 
            length is next 2 bytes
        */
        payloadLength = Buffer.from(
            buf.slice(2,4)
        ).readUInt16BE()

        maskingKey = buf.slice(
            4,8
        )
        payloadData = buf.slice(
            8,
            8 + payloadLength
        )
        endOfData = 8 + payloadLength
    } else if(payloadLength == 127) {
        /*
            if exactly 127, then length is
             next 8 bytes
        */
        payloadLength = Buffer.from(buf.slice(
            2,10
        ))
        maskingKey = buf.slice(
            10,14
        )

        var hex = Buffer.from(
            payloadLength,
            "hex"
        )
        var awnt = parseInt(
            hex.toString("hex"),
            16
        )
        var bigL =payloadLength.readBigUint64BE()
        var restOfBuf = buf.slice(14);
        
        payloadData = restOfBuf;
        
        
        endOfData = BigInt(restOfBuf.length + 14)
    }

    /*
    for unmasking
        byte i of new,
        transformed data
        is equal to 
        (
            original data at 
            byte i XOR 
            masking key at 
            index i MOD 4
        )
    */

    var transformedData = Buffer
            .alloc(payloadData.length)
    var i;
    for(
        i = 0;
        i < payloadData.length;
        i ++ 
    ) {
        transformedData[i] =
        (
            payloadData/*
                original data
            */[i] ^/*XOR*/
            maskingKey[
                i % 4
            ]
        )
    }


    return transformedData
}

function sb/*split byte*/
(nm,start,end) {
    /*
        starts from RIGHT
        and ends at LEFT,
        non inclusive
    */
    /*
        255 = 
        1111 1111

        8 = 
        100
    */
    return ( 
        (((0b11111111 >> start) &
          (
             0b11111111 << 
            (0b00001000-end)
        )) 
       & nm) >> (8-end)
    )
}


function hasher(key) {
    var hash= crypto
    .createHash("sha1")
    .update(
        key + 
        "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
    )

    var digested = hash.digest()
    
    var rez = digested.toString("base64")
    
    return rez
}
