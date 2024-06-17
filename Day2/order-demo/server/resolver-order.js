import {getOrders} from './db/orders.js'
export const resolvers = {
    Query: {
     orders: async () => {
     const orders =await getOrders();
     return orders;
  },
  },
};