exports.userListing = function(responseTxt){
	
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
		text: "User Listing",
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
		var d = dateArr[2];
		var m = dateArr[1];
		var y = dateArr[0];
	    
	    var repalcement = m+"/"+d+"/"+y;   
	    return repalcement; 
	}

	var tIndex = 0;
    //alert("response txt "+responseTxt);
    
    //var resObj = JSON.parse(responseTxt);
	/*********************/
				var resObj ={
    "users": [
        {
            "language": null,
            "type": "user",
            "fullname": null,
            "location": null,
            "login": "karthikjr",
            "id": "user-",
            "created_at": "2009-11-28T12:34:56-08:00",
            "followers": 0,
            "name": null,
            "repos": 0,
            "created": "2009-11-28T12:34:56-08:00",
            "followers_count": 0,
            "public_repo_count": 0,
            "username": "karthikjr"
        },
        {
            "language": "VimL",
            "type": "user",
            "fullname": "karthik",
            "location": null,
            "login": "karthikk",
            "id": "user-",
            "created_at": "2010-01-16T00:28:56-08:00",
            "followers": 0,
            "name": "karthik",
            "repos": 7,
            "created": "2010-01-16T00:28:56-08:00",
            "followers_count": 0,
            "public_repo_count": 7,
            "username": "karthikk"
        },
        {
            "language": null,
            "type": "user",
            "fullname": "Karthick K R",
            "location": "Bangalore, India ",
            "login": "karthickkr",
            "id": "user-",
            "created_at": "2009-11-12T02:42:04-08:00",
            "followers": 0,
            "name": "Karthick K R",
            "repos": 1,
            "created": "2009-11-12T02:42:04-08:00",
            "followers_count": 0,
            "public_repo_count": 1,
            "username": "karthickkr"
        },
        {
            "language": "Ruby",
            "type": "user",
            "fullname": null,
            "location": null,
            "login": "karthikb",
            "id": "user-",
            "created_at": "2009-07-01T11:48:59-07:00",
            "followers": 1,
            "name": null,
            "repos": 3,
            "created": "2009-07-01T11:48:59-07:00",
            "followers_count": 1,
            "public_repo_count": 3,
            "username": "karthikb"
        },
        {
            "language": null,
            "type": "user",
            "fullname": "Karthik R",
            "location": null,
            "login": "karthikr",
            "id": "user-",
            "created_at": "2009-08-03T22:07:02-07:00",
            "followers": 0,
            "name": "Karthik R",
            "repos": 1,
            "created": "2009-08-03T22:07:02-07:00",
            "followers_count": 0,
            "public_repo_count": 1,
            "username": "karthikr"
        },
        {
            "language": "JavaScript",
            "type": "user",
            "fullname": null,
            "location": null,
            "login": "karthikgm",
            "id": "user-",
            "created_at": "2009-06-16T01:58:45-07:00",
            "followers": 0,
            "name": null,
            "repos": 1,
            "created": "2009-06-16T01:58:45-07:00",
            "followers_count": 0,
            "public_repo_count": 1,
            "username": "karthikgm"
        },
        {
            "language": "C#",
            "type": "user",
            "fullname": null,
            "location": null,
            "login": "karthikbv",
            "id": "user-",
            "created_at": "2010-02-02T04:17:40-08:00",
            "followers": 0,
            "name": null,
            "repos": 2,
            "created": "2010-02-02T04:17:40-08:00",
            "followers_count": 0,
            "public_repo_count": 2,
            "username": "karthikbv"
        }
    ]
};
	
	/*********************/


  			var container = Titanium.UI.createScrollView({
				backgroundColor:'#fff',
                top: 54,
                right: 0,
                left: 0
            });
            win.add(container);


    for(var i=0, rLen = resObj.users.length; i<rLen; i++){
  			var rowContainer = Titanium.UI.createView({
				backgroundColor:'#ccc',
                height: 100,
                top: tIndex,
                right: 10,
                left: 10
            });
            container.add(rowContainer);
            
            var userTitle = resObj.users[i].username;
            if(resObj.users[i].fullname){
            	userTitle = userTitle +" / "+resObj.users[i].fullname;
            }
            var titleLabel = Ti.UI.createLabel({
            	text:userTitle,
            	top:7,
            	height: 20,
            	color:'#4183C4',
            	left:10,
            	font:{fontSize:16, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(titleLabel);
 
 			if(resObj.users[i].location){
	             var loactedAt = Ti.UI.createLabel({
	             	//text:"located in chennai",
	            	text:"located in "+resObj.users[i].location,
	            	top:30,
	            	left:10,
	            	color:'#444',
	            	font:{fontSize:14, fontFamily:'Helvetica Neue'},
	            	textAlign:"left"
	            });
	            rowContainer.add(loactedAt); 		
 			}
                       
             var followersBtn = Titanium.UI.createButton({
             	color:'#000',
            	title: resObj.users[i].followers_count + " followers",
            	top:55,
            	height: 40,
            	width: 165,
            	left:10
            });
            rowContainer.add(followersBtn);
 
             var repoBtn = Titanium.UI.createButton({
             	color:'#000',
            	title: resObj.users[i].public_repo_count + " repos",
            	top:55,
            	height: 40,
            	width: 110,
            	left:190
            });
            rowContainer.add(repoBtn);
            
            
           tIndex = tIndex+110;
    }
    return win;
}
