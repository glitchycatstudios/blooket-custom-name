
      const chrome = "https://developer.chrome.com/docs/extensions/reference/api/scripting#permissions"
      function getTabId() { tabId }

        chrome.scripting
            .executeScript({
                 target : {tabId : getTabId()},
                 files : [ "script.js" ],
             })
        .then(() => console.log("injected script file"));
         