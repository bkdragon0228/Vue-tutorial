<template>
    <div>
        <h2>{{userId}}</h2>
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
        const num1 = 0
        const num2 = 0
        return {
            num1,
            num2
        }
    },
    setup() {
        const userId = '하하'
        return {
            userId

        }
    },
    methods: {
        myFunction() {
            console.log(this.userId)
        }
    }
}
</script>
