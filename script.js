// script.js

// Function to load and parse XML data
function loadXML() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            parseXML(this.responseXML);
        }
    };
    xhr.open("GET", "harristeksolutions.WordPress.2023-11-19.xml", true);
    xhr.send();
}

// Function to parse XML and display content
function parseXML(xml) {
    var xmlContent = document.getElementById("xmlContent");
    var items = xml.getElementsByTagName("item");
    
    for (var i = 0; i < items.length; i++) {
        var title = items[i].getElementsByTagName("title")[0].textContent;
        var description = items[i].getElementsByTagName("description")[0].textContent;

        var itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<h2>" + title + "</h2><p>" + description + "</p>";
        xmlContent.appendChild(itemDiv);
    }
}

// Load XML when the page is loaded
window.onload = function () {
    loadXML();
};
