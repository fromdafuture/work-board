<template>
  <div
    class="dropZone"
    :class="{ highLighted: highLight }"
    @mouseup="onMouseUp"
  >
    <slot />
  </div>
</template>
"

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropZone",

  props: ["itemTypes"],
  inject: ["currentDragItem", "currentDragObject"],
  mounted() {},

  computed: {
    highLight() {
      return this.itemTypes.includes(this.currentDragItem);
    },
  },
  methods: {
    onMouseUp() {
      if (this.itemTypes.includes(this.currentDragItem))
        this.$emit("objectDropped", this.currentDragObject);
    },
  },
});
</script>

<style lang="scss">
.dropZone {
  width: 100%;
  height: 100%;
}

.highLighted {
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
  }

  &:hover::after {
    background-color: rgba(178, 127, 255, 0.482);
    border: 3px solid rgba(178, 127, 255);
  }
}
</style>
