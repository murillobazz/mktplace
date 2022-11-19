export const state = () => ({
  cart: []
});

export const mutations = {
  add(state, obj) {
    state.cart.push({ ...obj.product, count: 1 });
  },
  remove(state, index) {
    state.cart.splice(index, 1);
  },
  increment(state, index) {
    state.cart[index].count++;
  },
  decrement(state, index) {
    state.cart[index].count--;
  }
};

export const actions = {
  add({ commit }, obj) {
    commit('add', obj);
  },
  remove({ commit }, index) {
    commit('remove', index);
  },
  increment({ commit }, index) {
    commit('increment', index);
  },
  decrement({ commit }, index) {
    commit('decrement', index);
  },
};

export const getters = {
  getCartContent(state) {
    return state.cart;
  },
  getCartQuantity(state) {
    return state.cart.reduce((acc, currentValue) => acc + currentValue.count, 0);
  },
  getCartTotal(state) {
    return state.cart.reduce((acc, currentValue) => acc + (currentValue.price * currentValue.count), 0);
  }
};
