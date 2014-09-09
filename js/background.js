chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('../main.html', {
    id: "GDriveExample",
    bounds: {
      width: screen.availWidth,
      height: screen.availHeight,
      left: 0,
      top: 0
    },
    frame: 'none'
  });
});

chrome.runtime.onInstalled.addListener(function() {
  console.log('installed');
});

chrome.runtime.onSuspend.addListener(function() { 
  // Do some simple clean-up tasks.
});
