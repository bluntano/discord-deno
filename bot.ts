import { Coward, Message } from "https://deno.land/x/coward/mod.ts"
import { discordToken } from "./token.ts"

if (discordToken === "token") {
    console.log("Change the token in config.ts file.")
} else {
    let client = new Coward(discordToken)
    let prefix = "!"

    client.on("ready", () => {
        console.log("bot is ready!")
    })

    client.on("messageCreate", async (message: Message) => {
        if (message.content === `${prefix}ping`) {
            // tried to make this latency time thingy as well, may not be completely accurate
            client.postMessage(message.channel.id, `Ping pong! \`${Number(new Date()) - Number(new Date(message.timestamp))} ms\``)
        }
    })

    client.connect()
}
