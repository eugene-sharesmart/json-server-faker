import faker from "@faker-js/faker";
import { v1 as uuid } from "uuid";

faker.locale = 'en_CA'

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
