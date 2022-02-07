const db = {
	"customers":[
		{
			"id":1,
			"name":"Karun",
			"email":"asdasdasd",
			"phone":"234345",
			"address":[
                {
                    "type":"home",
                    "house_no":1,
                    "street_name":"MG Road",
                    "city":"kolkata",
                    "pin":"700060",
                    "landmark":"montur pukur ",
                    "floor":4
                }
			],
			"avatar":"./asdsd/images/img.jpg",
			"password":"asasdadasd"
		},
		{
			"id":2,
			"name":"Tarun",
			"email":"asdasdasd",
			"phone":"23456345",
			"address":[
                {
                    "type":"home",
                    "house_no":3,
                    "street_name":"MRG Road",
                    "city":"kolkata",
                    "pin":"700604",
                    "landmark":"montur math ",
                    "floor":4
                }
			],
			"avatar":"./asdsd/images/img.jpg",
			"password":"asasdadasd"
		}

	],
	
	"cuisines":[
		{
			"id":1,
			"name":"Mexican & American",
			"pic":"/images/indian.jpg",
		},
		{
			"id":2,
			"name":"Chinese",
			"pic":"chhobi.jpg",
		},
		{
			"id":3,
			"name":"Mughlai/Indian",
			"pic":"/images/chhobi.jpg",
		},
		{
			"id":4,
			"name":"Beverages",
			"pic":"/images/indian.jpg",
		},
		{
			"id":5,
			"name":"Dessert",
			"pic":"chhobi.jpg",
		},
		{
			"id":6,
			"name":"Korean",
			"pic":"chhobi.jpg",
		},
		{
			"id":7,
			"name":"Italian",
			"pic":"chhobi.jpg",
		},
	],
	
	"foods":[
		{
			"id":1,
			"cuisine_id":1,
			"type":"breakfast",
			"price":230,
			"name":"Tacos",
			"pic":"/images/Mexican/Tacos/Chicken Tacos.jpg",
			"desc":"Try our delicious Mexican Tacos at affordable prices",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"gr8.."
				}
			],
			"share":10
		},
		{
			"id":2,
			"cuisine_id":1,
			"type":"breakfast",
			"price":169,
			"name":"Burrito",
			"pic":"/images/Mexican/Burritos/Chicken Burritos.jpeg",
			"desc":"Flavours of Mexico",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":3,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"Quesadilla",
			"pic":"/images/Mexican/Quesadillas/Mushroom Cheese Quesadillas.jpg",
			"desc":"kjkjlfkjskdf",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":4,
			"cuisine_id":1,
			"type":"breakfast",
			"price":345,
			"name":"Alambre",
			"pic":"/images/Mexican/Alambres/Chicken Alambres.jpg",
			"desc":"kjkjlfkjskdf",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":5,
			"cuisine_id":1,
			"type":"breakfast",
			"price":239,
			"name":"Burger(Veg/Nonveg)",
			"pic":"/images/American/Burgers and Sandwiches/Cheeseburger.jpg",
			"desc":"kjkjlfkjskdf",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":6,
			"cuisine_id":3,
			"type":"Mughlai",
			"price":239,
			"name":"Mutton Biriyani",
			"pic":"/images/Indian/Biriyani/Mutton Biriyani.jpg",
			"desc":"kjkjlfkjskdf",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":7,
			"cuisine_id":6,
			"type":"breakfast",
			"price":123123,
			"name":"Kimchi",
			"pic":"/images/Korean/Royal Kimchi.jpg",
			"desc":"Fermented vegetables",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":8,
			"cuisine_id":3,
			"type":"breakfast",
			"price":323,
			"name":"Basanti Pulao",
			"pic":"/images/Indian/Rolls Rice/Basanti Pulao.jpg",
			"desc":"..",
		},
		{
			"id":9,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":345,
			"name":"Crispy Chilli Baby Corn",
			"pic":"/images/Chinese/Starters/Crispy Chilli Baby Corn.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":10,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":569,
			"name":"Sweet and Sour Soup",
			"pic":"/images/Chinese/Starters/Soup.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":11,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":319,
			"name":"Mozarella Sticks",
			"pic":"/images/American/Fries/Mozzarella Sticks.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":12,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":419,
			"name":"Crispy Chilli Chicken",
			"pic":"/images/Chinese/Starters/Crispy Chilli Chicken.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":13,
			"cuisine_id":2,
			"type":"Chinese",
			"price":423,
			"name":"Wonton",
			"pic":"/images/Chinese/Starters/Wontons.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":14,
			"cuisine_id":2,
			"type":"breakfast",
			"price":399,
			"name":"Fried Rice",
			"pic":"/images/Chinese/Noodles and Rice/Fried Rice.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":15,
			"cuisine_id":1,
			"type":"Appetizer",
			"price":299,
			"name":"BBQ Chicken",
			"pic":"/images/American/Fried Chicken/BBQ Chicken Wings.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":16,
			"cuisine_id":1,
			"type":"Appetizer",
			"price":199,
			"name":"Prawn/Shrimp Fries",
			"pic":"/images/American/Fries/Shrimp Fries.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":17,
			"cuisine_id":3,
			"type":"Appetizer",
			"price":499,
			"name":"Hariyali Kebab",
			"pic":"/images/Indian/Kebabs/Hariyali Kebabs.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":18,
			"cuisine_id":3,
			"type":"Appetizer",
			"price":249,
			"name":"Chicken Tandoori",
			"pic":"/images/Indian/Kebabs/Chicken Tandoori.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":19,
			"cuisine_id":1,
			"type":"Appetizer",
			"price":123,
			"name":"Double Decker Cheese Burger",
			"pic":"/images/American/Burgers and Sandwiches/Double Decker Chicken Burger.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":20,
			"cuisine_id":6,
			"type":"Appetizer",
			"price":123123,
			"name":"Shoyu Ramen",
			"pic":"/images/Korean/Shoyu Ramen.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":21,
			"cuisine_id":6,
			"type":"breakfast",
			"price":123123,
			"name":"Korean Fried Chicken",
			"pic":"/images/Korean/Korean Fried Chicken.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":22,
			"cuisine_id":5,
			"type":"Dessert",
			"price":200,
			"name":"Baked Rosogolla",
			"pic":"/images/Dessert/Baked Rosogolla.png",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":23,
			"cuisine_id":5,
			"type":"Dessert",
			"price":123123,
			"name":"BlueBerry Cheesecake",
			"pic":"/images/Dessert/Blueberry Cheesecake.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":24,
			"cuisine_id":5,
			"type":"Dessert",
			"price":123123,
			"name":"Choco Lava Cake",
			"pic":"/images/Dessert/Choco Lava Cake.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":25,
			"cuisine_id":5,
			"type":"Dessert",
			"price":33,
			"name":"Gulab Jamun",
			"pic":"/images/Dessert/Gulab Jamun.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":26,
			"cuisine_id":5,
			"type":"Dessert",
			"price":123,
			"name":"Oreo Ice Cream",
			"pic":"/images/Dessert/Ice Cream/Oreo Ice Cream.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":27,
			"cuisine_id":5,
			"type":"Dessert",
			"price":123,
			"name":"Butter Scotch Ice Cream",
			"pic":"/images/Dessert/Ice Cream/Butter Scotch Ice Cream.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":28,
			"cuisine_id":5,
			"type":"Dessert",
			"price":123,
			"name":"Strawberry Ice Cream",
			"pic":"/images/Dessert/Ice Cream/Strawberry Ice Cream.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":29,
			"cuisine_id":5,
			"type":"Dessert",
			"price":123,
			"name":"Brownie",
			"pic":"/images/Dessert/Brownie.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":30,
			"cuisine_id":5,
			"type":"Dessert",
			"price":56,
			"name":"Firni",
			"pic":"/images/Dessert/Firni.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":31,
			"cuisine_id":3,
			"type":"Mughlai",
			"price":230,
			"name":"Chicken Biriyani",
			"pic":"/images/Indian/Biriyani/Chicken Biriyani.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":32,
			"cuisine_id":7,
			"type":"breakfast",
			"price":123123,
			"name":"Lasagna",
			"pic":"/images/Italian/Pasta/Lasagne.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":33,
			"cuisine_id":7,
			"type":"breakfast",
			"price":123,
			"name":"Gnocchi Pasta",
			"pic":"/images/Italian/Pasta/Gnocchi Pasta.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":34,
			"cuisine_id":7,
			"type":"breakfast",
			"price":13,
			"name":"Pepper BarbQ",
			"pic":"/images/Italian/Pizza/Pepper Barbeque Pizza.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":35,
			"cuisine_id":7,
			"type":"breakfast",
			"price":123,
			"name":"Margherita Pizza",
			"pic":"/images/Italian/Pizza/Margherita Pizza.jpg",
			"desc":"kjkjlfkjskdf",
		}

		,
		{
			"id":36,
			"cuisine_id":7,
			"type":"breakfast",
			"price":123123,
			"name":"Risotto",
			"pic":"/images/Italian/Risotto/Risotto.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":37,
			"cuisine_id":7,
			"type":"breakfast",
			"price":223,
			"name":"Veg Extravaganza",
			"pic":"/images/Italian/Pizza/Veg Extravaganza Pizza.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":38,
			"cuisine_id":7,
			"type":"breakfast",
			"price":123123,
			"name":"Spagetti",
			"pic":"/images/Italian/Pasta/Spagetti.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":39,
			"cuisine_id":4,
			"type":"breakfast",
			"price":340,
			"name":"Lassi",
			"pic":"/images/Beverages/Lassi.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":40,
			"cuisine_id":4,
			"type":"breakfast",
			"price":323,
			"name":"Mango Milkshake",
			"pic":"/images/Beverages/Mango Milkshake.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":41,
			"cuisine_id":4,
			"type":"breakfast",
			"price":123123,
			"name":"Mojito",
			"pic":"/images/Beverages/Mojito.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":42,
			"cuisine_id":4,
			"type":"breakfast",
			"price":123123,
			"name":"Cold Coffee",
			"pic":"/images/Beverages/Cold Coffee.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":43,
			"cuisine_id":4,
			"type":"breakfast",
			"price":123123,
			"name":"Cinamon T",
			"pic":"/images/Beverages/Cinamon Tea.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":44,
			"cuisine_id":3,
			"type":"main course",
			"price":223,
			"name":"Butter Chicken",
			"pic":"/images/Indian/Gravy/Butter Chicken.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":45,
			"cuisine_id":6,
			"type":"main course",
			"price":599,
			"name":"Bibimbap",
			"pic":"/images/Korean/Bibimbap.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":46,
			"cuisine_id":2,
			"type":"main course",
			"price":399,
			"name":"Cantonese Chicken Chowmein",
			"pic":"/images/Chinese/Noodles and Rice/Cantonese Style Chicken Chowmein.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":47,
			"cuisine_id":2,
			"type":"main course",
			"price":199,
			"name":"Veg Manchurian",
			"pic":"/images/Chinese/Gravy/Veg Manchurians.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":48,
			"cuisine_id":2,
			"type":"main course",
			"price":399,
			"name":"Singapore Noodles",
			"pic":"/images/Chinese/Noodles and Rice/Singapore Noodles.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":49,
			"cuisine_id":4,
			"type":"main course",
			"price":299,
			"name":"Rainbow Paradise",
			"pic":"/images/Beverages/Rainbow Paradise Mocktail.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":50,
			"cuisine_id":4,
			"type":"Beverages",
			"price":99,
			"name":"Blue Lagoon",
			"pic":"/images/Beverages/Blue Lagoon.jpg",
			"desc":"kjkjlfkjskdf",
		}
	],
	
	"orders":[
		{
			"id":1,
			"cart":[
				{
					"food_id":1,
					"quantity":2
				},
				{
					"food_id":2,
					"quantity":2
				},
				{
					"food_id":3,
					"quantity":1
				}
			],	
			"cus_id":1,
			"order_placed_date":"1/1/2001",
			"delivery_date":"date and time"
		}
	]
}

export default db;