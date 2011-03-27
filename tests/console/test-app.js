
const m = require("main");
const timer = require("timer");

exports.testBrowser = function (test) {

 var callbacks = { 
    onload: function () { 
       var mainBrowser= m.getAppBrowser();
       var appWindow = m.getAppWindow; 
       var mainDoc = mainBrowser.contentDocument;
       test.assert( mainBrowser.contentWindow.wrappedJSObject["console"] != null );
       test.done();
    }, 
    quit: function() {
      test.pass();
      test.done();
    } 
  };

  test.waitUntilDone();
  m.main( options, callbacks);
}