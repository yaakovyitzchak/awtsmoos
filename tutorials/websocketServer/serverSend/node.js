//B"H
var http = require("http")
var crypto = require("crypto")

var awdawneem = [

];

var server  = http.createServer(function(
    request,
    response
) {
    awdawneem.forEach(a => {
        koysayv("Happy hey teves! " + Date.now(), a)
    })
    response.end("Boruch Hashem!")
}).listen(8081, () => {
    server.on("upgrade", (request, socket) => {
        var ki = request.headers[
            "sec-websocket-key"
        ]

        if(!ki) {
            return;
        }

        awdawneem.push(socket);

        var added = ki + 
            "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
        
        var base64string = crypto
        .createHash("sha1")
        .update(
            added
        ).digest("base64")

        var responseHeaders = [
            "HTTP/1.1 101 Awtsmoos",
            "upgrade: websocket",
            "connection: upgrade",
            "sec-websocket-accept: "
                + base64string
        ]

        socket.write(
            responseHeaders.join(
                "\r\n"
            ) + "\r\n\r\n"
        )

        
        koysayv("Shalom", socket)
    })
})

function koysayv(str,socket) {
    var encoded = encodeDayuh(str)
    if(encoded) {
        try {
            socket.write(encoded)
        } catch(e) {
            console.log("something",e)
        }
    }
    else {
        console.log("Nothing")
    }
}


function encodeDayuh(mightBeBuffer) {
    if(!mightBeBuffer) return;

    var str = mightBeBuffer.toString();

    var lengthOfPayload = Buffer.byteLength(str)
    var howManyBytesToAdd;
    if(lengthOfPayload < 126) {
        howManyBytesToAdd = 0
    } else if(lengthOfPayload < Math.pow(2,16)) {
        howManyBytesToAdd = 2
    } else if(lengthOfPayload < Math.pow(2,64)) {
        howManyBytesToAdd = 8
    } else return console.log("TOO BIG");

    var bufferToSend = Buffer.alloc(
        2 
        + howManyBytesToAdd
        + lengthOfPayload
    );

    var offset = 0;
    bufferToSend.writeUInt8(
        0b10000001,
        offset
    )

    offset = 1;
    if(lengthOfPayload < 126) {
        bufferToSend.writeUInt8(
            lengthOfPayload,
            offset
        )
        offset = 2
    } else if(lengthOfPayload < Math.pow(2, 16)) {
        bufferToSend.writeUInt8(
            0b01111110/*126*/,
            offset
        )
        offset = 2;
        bufferToSend.writeUInt16BE(
            lengthOfPayload,
            offset
        )

        
        offset = 4;
    } else if(lengthOfPayload < Math.pow(2, 64)) {
        bufferToSend.writeUInt8(
            0b01111111,
            offset
        )

        offset = 2;
        bufferToSend.writeBigUInt64BE(
            lengthOfPayload,
            offset
        )
        offset = 10
    }

    bufferToSend.write(
        str,
        offset
    )
    

    return bufferToSend;

}
