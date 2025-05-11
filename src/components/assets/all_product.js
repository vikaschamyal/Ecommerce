const allProducts = [
  {
    "id": 1,
    "name": "Women's Summer Dress",
    "category": "Women's Clothing",
    "brand": "StyleTrend",
    "price": 49.99,
    "discount": 15,
    "stock": 60,
    "rating": 4.7,
    "image": "https://image.made-in-china.com/2f0j00gpEbmNYGsirP/Wholesale-Women-s-Dresses-Sexy-Clothes-High-Waisted-Bow-Tie-Straps-Dress-Striped-Floral-Print-Summer-Beach-Dress-Women-Clothes-Ladies-Long-Dress-Girls-Dresses.webp",
    "reviews": [
      {
        "user": "Anna Roberts",
        "rating": 5,
        "comment": "Perfect for summer outings!"
      }
    ]
  },
  {
      "id": 2,
      "name": "Wireless Earbuds",
      "category": "Electronics",
      "brand": "SoundMax",
      "price": 129.99,
      "discount": 5,
      "stock": 100,
      "rating": 4.7,
      "image": "https://www.yuvaflowers.com/cdn/shop/files/61q-2yzbBtL._SX522.jpg?v=1716103320",
      "description": "Noise-canceling wireless earbuds with long battery life.",
      "reviews": [
          {
              "user": "Jane Smith",
              "rating": 4.5,
              "comment": "Comfortable and great sound quality!"
          }
      ]
  },
  {
      id: 3,
      "name": "Men's Leather Jacket",
      "category": "Fashion",
      "brand": "FashionX",
      "price": 199.99,
      "discount": 15,
      "stock": 30,
      "rating": 4.6,
      "image": "https://i.etsystatic.com/24645593/r/il/e7d7f7/4339524362/il_1588xN.4339524362_limg.jpg",
      "description": "Stylish genuine leather jacket for men.",
      "reviews": [
          {
              "user": "Michael Lee",
              "rating": 5,
              "comment": "Perfect fit and great quality."
          }
      ]
  },
  {
      id: 4,
      "name": "Women's Handbag",
      "category": "Fashion",
      "brand": "LuxuryBag",
      "price": 249.99,
      "discount": 20,
      "stock": 20,
      "rating": 4.8,
      "image": "https://5.imimg.com/data5/ANDROID/Default/2022/7/ZK/PI/QH/29603120/product-jpeg-1000x1000.jpg",
      "description": "Elegant and spacious handbag for women.",
      "reviews": [
          {
              "user": "Emily Johnson",
              "rating": 5,
              "comment": "Absolutely love this bag!"
          }
      ]
  },
  {
      "id": 5,
      "name": "Gaming Laptop",
      "category": "Electronics",
      "brand": "GameTech",
      "price": 1499.99,
      "discount": 12,
      "stock": 25,
      "rating": 4.9,
      "image": "https://jarrods.tech/wp-content/uploads/2023/12/asus-rog-zephyrus-m16-2023-gaming-laptop.jpg",
      "description": "High-performance gaming laptop with RGB keyboard.",
      "reviews": [
          {
              "user": "Daniel Carter",
              "rating": 5,
              "comment": "Runs all the latest games smoothly!"
          }
      ]
  },
  {
      id: 6,
      "name": "Running Shoes",
      "category": "Sportswear",
      "brand": "FitRun",
      "price": 89.99,
      "discount": 10,
      "stock": 75,
      "rating": 4.5,
      "image": "https://s3.amazonaws.com/www.irunfar.com/wp-content/uploads/2024/05/03103420/Best-Trail-Running-Shoes-Nike-Pegasus-Trail-5.jpg",
      "description": "Lightweight and comfortable running shoes.",
      "reviews": [
          {
              "user": "Sophia Martinez",
              "rating": 4.5,
              "comment": "Very comfortable and stylish!"
          }
      ]
  },
  {
      id: 7,
      "name": "Smartwatch",
      "category": "Electronics",
      "brand": "TechWear",
      "price": 299.99,
      "discount": 8,
      "stock": 40,
      "rating": 4.6,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RgZVPA2VosCcr0Rm7zqblhzWi3oREKWimg&s",
      "description": "Feature-rich smartwatch with heart rate monitoring.",
      "reviews": [
          {
              "user": "Liam Brown",
              "rating": 5,
              "comment": "Great features and battery life!"
          }
      ]
  },
  {
      id: 8,
      "name": "Backpack",
      "category": "Accessories",
      "brand": "TravelGear",
      "price": 59.99,
      "discount": 5,
      "stock": 60,
      "rating": 4.4,
      "image": "https://media.wired.com/photos/5b72139a4177c301e3b9b193/master/pass/Jansport_05.jpg",
      "description": "Durable and spacious travel backpack.",
      "reviews": [
          {
              "user": "Olivia Wilson",
              "rating": 4.5,
              "comment": "Perfect for daily use and travel."
          }
      ]
  },
  {
      "id": 9,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "brand": "SoundBlitz",
      "price": 79.99,
      "discount": 10,
      "stock": 90,
      "rating": 4.6,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTUsANs1Ci5Dw4CgU2O9KdHFbg_njW2fpYeZMGpGWXE-UJLG3pQ2oP_1wr9EY1Z64puw&usqp=CAU",
      "description": "Portable Bluetooth speaker with deep bass and long battery life.",
      "reviews": [
          {
              "user": "Alex Carter",
              "rating": 4.7,
              "comment": "Excellent sound quality!"
          }
      ]
  },
  {
    "id": 10,
    "name": "Office Chair",
    "category": "Furniture",
    "brand": "ComfortSeat",
    "price": 149.99,
    "discount": 15,
    "stock": 40,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
    "description": "Ergonomic office chair with lumbar support.",
    "reviews": [
      {
        "user": "Jason White",
        "rating": 5,
        "comment": "Super comfortable for long working hours!"
      }
    ]
  },
  {
    "id": 11,
    "name": "Smartphone",
    "category": "Electronics",
    "brand": "TechBrand",
    "price": 699.99,
    "discount": 10,
    "stock": 50,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    "description": "A high-end smartphone with an amazing camera and display.",
    "reviews": [
      {
        "user": "John Doe",
        "rating": 5,
        "comment": "Great phone! Highly recommend."
      }
    ]
  },
  {
    "id": 12,
    "name": "Wireless Earbuds",
    "category": "Electronics",
    "brand": "SoundMax",
    "price": 129.99,
    "discount": 5,
    "stock": 100,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1590658006821-04f4008d5717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
    "description": "Noise-canceling wireless earbuds with long battery life.",
    "reviews": [
      {
        "user": "Jane Smith",
        "rating": 4.5,
        "comment": "Comfortable and great sound quality!"
      }
    ]
  },
  {
    "id": 13,
    "name": "Men's T-Shirt",
    "category": "Men's Clothing",
    "brand": "FashionX",
    "price": 29.99,
    "discount": 10,
    "stock": 80,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww",
    "description": "Comfortable cotton t-shirt for daily wear.",
    "reviews": [
      {
        "user": "Mark Taylor",
        "rating": 4,
        "comment": "Good quality fabric!"
      }
    ]
  },
  {
    "id": 14,
    "name": "Women's Summer Dress",
    "category": "Women's Clothing",
    "brand": "StyleTrend",
    "price": 49.99,
    "discount": 15,
    "stock": 60,
    "rating": 4.7,
    "image": "https://image.made-in-china.com/2f0j00gpEbmNYGsirP/Wholesale-Women-s-Dresses-Sexy-Clothes-High-Waisted-Bow-Tie-Straps-Dress-Striped-Floral-Print-Summer-Beach-Dress-Women-Clothes-Ladies-Long-Dress-Girls-Dresses.webp",
    "reviews": [
      {
        "user": "Anna Roberts",
        "rating": 5,
        "comment": "Perfect for summer outings!"
      }
    ]
  },
  {
    "id": 15,
    "name": "Boy's shorts",
    "category": "Kids' Clothing",
    "brand": "ActiveFeet",
    "price": 55.99,
    "discount": 10,
    "stock": 50,
    "rating": 4.5,
    "image": "https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:1355,w:1080)/data/mothercare/19jan2024/410400771001_1.jpeg",
    "description": "Durable sneakers for active kids.",
    "reviews": [
      {
        "user": "Lucas Green",
        "rating": 4.5,
        "comment": "Great grip and comfort!"
      }
    ]
  },
  {
    "id": 16,
    "name": "Men's Jeans",
    "category": "Men's Clothing",
    "brand": "DenimPro",
    "price": 59.99,
    "discount": 12,
    "stock": 50,
    "rating": 4.5,
    "image": "https://levi.in/cdn/shop/files/163820048_03_Back_7b9f6bc4-e939-4fe9-ae84-ea95c2243209.jpg?v=1699254102&width=1445",
    "description": "Classic fit denim jeans for men.",
    "reviews": [
      {
        "user": "James Williams",
        "rating": 4.5,
        "comment": "Very comfortable and stylish!"
      }
    ]
  },
  {
    "id": 17,
    "name": "Girls' Party Dress",
    "category": "Kids' Clothing",
    "brand": "LittleStars",
    "price": 45.99,
    "discount": 18,
    "stock": 40,
    "rating": 4.8,
    "image": "https://www.jiomart.com/images/product/original/rvthl7jhfg/buynewtrend-navy-velvet-winter-coat-women-jacket-with-soft-fur-product-images-rvthl7jhfg-0-202410181228.jpg?im=Resize=(500,630)",
    "description": "Elegant party dress for little girls.",
    "reviews": [
      {
        "user": "Emma Brown",
        "rating": 5,
        "comment": "Absolutely adorable!"
      }
    ]
  },
  {
    "id": 18,
    "name": "Women's Winter Coat",
    "category": "Women's Clothing",
    "brand": "WarmStyle",
    "price": 99.99,
    "discount": 20,
    "stock": 30,
    "rating": 4.9,
    "image": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/18743702/2024/11/8/f2e69b60-4666-41f7-b4f7-0d4af60ab5691731084527966-HONNETE-Women-Teal-Blue-Solid-Winter-Coat-1471731084527581-1.jpg",
    "description": "Premium warm winter coat for women.",
    "reviews": [
      {
        "user": "Sophia Clark",
        "rating": 5,
        "comment": "Keeps me warm and looks stylish!"
      }
    ]
  },
  {
    "id": 19,
    "name": "Boy's Sneakers",
    "category": "Kids' Clothing",
    "brand": "ActiveFeet",
    "price": 55.99,
    "discount": 10,
    "stock": 50,
    "rating": 4.5,
    "image": "https://images.prodirectsport.com/ProductImages/Thumbs/1028571_Thumb_1915578.jpg",
    "description": "Durable sneakers for active kids.",
    "reviews": [
      {
        "user": "Lucas Green",
        "rating": 4.5,
        "comment": "Great grip and comfort!"
      }
    ]
  },
  {
    "id": 29,
    "name": "Boy's cap",
    "category": "Kids' Clothing",
    "brand": "ActiveFeet",
    "price": 55.99,
    "discount": 10,
    "stock": 50,
    "rating": 4.5,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58q43TbUm7fF3JMF6W8bnELkmZ7ETfu2keQ&s",
    "description": "Durable sneakers for active kids.",
    "reviews": [
      {
        "user": "Lucas Green",
        "rating": 4.5,
        "comment": "Great grip and comfort!"
      }
    ]
  },
  {
    "id": 30,
    "name": "Boy's shorts",
    "category": "Kids' Clothing",
    "brand": "ActiveFeet",
    "price": 55.99,
    "discount": 10,
    "stock": 50,
    "rating": 4.5,
    "image": "https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:1355,w:1080)/data/mothercare/19jan2024/410400771001_1.jpeg",
    "description": "Durable sneakers for active kids.",
    "reviews": [
      {
        "user": "Lucas Green",
        "rating": 4.5,
        "comment": "Great grip and comfort!"
      }
    ]
  }
  ,
  {
    "id": 20,
    "name": "Men's Leather Jacket",
    "category": "Men's Clothing",
    "brand": "UrbanStyle",
    "price": 129.99,
    "discount": 15,
    "stock": 25,
    "rating": 4.7,
    "image": "https://i.etsystatic.com/32436208/r/il/09c11b/6286679243/il_570xN.6286679243_4l8c.jpg",
    "description": "Premium leather jacket with stylish fit.",
    "reviews": [
      {
        "user": "John Doe",
        "rating": 5,
        "comment": "Looks amazing and fits well!"
      }
    ]
  },
  {
    "id": 21,
    "name": "Men's Casual T-Shirt",
    "category": "Men's Clothing",
    "brand": "ComfortWear",
    "price": 29.99,
    "discount": 5,
    "stock": 60,
    "rating": 4.5,
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvAlqoBRMC1BCBE5f_vZy3KAUJaDQZAWsQRLZV_uqDjrBbG7mN1noMO_uVYk652DL5fgSM6mn371JByoLjeFJPX8JPj97WhSAU1U1AsvleikPCwzb7VapAXg",
    "description": "Soft cotton T-shirt, perfect for daily wear.",
    "reviews": [
      {
        "user": "David Smith",
        "rating": 4.2,
        "comment": "Very comfortable fabric!"
      }
    ]
  },
  {
    "id": 22,
    "name": "Men's Denim Jeans",
    "category": "Men's Clothing",
    "brand": "DenimPro",
    "price": 49.99,
    "discount": 10,
    "stock": 40,
    "rating": 4.6,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Dhh8VL74Obol4S9xYO9UuBordLCAGvt--A&s",
    "description": "Classic fit denim jeans for all occasions.",
    "reviews": [
      {
        "user": "Michael Brown",
        "rating": 4.8,
        "comment": "Perfect fit and great quality!"
      }
    ]
  },
  {
    "id": 23,
    "name": "Men's Running Shoes",
    "category": "Men's Clothing",
    "brand": "ActiveFeet",
    "price": 69.99,
    "discount": 12,
    "stock": 35,
    "rating": 4.7,
    "image": "https://m.media-amazon.com/images/I/613jfAH1TuL._AC_UY1000_.jpg",
    "description": "Lightweight and comfortable running shoes.",
    "reviews": [
      {
        "user": "James Wilson",
        "rating": 4.6,
        "comment": "Great support for running!"
      }
    ]
  },
  {
    "id": 24,
    "name": "Men's Formal Shirt",
    "category": "Men's Clothing",
    "brand": "ClassicWear",
    "price": 39.99,
    "discount": 8,
    "stock": 45,
    "rating": 4.5,
    "image": "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS21478-02-M47.jpg?v=1694240611&quality=50",
    "description": "Elegant formal shirt for office wear.",
    "reviews": [
      {
        "user": "Robert Miller",
        "rating": 4.3,
        "comment": "Great quality, but slightly tight fit."
      }
    ]
  },
  {
    "id": 25,
    "name": "Women's Summer Dress",
    "category": "Women's Clothing",
    "brand": "ChicWear",
    "price": 59.99,
    "discount": 10,
    "stock": 30,
    "rating": 4.8,
    "image": "https://cottonvillage.in/cdn/shop/articles/embrace-this-monsoon-season-with-stylish-dresses-699478_1366x.jpg?v=1690554412",
    "description": "Light and breathable dress, perfect for summer.",
    "reviews": [
      {
        "user": "Emma Davis",
        "rating": 5,
        "comment": "Love the design and color!"
      }
    ]
  },
  {
        "id": 26,
        "name": "Women's Handbag",
        "category": "Women's Clothing",
        "brand": "LuxuryBags",
        "price": 89.99,
        "discount": 15,
        "stock": 20,
        "rating": 4.9,
        "image": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/21282946/2024/3/21/f405d9d5-0a6c-47f9-a9df-cafb6c944ca61711010766284-Nestasia-Textured-Structured-Tote-Bag-3591711010765740-1.jpg",
        "description": "Elegant handbag with ample storage.",
        "reviews": [
            {
                "user": "Sophia Martinez",
                "rating": 4.7,
                "comment": "Great quality, worth the price!"
            }
        ]
    },
    {
        "id": 27,
        "name": "Women's Running Shoes",
        "category": "Women's Clothing",
        "brand": "ActiveFeet",
        "price": 74.99,
        "discount": 10,
        "stock": 25,
        "rating": 4.6,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPuNb_kEWNV670IzNfyIs0jPeK7jNQ4obvg&s",
        "description": "Stylish and comfortable sports shoes.",
        "reviews": [
            {
                "user": "Isabella Johnson",
                "rating": 4.5,
                "comment": "Comfortable and stylish!"
            }
        ]
    },
    {
        "id": 28,
        "name": "Women's Winter Coat",
        "category": "Women's Clothing",
        "brand": "WarmWear",
        "price": 99.99,
        "discount": 20,
        "stock": 15,
        "rating": 4.8,
        "image": "https://image.hm.com/assets/hm/1b/ea/1beab6df3fed2ad84eaced87968c9b1cb9ad760d.jpg?imwidth=1536",
        "description": "Warm and stylish winter coat.",
        "reviews": [
            {
                "user": "Olivia Taylor",
                "rating": 4.9,
                "comment": "Very warm and fashionable!"
            }
        ]
    }
];

export default allProducts