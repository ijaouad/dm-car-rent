import { defineStore } from 'pinia'

export interface Car {
  name: String,
  type: String,
  gasolineLiter: Number,
  kindOfTransition: String,
  people: Number,
  pricePerDay: Number,
  id: String,
  img: String,
  images: String[]
}

export const useWishlistStore = defineStore({
    id: 'wishlist-store',
  state: () => {
    return {
      wishlist: [] as Car[],
    } 
  },

  actions: {
    addToWishlist(car: Car) {
      this.wishlist.push(car)
    },
    removeFromWishlist(_car: Car) {
      this.wishlist = this.wishlist.filter(car => car !== _car)
    },
    loved(slug: String) {
      return this.wishlist.some(car => car.id === slug)
    }
  },  

  getters: {
    getWishlist: state => state.wishlist
  },
})