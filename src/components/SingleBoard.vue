<template>
  <div class="sboard__container">
    <div class="sboard-header">
      <div class="sboard-header__closer-container">
        <div
          class="sboard-header__closer"
          :class="{ 'sboard-header__closer-reverce': opened }"
          @click="opened = !opened"
        >
          >
        </div>
      </div>
      <div class="sboard-header__title">{{ filteredPriorities }}</div>
      <div class="sboard-header__issues-quantity"></div>
    </div>

    <div class="sboard-issues__container" v-if="opened">
      <div
        class="sboard-issues__column"
        :style="{ width: `calc(100% / ${filteredIssues.length} - 10px)` }"
        v-for="issues in filteredIssues"
        :key="issues.type"
      >
        <DropZone
          :itemTypes="getItemTypes(issues.type)"
          @objectDropped="onObjectDropped($event, issues.type)"
        >
          <template v-if="issues.issues.length > 0">
            <issue-item
              v-for="issue in issues.issues"
              :key="issue.date"
              :issue="issue"
              class="sboard-issues__issue"
            />
          </template>
        </DropZone>
      </div>
    </div>
    <div v-else class="sboard-header__closer-container-closed"></div>
  </div>
</template>

<script>
import IssueItem from "./IssueItem.vue";
import IssueStatuses from "src/models/IssueStatuses";
import DropZone from "src/dragndrop/DropZone.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IssueItem, DropZone },
  name: "SingleBoard",
  data() {
    return {
      IssueStatuses,
      opened: true,
    };
  },
  props: ["issues", "priorities"],
  computed: {
    boardIssues() {
      return this.issues.filter((t) => this.priorities.includes(t.priority));
    },
    filteredIssues() {
      return IssueStatuses.map((t) => ({
        type: t.value,
        issues: this.boardIssues
          .filter((d) => d.status == t.value)
          .sort((a, b) => a.priorityIndex > b.priorityIndex),
      }));
    },
    filteredPriorities() {
      return this.priorities.join(", ");
    },
    columnQuantity() {
      return IssueStatuses.length;
    },
  },
  methods: {
    getItemTypes(issueType) {
      const i = this.IssueStatuses.findIndex((t) => t.value == issueType);
      const itypes = [];

      i > 0 && itypes.push(this.IssueStatuses[i - 1].value);

      i < this.IssueStatuses.length - 1 &&
        itypes.push(this.IssueStatuses[i + 1].value);

      return this.priorities.map((t) => itypes.map((d) => d + t)).flat();
    },
    onObjectDropped(e, issueType) {
      this.$store.commit("issues/changeIssue", {
        oldIssue: e,
        newIssue: { ...e, status: issueType },
      });
    },
  },
});
</script>

<style lang="scss">
.sboard__container {
  display: flex;
  flex-direction: column;
}

.sboard-header {
  display: flex;
  align-items: center;
  width: 24px;

  &__closer-container {
    font-size: 18px;
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 8px;

    &-closed {
      content: "asd";
      height: 4px;
      width: 100%;
      background-color: rgba(128, 128, 128, 0.098);
    }
  }

  &__closer {
    width: 30px;
    height: 30px;

    display: flex;

    align-content: center;
    justify-content: center;
    transition: transform 0.3s;

    transform: rotateZ(90deg);
    user-select: none;
    border: 1px solid silver;
    border-radius: 15px;

    &-reverce {
      transform: rotateZ(-90deg);
    }
  }

  &__title {
    margin-left: 12px;
    white-space: nowrap;
  }
}

.sboard-issues__column {
  background-color: rgba(128, 128, 128, 0.07);
}
.sboard-issues__issue {
  margin-bottom: 4px;
  padding: 0 3px;
}

.sboard-issues {
  &__container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
