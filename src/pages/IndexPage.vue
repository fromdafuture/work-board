<template>
  <q-page class="flex full-width full-height column no-wrap">
    <div style="height: 100%; display: flex; flex-direction: column">
      <boards-holder class="boards-holder" :allIssues="issues" />
      <div class="controls">
        <add-issue class="add-issue-holder" />
        <layout-chooser class="layout-chooser-holder" />
      </div>
    </div>
  </q-page>
</template>

<script>
import BoardsHolder from "src/components/BoardsHolder.vue";
import AddIssue from "src/components/AddIssue.vue";
import LayoutChooser from "src/components/LayoutChooser.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { BoardsHolder, AddIssue, LayoutChooser },
  name: "IndexPage",
  computed: {
    issues() {
      return this.$store.state.issues.issues;
    },
  },
});
</script>

<style lang="scss">
.boards-holder {
  margin: 12px 12px 0 12px;
  flex-grow: 1;
  border: 1px solid gray;
  border-radius: 5px;
  overflow: auto;
}

.controls {
  display: flex;
}

.add-issue-holder {
  width: 50%;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 12px 12px 12px 12px;
}

.layout-chooser-holder {
  width: 50%;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 12px 12px 12px 12px;
}
</style>
