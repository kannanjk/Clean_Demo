import { connect, StringCodec } from 'nats'

export const listeners = async () => {
    const nc = await connect({
        servers: [
            "Jishnu:4222"
        ]
    })
    console.log("Connected to subscribe");
    const sub = nc.subscribe('notif')
    const sc = StringCodec()
    for await (const m of sub) {
        console.log(`[${sub.getProcessed()}]:Recived msg ${sc.decode(m.data)}`);
    }
    console.log("subscribe colsed");
}