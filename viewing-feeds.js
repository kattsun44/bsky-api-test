import { agent } from './login.js'

const { data } = await agent.getTimeline({
  // cursor: "...",
  limit: 1,
});

const { feed: postsArray, cursor: nextPage } = data;

console.log(postsArray, nextPage)
