import spring from '@react-spring/animated'
import { TYPES } from '../utils/element'
import { applyDefaultProps } from '../utils/props'

const primitives = Object.keys(TYPES)

const host = spring.createHost(primitives, {
  applyAnimatedValues(instance, props) {
    if (!(instance.nodeType || instance.pluginName)) {
      return false
    }
    const applyProps = typeof instance?.applyProps === 'function' ? instance.applyProps : applyDefaultProps
    applyProps(instance, {}, props)
  },
})

const animated = host.animated
export { animated }
