import faker from "@faker-js/faker";
import { v1 as uuid } from "uuid";
faker.locale = 'en_CA'

export const GetUser = () => {
  const ts = Date.now()
  return {
    id: uuid(),
    name: faker.name.findName(),
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    createdAt: ts,
    updatedAt: ts
  }
}
