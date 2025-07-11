import type { Plugin, Component,App } from 'vue'
import { each } from "lodash-es"

export const withInstall = (component: Component) => {
  component.install = (app: App) => {
    app.component(component.name, component)
  }
  return component
}



export const installer = (components: Component[]) => {
  const install = (app:App) => each(components,c => app.use(c))
  return install
}
