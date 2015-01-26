var pageMod = require("sdk/page-mod").PageMod({
  include: "*",
  contentStyleFile: "./foundation.css",
  contentScriptFile: ["./jquery-1.7.min.js", "./my-script.js"]
});
