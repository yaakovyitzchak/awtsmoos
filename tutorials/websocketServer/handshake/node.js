//B"H
var http = require("http")
var crypto = require("crypto")

var server  = http.createServer(function(
    request,
    response
) {
    response.end("Boruch Hashem!")
}).listen(8081, () => {
    server.on("upgrade", (request, socket) => {
        var ki = request.headers[
            "sec-websocket-key"
        ]
        if(!ki) {
            return;
        }


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

        var encoded = encodeDayuh("Shalom!")
        if(encoded)
            socket.write(encoded)

    })
})
