
import json from "~/static/products.json"
const state = {
  products: json.products,
};

const getters = {
  getSelectCategory: state => filter => {
    let filteredSelectCategory = state.products
      .filter(product => {
        return filter.selectCategory == 0 || product.categoryId == filter.selectCategory;
      })
    return filteredSelectCategory
  },

  getProductsByFilter: (state, getters) => (filter, category, sort, like) => {
    let filtered = getters.getSelectCategory(category)
      .filter(product => {
        return filter.selectYearRelease == 0 || product.year == filter.selectYearRelease;
      })
      .filter(product => {
        return filter.transmission == 0 || product.transmission == filter.transmission;
      })
      .filter(product => {
        return filter.bodyType == 0 || filter.bodyType.includes(product.type);
      })
      .filter(product => {
        return filter.propertyTypeСheck == 0 || filter.propertyTypeСheck.includes(product.type);
      })
      .filter(product => {
        return filter.minSquareRooms == '' || product.square >= filter.minSquareRooms;
      })
      .filter(product => {
        return filter.countRoomСheck == 0 || product.countRooms == filter.countRoomСheck;
      })
      .filter(product => {
        return filter.ram == 0 || product.ram == filter.ram;
      })
      .filter(product => {
        return filter.diagonal == 0 || product.diagonal == filter.diagonal;
      })
      .filter(product => {
        return filter.processorType == 0 || filter.processorType.includes(product.type);
      })
      .filter(product => {
        return filter.minPriceContent == '' && filter.maxPriceContent == '' ||
          product.price >= filter.minPriceContent && product.price <= filter.maxPriceContent;
      })
      .filter(product => {
        return like == false || product.like == true;
      })

    if (sort === 2) {
      return filtered.sort((a, b) => {
        let dateA = a.date.split(".").reverse().join(".");
        let dateB = b.date.split(".").reverse().join(".");
        let resultDate = new Date(dateB) - new Date(dateA);
        return resultDate
      });
    }
    if (sort === 1) {
      return filtered.sort((a, b) => {
        return a.price - b.price;
      });
    } if (sort === 0) {
      return filtered
    }

    return filtered
  },
};

const mutations = {
  'TOGGLE_LIKE'(state, index) {
    state.products[index].like = !state.products[index].like;
  }
};

const actions = {
  toggleLike({ commit }, index) {
    commit('TOGGLE_LIKE', index);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}