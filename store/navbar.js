export const state = () => ({
  isMenuActive: false
})

export const mutations = {
  toggleMenu(state) {
    state.isMenuActive = !state.isMenuActive
  },
  resetMenu(state) {
    state.isMenuActive = false
  }
}
