exports.repoListing = function(responseTxt){
    var win = Ti.UI.createWindow({backgroundColor:'#fff', navBarHidden: true, modal:true});
    
	//Custom Nav Bar
	var navBar = Titanium.UI.createView({
	    left : 0,
	    top: 0,
	    height : 44,
	    width : Ti.Platform.displayCaps.platformWidth,
	    backgroundImage:'images/nav_bg.png'
	});
	win.add(navBar);

	var backBtn = Titanium.UI.createButton({
		backgroundImage: 'images/back_btn.png',
		width: 51,
		height: 30,
		left: 10
	});
	navBar.add(backBtn);

	backBtn.addEventListener('click', function (e) {
		win.close();
	});
	
	var navTitle = Ti.UI.createLabel({
		text: "Repo Listing",
		textAlign:'center',
		top:7,
		height:28,
		color:'#fff',
		font:{fontSize:17,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	});
	navBar.add(navTitle);

	var formatDate = function (timeString){
		var timeString = timeString.toString();
		var splitObj = timeString.split("T");
		var dateArr = splitObj[0].split("-");
		var d = splitObj[2];
		var m = splitObj[1];
		var y = splitObj[0];
	    
	    var repalcement = m+"/"+d+"/"+y;   
	    return repalcement; 
	}

	var tIndex = 44;
    alert("response txt "+responseTxt);
    
    var resObj = JSON.parse(responseTxt);
    
    for(var i=0, rLen = resObj.repositories.length; i<rLen; i++){
  			var rowContainer = Titanium.UI.createView({
				backgroundColor:'#ccc',
                height: 150,
                top: 15+tIndex,
                right: 10,
                left: 10
            });
            win.add(rowContainer);
 
            var titleLabel = Ti.UI.createLabel({
            	text:resObj.repositories[i].username+"/"+resObj.repositories[i].name,
            	top:7,
            	height: 20,
            	color:'#4183C4',
            	left:0,
            	font:{fontSize:16, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(titleLabel);
            
             var watcherIcon = Ti.UI.createImageView({
            	backgroundImage:'images/watch_icon.png',
            	top:30,
            	height: 30,
            	width: 30,
            	left:0
            });
            rowContainer.add(watcherIcon);
            
            var watcherValue = Ti.UI.createLabel({
            	text:resObj.repositories[i].watchers,
            	top:35,
            	height: 20,
            	color:'#000',
            	left:40,
            	font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(watcherValue);  


             //followers


             var followersIcon = Ti.UI.createImageView({
            	backgroundImage:'images/user_icon.png',
            	top:30,
            	height: 30,
            	width: 30,
            	left:95
            });
            rowContainer.add(followersIcon);
            
            var followersValue = Ti.UI.createLabel({
            	text:resObj.repositories[i].followers,
            	top:35,
            	height: 20,
            	color:'#000',
            	left:125,
            	font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(followersValue);  


             //forks


             var forksIcon = Ti.UI.createImageView({
            	backgroundImage:'images/fork_icon.png',
            	top:30,
            	height: 30,
            	width: 30,
            	left:165
            });
            rowContainer.add(forksIcon);
            
            var forksValue = Ti.UI.createLabel({
            	text:resObj.repositories[i].forks,
            	top:35,
            	height: 20,
            	color:'#000',
            	left:195,
            	font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(forksValue);  

            var repoSize = Ti.UI.createLabel({
            	text:resObj.repositories[i].size/1024 +"mb",
            	top:35,
            	height: 20,
            	color:'#000',
            	left:260,
            	font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(repoSize); 
                        
            var descText = Ti.UI.createLabel({
            	text:resObj.repositories[i].description,
            	top:65,
            	left:0,
            	color:'#444',
            	font:{fontSize:14, fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(descText); 
            
           tIndex += 140;
    }
    return win;
}
