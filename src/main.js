import '@logseq/libs'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

async function navRandomPage() {
  try {
    const res = await logseq.DB.datascriptQuery(`
      [:find (pull ?p [*])
       :where
       [?b :block/page ?p]]
    `)
    const pages = res?.flat()
    if (Array.isArray(pages) && pages.length > 0) {
      const index = Math.floor(Math.random() * pages.length)
      return pages[index]
    }
    return Promise.reject()
  } catch (error) {
    console.log('[faiz:] === navRandomPage error', error)
    return Promise.reject()
  }
}
/**
 * user model
 */
function createModel () {
  return {
    async bootRandomWalk() {
      try {
        const { 'original-name': id } = await navRandomPage()
        console.log('[faiz:] === bootRandomWalk page', id)
        logseq.App.pushState('page', { name: id })
      } catch (error) {
        console.log('[faiz:] === bootRandomWalk error', error)
        logseq.showMainUI()
      }
    },
  }
}

/**
 * app entry
 */
function main () {
  logseq.setMainUIInlineStyle({
    position: 'fixed',
    zIndex: 11,
  })

  const key = logseq.baseInfo.id

  logseq.provideStyle(`
    @import url("https:////at.alicdn.com/t/font_2687757_emewci6wds7.css");

    div[data-injected-ui=hayden-random-walk-${key}] {
      display: flex;
      align-items: center;
    }
    div[data-injected-ui=hayden-random-walk-${key}] a {
      padding: .15rem;
      margin: 0 4px;
      color: var(--ls-primary-text-color);
      border-radius: 4px;
      opacity: 0.6;
    }
    div[data-injected-ui=hayden-random-walk-${key}] a:hover {
      opacity: 1;
      background: var(--ls-tertiary-background-color);
    }
  `)

  // external btns
  logseq.provideUI({
    key: 'hayden-random-walk',
    path: '#search',
    template: `
      <a data-on-click="bootRandomWalk">
        <i class="iconfont icon-faizRandom" style="font-size: 1.5rem;"></i>
      </a>
    `,
  })

  // main UI
  createApp(App).mount('#app')
}

// bootstrap
logseq.ready(createModel()).then(main)
