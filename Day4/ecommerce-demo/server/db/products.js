import { connection } from './connection.js';
import { generateId } from './ids.js';

const getProductTable = () => connection.table('product');


export async function getProducts() {
    return await getProductTable().select();
  }

  export async function getProduct(id) {
    return await getProductTable().first().where({ id });
  }


  