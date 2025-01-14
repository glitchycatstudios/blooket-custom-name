document.getElementById('copyButton1').addEventListener('click', () => {
  fetch(chrome.runtime.getURL('codeToCopy1.js'))
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

document.getElementById('copyButton2').addEventListener('click', () => {
  fetch(chrome.runtime.getURL('codeToCopy2.js'))
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