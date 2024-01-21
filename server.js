const io = require("socket.io")(3001,{
    cors: {
        origin: "http://localhost:3000",
        methods:["GET", "POST"]
    }
})

io.on("connection", (socket)=>{
    console.log("a user connected");
    socket.on("toServer", (message)=>{
        console.log(message);
        io.emit("toClient", message+" : received")
    })
    socket.on("toServerDisconnect", ()=>{
        console.log("disconnected")
    })
    socket.on("toServerJoinRoom", ()=>{
        console.log("a user joinedRoom")
    })
})

console.log("hello");