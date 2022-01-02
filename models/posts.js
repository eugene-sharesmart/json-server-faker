import faker from "faker/locale/en_CA";
import { v1 as uuid } from "uuid";

export const GetPost = (userId) => {
  const ts = Date.now()
  return {
    id: uuid(),
    userId: userId,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(5),
    createdAt: ts,
    updatedAt: ts
  }
}
