<template>
  <div class="container">
    <div class="name">
      {{ control.name }}
    </div>
    <div class="description">
      {{ control.description }}
    </div>
    <div class="notes">
      <textarea v-if="editable" v-model="control.notes"></textarea>
      <span v-else>{{ control.notes }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Control } from '@/controls';

@Component
export default class ControlItem extends Vue {
  @Prop() private control!: Control;
  @Prop() private editable!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  background-color: #fafafa;
  margin: 0.7em;
  padding: 0.5em;
  box-shadow: 2px 2px 5px #e0e0e0;
  .name {
    flex: 0 1 5em;
  }
  .description {
    flex: 2;
    padding-right: 2em;
  }
  .notes {
    flex: 1 1 10em;
    textarea {
      width: 100%;
      height: 5em;
    }
  }
}
</style>
