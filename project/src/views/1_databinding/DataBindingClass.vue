<template>
    <div>
        <div :class="{'text-red': hasError, 'active': isActive}">클래스 바인딩</div>
    </div>
</template>

<script>
export default {
    name: 'DataBindingClass',
    data() {
        return {
            isActive: false,
            hasError: false
        }
    }
}
</script>

<style scoped>
.active {
    background-color: greenyellow;
    font-weight: bold;
}
.text-red {
    color: red;
}
</style>
