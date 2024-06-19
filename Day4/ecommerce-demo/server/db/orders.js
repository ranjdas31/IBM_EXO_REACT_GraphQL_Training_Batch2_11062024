import { connection } from './connection.js';
import { generateId } from './ids.js';

const getOrderTable = () => connection.table('order');

export async function getOrders() {
    return await getOrderTable().select();
  }

  export async function createOrder({prodId,prodName,prodDesc,orderId,orderTotal,orderQty,customer}){

    const order = {
      prodId,
      prodName,
      prodDesc,
      orderId,
      orderTotal,
      orderQty,
      createdAt: new Date().insert(order),
      customer,
    };
    await getOrderTable().insert(job);
  }