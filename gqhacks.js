document.getElementById('gq1').addEventListener('click', () => {
    fetch(chrome.runtime.getURL('gq1copy.js'))
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

  document.getElementById('gq2').addEventListener('click', () => {
    fetch(chrome.runtime.getURL('gq2copy.js'))
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