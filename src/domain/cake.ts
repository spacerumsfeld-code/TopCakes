export interface Cake {
    id: number
    name: string
    imageUrl: string
    type: CakeType
    recipe: string[]
    ingredients: { name: string; quantity: number; unit: string }[]
    description: string
    wins: number
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
