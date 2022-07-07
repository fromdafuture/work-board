<template>
  <div
    class="drop-zone"
    :class="{
      'drop-zone__high-lighted': hasValidItems,
      [dragClass]: highlightDragged,
    }"
    @mouseup="onMouseUp"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropZone",
  props: ["itemTypes", "dragClass"],
  inject: ["currentDragItem", "currentDragObject"],
  mounted() {},
  computed: {
    hasValidItems() {
      return (
        this.currentDragObject &&
        (!this.itemTypes || this.itemTypes.includes(this.currentDragItem))
      );
    },
    highlightDragged() {
      return this.hasValidItems && this.dragClass ? this.dragClass : "";
    },
  },
  methods: {
    onMouseUp() {
      if (this.hasValidItems)
        this.$emit("objectDropped", this.currentDragObject);
    },
  },
});
</script>

<style lang="scss">
.drop-zone {
  width: 100%;
  height: 100%;
}

.drop-zone__high-lighted {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(127, 255, 212, 0.482);
    border: 3px solid aquamarine;
    border-radius: inherit;
  }

  &:hover::after {
    background-color: rgba(178, 127, 255, 0.482);
    border: 3px solid rgba(178, 127, 255);
    border-radius: inherit;
  }
}
</style>
