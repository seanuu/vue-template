<template>
    <div class="module">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({})
export default class Module extends Vue {}
</script>

<style scoped lang="scss">
.module {
}
</style>
