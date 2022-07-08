<template>
    <div>
        <h2>Hello {{userName}}</h2>
    </div>
</template>

<script>
export default {
    name: 'DataBinding',
    setup() {
        return {
            userName: 'bkboy'
        }
    }
}
</script>
