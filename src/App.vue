<template>
  <main
    class="w-screen h-screen bg-gray-300 opacity-20 flex justify-center items-start"
    @click="hidePluginView"
  >
    <span class="bg-red-600 px-8 py-1 rounded-sm">walk error</span>
  </main>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      reasdy: true,
    }
  },
  mounted () {
    logseq.App.onThemeModeChanged((label) => {
      console.log('[faiz:] === onThemeModeChanged', label)
      this.opts[`is-dark`] = label === 'dark'
    })

    // logseq.once('ui:visible:changed', ({ visible }) => {
    //   console.log('[faiz:] === ui:visible:changed', visible)
    //   visible && (this.ready = true)
    // })
  },
  methods: {
    hidePluginView () {
      logseq.hideMainUI()
    },
  },
}
</script>
