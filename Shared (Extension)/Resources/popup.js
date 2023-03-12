document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn").addEventListener("click", function(){
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {"message": "start"});
        });
    })
});
