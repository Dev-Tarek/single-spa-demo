import { registerApplication, start } from 'single-spa'
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout'
import microfrontendLayout from './microfrontend-layout.html'

const rootProps = { store: null }

const layoutAppName = '@portal/vue-app-1'
const vueAppName = '@portal/vue-app-2'
const reactAppName = '@portal/react-app'

const routes = constructRoutes(microfrontendLayout)
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name)
  },
})
const layoutEngine = constructLayoutEngine({ routes, applications })

// Register layout application
registerApplication({
  name: layoutAppName,
  app: () => System.import(layoutAppName),
  customProps: { rootProps },
  activeWhen: ['/'],
})

// Register other applications
window.addEventListener('single-spa:first-mount', () => {
  registerApplication({
    name: vueAppName,
    app: () => System.import(vueAppName),
    customProps: { rootProps },
    activeWhen: ['/vue'],
  })
  registerApplication({
    name: reactAppName,
    app: () => System.import(reactAppName),
    customProps: { rootProps },
    activeWhen: ['/react'],
  })
})

layoutEngine.activate()
start()
