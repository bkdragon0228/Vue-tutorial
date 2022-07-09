<template>
    <div>
        <button @click="increase">Add 1</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
export default {
    name: 'ClickEvent',
    data() {
        return {
            counter: 1
        }
    },
    methods: {
        increase() {
            this.counter++
        }
    }

}
</script>

<style>

</style>
