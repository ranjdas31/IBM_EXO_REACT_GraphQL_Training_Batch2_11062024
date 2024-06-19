import { connection } from '../db/connection.js';

const { schema } = connection;

await schema.dropTableIfExists('user');
await schema.dropTableIfExists('job');
await schema.dropTableIfExists('company');

await schema.dropTableIfExists('order');
await schema.dropTableIfExists('customer');
await schema.dropTableIfExists('address');


await schema.createTable('company', (table) => {
  table.text('id').notNullable().primary();
  table.text('name').notNullable();
  table.text('description');
});

await schema.createTable('job', (table) => {
  table.text('id').notNullable().primary();
  table.text('companyId').notNullable()
    .references('id').inTable('company');
  table.text('title').notNullable();
  table.text('description');
  table.text('createdAt').notNullable();
});

await schema.createTable('user', (table) => {
  table.text('id').notNullable().primary();
  table.text('companyId').notNullable()
    .references('id').inTable('company');
  table.text('email').notNullable().unique();
  table.text('password').notNullable();
});

await schema.createTable('order', (table) => {
  table.text('orderId').notNullable().primary();;
  table.integer('orderTotal');
  table.integer('orderQty');
  table.text('prodId').notNullable();
  table.text('prodName').notNullable();
  table.text('prodDesc');
  table.integer('prodUnitPrice');
  table.integer('createdAt');
  table.text('customerId');
});

await schema.createTable('customer', (table) => {
  table.text('customerId').notNullable().primary();;
  table.text('custName').notNullable();
  table.text('custEmail').notNullable();
  table.text('custPhone').notNullable();
  table.text('addressId').notNullable();
});

await schema.createTable('address', (table) => {
  table.text('addressId').notNullable().primary();;
  table.text('street').notNullable();
  table.text('aptNo').notNullable();
  table.text('pinCode').notNullable();
  table.text('state').notNullable();
 table.text('country').notNullable();
});



await connection.table('company').insert([
  {
    id: 'FjcJCHJALA4i',
    name: 'Facegle',
    description: 'We are a startup on a mission to disrupt social search engines. Think Facebook meet Google.',
  },
  {
    id: 'Gu7QW9LcnF5d',
    name: 'Goobook',
    description: 'We are a startup on a mission to disrupt search social media. Think Google meet Facebook.',
  },
]);

await connection.table('job').insert([
  {
    id: 'f3YzmnBZpK0o',
    companyId: 'FjcJCHJALA4i',
    title: 'Frontend Developer',
    description: 'We are looking for a Frontend Developer familiar with React.',
    createdAt: '2023-01-26T11:00:00.000Z',
  },
  {
    id: 'XYZNJMXFax6n',
    companyId: 'FjcJCHJALA4i',
    title: 'Backend Developer',
    description: 'We are looking for a Backend Developer familiar with Node.js and Express.',
    createdAt: '2023-01-27T11:00:00.000Z',
  },
  {
    id: '6mA05AZxvS1R',
    companyId: 'Gu7QW9LcnF5d',
    title: 'Full-Stack Developer',
    description: 'We are looking for a Full-Stack Developer familiar with Node.js, Express, and React.',
    createdAt: '2023-01-30T11:00:00.000Z',
  },
]);

await connection.table('user').insert([
  {
    id: 'AcMJpL7b413Z',
    companyId: 'FjcJCHJALA4i',
    email: 'alice@facegle.io',
    password: 'alice123',
  },
  {
    id: 'BvBNW636Z89L',
    companyId: 'Gu7QW9LcnF5d',
    email: 'bob@goobook.co',
    password: 'bob123',
  },
]);


await connection.table('order').insert([
  {
    orderId: 'O1001',
    orderTotal: 90000,
    orderQty: 1,
    prodId: 'P001',
    prodName: 'iPhone',
    prodDesc: 'Manufacture by Apple',
    prodUnitPrice: 90000,
    createdAt: '2024-01-26T11:00:00.000Z',
    customerId: 'C001',
  },
  {
    orderId: 'O1002',
    orderTotal: 30000,
    orderQty: 1,
    prodId: 'P002',
    prodName: 'Samsung',
    prodDesc: 'Manufacture by Samsung',
    prodUnitPrice: 30000,
    createdAt: '2024-02-16T11:00:00.000Z',
    customerId: 'C002',
  },
  {
    orderId: 'O1003',
    orderTotal: 10000,
    orderQty: 1,
    prodId: 'P003',
    prodName: 'RedMe',
    prodDesc: 'Manufacture by RedMe',
    prodUnitPrice: 10000,
    createdAt: '2024-03-11T11:00:00.000Z',
    customerId: 'C003',
  },
  {
    orderId: 'O1004',
    orderTotal: 30000,
    orderQty: 1,
    prodId: 'P004',
    prodName: 'OnePlus',
    prodDesc: 'Manufacture by OnePlus',
    prodUnitPrice: 30000,
    createdAt: '2024-04-13T11:00:00.000Z',
    customerId: 'C004',
  },
  {
    orderId: 'O1005',
    orderTotal: 15000,
    orderQty: 1,
    prodId: 'P005',
    prodName: 'Nokia',
    prodDesc: 'Manufacture by Nokia',
    prodUnitPrice: 15000,
    createdAt: '2024-06-17T11:00:00.000Z',
    customerId: 'C005', 
  },
]);

await connection.table('customer').insert([
  {
    customerId: 'C001',
    custName: 'Rahul Roy',
    custEmail: 'rahul.roy@gmail.com',
    custPhone: '9830654321',
    addressId: 'A001',
  },
  {
    customerId: 'C002',
    custName: 'Amit Kundu',
    custEmail: 'amit.kundu@gmail.com',
    custPhone: '9830624325',
    addressId: 'A002',
  },
  {
    customerId: 'C003',
    custName: 'Sumit Jana',
    custEmail: 'sumit.jana@gmail.com',
    custPhone: '9830624342',
    addressId: 'A003',
  },
  {
    customerId: 'C004',
    custName: 'Rinku Dutta',
    custEmail: 'rinku.dutta@gmail.com',
    custPhone: '9930624341',
    addressId: 'A004',
  },
  {
    customerId: 'C005',
    custName: 'Trisha Chatterjee',
    custEmail: 'trisha.chatterjee@gmail.com',
    custPhone: '9730623341',
    addressId: 'A005',
  },

]);

await connection.table('address').insert([
    {
      addressId: 'A001',
      street: 'Dunlop',
      aptNo: '205',
      pinCode: '700035',
      state: 'WB',
      country: 'India',
    },
    {
      addressId: 'A002',
      street: 'Esplanade',
      aptNo: '303',
      pinCode: '700085',
      state: 'WB',
      country: 'India',
    },
    {
      addressId: 'A003',
      street: 'Garia',
      aptNo: '903',
      pinCode: '700045',
      state: 'WB',
      country: 'India',
    },
    {
      addressId: 'A004',
      street: 'Shyambazar',
      aptNo: '1103',
      pinCode: '700025',
      state: 'WB',
      country: 'India',
    },
    {
      addressId: 'A005',
      street: 'Nagerbazar',
      aptNo: '1104',
      pinCode: '700039',
      state: 'WB',
      country: 'India',
    },
  ]);

process.exit();
