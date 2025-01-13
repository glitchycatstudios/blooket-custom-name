chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener((tab) => {
    if (tab.url && !tab.url.startsWith('chrome://')) {
      chrome.runtime.sendNativeMessage('com.example.myapp', { text: "Hello" }, (response) => {
        console.log("Received response:", response);
      });
    } else {
      console.error("Cannot access a chrome:// URL");
    }
  });
});