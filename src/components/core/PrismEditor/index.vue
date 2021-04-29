<template>
  <prism-editor
    class="my-editor"
    :lines="10"
    v-model="data"
    :highlight="highlighter"
    :class="{ 'one-line': oneLine }"
    line-numbers
  />
</template>

<script>
import { ref, watch } from 'vue'
import { trim } from 'ramda'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-powershell'
import 'prismjs/themes/prism.css'

export default {
  components: {
    PrismEditor
  },
  props: {
    code: { type: String, default: '' },
    lang: { type: String, default: 'markup' },
    oneLine: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const data = ref(trim(props.code))
    const map = {
      bash: languages.bash,
      markup: {
        ...languages.markup,
        ...languages.js,
        ...languages.css
      }
    }
    function highlighter(code) {
      return highlight(code, map[props.lang])
    }

    watch(data, () => {
      emit('codeChange', data.value)
    })

    return { data, highlighter }
  }
}
</script>

<style lang="postcss">
.my-editor {
  position: relative;
  color: #424242;
  background-color: #f6f9fc;
  padding: 0.15rem 0 !important;
  /* border-radius: 8px;
  border: 2px solid #a0aec0; */
  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  max-height: 420px;
}

.my-editor::after {
  position: absolute;
  display: block;
  background: #f7f7f7;
  border-right: 1px solid #ddd;
  width: 32px;
  left: 0;
  top: 0;
  bottom: 0;
  content: ' ';
  z-index: 0;
}
/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}

.prism-editor__line-numbers {
  z-index: 100;
}

.my-editor.one-line .prism-editor__container {
  padding: 10px 10px;
}

.my-editor.one-line .prism-editor__line-numbers {
  padding: 10px 0px !important;
}
</style>
