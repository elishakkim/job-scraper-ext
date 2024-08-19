document.getElementById('scrape-jobs').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: extractPageText
      });
  });
});

function extractPageText() {
  const pageText = document.body.innerText;
  chrome.runtime.sendMessage({text: pageText});
  console.log(pageText)
}



// Listen for the message in popup.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.text) {
      alert('Page text: ' + request.text.substring(0, 100));  // Show a snippet of the text
  }
});
