import { RichText } from '@atproto/api'
import { agent } from './agent.js'

import { AppBskyRichtextFacet } from '@atproto/api'

type Facet = AppBskyRichtextFacet.Main

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

const rt2 = new RichText({
  text: 'Hello, World! This is RichText Test by @kattsun.dev.',
  facets: [{
    $type: 'app.bsky.richtext.facet',
    index: {
      byteStart: 0,
      byteEnd: 5,
    },
    features: [
      {
        $type: 'app.bsky.richtext.facet#link',
        uri: 'https://github.com/kattsun44'
      }
    ]
  }]
})

console.log('rt2.text: ', rt2.text)
console.log('rt2.facets:')
console.log('%o', rt2.facets)

// await agent.post({
//   text: rt2.text,
//   facets: rt2.facets,
//   createdAt: new Date().toISOString()
// })

