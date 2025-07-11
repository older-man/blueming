import { installer } from "@blueming/utils"
import components from "./components"
import "@blueming/theme"

const install = installer(components)

export * from "@blueming/components"

export default install