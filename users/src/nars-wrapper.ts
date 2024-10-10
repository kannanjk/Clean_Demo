import { connect, StringCodec, NatsConnection, Subscription } from 'nats';

class NatsListener {
    private nc: NatsConnection | undefined;
    private sub: Subscription | undefined;
    private sc = StringCodec();

    constructor(private server: string, private topic: string) { }

    // Method to connect to the NATS server
    public async connect() {
        this.nc = await connect({ servers: [this.server] });
        console.log("Connected to NATS server");
    }

    public async startListening() {
        if (!this.nc) {
            throw new Error("Not connected to NATS server. Call connect() first.");
        }

        this.sub = this.nc.subscribe(this.topic);
        console.log(`Subscribed to topic: ${this.topic}`);

        for await (const m of this.sub) {
            console.log(`[${this.sub.getProcessed()}]: Received msg ${this.sc.decode(m.data)}`);
        }

        console.log("Subscription closed");
    }

    // Method to close the connection
    public async closeConnection() {
        if (this.nc) {
            await this.nc.close();
            console.log("Connection closed");
        }
    }
}

export  const natsListener = new NatsListener("Jishnu:4222", "notif");