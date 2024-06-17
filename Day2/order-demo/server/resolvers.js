import {getOrders} from './db/orders.js'
export const resolvers = {
    Query: {
     orders: async () => {
     const orders =await getOrders();
     return orders;
  },
  },
  Order: {
    createdAt: (order) =>  toIsoDate(order.createdAt),
  },

  Mutation: {

    createOrder: (_root,{prodId,prodName,prodDesc,orderId,orderTotal,orderQty,customer}) => {
      // prodId="p006";
      // prodName="Lenevo";
      // prodDesc="Lenevo";
      // orderId="O1006";
      // orderTotal=90000;
      // orderQty=1;
      // customer="C006";
      return createOrder({prodId,prodName,prodDesc,orderId,orderTotal,orderQty,customer})
    },

  },
};

function toIsoDate(value){
  return value.slice(0,'yyyy-mm-dd'.length);
}



/* 
export const resolvers = {
     Query: {
       orders: () => orders
 },
  
 };


 const orders = [
   {
    // __typename:  "CurrentOrderDetails",
    prodId: 'p001',
     prodName: 'iPhone',
      prodDesc: 'Developed by iPhone',
     prodUnitPrice: 80000,
      orderId: '1001',
      orderTotal: 80000,
      orderQty:1,
      createdAt: '2024-01-26T11:00:00.000Z',
      customer: {
       custId: 'c001',
       custName: 'Akhil',
       custEmail: 'akhil@gmail.com',
       custPhone: '09836552386',
       address: {

         addressId: 'A001',
         street: 'DLF Kolkata',
         aptNo: '21',
         pinCode: '700156',
         state: 'WB',
         country: 'India'
       }
      }
 
 },
 {
//    // __typename:  "ArchiveOrderDetails",
      prodId: 'p002',
      prodName: 'Samnsung',
      prodDesc: 'Developed by Samsung',
      unitPrice: 30000,
      orderId: '2001',
      orderTotal: 30000,
      orderQty:1,
      createdAt: '2024-05-26T11:00:00.000Z',
      customer: {
       custId: 'c001',
       custName: 'Akhil',
       custEmail: 'akhil@gmail.com',
       custPhone: '09836552386',
       address: {

         addressId: 'A001',
         street: 'DLF Kolkata',
         aptNo: '21',
         pinCode: '700156',
         state: 'WB',
         country: 'India'
       }
 },
 },
 ];  */