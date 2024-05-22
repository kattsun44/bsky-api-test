import { RichText } from '@atproto/api'
import { agent } from './login.js'

const rt = new RichText({
  text: 'This is RichText Test by @kattsun.dev. My Github URL is https://github.com/kattsun44.'
})
await rt.detectFacets(agent)

console.log('rt.text: ', rt.text)
console.log('rt.facets:')
console.log('%o', rt.facets)

// await agent.post({
//   text: rt.text,
//   facets: rt.facets,
//   createdAt: new Date().toISOString()
// })

