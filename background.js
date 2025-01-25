// Only for debugging, remember to add "declarativeNetRequestFeedback" permission in manifest.json

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(
    (e) => console.log("onRuleMatchedDebug" + JSON.stringify(e))
);