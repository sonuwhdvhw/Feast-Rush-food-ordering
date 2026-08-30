/* ============================================
   RESTAURANTS.JS — 28 Global Restaurants
   Real Unsplash Images for all restaurants & menu items
   ============================================ */

const IMG = {
  italian:  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop',
  indian:   'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop',
  japanese: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop',
  mexican:  'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop',
  chinese:  'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop',
  burger:   'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop',
  pizza:    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop',
  sushi:    'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&auto=format&fit=crop',
  bbq:      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop',
  dessert:  'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop',
  korean:   'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop',
  french:   'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop',
  turkish:  'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop',
  seafood:  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&auto=format&fit=crop',
  thai:     'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&auto=format&fit=crop',
  arabic:   'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&auto=format&fit=crop',
  fi_pizza:    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop',
  fi_pasta:    'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&auto=format&fit=crop',
  fi_burger:   'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop',
  fi_sushi:    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&auto=format&fit=crop',
  fi_curry:    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop',
  fi_tacos:    'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop',
  fi_noodles:  'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&auto=format&fit=crop',
  fi_salad:    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop',
  fi_steak:    'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop',
  fi_dessert:  'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&auto=format&fit=crop',
  fi_bbq:      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop',
  fi_chicken:  'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&auto=format&fit=crop',
  fi_rice:     'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop',
  fi_soup:     'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop',
  fi_kebab:    'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop',
  fi_seafood:  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&auto=format&fit=crop',
  fi_dumpling: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&auto=format&fit=crop',
  fi_bread:    'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop',
  fi_fries:    'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop',
};

const RESTAURANTS = [
  // ═══ 8 NEW RESTAURANTS ═══
  { id:'r_bh', name:'Burger House', city:'Chicago', country:'USA', image:IMG.burger, emoji:'🍔', rating:4.8, deliveryTime:'15-25', deliveryFee:1.99, minOrder:12, tags:['Burgers','American','Fast Food'], badge:'Popular',
    menu:[
      { category:'Signature Burgers', items:[
        { id:'bh1', name:'The Classic Smash', desc:'Double smash patty, American cheese, pickles, special sauce on brioche', price:11.99, image:IMG.fi_burger },
        { id:'bh2', name:'BBQ Bacon Crunch', desc:'Triple beef, crispy bacon, onion rings, smoky BBQ sauce', price:14.99, image:IMG.fi_burger },
        { id:'bh3', name:'Spicy Habanero', desc:'Beef patty, habanero sauce, jalapeños, pepper jack, chipotle mayo', price:13.49, image:IMG.fi_burger },
        { id:'bh4', name:'Mushroom Swiss Melt', desc:'Wagyu patty, sautéed mushrooms, Swiss, truffle aioli', price:15.99, image:IMG.fi_burger },
      ]},
      { category:'Sides & Drinks', items:[
        { id:'bhs1', name:'Loaded Cheese Fries', desc:'Crispy fries, cheddar sauce, bacon, jalapeños', price:7.99, image:IMG.fi_fries },
        { id:'bhs2', name:'Onion Rings', desc:'Beer-battered, honey mustard dip', price:5.99, image:IMG.fi_fries },
        { id:'bhs3', name:'Vanilla Milkshake', desc:'Hand-spun thick milkshake, whipped cream', price:5.99, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r_pp', name:'Pizza Palace', city:'Naples', country:'Italy', image:IMG.pizza, emoji:'🍕', rating:4.9, deliveryTime:'25-40', deliveryFee:3.49, minOrder:18, tags:['Pizza','Italian','Vegetarian Friendly'], badge:'Top Rated',
    menu:[
      { category:'Wood-Fired Pizzas', items:[
        { id:'pp1', name:'Margherita Classica', desc:'San Marzano tomato, fior di latte mozzarella, fresh basil, EVOO', price:15.99, image:IMG.fi_pizza },
        { id:'pp2', name:'Diavola Infernale', desc:'Spicy salami, nduja, mozzarella, chilli oil', price:17.99, image:IMG.fi_pizza },
        { id:'pp3', name:'Quattro Formaggi', desc:'Mozzarella, gorgonzola, Parmigiano, provolone, truffle honey', price:18.99, image:IMG.fi_pizza },
        { id:'pp4', name:'Prosciutto e Rucola', desc:'San Daniele prosciutto, rocket, shaved Parmigiano', price:19.99, image:IMG.fi_pizza },
      ]},
      { category:'Pasta & Desserts', items:[
        { id:'ppp1', name:'Spaghetti al Pomodoro', desc:'San Marzano tomatoes, garlic, basil, Parmigiano', price:12.99, image:IMG.fi_pasta },
        { id:'ppd1', name:'Tiramisu', desc:'Espresso-soaked ladyfingers, mascarpone cream, cocoa dust', price:7.99, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r_sm', name:'Sushi Master', city:'Tokyo', country:'Japan', image:IMG.sushi, emoji:'🍣', rating:4.9, deliveryTime:'25-40', deliveryFee:3.99, minOrder:25, tags:['Sushi','Japanese','Seafood'], badge:'Award Winning',
    menu:[
      { category:'Signature Rolls', items:[
        { id:'sm1', name:'Dragon Roll', desc:'Shrimp tempura, cucumber, avocado, unagi sauce, tobiko', price:17.99, image:IMG.fi_sushi },
        { id:'sm2', name:'Volcano Roll', desc:'Spicy tuna inside, baked scallop, sriracha aioli on top', price:19.99, image:IMG.fi_sushi },
        { id:'sm3', name:'Rainbow Roll', desc:'California base topped with assorted sashimi', price:21.99, image:IMG.fi_sushi },
        { id:'sm4', name:'Spider Roll', desc:'Soft shell crab tempura, cucumber, avocado, spicy mayo', price:18.99, image:IMG.fi_sushi },
      ]},
      { category:'Sashimi & Sides', items:[
        { id:'sms1', name:'Salmon Sashimi (8pc)', desc:'Premium Atlantic salmon, ponzu, ginger, wasabi', price:22.99, image:IMG.fi_sushi },
        { id:'smsp1', name:'Gyoza (6pc)', desc:'Pan-fried pork & cabbage dumplings, ponzu, chilli oil', price:8.99, image:IMG.fi_dumpling },
      ]},
    ]},

  { id:'r_sg', name:'Spice Garden', city:'Mumbai', country:'India', image:IMG.indian, emoji:'🍛', rating:4.8, deliveryTime:'30-45', deliveryFee:2.49, minOrder:15, tags:['Indian','Curry','Vegetarian'], badge:'Trending',
    menu:[
      { category:'Signature Curries', items:[
        { id:'sg1', name:'Butter Chicken', desc:'Tender chicken tikka in silky tomato-cream sauce, fenugreek', price:14.99, image:IMG.fi_curry },
        { id:'sg2', name:'Lamb Rogan Josh', desc:'Slow-braised lamb, Kashmiri chillies, fennel, whole spices', price:17.99, image:IMG.fi_curry },
        { id:'sg3', name:'Palak Paneer', desc:'Fresh cottage cheese, creamed spinach, garlic, ginger', price:13.99, image:IMG.fi_curry },
        { id:'sg4', name:'Dal Makhani', desc:'Black lentils slow-cooked overnight, cream, butter, tomatoes', price:12.99, image:IMG.fi_curry },
      ]},
      { category:'Tandoor & Breads', items:[
        { id:'sgt1', name:'Chicken Tikka', desc:'Yogurt-marinated, charred in clay oven, mint chutney', price:14.99, image:IMG.fi_chicken },
        { id:'sgt2', name:'Garlic Naan', desc:'Freshly baked, butter, minced garlic, coriander', price:3.49, image:IMG.fi_bread },
        { id:'sgt3', name:'Lamb Biryani', desc:'Basmati, saffron, whole spices, dum-cooked, raita', price:17.99, image:IMG.fi_rice },
      ]},
    ]},

  { id:'r_tf', name:'Taco Fiesta', city:'Mexico City', country:'Mexico', image:IMG.mexican, emoji:'🌮', rating:4.7, deliveryTime:'15-28', deliveryFee:1.99, minOrder:12, tags:['Mexican','Tacos','Street Food'], badge:'Fast',
    menu:[
      { category:'Street Tacos', items:[
        { id:'tf1', name:'Al Pastor (3pc)', desc:'Achiote pork, pineapple, cilantro, white onion, salsa verde', price:10.99, image:IMG.fi_tacos },
        { id:'tf2', name:'Carne Asada (3pc)', desc:'Grilled skirt steak, pico de gallo, queso fresco, guac', price:12.99, image:IMG.fi_tacos },
        { id:'tf3', name:'Crispy Fish (3pc)', desc:'Beer-battered cod, chipotle slaw, lime crema', price:11.99, image:IMG.fi_tacos },
        { id:'tf4', name:'Chorizo & Egg (3pc)', desc:'Spiced pork chorizo, scrambled egg, salsa roja, avocado', price:10.49, image:IMG.fi_tacos },
      ]},
      { category:'Extras', items:[
        { id:'tfe1', name:'Guacamole & Chips', desc:'Hand-mashed avocado, tomato, jalapeño, lime, cilantro', price:6.99, image:IMG.fi_salad },
        { id:'tfe2', name:'Super Burrito', desc:'Rice, beans, guac, sour cream, choice of protein', price:13.99, image:IMG.fi_tacos },
      ]},
    ]},

  { id:'r_nh', name:'Noodle House', city:'Shanghai', country:'China', image:IMG.chinese, emoji:'🍜', rating:4.7, deliveryTime:'20-35', deliveryFee:2.49, minOrder:15, tags:['Chinese','Noodles','Asian'], badge:'Trending',
    menu:[
      { category:'Noodle Soups', items:[
        { id:'nh1', name:'Beef Brisket Noodle', desc:'Slow-braised brisket, rich bone broth, springy noodles, bok choy', price:13.99, image:IMG.fi_noodles },
        { id:'nh2', name:'Dan Dan Noodles', desc:'Sichuan spiced minced pork, sesame paste, chilli oil', price:12.49, image:IMG.fi_noodles },
        { id:'nh3', name:'Wonton Noodle Soup', desc:'Shrimp & pork wontons, clear broth, egg noodles', price:11.99, image:IMG.fi_noodles },
        { id:'nh4', name:'Scallion Oil Noodles', desc:'Hand-pulled noodles, caramelised scallion oil, soy, sesame', price:10.99, image:IMG.fi_noodles },
      ]},
      { category:'Dim Sum', items:[
        { id:'nhd1', name:'Har Gow (4pc)', desc:'Crystal shrimp dumplings, thin translucent skin', price:8.99, image:IMG.fi_dumpling },
        { id:'nhd2', name:'Char Siu Bao (3pc)', desc:'Steamed fluffy buns filled with BBQ pork', price:7.49, image:IMG.fi_bread },
      ]},
    ]},

  { id:'r_gh', name:'Grill House', city:'Austin', country:'USA', image:IMG.bbq, emoji:'🥩', rating:4.8, deliveryTime:'25-40', deliveryFee:2.99, minOrder:20, tags:['BBQ','American','Steakhouse'], badge:'Trending',
    menu:[
      { category:'Smoked Meats', items:[
        { id:'gh1', name:'Beef Brisket (500g)', desc:'14-hour Texas-smoked brisket, post oak wood, pickles', price:24.99, image:IMG.fi_steak },
        { id:'gh2', name:'Baby Back Ribs (full rack)', desc:'St. Louis cut, dry-rubbed, 6-hour smoked, bourbon glaze', price:28.99, image:IMG.fi_bbq },
        { id:'gh3', name:'Pulled Pork Sandwich', desc:'Slow-smoked pork shoulder, apple cider slaw, brioche bun', price:13.99, image:IMG.fi_bbq },
        { id:'gh4', name:'12oz Ribeye', desc:'Prime-cut ribeye, charcoal grilled, herb butter, roasted garlic', price:34.99, image:IMG.fi_steak },
      ]},
      { category:'Sides', items:[
        { id:'ghs1', name:'Mac & Cheese', desc:'Three-cheese sauce, breadcrumb crust, smoked paprika', price:8.99, image:IMG.fi_pasta },
        { id:'ghs2', name:'Cornbread', desc:'Honey butter, jalapeño swirl, baked fresh daily', price:4.99, image:IMG.fi_bread },
      ]},
    ]},

  { id:'r_sd', name:'Sweet Delight', city:'Paris', country:'France', image:IMG.dessert, emoji:'🍰', rating:4.9, deliveryTime:'20-35', deliveryFee:2.99, minOrder:14, tags:['Desserts','French','Café'], badge:'Top Rated',
    menu:[
      { category:'Signature Desserts', items:[
        { id:'sd1', name:'Crème Brûlée', desc:'Classic vanilla bean custard, caramelised sugar crust, fresh berries', price:9.99, image:IMG.fi_dessert },
        { id:'sd2', name:'Chocolate Fondant', desc:'Warm dark chocolate lava cake, salted caramel ice cream', price:11.99, image:IMG.fi_dessert },
        { id:'sd3', name:'Paris-Brest', desc:'Choux pastry ring, praline mousseline cream, toasted almonds', price:10.99, image:IMG.fi_dessert },
        { id:'sd4', name:'Tarte Tatin', desc:'Upside-down caramelised apple tart, Calvados cream', price:9.49, image:IMG.fi_dessert },
      ]},
      { category:'Pastries & Drinks', items:[
        { id:'sdp1', name:'Assorted Macarons (6pc)', desc:'Raspberry, pistachio, salted caramel, rose, lemon, chocolate', price:12.99, image:IMG.fi_dessert },
        { id:'sdp2', name:'Croissant Box (4pc)', desc:'Butter, almond, pain au chocolat, ham & cheese', price:11.99, image:IMG.fi_bread },
        { id:'sdp3', name:'Café au Lait', desc:'Single origin espresso, steamed whole milk, madeleine', price:5.49, image:IMG.fi_dessert },
      ]},
    ]},

  // ═══ ORIGINAL 20 RESTAURANTS ═══
  { id:'r1', name:'Brooklyn Burger Co.', city:'New York', country:'USA', image:IMG.burger, emoji:'🍔', rating:4.8, deliveryTime:'20-30', deliveryFee:2.99, minOrder:15, tags:['Burgers','American','Fast Food'], badge:'Popular',
    menu:[
      { category:'Burgers', items:[
        { id:'r1m1', name:'Classic Smash Burger', desc:'Double smash patty, American cheese, pickles, special sauce', price:12.99, image:IMG.fi_burger },
        { id:'r1m2', name:'BBQ Bacon Stack', desc:'Triple patty, crispy bacon, BBQ sauce, caramelized onions', price:15.99, image:IMG.fi_burger },
        { id:'r1m3', name:'Mushroom Swiss', desc:'Beef patty, sautéed mushrooms, Swiss cheese, truffle aioli', price:13.99, image:IMG.fi_burger },
        { id:'r1m4', name:'Spicy Jalapeño', desc:'Crispy jalapeños, pepper jack, sriracha mayo, fresh guac', price:14.49, image:IMG.fi_burger },
      ]},
      { category:'Sides & Drinks', items:[
        { id:'r1s1', name:'Loaded Fries', desc:'Crispy fries, cheese sauce, bacon bits, sour cream', price:7.99, image:IMG.fi_fries },
        { id:'r1s2', name:'Onion Rings', desc:'Beer-battered, served with ranch dip', price:5.99, image:IMG.fi_fries },
        { id:'r1d1', name:'Craft Milkshake', desc:'Vanilla, chocolate, or strawberry — thick & creamy', price:6.49, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r2', name:"Nonna's Italian Kitchen", city:'Chicago', country:'USA', image:IMG.italian, emoji:'🍝', rating:4.9, deliveryTime:'30-45', deliveryFee:3.49, minOrder:20, tags:['Italian','Pasta','Pizza'], badge:'Top Rated',
    menu:[
      { category:'Pasta', items:[
        { id:'r2m1', name:'Spaghetti Carbonara', desc:'Pecorino, guanciale, egg yolk, black pepper', price:14.99, image:IMG.fi_pasta },
        { id:'r2m2', name:'Fettuccine Alfredo', desc:'Homemade fettuccine, butter, Parmigiano-Reggiano', price:13.99, image:IMG.fi_pasta },
        { id:'r2m3', name:'Lasagne al Forno', desc:'Beef ragu, béchamel, three-cheese blend', price:16.99, image:IMG.fi_pasta },
        { id:'r2m4', name:'Truffle Tagliatelle', desc:'Fresh pasta, black truffle, butter, Parmesan', price:19.99, image:IMG.fi_pasta },
      ]},
      { category:'Pizza & Desserts', items:[
        { id:'r2p1', name:'Margherita DOC', desc:'San Marzano tomato, fior di latte, fresh basil, EVOO', price:15.99, image:IMG.fi_pizza },
        { id:'r2p2', name:'Diavola', desc:'Spicy salami, nduja, mozzarella, chilli oil', price:17.99, image:IMG.fi_pizza },
        { id:'r2d1', name:'Tiramisu', desc:'Classic Italian, espresso-soaked ladyfingers, mascarpone', price:7.99, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r3', name:'Seoul Kitchen', city:'Los Angeles', country:'USA', image:IMG.korean, emoji:'🥘', rating:4.7, deliveryTime:'25-40', deliveryFee:2.49, minOrder:18, tags:['Korean','BBQ','Asian'], badge:'Trending',
    menu:[
      { category:'Korean BBQ', items:[
        { id:'r3m1', name:'Bulgogi Bowl', desc:'Marinated beef, steamed rice, kimchi, sesame oil', price:13.99, image:IMG.fi_steak },
        { id:'r3m2', name:'Galbi Ribs', desc:'Short ribs, soy-garlic marinade, pickled vegetables', price:18.99, image:IMG.fi_bbq },
        { id:'r3m3', name:'Spicy Pork Belly', desc:'Gochujang-marinated pork, lettuce wraps, rice', price:15.99, image:IMG.fi_bbq },
      ]},
      { category:'Street Food', items:[
        { id:'r3s1', name:'Korean Fried Chicken', desc:'Double-fried, honey-soy or spicy sauce, pickled daikon', price:14.99, image:IMG.fi_chicken },
        { id:'r3s2', name:'Tteokbokki', desc:'Spicy rice cakes, fish cake, gochujang sauce', price:9.99, image:IMG.fi_noodles },
      ]},
    ]},

  { id:'r4', name:'Taco Loco', city:'Houston', country:'USA', image:IMG.mexican, emoji:'🌮', rating:4.6, deliveryTime:'15-25', deliveryFee:1.99, minOrder:12, tags:['Mexican','Tacos','Street Food'], badge:'Fast',
    menu:[
      { category:'Tacos', items:[
        { id:'r4m1', name:'Al Pastor Tacos', desc:'Achiote pork, pineapple, cilantro, onion — 3 pcs', price:10.99, image:IMG.fi_tacos },
        { id:'r4m2', name:'Carne Asada Tacos', desc:'Grilled skirt steak, salsa verde, queso fresco — 3 pcs', price:12.99, image:IMG.fi_tacos },
        { id:'r4m3', name:'Crispy Fish Tacos', desc:'Beer-battered cod, chipotle slaw, lime crema — 3 pcs', price:11.99, image:IMG.fi_tacos },
      ]},
      { category:'Extras', items:[
        { id:'r4e1', name:'Guacamole & Chips', desc:'Fresh avocado, tomato, jalapeño, lime', price:6.99, image:IMG.fi_salad },
        { id:'r4e2', name:'Super Burrito', desc:'Rice, beans, guacamole, sour cream, choice of protein', price:13.99, image:IMG.fi_tacos },
      ]},
    ]},

  { id:'r5', name:'The Crown Curry House', city:'London', country:'UK', image:IMG.indian, emoji:'🍛', rating:4.8, deliveryTime:'35-50', deliveryFee:3.99, minOrder:25, tags:['Indian','Curry','Asian'], badge:'Award Winning',
    menu:[
      { category:'Curries', items:[
        { id:'r5m1', name:'Butter Chicken', desc:'Tender chicken, rich tomato-cream sauce, aromatic spices', price:14.99, image:IMG.fi_curry },
        { id:'r5m2', name:'Lamb Rogan Josh', desc:'Slow-cooked lamb, Kashmiri chillies, whole spices', price:16.99, image:IMG.fi_curry },
        { id:'r5m3', name:'Palak Paneer', desc:'Cottage cheese, creamed spinach, ginger, garlic', price:13.99, image:IMG.fi_curry },
        { id:'r5m4', name:'Prawn Masala', desc:'Tiger prawns, tomato, coconut milk, curry leaves', price:18.99, image:IMG.fi_seafood },
      ]},
      { category:'Breads & Rice', items:[
        { id:'r5b1', name:'Garlic Naan', desc:'Clay-oven baked, butter & garlic', price:3.49, image:IMG.fi_bread },
        { id:'r5b2', name:'Lamb Biryani', desc:'Basmati rice, whole spices, caramelized onions, raita', price:17.99, image:IMG.fi_rice },
      ]},
    ]},

  { id:'r6', name:'Brixton BBQ', city:'London', country:'UK', image:IMG.bbq, emoji:'🥩', rating:4.7, deliveryTime:'30-45', deliveryFee:3.49, minOrder:22, tags:['BBQ','American','Grills'], badge:'New',
    menu:[
      { category:'Smoked Meats', items:[
        { id:'r6m1', name:'Baby Back Ribs', desc:'12-hour smoked, house dry rub, bourbon BBQ sauce', price:22.99, image:IMG.fi_bbq },
        { id:'r6m2', name:'Brisket Platter', desc:'Texas-style smoked beef brisket, pickles, white bread', price:19.99, image:IMG.fi_steak },
        { id:'r6m3', name:'Pulled Pork Sandwich', desc:'Slow-smoked shoulder, apple cider slaw, brioche bun', price:13.99, image:IMG.fi_bbq },
      ]},
      { category:'Sides', items:[
        { id:'r6s1', name:'Mac & Cheese', desc:'Three-cheese sauce, breadcrumb crust', price:7.99, image:IMG.fi_pasta },
        { id:'r6s2', name:'Cornbread', desc:'Honey butter, jalapeño', price:4.99, image:IMG.fi_bread },
      ]},
    ]},

  { id:'r7', name:'Sakura Sushi & Ramen', city:'Tokyo', country:'Japan', image:IMG.japanese, emoji:'🍣', rating:4.9, deliveryTime:'25-40', deliveryFee:3.99, minOrder:25, tags:['Japanese','Sushi','Ramen'], badge:'Top Rated',
    menu:[
      { category:'Sushi Rolls', items:[
        { id:'r7m1', name:'Dragon Roll', desc:'Shrimp tempura, cucumber, avocado, unagi sauce', price:16.99, image:IMG.fi_sushi },
        { id:'r7m2', name:'Spicy Tuna Roll', desc:'Fresh tuna, spicy mayo, cucumber, sesame', price:14.99, image:IMG.fi_sushi },
        { id:'r7m3', name:'Rainbow Roll', desc:'California roll topped with assorted sashimi', price:18.99, image:IMG.fi_sushi },
      ]},
      { category:'Ramen & Sides', items:[
        { id:'r7r1', name:'Tonkotsu Ramen', desc:'12-hour pork broth, chashu, soft egg, bamboo shoots', price:13.99, image:IMG.fi_noodles },
        { id:'r7r2', name:'Spicy Miso Ramen', desc:'Rich miso broth, ground pork, corn, butter', price:13.49, image:IMG.fi_noodles },
        { id:'r7s2', name:'Gyoza (6pc)', desc:'Pan-fried pork & cabbage dumplings, ponzu dip', price:7.99, image:IMG.fi_dumpling },
      ]},
    ]},

  { id:'r8', name:'Osaka Street Eats', city:'Osaka', country:'Japan', image:IMG.japanese, emoji:'🥡', rating:4.6, deliveryTime:'20-35', deliveryFee:2.49, minOrder:15, tags:['Japanese','Street Food','Noodles'], badge:'Popular',
    menu:[
      { category:'Street Bites', items:[
        { id:'r8m1', name:'Okonomiyaki', desc:'Savory pancake, pork belly, bonito, Japanese mayo', price:11.99, image:IMG.fi_noodles },
        { id:'r8m2', name:'Yakisoba', desc:'Stir-fried wheat noodles, pork, vegetables', price:10.99, image:IMG.fi_noodles },
        { id:'r8m3', name:'Karaage (6pc)', desc:'Japanese fried chicken, kewpie mayo, lemon', price:10.99, image:IMG.fi_chicken },
      ]},
      { category:'Rice Bowls', items:[
        { id:'r8d1', name:'Oyakodon', desc:'Chicken & egg rice bowl, dashi broth, mitsuba', price:11.99, image:IMG.fi_rice },
        { id:'r8d2', name:'Katsudon', desc:'Crispy pork cutlet, egg, onion, rice bowl', price:12.99, image:IMG.fi_rice },
      ]},
    ]},

  { id:'r9', name:'Mumbai Masala', city:'Mumbai', country:'India', image:IMG.indian, emoji:'🫕', rating:4.7, deliveryTime:'30-50', deliveryFee:1.49, minOrder:10, tags:['Indian','Street Food','Vegetarian'], badge:'Veg Friendly',
    menu:[
      { category:'Street Food', items:[
        { id:'r9m1', name:'Vada Pav', desc:'Spiced potato fritter, green chutney, soft pav bun', price:4.99, image:IMG.fi_curry },
        { id:'r9m2', name:'Pav Bhaji', desc:'Spiced vegetable mash, butter-toasted pav, onion', price:7.99, image:IMG.fi_curry },
        { id:'r9m3', name:'Chole Bhature', desc:'Spiced chickpeas, deep-fried bread, pickle', price:11.99, image:IMG.fi_curry },
      ]},
      { category:'Mains & Drinks', items:[
        { id:'r9c1', name:'Dal Makhani', desc:'Black lentils, cream, butter, slow-cooked overnight', price:10.99, image:IMG.fi_soup },
        { id:'r9sw2', name:'Mango Lassi', desc:'Alphonso mango, yogurt, cardamom', price:4.49, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r10', name:'Spice Route Delhi', city:'New Delhi', country:'India', image:IMG.indian, emoji:'🌶️', rating:4.8, deliveryTime:'25-45', deliveryFee:1.99, minOrder:15, tags:['North Indian','Mughlai','Tandoor'], badge:'Authentic',
    menu:[
      { category:'Tandoor', items:[
        { id:'r10m1', name:'Tandoori Chicken', desc:'Half chicken, yogurt-spice marinade, mint chutney', price:14.99, image:IMG.fi_chicken },
        { id:'r10m2', name:'Seekh Kebab', desc:'Minced lamb, fresh herbs, onion rings — 4 pcs', price:12.99, image:IMG.fi_kebab },
      ]},
      { category:'Mains', items:[
        { id:'r10c1', name:'Mutton Rogan Josh', desc:'Slow-cooked lamb, Kashmiri spices, saffron', price:17.99, image:IMG.fi_curry },
        { id:'r10c2', name:'Chicken Biryani', desc:'Basmati, whole spices, dum-cooked, raita', price:16.99, image:IMG.fi_rice },
        { id:'r10c3', name:'Shahi Paneer', desc:'Cottage cheese, creamy tomato, cashew gravy', price:13.99, image:IMG.fi_curry },
      ]},
    ]},

  { id:'r11', name:'Trattoria Bella Roma', city:'Rome', country:'Italy', image:IMG.pizza, emoji:'🍕', rating:4.9, deliveryTime:'30-45', deliveryFee:3.99, minOrder:20, tags:['Italian','Pizza','Pasta'], badge:'Authentic',
    menu:[
      { category:'Pizzas', items:[
        { id:'r11p1', name:'Pizza Quattro Stagioni', desc:'Artichokes, olives, mushrooms, prosciutto cotto', price:17.99, image:IMG.fi_pizza },
        { id:'r11p2', name:'Pizza Carbonara', desc:'Egg yolk, guanciale, Pecorino, no tomato', price:16.99, image:IMG.fi_pizza },
        { id:'r11p3', name:'Pizza Bianca', desc:'Ricotta, mozzarella, truffle oil, fresh rocket', price:15.99, image:IMG.fi_pizza },
      ]},
      { category:'Risotto & Desserts', items:[
        { id:'r11r1', name:'Risotto ai Funghi', desc:'Arborio, porcini, white wine, Parmigiano', price:16.99, image:IMG.fi_rice },
        { id:'r11d1', name:'Gelato (3 scoops)', desc:'Pistachio, stracciatella, or hazelnut', price:6.99, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r12', name:'Café de Paris', city:'Paris', country:'France', image:IMG.french, emoji:'🥐', rating:4.8, deliveryTime:'30-50', deliveryFee:4.49, minOrder:22, tags:['French','Bistro','Brunch'], badge:'Gourmet',
    menu:[
      { category:'Brunch Classics', items:[
        { id:'r12m1', name:'Croque Madame', desc:'Toasted ham & cheese, Mornay sauce, fried egg on top', price:13.99, image:IMG.fi_bread },
        { id:'r12m2', name:'Eggs Benedict', desc:'Poached eggs, Canadian bacon, hollandaise, toasted muffin', price:14.99, image:IMG.fi_bread },
        { id:'r12m3', name:'French Onion Soup', desc:'Caramelized onion broth, Gruyère crouton', price:11.99, image:IMG.fi_soup },
      ]},
      { category:'Mains & Pastries', items:[
        { id:'r12c2', name:'Steak Frites', desc:'250g entrecôte, pommes frites, béarnaise sauce', price:24.99, image:IMG.fi_steak },
        { id:'r12p1', name:'Assorted Croissants (3)', desc:'Butter, almond, or pain au chocolat', price:7.99, image:IMG.fi_bread },
        { id:'r12p2', name:'Crème Brûlée', desc:'Classic vanilla, caramelized sugar crust', price:8.99, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r14', name:'Dragon Palace', city:'Shanghai', country:'China', image:IMG.chinese, emoji:'🥢', rating:4.8, deliveryTime:'25-40', deliveryFee:2.99, minOrder:18, tags:['Chinese','Dim Sum','Cantonese'], badge:'Top Rated',
    menu:[
      { category:'Dim Sum', items:[
        { id:'r14m1', name:'Har Gow (4pc)', desc:'Crystal shrimp dumplings, thin translucent skin', price:7.99, image:IMG.fi_dumpling },
        { id:'r14m2', name:'Siu Mai (4pc)', desc:'Pork & shrimp open dumplings, tobiko', price:7.99, image:IMG.fi_dumpling },
        { id:'r14m3', name:'Char Siu Bao (3pc)', desc:'Steamed BBQ pork buns, fluffy dough', price:6.99, image:IMG.fi_bread },
      ]},
      { category:'Mains', items:[
        { id:'r14c1', name:'Mapo Tofu', desc:'Silken tofu, Sichuan peppercorn, minced pork, doubanjiang', price:12.99, image:IMG.fi_soup },
        { id:'r14c2', name:'Sweet & Sour Pork', desc:'Crispy pork, bell peppers, pineapple, signature sauce', price:13.99, image:IMG.fi_noodles },
        { id:'r14c3', name:'Peking Duck (half)', desc:'Crispy skin, pancakes, hoisin, cucumber, scallion', price:28.99, image:IMG.fi_chicken },
      ]},
    ]},

  { id:'r15', name:'Sabai Dee Thai', city:'Bangkok', country:'Thailand', image:IMG.thai, emoji:'🍲', rating:4.7, deliveryTime:'25-40', deliveryFee:2.99, minOrder:15, tags:['Thai','Spicy','Asian'], badge:'Spicy',
    menu:[
      { category:'Thai Classics', items:[
        { id:'r15m1', name:'Pad Thai', desc:'Rice noodles, egg, bean sprouts, peanuts, tamarind sauce', price:12.99, image:IMG.fi_noodles },
        { id:'r15m2', name:'Green Curry', desc:'Coconut milk, Thai eggplant, kaffir lime, basil', price:13.99, image:IMG.fi_curry },
        { id:'r15m3', name:'Tom Yum Goong', desc:'Spicy-sour prawn soup, lemongrass, galangal', price:11.99, image:IMG.fi_soup },
      ]},
      { category:'Street Food', items:[
        { id:'r15s1', name:'Mango Sticky Rice', desc:'Glutinous rice, fresh mango, coconut cream', price:7.99, image:IMG.fi_dessert },
        { id:'r15s2', name:'Satay Chicken (4pc)', desc:'Grilled skewers, peanut sauce, pickled cucumber', price:9.99, image:IMG.fi_chicken },
      ]},
    ]},

  { id:'r16', name:'Bondi Beach Grill', city:'Sydney', country:'Australia', image:IMG.seafood, emoji:'🦞', rating:4.6, deliveryTime:'25-40', deliveryFee:3.49, minOrder:20, tags:['Seafood','Grill','Australian'], badge:'Fresh',
    menu:[
      { category:'Seafood', items:[
        { id:'r16m1', name:'Grilled Barramundi', desc:'Lemon-herb, sweet potato mash, broccolini, caper butter', price:22.99, image:IMG.fi_seafood },
        { id:'r16m2', name:'Fish & Chips', desc:'Beer-battered flathead, thick-cut chips, tartare, lemon', price:16.99, image:IMG.fi_seafood },
        { id:'r16m3', name:'Prawn Slider (3)', desc:'Crispy prawns, yuzu mayo, pickled slaw, brioche', price:16.99, image:IMG.fi_seafood },
      ]},
      { category:'Burgers', items:[
        { id:'r16b1', name:'Aussie Burger', desc:'Beef, beetroot, egg, pineapple, bacon, fried onion', price:14.99, image:IMG.fi_burger },
      ]},
    ]},

  { id:'r17', name:'Churrascaria Rio', city:'São Paulo', country:'Brazil', image:IMG.bbq, emoji:'🥩', rating:4.8, deliveryTime:'30-50', deliveryFee:3.49, minOrder:20, tags:['Brazilian','BBQ','Churrasco'], badge:'Trending',
    menu:[
      { category:'Churrasco', items:[
        { id:'r17m1', name:'Picanha', desc:'Top sirloin cap, coarse salt, chimichurri', price:26.99, image:IMG.fi_steak },
        { id:'r17m2', name:'Fraldinha', desc:'Flank steak, slow-grilled, farofa, vinaigrette', price:21.99, image:IMG.fi_steak },
        { id:'r17m3', name:'Costela de Boi', desc:'Beef ribs, 8-hour slow fire, pit BBQ', price:28.99, image:IMG.fi_bbq },
      ]},
      { category:'Sides & Drinks', items:[
        { id:'r17s1', name:'Feijoada', desc:'Black bean stew, pork, farofa, orange slices', price:15.99, image:IMG.fi_soup },
        { id:'r17d1', name:'Açaí Bowl', desc:'Amazon açaí, banana, granola, honey', price:9.99, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r18', name:'Al Mandi Palace', city:'Dubai', country:'UAE', image:IMG.arabic, emoji:'🍖', rating:4.9, deliveryTime:'35-55', deliveryFee:4.99, minOrder:30, tags:['Arabic','Mandi','Halal'], badge:'Halal',
    menu:[
      { category:'Mandi & Grills', items:[
        { id:'r18m1', name:'Chicken Mandi', desc:'Slow-smoked whole chicken, fragrant rice, tomato sauce, salad', price:18.99, image:IMG.fi_chicken },
        { id:'r18m2', name:'Lamb Mandi', desc:'Tender whole leg of lamb on spiced rice, tangy salsa', price:24.99, image:IMG.fi_kebab },
        { id:'r18m3', name:'Mixed Grill Platter', desc:'Chicken, lamb chops, kofta, seekh, rice & salads', price:32.99, image:IMG.fi_kebab },
      ]},
      { category:'Mezze & Desserts', items:[
        { id:'r18me1', name:'Hummus & Khubz', desc:'Creamy hummus, olive oil, paprika, fresh Arabic bread', price:7.99, image:IMG.fi_bread },
        { id:'r18me2', name:'Fattoush Salad', desc:'Crispy bread, cucumber, tomato, pomegranate, sumac dressing', price:8.99, image:IMG.fi_salad },
        { id:'r18me3', name:'Kunafa', desc:'Cheese pastry, sugar syrup, pistachios, rose water', price:9.99, image:IMG.fi_dessert },
      ]},
    ]},

  { id:'r19', name:'Casa Tapas Barcelona', city:'Barcelona', country:'Spain', image:IMG.italian, emoji:'🥘', rating:4.7, deliveryTime:'30-45', deliveryFee:3.99, minOrder:20, tags:['Spanish','Tapas','Mediterranean'], badge:'New',
    menu:[
      { category:'Tapas', items:[
        { id:'r19m1', name:'Patatas Bravas', desc:'Crispy potatoes, spicy tomato sauce, aioli', price:7.99, image:IMG.fi_fries },
        { id:'r19m2', name:'Gambas al Ajillo', desc:'Garlic prawns, olive oil, white wine, chilli, bread', price:13.99, image:IMG.fi_seafood },
        { id:'r19m3', name:'Croquetas (4pc)', desc:'Jamón ibérico béchamel croquettes, crispy golden', price:9.99, image:IMG.fi_chicken },
      ]},
      { category:'Mains', items:[
        { id:'r19c1', name:'Paella Valenciana', desc:'Saffron rice, rabbit, chicken, rosemary, socarrat', price:19.99, image:IMG.fi_rice },
        { id:'r19c2', name:'Cochinillo Asado', desc:'Segovian roast suckling pig, crispy skin, green salad', price:26.99, image:IMG.fi_bbq },
      ]},
    ]},

  { id:'r20', name:'Istanbul Kebab House', city:'Istanbul', country:'Turkey', image:IMG.turkish, emoji:'🥙', rating:4.8, deliveryTime:'20-35', deliveryFee:2.99, minOrder:15, tags:['Turkish','Kebab','Grills'], badge:'Authentic',
    menu:[
      { category:'Kebabs', items:[
        { id:'r20m1', name:'Adana Kebab', desc:'Minced lamb, red pepper, charcoal grill, flatbread, salad', price:14.99, image:IMG.fi_kebab },
        { id:'r20m2', name:'Döner Plate', desc:'Shaved lamb & beef döner, rice, grilled tomato, yogurt', price:13.99, image:IMG.fi_kebab },
        { id:'r20m3', name:'Iskender Kebab', desc:'Thinly sliced döner on pide, tomato sauce, butter, yogurt', price:15.99, image:IMG.fi_kebab },
      ]},
      { category:'Sides & Desserts', items:[
        { id:'r20s1', name:'Mercimek Çorbası', desc:'Red lentil soup, cumin, paprika butter, lemon', price:5.99, image:IMG.fi_soup },
        { id:'r20s2', name:'Baklava (3pc)', desc:'Layers of filo, walnuts, pistachio, honey syrup', price:7.99, image:IMG.fi_dessert },
      ]},
    ]},
];

// ── HELPERS ──────────────────────────────────
function getAllRestaurants() { return RESTAURANTS; }
function getRestaurantById(id) { return RESTAURANTS.find(r => r.id === id) || null; }
function getFeaturedRestaurants(n=6) { return RESTAURANTS.filter(r=>['Top Rated','Popular','Award Winning','Trending'].includes(r.badge)).slice(0,n); }
function searchRestaurants(query, filter) {
  let list = [...RESTAURANTS];
  if (query) { const q=query.toLowerCase(); list=list.filter(r=>r.name.toLowerCase().includes(q)||r.city.toLowerCase().includes(q)||r.country.toLowerCase().includes(q)||r.tags.some(t=>t.toLowerCase().includes(q))); }
  if (filter&&filter!=='all') list=list.filter(r=>r.tags.some(t=>t.toLowerCase().includes(filter.toLowerCase()))||r.country.toLowerCase()===filter.toLowerCase());
  return list;
}
function getItemImage(item) {
  return item.image || IMG.fi_curry;
}
