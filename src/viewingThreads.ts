import { agent } from './agent.js'
import 'dotenv/config'

const res = await agent.getPostThread({uri: `at://${process.env.DID}/app.bsky.feed.post/3ktcvpsxf3c2d`})

const { thread } = res.data

console.log('%o', thread)
