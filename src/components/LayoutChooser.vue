<template>
  <div class="layouts-container">
    <div class="title">Choose Layout:</div>
    <div class="layouts">
      <div
        v-for="layout in layouts"
        :key="layout.type"
        class="layout"
        @click="onClick(layout.layout)"
      >
        <div class="layout__title">{{ layout.type }}:</div>
        <div
          v-for="layoutPriorities in layout.layout"
          :key="layoutPriorities[0]"
          class="layout__priorities"
        >
          <div
            v-for="priority in layoutPriorities"
            :key="priority"
            class="layout__priority"
          >
            {{ priority }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutChooser",
  data() {
    return {
      layouts: {
        1: {
          type: "Separated",
          layout: [
            ["highest", "high"],
            ["medium", "low", "lowest"],
          ],
        },
        2: {
          type: "Single",
          layout: [["highest"], ["high"], ["medium"], ["low"], ["lowest"]],
        },
      },
    };
  },
  methods: {
    onClick(layout) {
      this.$store.commit("issues/setLayout", layout);
    },
  },
});
</script>

<style lang="scss" scoped>
.layouts-container {
  padding: 6px;
}

.title {
  padding: 6px;
}

.layouts {
  display: flex;
  gap: 6px;
}

.layout {
  width: 50%;
  border: 1px solid gray;
  padding: 6px;

  &:hover {
    background-color: aliceblue;
    cursor: pointer;
  }

  &__title {
    padding: 6px;
  }

  &__priorities {
    display: flex;
    border: 1px solid gray;
    margin-bottom: 6px;
  }

  &__priority {
    margin-left: 6px;
  }
}
</style>
