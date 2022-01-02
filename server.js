import jsonServer from "json-server";
import path from "path"
import { v1 as uuid } from "uuid";
import DataBuilder from "./db"

const server = jsonServer.create()
  , router = jsonServer.router(DataBuilder())
  , middleware = jsonServer.defaults()
  , port = 3030

server.use(middleware)
server.use(jsonServer.bodyParser)

// Updating timestamps
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
    req.body.updatedAt = req.body.createdAt
  }

  if (req.method === 'PUT' || req.method === 'PATCH') {
    req.body.updatedAt = Date.now()
  }

  next()
})

// Id generator on create.
router.db._.mixin({
    createId : (coll) => {
        return uuid();
    }
})

server.use(router)
server.listen(port, () => {
  console.log(`Running a fake API on port ${port}`)
})
