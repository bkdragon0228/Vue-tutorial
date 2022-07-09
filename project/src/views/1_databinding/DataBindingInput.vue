<template>
    <div>
        <input type="text" v-model="userId"/>
        <button @click="myFunction">클릭</button>
    </div>
</template>

<script>

export default {
    name: 'DataBindingInput',
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
