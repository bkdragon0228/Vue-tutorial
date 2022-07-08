<template>
    <div>
        <h2>Hello {{userName}}</h2>
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name: 'DataBinding',
    setup() {
        return {
            userName: 'bkboy',
            msg: 'welcome bkboy'
        }
    }
}
</script>
