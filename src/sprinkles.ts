import type * as Vue from 'vue'
import { computed, defineComponent, h, toRef } from 'vue'
import type { IntrinsicElementAttributes } from './element-types'

type IntrinsicElementsKeys = keyof IntrinsicElementAttributes

interface GenericSlotProps<TValue> {
  currentValue: TValue
  oldValue: TValue
}

interface SprinklesFnBase {
  (...args: any): string
  properties: Set<string>
}

export function useSprinkles<
  S extends SprinklesFnBase,
>(sprinklesFn: S) {
  type Tokens = Parameters<S>[0]

  const base = defineComponent({
    props: [...sprinklesFn.properties, 'as'],
    setup(props, { slots }) {
      const classNames = computed(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { as, ...rest } = props
        return sprinklesFn(JSON.parse(JSON.stringify(rest as any)))
      })
      const as = toRef(props, 'as')
      return () => h(as.value || 'div', {
        class: classNames.value,
      }, slots)
    },
  })

  const wrapper = defineComponent((props: Readonly<Tokens & { as?: IntrinsicElementsKeys }>, { slots }) => {
    return () => {
      return h(base, props, slots)
    }
  })

  return wrapper as typeof wrapper & {
    new (): {
      $slots: {
        default: (arg: GenericSlotProps<Tokens>) => Vue.VNode[]
      }
    }
  }
}
