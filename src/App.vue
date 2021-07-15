<template>
  <div class="calendar-wrap"
       @click="_onClickOutside"
  >
    <div class="calendar-inner" v-if="ready">
      <div>sdfjasdjfha</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  mounted () {
    logseq.App.onThemeModeChanged((label) => {
      this.opts[`is-dark`] = label === 'dark'
    })

    logseq.once('ui:visible:changed', ({ visible }) => {
      visible && (this.ready = true)
    })
  },
  methods: {
    async _updateCalendarInMonth () {
      // const journals = await this._getCurrentRepoRangeJournals()
      // this.journals = journals.reduce((ac, it) => {
      //   const k = it[`journal-day`].toString()
      //   ac[k] = it
      //   return ac
      // }, {})
      // console.debug('[query journals]', journals)
      // const dates = journals.map(it => {
      //   const d = dayjs(it[`journal-day`].toString())
      //   if (d.isValid()) {
      //     return d.toDate()
      //   }
      // })
      // this.opts.attributes = [
      //   {
      //     dot: true,
      //     dates,
      //   },
      // ]
    },
    _onToPage (e) {
      // this.mDate = e
    },
    async _getCurrentRepoRangeJournals () {
      // const { month, year } = this.mDate
      // const my = year + (month < 10 ? '0' : '') + month
      // let ret
      // try {
      //   ret = await logseq.DB.datascriptQuery(`
      //     [:find (pull ?p [*])
      //      :where
      //      [?b :block/page ?p]
      //      [?p :block/journal? true]
      //      [?p :block/journal-day ?d]
      //      [(>= ?d ${my}01)] [(<= ?d ${my}31)]]
      //   `)
      // } catch (e) {
      //   console.error(e)
      // }
      // return (ret || []).flat()
    },
    _onClickOutside ({ target }) {
      const inner = target.closest('.calendar-inner')
      !inner && logseq.hideMainUI()
    },
    _onDaySelect ({ id }) {
      // this.date = id
      // const k = id.replaceAll('-', '')
      // if (this.journals.hasOwnProperty(k)) {
      //   id = this.journals[k][`original-name`]
      // }
      // logseq.App.pushState('page', { name: id })
      // logseq.hideMainUI()
    },
  },
}
</script>
