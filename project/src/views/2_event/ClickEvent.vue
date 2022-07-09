<template>
    <div>
        <button @click="increase">Add 1</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'ClickEvent',
    setup() {
        const counter = ref(1)
        const increase = () => {
            counter.value++
        }
        return {
            counter,
            increase
        }
    }

}
</script>

<style>

</style>
