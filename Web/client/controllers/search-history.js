var searchHistory = {
    // Load search history
    load: function (){
    	searchHistory.clear(); 
        server.get(api('searchHistory'), searchHistory.addItems);
    },

    

    // Add new search history
    insert: function (){
    	insert: function (droptn, searchHistory){
        data = {
            id: id,
            keywords: keywords,
            member_id: member_id,
            // minute_id: 1, // TMP
        }
        server.post(api('searchHistory'), data, showMessage);
    },

    },
}
