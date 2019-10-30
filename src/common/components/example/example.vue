<template>
    <div class="example">example component</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({})
export default class example extends Vue {}
</script>

<style scoped lang="scss">
.example {
}
</style>
