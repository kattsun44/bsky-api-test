import { BskyAgent } from '@atproto/api'
import * as dotenv from 'dotenv'
dotenv.config()

const agent = new BskyAgent({
  service: 'https://bsky.social'
})

console.log(process.env.ID)

await agent.login({
  identifier: process.env.ID,
  password: process.env.PASSWORD
})
