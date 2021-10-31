<template>
  <div>
    <show-message id="abc" class="class__test" title="isTitle" content="isContent" message-info="test"></show-message>
    <show-message title="isTitle2" content="isContent2"></show-message>
    <show-message title="isTitle3" content="isContent3"></show-message>
    <show-message :title="dataTitle" :content="dataContent"></show-message>
    <!-- <show-message :title="message.title" :content="message.content"></show-message> -->
    <show-message v-bind="message"></show-message>
    <multi-root-element id="multi"></multi-root-element>
  </div>
</template>

<script>    
   import ShowMessage from './ShowMessage.vue'
   import MultiRootElement from './MultiRootElement.vue'
  export default {
    data(){
      return {
        dataTitle: 'dataTitle',
        dataContent: 'dataCotnent',
        message: {
          title: 'HAHAHA',
          content: 'HEYHEY'
        }
      }
    },
    components: {
      ShowMessage,
      MultiRootElement
    }
  }
</script>

<style lang="scss" scoped>

</style>