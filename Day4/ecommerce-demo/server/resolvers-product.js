import {getProducts} from './db/products.js'
import {getCategory} from './db/category.js'

export const resolvers = {
    Query: {

   /*  products: async () => {
     const products =await getProducts();
     return products; */
     products: () => getProducts(),
     
  },
  Product: {
    category: (product) => {
      //console.log('resolving category for product:',product);
      return getCategory(product.categoryId);
    },
},
  
};

