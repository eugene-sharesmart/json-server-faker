import faker from "@faker-js/faker";
import { v1 as uuid } from "uuid";

faker.locale = 'en_CA'

export const GetDashboard = () => {
  const ts = Date.now()
  return {
    id: uuid()
    , msgSent: faker.datatype.number(20)
    , msgTotal: faker.datatype.number(300)
    , usersOnline: faker.datatype.number(10000)
    , createdAt: ts
    , updatedAt: ts
  }
}
