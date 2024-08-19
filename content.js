// Extract the page's inner text
const pageText = document.body.innerText;

// Send the text to the background script
chrome.runtime.sendMessage({action: 'sendToServer', text: pageText});