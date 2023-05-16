const {EventEmitter} =require("events")

const fs=require("fs").promises
const events= new EventEmitter()

    const login = async function(data)
    {
        const users=JSON.parse(await fs.readFile("./users.json"))
        const user = user.find((u)=> u.username===data.username && u.password===data.password )

        if(!user){
            return console.log("Bunday foydalanuvchi mavjud emas");
        }
        console.log("succsesful");
    }

    events.on("login", )
    events.emit("login", {username: "username", password: "password"})
