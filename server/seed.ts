import { storage, connectDB } from "./storage";

const CATEGORIES = [
  {
    id: "drinks",
    name: "Drinks",
    description: "Our aloe vera drinks are the cornerstone of Forever Living. Harvested from our own aloe fields and processed within hours, these drinks deliver the pure inner leaf gel in its most potent form.",
    image: "/images/drinks-category-bg.png",
  },
  {
    id: "bee",
    name: "Bee Products",
    description: "Forever's bee products harness the natural power of the hive. Our bee pollen, royal jelly, and propolis are carefully collected and processed to preserve their natural benefits.",
    image: "/images/bee-category-bg.png",
  },
  {
    id: "nutritionals",
    name: "Nutritionals",
    description: "Our nutritional supplements are formulated with premium ingredients to support your daily health and wellness goals.",
    image: "/images/nutritionals-category-bg.png",
  },
  {
    id: "weight-management",
    name: "Weight Management",
    description: "Achieve your health and fitness goals with our science-backed weight management products designed to support healthy metabolism and energy.",
    image: "/images/weight-management-category-bg.png",
  },
  {
    id: "skincare",
    name: "Skincare",
    description: "Pamper your skin with our natural skincare line featuring aloe vera and other botanicals for healthy, glowing skin.",
    image: "/images/skincare-category-bg.png",
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Essential personal care products for daily wellness and hygiene with the natural benefits of aloe vera.",
    image: "/images/personal-care-category-bg.png",
  },
  {
    id: "household",
    name: "Household",
    description: "Keep your home clean and fresh with our eco-friendly household products made with natural ingredients.",
  },
];

const PRODUCTS = [
  {
    id: "715",
    name: "Forever Aloe Vera Gel",
    description: "Imagine slicing open an aloe leaf and consuming the gel directly from the plant. Our Forever Aloe Vera Gel is as close to the real thing as you can get! Aloe vera has natural cleansing abilities that help the digestive tract absorb nutrients from the foods we eat into the blood stream, while promoting friendly bacteria growth. The unique polysaccharide, acemannan, and other nutrients in aloe help to support the immune system. In fact, acemannan is one of the key markers used by the IASC to indicate quality aloe vera and Forever Aloe Vera Gel has nearly double the amount required for certification!",
    shortDescription: "The power of Aloe, as nature intended",
    image: "/images/products/aloe-vera-gel.png",
    category: "Drinks",
    categoryId: "drinks",
    features: [
      "99.7% pure inner leaf aloe vera gel",
      "No added preservatives",
      "Supports healthy digestion",
      "Promotes immune health",
      "Supports nutrient absorption",
      "Helps maintain natural energy levels",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans",
      "IASC Certified, Kosher Certified"
    ],
    benefits: [
      "Supports digestive health",
      "Promotes immune system function",
      "Helps maintain natural energy levels",
      "Assists nutrient absorption",
      "Supports overall wellness"
    ],
    ingredients: "Aloe Vera Inner Leaf Juice (Aloe Vera Inner Leaf Gel (99.7%), Antioxidant (INS 300), Acidity Regulator (INS 330))",
    usage: "Shake well. Refrigerate after opening. 1 Liter"
  },
  {
    id: "716",
    name: "Forever Aloe Vera Gel TriPak (Pack of 3 Minis)",
    description: "Imagine slicing open an aloe leaf and consuming the gel directly from the plant. Our Forever Aloe Vera Gel is as close to the real thing as you can get! Three of our aloe vera gel minis are equal to one full-size bottle and can be purchased in a TriPak. Packaged in mini bottles for convenience.",
    shortDescription: "Aloe as nature intended",
    image: "/images/products/aloe-vera-gel-tripak.png",
    category: "Drinks",
    categoryId: "drinks",
    features: [
      "99.7% pure inner leaf aloe vera gel",
      "No added preservatives",
      "Supports healthy digestion",
      "Promotes immune health",
      "Supports nutrient absorption",
      "Helps maintain natural energy levels",
      "Packaged in mini bottles for convenience",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans"
    ],
    benefits: [
      "Convenient on-the-go packaging",
      "Supports digestive health",
      "Promotes immune function",
      "Helps maintain energy levels"
    ],
    ingredients: "Aloe Vera Inner Leaf Juice (Aloe Vera Inner Leaf Gel (99.7%), Antioxidant (INS 300), Acidity Regulator (INS 330))",
    usage: "Shake well. Refrigerate after opening. 330 mL (pack of 3)"
  },
  {
    id: "734",
    name: "Forever Aloe Berry Nectar",
    description: "The refreshing zing of cranberries is paired with the sweet notes of apples for a fresh take on our aloe gel. The result is a refreshing drink that not only aids in digestion but is packed with phytonutrients and vitamins. A burst of cranberries and sweet apples provide a naturally derived, tangy flavor. Superfood cranberry packs antioxidant power shown to be 20 times higher than that of vitamin C and has proanthocyanidins that provide urinary health and support in addition to vitamin C.",
    shortDescription: "All the benefits with a beautiful berry kick",
    image: "/images/products/aloe-berry-nectar.png",
    category: "Drinks",
    categoryId: "drinks",
    features: [
      "90.7% pure inner leaf aloe vera gel",
      "No added preservatives",
      "Supports healthy digestion",
      "Promotes a healthy immune system",
      "Helps maintain natural energy levels",
      "Cranberries support urinary health",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans"
    ],
    benefits: [
      "Supports urinary tract health",
      "Rich in antioxidants",
      "Promotes digestive wellness",
      "Helps maintain energy levels"
    ],
    ingredients: "Aloe Vera Inner Leaf Juice (91%) [Aloe Vera Inner Leaf Gel, Antioxidant (INS 300), Acidity Regulator (INS 330)], Apple Juice Concentrate (4%) (22.2 mL Apple Juice Equivalent), Fructose, Cranberry Juice Concentrate (2%) (13.3 mL Cranberry Juice Equivalent)",
    usage: "Shake well. Refrigerate after opening. 1 Liter"
  },
  {
    id: "777",
    name: "Forever Aloe Peaches",
    description: "Forever has paired the sweet, succulent taste of sun-ripened peaches with all the benefits of pure inner leaf aloe vera gel. The result is a flavorful drink that not only aids in digestion but is packed with nutrients and antioxidants. Pure stabilized inner leaf aloe vera gel is paired with juicy peach puree for a robust drink with a sweet taste that's high in vitamins, antioxidants and boasts all the nutritional benefits of aloe.",
    shortDescription: "The benefits of aloe with sun-ripened peaches",
    image: "/images/products/aloe-peaches.png",
    category: "Drinks",
    categoryId: "drinks",
    features: [
      "84.5% pure aloe vera gel",
      "No added preservatives",
      "Supports healthy digestion",
      "Promotes healthy immune system",
      "Helps maintain natural energy levels",
      "Sun ripened peaches for added flavor and nutrition",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans"
    ],
    benefits: [
      "Delicious peach flavor",
      "Supports digestive health",
      "Rich in vitamins and antioxidants",
      "Natural energy support"
    ],
    ingredients: "Aloe Vera Juice (84%) [Aloe Vera Inner Leaf Gel, Antioxidant (INS 300), Acidity Regulator (INS 330)], Peach Puree (8.5%) (8.5 mL Peach Juice Equivalent), Fructose, Grape Juice Concentrate (3%) (12.8 mL Grape Juice Equivalent)",
    usage: "Shake well. Refrigerate after opening. 1 Liter"
  },
  {
    id: "736",
    name: "Forever Aloe Mango",
    description: "What's better than the juicy sweetness of a perfectly ripe mango? How about combining this delicious and healthy fruit with pure aloe vera gel from Forever's aloe fields! All-new Forever Aloe Mango adds a tropical twist to our line of delicious and healthy aloe vera drinks to put the sun in your glass. Forever Aloe Mango features all the benefits of our flagship Forever Aloe Vera Gel with 86% pure aloe vera gel and an extra kick of flavor that comes from natural, tropical mango puree.",
    shortDescription: "Everything you love about aloe with delicious natural mango",
    image: "/images/products/aloe-mango.png",
    category: "Drinks",
    categoryId: "drinks",
    features: [
      "86% pure aloe vera gel",
      "No added preservatives",
      "Source of vitamin C",
      "Delicious natural mango puree for added flavor",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans"
    ],
    benefits: [
      "Tropical mango flavor",
      "Source of vitamin C",
      "Supports digestive health",
      "Helps immune system function"
    ],
    ingredients: "Aloe Vera Juice (86%) [Aloe Vera Inner Leaf Gel, Antioxidant (INS 300), Acidity Regulator (INS 330)], Mango Puree Concentrate (10.95%) (11.2 mL Mango Juice Equivalent), Fructose",
    usage: "Shake well. Refrigerate after opening. 1 Liter"
  },
  {
    id: "196",
    name: "Forever Freedom",
    description: "Forever Freedom has all the powerful benefits of the original Forever Aloe Vera Gel with a little something extra to keep you moving. We've carefully selected ingredients known to support healthy joints and comfortable movement. Whether you're kicking a ball across the field, reaching into a rug or tear across the finish line, reach first for a refreshing bottle of Forever Freedom for the perfect balance of nutrients to help your joints feel strong and lubricated! The aloe vera gel used in Forever Freedom is hand harvested from our own plantation and processed within hours to ensure you get the freshest, purest product to assist in nutrient absorption, support healthy digestion and provide a natural source of energy.",
    shortDescription: "Advanced joint support with all the benefits of aloe vera",
    image: "/images/products/forever-freedom.png",
    category: "Drinks",
    categoryId: "drinks",
    features: [
      "Supports joint function and mobility",
      "Helps maintain healthy cartilage",
      "Natural orange flavour",
      "Gluten free",
      "Gluten Free, Suitable for vegetarians"
    ],
    benefits: [
      "Supports joint health and mobility",
      "Helps maintain healthy cartilage",
      "Promotes comfortable movement",
      "Supports digestive health"
    ],
    ingredients: "Aloe Vera Juice (83.58%), Natural Flavour (Orange), Stabilizer (INS 420ii), Fructose, Glucosamine Sulphate (Standardized to 99.4% Glucosamine) (1.25%), Chondroitin Sulphate (1.17%), Methyl Sulfonyl Methane (0.6%), Antioxidant (INS 300, INS 307a), Acidity Regulator (INS 330), Preservative (INS 202, INS 211). Contains Crustacean.",
    usage: "Shake well. Refrigerate after opening. 1 Liter. This contains Sorbitol [INS 420ii]."
  },
  {
    id: "83",
    name: "Fab Forever Active Boost Citrus",
    description: "Fab Forever Active Boost Citrus is an energy drink that's made with natural ingredients so you can power up with energy that kicks in fast and lasts longer. When it feels like you're running on empty, why not harness the power of nature's fuel? Forever Active Boost Citrus has a delicious citrus flavour and natural caffeine that comes from Green coffee extracts. It's this blend of herbs that works with the other ingredients to provide long-lasting energy and alertness to help you charge up in the morning or power through an afternoon slump.",
    shortDescription: "Power your day with fast, long lasting energy from Green Coffee Extract",
    image: "/images/products/fab-active-boost.png",
    category: "Drinks",
    categoryId: "drinks",
    features: [
      "Natural Caffeine from Green Coffee Extract",
      "Ingredients derived from nature",
      "Powers up with fast, long lasting energy",
      "Loaded with essential B Vitamins",
      "Citrus flavor for that added taste"
    ],
    benefits: [
      "Fast, long-lasting energy",
      "Natural caffeine source",
      "Supports energy metabolism",
      "Refreshing citrus taste"
    ],
    ingredients: "Water, Sugar, Lemon Juice Concentrate (1.15%)^, Carbonating agent (INS 290), Energy Premix [Taurine, Caffeine (from natural source)‡‡ (0.03%), Inositol, Vitamins (B3, B6, B2, B12), Dextrose Monohydrate], Acidity Regulators (INS 331(iii), INS 330), Nature-Identical Flavouring Substances (Lemon), Preservative (INS 211), Stabilizer (INS 445, INS 418), Permitted synthetic food colour ( INS 102). ^Equivalent to 8.85% Fruit.",
    usage: "75mg/serving size (250ml) Consume not more than 500ml per day. Not recommended for children, pregnant or lactating women, persons sensitive to caffeine. 250ml"
  },
  {
    id: "207",
    name: "Forever Bee Honey",
    description: "There's only one thing you'll find in a bottle of Forever Bee Honey and that's pure sweetness from mountain bees that take a little longer to make their honey and this a fine wine, the added time lends our honey a more rich and complex flavor that's smooth, dark and delicious. Honey is a natural sweetener that has long been revered for its healthy and nutritional properties. In the calm and peaceful countryside where we harvest our honey, bees gather sweet nectar from lavender and rosemary or groves of orange to harvest the sweet nectar from the blossoms. As a result, you'll experience some of those notes in Forever Bee Honey, alongside essence of sacred spice. The flavors are so layered and complex, you'll discover something new to love every time you taste it. Honeybees are incredibly productive. They produce three to four times more honey than is needed to feed the hive for winter. That's why humans have been able to harvest the nutrition of the hive for thousands of years without imperiling the amazing little bee colony.",
    shortDescription: "A bottle of love from honeybees to you!",
    image: "",
    category: "Bee Products",
    categoryId: "bee",
    features: [
      "Natural energy booster",
      "100% natural",
      "Sweet, rich and smooth",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Natural energy source",
      "Rich in nutrients",
      "Smooth and delicious flavor",
      "Versatile sweetener"
    ],
    ingredients: "Honey",
    usage: "Consume one tablespoon(21g) or more, as desired or use as a sweetener for beverages, tea and food. Store in a cool, dry place. 500 g"
  },
  {
    id: "026",
    name: "Forever Bee Pollen",
    description: "Forever Bee Pollen packs all the power of pure bee pollen and honey for a combination of nutrition and energy straight from the hive! As they fly from blossom-to-blossom, bees pollinate plants and fuel our ecosystem. Bees ensure they get the nutrition they need to survive, which includes pollen. Harness the benefits of natural energy and stamina with Forever Bee Pollen. Our bee pollen supplement is a Forever favorite for good reason. It's an all-natural source of energy and nutrition to help power through your day and keeps your body going all day naturally. Typically, bee pollen is consumed as bland tasting granules sprinkled on food or chewed. No! Forever Bee Pollen, We've packed all that nutrition into an easy to take tablet by mixing it with smooth and delicious honey! Our bee pollen supplement is a Forever favorite for good reason. It's an all-natural source of energy and nutrition to help power through your day",
    shortDescription: "A bottle of love from honeybees to you!",
    image: "",
    category: "Bee Products",
    categoryId: "bee",
    features: [
      "Energy booster",
      "Bioactive compounds",
      "100% natural",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Natural energy boost",
      "Rich in nutrients",
      "Supports overall wellness",
      "Easy to take tablets"
    ],
    ingredients: "Bee Pollen (88.9%) [Honey, Glident [ Stearic Acid ], Royal Jelly(0.07%), Diluent [Maltodextrin]",
    usage: "Begin by taking 1/4 tablet daily, then gradually increase intake to one tablet twice a day. Consult your physician before taking this or any other dietary supplement. 100 Tablets"
  },
  {
    id: "9207",
    name: "Forever Tulsi Van Honey",
    description: "Experience the purity of single Flora Tulsi Honey, a natural golden elixir crafted from the nectar of blooming basil flowers. Sourced from pristine fields, this honey embodies the rich aroma and wellness benefits of tulsi, making it a perfect addition to your daily routine. Combine the essence of sacred Van Tulsi with the sweetness of honey. Immerse your senses in the aromatic notes of this rare and revered herb, while enjoying the nourishing benefits of honey. Indulge in nature's sweetness while embracing a healthier lifestyle with Forever Tulsi Van Honey. Taste the essence of tulsi in every drop!",
    shortDescription: "A bottle of love from honeybees to you!",
    image: "",
    category: "Bee Products",
    categoryId: "bee",
    features: [
      "Rich in anti oxidants",
      "100% natural",
      "Single Flora honey (Tulsi)",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Rich aroma and wellness benefits",
      "Natural energy source",
      "Perfect for daily routine",
      "Nourishing properties"
    ],
    ingredients: "Honey",
    usage: "Consume one tablespoon(21g) or more, as desired or use as a sweetener for beverages, tea and food. Store in a cool, dry place. 500 g"
  },
  {
    id: "473",
    name: "ARGI+ Powder with L-Arginine, Vitamins, & Fruit Extracts",
    description: "Forever's ARGI+™ packs a lot more power into every packet. The primary ingredient, L-Arginine, is a powerful amino acid that helps create nitric oxide. When L-Arginine is converted into nitric oxide, it plays an important supporting role in cardiovascular health by supporting optimal circulation of inner blood vessel created by nitric oxide not only promotes optimal circulation, but also plays an integral role in cell division and healthy immune function. ARGI+™ takes the cardiovascular benefits even further by including key heart-promoting nutrients. Vitamin D is essential for immunity and skeletal health while B vitamins contribute energy production and metabolism. We also added grape skin and pomegranate for their strong antioxidant properties.",
    shortDescription: "Convenient power pack of nutrition and performance",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Supports nitric oxide production",
      "Helps support the cardiovascular system",
      "Promotes athletic performance",
      "Delicious Berry flavor",
      "Gluten Free"
    ],
    benefits: [
      "Supports cardiovascular health",
      "Promotes healthy circulation",
      "Enhances athletic performance",
      "Supports immune function"
    ],
    ingredients: "L-Arginine (51.0%), Anti-caking Agent (INS 330), Maltodextrin, Fructooligosaccharides, Acidity Regulator (INS 330), Natural Flavour (Mixed Berry), Mixed Fruit, Bilberry (Vaccinium myrtillus) Extract (0.2%), Vitamins (C, B3, B5, B6, B2, B1, Folic Acid, D3, B12), Anthocyanin (0.21%), Pomegranate (Punica granatum) Fruit Extract (0.20%), Black Cherry (Prunus serotina) Extract (0.10%), Red Grape (Vitis vinifera) Fruit Skin Extract Concentrate. (0.01%)",
    usage: "Mix one packet of ARGI+™ with 8 fl. oz. (240 mL) of water or other beverage once daily. 30 Packets"
  },
  {
    id: "464",
    name: "Forever Fiber",
    description: "There's no question that fiber is a crucial part of a healthy diet. Yet with most people eating everyday life, it's sometimes difficult to get enough fiber from food alone. Another downside is that fiber rich foods are typically rich in calories as well! Wouldn't it be nice if there were a way to load up on fiber without loading up on calories? We know fiber! Fiber up on the go with Forever Fiber™. These convenient packets are ready to mix into your daily health routine. Flavorless and dissolve in an extra five grams of fiber with each serving of this easy-dissolving, grit-free formula. The pleasant, mild taste works well with any beverage, including your favorite aloe vera drinks.",
    shortDescription: "Quick-draw fiber on the go",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Supports healthy digestive function",
      "Promotes healthy bacteria growth",
      "Quick dissolving",
      "Mild, grit-free taste",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Supports digestive health",
      "Helps maintain regularity",
      "Promotes healthy gut bacteria",
      "Convenient on-the-go packets"
    ],
    ingredients: "Acacia gum, soluble corn fibre, soluble corn dextrin, fructooligosaccharides. This food is by its nature gluten-free. Contains Oligofructose (dietary fiber) 2 gm/100 gm.",
    usage: "Mix one packet of Forever Fiber™ with water, Forever Aloe Vera Gel™, or other beverage daily. For best results, pour contents of one packet into a glass, add your beverage of choice and mix thoroughly. You can also sprinkle on food. 30 Packets"
  },
  {
    id: "264",
    name: "Forever Active HA",
    description: "Nourish your joints and keep your athletic lifestyle going strong with Forever Active HA™. This advanced blend of joint-supporting ingredients, like the beneficial ginger oil and turmeric root, play an important role in Forever Active HA™ alongside the powerful addition of hyaluronic acid (HA). Hyaluronic acid is a special protein created in our bodies that works to lubricate and cushion joints. Our innovative formula uses a unique form of low molecular weight hyaluronic acid to promote promoting joint health and function, this substance supports skin hydration and can hold up to 1,000 times its volume in water!",
    shortDescription: "Advanced, natural joint health support",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Lubricates and cushions joints",
      "Promotes proper joint function",
      "Supports skin hydration",
      "Gluten Free"
    ],
    benefits: [
      "Supports joint health and mobility",
      "Helps maintain joint comfort",
      "Supports skin hydration",
      "Natural joint support formula"
    ],
    ingredients: "Vehicle (Soybean Oil), Ingredient of Capsule Shell (Gelatin), Humectant (INS 422), Turmeric (Curcuma longa), Rhizome Extract (standardized to 95% curcuminoids)(6.85%), Diluent (Maltodextrin), Ginger (Zingiber officinale) Extract (5.2%), Purified Water, Hyaluronic Acid (1.5%), Zinc Oxide, Emulsifier (INS 322(i)). Contains Soy.",
    usage: "Two softgels daily as a dietary supplement. 60 Softgels"
  },
  {
    id: "374",
    name: "Vit-lize Men Vitality Supplement",
    description: "Men, it's time to think about nutrition that's unique to you. This is especially true as you advance in age and balanced nutrition becomes even more important. Forever's Vit-lize™ is designed from the ground up exclusively for men. Blend of the highest quality herbs, vitamins and minerals to support male vitality for men. This unique formulation works to maintain normal testosterone levels and fertility reproduction. Vitamin C and B6 work to reduce tiredness and fatigue, while vitamin D contributes to the maintenance of hormonal activity. Includes high levels of Selenium and Zinc which can help support normal spermatogenesis, fertility, reproduction and testosterone levels in the blood. It contains Pumpkin and full of valuable nutrients, high in anti-oxidant and improves bladder and urinary health. Pomegranates are rich in Vitamin C, minerals and bioactive plant compounds and are good for prostate health.",
    shortDescription: "Men's vitality supplement",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Softgel with Vitamins, Minerals, Pumpkin Seed Oil, Pomegranate Skin Extract, and Lycopene",
      "Helps maintain normal testosterone levels and fertility reproduction",
      "Blend of balanced critical nutrients",
      "Designed specifically for men's health",
      "Gluten Free"
    ],
    benefits: [
      "Supports male vitality and energy",
      "Helps maintain hormonal balance",
      "Supports reproductive health",
      "Promotes prostate health"
    ],
    ingredients: "Vehicle (Olive Oil,Corn oil, Soybean oil, coconut oil), Ingredient of Capsule Shell ( Gelatin),Pumpkin (Cucurbita pepo) Seed Oil (3.0%), Humectant (INS 422), Pomegranate (Punica granatum ) skin extract (5.6%) Vitamins, purified water, zinc gluconate, Colour (INS 171, INS 172), Lycopene (1.1%), Diluent (Corn Starch, Sunset), Corn Starch, Colour ( INS 104), Antioxidant (INS 301)",
    usage: "One softgel daily as a dietary supplement. 60 Softgels"
  },
  {
    id: "039",
    name: "Forever Arctic Sea",
    description: "Forever Arctic Sea is a proprietary blend of DHA Calamari Oil and Olive Oil. This unique blend provides Omega 3 fatty acids EPA and DHA plus Oleic acid. This is a safe and effective way to add omega-3s that can favorably support healthy blood cholesterol and triglyceride levels. Forever Living Products has been at the forefront of the nutritional products industry, with products consistently recognized for quality, purity and effectiveness. Forever Arctic Sea follows this tradition. Backed by clinical studies and worldwide acceptance in optimal amount of essential fatty acid. Forever Arctic Sea has now made an even better formula by providing balanced blend of DHA and EPA Fatty Acids. Forever Arctic Sea™ features an exclusive blend of fish oil and olive oil to provide the perfect balance of DHA with fish oil in Forever Arctic Sea™ provides 33% more DHA in a harmony of EPA and DHA omega-3 fatty acids that your body may be lacking. Together, the EPA and DHA in Forever Arctic Sea™ work in easy harmony to support health and wellness throughout the body, including cardiovascular and immune function. Research has also shown that DHA can help support brain health and optimal cognition. It gives your body the nutrition through a perfectly balanced blend of Omega-3s.",
    shortDescription: "A perfectly balanced blend of omega-3s",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Supports a healthy heart",
      "Supports optimal cognition",
      "Exclusive blend of omega-3s",
      "Pure source of EPA and DHA",
      "Gluten Free"
    ],
    benefits: [
      "Supports cardiovascular health",
      "Promotes brain health and cognition",
      "Supports healthy inflammation response",
      "Balanced omega-3 fatty acids"
    ],
    ingredients: "Diluent (INS 4600, Corn Starch, Dextrose, Sucrose), Fructooligosaccharides(17.55%), Coating Agent (INS 464), Maltodextrin, Anticaking Agent (Mag. oleate) (Magnesium (officla tronsdose) Extract(3.42%) (Standardized to 20% Beta-Carotene), Leuclodrin (2.01%), Shiitake Mushroom (Lentinula edodes) Powder (2.18%), Geldant (Stearic Acid), Anticaking Agent (Mag. 470(vii), Demargrant (INS 468], Stabilizer (INS 322(i)), Antioxidant (INS 301, INS 307c), Vehicle (Soybean Oil). Contains Soy, Milk and Nut.",
    usage: "Take 1 softgel three times daily. 60 Softgels"
  },
  {
    id: "048",
    name: "Forever C Plus",
    description: "Vitamin C is an essential part of anyone's diet. It's the ultimate nutrient when it comes to staying healthy. Unfortunately, your body life has you on the go, getting enough fruits and vegetables to maintain optimal levels of this crucial vitamin is a challenge. That means most of us live with less than optimal that comes to having an adequate amount of vitamin C. Vitamin C is an antioxidant and one of the essential vitamins, helping your body protect itself against immune deficiencies, cardiovascular disease and prenatal health problems. It carries fight free radicals to protect your body from oxidative stress, which contributes to aging. Forever C Plus provides an easy, delicious and advanced way for you to make sure your body is getting your daily recommended value of vitamin C. This formulation contains Amla fruit and a blend of papaya. Amla fruit is one of the richest forms of Vitamin C and is absorbed easily and faster by the body. Hesperidin is a bioflavonoid found primarily in citrus fruits like Oranges, Lemons and Limes. Hesperidin works synergistically with Vitamin C on blood vessels. It helps build the immune system and fight allergies.",
    shortDescription: "Advanced daily Vitamin C delivery in a delicious tablet",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Fights free radicals and benefits skin and connective tissues",
      "Helps build the immune system and fight allergies",
      "Easy way to get daily dose of Vitamin C",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Powerful antioxidant protection",
      "Supports immune system health",
      "Promotes healthy skin and tissues",
      "Helps fight free radicals"
    ],
    ingredients: "Diluent (Sucrose, Dextrose, INS 4600), Maltodextrin, Isomaltulose, Amla(Emblica Officinalis) Dried Fruit Extract (6.22%), Natural Flavour (Orange & Citrus), Hesperidin (4.01%), Binding Agent (INS 412), Glidant (INS 470(iii))",
    usage: "Recommended Usage: One tablet to be taken by adults, two times a day. Not to exceed the stated recommended daily usage. 100 Tablets"
  },
  {
    id: "355",
    name: "Forever ImmuBlend",
    description: "Every day you are exposed to germs, bacteria and viruses. From the moment you touch a doorknob to shaking a friend's hand you are constantly being exposed to microscopic threats. Your immune system works around the clock to protect your body and keep you healthy. Show your immunity some love by strengthening its defenses with an ideal blend of nature's most powerful antioxidants. Forever ImmuBlend™ is an all-encompassing immune support supplement with a powerful combination of natural botanicals and immune-boosting ingredients. We've combined the best of science and nature to create a blend that supports all aspects of the immune system. What happens in your gut plays a key role in your overall health. Between 70 and 80 percent of your immune tissue is located in the digestive tract. Safeguarding your digestive health is the foundation of strengthening your immune system. That's why Forever ImmuBlend™ include both Fructooligosaccharides and lactoferrin to promote healthy levels of probiotic bacteria and support immune cell growth. But Forever ImmuBlend™ delivers immune boosting power beyond the digestive system. We took a full body approach to bringing you a comprehensive array of nutrients and ingredients. Vitamins C support immune cell production and cardiovascular function while vitamin D and zinc intake and shiitake mushroom can help strengthen immune cells.",
    shortDescription: "Fuel your defenses with complete immune support",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Supports and strengthens the immune system",
      "Full body approach to immune health",
      "Promotes immune cell production",
      "Helps strengthen immune cells",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Comprehensive immune system support",
      "Supports digestive health",
      "Promotes healthy immune response",
      "Strengthens body's natural defenses"
    ],
    ingredients: "Diluent (INS 4600, Corn Starch, Dextrose, Sucrose), Fructooligosaccharides(17.55%), Coating Agent (INS 464), Maltodextrin, Maitake Mushroom (Grifola frondosa) Extract (4.4%) (Standardized to 20% Beta-glucan Extract), Vitamins, Maitake Mushroom (Grifola frondosa) Powder (3.4%), Shiitake Mushroom (Lentinula edodes) Powder (2.18%), Glidant (Stearic Acid, Anticaking Agent (INS 470(iii), INS 551, INS 341, INS 340(i), Diluent (INS 1200), Colour (INS 171), Lactoferrin, Polydextrose, Fructooligosaccharides, Maitake Mushroom (Grifola frondosa) Extract. Contains Soy, Milk and Nut.",
    usage: "Take 1 tablets daily as a dietary supplement. 60 Tablets"
  },
  {
    id: "610",
    name: "Forever Active Pro-B",
    description: "Support your body like never before with the latest in scientific breakthroughs for digestive health. Forever Active Pro-B™ includes Bifidoblend™—a range of beneficial probiotic strains from Copenhagen University Hospital, a leader in the gastroenterology field. With a proprietary blend of 6 different strains, Forever Active Pro-B™ probiotic provides 8 billion CFU per serving. These strains were researched and selected based on their beneficial properties, clinical research and their ability to work synergistically. This formula also includes a prebiotic fiber to sustain the probiotics during storage, transport and delivery to the gut. Prebiotics provide the ideal environment for the probiotic to function and thrive. The prebiotic fiber selected is a short chain fructo-oligosaccharide that is known to support the growth of healthy bacteria used in the Forever Active Pro-B™ formula. We added zinc to the formula to provide another layer of support for your immune system. Studies show that zinc can play an important role and supports metabolism function. Give your body advanced digestive support with clinically-studied ingredients when you choose Forever Active Pro-B™!",
    shortDescription: "Support Your Digestive System",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Probiotic promoting a healthy digestive system",
      "Aids to bypass stomach acid for optimal delivery within the intestines",
      "Adds fiber to your diet",
      "Over 8 billion CFU",
      "Supports immunity",
      "Shares freeze dried for protection, potency and shelf stability",
      "Soy and allergen-free",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Supports digestive health",
      "Promotes healthy gut bacteria",
      "Supports immune function",
      "Helps maintain digestive balance"
    ],
    ingredients: "Own dextrin (53%), Capsule shell (INS 464), fructooligosaccharides (31%), Zinc gluconate. B. lactis (BLA DSM26332)(6%), B. Infantis (BIN DSM24674)(6%), B. longum (BLO DSM24636)(6%), B. lactobacillus (BLA DSM24679)(6%), L. acidophilus (LAC DSM24936)(6%), B. bifidum (BBI DSM24688)(6%), Anticaking Agent (INS 470(i))",
    usage: "Take one capsule daily with water 30 minutes before a meal. For best results, do not store at temperatures above 77 degrees F (25 degrees c). 30 Capsules"
  },
  {
    id: "031",
    name: "Forever AloeTurm",
    description: "Forever AloeTurm™ lozenges with Aloe Vera and Turmeric contain the world's most natural medicinal herbs with extracts for various health and wellness. Turmeric is a rhizome with natural antiseptic, antibacterial, antioxidant, anti-inflammatory coupled with analgesic and expectoratory properties. Aloe Vera is a xerophyte with antiseptic, antibacterial, antioxidant and anti-inflammatory actions. Together, they synergistically complement, act on complementary mechanisms to offer health benefits that aid immunity, oral hygiene, health, wound-healing, pain relief, sore throat, cough and general well-being. It is use effective for common cold, sore throat.",
    shortDescription: "Experience the goodness of Aloe Vera & Turmeric",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Globally Patented",
      "Proprietary ayurvedic medicine",
      "Natural and safe",
      "Sugar free",
      "Supports in building Immunity",
      "Helps in Pain relief",
      "Good for Oral hygiene",
      "Relieves sore throat and Cough"
    ],
    benefits: [
      "Supports immune system",
      "Natural anti-inflammatory",
      "Soothes throat discomfort",
      "Promotes oral health"
    ],
    ingredients: "Turmeric extract (Curcuma Longa) (rhizome), Aloe Vera extract (Aloe Barbadensis) (leaf)",
    usage: "Recommended Doses (Lozenges/day): Skin Health & Oral Hygiene: 2, Immunity : 1, Sore throat, Cold, Cough & Pain Relief: 3 to 4. 10N Lozenges"
  },
  {
    id: "065",
    name: "Forever Garlic-Thyme",
    description: "Both garlic and thyme have long histories of use for health purposes. Ancient civilizations believed garlic would keep them healthy and strong. Ancient Greeks added thyme to their bathwater and burned it as incense, believing it had properties that granted courage. Romans would eat thyme regularly, convinced that it was a harmful antidote to protect them if they were poisoned by an enemy. Forever Garlic-Thyme™ showcases nature's super duo of nutrition. Garlic supports cardiovascular health because it contains compounds that promote healthy circulation. When garlic is cut or crushed the enzymes react to produce a powerful immune enhancing agent. With Forever Garlic-Thyme™ you'll get all the benefits of 1,000mg of garlic! Thyme contains antioxidant compounds to fight oxidative stress and free radicals damage along with saponins, which promote healthy immune function. Together, these ingredients provide a potent fuel to support your body's defenses.",
    shortDescription: "Nature's superfood duo in a convenient softgel",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Helps promote cardiovascular function",
      "Helps provide immune support",
      "Odorless softgel",
      "Gluten Free"
    ],
    benefits: [
      "Supports cardiovascular health",
      "Promotes healthy circulation",
      "Supports immune function",
      "Powerful antioxidant properties"
    ],
    ingredients: "Vehicle (Canola Oil), Ingredient of Capsule Shell (Gelatin), Thyme (Thymus vulgaris) Leaf Powder (15.41%), Humectant (INS 422), Purified Water, Garlic (Allium sativum) Extract (3.08%), Emulsifier (INS 322(i)), Corn Syrup, Colour (INS 1505). Contains Soy.",
    usage: "One softgel, to be taken three times a day with meals by adults. 100 Softgels"
  },
  {
    id: "068",
    name: "Forever Fields of Greens",
    description: "Convenience eating can't always be avoided. Our fast-paced lifestyles have us reaching for food on the go, making it hard to eat the recommended amount of vitamins and nutrients. Forever Fields of Greens™ is a fast and easy way to cleanse and detoxify while providing the nutrients your body needs each day. Why are greens so important? Certain good foods are more than just an essential component of any diet. They contain important phytonutrients, enzymes, amino acids and chlorophyll. Wheatgrass, barley grass and alfalfa are three ingredients that have been shown to help cleanse and detoxify the body. Wheatgrass contains alkaline properties that help support a healthy lifestyle. Cayenne pepper helps your body maintain healthy digestion and circulation.",
    shortDescription: "Detoxify with the natural power of greens",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Cleanses and detoxifies",
      "Helps alkalize the body",
      "Complements an active and busy lifestyle",
      "Maintain healthy digestion and circulation",
      "Provides the nutrients your body needs each day",
      "Gluten Free"
    ],
    benefits: [
      "Supports natural detoxification",
      "Provides essential nutrients",
      "Helps maintain healthy digestion",
      "Supports overall wellness"
    ],
    ingredients: "Sorbitol, Vegetable Powders [Barley Grass Powder (19.65%), Wheat Grass Powder (19.65%), Alfalfa (Medicago sativa) Extract (19.65%)], Anticaking Agent (Magnesium Stearate, Stearic Acid), Cayenne (Capsicum annuum) Fruit Powder (0.27%). Contains Barley and Wheat.",
    usage: "One tablet to be taken twice a day by adults. 80 Tablets"
  },
  {
    id: "072",
    name: "Forever Lycium Plus",
    description: "Forever Lycium Plus™ is our perfectly balanced blend of ancient botanicals formulated to offer the best protection has to offer. Lycium, also known as goji berries or wolfberries, is a fruit that dates back centuries to ancient China, where it is known as the 'yin tonic.' This unassuming fruit contains incredible bounty. As the world knows today, lycium is one of the most beneficial and nutrient-rich foods in plant kingdom today. Licorice also tops the list as another herb with antioxidant benefits, containing more than 150 compounds known to have beneficial properties. Licorice has primarily been used as a complimentary herb that brings out the natural benefits in lycium, making it a great combination for lycium. For a modern twist on an ancient traditional herb, stock up on Forever Lycium Plus™ and feed your body the 'yin tonic.'",
    shortDescription: "Powerful antioxidant with a licorice extract boost",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Powerful antioxidant",
      "Beneficial to eyesight and skin",
      "Powerful tonic",
      "Good source of phytonutrients",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Rich in antioxidants",
      "Supports eye health",
      "Promotes healthy skin",
      "Traditional wellness support"
    ],
    ingredients: "Diluent (INS 4600, Dextrose), Lycium barbarum Standardized Fruit Concentrate Powder (41.61%), Licorice (Glycyrrhiza glabra) Extract (6%), Anticaking Agent (Stearic Acid, Magnesium Stearate, Maltodextrin, Tricalciumdiol), Disintegrant (INS 468)",
    usage: "One tablet, three times a day. Consult your doctor or health care professional before use if you have a medical condition. 100 Tablets"
  },
  {
    id: "037",
    name: "Forever Nature-Min",
    description: "You already know that multivitamins keep your body fueled with essential vitamins. But did you also know that minerals are just as important? Minerals play a vital role in everything from proper hydration to muscle contraction and even how our bodies heal. Yet the human body cannot replace its own lost minerals, so deficiencies need to be addressed with food or supplementation. Forever Nature-Min™ is our advanced supplement formula designed to help your body maintain its ultimate mineral levels with optimal levels of 10 essential and trace minerals. Our easily digestible supplement contains an ideal blend of both macro and trace minerals. Macro minerals are the ones your body needs in higher amounts, like magnesium and copper muscle function and electrolytes that help regulate fluid balance and hydration. Trace minerals are needed in smaller amounts, but that doesn't make them any less important. Zinc, for instance, is known to act as a catalyst for nearly 100 enzymes and assists in many crucial biological functions, including DNA and protein synthesis.",
    shortDescription: "A perfect multi-mineral blend",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Supports muscle, brain and thyroid function",
      "Helps regulate fluid balance",
      "Excellent source of electrolytes",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Provides essential minerals",
      "Supports healthy metabolism",
      "Promotes bone health",
      "Helps maintain fluid balance"
    ],
    ingredients: "Minerals, Diluent (INS 460 (i), Glidant (Stearic Acid), Disintegrant (INS 468)",
    usage: "Five tablets daily as a dietary supplement. 180 Tablets"
  },
  {
    id: "624",
    name: "Forever iVision",
    description: "In today's digital age, our eyes work harder than ever before. We count on hours of UV rays and pollution, but also subject our eyes to the blue light emitted from our computers, smartphones and televisions every day. Taking care of our eyes is more important than ever to protect them from damage and long-term concerns. And Forever iVision is the first line of defense, most diets fall far short of the recommended levels of eyesight nutrients and antioxidants. Introducing Forever iVision™, a breakthrough supplement designed to support eye health. Forever iVision™ provides clinically formulated with vitamins, antioxidant power, botanicals and scientifically-advanced ingredients. Forever iVision™ provides all three needed carotenoids specific to inner eye health. Bilberry extract delivers antioxidant compounds that play an important role in eye health. Reduced beta-carotene gives way to lutein and beta-carotene. A, a nutrient found in carrots and other foods that supports eye health and increases vitamin C's power. B, which works alongside vitamin C more bioavailable and helps to maintain healthy vision. If there's one nutrient that truly makes Forever iVision™ stand out, it's clinically-studied Lutemax® 2020. This powerful ingredient takes lutein to a whole new level by not only providing lutein to filter out blue light and combat screen time but also includes powerful zeaxanthin which supports the macula, particularly the macula where vision is the clearest, and manages the way your eyes process colors.",
    shortDescription: "Complete eye support for the digital age",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "Supports healthy vision",
      "Helps filter blue light from digital devices",
      "Supports visual processing speed",
      "Enhances glare recovery time",
      "Provides all three needed carotenoids specific to inner eye health",
      "Gluten Free"
    ],
    benefits: [
      "Comprehensive eye health support",
      "Protects against blue light",
      "Supports visual clarity",
      "Promotes healthy vision aging"
    ],
    ingredients: "Vehicle (Sunflower Oil, Canola Oil, Corn Oil, Soybean Oil), Ingredient of Capsule Shell (Gelatin, Purified Water) (INS 422), Lutemax® 2020™ (Sunflower Oil, Marigold (Tagetes erecta) L.) Petal Extract (7.6%) [Lutein (0.2%)(7.8%), Bilberry (Vaccinium myrtillus) Extract (Standardized to 10% Anthocyanins)(3.7%), Zinc Oxide, Purified Water, Bilberry (Vaccinium myrtillus) Concentrate, Zinc Oxide, D-Alpha-Tocopherol, Diluent (Maltodextrin), Beta-Carotene, Disintegrant (INS 322(i)), Antioxidant (INS 307c). Contains Fish and Soy.",
    usage: "One Softgel to be taken twice a day with meals by adult. 60 Softgel Tablets"
  },
  {
    id: "9601",
    name: "Forever Fast Break - Choco Almond",
    description: "Forever Fast Break Protein & Nut Energy Bars are your go-to solution for fulfilling nutritional needs on the go! Each bar is designed to boost energy levels and is packed with real fruits and nuts, providing a deliciously satisfying snack. With the added benefits of prebiotics it serves as not just a healthy protein source, these bars are perfect for anyone looking for a nutritious option without compromising on taste. They are free from preservatives, artificial flavors, and colors, ensuring that you're enjoying a wholesome, guilt-free treat that's 100% zero trans fat. Indulge in the rich, creamy flavor of Forever Fast Break - Choco Almond, featuring real almond bits and protein power with a combination of 20% protein per serving, it delivers the energy boost you need, while its high fiber content helps you feeling full and longer. The inclusion of prebiotics promotes gut health, ensuring that you feel your best throughout the day. Plus, the absence of preservatives and artificial flavors makes you can enjoy this treat without any guilt!",
    shortDescription: "Instant Energy Booster in 5 Delicious Flavours",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "20% protein per serving",
      "Real almonds for crunch",
      "High fiber content",
      "Contains prebiotics for gut health",
      "No preservatives or artificial flavors"
    ],
    benefits: [
      "Quick energy boost",
      "Supports muscle recovery",
      "Promotes satiety",
      "Convenient nutrition on-the-go"
    ],
    ingredients: "Protein Blend (20.5%) (Soy Nuggets, Isolated Soy Protein, Whey Protein Concentrate), Liquid Glucose (INS 1200), Hydrogenated Vegetable Fat, Cocoa Solids, Emulsifier (INS 322 (i), INS 476), Fructooligosaccharides, Sweetener (INS 965 (i)), Rice Crisps (9.5%) (Rice Flour, Salt), Oats (7%), Almonds (6%), Humectant (INS 422), Refined Sunflower Oil, Cocoa Mass, Cocoa Powder, Emulsifier (INS 322 (i)), Rosemary Extract, Sweetener (INS 955).",
    usage: "35g"
  },
  {
    id: "9602",
    name: "Forever Fast Break - Choco Orange",
    description: "Forever Fast Break Protein & Nut Energy Bars are your go-to solution for fulfilling nutritional needs on the go! Each bar is designed to boost energy levels and is packed with real fruits and nuts, providing a deliciously satisfying snack. With the added benefits of prebiotics it serves as not just a healthy protein source, these bars are perfect for anyone looking for a nutritious option without compromising on taste. They are free from preservatives, artificial flavors, and colors, ensuring that you're enjoying a wholesome, guilt-free treat that's 100% zero trans fat. Brighten your day with the zesty flavor of Forever Fast Break - Choco Orange! This energy bar offers a perfect blend of chocolate and real orange pieces included per serving, providing a burst of Vitamin C. With 22.80% protein per serving, it delivers the energy boost you need, while its high fiber content helps you feeling full and satiated. The inclusion of prebiotics ensures digestive health, making this bar a smart choice for those with active lifestyles. Enjoy the delicious taste without any preservatives or artificial ingredients, making it a wholesome addition to your daily routine.",
    shortDescription: "Instant Energy Booster in 5 Delicious Flavours",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "20% protein per serving",
      "Real orange pieces included",
      "High fiber for satiety",
      "Prebiotics support digestive health",
      "Free from preservatives, no artificial flavors"
    ],
    benefits: [
      "Refreshing citrus flavor",
      "Supports energy levels",
      "Promotes digestive health",
      "Perfect for active lifestyles"
    ],
    ingredients: "Protein Blend (22.80%) (Soy Nuggets, Soy Protein Isolate, Whey Protein Concentrate), White Compound (17%) (Sugar, Hydrogenated Vegetable Fat, Milk Solids, Emulsifier (INS 322 (i), INS 476), Fructooligosaccharides, Sweetener (INS 965 (i)), [Orange, Preservative (INS 220)], Rolled Oats, Rice Crisps [Rice Flour, Salt], Humectant (INS 422), Refined Sunflower Oil, Almonds (4%), Nature Identical Flavoring Substance (Orange), Emulsifier (INS 322 (i)), Rosemary Extract.",
    usage: "35g"
  },
  {
    id: "9603",
    name: "Forever Fast Break - Choco Strawberry",
    description: "Forever Fast Break Protein & Nut Energy Bars are your go-to solution for fulfilling nutritional needs on the go! Each bar is designed to boost energy levels and is packed with real fruits and nuts, providing a deliciously satisfying snack. With the added benefits of prebiotics it serves as not just a healthy protein source, these bars are perfect for anyone looking for a nutritious option without compromising on taste. They are free from preservatives, artificial flavors, and colors, ensuring that you're enjoying a wholesome, guilt-free treat that's 100% zero trans fat. Get ready to savor the sweet, juicy flavor of Forever Fast Break - Choco Strawberry! With 30% protein per serving, this bar is the perfect option for those looking for a protein-packed snack that tastes great. Real strawberries add a delightful sweetness while providing essential vitamins and minerals. This high-fiber bar not only helps you stay full but also supports your digestive health with the addition of prebiotics. Free from preservatives and artificial flavors, Choco Strawberry offers a delicious way to refuel after a workout or during a busy day.",
    shortDescription: "Instant Energy Booster in 5 Delicious Flavours",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "30% protein per serving",
      "Real strawberries for sweetness",
      "High fiber content",
      "Prebiotics for digestive support",
      "No preservatives or artificial additives"
    ],
    benefits: [
      "High protein content",
      "Sweet and satisfying",
      "Supports recovery and satiety",
      "Guilt-free indulgence"
    ],
    ingredients: "Protein Blend (32.5%) (Soy Nuggets, Soy Protein Isolate, Whey Protein Concentrate), White Choco Compound (15%) (Sugar, Hydrogenated Vegetable Fat, Milk Solids, Emulsifier (INS 322 (i), INS 476), Fructooligosaccharides, Sweetener (INS 965 (i)), Humectant (INS 422), Rice Crisps (8.50%) (Rice Flour, Salt), [Strawberry Pieces (6.25%) (Strawberry Pieces, Sugar)], Refined Sunflower Oil, Emulsifier (INS 322 (i)), Natural Flavoring Substance (Strawberry), Acidity Regulator (INS 330), Rosemary Extract, Sweetener (INS 955).",
    usage: "35g"
  },
  {
    id: "9604",
    name: "Forever Fast Break - Almond Sea Salt & Cranberry",
    description: "Forever Fast Break Protein & Nut Energy Bars are your go-to solution for fulfilling nutritional needs on the go! Each bar is designed to boost energy levels and is packed with real fruits and nuts, providing a deliciously satisfying snack. With the added benefits of prebiotics it serves as not just a healthy protein source, these bars are perfect for anyone looking for a nutritious option without compromising on taste. They are free from preservatives, artificial flavors, and colors, ensuring that you're enjoying a wholesome, guilt-free treat that's 100% zero trans fat. Discover the perfect balance of sweet and salty with the Forever Fast Break - Almond Sea Salt & Cranberry bar. This bar contains 30% almonds, with 10g per bar serving, providing a crunchy texture and a great source of protein and healthy fats. The real cranberries add tartness and are naturally sweetened with honey for a unique flavor that satisfies. High in fiber and enriched with prebiotics, this bar supports digestion and provides sustained energy throughout the day. Like all Forever Energy Bars, it is free from preservatives and artificial additives, making it a wholesome choice for your snacking needs.",
    shortDescription: "Instant Energy Booster in 5 Delicious Flavours",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "30% almonds, 10g per bar",
      "Real cranberries add tartness",
      "High fiber and prebiotics included",
      "Naturally sweetened with honey",
      "No preservatives, no artificial flavors"
    ],
    benefits: [
      "Perfect sweet and salty balance",
      "Rich in healthy fats",
      "Supports sustained energy",
      "Great for on-the-go nutrition"
    ],
    ingredients: "Nuts (43%) [Almonds (30%), Peanuts], Dark Choco Compound (15%) (Sugar, Hydrogenated Vegetable Fat, Cocoa Solids, Emulsifier (INS 322 (i), INS 476)), Liquid Glucose, Fructooligosaccharides, Candied Cranberries (8%) [Cranberries (INS 330), Sugar], Sunflower Oil, Rice Crisps, Honey, Refined Sunflower Oil, Edible Common Salt (Sea Salt (0.4%)), Oats, Cocoa Powder, Emulsifier (INS 322(i)), Natural Identical Food Flavour (Berry), Rosemary Extract.",
    usage: "35g"
  },
  {
    id: "9605",
    name: "Forever Fast Break - Oaty Berry Cereal",
    description: "Forever Fast Break Protein & Nut Energy Bars are your go-to solution for fulfilling nutritional needs on the go! Each bar is designed to boost energy levels and is packed with real fruits and nuts, providing a deliciously satisfying snack. With the added benefits of prebiotics it serves as not just a healthy protein source, these bars are perfect for anyone looking for a nutritious option without compromising on taste. They are free from preservatives, artificial flavors, and colors, ensuring that you're enjoying a wholesome, guilt-free treat that's 100% zero trans fat. Enjoy the hearty and wholesome taste of Forever Fast Break - Oaty Berry Cereal! This bar flavor combines 30% oats, alongside with real black currants, offering a naturally sweet flavor while being high in fiber to keep you feeling full and satisfied. Each bar is designed to support digestive health with the addition of prebiotics. As always, you can indulge in this delicious energy bar knowing that it contains no preservatives or artificial ingredients, making it a smart choice for your on-the-go lifestyle.",
    shortDescription: "Instant Energy Booster in 5 Delicious Flavours",
    image: "",
    category: "Nutritionals",
    categoryId: "nutritionals",
    features: [
      "30% almonds, packed with nutrients",
      "Real black currants for flavor",
      "High fiber for fullness",
      "Contains seeds, oats, and nuts",
      "No preservatives or artificial additives"
    ],
    benefits: [
      "Hearty and wholesome",
      "Supports digestive health",
      "Natural sweetness from berries",
      "Perfect for breakfast or snack"
    ],
    ingredients: "Seeds & Nuts (24%) [Sesame Seeds, Watermelon Seeds, Almonds (4%), Peanuts (4%), Pumpkin Seeds, Chia Seeds], Fructooligosaccharide, Sweetener (In-145) (inulin), Rice Crisp (15%), Crisp (8%) (Pea Flour, Rice Flour, Tapioca Starch, Salt Oat), Stabilizing Agent (INS 170(i)), Soy Nuggets, Instant Rolled Oats (5%), Edible Gum (Acacia, Xanthan), Refined Sunflower Oil, Stabilizer (INS 412), Acidity Regulator (INS 330), Natural Flavour (Black Currant), Edible Common Salt, Rosemary Extract, Emulsifier (INS 322(i)).",
    usage: "35g"
  },
  {
    id: "471",
    name: "Forever Lite Ultra™ Chocolate",
    description: "Protein is the basic building block of every cell in your body. A high protein diet can play an important role in weight loss by helping you control cravings and build strong, lean muscle. To build and maintain muscle, your body needs amino acids that can only be derived from protein. Forever Lite Ultra™ is a delicious, versatile and easy way to feed your body 13 grams of vegetarian-sourced protein without sugar, fat or carbs. It's a nutritious shake with a decadent natural chocolate flavor that mixes with milk or your favorite non-dairy substitute. You'll love the way you feel when you make Forever Lite Ultra™ part of your weight management and exercise routine! Remember, you'll get the best results when you combine this delicious and powerful shake with healthy eating and regular exercise. Raise a glass. Here's to your successful weight management journey! Each serving of Forever Lite Ultra™, prepared with skim milk as directed, supplies vitamins, minerals and important amino acids, including essential, non-essential and the branched-chain amino acids. With Forever Lite Ultra™, you can rest assured that you're getting the nutrition you want without having to sacrifice taste.",
    shortDescription: "Rich chocolate power to power your healthy lifestyle",
    image: "",
    category: "Weight Management",
    categoryId: "weight-management",
    features: [
      "Contributes to lean muscle mass",
      "13 grams of protein per serving",
      "Great source of vitamins and nutrition",
      "Complements low-carb lifestyle",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Supports lean muscle development",
      "Helps control cravings",
      "Provides essential amino acids",
      "Delicious chocolate flavor"
    ],
    ingredients: "Soy Protein Isolate (55.3%), Maltodextrin, Sunflower Oil, Natural Flavours (Chocolate, Cocoa), Cocoa Powder, Fructooligosaccharides, Honey, Wheat Starch, High Fructose Corn Syrup, Safflower Oil, Minerals, Corn Starch, Stabilizer [INS 412, INS 414], Emulsifier [INS 322(i), INS 471, INS 481], Natural Flavour (Vanilla), Colour [INS 150d], Carrier [INS 1518], Sucralose, Antioxidant [INS 301], Coconut Oil. Contains Soy, Wheat and Nut.",
    usage: "Blend or mix 1 level scoop with 300 mL of skim milk. (Use scoop provided.) For a special treat, mix with crushed ice or fruit. Shake well before each use. This product is intended for adults. Use daily, up to 2 times per day. A health supplement is not to be used as a substitute for a varied diet. Do not exceed the stated recommended daily usage. 400 g"
  },
  {
    id: "470",
    name: "Forever Lite Ultra™ Vanilla",
    description: "Protein is the basic building block of every cell in your body. A high protein diet can play an important role in weight loss by helping you control cravings and build strong, lean muscle. To build and maintain muscle, your body needs amino acids that can only be derived from protein. Forever Lite Ultra™ is a delicious, versatile and easy way to feed your body 13 grams of vegetarian-sourced protein without sugar, fat or carbs. It's a nutritious shake with a decadent natural vanilla flavor that mixes with milk or your favorite non-dairy substitute. You'll love the way you feel when you make Forever Lite Ultra™ part of your weight management and exercise routine! Remember, you'll get the best results when you combine this delicious and powerful shake with healthy eating and regular exercise. Raise a glass. Here's to your successful weight management journey! Each serving of Forever Lite Ultra™, prepared with skim milk as directed, supplies vitamins, minerals and important amino acids, including essential, non-essential and the branched-chain amino acids. With Forever Lite Ultra™, you can rest assured that you're getting the nutrition you want without having to sacrifice taste.",
    shortDescription: "Power your healthy lifestyle with protein and nutrition",
    image: "",
    category: "Weight Management",
    categoryId: "weight-management",
    features: [
      "Contributes to lean muscle mass",
      "13 grams of protein per serving",
      "Great source of vitamins and nutrition",
      "Complements low-carb lifestyle",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Supports lean muscle development",
      "Helps control cravings",
      "Provides essential amino acids",
      "Smooth vanilla flavor"
    ],
    ingredients: "Soy Protein Isolate (57.5%), Maltodextrin, Sunflower Oil, Fructooligosaccharides, Honey, Wheat Starch, High Fructose Corn Syrup, Safflower Oil, Minerals, Stabilizer [INS 412, INS 414], Corn Starch, Anticaking Agent [INS 551, INS 470(i)], Emulsifier [INS 322(i), INS 471, INS 481], Natural Flavour (Vanilla), Artificial Flavouring Substance (Vanilla), Sweetener [INS 955, INS 421], Vitamins, Colour [INS 150d], Sucralose, Antioxidant [INS 301], Coconut Oil. Contains Soy, Wheat and Nut.",
    usage: "Blend or mix 1 level scoop with 300 mL of skim milk. (Use scoop provided.) For a special treat, mix with crushed ice or fruit. Shake well before each use. This product is intended for adults. Use daily, up to 2 times per day. A health supplement is not to be used as a substitute for a varied diet. Do not exceed the stated recommended daily usage. 400 g"
  },
  {
    id: "071",
    name: "Forever Garcinia Plus™",
    description: "Forever Garcinia Plus™ is designed to complement your healthy lifestyle and help you achieve your weight management goals. The star of the show is the Garcinia cambogia fruit, which contains hydroxycitric acid (HCA). This compound has been shown to temporarily inhibit the body's conversion of carbohydrates into fats. The potent Garcinia extract used in Forever Garcinia Plus™ contains high levels of this important compound. Because Garcinia helps inhibit fat production, the body leans toward burning existing fat stores, which aids in weight loss when combined with a sensible diet and exercise program. This incredible fruit has also been shown to help reduce cravings as a natural appetite suppressant. Researchers in the 1960s discovered the Garcinia fruit had compounds that could impact metabolism by inhibiting the enzyme that converts calories into fat. Garcinia is also caffeine free, so you can take this supplement without those caffeine jitters! To complement Garcinia, we added chromium picolinate. If your body is deficient of this important mineral, it could cause fatigue and excess fat production. You work hard to eat right and exercise. Forever Garcinia Plus™ is a great tool to help you stay on track!",
    shortDescription: "Designed to help you get your best results",
    image: "",
    category: "Weight Management",
    categoryId: "weight-management",
    features: [
      "Temporarily inhibits fat production and storage",
      "Helps reduce cravings and suppress appetite",
      "Useful weight management tool",
      "Gluten Free"
    ],
    benefits: [
      "Supports weight management goals",
      "Helps reduce appetite",
      "Supports healthy metabolism",
      "Caffeine-free formula"
    ],
    ingredients: "Garcinia cambogia Fruit Rind Extract (33.7%) (Standardized to 50% Hydroxy Citric Acid), Vehicle [Safflower Oil], Ingredient of Capsule Shell [Gelatin], Purified Water, Humectant, [INS 422], Emulsifier [INS 322(i)], Corn Syrup, Colour [INS 150d], Chromium (III) Chloride, Contains Soy.",
    usage: "One softgel three times daily, preferably 30-60 minutes before meals. 70 Softgels"
  },
  {
    id: "656",
    name: "Forever Plant Protein™",
    description: "Introducing Forever Plant Protein™, a premium choice for those committed to a plant-based lifestyle and seeking clean label products. Crafted with a blend of pea and pumpkin protein, this protein powder offers a holistic approach to supplementing your daily macronutrients. Each serving delivers a substantial 17 grams of protein along with fiber, promoting satiety and supporting muscle mass and healthy bones. What sets Forever Plant Protein apart is its use of pea protein isolate, which is the high bioavailability form that packs in all essential amino acids vital for bodily functions. This makes it an ideal choice for anyone looking to maintain or build muscle while adhering to a plant-based diet. The vanilla flavor is derived naturally from plants, ensuring a delicious taste without relying on artificial sweeteners. Additionally, its smooth, non-gritty texture sets it apart from other plant-based proteins, enhancing the overall drinking experience. Moreover, Forever Plant Protein is committed to sustainability, utilizing rare and sustainably sourced protein sources like pea and pumpkin seed protein. It's designed not just as a meal replacement, but as a complementary way to boost protein intake throughout the day. Whether you're blending it into smoothies, mixing it with water or plant-based milk, Forever Plant Protein offers a nutritious and satisfying solution for your protein needs.",
    shortDescription: "Vanilla flavoured pea and pumpkin protein",
    image: "",
    category: "Weight Management",
    categoryId: "weight-management",
    features: [
      "Entirely plant-based",
      "Designed for people looking for clean label products",
      "17 grams of pea and pumpkin protein per serving",
      "Uses pea protein, an isolate that is the most bioavailable form of plant protein",
      "Gluten Free"
    ],
    benefits: [
      "High-quality plant protein",
      "Supports muscle development",
      "Smooth, non-gritty texture",
      "Sustainably sourced ingredients"
    ],
    ingredients: "Pea Protein Isolate (59.5%), Pumpkin Protein (5.56%), Maltodextrin, Stabilizer [INS 412, INS 414], Fructooligosaccharides, Medium Chain Triglycerides, Natural Flavour (Vanilla), Anti-caking Agent [INS 551, INS 341(iii)], Sweetener [INS 960], Apple Powder (0.11%), Sucralose, Colour [INS 150d], Sequestrant [INS 516]. Contains Nut.",
    usage: "Blend or mix 1 level scoop with 240 mL of water or plant-based beverage and mix well. One serving (25g) per day. A health supplement is not to be used as a substitute for a varied diet. Do not exceed the stated recommended daily usage. 400g"
  },
  {
    id: "561",
    name: "Awakening Eye Cream",
    description: "Awakening eye cream combines patented ingredients with peptide technology to improve and smooth the sensitive eye area, visibly reducing the appearance of lines, wrinkles and dark circles. This groundbreaking formula helps with normal collagen formation to promote youthful skin hydration and elasticity. Featuring advanced collagen, awakening eye cream improves skin smoothness, resulting in plumper, firmer skin around the eye for a total revitalizing makeover! Awakening eye cream also contains a special peptide that has been shown to reduce the appearance of eye puffiness and dark circles in as little as 15 days! A cutting-edge ingredient, albizia julibrissin bark extract, is shown to have a lifting action on the sagging upper eye lid and helps revitalize the delicate area around the eye for a total anti-aging and perking effect. Blur the look of crow's feet and fade the appearance of dark circles with awakening eye cream. Instead of dry, puffy eye skin, eyes appear more rested, alert and rejuvenated. All these powerhouse ingredients make the most advanced eye cream to allow your beauty to shine. Have striking eyes that look brighter and younger with awakening eye cream.",
    shortDescription: "Beautify the eye.",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Diminishes the appearance of puffiness and dark circles",
      "Significantly reduces appearance of wrinkles",
      "Eyes appear more rested, alert and rejuvenated",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Reduces appearance of eye puffiness",
      "Diminishes dark circles",
      "Smooths fine lines and wrinkles",
      "Firms and revitalizes eye area"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water, Caprylic/Capric Triglyceride, Rosmarinus Officinalis (Rosemary) Leaf Extract, Glycerin, Polyglyceryl-6 Distearate, Jojoba Esters, Propanediol, Lauryl Olivate, Glyceryl Stearate, Cetearyl Olivate, Sorbitan Olivate, Polyhydroxystearic Acid, Ammonium Acryloyldimethyltaurate/ VP Copolymer, Palmitoyl Tripeptide-5 Beeswax, Cetyl Alcohol, Hydroxypropyl Cyclodextrin, Palmitoyl Tripeptide-38, Magnesium Gluconate, Albizia Julibrissin Bark Extract, Darutoside, Magnesium Aspartate, Palmitoleic Acid, Pentadecanoic Acid, Tetradecyl Aminobutyroylvalylaminobutyric Urea Trifluoroacetate, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Phenoxyethanol, Panthenol, Sodium Hyaluronate, Dimethicone, Durutea Carota Sativa (Carrot) Root Extract, Capryloyl Glycine, Butylene Glycol, Acetyl Tetrapeptide-5, Hydrolyzed Collagen, Hydrolyzed Corn Starch, Beta Vulgaris (Beet) Root Extract, Capryhydroxamic Acid, Capryloyl Glycol, Ethylhexylglycerin, 1,2-Hexanediol, Linoleic Acid, Linolenic Acid, Arginine, Hydrolyzed Sodium Hyaluronate.",
    usage: "Using your finger, gently dab a moderate amount below and around the eye area. 0.74 FL. OZ. (21 g)"
  },
  {
    id: "559",
    name: "Smoothing Exfoliator",
    description: "Old skin can look flaky, tired and dull. The right exfoliator removes dead skin cells to reveal brighter skin with a smooth tone and texture. Forever's smoothing exfoliator was designed to get the job done without stressing the soft, newer skin underneath. Instead of using harsh chemicals or sharp fragments, smoothing exfoliator uses five powerful yet natural ingredients to work together to provide a complete and rejuvenating cleansing experience. Jojoba beads gently roll across the skin to remove dirt and debris while sustainably-sourced bamboo powder sweeps the skin to remove dead cells. Bromelain, papain and lemon essential oil create a perfect natural skin tonic. Pineapple-derived bromelain has enzymatic abilities that assist in destroying the keratin of dead skin cells allowing them to be removed more easily. Papain, from papaya, assists in rejuvenating skin and is a rich source of vitamins C, A, E and pantothenic acid. Forever's smoothing exfoliator is also infused with antioxidants and aloe gel, designed to provide the most effective and gentle exfoliating experience and lemon essential oil for instant hydration of the younger skin below the surface. Of course, this exclusive formula has a high content of pure inner-leaf aloe vera gel to smooth and condition skin. Make the most of your skin care routine with smoothing exfoliator.",
    shortDescription: "Smooths skin tone and texture.",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Smooths skin tone and texture",
      "Gently exfoliates to uncover silky soft skin",
      "Enzymatic extracts resurface the skin",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Removes dead skin cells gently",
      "Reveals brighter, smoother skin",
      "Natural enzymatic exfoliation",
      "Conditions and hydrates skin"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water, Hydrogenated Jojoba Oil, Propanediol, Glyceryl Stearate, Bambusa Arundinacea Stem Powder, Sodium Cocoyl Isethionate, Cetyl Alcohol, Cocamidopropyl Hydroxysultaine, Stearyl Alcohol, Decyl Glucoside, Stearyl Phosphate, Hydrated Silica, Hydroxystearic/Linolenic/Oleic Polyglycerides, Caprylic/Capric Glycol, Ethylhexylglycerin, Papain, Bromelain, Maltodextrin, Papain, Sodium Citrus Limon (Lemon) Peel Oil, Polyacrylate Crosspolymer-6, Sodium Lactate, Phytic Acid, Xanthan Gum, Disodium EDTA, Chlorphenesin.",
    usage: "Apply moderate amount onto wet fingers. Gently work in a circular motion over the face, avoiding the eye area. Rinse thoroughly. For refreshed skin, use 2-3 times weekly. Before using, twist off cap and remove seal. 2 FL. OZ. (60 mL)"
  },
  {
    id: "561-lotion",
    name: "Protecting Day Lotion",
    description: "Protecting your skin from sun damage and correcting earlier skin-related issues is more important than ever. Start your day off right with Forever's protecting day lotion, now with an improved formula upgraded for all skin types. Protecting day lotion delivers formula double duty, shielding your face from harmful UVA/UVB rays and rehydrating it with a blend of skin-nourishing ingredients. A blend of oils that includes brassica napus, castor and desert date is rich in antioxidants, protecting the skin from free radicals. Castor and desert date oils combine to provide high amounts of essential fatty acids to give your skin a soft, smooth texture. Although rich in nutrients for your skin, these oils absorb quickly and won't clog pores. This new formula also contains linoleic, oleic and palmitoleic essential fatty acids. Each a component of skin-replacement 'lipids,' these ingredients mimic the fat structure of the skin to prevent epidermal water loss, keeping the skin moisturized during sun exposure. The broad spectrum, UVA/UVB sun protection comes from natural mineral zinc oxide. This reef-friendly, non-nano zinc includes advanced coating technology to shield your skin without the telltale sunscreen white cast. No matter your daily level of sun exposure, Forever's protecting day lotion is the perfect addition to any skin care routine.",
    shortDescription: "Broad-spectrum protection combined with skin care ingredients.",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Diminishes the appearance of puffiness and dark circles",
      "Significantly reduces appearance of wrinkles",
      "Eyes appear more rested, alert and rejuvenated",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "UVA/UVB sun protection",
      "Hydrates and nourishes skin",
      "Prevents water loss",
      "Non-greasy, reef-friendly formula"
    ],
    ingredients: "Water, Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Propanediol, Brassica Napus Seed Oil, Isoamyl Cocoate, Ricinus Communis (Castor) Seed Oil, Butyloctyl Salicylate, Caprylic/ Capric Triglyceride, Cetyl Alcohol, Balanites Roxburghii Seed Oil, Behenyl Alcohol, Phenoxyethanol, Polyhydroxystearic Acid, Sodium Chloride, Polyoxystearate Oleate, Behenyl Alcohol, Phenoxyethanol, Cetearyl Alcohol, Sodium Chloride, Polyoxystearate Wax, Bentonite, Diethylhexyl 2,6-Naphthalate, Cetearyl Alcohol, Sodium Chloride, Polyoxystearate Oleate, Polyhydroxystearic Acid, Aluminium Stearate, Tocopheryl Acetate, Helianthus Annuus (Sunflower) Seed Oil, Xanthan Gum, Magnesium Sulfate, Aluminium Stearate, Tocopherol, Collagen Amino Acids, Glucoside, Linoleic Acid, Lecithin, Canarium Luzonicum Gum Nonvolatiles, Phytosterols, Canola Glycerides, Citric Acid, Balanites Roxburghii Seed Oil, Oleic Acid, Palmitic Acid, Glyceryl Undecylenate, Stearic Acid, Trolein, Tocopherol Undecylenoyl Phytosphingosine.",
    usage: "Apply generously and evenly 15 minutes before sun exposure. Reapply at least every 2 hours and after any water activity. 2 FL. OZ. (60 mL)"
  },
  {
    id: "647",
    name: "Aloe Body Lotion",
    description: "Forever's Aloe Body Lotion is the perfect everyday moisturizer to soften skin and leave it feeling smooth, hydrated and healthy. Our lightweight formula absorbs quickly to deliver the powerful benefits of aloe vera and other moisturizing ingredients almost instantly. We combined a high concentration of pure inner leaf aloe vera with argan-based oils and botanicals for a skin-enhancing blend of enhancing ingredients to work for you. Aloe forms the ideal base for moisturizing and promoting healthy skin health. Argan oil contains vitamin E and fatty acids that help soften skin while hydrolyzed jojoba esters help promote moisture and skin firmness and elasticity. The addition of macadamia seed oil makes Aloe Body Lotion an excellent choice for dry and mature skin due to its high palmitoleic acid content, which promotes healthy looking skin. But this formula isn't just for people with dry or mature skin. Forever created this silicone-free formula for anyone with normal to dry skin by adding ingredients like sodium hyaluronate, which forms a protective barrier on the skin and helps retain moisture. Aloe Body Lotion also features a bright aroma featuring light florals for a scent that's universally appealing. When you need a go-to daily lotion that leaves skin feeling soft and silky, but never greasy, make sure you have Forever's Aloe Body Lotion close by.",
    shortDescription: "Fast absorbing lotion, for daily use.",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Promotes skin's hydration",
      "Promotes soft-feeling skin",
      "Support's skin's natural moisture barrier",
      "Promotes healthy, youthful-looking skin",
      "Absorbs quickly into the skin, leaving behind a silky, non-greasy feel",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Fast-absorbing hydration",
      "Softens and smooths skin",
      "Rich in vitamins and fatty acids",
      "Light floral scent"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water, Caprylic/Capric Triglyceride, Propanediol, C13-15 Alkane, Glyceryl Stearate SE, Butylene Glycol, Undecylenoyl Glycine, Arginine, Phenoxyethanol, PEG-100 Stearate, Hydrogenated Polyisobutene, Acetylated Shea Butter Acetylate Crosspolymer, Fragrance, Capryloyl Glycol, Disodium EDTA, Xanthan Gum, Isosiorbide Dicaprylate, Potassium Sorbate, Hydroxylethylglycerin, Hexylene Glycol, Hydrolyzed Jojoba Esters, Argania Spinosa Kernel Oil, Rosa Canina (Rose Hip) Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Macadamia Integrifolia Seed Oil, Tocopherol, Sodium Hyaluronate.",
    usage: "Apply liberally and gently massage until lotion is completely absorbed into the skin. 8 FL. OZ. (236 mL)"
  },
  {
    id: "87",
    name: "Radiance By Forever Facewash",
    description: "Radiance by Forever Facewash is formulated with a blend of natural extracts, offering a deep yet gentle cleansing experience. Infused with aloe vera, licorice, bamboo, apple, carrot, and rose flower extracts, this facewash provides effective cleansing while also nourishing the skin with essential nutrients. It works to eliminate dirt, impurities, and excess oil while keeping the skin hydrated and supple. The combination of natural ingredients helps ensure gentle exfoliation ensures that your skin remains soft, radiant, and refreshed. The inclusion of apple extract aids in gently exfoliating the skin, helping to unclog pores and promote healthy cell turnover. This, combined with aloe vera's natural hydrating properties, ensures that your skin stays moisturized without feeling dry or tight. Licorice extract is particularly beneficial for reducing inflammation and soothing irritation, making this facewash ideal for sensitive skin types or those prone to redness. Bamboo, licorice, and carrot extracts add an antioxidant boost, promoting a youthful glow and helping to combat the appearance of dark spots and pigmentation. Carrot extract, combined with rose flower extract, works to not only cleanse but also enhance skin health, leaving it smooth, soft, and rejuvenated. The antioxidants also help protect the skin from environmental damage, maintaining its natural radiance. Overall, Radiance by Forever Facewash is designed to provide deep cleansing, hydration, and gentle exfoliation in one simple step. It unclogs pores, soothes irritation, reduces dark spots, and promotes youthful skin, making it an essential part of your daily skincare routine.",
    shortDescription: "Gentle, natural cleanse for radiant skin.",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Deep cleansing with natural extracts",
      "Hydrates and nourishes the skin",
      "Gently exfoliates, unclogs pores",
      "Reduces dark spots and pigmentation",
      "Promotes soft, radiant, youthful skin",
      "Sulphate Free",
      "Paraben Free",
      "Dermatologically tested"
    ],
    benefits: [
      "Deep yet gentle cleansing",
      "Hydrates and nourishes skin",
      "Reduces inflammation and dark spots",
      "Promotes radiant complexion"
    ],
    ingredients: "Purified Water, Sodium Lauryl Sarcosinate, Glycerin, Cocamidopropyl Betaine, Geogard ECT (Benzyl Alcohol, Salicylic Acid, Glycerin, Sorbic Acid), Carbopol (Acrylates/C10-30 Alkyl Acrylate Crosspolymer), Polyquaternium-7, Fragrance, Bamboo Extract (Bambusa Arundinaceae), Licorice Extract (Glycyrrhiza Glabra), Apple Extract (Pyrus Malus Fruit), Carrot Extract (Daucus Carota Sativa), Aquaxyl (Xylitylglucoside and Anhydroxylitol and Xylitol), Rose Extract (Rosa Damascena), TEA (Triethanolamine), Aloe Vera Extract (Aloe Barbadersis), EDTA(Ethylenediaminetetraacetic Acid).",
    usage: "Wet your face. Use sufficient quantity to work up a lather on your face. Massage for a few seconds and rinse off with water. Pat dry. Follow this up with a moisturizer. 100mL"
  },
  {
    id: "88",
    name: "Radiance By Forever Moisturizer",
    description: "Radiance by Forever Moisturizer is a luxurious blend of natural extracts, expertly formulated to hydrate and nourish the skin. Infused with aloe vera, moringa oil, wheat germ oil, and saffron, and neem extract, this moisturizer works to provide essential nutrients and promote overall skin health. The rich, yet non-greasy formula absorbs quickly through the skin, providing well-hydrated throughout the day, making it an essential addition to your daily skincare routine. Wheat germ oil and moringa oil are packed with vitamins and antioxidants, which help to protect the skin from damage caused by free radicals. This powerful duo not only promotes healthy skin but also aids in repairing and rejuvenating the skin's appearance. Aloe vera, well-known for its calming properties, soothes irritation, redness, and supports the skin's natural healing processes. Together, these ingredients create a soothing formula that is ideal for all skin types, including sensitive skin. Saffron and wheat germ oil provide additional antioxidant protection, working to even out skin tone and diminish the appearance of fine lines and uneven texture. Neem extract, along with zinc oxide, plays a crucial role in controlling acne and soothing inflammation, while also reducing the appearance of pores. This multifaceted approach ensures that your skin looks its best, feeling revitalized and balanced. Overall, Radiance by Forever Moisturizer is designed to deliver deep hydration while addressing multiple skin concerns. Its lightweight formula absorbs quickly, leaving your skin feeling soft and refreshed without any greasy residue. Embrace a healthier complexion and achieve a radiant glow with this nourishing moisturizer that promotes youthful skin.",
    shortDescription: "Nourishing, lightweight hydration for radiant skin.",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Hydrates and nourishes skin effectively",
      "Packed with vitamins and antioxidants",
      "Calms irritation and reduces redness",
      "Evens skin tone and minimizes fine lines",
      "Lightweight formula absorbs quickly, non-greasy",
      "Sulphate Free",
      "Paraben Free",
      "Dermatologically Tested",
      "Mercury Free"
    ],
    benefits: [
      "Deep hydration without greasiness",
      "Rich in antioxidants and vitamins",
      "Calms and soothes skin",
      "Evens tone and reduces fine lines"
    ],
    ingredients: "Purified Water, Glycerin, Viscolam® Al 100 (Sodium Polyacryloyldimethyl Taurate, Hydrogenated Polydecene, Trideceth-10), Caprylic/Capric Triglyceride, Olivem 1000 (Cetearyl Olivate, Sorbitan Olivate) Neem Extract (Azadirachta Indica), Geogard ECT (Benzyl Alcohol, Salicylic Acid, Glycerin, Sorbic Acid), Wheatgerm Oil, Moringa Oleifera Oil Moringa Oleifera), Wheatgerm Oil (Triticum Vulgare Germ), Jojoba Oil (Simmondsia Chinensis), Aquaxyl (Xylitylglucoside and Anhydroxylitol and Xylitol), Carbopol (Acrylates/C10-30 Alkyl Acrylate Crosspolymer), Fragrance, Saffron Extract (Crocus Sativus flower), Centella Extract (Centella Asiatica), TEA (Triethanolamine), Allantoin, Zinc Oxide, Aloe vera Extract (Aloe Barbadersis).",
    usage: "Take sufficient quantity and massage on clean skin. Use circular motions to massage until absorbed. 100mL"
  },
  {
    id: "90",
    name: "Radiance By Forever Mud Mask Scrub",
    description: "Only nature can deliver such a powerful yet gentle formula. Infused with the calming properties of Aloe Vera Powder, this advanced treatment soothes, hydrates, and rejuvenates, leaving your skin refreshed and revitalized. Bamboo Charcoal works deeply within the pores, drawing out toxins, impurities, and excess oil, while leaving your skin feeling clean and smooth. This helps to provide a rich dose of antioxidants, vitamins, and essential fatty acids to nourish and protect. The cooling effect of Cucumber Extract helps minimize puffiness and calm inflammation, restoring your skin's smooth and healthy appearance. With regular use, you'll notice refined skin texture, reduced fine lines, and a radiant, balanced complexion. Hydrating yet purifying, this formula supports the skin's natural barrier and leaves your skin soft, smooth, and glowing. Use two to three times a week to detoxify and renew your skin, unlocking your healthiest, most radiant look yet.",
    shortDescription: "Purify, nourish, and reveal your skin's natural glow with the perfect balance of deep cleansing and soothing hydration.",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Reducing Skin tanning",
      "Twin Action - Mud Mask + Face Scrub",
      "Improves the barrier of the skin",
      "Reduces pigmentation",
      "Brightens the Skin",
      "Balanced ingredients for all skin types",
      "Sulphate Free",
      "Paraben Free",
      "Dermatologically tested"
    ],
    benefits: [
      "Deep cleansing with bamboo charcoal",
      "Reduces puffiness and inflammation",
      "Refines texture and minimizes fine lines",
      "Nourishes with vitamins and antioxidants"
    ],
    ingredients: "Purified Water, Bentonite, Kaolin, Caprylic/ Capric Triglyceride, Tropolamine, Geogard ECT (Benzyl Alcohol, Salicylic Acida and Glycerin and PEG 100 Stearate, Cetyl Alcohol, Olivem 1000 (Cetearyl Olivate, Sorbitan Olivate), Zinc Oxide, Titanium Dioxide, Cucumber (Cucumis Sativus Fruit Extract, Crithmum maritium (Triticum Germ) Oil, Lemon (Citrus Limon) Fruit Extract, Rosemary (Rosmarinus Officinalis) Leaf Extract, Geogard ECT (Benzyl Alcohol (and) Salicylic Acida (and) Glycerin (and) Sorbic Acid), Glycerin (and) Water (and) Glycine Soja (Soybean) Germ Extract (and) Triticum Vulgare (Wheat) Germ Extract (and) Scutellaria Baicalensis Root Extract, Salvia Bran) Oil, Aquaxl (Xylitylglucoside (and) Anhydroxylitol (and) Xylitol), Sodium Benzoate, Fragrance, Bamboo (Bamboo Charcoal (Bamboo Charcoal) Powder, Xanthum Gum, Salicylic Acid, Disodium EDTA, Allanton, D- Panthenol (Vitamin B5), Glycerin, Apricot (Prunus Armeniaca Kernel Oil), Aloe vera Extract (Aloe-Barbadersis) Menthol, Fragrance, Aloe vera Extract (Aloe-Barbadersis)",
    usage: "Application Scrub: On a clean face, apply the face mask in sideward strokes. Let in dry for 10 -15 minutes, sit back and relax. Dampen your skin and gently massage in light circular motion to exfoliate the skin. Wash away the your face with water/gently wipe off with a clean wet towel/tissue. Tighten your pores to avoid dust grime back to your's face. Use 1 toner. Seal in the hydration with a moisturizer. 100mL"
  },
  {
    id: "89",
    name: "Radiance By Forever Toner",
    description: "Forever Radiance Toner is a gentle yet powerful addition to your skincare routine. Specially formulated with ingredients to balance the skin's natural pH, this toner works to reduce irritation and inflammation, leaving your skin refreshed in every application. Infused with skin-loving ingredients like Licorice Extract (Mulethi) and Aloe Vera Liquid Extract, this toner hydrates and nourishes, helping to keep your skin sensitive while visibly reducing redness. It brightens and evens out your complexion by fading dark spots and hyperpigmentation, promoting a radiant, even-toned glow. Forever Radiance Toner also preps the skin for maximum absorption of subsequent skincare products, ensuring you get the most out of your beauty routine. With Geogard ECT, a COSMOS-approved eco-friendly preservative system, this toner offers superior safety and stability while being gentle on your skin and kind to the environment. Reveal soft, supple, and balanced skin, perfectly primed for your next skincare steps.",
    shortDescription: "Forever Radiance Toner",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Maintains the skin's natural pH",
      "Keeps skin hydrated",
      "Tightens pores",
      "Provides an on the go comprehensive skincare solution",
      "Sulphate Free",
      "Paraben Free",
      "Dermatologically tested"
    ],
    benefits: [
      "Balances skin pH",
      "Reduces irritation and redness",
      "Brightens and evens skin tone",
      "Preps skin for better absorption"
    ],
    ingredients: "Purified water, Glycerin, Saffron (Crocus Sativus) Flower Extract, Licorice Extract (Glycyrrhiza Glabra) Root Extract, Mulathi, Geogard ECT (Benzyl Alcohol & Salicylic Acid & Glycine & Sorbic Acid), Licorice (Glycyrrhiza Glabra) Root Extract, Allantoin, Fragrance, Aloe Vera Liquid Extract (Aloe Barbadersis)",
    usage: "On a clean face (after cleansing . Scrub mask application), spray the toner avoid eye area. Let in dry on its own. Seal in the hydration with a moisturizer. You can apply toner multiple times in a day to hydrate but follow up with a moisturizer only on a clean face. 100mL"
  },
  {
    id: "064",
    name: "Aloe Heat Lotion",
    description: "Soothe away the pressures of the day. Experience the relaxing sensation of Aloe Heat Lotion after a tough workout or long day at work. This aloe-powered formula delivers heating and cooling effects to help soothe tired muscles. Ultra-rich and non-greasy, this creamy lotion is perfect for a deep, relaxing massage to set your mind and body at ease. Aloe Heat Lotion goes on cool and stimulates with the sensation of aloe and menthol to soothe on contact. It then warms, while ingredients like eucalyptus helps relax your muscles and create a naturally aromatic experience. The aloe used in this skin nourishing lotion is grown at Forever's own fields. We hand harvest and hand fillet every leaf to ensure quality stabilized aloe vera is in every bottle of Aloe Heat Lotion. By combining our aloe with other powerful natural ingredients, Forever has created a lotion that will not only leave you feeling more relaxed, but leave your skin feeling soft, smooth and nourished. Massage away the stresses of the day and feel refreshed and ready to take on tomorrow.",
    shortDescription: "Soothe away the pressures of the day",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Helps soothe muscles",
      "Nourishes the skin",
      "Menthol and eucalyptus fragrance",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Soothing heating and cooling sensation",
      "Relieves tired muscles",
      "Non-greasy formula",
      "Aromatic experience"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water (Aqua), Methyl Salicylate, Propanediol, Glycerin, Stearates, Arginine, Behenyl Alcohol, Glyceryl Stearate Citrate, Menthol,Caprylic/Capric Triglyceride, Eucalyptus Globulus Leaf Oil, Prunus Amygdalus (Apricot) Kernel Oil, Sesamum Indicum (Sesame) Seed Oil, Cetyl Alcohol, Beta Vulgaris (Beet) Root Extract, Carbomer, Allantoin, Ascorbic Acid, Ethylhexylglycerin, Hexylene Glycol,Phenoxyethanol, Tocopheryl Acetate, Capryloyl Glycine, Undecylenoyl Glycine, Caprylic Acid",
    usage: "Apply liberally and massage into skin as needed. Avoid contact with eyes. Should contact occur, flush with water for several minutes. 118 mL (when packed)"
  },
  {
    id: "205",
    name: "Aloe MSM Gel",
    description: "Cool, calming relief for any gym bag. Forever's Aloe MSM Gel is your ticket to soothing relief when and where you need it. We combined pure inner leaf aloe vera with natural sulfoxy methane (MSM), an organic sulfur compound found in living organisms. MSM has powerful skin calming properties and combined with pure aloe gel it provides optimal comfort and moisturization. But the soothing power of Aloe MSM Gel doesn't stop with those two ingredients. This clear, non-staining formula includes natural herbal extracts like tea tree leaf oil, willow bark extract and glycerin to calm and condition skin. The addition of rosemary leaf extract draws water to the skin to keep it hydrated and comfortable. This versatile gel is a must-have for any gym bag. Apply liberally and massage into skin to soothe sore joints and muscles after a tough workout. If your lifestyle keeps you on the move, show your body the love it deserves and keep Aloe MSM Gel ready for the next adventure. Apply liberally and massage into your skin after a long day or a tough workout to sooth your muscles and joints.",
    shortDescription: "Cool, calming relief for any gym bag",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Combines natural MSM, aloe gel and herbal extracts",
      "Great for soothing relief anytime",
      "Essential for any gym bag",
      "Non-staining formula",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Soothes tired muscles and joints",
      "Calming and moisturizing",
      "Clear, non-staining formula",
      "Natural herbal extracts"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water (Aqua), Dimethyl Sulfoxide (MSM), Glycerin, Triethanolamine, Dimethicone, Arctostaphylos Uva Ursi Leaf Extract, Glycerin, Sodium Hyaluronate, Allantoin, Tocopherol (Natural Vitamin E), Melaleuca Alternifolia (Tea Tree) Leaf Oil, Rosmarinus Officinalis (Rosemary) Leaf Extract, Salix Alba (Willow) Bark Extract, Polysorbate 80, Ascorbic Acid, Carbomer, Disodium EDTA, Methylparaben, Diazolidinyl Urea",
    usage: "Apply liberally and massage into skin areas where needed. Should eye contact occur, flush with water for several minutes. Repeat application as needed. 118 mL (when packed)"
  },
  {
    id: "070",
    name: "Gentleman's Pride",
    description: "Aloe powered moisturizing aftershave. Give your post-shave routine a soothing upgrade with Gentleman's Pride™. This aloe powered aftershave also acts as a super hydrating moisturizer for your entire face and neck. Forever's formula is free of alcohol and features an exclusive blend of ingredients that provides an exhilaration with a clean and classically sophisticated masculine scent. Crafted with pure inner leaf aloe vera, Gentleman's Pride™ will provide long-lasting comfort and leave you feeling fresh and invigorated. Shaving can cause irritating nicks, scratches or razor burn as the blade moves across your face. Most aftershaves have a high alcohol content that can leave your skin feeling dry. That's not the case with Gentleman's Pride™. Natural skin conditioners like rosemary, vitamin E and cucumber work alongside aloe and sodium hyaluronate to deeply soothe and moisturize. Gentleman's Pride™ allows you to face the day with confidence and comfort. This is the next generation of sophisticated skincare developed exclusively for men.",
    shortDescription: "Aloe powered moisturizing aftershave",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Aloe-powered skin conditioning",
      "Cooling sensation and fresh feel",
      "Aftershave and skin conditioner",
      "Alcohol free",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Soothes post-shave irritation",
      "Alcohol-free formula",
      "Moisturizes and conditions skin",
      "Sophisticated masculine scent"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel), Water (Aqua), Glycerin (Vegetable Source), Palmitate, Dimethicone, Polyacrylamide,Glyceryl Stearate, Tocopherol, Rosmarinus Officinalis (Rosemary) Leaf Extract, Cucumis Sativus (Cucumber) Fruit Extract, Polysorbate 60, Glycerin, C13-14 Isoparaffin, Laureth-7, PEG-100 Stearate, Sodium Hyaluronate, Ascorbic Acid, Allantoin, Caprylyl Glycol, Ethylhexylglycerin, Hexylene Glycol, Phenoxyethanol, Fragrance",
    usage: "Apply liberally after shaving or exposure to the elements. 4 FL. OZ. (118 mL)"
  },
  {
    id: "022",
    name: "Forever Aloe Lips with Jojoba",
    description: "Soothe away the pressures of the day. When it comes to your skincare routine, don't let your lips feel left out. Soften, condition and soothe with Forever Aloe Lips™ with jojoba. Forever Aloe Lips™ is the ultimate year-round solution to dry, chapped lips. Aloe, jojoba and beeswax soothe, smooth and comfort your lips while providing a long-lasting moisture barrier for your precious lips. We didn't stop there. Forever Aloe Lips™ includes jojoba oil, a natural wax that both soothes and protects your lips. We combined jojoba with a skin conditioning agent called myristyl myristate. The soothing power of aloe combined with a perfectly balanced mix of natural ingredients will leave your lips feeling cool, plump and moisturized, all while three types of wax lock in moisture and give your lips a stunning gloss. From winter snow to summer sunshine, make sure your lips are prepared for anything the great outdoors has to offer!",
    shortDescription: "Soothe away the pressures of the day",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Moisture and softens lips",
      "Soothes dry, chapped lips",
      "Locks in moisture",
      "Lips look glossy, smooth and healthy",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Soothes and moisturizes lips",
      "Long-lasting moisture barrier",
      "Natural ingredients",
      "Stunning gloss finish"
    ],
    ingredients: "Petrolatum, Mineral Oil, Ozokerite, Simmondsia Chinensis (Jojoba) Seed Oil, Myristyl Myristate, Glycine Soja (Soybean) Oil, Ethylhexyl Hydroxystearate, Euphorbia Cerifera (Candelilla) Wax, Beeswax, Aloe Barbadensis Leaf Extract, Commiphora Cerifera (Carnauba) Wax, Flavor, Allantoin, Propylparaben",
    usage: "Apply to the lips regularly as a moisturizer, particularly in harsh or extreme weather conditions. NET WT 0.15 OZ. (4.25 g)"
  },
  {
    id: "187",
    name: "Forever Alpha-E Factor",
    description: "Replenish your skin with ultimate moisturization. Forever Alpha-E Factor™ is fueled by anti-aging powerhouse vitamin E, which pulls double duty by fighting free radicals while promoting soft and radiant skin. This nourishing formula includes other antioxidants like vitamins A and retinyl palmitate to defend from free radicals and support aging gracefully. Free radicals are responsible for 80% of skin damage and come from unavoidable factors like pollution and UV rays. Alpha-E Factor™'s lightweight formula glides on easily, delivering advanced moisture and protection from free radicals, while vitamin C leads the charge against oxidative stress. Dryness is one of the most irritating signs of skin distress caused by environmental factors. To hydrate dry or sensitive skin, borage oil boasts some of the highest concentrations of essential fatty acids that act as natural enzyme remedies to restore moisture. Give your skin the nourishment it needs to fight free radicals and support healthy, younger-looking skin. Just a little bit of Forever Alpha-E Factor™ goes a long way toward promoting your most hydrated skin.",
    shortDescription: "Replenish your skin with ultimate moisturization",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Nourishes and restores hydration",
      "Robust combination of antioxidants and botanicals",
      "Great for all skin types",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Fights free radicals",
      "Promotes soft and radiant skin",
      "Lightweight formula",
      "Advanced moisture protection"
    ],
    ingredients: "Caprylic/Capric Triglyceride, Cyclomethicone, Tocopheryl Acetate, Retinyl Palmitate, Ascorbyl Palmitate, Aloe Barbadensis (Aloe Vera) Leaf Extract, Bisabolol, Tocopherol, Lecithin, Borago Officinalis Seed Oil, Glycine Soja (Soybean) Oil, Methylparaben, Propylparaben, Fragrance",
    usage: "Apply to face, neck and dry areas where needed. For added moisture, dampen skin lightly with Balancing Toner before application. Forever Alpha-E Factor™ may also be used in combination with R3 Factor™ Skin Smoothing Creme. 1 FL. OZ. (30 mL)"
  },
  {
    id: "063",
    name: "Aloe Moisturizing Lotion",
    description: "Silky smooth texture that locks in moisture. Experience the advanced, deep moisturization that only pure, inner leaf aloe vera can provide. Forever's Aloe Moisturizing Lotion is made with hand-harvested, hand filleted aloe to moisturize, soothe and restore your skin. Day in and day out our skin is exposed to weather, wind and stress, all of which can take a toll on your skin. Aloe moisturizing lotion is a powerhouse formula when it comes to replenishing lost moisture and restoring soft, supple skin. The rich texture provides your skin a truly indulgent experience. Perfect for the body and hands, the addition of collagen and elastin work to keep skin smooth, soft and elastic while maintaining a natural pH balance. Another benefit of Aloe Moisturizing Lotion is its outstanding humectant properties to preserve, maintain and lock in moisture. Natural ingredients like apricot kernel oil, jojoba and vitamin E work together condition skin for a radiant glow. When your skin needs a little extra attention, Aloe Moisturizing Lotion has everything you need to restore and revitalize.",
    shortDescription: "Silky smooth texture that locks in moisture",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Restores dry, chaffed windblown skin",
      "Provides smooth, supple skin",
      "Rich, indulgent texture",
      "Perfect for hands and body",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Deep moisturization",
      "Restores skin elasticity",
      "Locks in moisture",
      "Radiant glow"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water (Aqua), C12-15 Alkyl Benzoate, Stearic Acid, Glycerin, Polysorbate 60, PEG-100 Stearate, Hydrogenated Polyisobutene, Methyl Gluceth-20, Sorbitol, Prunus Armeniaca (Apricot) Kernel Oil, Polyacrylamide, Triethanolamine, Cetyl Alcohol, Soluble Collagen, Hydrolyzed Elastin, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol, Sodium Hyaluronate, Sodium PCA, Chamomilla Recutita (Matricaria) Flower Extract, Allantoin, Dimethicone, PEG-100 Stearate, Ascorbic Acid, Diazolidinyl Urea, Methylparaben, Propylparaben, Fragrance (Parfum)",
    usage: "Apply to face, hands or body. Gently massage lotion until it is absorbed into the skin. If used as a foundation for make-up, allow a thin film to remain. 118 mL (when packed)"
  },
  {
    id: "238",
    name: "Forever Aloe Scrub",
    description: "Gentle scrubbing power with the nourishing comfort of aloe vera. Only Forever can bring you such a gentle and refreshing exfoliator with the skin conditioning benefits of pure aloe vera gel. There's a powerful secret inside every tube of Forever Aloe Scrub™ - pure aloe jojoba beads. These unique beads gently scrub away dead skin cells and debris that accumulate in the pores of your skin. When you start using Forever Aloe Scrub™, it won't take long for you to notice radiant, healthier-looking skin. The rich exfoliation process also clears the way for your skin's own renewal process and prepares your skin for your favorite Forever moisturizer. Use Forever Aloe Scrub™ two or three times a week on your body to reveal the kind of luminescence you just won't find with any other exfoliator. We added natural exfoliator has none of the drying or damaging effects of today's synthetic cleansers. The aloe vera used in Forever Aloe Scrub™ is carefully grown at our own fields, hand-harvested and hand filleted to ensure only the freshest, highest quality inner leaf gel is used in every tube of this incredible exfoliator.",
    shortDescription: "Gentle scrubbing power with the nourishing comfort of aloe vera",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Natural exfoliator for the body",
      "Prepares skin for moisturization",
      "Skin conditioning benefits of aloe",
      "Reveals radiant skin",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Gentle exfoliation",
      "Removes dead skin cells",
      "Reveals radiant skin",
      "Prepares skin for moisturizer"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel), Water (Aqua), Hydrogenated Jojoba Oil, Glyceryl Stearate, Polysorbate 60, Sodium Cocoyl Isethionate, Cetyl Alcohol, PEG-100 Stearate, Lauramide Oxide, Copernicia Prunifera (Carnauba) Wax, Hydrated Silica, Sodium Lactate, Tocopherol, Citric Acid, Ascorbic Acid, Diazolidinyl Urea, Methylparaben, Propylparaben, Fragrance (Parfum), Blue 1 (CI 42053)",
    usage: "Apply to wet face or body, and gently massage with fingertips (carefully avoiding the eyes) for two to three minutes using a circular motion. Add more water as needed. Rinse thoroughly and pat dry with a clean, soft towel. 99g (when packed)"
  },
  {
    id: "069",
    name: "R3 Factor",
    description: "Restore your skin's youthful glow. Help your skin retain its natural moisture, restore its resilience and renew its appearance with R3 Factor™. This rich combination of stabilized aloe vera gel, soluble collagen and alpha-hydroxy acids, fortified with vitamins A and E, is such vital to healthy skin. Vitamin E is a powerful antioxidant, while vitamin A helps in the maintenance of healthy skin and is known as the cell renewal vitamin for its effect on skin conditions. Alpha hydroxy acids (AHAs) come from natural plant sources and are also called fruit acids. Together, these fruit acids are exfoliants that loosen dead cells from the skin's surface by dissolving the natural glue-like substances and releasing dead skin cells. These cells create a barrier to moisturizing creams, so getting rid of dead cells evenly means that fresher cells are exposed in the skin's renewal process. As the skin renewal process takes place, you'll experience the full benefits of R3 Factor™ in as little as 21 days. Fruit acid creams have been called the most important skincare agents of the decade. By combining AHAs with soothing aloe, R3 Factor Skin Defense Creme provides a first line of defense in fighting the harsh effects of time to preserve your skin's youthful glow.",
    shortDescription: "Restore your skin's youthful glow",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Helps maintain skin color, texture and feel",
      "Retains, restores and renews skin",
      "Fortified with vitamins A and E",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Maintains skin resilience",
      "Promotes skin renewal",
      "Exfoliates dead cells",
      "Preserves youthful glow"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water (Aqua), Butylene Glycol, Squalane, Methyl Gluceth-20, Cetyl Dimethicone, Prunus Armeniaca (Apricot) Kernel Oil, Glyceryl Stearate, Polyacrylamide, Tocopheryl Linoleate, C13-14 Isoparaffin, Sodium Hyaluronate, Tocopheryl Acetate, Glycolic Acid, Lactic Acid, Saccharum Officinarum (Sugar Cane) Extract, Citrus Limon (Lemon) Fruit Extract, Citrus Aurantium Dulcis (Orange) Extract, Pyrus Malus (Apple) Extract, Camellia Sinensis Leaf Extract, Retinyl Palmitate, Soluble Collagen, PEG-100 Stearate, Ascorbic Acid, Triethanolamine, Diazolidinyl Urea, Methylparaben, Propylparaben, Fragrance (Parfum)",
    usage: "After cleansing, apply to face, neck and other areas where needed. For best results, use both morning and night. 2 OZ. (56.7 g)"
  },
  {
    id: "061",
    name: "Aloe Vera Gelly",
    description: "The very best from our fields to you. Aloe vera is a powerful plant that has been revered for centuries to aid in the soothing of minor skin irritations. Many households kept aloe vera nearby to serve as a 'burn plant' because the inner leaf gel is soothing on minor burns, including sunburns. Forever's Aloe Vera Gelly is a back-to-basics formula that embraces the power of aloe in its purest form. The quality of aloe vera used makes all the difference and our aloe is the first of its kind to receive the International Aloe Science Council (IASC) certification for purity and potency. It takes a lot of effort to earn such a prestigious designation and we're incredibly proud of the work we do to bring you the very best aloe products, and Aloe Vera Gelly is no exception. Every leaf is hand harvested and filleted by hand to preserve the precious gel contained within every plant. You'll know the difference as soon as you start using Forever's Aloe Vera Gelly. Perfect for any skin type, it absorbs readily into skin to soothe skin while moisturizing and conditioning. This thick, translucent gel is almost identical to aloe vera's inner leaf so you know you're getting the best of aloe, just as nature intended.",
    shortDescription: "The very best from our fields to you",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Lubricates sensitive tissue",
      "Soothes, moisturizes and conditions",
      "Doesn't stain clothing",
      "As close to pure, inner leaf aloe as you can get",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Soothes minor skin irritations",
      "Moisturizes and conditions",
      "IASC certified",
      "Pure inner leaf aloe"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water (Aqua), Glycerin, Triethanolamine, Carbomer, Tocopherol, Allantoin, Ascorbic Acid, Diazolidinyl Urea, Disodium EDTA, Methylparaben, Propylparaben",
    usage: "Thoroughly cleanse skin before liberally applying Gelly. Repeat application as needed. 118 mL (when packed)"
  },
  {
    id: "617",
    name: "Aloe Sunscreen",
    description: "Full-spectrum protection that locks in moisture with skin-soothing aloe. Soak in those beach vibes without letting the sun's harmful rays damage your skin. Whether you're heading to the surfboard or heading out for a day at the park, Aloe Sunscreen has your whole family covered. With Aloe Sunscreen, you can go anywhere the sun is shining thanks to your skin's SPF 30 protection that blocks against UVA and UVB rays. UVA rays make up 95% of the radiation that reaches Earth. These rays penetrate the skin more deeply and damage skin's DNA, playing a key role in the aging process and the formation of wrinkles. UVB rays are more damaging to the skin's outer layers and cause more damage than UVA in some cases. They are the primary cause of skin reddening and sunburn. Aloe Sunscreen features a breakthrough blend that includes natural non-nanosized zinc oxide with advanced coating technology. It applies easily, offers superior sun protection without feeling sticky or leaving residue behind. But it isn't just advanced sun blocking technology that makes Aloe Sunscreen such a powerful product. Pure aloe vera from Forever's own fields nourishes the skin, locks in moisture and soothes. Only the highest quality inner leaf gel is used to comfort and defend your skin. We've ramped up the skin-shielding power even further with vitamin E, which combats free radical damage, softens and penetrates deeper for greater moisturization. Aloe Sunscreen is water resistant for 80 minutes. Get the full protective effect by applying generously and every 2 hours when you're out in the sun. Whether you're climbing high toward a mountaintop or enjoying a relaxing weekend cookout, rest assured you can soak in the sun with confidence knowing the power of Aloe Sunscreen is keeping your whole family protected.",
    shortDescription: "Full-spectrum protection that locks in moisture with skin-soothing aloe",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "SPF 30 protection from UVA and UVB rays",
      "Natural zinc oxide sunscreen offers superior protection",
      "Soothes, moisturizes and protects",
      "Water resistant for 80 minutes",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Broad spectrum sun protection",
      "Moisturizes with aloe",
      "Water resistant",
      "Non-sticky formula"
    ],
    ingredients: "Water (aqua), aloe barbadensis leaf juice (stabilized* aloe vera), zinc oxide, octocryiene, homosalate, propanediol, ethylhexyl salicylate, ncopentyl glycol diacaprylate/diacaprate, polyglyceryl-3 dimer dilinoleate, VP/hexadecene copolymer, cetearyl ethylhexanoate, undecane, polytrihydroxystearate, magnesium sulfate, capryloyl glycerol/ sebacic acid copolymer, diheptyl succinate, capryloyl glycerin/ sebacic acid copolymer, sodium benzoate, hexyl cinnamaldehyde, phenoxyethanol, fragrance (parfum), sodium gluconate, chlorphenesin, ethylhexylglycerin, tetrasodium glutamate diacetate, tocopheryl acetate, sodium benzoate benzyl salicylate, benzyl benzoate, ascorbic acid, hexyl cinnamaldehyde, limonene",
    usage: "Apply liberally 15-30 minutes before exposure to the sun. Reapply when skin feels dry, within 80 minutes of swimming and sweating. 4 FL. OZ. (118 mL)"
  },
  {
    id: "605",
    name: "Sonya refreshing gel cleanser",
    description: "The latest in cleansing. You'll notice from the moment the cooling gel touches your skin that this feels different. All bubble, leave-your-skin-tight-feeling cleansers – you've met your match! Our aloe gel, bolstered with worldwide ingredients, makes for the latest and best way to cleanse your face and body in the morning and evening for a gentle and soothing experience. Apple amino acids and desert date extract enrich the soft lather of refreshing gel cleanser to support combination skin. Acacia concinna fruit extract helps remove dead cell build-up and makeup for a thorough, but soft cleansing experience. Refreshing gel cleanser not only uses cleansing agents, but also moisturizing agents like cold pressed baobab oil from trees in Senegal. This tree, also know as 'the tree of life' to natives, is known to live over 500 years. The strength and longevity of this tree makes it an excellent extract to boost our formula. Move over traditional cleansers! Sonya refreshing gel cleanser has a breakthrough system that will have your skin feeling smooth and clean after every wash. Use as part of the Sonya™ daily skincare system for optimal results.",
    shortDescription: "The latest in cleansing",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Conditions while cleansing",
      "Aloe soothes instead of stripping skin",
      "A gentle lather for combination skin",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Gentle cleansing",
      "Removes makeup and impurities",
      "Moisturizes while cleansing",
      "Smooth and clean skin"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua/Eau), Decyl Glucoside, Propanediol, Capryloyl Methicone, Polyacrylate Crosspolymer-6, Sodium Cocoyl Glycinate, 1,2-Hexanediol, Adansonia Digitata Seed Oil, Pyrus Malus (Apple) Fruit Esters, Sorbitan Oleate Decylglucoside Crosspolymer, Coco-Glucoside, Glyceryl Oleate, Acacia Concinna Fruit Extract, Balanites Aeovvtiaca Fruit Extract, Coco-Glucoside, Gypsophila Paniculata Root Extract, Caprylhydroxamic Acid, Caprylyl Glycol, Ethylhexylglycerin, Sodium Cocoyl Apple Amino Acids, Caesalpina Spinosa Gum, Hydroxyacetophenone, Disodium EDTA, Potassium Sorbate",
    usage: "Apply a generous amount to wet fingers and massage into skin. Rinse thoroughly for a refreshed complexion. For best results, follow with illuminating gel or refining gel mask. 4 FL. OZ. (118 mL)"
  },
  {
    id: "606",
    name: "Sonya illuminating gel",
    description: "Make your skin glow. Licorice root and a unique blend of green and brown algae help to even skin tone and blur the appearance of large pores. This gentle blend is paired with liposomes to ensure the benefits get delivered to your skin right where they are needed. We also added red deer flower extract to help reduce the appearance of large pores. Another reason illuminating gel is not like anything else available on the market is a unique combination of Aphanizomenon flos-aquae and bacacarissea root, glycyrrhiza glabra root, morus alba root and artemisia capillaris flower extract, zizyphus jujuba fruit extract. These oriental plants are known for their ability to even and brighten and deliver flawless skin tone. Your improved skin will reflect a soft, smooth texture and emit a healthy glow with envious results. Use as part of the Sonya™ daily skincare system to control oil and deliver moisture where your skin needs it most.",
    shortDescription: "Make your skin glow",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Evens skin tone",
      "Brightens skins' overall appearance",
      "Reduces the appearance of large pores",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Evens and brightens skin tone",
      "Reduces pore appearance",
      "Smooth texture and healthy glow",
      "Controls oil and delivers moisture"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua/Eau), Propanediol, Capryloyl Methicone, Niacinamide, Sodium Gluconate Citrates Copolymer, Butylene Glycol, Sorbitan Olivate, Lecithin, Isopropyl Titanium Triisostearate (Clover) Flower Extract, Scutellaria Baicalensis Root Extract, Glycyrrhiza Glabra (Licorice) Extract, Morus Alba Root Extract, Artemisia Capillaris Flower Extract, Zizyphus Jujuba Fruit Extract, 1,2-Hexanediol, Caprylhydroxamic Acid, Caprylyl Glycol, Ethylhexylglycerin, Hydrogenated Lecithin, Sodium Oleate, Tocopherol, Disodum EDTA, Sorbitan Laurate, Hydroxyethylcellulose, Acetyl Dipeptide-1 Cetyl Ester, Dicrateria Rotunda Oil, Ruta Graveolens (Rue) Flower/Leaf Oil, Ruttnera Lamellosa Oil, Sodium Ascorbate, Phytic Acid",
    usage: "After cleansing, gently message a small amount over entire face for a radiant glow. For best results pair with refreshing gel cleanser, refining gel mask and soothing gel moisturizer. Rinse thoroughly in the morning for a balanced complexion. Use at least 2-3 times a week for optimal results. 1 OZ. (28.3 g)"
  },
  {
    id: "607",
    name: "Sonya Refining Gel Mask",
    description: "Real Beauty Sleep. To make the most of your sleep, we infused this gel with a bounty of botanicals, including: carrot seed oil, artemisia capillaris flower and soybean oil. As the cool gel quickly absorbs into your skin, you'll feel the moisturizing effect of our formula. Aphanizomenon flos-aquae moisturizers like: apple fruit extract, clover flower extract that will leave your skin feeling soft with a youthful glow. Sasa quelpaertensis (Korean bamboo) extract, and licorice root, which has been used for over 3000 years, provide antioxidant support in this formula. This high-quality blend moisturizes your skin while you sleep, without leaving a greasy after-feel. By using it only 2-3 times a week, you'll wake up to skin that looks brighter, younger and more balanced. Use it as part of the Sonya™ daily skincare system for optimal results.",
    shortDescription: "Real Beauty Sleep",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Promotes healthy skin tone",
      "Supports fluctuations of combination skin",
      "Nourishes skin while you sleep",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Overnight skin nourishment",
      "Brightens and balances complexion",
      "Non-greasy formula",
      "Antioxidant support"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua/ Eau), Glycerin, Dimethicone, Pyrus Malus (Apple) Fruit Extract, Capryloyl Methicone, Ammonium Acryloyldimethyltaurate/VP Copolymer, Sorbitan Oleate Decylglucoside Crosspolymer, Dimethicone Crosspolymer, Glycyrrhiza Glabra (Licorice) Root Extract, Scutellaria Baicalensis Root Extract, Morus Alba Root Extract, Trifolium Pratense (Clover) Flower Extract, Zizyphus Jujuba (Jujube) Fruit Extract, Hexylene Glycol, Propanediol, Sasa Quelpaertensis Extract, Polyacrylate Crosspolymer-6, Disodium EDTA, Glycine Soja (Soybean) Oil, Daucus Carota Sativa (Carrot) Seed Oil, Ocimum Basilicum (Basil) Oil, Artemisia Pallens Flower Oil, Phenoxyethanol, Caprylyl Glycol",
    usage: "Apply a generous amount over entire face before bedtime. Leave on overnight. Rinse thoroughly in the morning for a balanced complexion. Use at least 2-3 times a week for optimal results. 2 FL. OZ. (59 mL)"
  },
  {
    id: "608",
    name: "Sonya Soothing Gel Moisturizer",
    description: "A hydra-infused moisture Carrier. You've never felt a lotion like this before. Soothing gel moisturizer looks like a lotion, but this gel holds more water than your skin. Over 10 natural plant extracts and oils, including jojoba esters and olive oil, help skin feel hydrated and work to soothe skin from the elements. Fruit glucan extracted from mushrooms has been added to this unique formula to soothe the skin and even skin tone. We also added anti-aging ingredients like linoleic acid and hydrolyzed collagen, scientifically advanced to go into the skin where it's needed most and phytic acid, a powerful support for combination skin, to improve the look of your complexion. To finish the formula, we infused it with orange peel oil, mandarin orange peel oil, roman chamomile flower oil, geranium flower oil and bergamot fruit oil to leave your skin feeling refreshed, making this your new favorite all-around daily moisturizer. Gently massage into skin on face and neck twice a day in the morning and evening, except when using the refining gel mask. Use it as part of the Sonya™ daily skincare system for optimal results.",
    shortDescription: "A hydra-infused moisture Carrier",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Collagen to improve the appearance of skin",
      "Over 10 natural plant extracts and oils",
      "A hydra-infused moisture carrier",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Deep hydration",
      "Soothes and refreshes skin",
      "Improves skin appearance",
      "Daily moisture carrier"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua/Eau), Propanediol, Caprylicr/Capric Triglyceride, Glycerin, Isoamyl Laurate, Jojoba Esters, Cetearyl Olivate, Sodium Acrylates Copolymer, Sorbitan Olivate, Glycerin, Pyrus Malus (Apple) Fruit Extract, Trilicum Aestivum (Wheat) Germ Extract, Punica Granatum Fruit Extract, Ficus Carica (Fig) Fruit Extract, Morus Alba Fruit Extract, Ginkgo Biloba Nut Extract, Lecithin, Caprylhydroxamic Acid, Caprylyl Glycol, Ethylhexylglycerin, Arginine, Beta-Glucan, Linoleic Acid, Linolenic Acid, Phytic Acid, Hydrolyzed Collagen, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Nobilis (Mandarin Orange) Peel Oil, Anthemis Nobilis Flower Oil, Pelargonium Graveolens Flower Oil, Citrus Aurantium Bergamia (Bergamot) Fruit Oil",
    usage: "Gently massage a moderate amount into skin to soothe and condition. 2 FL. OZ. (59 mL)"
  },
  {
    id: "554",
    name: "infinite by Forever hydrating cleanser",
    description: "Soothing cleanser for softer, hydrated skin. infinite by Forever™ is a fragrance-free, hydrating cleanser that harnesses the power of aloe vera, coconut and apple to melt away dirt, oil and makeup leaving behind a delicate scent of moisture for skin that feels soft and soothed. It's believed that the apple tree was the earliest to be cultivated. The juice has lived through this history fueled by vitamin C, known to strengthen skin's barrier and limit free radical damage and change for thousands of years. We harnessed two key components of this vitamin–ascorbic acid and malic acid–to provide your skin with strong protection against the effects of aging. Mild, moisturizing and milky, this cleanser uses hypoallergenic coco fatty acids to suspend your skin's oils, so they can be carefully and gently washed away from your skin – leaving your face soft to the touch without feeling dry. A key characteristic of youthful skin is being well hydrated and healthy. The age-minimizing cleanser assists your skin's barrier function to fight against tightness and dryness. Bountiful amounts of linoleic acid and vitamin E, found in sunflower seed oil, support skin's lipids and help break down dirt and debris. Don't just wash away dirt and makeup, help your skin look and feel younger to the touch while laying a strong foundation for the rest of your anti-aging routine with infinite by Forever™ hydrating cleanser.",
    shortDescription: "Soothing cleanser for softer, hydrated skin",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Cleanses skin of dirt, oil and makeup without drying",
      "Protects against the signs of aging",
      "Increases skin hydration",
      "Gentle, sulfate free",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Hydrating and gentle cleansing",
      "Protects against aging",
      "Moisturizes without drying",
      "Soft and soothed skin"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water, Helianthus Annuus (Sunflower) Seed Oil, Caprylic/Capric Triglyceride, Propanediol, Sodium Cocoyl Glycinate, Cetearyl Alcohol, Sodium Cocoyl Apple Amino Acids, Glycerin, Glycerin/Sebacic Acid Copolymer, Pyrus Malus (Apple) Fruit Extract, Glycerin, Sorbitan Palmitate, Stearic Acid, Polyacrylate Crosspolymer-6, Dimethyl Succinate, Coceth-7, Glycoside, Ethylhexylglycerin, Glycol, Arginine, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Polyhydroxystearic Acid, Xanthan Gum, Elaeis Guineensis (Palm) Kernel Oil, Hydroxyacetophenone, Disodium EDTA, Phenoxyethanol, Potassium Sorbate",
    usage: "Apply a generous amount onto wet fingers and massage into a circular motion over the entire face and neck. Rinse thoroughly for smooth, clean skin. 4 FL. OZ. (118 mL)"
  },
  {
    id: "555",
    name: "infinite by Forever firming serum",
    description: "Target aging from the outside with this breakthrough formula. This potent elixir provides clear results. infinite by Forever™ firming serum is a lightweight and fast absorbing liquid designed to help reduce the appearance of fine lines and wrinkles while restoring skin's natural firmness and elasticity. The collagen power of Forever Alpha-E Factor is fueled by anti-aging powerhouse vitamin E, which pulls double duty by fighting free radicals while promoting soft and radiant skin. This nourishing formula boosts the power of aloe from our own fields with a clinically tested ingredient, trifluoroacetyl tripeptide-2. It works by supporting this single ingredient significantly improves skin elasticity and is known to combat progerin, a harmful protein that increases as you age and wreaks havoc on your skin. By mimicking natural cell processes, this three-amino acid peptide improves the feel of skin's firmness and reduces the look of fine lines and wrinkles. But we didn't stop there. Paired with hydrolyzed sodium hyaluronate, a natural key ingredient, to support moisture and skin conditioners, firming serum is scientifically formulated so that aloe achieves its optimal benefits to soothe and smooth skin. Yeast extract helps support collagen synthesis and natural skin defenses to reduce the appearance of uneven skin tone while whey protein revitalizes the skin by increasing its smoothness, firmness and thickness. This advanced fragrance free formula is a skin scientist's dream bolstered with the power of nature and the most advanced laboratory findings to help you look and feel your best.",
    shortDescription: "Target aging from the outside with this breakthrough formula",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Reduces appearance of fine lines and wrinkles",
      "Improves the feel of skin elasticity and firmness",
      "Supports healthy collagen synthesis and assists uneven skin tone",
      "Features a cutting edge, clinically tested ingredient",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin elasticity",
      "Supports collagen synthesis",
      "Lightweight, fast-absorbing"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua/Eau), Butylene Glycol, Glycerin, Hydroxyethylcellulose, 1,2-Hexanediol, Dextran, Tripeptide-1, Trifluoroacetyl Tripeptide-2, Hydrogenated Starch Hydrolysate, Yeast Extract, Whey Protein, Caprylol Glyceraldehyde-3, Caprylhydroxamic Acid, Caprylyl Glycol, Ethylhexylglycerin, Propanediol, Hydrolyzed Sodium Hyaluronate, Sodium Hyaluronate, Arginine, Potassium Sorbate",
    usage: "Apply 1-2 pumps to clean skin. Gently massage into face and neck until absorbed for more youthful looking skin. 1 FL. OZ. (30 mL)"
  },
  {
    id: "558",
    name: "infinite by Forever restoring crème",
    description: "The best of science and nature for younger, smoother skin. infinite by Forever™ restoring crème absorbs fast and leaves skin feeling incredibly smooth with saturation of nature's best conditioning ingredients. We've combined the best of science and nature to help you gain an advantage in the aging game with firming skin while vitamin B3 and beet root even out tone and texture to support a youthful complexion. Powerful botanical ingredients like acai and pomegranate provide antioxidant support while leaving skin feeling moisturized and smooth. The unique running hamni plant, native to Australia and Morocco shows real promise that when combined with squalane, jojoba esters, glycolipids and beeswax helps with moisturizing properties and help restoring crème sweep across your skin. An anti-aging essential oil blend of lavender, patchouli, eucalyptus, lime and orange-peel support aloe to replenish and rejuvenate parched skin. To finish off this moisturizing powerhouse, we've added the latest chemistry to provide a new sugar structure that improves skin's water barrier and retention. As a finishing touch, infinite by Forever™ restoring crème seals in all of the powerful benefits to keep your skin nourished and younger looking.",
    shortDescription: "The best of science and nature for younger, smoother skin",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Anti-aging formula supports younger looking skin",
      "Soothes and moisturizes",
      "Over 15 skin conditioning ingredients",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Younger, smoother skin",
      "Firms and moisturizes",
      "Evens tone and texture",
      "Rich in antioxidants"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel/ gel d'aloes officinal stabilisé), Water (Aqua/Eau), Isoamyl Laurate, Propanediol, Butylene Glycol, Glyceryl Caprylate, Capric Triglyceride, Jojoba Esters, Cetyl Alcohol, Fructooligosaccharides, Beta Vulgaris (Beet) Root Extract,Cetearyl Alcohol, Hydroxyacetophenone, Coco-Glucoside, Squalane, Polyglyceryl-10 Beeswax, Xylitylglucoside,Anhydroxylitol, Xylitol, Caprylyl Glycol, Ethylhexylglycerin, Niacinamide, Isoglycerin Glucan, Sodium Hyaluronate, Hydrolyzed Corn Starch, Polyacrylate Crosspolymer-6, Tetrasodium Glutamate Diacetate, Butylene Glycol, Hydrolyzed Jojoba Esters, Linoleic Acid, Linolenic Acid, Arginine, Euterpe Oleracea Fruit Extract, Linoleic/Linolenic Polyglycerides, Glycosphingolipids and Glycolipids, Punica Granatum Seed Oil, Punica Granatum Extract, Glycerin, Caesalpinia Spinosa Gum, Arginine, Xanthan Gum, Camellia Sinensis Leaf Extract, Phenoxyethanol, Fragrance (Parfum)",
    usage: "Apply one full pump and massage into face and neck to help skin appear rejuvenated. 1.7 OZ. (48.2 g)"
  },
  {
    id: "612",
    name: "Aloe Activator",
    description: "Moisturize, refresh and soothe with the power of aloe. With over 98% aloe vera gel, aloe activator leaves skin feeling refreshed and soothed from the moment it touches your face. Aloe is ideal for sensitive skin and its many essential components like vitamins A, C and E make aloe activator a perfect addition to any skin care regimen. Aloe is paired with allantoin, which is not only an effective moisturizer, but also a perfect complement to gently soften and smooth skin. Of course, it's the quality of the aloe that makes all the difference. Forever's aloe activator is made with pure inner-leaf aloe vera from our own fields. Every leaf is hand harvested, hand filleted and packaged within hours to ensure maximum freshness and potency. Aloe activator is an enriching moisturizer, containing enzymes, amino acids and polysaccharides. This step in your daily beauty ritual may become your new favorite, as it not only feels good to apply, but the after-effects will leave your skin looking and feeling better. Aloe activator is gentle enough for use on the entire face, even around the eyes. Use it as a moisturizer and refresher on its own.",
    shortDescription: "Moisturize, refresh and soothe with the power of aloe",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Cleans, soothes and refreshes",
      "A powerful skin conditioner",
      "Gentle for the entire face, even eye area",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Refreshes and soothes skin",
      "Gentle moisturizer",
      "Softens and smooths skin",
      "Enriched with aloe"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua), Allantoin, Disodium EDTA, Potassium Sorbate",
    usage: "Aloe activator is a multi-purpose product to clean or freshen, apply to a cotton ball and gently wipe across skin. For an Aloe Mask, mix 1 tsp mask powder with 1 tsp aloe activator and apply a thin layer to clean skin. After 20 minutes, rinse thoroughly with warm water. Use at least weekly. 4.4 FL. OZ. (130 mL)"
  },
  {
    id: "560",
    name: "Balancing Toner",
    description: "Supports skin's pH balance. Does your skin need some extra attention after cleansing? Forever's balancing toner is designed to ensure all dirt and debris is washed off, while minimizing the appearance of pores and adding extra hydration, making it ideal for use between cleansing and moisturizing. Balancing toner provides an exclusive blend of seaweed extract and sodium hyaluronate to moisturize and soften skin while supporting a youthful appearance. The addition of cucumber extract adds another layer of soothing hydration while promoting improved skin tone and texture, thanks to naturally-occurring lignans. White tea extract is a rich antioxidant with a high polyphenolic content that works with aloe to balance fluctuations of the skin and fight free radicals. To further supercharge this powerful formula, we used hyaluronic acid, which has been called a molecular sponge because of its water attracting abilities. Only the freshest, purest aloe from our own fields is used in balancing toner to ensure only the finest, most potent ingredients refresh and nourish your skin. Every aloe plant is carefully nurtured, hand harvested and hand filleted to extract only pure, powerful inner-leaf gel. Notice a profound difference in the way you skin looks and feels when you add balancing toner to your routine!",
    shortDescription: "Supports skin's pH balance",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Refreshes, soothes and hydrates",
      "Smooths skin's tone and texture",
      "Minimizes the appearance of pores",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Balances skin pH",
      "Minimizes pore appearance",
      "Hydrates and soothes",
      "Supports youthful appearance"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice, (Stabilized Aloe Vera Gel) Water (Aqua/Eau), Propanediol, Sorbitol, 1,2- Hexanediol, Chlorella Vulgaris Extract, Sodium Hyaluronate, Glycerin, Cucumis Sativus (Cucumber) Fruit Extract, Camellia Sinensis Leaf Extract, Beta Glucan, Sodium Lactate, Phytic Acid, Allantoin, Potassium Sorbate",
    usage: "Apply a generous amount to face and neck after cleansing using a cotton ball or pad. Use twice daily to minimize the appearance of pores and hydrate skin. 4.4 FL. OZ. (130 mL)"
  },
  {
    id: "051",
    name: "Aloe Propolis Creme",
    description: "The best of aloe and the hive. Only Forever could create a product as inventive as Aloe Propolis Creme. This nourishing cream combines two of our most prized ingredients, pure inner leaf aloe vera gel and bee propolis. Together, these two fundamental elements help your skin maintain beautiful tone and texture. Bee propolis is a resinous substance that bees create to fortify their hives. Turns out it also has properties that create a natural barrier on your skin, locking in the natural skincare benefits of aloe. Aloe vera combined with vitamin A, E and C work to nourish and moisturize the skin while bee propolis helps rejuvenate skin's appearance for smoother, suppler look and feel. Aloe Propolis Creme also enhances the soothing power of aloe with the addition of chamomile. Of course, we use pure, inner leaf aloe vera gel from our own fields. The aloe is hand harvested and filleted to avoid damage and ensure only the highest quality aloe vera makes it into our products. It's easy to see why Aloe Propolis Creme is one of Forever's flagship products. Treat your skin to the soothing, nourishing and protecting power packed inside every bottle.",
    shortDescription: "The best of aloe and the hive",
    image: "",
    category: "Skincare",
    categoryId: "skincare",
    features: [
      "Rich blend of aloe vera and bee propolis",
      "Helps maintain beautiful skin tone and texture",
      "Nourishing and moisturizing",
      "Helps soothe skin irritation",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Maintains beautiful skin tone and texture",
      "Creates natural moisture barrier",
      "Nourishes with vitamins A, E and C",
      "Soothes and protects skin"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel), Glyceryl Stearate, Propylene Glycol, Cetyl Alcohol, PEG-100 Stearate, Lanolin, Sorbitol, Ethylhexyl Palmitate, Ethylhexyl Stearate, Diethylene Glycol Diethyl Ether, Fragrance (Parfum), Lanolin Alcohol, Dimethicone, Tocopherol, Beta Carotene (Provitamin A), Zea Mays (Corn) Oil, Chamomilla Recutita (Matricaria) Flower Extract, Triethanolamine, Ascorbic Acid, Disodium EDTA, Diazolidinyl Urea, Methylparaben, Propylparaben, Fragrance (Parfum)",
    usage: "Apply liberally as needed. 4 OZ. (113 g)"
  },
  {
    id: "284",
    name: "Aloe Avocado Face & Body Soap",
    description: "Gentle cleansing that leaves skin soft and supple. Clean, healthy skin is the foundation of natural beauty. And there's no better way to achieve that beauty than with natural ingredients like pure avocado oil and aloe vera from Forever's own fields. Our Aloe Avocado Face & Body Soap moisturizes as it cleans, leaving you with softer, smoother and more radiant skin. Avocados are a nutrient-dense fruit containing many beneficial vitamins and minerals, including vitamins A, C and E. Avocado's high fat content creates a rich base for our soap and helps even dry skin feel smooth after cleansing. Aloe Avocado Face & Body Soap contains hand harvested, pure aloe vera to help condition and soothe, leaving your skin feeling moisturized all day long. Forever's Aloe Avocado Face & Body Soap smoothes, nourishes and moisturizes without irritation, even for those with sensitive skin. Gentle enough for your face or your entire body, the freshly-picked gentle scent will help wake you up in the morning and the softness from Aloe Avocado Face & Body Soap will last throughout the day. For more than 40 years, Forever has sought out the highest quality ingredients to provide you with products that bring science and nature together for skin that looks and feels beautiful.",
    shortDescription: "Gentle cleansing that leaves skin soft and supple",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "Rich texture",
      "Naturally-derived cleansers",
      "Perfect for all skin types",
      "Freshly-picked citrus scent",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Moisturizes as it cleanses",
      "Leaves skin soft and supple",
      "Rich in vitamins A, C and E",
      "Gentle for face and body"
    ],
    ingredients: "Sodium Palmate, Sodium Cocoate (or) Sodium Palm Kernelate, Water, Glycerin, Fragrance, Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Persea Gratissima (Avocado) Fruit Oil, Sodium Chloride, Yellow 10 (CI 47730), Red 4 (CI 14700), Blue 1 (CI 42090), Tetrasodium Glutamate Disodium, Sodium Gluconate, Tetrasodium Glutamate Diacetate, Titanium Dioxide (CI 77891, CI 77492), Oxides (CI 77499, CI 77491, CI 77492)",
    usage: "Use Aloe Avocado Face & Body Soap for cleansing the skin as needed. Rinse completely, then gently pat dry with a towel. NET WT 5 OZ. (142 g)"
  },
  {
    id: "641",
    name: "Aloe-Jojoba Conditioner",
    description: "Softness and shine with a hydrating boost. A good conditioner does all the work when it comes to getting the most out of your hair routine. It softens, smooths and makes hair more manageable. Forever's Aloe-Jojoba Conditioner does all this while nourishing deeply and boosting hair and scalp hydration without added sulfates. Our lightweight formula is perfect for daily use and includes three different oils to lock in moisture without weighing hair down. Jojoba oil is rich in natural fats to strengthen hair and promote thickness. Argan oil dubbed 'liquid gold of Morocco,' nourishes hair with the antioxidant power of vitamin E. We also added rosehip oil to keep hair soft and moisturized while fortifying with vitamins C, E and B. The backbone of Aloe Jojoba Conditioner is stabilized aloe vera gel from our own fields. Our inner leaf aloe vera contains 75 active components that help this conditioner soften the scalp and bring out your hair's natural shine. Forever Aloe Jojoba Conditioner pairs perfectly with Aloe Jojoba Shampoo to improve combability of hair while smoothing the strands for easy styling. This soothing conditioner features the same invigorating fragrance as our Aloe Jojoba Shampoo: tropical fruit, sugarcane and cream and melon. Our formula is gender and age neutral, making it perfect for the entire family. Give your hair the very best of what it has to offer with Forever Aloe-Jojoba Conditioner.",
    shortDescription: "Softness and shine with a hydrating boost",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "Lightweight conditioner for every hair type",
      "Softens and smooths hair",
      "Supports hair and scalp hydration",
      "Locks in moisture with three different oils",
      "Gentle on the scalp",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Softens and smooths hair",
      "Boosts scalp hydration",
      "Strengthens and promotes thickness",
      "Easy styling and combability"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua/ Eau), Behentrimonium Chloride, Cetearyl Alcohol, Isoamyl Laurate, 1,2-Hexanediol, Arginine, Rosmarinus Officinalis (Rosemary) Kernel Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Capryloyl Glycerol/Sebacic Acid Copolymer, Diheptyl Succinate, Glycerin, Hydrolyzed Jojoba Esters, Phenoxyethanol, Fragrance (Parfum)",
    usage: "After shampooing with Aloe-Jojoba Shampoo, massage Aloe-Jojoba Conditioner into hair and leave on for 2 to 3 minutes. Rinse completely and dry. 10 FL. OZ. (296 mL)"
  },
  {
    id: "640",
    name: "Aloe-Jojoba Shampoo",
    description: "Deep cleansing and nourishing power for all hair types. Made with pure inner leaf aloe vera and hair strengthening jojoba oil, Forever's Aloe-Jojoba Shampoo is the perfect partner to keep your hair in the best it can be. Enjoy the refreshing fragrance of a tropical fruit medley with hints of sweet cream as the rich natural lather helps easily rinse away dirt and oil. With no added sulfates, Aloe-Jojoba Shampoo helps maintain your scalp's moisture balance while keeping it soft and manageable. Forever's own stabilized aloe vera gel not only helps your hair retain moisture but works as a natural emulsifying agent that leaves hair feeling clean and renewed with a beautiful shine. In addition to cleansing your hair, we've added jojoba oil, which is rich in natural fats to promote strength and thickness. This lightweight oil is nourishing, soothing and gentle on the scalp. Forever boosted the fortifying power of this shampoo even further with argan oil, vitamin B5 and rose hip oil together. These potent ingredients provide nutrients, unsaturated fatty acids and antioxidants to support healthy hair and help keep it moisturized and soft. Forever's Aloe-Jojoba Shampoo is perfect for your whole family. Experience the feeling of deep clean that leaves your hair looking and feeling its absolute best. To achieve optimal results, follow your shampoo with Forever's Aloe-Jojoba Conditioner!",
    shortDescription: "Deep cleansing and nourishing power for all hair types",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "All-purpose shampoo for every hair type",
      "Gentle on scalp",
      "Natural lather to easily rinse away dirt and oil",
      "Helps promote soft, manageable hair",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Deep cleansing action",
      "Maintains scalp moisture balance",
      "Strengthens and promotes thickness",
      "Beautiful shine and manageability"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel), Water, Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Hydroxysultaine, Sodium Cocoyl Glycinate, Lauryl Glucoside, Sorbitan Oleate Decylglucoside Crosspolymer, Glycerin, Guiar Hydroxypropyltrimonium Chloride, Hydroxyyacetophenone, Chlorphenesin, Disodium EDTA, Fragrance, Potassium Sorbate, Dimethicone PG-Diethylmonium Chloride, Citric Acid, Rosmarinus Officinalis (Rosemary) Leaf Oil, Propanediol, Argania Spinosa Kernel Oil, Panthenol, Rosa Canina Fruit Oil, Simmondsia Chinensis (Jojoba) Seed Oil",
    usage: "Apply to wet hair and massage to stimulate scalp and create a rich lather. Rinse thoroughly. For best results follow with Aloe-Jojoba Conditioner. 10 FL. OZ. (296 mL)"
  },
  {
    id: "067",
    name: "Aloe Ever-Shield",
    description: "All-day odor protection with the soothing power of aloe. Fresh-scented and gentle on sensitive skin, Aloe Ever-Shield™ offers all-day protection against underarm odor with the soothing power of aloe. Aloe Ever-Shield™ is made with a high content of pure inner leaf aloe vera gel from Forever's own fields. The rich texture combined with the natural soothing power of aloe allows Aloe Ever-Shield™ to glide on smoothly and it won't stain your clothes! Gentle on skin, you can apply it directly after showering without irritation. The clean, pleasant aroma is never overpowering. Maintain that fresh feeling all day, even when the temperature rises and pressure is on. Tackle the day with confidence knowing Aloe Ever-Shield™ is here to keep you feeling fresh and clean.",
    shortDescription: "All-day odor protection with the soothing power of aloe",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "No harsh aluminum salts",
      "Great for all skin types, even sensitive skin",
      "Rich, soothing texture",
      "Does not stain clothes",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "All-day odor protection",
      "Gentle on sensitive skin",
      "Soothing aloe formula",
      "Won't stain clothes"
    ],
    ingredients: "Propylene Glycol, Water, Sodium Stearate, Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Fragrance (Parfum), Triclosan",
    usage: "Apply Aloe Ever-Shield under your arms every day for a fresh and clean feeling all day long. NET WT 3.25 OZ. (92.1 g)"
  },
  {
    id: "028",
    name: "Forever Bright Toothgel",
    description: "Advanced teeth cleaning for the whole family. Forever Bright™ toothgel combines aloe vera with natural ingredients for clean teeth, fresh breath and refreshing flavor. Our formula is fluoride-free so your whole family can enjoy the combination of natural peppermint and spearmint with a frothy texture that will leave your mouth feeling fresh and clean. This innovative toothgel is made using stabilized aloe vera gel from Forever's own fields and can help you fight plaque as part of a regular brushing routine. Forever Bright™ also contains bee propolis, which has been shown to help promote gum health and prevent bad breath. Forever conducted years of research, collaborating with scholars and dentists to create a perfect aloe-based formula that is safe and effective for the entire family. With no animal by-products, Forever Bright™ is a great option for vegetarians. Brushing your teeth twice a day and maintaining a balanced diet is the best way to ensure your teeth look and feel great. Our toothgel is the perfect addition to your daily routine. Treat your mouth to the invigorating sensation and cleansing power of Forever Bright™.",
    shortDescription: "Advanced teeth cleaning for the whole family",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "For a fresh and clean feeling",
      "Fluoride-free",
      "Contains bee propolis",
      "Refreshing natural mint flavor",
      "Gluten Free",
      "Suitable for vegetarians"
    ],
    benefits: [
      "Fights plaque",
      "Promotes gum health",
      "Fresh breath",
      "Safe for whole family"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Sorbitol, Hydrated Silica, Glycerin, Sodium Lauryl Sulfate, Flavour (Peppermint), Sodium Saccharin, Carrageenan, Sodium Benzoate, Chlorophyllin-Copper Complex, Propolis Extract",
    usage: "Brush after meals with Forever Bright™ Toothgel for a healthy-looking smile. Do not use if seal is cut, broken or missing. 4.6 OZ. (130 g)"
  },
  {
    id: "032",
    name: "Dream by Forever",
    description: "For the Classic Beauty inside out. Absolute sophistication embodies the Dream by Forever Deodorant. She radiates a new kind of beauty that shows up in a timeless manner. She is authentic and true to oneself and others. She is consistent and focused who inspires and leads others. She is what you stand for, trust and have accomplished. Indeed, refined, Dream by Forever is the fragrance of a woman with dreams, who is accomplished in her own way and is accustomed to shine. Dream by Forever illuminates the sophistication in women. This fragrance is for women who have big dreams, are graceful, confident, consistent, focused, inspiring, accomplished and outstanding. It is for each one of you and that's what keeps you dazzling. A radiant blend of flowers and oriental notes along with moisturizing and nourishing aloe vera. Dream by Forever has naturally derived ingredients. A no gas deodorant which lasts longer up to 8 - 9 hours. Dream big and Shine on with this classic fragrance.",
    shortDescription: "For the Classic Beauty inside out",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "A floral oriental fragrance from naturally derived ingredients",
      "Enriched with moisturizing and nourishing aloe vera",
      "No gas deodorant – Contains perfume rather than vaporizer making it long lasting",
      "2x perfume as compared to a standard deodorant",
      "Prevents the odour formation leaving a pleasant fragrance all day long",
      "No Aluminium",
      "Can safely be applied on skin",
      "Extremely delicate, also suitable for sensitive skin – RIPT tested",
      "Paraben free",
      "Upto 1020 sprays",
      "Non pressurized container, safe to use",
      "Alcohol of Vegetable origin"
    ],
    benefits: [
      "Long-lasting fragrance up to 8-9 hours",
      "Moisturizes and nourishes",
      "Safe for sensitive skin",
      "Prevents odor formation"
    ],
    ingredients: "Denatured Ethyl Alcohol (Ethyl Alcohol 95%(v/v) Contents: 80% w/w Dimethoxane with TBA + Bitrex ), Aqua, Parfum, Manderin Oil, Benzoin extract, Elemi oil, Patchouli oil, Pink peppercorn extract, Ylangylang oil, Aloe Barbadensis Leaf Juice",
    usage: "Shake the can before use. Hold the can upright 15cms away from the body and spray. NET WT 150 ml"
  },
  {
    id: "033",
    name: "Desire by Forever",
    description: "For a man who desires to be confident, accomplished and multi-dimensional. Desire by Forever is for a man with confidence. One who dares to be challenged – dynamic, daring, charismatic. For a man who has a constant desire to better himself, surpass competition. A strong man in tune with the world. A man of integrity, the multi-dimensional man of the new century – confident and accomplished. Desire embrasies the confidence of a man in today's day and age. This fragrance reflects the spirit of a man who has a desire for freedom, liberty and strength. Desire man is a multi-dimensional man - confident and accomplished who dares to be challenged and desires to excel forever. Desire by Forever is a no gas deodorant spray which lasts for up to 8 - 9 hours. It belongs to Oriental, woody and fruity family.",
    shortDescription: "For a man who desires to be confident, accomplished and multi-dimensional",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "An oriental, woody and fruity fragrance from naturally derived ingredients",
      "Enriched with moisturizing and nourishing aloe vera",
      "No gas deodorant – Contains perfume rather than vaporizer making it long lasting",
      "2x perfume as compared to a standard deodorant",
      "Prevents the odour formation leaving a pleasant fragrance all day long",
      "No Aluminium",
      "Can safely be applied on skin",
      "Extremely delicate, also suitable for sensitive skin – RIPT tested",
      "Paraben free",
      "Upto 1020 sprays",
      "Non pressurized container, safe to use",
      "Alcohol of Vegetable origin"
    ],
    benefits: [
      "Long-lasting fragrance up to 8-9 hours",
      "Moisturizes and nourishes",
      "Safe for sensitive skin",
      "Prevents odor formation"
    ],
    ingredients: "Denatured Ethyl Alcohol (Ethyl Alcohol 95%(v/v) Contents: 80% w/w Dimethoxane with TBA + Bitrex ), Aqua, Parfum, Gualacwood Oil, Lemon Oil, Patchouli Oil, Manderin Oil, Black Pepper Oil, Cedarwood Oil, Cistus Labdanum extract, Elemi Oil, Eugenol, Geranium Oil, Lavendin Oil,  Nutmeg Oil, Pink Peppercorn extract, Aloe Barbadensis Leaf Juice",
    usage: "Shake the can before use. Hold the can upright 15cms away from the body and spray. NET WT 150 ml"
  },
  {
    id: "633",
    name: "Aloe Liquid Soap",
    description: "A powerful, gentle and versatile cleanser for the whole family. Cleanse and maintain skin's moisture with Forever's Aloe Liquid Soap. Our creamy, pearlescent formula cleans and nourishes to leave your skin feeling fresh and renewed. Whether you wash your hands at the sink or in the shower, Aloe Liquid Soap harnesses the power of aloe with other quality ingredients to deliver a superior cleansing experience for the entire family. By combining the best of nature with pure aloe vera from our own fields, Forever has created a liquid soap that leaves skin feeling soft and clean. Aloe soothes and softens, while argan oil delivers vitamin E and natural fatty acids to condition and promote healthy skin. This extraordinary ingredient is known as 'liquid gold of Morocco' and is carefully harvested from the fruit of the tree. We also boosted the skin enhancing benefits of Aloe Liquid Soap with jojoba esters and cucumber fruit extract to help maintain moisture. The soothing properties combine perfectly with aloe vera to gently cleanse and leave skin feeling smooth and soft. But the benefits don't stop there. We've added Arnica fruit extract, harvested from a yellow flower that grows in the mountains, to help stimulate skin and leave it feeling fresh and rejuvenated. Top notes of citrus mingle with a backdrop of woodsy and floral aromas like cinnamon spice, cedar leaf and rose for a fragrance that enhances the feeling of freshness. With a combination of natural oils, extracts and pure aloe vera, Aloe Liquid Soap has just what your skin needs to feel clean, nourished and soft.",
    shortDescription: "A powerful, gentle and versatile cleanser for the whole family",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "Naturally derived cleansers help support a gentle lather",
      "Argan and jojoba infuse moisture into your skin",
      "Soft on sensitive skin",
      "Suitable for the entire family",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Gentle cleansing",
      "Moisturizes and nourishes",
      "Soft on sensitive skin",
      "Fresh fragrance"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water, Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Hydroxysultaine, Propanediol, Cocamidopropyl Betaine, 1,2-Hexanediol, Sodium Methyl 2-Sulfotaurate, PEG-120 Methyl Glucose Dioleate, Polysorbate 20, Hydroxyacetophenone, Sodium Chloride, Disodium 2-Sulfolaurate, Polyquaternium-39, Phenoxyethanol, Chlorphenesin, Laureth-4, Caprylol Glycol, Fragrance, Citric Acid, Hydrolyzed Jojoba Esters, Potassium Sorbata, Sorbic Acid, Argania Spinosa Kernel Oil, Cucumis Sativus (Cucumber) Fruit Extract, Arnica Montana Flower Extract, Cucumis Sativus (Cucumber) Fruit Extract",
    usage: "Dispense, wet, lather and rinse completely. 473 mL"
  },
  {
    id: "646",
    name: "Aloe Body Wash",
    description: "Gentle, powerful cleansing with skin-conditioning aloe. Let the best of what nature has to offer nourish and cleanse your skin with Forever's new Aloe Body Wash. This rich, free-rinsing formula features powerful yet gentle cleansing with skin conditioning ingredients that will wash away dirt and oil leaving your skin looking and feeling refreshed. Aloe Body Wash is pH balanced to help retain skin's moisture and promote hydration. Key ingredient, aloe vera, aids anti-aging by promoting moisturizing and collagen production while vitamin C and E support healthy-looking skin. Our formula features a rich, inviting fragrance of woods, amber and a subtle blend of herbs for a fresh and understated aroma. You'll notice something a little different about Aloe Body Wash's unique color. The pleasing shade of light green comes from natural copper chlorophyll! You'll feel the difference right away as Aloe Body Wash forms into a nice, creamy foam with rich color. The thick lather makes a little bit of moisture. The gentle cleansing is made possible with ingredients like argan oil, arnica flower extract and hydrolyzed jojoba esters, which help soften skin while increasing hydration and smoothness. Don't reach for another body wash that leaves your skin feeling dry or stripped of nutrients. With Aloe Body Wash, you'll get the powerful cleansing you're looking for with the perfect blend of ingredients to leave your skin looking and feeling healthy and refreshed.",
    shortDescription: "Gentle, powerful cleansing with skin-conditioning aloe",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "Gentle yet powerful cleanser",
      "Removes dirt and oil to leave skin feeling clean and soft",
      "Retains skin's moisture",
      "Maintains and promotes skin hydration",
      "Leaves skin feeling clean and fresh",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Gentle yet powerful cleansing",
      "Retains skin moisture",
      "Promotes hydration",
      "Leaves skin feeling fresh"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua/ Eau), Cocamidopropyl Betaine, Cocamidopropyl Hydroxysultaine, Propanediol, Sodium Methyl 2-Sulfolaurate, Sodium Cocoyl Glutamate, Sodium Cocoamphoacetate, Polyacrylate Crosspolymer-6, Disodium 2-Sulfolaurate, Lauryl Glucoside, Hydrolyzed Jojoba Esters, Chlorellas Crispus Extract, Argania Spinosa Kernel Oil, Arnica Montana Flower Extract, Glycerin, Sodium Cocoyl Glutamate, Tetrasodium Glutamate Diastearate, Laureth-4, Sodium Hyaluronate, Caprylol Glycol, Hydroxyacetophenone, Disodium EDTA, Citric Acid, Chlorphenesin, Phenoxyethanol, Sorbic Acid, Potassium Sorbate, Fragrance (Parfum), Chlorophyllin-Copper Complex (CI 75810)",
    usage: "Apply to a shower puff, loofah or sponge and gently soap the entire body using a circular motion. Rinse well. 8 FL. OZ. (236 mL)"
  },
  {
    id: "564",
    name: "Aloe Cooling Lotion",
    description: "Recharge tired muscles and joints with invigorating ingredients. Refresh tired muscles and joints after a long day or challenging workout with Aloe Cooling Lotion. Our light, invigorating formula provides an instant cooling sensation, both revitalizing hard-working muscles and promoting recovery. Perfect to put in your gym bag or on your nightstand, Aloe Cooling Lotion contains uplifting menthol, eucalyptus and Methylsulfonyl Methane, or MSM – an organic compound which is the third most abundant mineral in our body. Let the power of menthol, inner leaf aloe and other natural ingredients support your active lifestyle. Experience a relaxed sensation by massaging Aloe Cooling Lotion into your skin at the end of a long day or post-workout.",
    shortDescription: "Recharge tired muscles and joints with invigorating ingredients",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "Cooling lotion with menthol, eucalyptus and aloe",
      "Conditions skin and easy to massage into muscles and joints",
      "Powerful formula",
      "Provides a powerful, refreshing sensation",
      "Helps ease tired muscles with a cooling, soothing effect",
      "Aids with recharging and refreshing post-exercise",
      "Quick-absorbing, non-greasy feel on the skin",
      "Gluten Free",
      "Suitable for vegetarians",
      "Suitable for vegans"
    ],
    benefits: [
      "Instant cooling sensation",
      "Revitalizes tired muscles",
      "Promotes recovery",
      "Non-greasy formula"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice (Stabilize Aloe Vera Gel/gel d'aloes officinal stabilisé), Water (Aqua/Eau), Dimethyl Sulfone, Menthol, Arginine, Glycerin, Carbomer, Dimethicone, Eucalyptus Globulus Leaf Oil, Camphor, Allantoin, Sodium Hyaluronate, Borago Officinalis Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Disodium EDTA, Caprylyl Glycol, Hexylene Glycol, Ethylhexylglycerin, Polysorbate 80, Ascorbic Acid, Tocopherol,Phenoxyethanol, Potassium Sorbate",
    usage: "Apply liberally and massage into skin as needed. Avoid contact with eyes. Should contact occur, flush with water for several minutes. 4FL. OZ (118mL)"
  },
  {
    id: "082",
    name: "Forever Bhringraj Hair Fall Control Oil",
    description: "Forever Bhringraj Hair Fall Control Oil blends the ancient wisdom of Ayurveda with modern hair care technology to deliver a holistic solution for all your hair needs. At its core, this premium oil is carefully formulated to address common hair concerns while promoting overall scalp and hair health. With a blend of 22 natural ingredients, it boasts properties. It helps fight frizz, restores moisture, and enhances the shine of your hair. Enriched with Bhringraj, Aloe Vera, Neem, Tea Tree Oil, Amla, and Grapeseed Oil, this premium hair oil provides comprehensive benefits including strengthening hair to reduce breakage, promoting hair growth, while Aloe Vera restores the natural pH balance of the scalp. Neem cleanses and strengthens the hair follicles to help boost hair thickness. Amla treats dandruff with its antifungal properties. Tea Tree Oil helps prevent scalp infections. Amla treats dandruff and provides essential nutrients to the hair. This product has been clinically tested and approved. 100% agreed reduction in hair fall. 100% agreed it promotes hair growth. 97% agreed it makes hair stronger. 100% agreed strengthens hair to reduce breakage. 100% agreed it rinse of well. 100% agreed on scalp irritation. Forever Bhringraj Hair Fall Control Oil is an exceptional choice for those seeking a natural and effective hair care solution.",
    shortDescription: "Forever Bhringraj Hair Fall Control Oil",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "A blend of 22 natural ingredients",
      "Clinically tested and approved",
      "Strengthens hair and reduces hair breakage",
      "Promotes hair growth",
      "Shows improvement in hair growth",
      "Designed to: Nourish, Rejuvenate, Strengthen hair",
      "Sulphate Free",
      "Paraben Free",
      "Mineral Oil Free",
      "Dermatologically approved",
      "Formulated for Indian Hair",
      "Dermatologically Tested",
      "Tensile Strength Tested"
    ],
    benefits: [
      "Reduces hair fall",
      "Promotes hair growth",
      "Strengthens hair",
      "Nourishes and rejuvenates"
    ],
    ingredients: "Sunflower (Helianthus Annuus) Oil, Grapeseed (Vitis Vinifera) Oil, Sesame (Sesame Indicum L) Oil, Amla (Embelica Officinalis) Fruit Oil, Bhringraj (Eclipta Alba) Oil, Brahmi (Bacopa Monnieri) Plant Oil, Ashwagandha (Withania Somnifera L.) Root Oil, Neem (Azadirachta Indica) Extract, Fenugreek (Trigonella Foenum-Graecum) Extract, Flax Seed (Linum Usitatissimum / Aloe Barbadensis Leaf Extract, Beet (Beta Vulgaris) Root Extract, Licorice (Glycyrrhiza glabra L.) Root Extract, Lavender (Lavandula Angustifolia) Oil, Fragrance, Bhringraj (Eclipta Alba) Leaf Powder, Brahmi (Bacopa Monnieri) Extract, Hibiscus (Hibiscus Sabdariffa) Extract, Ashwagandha (Withania Somnifera Extract), Neem (Azadirachta Indica) Extract, Shikakai (Acacia Concinna Extract), Tea Tree (Melaleuca Alternifolia) Oil, Cedarwood (Juniperus Virginiana) Oil, Sage (Salvia Officinalis Leaf Exract), Carrot (Daucus Carota Sativa (Carrot) Seed Oil, Vitamin E (Tocopherol), Kalonji (Nigella Sativa) Oil",
    usage: "Step 1: Apply the oil in the palms of your hands and massage into the scalp. Step 2: Distribute the oil down to the ends of your hair. Step 3: Once you are done applying the oil, you can massage your hair in a hot towel for 10 minutes for better result. Step 4: Keep it on for 2 -3 hours and shampoo and condition as normal. 100mL"
  },
  {
    id: "643",
    name: "Forever Alofa Fine Fragrance",
    description: "A crisp, delicately sweet fusion for an alluring warm floral scent. Envelop your senses with the power and love of the Samoan people in this exclusive fragrance that pays tribute to Forever's Founder, Rex Maughan, and his deep connection with the Samoan Islands. As a Samoan word, alofa means love — a word woven into the fabric of Forever by Rex, who often said, 'The power of Forever is the power of love.' Forever Alofa™ Fine Fragrance delivers this sense of love in an alluring scent crafted and blended exclusively for Forever. The complex fragrance features a carefully selected combination of botanicals that captivate. Floral notes like sweet jasmine intertwine with crisp citrus and warm aromas of sandalwood. The result is a unique scent that captures the essence of elegance. Beyond its fragrant appeal, the bottle delights too. Forever Alofa is housed in a thoughtfully designed bottle featuring cultural, traditional artwork designed by a Samoan artist that represents the meaning for alofa. This expertly crafted fragrance provides a beautiful finishing touch for everyday wear or a special occasion. Feel the power of love surround you with Forever Alofa.",
    shortDescription: "A crisp, delicately sweet fusion for an alluring warm floral scent",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "Botanical blend of floral, citrus and warm notes",
      "Unique and elegant",
      "Perfect for any occasion"
    ],
    benefits: [
      "Alluring floral fragrance",
      "Captures essence of elegance",
      "Beautiful finishing touch",
      "Unique Samoan-inspired design"
    ],
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua)",
    usage: "Apply as desired. 1 FL. OZ. (30 mL)"
  },
  {
    id: "644",
    name: "Forever Malosi Fine Fragrance",
    description: "An intriguing woodsy scent with refreshing, spiced nuances. Envelop your senses with the power and love of the Samoan people in this exclusive fragrance that pays tribute to Forever's Founder, Rex Maughan, and his deep connection with the Samoan Islands. As a Samoan word, malosi means power — a word woven into the fabric of Forever by Rex, who often said, 'The power of Forever is the power of love.' Experience this power through Forever Malosi™ Fine Fragrance, a distinctive, sophisticated scent crafted and blended exclusively for Forever. The bold fragrance features a carefully selected combination of botanicals that captivate. Spiced woodsy notes like bergamot and sandalwood mingle with the refreshing aromas of cypress and citrus. The result is a well-rounded scent perfect for everyday wear or a formal night on the town. Beyond its fragrant appeal, the bottle delights too. Forever Malosi is housed in a thoughtfully designed bottle featuring cultural, traditional artwork designed by a Samoan artist that represents the meaning for malosi. When you apply Forever Malosi, you're choosing power and confidence as you go about your day or night. This expertly crafted fragrance is an enticing addition to your daily routine that provides an alluring finishing touch.",
    shortDescription: "An intriguing woodsy scent with refreshing, spiced nuances",
    image: "",
    category: "Personal Care",
    categoryId: "personal-care",
    features: [
      "Botanical blend of floral, citrus and warm notes",
      "Unique and elegant",
      "Perfect for any occasion"
    ],
    benefits: [
      "Sophisticated woodsy fragrance",
      "Bold and distinctive scent",
      "Perfect for day or night",
      "Unique Samoan-inspired design"
    ],
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua)",
    usage: "Apply as desired. 1 FL. OZ. (30 mL)"
  },
];

export async function seedDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();
    console.log("Connected to MongoDB");

    console.log("Seeding categories...");
    for (const category of CATEGORIES) {
      try {
        const existing = await storage.getCategoryById(category.id);
        if (existing) {
          await storage.updateCategory(category.id, category);
          console.log(`Updated category: ${category.name}`);
        } else {
          await storage.createCategory(category);
          console.log(`Created category: ${category.name}`);
        }
      } catch (error: any) {
        console.error(`Error seeding category ${category.name}:`, error);
      }
    }

    console.log("Seeding products...");
    for (const product of PRODUCTS) {
      try {
        const existing = await storage.getProductById(product.id);
        if (existing) {
          await storage.updateProduct(product.id, product);
          console.log(`Updated product: ${product.name}`);
        } else {
          await storage.createProduct(product);
          console.log(`Created product: ${product.name}`);
        }
      } catch (error: any) {
        console.error(`Error seeding product ${product.name}:`, error);
      }
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

