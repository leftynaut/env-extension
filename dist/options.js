!function(e){function t(o){if(n[o])return n[o].exports;var u=n[o]={exports:{},id:o,loaded:!1};return e[o].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},,,function(e,t){var n={urls:[],warningText:"You're on a production site",backgroundColor:"#a72600",textColor:"#ffffff",opacity:.95,blinky:!1,bottom:!1};e.exports=n},function(e,t,n){function o(e){e.preventDefault();var t=document.getElementById("value-urls").value,n=document.getElementById("value-warning-text").value,o=document.getElementById("value-background-color").value,u=document.getElementById("value-text-color").value,l=document.getElementById("value-opacity").value,r=document.getElementById("value-blinky").checked,a=document.getElementById("value-bottom").checked;t=t.split("\n").filter(function(e){return e.length>0}).map(function(e){return e=e.trim(),0===e.indexOf("regex:")&&e.length>6?{url:e.substr(6),regex:!0}:{url:e,regex:!1}}),chrome.storage.sync.set({urls:t,warningText:n,backgroundColor:o,textColor:u,opacity:l,blinky:r,bottom:a},function(){var e=document.getElementById("status");e.textContent="Options saved.",setTimeout(function(){e.textContent=""},750)})}function u(){chrome.storage.sync.get(l,function(e){for(var t="",n=0;n<e.urls.length;n++)e.urls[n].regex&&(t+="regex:"),t+=e.urls[n].url,n!==e.urls.length&&(t+="\n");document.getElementById("value-urls").value=t,document.getElementById("value-warning-text").value=e.warningText,document.getElementById("value-background-color").value=e.backgroundColor,document.getElementById("value-text-color").value=e.textColor,document.getElementById("value-opacity").value=e.opacity,document.getElementById("value-blinky").checked=e.blinky,document.getElementById("value-bottom").checked=e.bottom})}var l=n(3);document.addEventListener("DOMContentLoaded",u),document.getElementById("save").addEventListener("click",o)}]);