const webNavigationEvents = ["onCommitted"];

webNavigationEvents.forEach(function (e) {
  chrome.webNavigation[e].addListener(function (data) {
    if (data.frameId === 0) {
      console.log(data);
    }
  });
});
