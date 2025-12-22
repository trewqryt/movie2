const CART_KEY = 'movie_cart';
const ORDERS_KEY = 'movie_orders';

export const getCart = () => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const addToCart = (movie) => {
  const cart = getCart();
  const existing = cart.find(item => item.id === movie.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...movie, quantity: 1 });
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const updateQuantity = (id, quantity) => {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.quantity = quantity;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = getCart().filter(item => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.setItem(CART_KEY, JSON.stringify([]));
};

export const getOrders = () => {
  const data = localStorage.getItem(ORDERS_KEY);
  return data ? JSON.parse(data) : [];
};

export const createOrder = (cartItems) => {
  const orders = getOrders();
  const total = cartItems.reduce((sum, item) => sum + item.quantity * 500, 0);
  const newOrder = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    items: cartItems.map(item => ({
      id: item.id,
      title: item.title,
      year: item.year,
      rating: item.rating,
      director: item.director,
      genre: item.genre,
      description: item.description,
      poster: item.poster,
      quantity: item.quantity
    })),
    total,
    status: 'Новый'
  };
  orders.push(newOrder);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  clearCart();
};

export const updateOrderStatus = (id, status) => {
  const orders = getOrders();
  const order = orders.find(o => o.id === id);
  if (order) {
    order.status = status;
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }
};