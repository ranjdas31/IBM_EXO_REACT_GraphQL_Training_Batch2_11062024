// export const resolversOrder = {
//     query: {
//         greeting: () => 'Hello world',
//     },

// };


export const resolversOrder = {
    Query: {
        orders: () => orders,
       shippings: () => shippingData,
    },

};

const shippingData = [{ delivery: "STH" }, { delivery : "STO" }];

const orders = [ 
{
    __typename: "CurrentOrderDetails" ,
    prodId: 101,
    prodName: "iPhone",
    price: 80000,
    orderid: "8001",
    qty: 4,
    orderdate: "2024-06-13",
},
{
    __typename: "ArchiveOrderDetails" ,
    prodId: 102,
    prodName: "samsung",
    price: 30000,
    orderid: "1002",
    qty: 10,
    orderdate: "2020-06-12",
},
{
    __typename: "CurrentOrderDetails" ,
    prodId: 103,
    prodName: "RedMe",
    price: 20000,
    orderid: "8003",
    qty: 10,
    orderdate: "2024-06-12",
},
{
    __typename: "ArchiveOrderDetails" ,
    prodId: 104,
    prodName: "RedMe",
    price: 40000,
    orderid: "1004",
    qty: 12,
    orderdate: "2020-06-12",
},
{
    __typename: "CurrentOrderDetails" ,
    prodId: 109,
    prodName: "iPhone",
    price: 80000,
    orderid: "8001",
    qty: 4,
    orderdate: "2024-06-13",
},
{
    __typename: "ArchiveOrderDetails" ,
    prodId: 107,
    prodName: "samsung",
    price: 30000,
    orderid: "1002",
    qty: 10,
    orderdate: "2020-06-12",
}
,
{
    __typename: "CurrentOrderDetails" ,
    prodId: 121,
    prodName: "RedMe",
    price: 20000,
    orderid: "8003",
    qty: 10,
    orderdate: "2024-06-12",
},
{
    __typename: "ArchiveOrderDetails" ,
    prodId: 130,
    prodName: "RedMe",
    price: 40000,
    orderid: "1004",
    qty: 12,
    orderdate: "2020-06-12",
}
]; 