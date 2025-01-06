// {
//   title: "",
//   ingredients: [
//     { name: "", amount: "" },
//     { name: "", amount: "" },
//     { name: "", amount: "" }
//   ],
//   steps: [
//     "",
//     ""
//   ],
//   nutrition: {
//     energy: ,         // エネルギー (kcal)
//     protein:,         // タンパク質 (g)
//     fat: ,             // 脂質 (g)
//     carbohydrates: ,    // 炭水化物 (g)
//     dietaryFiber: ,     // 食物繊維 (g)
//     saltEquivalent:  , // 食塩相当量 (g)
//   }
// },

export const menus = {
  meat: [
    {
      title: "きのこそぼろ",
      ingredients: [
        { name: "豚ひき肉", amount: "400g" },
        { name: "しめじ（ほぐす）", amount: "1袋（100g）" },
        { name: "えのき（細かく刻む）", amount: "1/2袋（100g）" },
        { name: "小ねぎ（小口切り）", amount: "1/2袋（50g）" },
        { name: "赤唐辛子", amount: "適量" },
        { name: "A: しょうゆ", amount: "大さじ3" },
        { name: "A: 酒", amount: "大さじ2" },
        { name: "A: みりん", amount: "大さじ2" },
        { name: "A: 砂糖", amount: "大さじ1" },
        { name: "A: しょうが（すりおろし）", amount: "大さじ1/2" },
        { name: "塩", amount: "小さじ1" },
        { name: "サラダ油", amount: "大さじ1" },
        { name: "もち麦ごはん", amount: "170g x5" },
      ],
      steps: [
        "フライパンにサラダ油をいてれ、",
        ""
      ],
      nutrition: {
        energy: 497,
        protein: 20.4,
        fat: 17.1,
        carbohydrates: 61.5,
        dietaryFiber: 4.0,
        saltEquivalent: 2.1
      }
    },
    {
      title: "ミートドリア",
      ingredients: [
        { name: "合い挽き肉", amount: "400g" },
        { name: "塩", amount: "小さじ1/2" },
        { name: "こしょう", amount: "適量" },
        { name: "玉ねぎ（3-4mmのみじん切り）", amount: "1/2個" },
        { name: "えのき（こまかく刻む）", amount: "1/2袋（100g）" },
        { name: "トマト缶（ホール）", amount: "1缶（400g）" },
        { name: "A: ウスターソース", amount: "大さじ1" },
        { name: "A: トマトケチャップ", amount: "大さじ1" },
        { name: "A: 顆粒コンソメ", amount: "小さじ2" },
        { name: "ピザ用チーズ", amount: "100g" },
        { name: "もち麦ごはん", amount: "170g x5" },
      ],
      steps: [
        "",
        ""
      ],
      nutrition: {
        energy: 551,         // エネルギー (kcal)
        protein: 24.2,         // タンパク質 (g)
        fat: 22.2,             // 脂質 (g)
        carbohydrates: 61.5,    // 炭水化物 (g)
        dietaryFiber: 4.5,     // 食物繊維 (g)
        saltEquivalent: 2.2, // 食塩相当量 (g)
      }
    },
    {
      title: "しょうが焼き",
      ingredients: [
        { name: "豚もも切り落とし", amount: "400g" },
        { name: "塩", amount: "小さじ1/2" },
        { name: "こしょう", amount: "適量" },
        { name: "薄力粉", amount: "大さじ1/2" },
        { name: "玉ねぎ（薄切り）", amount: "1個" },
        { name: "しょうが（千切り、すりおろし）", amount: "2かけ" },
        { name: "A: しょうゆ", amount: "大さじ3" },
        { name: "A: 酒", amount: "大さじ3" },
        { name: "A: みりん", amount: "大さじ3/2" },
        { name: "A: 砂糖", amount: "大さじ1" },
        { name: "サラダ油", amount: "大さじ1" },
        { name: "ブロッコリー", amount: "1/2株（100g）" },
        { name: "もち麦ごはん", amount: "170g x5" },
      ],
      steps: [
        "",
        ""
      ],
      nutrition: {
        energy: 475,         // エネルギー (kcal)
        protein: 23.0,         // タンパク質 (g)
        fat: 11.5,             // 脂質 (g)
        carbohydrates: 64.8,    // 炭水化物 (g)
        dietaryFiber: 4.0,     // 食物繊維 (g)
        saltEquivalent: 1.5, // 食塩相当量 (g)
      }
    },

  ],
  fish: [
    {
      title: "ステーキ",
      ingredients: [
        { name: "牛肉", amount: "200g" },
        { name: "塩", amount: "適量" },
        { name: "こしょう", amount: "適量" }
      ],
      steps: [
        "牛肉に塩こしょうを振る",
        "フライパンで焼く"
      ],
      nutrition: {
        energy: 250,         // エネルギー (kcal)
        protein: 20,         // タンパク質 (g)
        fat: 15,             // 脂質 (g)
        carbohydrates: 0,    // 炭水化物 (g)
        dietaryFiber: 0,     // 食物繊維 (g)
        saltEquivalent: 0.1  // 食塩相当量 (g)
      }
    }

  ],
  noodles: [
    {
      title: "ステーキ",
      ingredients: [
        { name: "牛肉", amount: "200g" },
        { name: "塩", amount: "適量" },
        { name: "こしょう", amount: "適量" }
      ],
      steps: [
        "牛肉に塩こしょうを振る",
        "フライパンで焼く"
      ],
      nutrition: {
        energy: 250,         // エネルギー (kcal)
        protein: 20,         // タンパク質 (g)
        fat: 15,             // 脂質 (g)
        carbohydrates: 0,    // 炭水化物 (g)
        dietaryFiber: 0,     // 食物繊維 (g)
        saltEquivalent: 0.1  // 食塩相当量 (g)
      }
    }

  ]
};
