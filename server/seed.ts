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
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Essential personal care products for daily wellness and hygiene with the natural benefits of aloe vera.",
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

