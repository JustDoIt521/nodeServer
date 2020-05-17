<template>
  <div class="other"></div>
</template>
<script>
export default {
  name: 'other',
    beforeCreate () {
      console.warn('other beforeCreated');
    },
    created () {
        console.warn('other created');
    },
    beforeMount () {
        console.warn('other beforeMount');
    },
    mounted () {
        console.warn('other mounted');
    },
    beforeDestroy () {
        console.warn('other beforeDestory');
    },
    destroyed () {
        console.warn('other destroyed');
    }
}
</script>