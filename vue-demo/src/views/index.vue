<template>
    <div class="father">
        <!-- <child :tempX="tempX" :tempY="tempY"></child>
        <button @click="add('X')">tempX</button>
        <button @click="add('Y')">tempY</button> -->
        <div class="danmu-area" id="danmuArea">
        </div>
        <input v-model="value" type="text" />
        <button @click="start">run</button> 

    </div>
</template>
<script>
import child from '@components/child.vue';

export default {
    name: 'father',
    data () {
        return {
            tempX: 1,
            tempY: 2,
            value: '',
            testValueList: [],
        }
    },
    mounted () {
        for (let i = 0; i < 100; i++) {
            this.testValueList.push({
                text: `dom-random-${i}`,
            })
        }
        // this.addKeyframes();
    },
    
    components: {
        child
    },
    methods: {
        start() {
            for (let i = 0; i <this.testValueList.length; i++) {
                setTimeout(() => {
                    this.danmuItem(this.testValueList[i].text, i);
                }, 1000 + i * 500);
            }
        },

        deleteDom (deleteDom) {
            deleteDom.remove();
        },

        addKeyframes () {
            let danMuDom = document.getElementById("danmuArea");
            let width = parseInt(this.domProprety(danMuDom, 'width'));
            let from = `from { visibility: visible; -webkit-transform: translateX(0px); }`;
            let to = `to { visibility: hidden; -webkit-transform: translateX(${-width}px); }`;

            let style = document.styleSheets[0];
            
            style.insertRule(`@keyframes test{${from}${to}}`, 1);

            console.warn(style);
            
        },

        danmuItem(value, index) {
            // let dom = document.getElementById("item");
            // let width = parseInt(this.domProprety(dom, 'width'));

            // dom.style = 'will-change:transform;transform:translateX(-300px);transition: transform 14s linear 0s;';
            let parent = document.getElementById('danmuArea');
            let pWdith = parseInt(this.domProprety(parent, 'width'));

            let child = document.createElement('DIV');
            child.innerHTML = value;
            child.setAttribute('class', 'item');
            child.style = `transform: translateX(100%);`;

            parent.appendChild(child);
            let cWidth = parseInt(this.domProprety(child, 'width'));
            console.warn(cWidth);

            let top = (index % 3) * 20;

            // return;


            let time = pWdith / cWidth + 1;
            child.style = `will-change:transform;transform:translateX(${-pWdith}px);transition: transform ${time}s linear 0s;top: ${top}px`;
            setTimeout(() => {
                this.deleteDom(child);
            }, parseInt(time + 1) * 1000);

            // dom.style = 'animation: test 10s linear;'

            // console.warn(document.styleSheets[0]);

            // dom.style = `transform:translateX(${-width}px)`;
            
            // // console.warn(dom.sheet);
            // // dom.sheet.insertRule(`@-webkit-keyframes run { ${from} ${to} }`, 0);
            // let keyframs = `@keyframs run{${from} to${to}}`;
            // dom.style+=keyframs;
        },

        domProprety (dom, property) {
            // let dom = document.getElementById('danmuArea');
            let computedStyle = window.getComputedStyle(dom, null);
            let value = computedStyle.getPropertyValue(property);
            return value;
        },

        add (type) {
            if (type == 'X') {
                this.tempX++;
            } else {
                this.tempY++;
            }
        }
    },

    beforeCreate () {
        console.warn('father beforeCreated');
    },
    created () {
        console.warn('father created');
    },
    beforeMount () {
        console.warn('father beforeMount');
    },
    // mounted () {
    //     console.warn('father mounted');
    // },
    beforeDestroy () {
        console.warn('father beforeDestory');
    },
    destroyed () {
        console.warn('father destroyed');
    }
}
</script>

<style lang="scss">
.father {
    .item {
    
    }
    .danmu-area {
        position: relative;
        
        height: 300px;
        border: 1px solid #000;
        text-align: right;
        overflow-x: hidden;

        .item {
            position: absolute;
            right: 0;
            z-index: 1;
        }
        // @keyframes run {
            // from {
            //     transform: translateX(0);
            // }
            // to {
            //     transform: translateX(-300px);
            // }
        // }
    }
}
</style>