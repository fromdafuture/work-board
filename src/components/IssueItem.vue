<template>
  <DragItem :itemType="issue.status + issue.priority" :itemObject="issue">
    <div class="issue">
      <div class="issue-signs">
        <div class="issue-signs__priority">
          <q-icon :name="priorityMark" :color="priorityColor" class="icon" />
        </div>
      </div>
      <div class="issue-desc">
        <div>{{ issue.type }}</div>
        <div class="issue-desc__title">{{ issue.title }}</div>
        <div class="issue-desc__text">
          {{ issue.text }}
        </div>
        <div class="issue-desc__epic">epic</div>
      </div>
      <div class="issue-info">
        <div class="issue-info__avatar">A</div>
        <div class="issue-info__time">33m</div>
      </div>
    </div>
  </DragItem>
</template>

<script>
import DragItem from "src/dragndrop/DragItem.vue";

export default {
  name: "IssueItem",
  components: { DragItem },
  props: ["issue"],
  data() {
    return {
      movingCopy: null,
    };
  },
  computed: {
    priorityMark() {
      return getPriorityMark(this.issue.priority);
    },
    priorityColor() {
      return getPriorityColor(this.issue.priority);
    },
  },
  mounted() {},
  methods: {},
};

const getPriorityMark = (priority) => priorityImages[priority] || "up";
const getPriorityColor = (priority) => priorityColors[priority] || "gray";

const priorityImages = {
  highest: "arrow_upward",
  high: "arrow_upward",
  medium: "arrow_upward",
  low: "arrow_downward",
  lowest: "arrow_downward",
};

const priorityColors = {
  highest: "red",
  high: "orange",
  medium: "green",
  low: "yellow",
  lowest: "white",
};
</script>

<style scoped lang="scss">
.issue {
  width: 100%;
  display: flex;
  background-color: #f9c785;
  position: relative;
  border-top-left-radius: 12px;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.25);

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    cursor: move;
    border: inherit;
  }

  &:hover:after {
    background-color: rgba(0, 0, 255, 0.05);
  }

  & * {
    pointer-events: none;
    user-select: none;
  }

  &-signs {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: rgba(255, 0, 0, 0.298);
    border-bottom-left-radius: inherit;
    border-top-left-radius: inherit;

    &__type {
      width: 20px;
      height: 20px;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__priority {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      background-color: #000000;
      margin: 2px;
      border-radius: 12px;
    }
  }

  &-desc {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 5px 5px 5px;

    overflow: hidden;
    flex-shrink: 100;

    &__title {
      font-size: 16px;
      line-height: 16px;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    &__text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 14px;
      margin-top: 8px;
      color: #6d6d6d;
    }

    &__epic {
      margin-top: 6px;
      overflow: hidden;
    }
  }

  &-info {
    display: flex;

    width: 34px;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    border-radius: inherit;

    &__avatar {
      width: 24px;
      height: 24px;
      border: 1px solid rgba(255, 0, 0, 0.401);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2px;
    }

    &__time {
      align-self: stretch;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-size: 12px;
      border-bottom: 1px solid rgba(255, 0, 0, 0.401);
      margin: 2px;
      line-height: 14px;
    }
  }
}
</style>
