(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionZKEditOnline",
        fn: function ZK_onActionZKEditOnline(file) {
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
