<template>
  <main>
    <div
      class="w-screen h-screen bg-gray-600 opacity-30 flex justify-center items-start"
      @click="hidePluginView"
    ></div>
    <span class="bg-red-100 border-red-300 border px-8 py-1 rounded-sm fixed top-1 inset-x-0 m-auto text-center w-52">walk error</span>
  </main>
</template>

<script>
// export default {
//   name: 'App',
//   data () {
//     return {
//       reasdy: true,
//     }
//   },
//   mounted () {
//     // logseq.App.onThemeModeChanged((label) => {
//     //   console.log('[faiz:] === onThemeModeChanged', label)
//     //   this.opts[`is-dark`] = label === 'dark'
//     // })

//     // logseq.once('ui:visible:changed', ({ visible }) => {
//     //   console.log('[faiz:] === ui:visible:changed', visible)
//     //   visible && (this.ready = true)
//     // })
//   },
//   methods: {
//     hidePluginView () {
//       logseq.hideMainUI()
//     },
//   },
// }
export default {
  setup(props) {
    return {
      hidePluginView () {
        logseq.hideMainUI()
      },
    }
  },
}
</script>
