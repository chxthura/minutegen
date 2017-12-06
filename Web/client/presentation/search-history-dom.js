// Add search-history to the search-historys list
var searchHistoryDOM = {
    // Get DOM Element
    getDOM: function () { return document.getElementById('search-history'); },

    // Clear the DOM content
    clear: function (){ searchHistoryDOM.getDOM().innerHTML = ""},

    // Add new search-history item
    addItems: function (data){
        var section = searchHistoryDOM.getDOM();
        // Add items
        for (var key in data){
            if (data.hasOwnProperty(key)){
                var dataItem = data[key];
                section.appendChild(searchHistoryDOM.parseItem(dataItem));
            }
        }
        // If no matters
        var section = searchHistoryDOM.getDOM();
        if (!section.hasChildNodes()){
            section.innerHTML = "<center>No history</center>";
        }

    },

    // Json item to search-history DOM
    parseItem: function (dataItem){
        var div = domTools.createDiv('dropdown-content');
        var a = domTools.createA(dataItem['id','keyword']); 

        div.appendChild(a);

        return div;
    },
}
