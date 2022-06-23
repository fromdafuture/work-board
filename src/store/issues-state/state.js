export default function () {
  return {
    issues: [
      {
        title: "1111",
        text: "this is some text that can be an issue ",
        priority: "highest",
        status: "todo",
        priorityIndex: 1,
        date: Date.now() + 1,
      },
      {
        title: "1111",
        text: "this is some text that can be an issue ",
        priority: "high",
        status: "todo",
        priorityIndex: 1,
        date: Date.now() + 1,
      },
      {
        title: "2222",
        text: "this is some ",
        priority: "high",
        status: "inProgress",
        priorityIndex: 1,
        date: Date.now() + 2,
      },
      {
        title: "2222",
        text: "this is some ",
        priority: "medium",
        status: "inProgress",
        priorityIndex: 1,
        date: Date.now() + 2,
      },
      {
        title: "3333",
        text: "this is some text that can be an issue on the work board. Please, enjoy.",
        priority: "low",
        status: "inProgress",
        priorityIndex: 1,
        date: Date.now() + 3,
      },
      {
        title: "4444",
        text: "this is some text that can be an issue on the work board. Please, enjoy.",
        priority: "lowest",
        status: "testInProgress",
        priorityIndex: 1,
        date: Date.now() + 4,
      },
      {
        title: "4444",
        text: "this is some text that can be an issue on the work board. Please, enjoy.",
        priority: "lowest",
        status: "testInProgress",
        priorityIndex: 1,
        date: Date.now() + 5,
      },
    ],
    priorities: [
      ["highest", "high"],
      ["medium", "low", "lowest"],
    ],
    //
  };
}
