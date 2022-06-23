<template>
  <DragContainer>
    <div class="boards-holder__container">
      <div class="boards-holder__issue-types-container">
        <div
          class="boards-holder__issue-type"
          :style="{ width: `calc(100% / ${IssueStatuses.length} - 10px)` }"
          v-for="issue in IssueStatuses"
          :key="issue.type"
        >
          {{ issue.label }}
        </div>
      </div>
      <single-board
        v-for="(priority, index) in Priorities"
        class="boards-holder__single-board"
        :key="index"
        :issues="allIssues"
        :priorities="priority"
      />
    </div>
  </DragContainer>
</template>

<script>
import SingleBoard from "./SingleBoard.vue";
import IssueStatuses from "../models/IssueStatuses";
import DragContainer from "../contexts/DragContainer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoardsHolder",
  components: { DragContainer, SingleBoard },
  data() {
    return {
      IssueStatuses,
    };
  },
  props: ["allIssues"],

  computed: {
    Priorities() {
      return this.$store.state.issues.priorities;
    },
  },
});
</script>

<style lang="scss">
.boards-holder__container {
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  padding: 0 12px;
  overflow: auto;
}

.boards-holder__single-board {
  margin-top: 12px;
}

.boards-holder__issue-types-container {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 20;
}

.boards-holder__issue-type {
  padding: 6px;
  overflow: hidden;
  line-height: 16px;
  background-color: #ebebeb;
}
</style>
