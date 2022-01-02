import { GetPost } from "./models/posts";
import { GetUser } from "./models/users";

// Building an array of users
const Users = Array.from({ length: 100 }, GetUser)

// Linking posts with users
const Posts = Users.map((user) => {
    if (Math.random() > 0.3) {
        const posts = 2 + Math.floor(Math.random() * 6)
        return Array.from({ length: posts }, () => GetPost(user.id))
    } else {
        return []
    }
}).reduce((a, b) => [...a, ...b], [])

export default () => {
  return {
    users: Users
    , posts : Posts
  }
}
