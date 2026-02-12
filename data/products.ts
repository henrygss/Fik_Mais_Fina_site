export type ProductFAQ = { q: string; a: string };

export type ProductReview = {
  name?: string
  stars: 1 | 2 | 3 | 4 | 5;
  text?: string;
  image: string; // print em public
};

export type Product = {
  slug: string;
  name: string;
  price: string;
  shortDescription: string;
  image: string;
  images?: string[];

  // NOVOS (opcionais)
  longDescription?: string;
  composition?: string[];
  howToUse?: string[];
  warnings?: string[];
  inTheBox?: string[];
  faq?: ProductFAQ[];
  reviews?: ProductReview[];
};

export const products: Product[] = [
  {
    slug: "produto-1",
    name: "Xtreme Slim",
    price: "R$ 219,00",
    shortDescription: "O Xtreme Slim é um forte  inibidor de apetite que favorece a reeducação alimentar. Tem ação detox do organismo, fortalece o sistema imunológico e combate a celulite.",
    image: "/produtos/produto-1.jpeg",

    images: [
        "/produtos/produto-1.jpeg",
        "/produtos/produto-1.1.jpeg",
        "/produtos/produto-1.2.jpeg",
    ],

    longDescription:
      "Reduz a gordura localizada e evita o acúmulo de novas gorduras. Regula o intestino, pois possui fibras em sua fórmula e controla a ansiedade pela sua ação calmante. Aumenta os níveis de energia. Tem ação diurética e é coadjuvante no retardo do envelhecimento da pele. Dá maior firmeza à pele e melhora a aparência das celulites por conter colágeno em sua fórmula.",

    composition: [
           "Garcinia, Cambogia, Cafeína, Hibisco, Chia, Colágeno, Caralluma, Glucomanan, Psyllium, Linhaça, Folha de lótus, Semente de Cássia, Folha de Amora, Laranja, Laranja amarga e Jobstears"
    ],

    howToUse: [
      "Tomar uma cápsula por dia, preferencialmente no período da manhã.",
    ],

    warnings: [
      "Não ingerir mais do que 1 cápsula por dia.",
      "Não ingerir no mesmo horário de medicação de uso contínuo.",
      "Não pule as refeições.",
      "Evite consumo de álcool enquanto estiver usando o produto.",
      " Beba muita água durante o dia para evitar desidratação.",
      "Mulheres grávidas e lactantes, crianças e adolescentes menores de 16 anos, pessoas com mais de 65 anos, pessoas com insuficiência renal, hepática ou doenças cardiovasculares.",
    ],

    inTheBox: ["01 unidade (30 cápsulas)", "Embalagem lacrada"],

    faq: [
      { q: "Em quanto tempo chega?", a: "Depende da sua região. Chame no WhatsApp para prazo e envio." },
      { q: "Como devo usar?", a: "Siga o rótulo. Se quiser, te orientamos no WhatsApp." },
      { q: "Posso tirar dúvidas antes de comprar?", a: "Sim! É só chamar no WhatsApp." },
    ],

    reviews: [
      {
        name: "Josi",
        stars: 5,
        text: '"Gostei bastante!"',
        image: "/avaliacoes/dp1_xtreme.jpeg",
      },
        {
            name: "Rose",
            stars: 5,
            text: '"Fui de 89 kg para 85 kg"',
            image: "/avaliacoes/dp2_xtreme.jpeg",
        },
        {
            name: "Jessica",
            stars: 5,
            text: '"Faz pouco tempo que tomo o Xtreme Slim e percebi que ele me dá mais disposição"',
            image: "/avaliacoes/dp3_xtreme.jpeg",
        },
        {
            name: "Thamires",
            stars: 5,
            text: '"Tomei e gostei. Diminuiu bastante a minha fome"',
            image: "/avaliacoes/dp4_xtreme.jpeg",
        },
    ],
  },

  {
    slug: "produto-2",
    name: "MultiSlim Black",
    price: "R$ 219,00",
    shortDescription: "O MultiSlim Black é um composto ultra concentrado de ervas poderosas que atuam inibindo o apetite e auxiliando na sua reeducação alimentar.",
    image: "/produtos/produto-2.jpeg",


    images: [
        "/produtos/produto-2.jpeg",
    ],

    longDescription:
      " Reduz o apetite. Queima gordura localizada. Melhora a função intestinal. Combate a flacidez e celulites. Auxilia no controle do colesterol. Auxilia no fortalecimento imunológico",

    composition: [
        "Broto de Bambu, Folha de Lótus, Cafeína, Hibisco, Colágeno, Spirulina, Psyllium, Garcinia, Sene, Xi Xian Cao e Chlorella"
    ],

    howToUse: [
      "Tomar uma cápsula por dia, preferencialmente no período da manhã.",
    ],

    warnings: [
      "Não ingerir mais do que 1 cápsula por dia.",
      "Não ingerir no mesmo horário de medicação de uso contínuo.",
      "Não pule as refeições.",
      "Evite consumo de álcool enquanto estiver usando o produto.",
      " Beba muita água durante o dia para evitar desidratação.",
      " Esse termogênico não é recomendado para gestantes, lactantes, crianças e idosos. ",
    ],

    inTheBox: ["01 unidade (30 cápsulas)", "Embalagem lacrada"],

    faq: [
      { q: "Em quanto tempo chega?", a: "Depende da sua região. Chame no WhatsApp para prazo e envio." },
      { q: "Como devo usar?", a: "Siga o rótulo. Se quiser, te orientamos no WhatsApp." },
      { q: "Posso tirar dúvidas antes de comprar?", a: "Sim! É só chamar no WhatsApp." },
    ],

    reviews: [
      {
        name: "Vinicius",
        stars: 5,
        text: '"Me ajudou muito na perda de peso, saciedade e na retenção de líquido"',
        image: "/avaliacoes/dp1_multi.jpeg",
      },
        {
            name: "Mariana",
            stars: 5,
            text: '"Perdi 5 kg até agora"',
            image: "/avaliacoes/dp2_multi.jpeg",
        },
        {
            name: "Grazi",
            stars: 5,
            text: '"Perdi 4,5 kg"',
            image: "/avaliacoes/dp3_multi.jpeg",
        },
        {
            name: "Duanne",
            stars: 5,
            text: '"Diminuiu minha fome e a vontade de comer doce"',
            image: "/avaliacoes/dp4_multi.jpeg",
        },
    ],
  },
  {
    slug: "produto-3",
    name: "Diet + Stronger",
    price: "R$ 219,00",
    shortDescription: "O DIET+ Stronger é um suplemento alimentar indicado para reeducação alimentar e perda de peso. Esse produto é feito à base de ingredientes naturais que contribuem para a perda de peso através da redução do apetite e controle da ansiedade. Além de ser um potente inibidor, complementa a alimentação e contribui para o melhor funcionamento do organismo.",
    image: "/produtos/produto-3.jpeg",

    images: [
            "/produtos/produto-3.jpeg",
        ],

        longDescription:
          "O seu Mix de ervas, extratos, raízes e grãos possuem a ação de inibir o apetite e acelerar o metabolismo em até 30%, contribuindo com uma perda de peso semanal de até 3 quilos. Melhora a aparência da pele devido sua ação antioxidante e suplementa a alimentação com aminoácidos essenciais e confere mais disposição energética. Os efeitos são sentidos na primeira semana!",

        composition: [
            "Chia, Garcinia, Colágeno, Maracujá, Gengibre, Psyllium, Maca Peruana, Spirulina, Hibisco e Broto de Bambu."
        ],

        howToUse: [
          "Tomar uma cápsula por dia, preferencialmente no período da manhã.",
        ],

        warnings: [
          "Não ingerir mais do que 1 cápsula por dia.",
          "Não ingerir no mesmo horário de medicação de uso contínuo.",
          "Não pule as refeições.",
          "Evite consumo de álcool enquanto estiver usando o produto.",
          " Beba muita água durante o dia para evitar desidratação.",
          "Pessoas com doenças cardiovasculares, doença cerebrovascular, pessoas com psicose, viciadas em drogas ou álcool, insuficiência do fígado ou rins, hiperplasia prostática ou glaucoma, durante a gravidez ou lactação, pessoas com menos de 18 anos e pessoas com mais de 60 anos.",
          "Incompatível com antibióticos.",
        ],

        inTheBox: ["01 unidade (30 cápsulas)", "Embalagem lacrada"],

        faq: [
          { q: "Em quanto tempo chega?", a: "Depende da sua região. Chame no WhatsApp para prazo e envio." },
          { q: "Como devo usar?", a: "Siga o rótulo. Se quiser, te orientamos no WhatsApp." },
          { q: "Posso tirar dúvidas antes de comprar?", a: "Sim! É só chamar no WhatsApp." },
        ],

        reviews: [
          {
            name: "Matheus",
            stars: 5,
            text: '"Emagreci 7 kg, top hein!"',
            image: "/avaliacoes/dp1_diet.jpeg",
          },
            {
                name: "Gisele",
                stars: 5,
                text: '"Muito bom, consegui emagrecer 10 kg!"',
                image: "/avaliacoes/dp2_diet.jpeg",
            },
            {
                name: "Val",
                stars: 5,
                text: '"Tomei pela primeira vez e amei!"',
                image: "/avaliacoes/dp3_diet.jpeg",
            },
        ],
  },
];
