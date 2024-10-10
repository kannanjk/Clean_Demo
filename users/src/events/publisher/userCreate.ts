import { connect, StringCodec } from "nats";

export const Publisher = async () => {
    const nc = await connect({
        servers: [ 
            "Jishnu:4222"
        ]
    })
    console.log("Connected nats on publisher");
    const sc = StringCodec()
    nc.publish("notif", sc.encode("hii Kanna"))
    await nc.drain()
} 