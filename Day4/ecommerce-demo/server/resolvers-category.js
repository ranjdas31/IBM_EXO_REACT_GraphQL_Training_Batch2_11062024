import { getCatagories } from './db/category.js'

export const resolvers1 = {
    Query: {
   /*  categories: async () => {
     const categories =await getCatagories();
     return categories; */
     categories: () => getCatagories(),
  },
  
  };
