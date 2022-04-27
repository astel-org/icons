export const iconTemplate = (name: string, icon: string) => `<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: '${name}',
  props:{
    color:{
      type:String,
      default:'currentColor'
    },
    size:{
      type:[String,Number],
      default:24
    }
  },
  setup(props){
    const setColor = computed(()=> 'color:'+ props.color);
    const setSize = computed(()=>props.size);
    
    return {
      setColor,
      setSize
    }
  }
})
</script>

<template>
${icon}
</template>
`

export const indexTemplate = (
  componentName: string,
  formattedComponentName: string
) => `import _${formattedComponentName} from './${componentName}.vue'
export const ${formattedComponentName} = _${formattedComponentName}
export default ${formattedComponentName}
`
