const data = [
  {
    categories: [
      {
        id: 1,
        name: "Electronics",
        subcategories: [
          {
            id: 101,
            name: "Smartphones",
            products: [
              { id: 1001, name: "iPhone 12", price: 999.99 },
              { id: 1002, name: "Samsung Galaxy S21", price: 899.99 },
            ],
          },
          {
            id: 102,
            name: "Laptops",
            products: [
              { id: 1003, name: "MacBook Pro", price: 1499.99 },
              { id: 1004, name: "Dell XPS 13", price: 1199.99 },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Clothing",
        subcategories: [
          {
            id: 201,
            name: "Men's",
            products: [
              { id: 1005, name: "T-Shirt", price: 19.99 },
              { id: 1006, name: "Jeans", price: 39.99 },
            ],
          },
          {
            id: 202,
            name: "Women's",
            products: [
              { id: 1007, name: "Dress", price: 49.99 },
              { id: 1008, name: "Sweater", price: 29.99 },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Home Goods",
        subcategories: [
          {
            id: 301,
            name: "Furniture",
            products: [
              { id: 1009, name: "Sofa", price: 499.99 },
              { id: 1010, name: "Coffee Table", price: 129.99 },
            ],
          },
          {
            id: 302,
            name: "Kitchenware",
            products: [
              { id: 1011, name: "Cookware Set", price: 89.99 },
              { id: 1012, name: "Blender", price: 59.99 },
            ],
          },
        ],
      },
    ],
  },
];
export default data;