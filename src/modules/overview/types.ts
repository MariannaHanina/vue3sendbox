
export type TBroker = {
  id: number,
  host: string,
  port: string,
  rack: string,
  controller: string,
  partitions: string,
}

export type TUser = {
  id: number,
  email: string,
  name: string,
  phone: string,
  username: string,
  website: string,
  address: {
    street: string,
    city: string,
  },
  company: {
    name:string,
  }
}
