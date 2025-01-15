document.getElementById('allowpast').addEventListener('click', () => {
  fetch(chrome.runtime.getURL('allowpastcopy.js'))
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

document.getElementById('costumname').addEventListener('click', () => {
  fetch(chrome.runtime.getURL('costumnamecopy.js'))
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