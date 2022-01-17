import { GetPost } from "./models/posts";
import { GetUser } from "./models/users";
import { GetDashboard } from "./models/dashboard";

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

// Dashboard
const Dashboard = Array.from({ length: 1 }, GetDashboard)

export default () => {
  return {
    users: Users
    , posts : Posts
    , dashboard : Dashboard
  }
}
