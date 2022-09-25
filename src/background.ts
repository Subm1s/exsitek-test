let color: string = "#3aa757";

const words: { word: string; variant: string[] }[] = [
  {
    word: "cat",
    variant: ["dog", "rat", "bat"],
  },
  {
    word: "helo",
    variant: ["hello", "help", "hell"],
  },
  {
    word: "heldp",
    variant: ["help", "held", "hello"],
  },
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ words });
});
