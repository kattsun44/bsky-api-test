import { agent } from './login.js'

const { data } = await agent.getAuthorFeed({
  actor: process.env.DID || "",
  limit: 30,
});

const { feed: postsArray, cursor: nextPage } = data;

const posts = postsArray.map(e => {return [e.post.indexedAt, e.post.record]});

console.log(posts);
