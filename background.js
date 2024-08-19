chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'sendToServer') {
      const pageText = request.text;
      
      // Send the page text to the Flask server
      fetch('http://localhost:5001/process_text', {  // Update to the correct portmethod: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: pageText })
      })
      .then(response => response.json())
      .then(data => {
          console.log("Server response:", data);
          // Optionally, send a response back to the content scriptsendResponse({success: true, data: data});
      })
      .catch(error => {
          console.error('Error:', error);
          sendResponse({success: false, error: error});
      });

      // Return true to indicate that the response will be sent asynchronouslyreturntrue;
  }
});
