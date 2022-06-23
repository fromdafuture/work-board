<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  data() {
    return { currentDragItem: "", currentDragObject: "" };
  },
  methods: {
    setCurrentDragItem(item) {
      this.currentDragItem = item;
    },
    setCurrentDragObject(object) {
      this.currentDragObject = object;
    },
  },
  provide() {
    return {
      currentDragItem: computed(() => this.currentDragItem),
      setCurrentDragItem: this.setCurrentDragItem,
      currentDragObject: computed(() => this.currentDragObject),
      setCurrentDragObject: this.setCurrentDragObject,
    };
  },
};
</script>
