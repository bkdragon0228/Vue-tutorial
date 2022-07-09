<template>
    <div>
        <div>
            <input type="checkbox" id="html" value="HTML" v-model="favoriteLang"/>
            <label for="html">HTML</label>
        </div>
        <div>
            <input type="checkbox" id="css" value="CSS" v-model="favoriteLang"/>
            <label for="css">CSS</label>
        </div>
        <div>
            <input type="checkbox" id="js" value="JAVASCRIPT" v-model="favoriteLang"/>
            <label for="js">JAVASCRIPT</label>
        </div>
        <div>
        선택한 지역 : {{favoriteLang}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            favoriteLang: []
        }
    }
}
</script>

<style>

</style>
