export interface Cake {
    id: number
    name: string
    imageUrl: string
    type: CakeType
    recipe: string[]
    ingredients: { name: string; quantity: number; unit: string }[]
    description: string
    wins: number
    likes: number
}

export enum CakeGridPage {
    MyCakes = 'My Cakes',
    Favorites = 'Favorites',
    Bakery = 'Bakery',
}

export enum CakeType {
    // Classic Cakes
    AngelFood = 'Angel Food',
    Bundt = 'Bundt',
    Carrot = 'Carrot',
    Cheesecake = 'Cheesecake',
    Chiffon = 'Chiffon',
    Cupcake = 'Cupcake',
    Fruitcake = 'Fruitcake',
    Genoise = 'Genoise',
    IceCreamCake = 'Ice Cream Cake',
    LayerCake = 'Layer Cake',
    PoundCake = 'Pound Cake',
    SheetCake = 'Sheet Cake',
    SpongeCake = 'Sponge Cake',
    UpsideDownCake = 'Upside Down Cake',

    // Chocolate-Based Cakes
    BlackForest = 'Black Forest',
    ChocolateCake = 'Chocolate Cake',
    ChocolateLava = 'Chocolate Lava',
    FlourlessChocolate = 'Flourless Chocolate',

    // Regional & Specialty Cakes
    Battenberg = 'Battenberg',
    BasqueBurntCheesecake = 'Basque Burnt Cheesecake',
    Cassata = 'Cassata',
    JapaneseCheesecake = 'Japanese Cheesecake',
    Lamington = 'Lamington',
    MilleFeuille = 'Mille-Feuille',
    OperaCake = 'Opera Cake',
    Panettone = 'Panettone',
    Pavlova = 'Pavlova',
    RedVelvet = 'Red Velvet',
    RumCake = 'Rum Cake',
    SacherTorte = 'Sacher Torte',
    TresLeches = 'Tres Leches',
    VictoriaSponge = 'Victoria Sponge',

    // Trendy & Modern Cakes
    DripCake = 'Drip Cake',
    Funfetti = 'Funfetti',
    GeodeCake = 'Geode Cake',
    MirrorGlaze = 'Mirror Glaze',
    NakedCake = 'Naked Cake',
    OmbreCake = 'Ombre Cake',
    PinataCake = 'Pinata Cake',
    RainbowCake = 'Rainbow Cake',
    RosetteCake = 'Rosette Cake',

    // Dietary-Specific Cakes
    KetoCake = 'Keto Cake',
    GlutenFreeCake = 'Gluten-Free Cake',
    VeganCake = 'Vegan Cake',
    SugarFreeCake = 'Sugar-Free Cake',

    // Ethnic & Cultural Cakes
    BaklavaCake = 'Baklava Cake',
    Bibingka = 'Bibingka',
    BlackSesameCake = 'Black Sesame Cake',
    GulabJamunCake = 'Gulab Jamun Cake',
    MochiCake = 'Mochi Cake',
    Tiramisu = 'Tiramisu',
    UbeCake = 'Ube Cake',
    YuleLog = 'Yule Log',

    // Holiday & Seasonal Cakes
    HalloweenCake = 'Halloween Cake',
    ChristmasFruitcake = 'Christmas Fruitcake',
    EasterLambCake = 'Easter Lamb Cake',
    StPatricksDayCake = "St. Patrick's Day Cake",

    // Special Occasion Cakes
    BirthdayCake = 'Birthday Cake',
    WeddingCake = 'Wedding Cake',
    BabyShowerCake = 'Baby Shower Cake',
    EngagementCake = 'Engagement Cake',
    GraduationCake = 'Graduation Cake',

    // Other
    CustomCake = 'Custom Cake',
    Other = 'Other',
}

export enum CakeSort {
    Wins = 'Wins',
    None = 'None',
}

export enum CakeFilter {
    None = 'None',
    // Classic Cakes
    AngelFood = 'Angel Food',
    Bundt = 'Bundt',
    Carrot = 'Carrot',
    Cheesecake = 'Cheesecake',
    Chiffon = 'Chiffon',
    Cupcake = 'Cupcake',
    Fruitcake = 'Fruitcake',
    Genoise = 'Genoise',
    IceCreamCake = 'Ice Cream Cake',
    LayerCake = 'Layer Cake',
    PoundCake = 'Pound Cake',
    SheetCake = 'Sheet Cake',
    SpongeCake = 'Sponge Cake',
    UpsideDownCake = 'Upside Down Cake',

    // Chocolate-Based Cakes
    BlackForest = 'Black Forest',
    ChocolateCake = 'Chocolate Cake',
    ChocolateLava = 'Chocolate Lava',
    FlourlessChocolate = 'Flourless Chocolate',

    // Regional & Specialty Cakes
    Battenberg = 'Battenberg',
    BasqueBurntCheesecake = 'Basque Burnt Cheesecake',
    Cassata = 'Cassata',
    JapaneseCheesecake = 'Japanese Cheesecake',
    Lamington = 'Lamington',
    MilleFeuille = 'Mille-Feuille',
    OperaCake = 'Opera Cake',
    Panettone = 'Panettone',
    Pavlova = 'Pavlova',
    RedVelvet = 'Red Velvet',
    RumCake = 'Rum Cake',
    SacherTorte = 'Sacher Torte',
    TresLeches = 'Tres Leches',
    VictoriaSponge = 'Victoria Sponge',

    // Trendy & Modern Cakes
    DripCake = 'Drip Cake',
    Funfetti = 'Funfetti',
    GeodeCake = 'Geode Cake',
    MirrorGlaze = 'Mirror Glaze',
    NakedCake = 'Naked Cake',
    OmbreCake = 'Ombre Cake',
    PinataCake = 'Pinata Cake',
    RainbowCake = 'Rainbow Cake',
    RosetteCake = 'Rosette Cake',

    // Dietary-Specific Cakes
    KetoCake = 'Keto Cake',
    GlutenFreeCake = 'Gluten-Free Cake',
    VeganCake = 'Vegan Cake',
    SugarFreeCake = 'Sugar-Free Cake',

    // Ethnic & Cultural Cakes
    BaklavaCake = 'Baklava Cake',
    Bibingka = 'Bibingka',
    BlackSesameCake = 'Black Sesame Cake',
    GulabJamunCake = 'Gulab Jamun Cake',
    MochiCake = 'Mochi Cake',
    Tiramisu = 'Tiramisu',
    UbeCake = 'Ube Cake',
    YuleLog = 'Yule Log',

    // Holiday & Seasonal Cakes
    HalloweenCake = 'Halloween Cake',
    ChristmasFruitcake = 'Christmas Fruitcake',
    EasterLambCake = 'Easter Lamb Cake',
    StPatricksDayCake = "St. Patrick's Day Cake",

    // Special Occasion Cakes
    BirthdayCake = 'Birthday Cake',
    WeddingCake = 'Wedding Cake',
    BabyShowerCake = 'Baby Shower Cake',
    EngagementCake = 'Engagement Cake',
    GraduationCake = 'Graduation Cake',

    // Other
    CustomCake = 'Custom Cake',
    Other = 'Other',
}

export enum CakeFilterReverseMapping {
    None = 'None',
    'Angel Food' = 'AngelFood',
    'Bundt' = 'Bundt',
    'Carrot' = 'Carrot',
    'Cheesecake' = 'Cheesecake',
    'Chiffon' = 'Chiffon',
    'Cupcake' = 'Cupcake',
    'Fruitcake' = 'Fruitcake',
    'Genoise' = 'Genoise',
    'Ice Cream Cake' = 'IceCreamCake',
    'Layer Cake' = 'LayerCake',
    'Pound Cake' = 'PoundCake',
    'Sheet Cake' = 'SheetCake',
    'Sponge Cake' = 'SpongeCake',
    'Upside Down Cake' = 'UpsideDownCake',
    'Black Forest' = 'BlackForest',
    'Chocolate Cake' = 'ChocolateCake',
    'Chocolate Lava' = 'ChocolateLava',
    'Flourless Chocolate' = 'FlourlessChocolate',
    'Battenberg' = 'Battenberg',
    'Basque Burnt Cheesecake' = 'BasqueBurntCheesecake',
    'Cassata' = 'Cassata',
    'Japanese Cheesecake' = 'JapaneseCheesecake',
    'Lamington' = 'Lamington',
    'Mille-Feuille' = 'MilleFeuille',
    'Opera Cake' = 'OperaCake',
    'Panettone' = 'Panettone',
    'Pavlova' = 'Pavlova',
    'Red Velvet' = 'RedVelvet',
    'Rum Cake' = 'RumCake',
    'Sacher Torte' = 'SacherTorte',
    'Tres Leches' = 'TresLeches',
    'Victoria Sponge' = 'VictoriaSponge',
    'Drip Cake' = 'DripCake',
    'Funfetti' = 'Funfetti',
    'Geode Cake' = 'GeodeCake',
    'Mirror Glaze' = 'MirrorGlaze',
    'Naked Cake' = 'NakedCake',
    'Ombre Cake' = 'OmbreCake',
    'Pinata Cake' = 'PinataCake',
    'Rainbow Cake' = 'RainbowCake',
    'Rosette Cake' = 'RosetteCake',
    'Keto Cake' = 'KetoCake',
    'Gluten-Free Cake' = 'GlutenFreeCake',
    'Vegan Cake' = 'VeganCake',
    'Sugar-Free Cake' = 'SugarFreeCake',
    'Baklava Cake' = 'BaklavaCake',
    'Bibingka' = 'Bibingka',
    'Black Sesame Cake' = 'BlackSesameCake',
    'Gulab Jamun Cake' = 'GulabJamunCake',
    'Mochi Cake' = 'MochiCake',
    'Tiramisu' = 'Tiramisu',
    'Ube Cake' = 'UbeCake',
    'Yule Log' = 'YuleLog',
    'Halloween Cake' = 'HalloweenCake',
    'Christmas Fruitcake' = 'ChristmasFruitcake',
    'Easter Lamb Cake' = 'EasterLambCake',
    "St. Patrick's Day Cake" = 'StPatricksDayCake',
    'Birthday Cake' = 'BirthdayCake',
    'Wedding Cake' = 'WeddingCake',
    'Baby Shower Cake' = 'BabyShowerCake',
    'Engagement Cake' = 'EngagementCake',
    'Graduation Cake' = 'GraduationCake',
    'Custom Cake' = 'CustomCake',
    'Other' = 'Other',
}
