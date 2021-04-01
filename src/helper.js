const monthMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export function getMonth(number) {
  return monthMap[number];
};

const produceEmojiMap = {
  Apples: ['🍎','🍏'],
  Apricots: '🍊',
  Blueberries: '🫐',
  Cherries: '🍒',
  Crabapples: null,
  Cranberries: null,
  Currants: null,
  Gooseberries: null,
  Grapes: '🍇',
  Muskmelon: '🍈',
  Nectarines: '🍊',
  Peaches: '🍑',
  Pears: '🍐',
  Plums: null,
  Raspberries: null,
  Rhubarb: null,
  "Strawberries (Field)": '🍓',
  "Strawberries (Greenhouse)": '🍓',
  Watermelon: '🍉',
  Artichoke: null,
  "Asian Vegetables": ['🥦', '🥬'],
  Asparagus: null,
  "Beans (Green/Yellow)": null,
  Beets: null,
  "Bitter Melon/Fuzzy Squash": null,
  "Bok Choy": null,
  Broccoli: '🥦',
  "Brussels Sprouts": null,
  Cabbage: null,
  Carrots: '🥕',
  Cauliflower: null,
  Celery: null,
  "Chinese Broccoli (White Flower)": '🥦',
  Corn: '🌽',
  "Cucumber (Field)": '🥒',
  "Cucumber (Greenhouse)": '🥒',
  "Daikon Radish": null,
  "Edible Amaranth (Hinn Choy)": null,
  Eggplant: '🍆',
  Garlic: '🧄',
  Leeks: null,
  "Lettuce (Assorted)": '🥬',
  "Lettuce (Greenhouse)": '🥬',
  Mushrooms: '🍄',
  "Mustard Greens (Gai Choy)": '🌿',
  "Napa Cabbage": '🥬',
  "Onions (Cooking)": '🧅',
  "Onions (Green)": '🧅',
  "Onions (Red)": '🧅',
  Parsnips: null,
  "Peas (Green)": null,
  "Peas (Snow)": null,
  "Peppers (Field)": ['🫑', '🌶️'],
  "Peppers (Greenhouse)": ['🫑', '🌶️'],
  Potatoes: '🥔',
  Pumpkin: '🎃',
  Radicchio: null,
  Radishes: null,
  Rapini: '🥬',
  Rutabaga: null,
  "Snow Pea Shoots (Dow Miu)": null,
  Spinach: '🥬',
  Sprouts: null,
  Squash: null,
  "Summer squash": null,
  "Sweet potatoes": '🥔',
  "Tomatoes (Field)": '🍅',
  "Tomatoes (Greenhouse)": '🍅',
  "Water Spinach (Tung Choy)": null,
  "Yow Choy (Yellow Flower)": null,
  Zucchini: null,
};

export const getProduceEmojis = (produce) => {
  return produce
    .flatMap(item => produceEmojiMap[item.produce])
    .filter(item => !!item)
};

export const getRandomEmoji = (produce) => {
  const emojis = getProduceEmojis(produce);
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}