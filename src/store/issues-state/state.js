export default function () {
  return {
    issues: [
      {
        title: "Some title 1",
        text: "this is some text that can be an issue this is some text that can be an issue this is some text that can be an issue this is some text that can be an issue ",
        priority: "highest",
        status: "todo",
        priorityIndex: 1,
        date: Date.now() + 1,
      },
      {
        title: "Some title 2",
        text: "this is some text that can be an issue ",
        priority: "high",
        status: "todo",
        priorityIndex: 1,
        date: Date.now() + 2,
      },
      {
        title: "Some title 3",
        text: "this is some ",
        priority: "high",
        status: "inProgress",
        priorityIndex: 1,
        date: Date.now() + 3,
      },
      {
        title: "Some title 4",
        text: "this is some ",
        priority: "medium",
        status: "inProgress",
        priorityIndex: 1,
        date: Date.now() + 4,
      },
      {
        title: "Some title Some title Some title Some title Some title 5",
        text: "this is some text that can be an issue on the work board. Please, enjoy.",
        priority: "low",
        status: "inProgress",
        priorityIndex: 1,
        date: Date.now() + 5,
      },
      {
        title: "Some title 6",
        text: "this is some text that can be an issue on the work board. Please, enjoy. this is some text that can be an issue on the work board. Please, enjoy.",
        priority: "lowest",
        status: "testInProgress",
        priorityIndex: 1,
        date: Date.now() + 6,
      },
      {
        title: "Some title 7",
        text: "this is some text that can be an issue on the work board. Please, enjoy.",
        priority: "lowest",
        status: "testInProgress",
        priorityIndex: 1,
        date: Date.now() + 7,
      },
    ],
    priorities: [
      ["highest", "high"],
      ["medium", "low", "lowest"],
    ],
    //
  };
}
