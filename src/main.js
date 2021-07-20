import '@logseq/libs'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

console.log('[faiz:] === random walk boot', logseq)


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
    console.log('[faiz:] === error', error)
    return Promise.reject()
  }
}
/**
 * user model
 */
function createModel () {
  return {
    async bootRandomWalk() {
      console.log('[faiz:] === bootRandomWalk click', logseq, logseq.baseInfo.id)
      try {
        const { 'original-name': id } = await navRandomPage()
        console.log('[faiz:] === bootRandomWalk page', id)
        logseq.App.pushState('page', { name: id })
      } catch (error) {
        logseq.showMainUI()
      }
    },
  }
}

// var(--ls-primary-text-color)
// .cp__header a.button {
//   padding: .25rem;
//   margin: 0 4px;
// }
// a.button:hover {
//   opacity: 1;
//   background: var(--ls-tertiary-background-color);
// }
// div[data-injected-ui=hayden-random-walk-${key}] {
//   display: flex;
//   align-items: center;
//   opacity: .55;
//   font-weight: 500;
//   position: relative;
//   top: 0px;
// }

// div[data-injected-ui=hayden-random-walk-${key}]:hover {
//   opacity: 1;
// }
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
