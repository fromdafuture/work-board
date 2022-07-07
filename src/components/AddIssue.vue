<template>
  <form class="add-issue__form" @submit.prevent="onSubmit">
    <div class="add-issue__inputs">
      <div class="add-issue__dropdowns">
        <span>Priority</span>
        <q-select
          name="priority"
          dense
          options-dense
          outlined
          v-model="isssuePriority"
          :options="priorityOptions"
        />
        <span>Status</span>
        <q-select
          name="status"
          dense
          options-dense
          outlined
          v-model="issueStatus"
          :options="statuses"
          emit-value
          map-options
        />
      </div>

      <div class="add-issue__texts">
        <span>Title</span>
        <q-input
          name="title"
          outlined
          dense
          placeholder="Place some title here"
          v-model="issueTitle"
        />
        <span>Text</span>
        <q-input
          name="text"
          outlined
          dense
          placeholder="Place some text here"
          v-model="issueText"
        />
      </div>
    </div>
    <q-btn type="submit" class="add-issue__button">Submit</q-btn>
  </form>
</template>

<script>
import IssueStatuses from "src/models/IssueStatuses";

export default {
  name: "AssIssue",
  data() {
    return {
      isssuePriority: "",
      issueStatus: "",
      issueTitle: "",
      issueText: "",
    };
  },
  computed: {
    priorityOptions() {
      return this.$store.state.issues.priorities.flat();
    },
    statuses() {
      return IssueStatuses;
    },
  },
  mounted() {
    this.isssuePriority = this.priorityOptions[0];
    this.issueStatus = this.statuses[0];
  },
  methods: {
    onSubmit(event) {
      const { priority, status, title, text } = Object.fromEntries(
        new FormData(event.target)
      );
      this.$store.commit("issues/addIssue", {
        priority,
        status,
        title,
        priorityIndex: 1,
        text,
        date: Date.now(),
      });
      this.issueTitle = "";
      this.issueText = "";
    },
  },
};
</script>

<style lang="scss">
.add-issue__form {
  padding: 12px;
}

.add-issue__inputs {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  column-gap: 8px;
}

.add-issue__dropdowns {
  width: 50%;
  max-width: 220px;
}

.add-issue__texts {
  width: 50%;
  flex-grow: 1;
}

.add-issue__button {
  margin-top: 8px;
}
</style>
