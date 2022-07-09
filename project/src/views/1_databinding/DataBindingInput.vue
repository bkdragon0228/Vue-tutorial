<template>
    <div>
        <input type="text" v-model="userId"/>
        <button @click="myFunction">클릭</button>
        <br/>
        <input type="text" v-model.number="num1" /> +
        <input type="text" v-model.number="num2" /> =
        <span>{{num1 + num2}}</span>
    </div>
</template>

<script>

export default {
    name: 'DataBindingInput',
    data() {
        return {
            num1: 0,
            num2: 0
        }
    },
    setup() {
        return {
            userId: '하하'

        }
    },
    methods: {
        myFunction() {
            console.log(this.userId)
        }
    }
}
</script>
