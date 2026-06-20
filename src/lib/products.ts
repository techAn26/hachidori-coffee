export type Product = {
  id: string;
  name: string;
  nameEn: string;
  region: string;
  altitude: string;
  process: string;
  roast: "ライト" | "ミディアム" | "ミディアムダーク" | "ダーク";
  roastLevel: number; // 1-5
  flavorNotes: string[];
  description: string;
  brewRecommendation: string;
  taste: {
    acidity: number; // 1-5
    bitterness: number; // 1-5
    sweetness: number; // 1-5
    body: number; // 1-5
  };
  price: number;
  weight: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "huila-supremo",
    name: "ウィラ スプレモ",
    nameEn: "Huila Supremo",
    region: "ウィラ県 サン・アグスティン",
    altitude: "1,700 - 1,900m",
    process: "ウォッシュド",
    roast: "ミディアム",
    roastLevel: 3,
    flavorNotes: ["キャラメル", "レッドアップル", "ブラウンシュガー"],
    description:
      "コロンビア南部ウィラ県の高地で栽培された豆。バランスの取れた甘みと、りんごのような爽やかな酸味が特徴。日常使いにもおすすめの一杯。",
    brewRecommendation: "ペーパードリップ / フレンチプレス",
    taste: {
      acidity: 3,
      bitterness: 2,
      sweetness: 4,
      body: 3,
    },
    price: 2400,
    weight: "200g",
    image: "/images/huila-supremo.jpg",
  },
  {
    id: "sierra-nevada",
    name: "シエラネバダ",
    nameEn: "Sierra Nevada",
    region: "マグダレナ県 シエラネバダ山脈",
    altitude: "1,800 - 2,100m",
    process: "ナチュラル",
    roast: "ミディアムダーク",
    roastLevel: 4,
    flavorNotes: ["ダークチョコレート", "ヘーゼルナッツ", "ドライフルーツ"],
    description:
      "世界遺産にも登録されるシエラネバダ山脈の先住民コミュニティが育てる豆。力強いコクとチョコレートのような深い甘み。余韻が長く続く贅沢な味わい。",
    brewRecommendation: "エスプレッソ / モカポット",
    taste: {
      acidity: 2,
      bitterness: 4,
      sweetness: 3,
      body: 5,
    },
    price: 2800,
    weight: "200g",
    image: "/images/sierra-nevada.jpg",
  },
  {
    id: "narino-especial",
    name: "ナリーニョ エスペシャル",
    nameEn: "Nariño Especial",
    region: "ナリーニョ県 ラ・ウニオン",
    altitude: "2,000 - 2,300m",
    process: "ハニー",
    roast: "ライト",
    roastLevel: 2,
    flavorNotes: ["ジャスミン", "ピーチ", "ハニー"],
    description:
      "コロンビア最高峰の産地ナリーニョ県から届く、華やかなアロマの逸品。標高2,000mを超える高地ならではの複雑な風味と、花のような香りが広がる。",
    brewRecommendation: "ペーパードリップ / エアロプレス",
    taste: {
      acidity: 5,
      bitterness: 1,
      sweetness: 4,
      body: 2,
    },
    price: 3200,
    weight: "200g",
    image: "/images/narino-especial.jpg",
  },
];
