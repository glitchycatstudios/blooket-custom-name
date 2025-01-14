document.getElementById('copyButton').addEventListener('click', () => {
  fetch(chrome.runtime.getURL('codeToCopy.js'))
    .then(response => response.text())
    .then(textToCopy => {
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    })
    .catch(err => {
      console.error('Failed to fetch code: ', err);
    });
});