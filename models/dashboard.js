import faker from "@faker-js/faker";

faker.locale = 'en_CA'

export const GetDashboard = () => {
  const ts = Date.now()
  return {
    id: 1
    , msgSent: faker.datatype.number(20)
    , msgTotal: faker.datatype.number(300)
    , usersOnline: faker.datatype.number(10000)
  }
}
