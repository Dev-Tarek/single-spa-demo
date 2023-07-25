// Anything exported from this file is importable by other in-browser modules.
import './set-pubic-path'
import './styles/global.css'
import storeModules from './store'
import SharedComponent from './components/SharedComponent.vue'

function publicApiFunction() {
  return Promise.resolve('test')
}

export { storeModules, publicApiFunction, SharedComponent }
