/* FeastRush - 20 Countries, 140 Menu Items, Real Unsplash Images */

const IMG = {
  italian:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop',
  indian:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop',
  japanese:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop',
  mexican:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop',
  chinese:'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop',
  american:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop',
  thai:'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&auto=format&fit=crop',
  french:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop',
  turkish:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop',
  greek:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop',
  korean:'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop',
  vietnamese:'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&auto=format&fit=crop',
  spanish:'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&auto=format&fit=crop',
  moroccan:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop',
  brazilian:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop',
  british:'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&auto=format&fit=crop',
  german:'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&auto=format&fit=crop',
  egyptian:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&auto=format&fit=crop',
  indonesian:'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&auto=format&fit=crop',
  canadian:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop',
  fi_pizza:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop',
  fi_pasta:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&auto=format&fit=crop',
  fi_burger:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop',
  fi_sushi:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&auto=format&fit=crop',
  fi_curry:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop',
  fi_tacos:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop',
  fi_noodles:'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&auto=format&fit=crop',
  fi_salad:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop',
  fi_steak:'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop',
  fi_dessert:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&auto=format&fit=crop',
  fi_bbq:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop',
  fi_chicken:'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&auto=format&fit=crop',
  fi_rice:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop',
  fi_soup:'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop',
  fi_kebab:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop',
  fi_seafood:'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&auto=format&fit=crop',
  fi_dumpling:'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&auto=format&fit=crop',
  fi_bread:'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop',
  fi_fries:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop',
  fi_wings:'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?w=400&auto=format&fit=crop',
  fi_pho:'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&auto=format&fit=crop',
  fi_paella:'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400&auto=format&fit=crop',
  fi_croissant:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop',
  fi_schnitzel:'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop',
};

// FLAG_MAP is defined in app.js - do not redefine here

const RESTAURANTS = [
  {id:'w_italy',name:'Bella Italia',city:'Rome',country:'Italy',flag:'🇮🇹',image:IMG.italian,emoji:'🍕',rating:4.8,deliveryTime:'25-40',deliveryFee:3.49,minOrder:15,tags:['Italian','Pizza','Pasta'],badge:'Top Rated',
   menu:[{category:'Italian Classics',items:[
    {id:'it1',name:'Margherita Pizza',desc:'Classic tomato sauce, fresh mozzarella, basil, EVOO',price:12.99,image:IMG.fi_pizza},
    {id:'it2',name:'Pepperoni Pizza',desc:'Tomato sauce, mozzarella, spicy pepperoni slices',price:14.99,image:IMG.fi_pizza},
    {id:'it3',name:'Spaghetti Carbonara',desc:'Al dente spaghetti, guanciale, egg yolk, Pecorino Romano',price:15.99,image:IMG.fi_pasta},
    {id:'it4',name:'Lasagna',desc:'Layers of pasta, beef ragu, béchamel, three cheeses',price:16.99,image:IMG.fi_pasta},
    {id:'it5',name:'Tiramisu',desc:'Espresso-soaked ladyfingers, mascarpone cream, cocoa',price:6.99,image:IMG.fi_dessert},
    {id:'it6',name:'Ravioli',desc:'Homemade ravioli, ricotta & spinach, sage butter',price:13.99,image:IMG.fi_pasta},
    {id:'it7',name:'Fettuccine Alfredo',desc:'Fettuccine, creamy Parmigiano-Reggiano butter sauce',price:14.99,image:IMG.fi_pasta},
   ]}]},

  {id:'w_india',name:'Royal Spice',city:'Mumbai',country:'India',flag:'🇮🇳',image:IMG.indian,emoji:'🍛',rating:4.9,deliveryTime:'30-45',deliveryFee:2.49,minOrder:12,tags:['Indian','Curry','Vegetarian'],badge:'Popular',
   menu:[{category:'Indian Favourites',items:[
    {id:'in1',name:'Butter Chicken',desc:'Chicken tikka in rich tomato-cream sauce, fenugreek',price:16.99,image:IMG.fi_curry},
    {id:'in2',name:'Chicken Tikka Masala',desc:'Grilled chicken in spiced onion-tomato masala',price:15.99,image:IMG.fi_curry},
    {id:'in3',name:'Biryani',desc:'Aromatic basmati, saffron, whole spices, raita',price:14.99,image:IMG.fi_rice},
    {id:'in4',name:'Garlic Naan',desc:'Freshly baked tandoor bread, garlic butter, cilantro',price:3.99,image:IMG.fi_bread},
    {id:'in5',name:'Paneer Butter Masala',desc:'Cottage cheese cubes in creamy tomato-cashew gravy',price:13.99,image:IMG.fi_curry},
    {id:'in6',name:'Dal Makhani',desc:'Black lentils slow-cooked overnight, cream, butter',price:11.99,image:IMG.fi_soup},
    {id:'in7',name:'Gulab Jamun',desc:'Soft milk-solid dumplings in rose-water sugar syrup',price:4.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_japan',name:'Sushi Paradise',city:'Tokyo',country:'Japan',flag:'🇯🇵',image:IMG.japanese,emoji:'🍣',rating:4.9,deliveryTime:'25-40',deliveryFee:3.99,minOrder:20,tags:['Japanese','Sushi','Ramen'],badge:'Award Winning',
   menu:[{category:'Japanese Specialties',items:[
    {id:'jp1',name:'California Roll',desc:'Crab, avocado, cucumber, sesame seeds, inside-out',price:15.99,image:IMG.fi_sushi},
    {id:'jp2',name:'Spicy Tuna Roll',desc:'Fresh tuna, spicy mayo, cucumber, togarashi',price:17.99,image:IMG.fi_sushi},
    {id:'jp3',name:'Sashimi Platter',desc:'Chef selection — salmon, tuna, yellowtail, mackerel',price:22.99,image:IMG.fi_sushi},
    {id:'jp4',name:'Miso Soup',desc:'Dashi broth, tofu, wakame seaweed, spring onions',price:4.99,image:IMG.fi_soup},
    {id:'jp5',name:'Tempura',desc:'Light crispy batter, shrimp & vegetables, tentsuyu dip',price:14.99,image:IMG.fi_seafood},
    {id:'jp6',name:'Ramen',desc:'Tonkotsu broth, chashu pork, soft egg, bamboo shoots',price:13.99,image:IMG.fi_noodles},
    {id:'jp7',name:'Matcha Ice Cream',desc:'Premium Japanese matcha, creamy smooth gelato',price:5.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_mexico',name:'Taco Fiesta',city:'Mexico City',country:'Mexico',flag:'🇲🇽',image:IMG.mexican,emoji:'🌮',rating:4.7,deliveryTime:'15-28',deliveryFee:1.99,minOrder:10,tags:['Mexican','Tacos','Street Food'],badge:'Fast',
   menu:[{category:'Mexican Street Food',items:[
    {id:'mx1',name:'Chicken Tacos',desc:'Marinated chicken, corn tortillas, pico de gallo, lime',price:11.99,image:IMG.fi_tacos},
    {id:'mx2',name:'Beef Burrito',desc:'Flour tortilla, seasoned beef, rice, beans, sour cream',price:13.99,image:IMG.fi_tacos},
    {id:'mx3',name:'Quesadilla',desc:'Crispy tortilla, melted cheese, jalapeños, salsa',price:10.99,image:IMG.fi_tacos},
    {id:'mx4',name:'Guacamole',desc:'Hand-mashed avocado, tomato, cilantro, lime, chips',price:6.99,image:IMG.fi_salad},
    {id:'mx5',name:'Enchiladas',desc:'Corn tortillas, chicken, red chilli sauce, queso fresco',price:12.99,image:IMG.fi_tacos},
    {id:'mx6',name:'Churros',desc:'Fried dough pastry, cinnamon sugar, chocolate dip',price:5.99,image:IMG.fi_dessert},
    {id:'mx7',name:'Nachos',desc:'Tortilla chips, cheese sauce, jalapeños, sour cream',price:8.99,image:IMG.fi_fries},
   ]}]},

  {id:'w_china',name:'Golden Dragon',city:'Beijing',country:'China',flag:'🇨🇳',image:IMG.chinese,emoji:'🥢',rating:4.8,deliveryTime:'25-40',deliveryFee:2.99,minOrder:15,tags:['Chinese','Dim Sum','Noodles'],badge:'Trending',
   menu:[{category:'Chinese Favourites',items:[
    {id:'cn1',name:'Kung Pao Chicken',desc:'Wok-fried chicken, peanuts, chillies, Sichuan pepper',price:14.99,image:IMG.fi_chicken},
    {id:'cn2',name:'Sweet & Sour Chicken',desc:'Crispy chicken, bell peppers, pineapple, tangy sauce',price:13.99,image:IMG.fi_chicken},
    {id:'cn3',name:'Fried Rice',desc:'Wok-fried jasmine rice, egg, vegetables, soy sauce',price:11.99,image:IMG.fi_rice},
    {id:'cn4',name:'Spring Rolls',desc:'Crispy fried rolls, pork & vegetable filling, sweet chilli',price:7.99,image:IMG.fi_dumpling},
    {id:'cn5',name:'Hot & Sour Soup',desc:'Tofu, mushroom, bamboo shoots, egg, black vinegar',price:6.99,image:IMG.fi_soup},
    {id:'cn6',name:'Peking Duck',desc:'Crispy roasted duck, pancakes, hoisin, cucumber, scallion',price:24.99,image:IMG.fi_chicken},
    {id:'cn7',name:'Dim Sum',desc:'Assorted steamed dumplings — har gow, siu mai, cheung fun',price:9.99,image:IMG.fi_dumpling},
   ]}]},

  {id:'w_usa',name:'Burger House',city:'New York',country:'USA',flag:'🇺🇸',image:IMG.american,emoji:'🍔',rating:4.8,deliveryTime:'15-25',deliveryFee:1.99,minOrder:10,tags:['American','Burgers','BBQ'],badge:'Popular',
   menu:[{category:'American Classics',items:[
    {id:'us1',name:'Classic Burger',desc:'Beef patty, cheddar, lettuce, tomato, pickles, special sauce',price:11.99,image:IMG.fi_burger},
    {id:'us2',name:'Double Cheese Burger',desc:'Two smash patties, double cheese, caramelized onions',price:14.99,image:IMG.fi_burger},
    {id:'us3',name:'Chicken Wings',desc:'Crispy wings, Buffalo or BBQ sauce, celery, ranch dip',price:12.99,image:IMG.fi_wings},
    {id:'us4',name:'Fries',desc:'Golden crispy fries, sea salt, ketchup',price:4.99,image:IMG.fi_fries},
    {id:'us5',name:'Onion Rings',desc:'Beer-battered onion rings, honey mustard dip',price:5.99,image:IMG.fi_fries},
    {id:'us6',name:'Milkshake',desc:'Thick hand-spun milkshake — vanilla, chocolate, or strawberry',price:6.99,image:IMG.fi_dessert},
    {id:'us7',name:'BBQ Ribs',desc:'Slow-smoked pork ribs, house BBQ sauce, coleslaw',price:18.99,image:IMG.fi_bbq},
   ]}]},

  {id:'w_thailand',name:'Thai Orchid',city:'Bangkok',country:'Thailand',flag:'🇹🇭',image:IMG.thai,emoji:'🍲',rating:4.7,deliveryTime:'25-40',deliveryFee:2.49,minOrder:12,tags:['Thai','Spicy','Asian'],badge:'Trending',
   menu:[{category:'Thai Favourites',items:[
    {id:'th1',name:'Pad Thai',desc:'Rice noodles, shrimp, egg, bean sprouts, tamarind, peanuts',price:13.99,image:IMG.fi_noodles},
    {id:'th2',name:'Green Curry',desc:'Coconut milk, green paste, chicken, Thai eggplant, basil',price:14.99,image:IMG.fi_curry},
    {id:'th3',name:'Tom Yum Soup',desc:'Spicy-sour prawn soup, lemongrass, kaffir lime, galangal',price:12.99,image:IMG.fi_soup},
    {id:'th4',name:'Spring Rolls',desc:'Fresh rice paper, vermicelli, herbs, peanut dipping sauce',price:7.99,image:IMG.fi_dumpling},
    {id:'th5',name:'Massaman Curry',desc:'Rich coconut curry, potatoes, peanuts, cardamom, beef',price:15.99,image:IMG.fi_curry},
    {id:'th6',name:'Mango Sticky Rice',desc:'Sweet glutinous rice, fresh mango, coconut cream sauce',price:6.99,image:IMG.fi_dessert},
    {id:'th7',name:'Thai Iced Tea',desc:'Strong brewed tea, condensed milk, crushed ice',price:3.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_france',name:'Paris Bistro',city:'Paris',country:'France',flag:'🇫🇷',image:IMG.french,emoji:'🥐',rating:4.8,deliveryTime:'30-50',deliveryFee:4.49,minOrder:18,tags:['French','Bistro','Gourmet'],badge:'Gourmet',
   menu:[{category:'French Cuisine',items:[
    {id:'fr1',name:'Croissant',desc:'Flaky buttery pastry, freshly baked every morning',price:4.99,image:IMG.fi_croissant},
    {id:'fr2',name:'Escargot',desc:'Burgundy snails, garlic-herb butter, parsley, baguette',price:16.99,image:IMG.fi_seafood},
    {id:'fr3',name:'French Onion Soup',desc:'Caramelized onion broth, Gruyère crouton, gratinéed',price:11.99,image:IMG.fi_soup},
    {id:'fr4',name:'Coq au Vin',desc:'Chicken braised in red wine, lardons, mushrooms, thyme',price:22.99,image:IMG.fi_chicken},
    {id:'fr5',name:'Quiche',desc:'Buttery pastry, egg custard, bacon, Gruyère, Lorraine style',price:13.99,image:IMG.fi_croissant},
    {id:'fr6',name:'Crème Brûlée',desc:'Vanilla bean custard, caramelized sugar crust, fresh berries',price:7.99,image:IMG.fi_dessert},
    {id:'fr7',name:'Macarons',desc:'Assorted French macarons — 6 pcs, seasonal flavours',price:9.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_turkey',name:'Istanbul Delight',city:'Istanbul',country:'Turkey',flag:'🇹🇷',image:IMG.turkish,emoji:'🥙',rating:4.8,deliveryTime:'20-35',deliveryFee:2.99,minOrder:12,tags:['Turkish','Kebab','Mediterranean'],badge:'Authentic',
   menu:[{category:'Turkish Delights',items:[
    {id:'tr1',name:'Doner Kebab',desc:'Slow-cooked rotating lamb & beef, pita, garlic sauce',price:12.99,image:IMG.fi_kebab},
    {id:'tr2',name:'Baklava',desc:'Filo pastry, walnuts, pistachios, honey-rose syrup',price:5.99,image:IMG.fi_dessert},
    {id:'tr3',name:'Turkish Pizza',desc:'Lahmacun — thin flatbread, minced lamb, herbs, lemon',price:11.99,image:IMG.fi_pizza},
    {id:'tr4',name:'Hummus',desc:'Creamy chickpea dip, olive oil, paprika, warm pita',price:6.99,image:IMG.fi_salad},
    {id:'tr5',name:'Falafel',desc:'Crispy chickpea balls, tahini sauce, fresh herbs, pita',price:10.99,image:IMG.fi_dumpling},
    {id:'tr6',name:'Turkish Tea',desc:'Double-brewed black tea, tulip glass, sugar cubes',price:2.99,image:IMG.fi_dessert},
    {id:'tr7',name:'Kunafa',desc:'Shredded pastry, soft cheese, sugar syrup, pistachios',price:6.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_greece',name:"Athena's Kitchen",city:'Athens',country:'Greece',flag:'🇬🇷',image:IMG.greek,emoji:'🥗',rating:4.7,deliveryTime:'25-40',deliveryFee:3.49,minOrder:14,tags:['Greek','Mediterranean','Healthy'],badge:'New',
   menu:[{category:'Greek Specialties',items:[
    {id:'gr1',name:'Gyros',desc:'Rotisserie pork or chicken, tzatziki, tomato, onion, pita',price:11.99,image:IMG.fi_kebab},
    {id:'gr2',name:'Greek Salad',desc:'Tomatoes, cucumber, olives, Feta, red onion, oregano',price:9.99,image:IMG.fi_salad},
    {id:'gr3',name:'Moussaka',desc:'Eggplant, minced beef, béchamel, layered oven-baked',price:14.99,image:IMG.fi_steak},
    {id:'gr4',name:'Souvlaki',desc:'Pork skewers, lemon, herbs, tzatziki, pita bread',price:12.99,image:IMG.fi_kebab},
    {id:'gr5',name:'Feta Cheese',desc:'PDO Feta block, olive oil, sun-dried tomato, oregano',price:5.99,image:IMG.fi_salad},
    {id:'gr6',name:'Baklava',desc:'Honey-soaked filo, walnuts, cinnamon — Greek style',price:5.99,image:IMG.fi_dessert},
    {id:'gr7',name:'Greek Yogurt',desc:'Thick strained yogurt, honey drizzle, walnuts, granola',price:4.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_korea',name:'Seoul Garden',city:'Seoul',country:'South Korea',flag:'🇰🇷',image:IMG.korean,emoji:'🍖',rating:4.8,deliveryTime:'25-40',deliveryFee:2.99,minOrder:15,tags:['Korean','BBQ','Asian'],badge:'Trending',
   menu:[{category:'Korean Cuisine',items:[
    {id:'kr1',name:'Kimchi Stew',desc:'Fermented kimchi, pork belly, tofu, spicy gochujang broth',price:13.99,image:IMG.fi_soup},
    {id:'kr2',name:'Bibimbap',desc:'Mixed rice bowl, vegetables, egg, gochujang, sesame oil',price:14.99,image:IMG.fi_rice},
    {id:'kr3',name:'Korean Fried Chicken',desc:'Double-fried, honey-soy or spicy sauce, pickled daikon',price:15.99,image:IMG.fi_wings},
    {id:'kr4',name:'Kimbap',desc:'Seaweed rice rolls, tuna, vegetables, sesame — 8 pcs',price:9.99,image:IMG.fi_sushi},
    {id:'kr5',name:'Tteokbokki',desc:'Spicy rice cakes, fish cake, hard-boiled egg, gochujang',price:10.99,image:IMG.fi_noodles},
    {id:'kr6',name:'Soju',desc:'Korean rice spirit, classic or fruit flavour, chilled',price:8.99,image:IMG.fi_dessert},
    {id:'kr7',name:'Korean BBQ',desc:'Marinated samgyeopsal pork belly, lettuce wraps, banchan',price:22.99,image:IMG.fi_bbq},
   ]}]},

  {id:'w_vietnam',name:'Saigon Street',city:'Ho Chi Minh City',country:'Vietnam',flag:'🇻🇳',image:IMG.vietnamese,emoji:'🍜',rating:4.7,deliveryTime:'20-35',deliveryFee:2.49,minOrder:10,tags:['Vietnamese','Noodles','Asian'],badge:'Popular',
   menu:[{category:'Vietnamese Street Food',items:[
    {id:'vn1',name:'Pho Bo',desc:'Slow-simmered beef bone broth, rice noodles, herbs, lime',price:12.99,image:IMG.fi_pho},
    {id:'vn2',name:'Banh Mi',desc:'Crispy baguette, pork or chicken, pickles, cilantro, chilli',price:9.99,image:IMG.fi_bread},
    {id:'vn3',name:'Spring Rolls',desc:'Fresh rice paper, shrimp, vermicelli, herbs, peanut sauce',price:7.99,image:IMG.fi_dumpling},
    {id:'vn4',name:'Vermicelli Bowl',desc:'Rice noodles, grilled pork, fresh herbs, nuoc cham sauce',price:11.99,image:IMG.fi_noodles},
    {id:'vn5',name:'Vietnamese Coffee',desc:'Strong drip Robusta, condensed milk, iced or hot',price:4.99,image:IMG.fi_dessert},
    {id:'vn6',name:'Bun Cha',desc:'Grilled pork patties, rice noodles, herb plate, dipping broth',price:13.99,image:IMG.fi_noodles},
    {id:'vn7',name:'Pho Ga',desc:'Clear chicken broth, rice noodles, poached chicken, ginger',price:12.99,image:IMG.fi_pho},
   ]}]},

  {id:'w_spain',name:'Tapas Bar',city:'Barcelona',country:'Spain',flag:'🇪🇸',image:IMG.spanish,emoji:'🥘',rating:4.7,deliveryTime:'30-45',deliveryFee:3.99,minOrder:18,tags:['Spanish','Tapas','Mediterranean'],badge:'New',
   menu:[{category:'Spanish Tapas',items:[
    {id:'es1',name:'Paella',desc:'Saffron rice, seafood, chicken, chorizo, socarrat bottom',price:22.99,image:IMG.fi_paella},
    {id:'es2',name:'Sangria',desc:'Red wine, brandy, orange juice, fruit, cinnamon, chilled',price:8.99,image:IMG.fi_dessert},
    {id:'es3',name:'Tapas Platter',desc:'Patatas bravas, jamón ibérico, chorizo, olives, manchego',price:16.99,image:IMG.fi_salad},
    {id:'es4',name:'Gazpacho',desc:'Chilled tomato & cucumber soup, olive oil, vinegar, herbs',price:8.99,image:IMG.fi_soup},
    {id:'es5',name:'Churros',desc:'Crispy fried dough, cinnamon sugar, thick hot chocolate dip',price:6.99,image:IMG.fi_dessert},
    {id:'es6',name:'Gambas',desc:'Garlic prawns, olive oil, white wine, chilli, crusty bread',price:14.99,image:IMG.fi_seafood},
    {id:'es7',name:'Patatas Bravas',desc:'Crispy fried potatoes, spicy tomato sauce, aioli',price:7.99,image:IMG.fi_fries},
   ]}]},

  {id:'w_morocco',name:'Casablanca Cuisine',city:'Marrakech',country:'Morocco',flag:'🇲🇦',image:IMG.moroccan,emoji:'🫕',rating:4.7,deliveryTime:'30-50',deliveryFee:3.49,minOrder:14,tags:['Moroccan','North African','Halal'],badge:'Authentic',
   menu:[{category:'Moroccan Cuisine',items:[
    {id:'ma1',name:'Tagine',desc:'Slow-cooked lamb, preserved lemon, olives, aromatic spices',price:16.99,image:IMG.fi_steak},
    {id:'ma2',name:'Couscous',desc:'Steamed semolina, slow-cooked lamb, seven vegetables, broth',price:13.99,image:IMG.fi_rice},
    {id:'ma3',name:'Harira Soup',desc:'Tomato, lentils, chickpeas, lamb, coriander, lemon',price:8.99,image:IMG.fi_soup},
    {id:'ma4',name:'Bastilla',desc:'Flaky filo, spiced pigeon or chicken, almonds, powdered sugar',price:15.99,image:IMG.fi_croissant},
    {id:'ma5',name:'Mint Tea',desc:'Moroccan gunpowder tea, fresh mint, sugar, poured from height',price:3.99,image:IMG.fi_dessert},
    {id:'ma6',name:'Kefta',desc:'Spiced minced lamb patties, tomato sauce, cumin, paprika',price:12.99,image:IMG.fi_kebab},
    {id:'ma7',name:'Moroccan Pastries',desc:'Almond-filled briouats, chebakia, ghriba — 4 pcs',price:6.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_brazil',name:'Rio Grill',city:'São Paulo',country:'Brazil',flag:'🇧🇷',image:IMG.brazilian,emoji:'🥩',rating:4.8,deliveryTime:'30-50',deliveryFee:3.49,minOrder:16,tags:['Brazilian','BBQ','Churrasco'],badge:'Trending',
   menu:[{category:'Brazilian BBQ',items:[
    {id:'br1',name:'Feijoada',desc:'Black bean stew, pork, smoked sausage, farofa, orange slices',price:18.99,image:IMG.fi_soup},
    {id:'br2',name:'Picanha',desc:'Top sirloin cap, coarse salt, chimichurri, charcoal grilled',price:22.99,image:IMG.fi_steak},
    {id:'br3',name:'Brigadeiro',desc:'Chocolate fudge truffle balls, sprinkles — Brazilian classic',price:5.99,image:IMG.fi_dessert},
    {id:'br4',name:'Coxinha',desc:'Fried chicken croquette, creamy cheese filling, crispy batter',price:7.99,image:IMG.fi_chicken},
    {id:'br5',name:'Caipirinha',desc:"Cachaça, fresh lime, sugar — Brazil's national cocktail",price:8.99,image:IMG.fi_dessert},
    {id:'br6',name:'Churrasco',desc:'Mixed grilled meats on skewer, picanha, linguiça, fraldinha',price:24.99,image:IMG.fi_bbq},
    {id:'br7',name:'Moqueca',desc:'Brazilian seafood stew, coconut milk, palm oil, dendê',price:19.99,image:IMG.fi_seafood},
   ]}]},

  {id:'w_uk',name:'London Bites',city:'London',country:'UK',flag:'🇬🇧',image:IMG.british,emoji:'🐟',rating:4.6,deliveryTime:'25-40',deliveryFee:3.99,minOrder:14,tags:['British','Pub Food','Comfort Food'],badge:'Classic',
   menu:[{category:'British Classics',items:[
    {id:'uk1',name:'Fish & Chips',desc:'Beer-battered cod, thick-cut chips, mushy peas, tartare sauce',price:14.99,image:IMG.fi_seafood},
    {id:'uk2',name:"Shepherd's Pie",desc:'Minced lamb, vegetables, creamy mashed potato topping',price:15.99,image:IMG.fi_steak},
    {id:'uk3',name:'English Breakfast',desc:'Bacon, eggs, sausages, baked beans, toast, grilled tomato',price:13.99,image:IMG.fi_chicken},
    {id:'uk4',name:'Bangers & Mash',desc:'Pork sausages, creamy mash, onion gravy, peas',price:12.99,image:IMG.fi_steak},
    {id:'uk5',name:'Yorkshire Pudding',desc:'Light batter pudding, served with roast beef, gravy',price:6.99,image:IMG.fi_bread},
    {id:'uk6',name:'Toad in the Hole',desc:'Pork sausages baked in Yorkshire pudding batter, onion gravy',price:14.99,image:IMG.fi_steak},
    {id:'uk7',name:'Sticky Toffee Pudding',desc:'Moist date sponge cake, toffee sauce, vanilla ice cream',price:7.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_germany',name:'Bavarian Haus',city:'Munich',country:'Germany',flag:'🇩🇪',image:IMG.german,emoji:'🍺',rating:4.6,deliveryTime:'25-40',deliveryFee:3.49,minOrder:14,tags:['German','European','Comfort Food'],badge:'Classic',
   menu:[{category:'German Specialties',items:[
    {id:'de1',name:'Schnitzel',desc:'Breaded veal or pork cutlet, lemon, potato salad, lingonberry',price:16.99,image:IMG.fi_schnitzel},
    {id:'de2',name:'Bratwurst',desc:'Grilled pork sausage, sauerkraut, mustard, fresh bread roll',price:12.99,image:IMG.fi_steak},
    {id:'de3',name:'Sauerkraut',desc:'Fermented cabbage, caraway seeds, served with pork',price:6.99,image:IMG.fi_salad},
    {id:'de4',name:'Pretzel',desc:'Soft lye-baked bretzel, coarse salt, butter on the side',price:4.99,image:IMG.fi_bread},
    {id:'de5',name:'Black Forest Cake',desc:'Chocolate sponge, cherries, Kirsch, whipped cream layers',price:7.99,image:IMG.fi_dessert},
    {id:'de6',name:'Currywurst',desc:'Sliced pork sausage, curry ketchup, fries, Berlin street style',price:11.99,image:IMG.fi_steak},
    {id:'de7',name:'Beer',desc:'Authentic German draft beer — Weizen, Helles, or Dunkel',price:6.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_egypt',name:'Nile Breeze',city:'Cairo',country:'Egypt',flag:'🇪🇬',image:IMG.egyptian,emoji:'🫓',rating:4.6,deliveryTime:'25-40',deliveryFee:2.49,minOrder:10,tags:['Egyptian','Middle Eastern','Halal'],badge:'Authentic',
   menu:[{category:'Egyptian Street Food',items:[
    {id:'eg1',name:'Koshari',desc:"Rice, lentils, pasta, tomato sauce, fried onions — Egypt's national dish",price:10.99,image:IMG.fi_rice},
    {id:'eg2',name:'Falafel',desc:'Crispy fava bean balls, tahini, tomato, parsley, pita',price:8.99,image:IMG.fi_dumpling},
    {id:'eg3',name:'Shawarma',desc:'Slow-roasted chicken or beef, garlic sauce, pickles, pita',price:11.99,image:IMG.fi_kebab},
    {id:'eg4',name:'Baklava',desc:'Egyptian style with ghee, honey, pistachios, rose water',price:5.99,image:IMG.fi_dessert},
    {id:'eg5',name:'Um Ali',desc:'Egyptian bread pudding, milk, cream, nuts, raisins, cinnamon',price:6.99,image:IMG.fi_dessert},
    {id:'eg6',name:'Molokhia',desc:'Egyptian jute leaf stew, garlic, coriander, served with rice',price:12.99,image:IMG.fi_soup},
    {id:'eg7',name:'Egyptian Tea',desc:'Strong black tea, mint, sugar, served traditional style',price:2.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_indonesia',name:'Bali Spice',city:'Bali',country:'Indonesia',flag:'🇮🇩',image:IMG.indonesian,emoji:'🍱',rating:4.7,deliveryTime:'25-40',deliveryFee:2.49,minOrder:12,tags:['Indonesian','Asian','Spicy'],badge:'Trending',
   menu:[{category:'Indonesian Favourites',items:[
    {id:'id1',name:'Nasi Goreng',desc:'Indonesian fried rice, egg, kecap manis, shrimp crackers, acar',price:11.99,image:IMG.fi_rice},
    {id:'id2',name:'Satay',desc:'Grilled chicken or pork skewers, peanut sauce, rice cakes',price:13.99,image:IMG.fi_kebab},
    {id:'id3',name:'Rendang',desc:'Slow-cooked dry beef curry, coconut milk, lemongrass, galangal',price:15.99,image:IMG.fi_curry},
    {id:'id4',name:'Gado Gado',desc:'Indonesian salad, tempeh, tofu, egg, peanut dressing',price:10.99,image:IMG.fi_salad},
    {id:'id5',name:'Martabak',desc:'Thick stuffed pancake — sweet (chocolate/cheese) or savoury',price:7.99,image:IMG.fi_bread},
    {id:'id6',name:'Es Teler',desc:'Coconut jelly, avocado, jackfruit, condensed milk, shaved ice',price:5.99,image:IMG.fi_dessert},
    {id:'id7',name:'Indonesian Coffee',desc:'Kopi Tubruk — strong unfiltered coffee, Sumatran or Javanese',price:3.99,image:IMG.fi_dessert},
   ]}]},

  {id:'w_canada',name:'Maple Leaf',city:'Toronto',country:'Canada',flag:'🇨🇦',image:IMG.canadian,emoji:'🍁',rating:4.7,deliveryTime:'20-35',deliveryFee:2.99,minOrder:12,tags:['Canadian','American','Comfort Food'],badge:'Popular',
   menu:[{category:'Canadian Favourites',items:[
    {id:'ca1',name:'Poutine',desc:'Crispy fries, cheese curds, rich beef gravy — Québec classic',price:11.99,image:IMG.fi_fries},
    {id:'ca2',name:'Burger',desc:'Angus beef patty, back bacon, cheddar, maple aioli, brioche',price:13.99,image:IMG.fi_burger},
    {id:'ca3',name:'Lobster Roll',desc:'Atlantic lobster, butter or mayo, celery, toasted split roll',price:22.99,image:IMG.fi_seafood},
    {id:'ca4',name:'Pancakes',desc:'Fluffy stack, real Canadian maple syrup, whipped butter',price:10.99,image:IMG.fi_bread},
    {id:'ca5',name:'Maple Syrup',desc:'Pure Grade A maple syrup, served warm with fresh biscuits',price:4.99,image:IMG.fi_dessert},
    {id:'ca6',name:'Smoked Meat',desc:'Montreal-style smoked beef brisket, rye bread, yellow mustard',price:14.99,image:IMG.fi_steak},
    {id:'ca7',name:'BeaverTail',desc:'Fried dough pastry, cinnamon sugar, topped your way',price:6.99,image:IMG.fi_dessert},
   ]}]},
];

function getAllRestaurants(){ return RESTAURANTS; }
function getRestaurantById(id){ return RESTAURANTS.find(r=>r.id===id)||null; }
function getFeaturedRestaurants(n){ return RESTAURANTS.slice(0,n||6); }
function getItemImage(item){ return item.image||IMG.fi_curry; }
function searchRestaurants(query,filter){
  let list=[...RESTAURANTS];
  if(query){const q=query.toLowerCase();list=list.filter(r=>r.name.toLowerCase().includes(q)||r.city.toLowerCase().includes(q)||r.country.toLowerCase().includes(q)||r.tags.some(t=>t.toLowerCase().includes(q)));}
  if(filter&&filter!=='all'){list=list.filter(r=>r.tags.some(t=>t.toLowerCase().includes(filter.toLowerCase()))||r.country.toLowerCase().includes(filter.toLowerCase()));}
  return list;
}
