<template>
  <div @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DragItem",
  data() {
    return {
      movingCopy: null,
    };
  },
  props: ["itemType", "itemObject"],
  inject: ["setCurrentDragItem", "setCurrentDragObject"],
  mounted() {},
  methods: {
    onMouseDown(e) {
      this.setCurrentDragItem(this.$props.itemType);
      this.setCurrentDragObject(this.$props.itemObject);

      const rect = this.$el.getBoundingClientRect();
      const el = document.createElement("div");

      el.style.zIndex = "2000";
      el.style.display = "block";
      el.style.position = "absolute";
      el.style.top = rect.top + "px";
      el.style.left = rect.left + "px";

      const elInner = document.createElement("div");
      elInner.innerHTML = this.$el.innerHTML;
      elInner.classList = this.$el.classList;
      el.appendChild(elInner);

      document.body.appendChild(el);
      el.style.width = rect.width.toString() + "px";
      el.style.height = rect.height.toString() + "px";
      el.style.pointerEvents = "none";
      this.movingCopy = el;

      document.dragInfo = {
        draggedEl: el,
        offsetX: e.offsetX,
        offsetY: e.offsetY,
      };

      document.body.onmousemove = mouseMove;
      document.body.onmouseup = mouseUp.bind(this);
      document.body.style.overflow = "hidden";
    },
    onMouseMove(e) {},
    onMouseUp(e) {},
  },
});

function mouseMove(e) {
  if (!document.dragInfo.draggedEl) return;
  e.preventDefault();
  const { draggedEl, offsetX, offsetY } = document.dragInfo;

  draggedEl.style.top = e.y - offsetY + "px";
  draggedEl.style.left = e.x - offsetX + "px";
}

function mouseUp(e) {
  if (document.dragInfo?.draggedEl) {
    document.dragInfo.draggedEl.remove();
  }
  document.dragInfo.draggedEl = null;
  this.setCurrentDragItem("");
  this.setCurrentDragObject(null);
}
</script>
