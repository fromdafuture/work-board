<template>
  <q-page class="flex full-width full-height column no-wrap">
    <boards-holder class="board-holder" :allIssues="issues" />
    <add-issue class="add-issue-holder" />
  </q-page>
</template>

<script>
import BoardsHolder from "src/components/BoardsHolder.vue";
import AddIssue from "src/components/AddIssue.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { BoardsHolder, AddIssue },
  name: "IndexPage",
  computed: {
    issues() {
      return this.$store.state.issues.issues;
    },
  },
});
</script>

<style lang="scss">
.board-holder {
  margin: 12px 12px 0 12px;
  flex-grow: 1;
  border: 1px solid gray;
  border-radius: 5px;
}

.add-issue-holder {
  width: 50%;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 12px 12px 12px 12px;
}
</style>
