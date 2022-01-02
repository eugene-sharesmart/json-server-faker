import faker from "faker/locale/en_CA";
import { v1 as uuid } from "uuid";

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
