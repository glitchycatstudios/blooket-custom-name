function getTabId(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0];
      callback(tab.id);
  });
}

getTabId(function(tabId) {
  fetch(chrome.runtime.getURL('script.js'))
      .then(response => response.text())
      .then(scriptContent => {
          chrome.scripting.executeScript({
              target: { tabId: tabId },
              func: (script) => {
                  eval(script);
              },
              args: [scriptContent]
          }).then(() => console.log("Injected script content into the console"));
      });
});