/* global chrome */

console.log('BACKGROUND');


function initClippy() {
  console.log('initClippy');

  chrome.tabs.executeScript(null,
    {code:"clippy.show();"}
  );
  }

chrome.tabs.onUpdated.addListener(initClippy);
chrome.tabs.onCreated.addListener(initClippy);
