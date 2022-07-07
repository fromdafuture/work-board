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
      <DropZone
        class="boards-holder__delete-zone"
        dragClass="boards-holder__delete-zone-on-drag"
        @objectDropped="onObjectDropped($event)"
      >
        <div class="boards-holder__delete-zone-sign">
          <q-icon name="delete" size="34px" />
        </div>
      </DropZone>
    </div>
  </DragContainer>
</template>

<script>
import SingleBoard from "./SingleBoard.vue";
import IssueStatuses from "../models/IssueStatuses";
import DragContainer from "../dragndrop/DragContainer.vue";
import DropZone from "../dragndrop/DropZone.vue";

export default {
  name: "BoardsHolder",
  components: { DragContainer, SingleBoard, DropZone },
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
  methods: {
    onObjectDropped(e) {
      this.$store.commit("issues/removeIssue", e);
    },
  },
};
</script>

<style lang="scss">
.boards-holder__container {
  height: 100%;
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

.boards-holder__delete-zone {
  position: absolute;
  z-index: 9999;
  height: 44px;
  width: 44px;
  right: 20px;
  top: 20px;

  display: none;
  justify-content: center;
  align-items: center;

  border-radius: 22px;
  background-color: rgb(255, 189, 189);

  &-on-drag {
    display: flex;

    .boards-holder__delete-zone-sign {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      animation: 1s trash-anim;
      width: 100%;
      height: 100%;

      @keyframes trash-anim {
        from {
          transform: scale(0.1);
        }

        40% {
          transform: scale(1);
          transform: rotateZ(0);
        }

        60% {
          transform: rotateZ(-15deg);
        }
        70% {
          transform: rotateZ(+15deg);
        }
        80% {
          transform: rotateZ(-15deg);
        }
        90% {
          transform: rotateZ(+15deg);
        }
        to {
          transform: rotateZ(0);
        }
      }
    }
  }

  &:after {
    background-color: rgb(255, 189, 189, 0.2);
    border: 1px solid rgb(255, 127, 127, 0.2);
  }
}
</style>
