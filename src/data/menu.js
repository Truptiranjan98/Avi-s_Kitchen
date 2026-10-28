export const info = {
  name: "Avi's Home Kitchen",
  tagline: 'Homemade Food ♥ Freshly Made ♥ With Love',
  phone: '9763072063',
  whatsapp: '919763072063', // country code + number, no + or spaces
  swiggyUrl: 'https://www.swiggy.com/', // TODO: replace with your Swiggy restaurant link
  timings: [
    { days: 'Monday - Friday', hours: '7 PM to 11 PM' },
    { days: 'Saturday - Sunday', hours: '10 AM to 11 PM' },
  ],
}

// Builds a wa.me link with a ready-made message
export function whatsappLink(itemText) {
  const msg = itemText
    ? `Hi, welcome to Avi's Home Kitchen! 👋\nI'd like to order: ${itemText}.\nPlease confirm availability. Thank you!`
    : `Hi, welcome to Avi's Home Kitchen! 👋\nI'd like to place an order. Could you please share today's availability?`
  return `https://wa.me/${info.whatsapp}?text=${encodeURIComponent(msg)}`
}

// Dishes that float in the hero. Optional photo: public/images/floating/<file>
// (transparent PNG looks best). The emoji is shown until a photo exists.
export const floatingDishes = [
  { name: 'Aloo Paratha', price: 59, emoji: '🥙', photo: '/images/floating/aloo-paratha.png' },
  { name: 'Egg Omlet', price: 69, emoji: '🍳', photo: '/images/floating/egg-omlet.png' },
  { name: 'Boiled Eggs', price: 39, emoji: '🥚', photo: '/images/floating/boiled-eggs.png' },
  { name: 'Chicken Handi', price: 349, emoji: '🍲', photo: '/images/floating/chicken-handi.png', isNew: true },
]

// Put your photos in public/images and set `image` to e.g. '/images/poha.jpg'
export const sections = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    emoji: '🌅',
    color: 'yellow',
    diet: 'veg',
    image: '/images/breakfast.jpg',
    items: [
      { name: 'Kanda bhaji', price: 39 },
      { name: 'Batata bhaji', price: 39 },
      { name: 'Poha', price: 49 },
      { name: 'Upma', price: 49 },
      { name: 'Maggie', price: 49 },
    ],
  },
  {
    id: 'veg',
    title: 'Veg Menu',
    emoji: '🌿',
    color: 'green',
    diet: 'veg',
    image: '/images/veg.jpg',
    items: [
      { name: 'Dal rice', price: 99 },
      { name: 'Dal khichdi', price: 99 },
      { name: 'Pithad + 2 bhakari', price: 149 },
      { name: 'Baingan bharta + 2 bhakari', price: 149 },
      { name: 'Shev bhaji + 2 chapati', price: 149 },
      { name: 'Veg thali', price: 119 },
      { name: 'Shevga Thali', note: '2 Bhakari + Rice', price: 139 },
      { name: 'Aloo paratha (1 pc)', price: 59 },
      { name: 'Shabu wada (2 pcs)', price: 49 },
    ],
  },
  {
    id: 'nonveg',
    title: 'Non-Veg Menu',
    emoji: '🍗',
    color: 'red',
    diet: 'nonveg',
    image: '/images/nonveg.jpg',
    items: [
      { name: 'Anda burji', price: 79 },
      { name: 'Egg omlet', price: 69 },
      { name: 'Boiled eggs (2 pcs)', price: 39 },
      { name: 'Egg curry + 2 chapati', price: 159 },
      { name: 'Chicken curry + 2 chapati + rice', price: 199 },
      { name: 'Chicken handi (Half)', price: 349, isNew: true },
      { name: 'Chicken handi (Full)', price: 549, isNew: true },
    ],
  },
  {
    id: 'combo',
    title: 'Combo Section',
    emoji: '🍽️',
    color: 'blue',
    image: '/images/combo.jpg',
    items: [
      { name: 'Egg burji + 2 chapati', price: 149 },
      { name: 'Boiled eggs (6 pcs)', price: 99 },
      { name: 'Anda curry + 3 chapati', price: 149 },
      { name: 'Chicken handi (Half) + 3 chapati', price: 399, isNew: true },
      {
        name: 'Chicken handi (Full) + 5 chapati / 2 bhakari + rice + 2 boiled eggs',
        price: 749,
        isNew: true,
      },
    ],
  },
  {
    id: 'extras',
    title: 'Extras',
    emoji: '🫓',
    color: 'purple',
    diet: 'veg',
    items: [
      { name: 'Chapati (2 pcs)', price: 39 },
      { name: 'Bhakari (2 pcs)', price: 59 },
    ],
  },
  {
    id: 'fruit',
    title: 'Fruit Salad',
    emoji: '🍓',
    color: 'pink',
    diet: 'veg',
    image: '/images/fruit-salad.jpg',
    items: [{ name: 'Fruit Salad', price: 119 }],
  },
]
