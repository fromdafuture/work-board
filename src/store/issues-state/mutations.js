export function addIssue(state, newIssue) {
  state.issues = [...state.issues, newIssue];
}

export function changeIssue(state, { oldIssue, newIssue }) {
  const issues = state.issues.filter((t) => t.date != oldIssue.date);
  state.issues = [...issues, newIssue];
}

export function removeIssue(state, issueToRemove) {
  state.issues = state.issues.filter((t) => t.date != issueToRemove.date);
}

export function setLayout(state, latyout) {
  state.priorities = latyout;
}
