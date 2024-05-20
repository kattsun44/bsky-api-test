import { BskyAgent } from '@atproto/api'
import 'dotenv/config'

const agent = new BskyAgent({
  service: 'https://bsky.social'
})

console.log('Login with', process.env.ID)

async function login(): Promise<void> {
  await agent.login({
    identifier: process.env.ID || "",
    password: process.env.PASSWORD || ""
  })
}

login()

module.exports = { agent }
