import { connection } from './connection.js';
import { generateId } from './ids.js';

const getCategoryTable = () => connection.table('category');


export async function getCatagories() {
    return await getCategoryTable().select();
  }

  export async function getCategory(id) {
    return await getCategoryTable().first().where({ id });
  }