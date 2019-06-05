import jsonData from '~/assets/json/publication.json'

export const state = () => ({
  list: jsonData,
  journals: Array,
  iConfs: Array,
  dConfs: Array
})

export const mutations = {
  sortByDate(state) {
    var list = state.list
    state.list = list.sort((a, b) => {
      return (a.date < b.date) ? 1 : (a.date > b.date) ? -1 : 0;
    });
  },
  getJournals(state) {
    state.journals = state.list.filter(item => item.tag === 'Journal');
  },
  getiConfs(state) {
    state.iConfs = state.list.filter(item => item.tag === 'International Conference');
  },
  getdConfs(state) {
    state.dConfs = state.list.filter(item => item.tag === '国内会議');
  }
};