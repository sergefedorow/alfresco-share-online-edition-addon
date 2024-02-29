(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionOpenLocally",
        fn: function ZK_onActionOpenLocally(file) {
                var protocol = "open-locally";
                if(window.location.protocol.indexOf("https") != -1){
                  protocol = "open-locally";
        	}
            filePath = file.webdavUrl.replace('/webdav', '');
            webdavPath = protocol+"://"+ window.location.host + "/alfresco?file=A%3A"+ filePath;
        	window.location = webdavPath;
        }
    });
})();
