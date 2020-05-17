<template>
    <div class="child">
        <p>child sum {{sum}}</p>
    </div>
</template>
<script>
export default {
    name: 'child',
    props: [
        'tempX', 'tempY'
    ],
    computed: {
        sum () {
            console.warn('child computed')
            return this.tempX + this.tempY
        }
    },
    beforeCreate() {
        console.warn('child beforeCreated')
    },
    created() {
        console.warn('child created')
    },
    beforeMount() {
        console.warn('child beforeMount')
    },
    mounted() {
        console.warn('child mounted')
        this.$nextTick(() => {
            console.warn('child nextTick');
        })
    },
    beforeUpdate () {
        console.warn('child beforeUpdate');
    },
    updated () {
        console.warn('child updated')
    },
    beforeDestroy(){
        console.warn('child beforeDestory')
    },
    destroyed() {
        console.warn('child destroyed');
    }
}
</script>