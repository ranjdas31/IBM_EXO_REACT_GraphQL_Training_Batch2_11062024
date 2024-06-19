
import { connection } from '../db/connection.js';

const { schema } = connection;



await schema.dropTableIfExists('category');
await schema.dropTableIfExists('product'); 


   await schema.createTable('category', (table) => {
    table.text('id').notNullable().primary();
    table.text('name').notNullable();
  });


  await schema.createTable('product', (table) => {
    table.text('id').notNullable().primary();
    table.text('categoryId').notNullable()
      .references('id').inTable('category');
    table.text('name');
  });

  await connection.table('category').insert([
    {
      id: 'FjcJCHJALA4i',
      name: 'Fashion',
    },
    {
      id: 'Gu7QW9LcnF5d',
      name: 'Electronics',
    },
	{
      id: 'Tu7QP9LenG5d',
      name: 'Furniture',
    },
	
	
  ]);

   await connection.table('product').insert([
    {
      id: 'f3YzmnBZpK0o',
      categoryId: 'FjcJCHJALA4i',
      name: 'Mens Clothing',
    },
    {
      id: 'XYZNJMXFax6n',
      categoryId: 'FjcJCHJALA4i',
	  name: 'Womens Clothing',
    },
    {
      id: '6mA05AZxvS1R',
      categoryId: 'FjcJCHJALA4i',
	  name: 'Kids Clothing',
    },
	{
      id: 'TmP05AZsvS1R',
      categoryId: 'Gu7QW9LcnF5d',
	  name: 'Laptop',
    },
	{
      id: 'LmT05BZsvS1H',
      categoryId: 'Gu7QW9LcnF5d',
	  name: 'Cameras',
    },
	{
      id: 'ZrT05BZsvS1W',
      categoryId: 'Gu7QW9LcnF5d',
	  name: 'Mobiles',
    },
	{
      id: 'XnT05BZuvS1T',
      categoryId: 'Tu7QP9LenG5d',
	  name: 'Mattresses',
    },
	{
      id: 'NnT05BPuvS1M',
      categoryId: 'Tu7QP9LenG5d',
	  name: 'Desks',
    },	
	{
      id: 'BnT05BPuvP1X',
      categoryId: 'Tu7QP9LenG5d',
	  name: 'Cabinets',
    },
  ]); 


  process.exit();