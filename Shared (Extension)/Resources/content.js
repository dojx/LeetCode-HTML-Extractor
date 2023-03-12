browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "start") {
        var title_class = "mr-2 text-lg font-medium text-label-1 dark:text-dark-label-1"
        var title_text = document.getElementsByClassName(title_class)[0].innerText;
        var title = title_text.substring(title_text.indexOf(' ') + 1);
        var difficulty_class = "inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]"
        var difficulty_data = document.getElementsByClassName(difficulty_class)[0].innerHTML;
        var meta_data = "---\nurl: " + window.location.href + "\ndifficulty: " + difficulty_data + " \n---\n";
        var data = document.getElementsByClassName("_1l1MA")[0].innerHTML;
        download(meta_data + data + "\n---\n\n", title, "text/markdown");
    }
});

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
