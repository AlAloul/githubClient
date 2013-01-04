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
				var resObj = {
				"repositories":[{
					"type" : "repo",
					"owner" : "rails",
					"created" : "2008-04-10T19:19:47-07:00",
					"followers" : 16976,
					"created_at" : "2008-04-10T19:19:47-07:00",
					"pushed_at" : "2013-01-03T06:24:58-08:00",
					"pushed" : "2013-01-03T06:24:58-08:00",
					"fork" : false,
					"forks" : 4564,
					"watchers" : 16976,
					"size" : 89084,
					"username" : "rails",
					"description" : "Ruby on Rails",
					"name" : "rails",
					"private" : false,
					"language" : "Ruby"
				}, {
					"type" : "repo",
					"owner" : "sferik",
					"created" : "2010-08-01T10:01:00-07:00",
					"followers" : 3517,
					"created_at" : "2010-08-01T10:01:00-07:00",
					"pushed_at" : "2012-12-28T12:00:37-08:00",
					"pushed" : "2012-12-28T12:00:37-08:00",
					"fork" : false,
					"forks" : 817,
					"watchers" : 3517,
					"size" : 800,
					"username" : "sferik",
					"description" : "RailsAdmin is a Rails 3 engine that provides an easy-to-use interface for managing your data",
					"name" : "rails_admin",
					"private" : false,
					"language" : "Ruby"
				}, {
					"type" : "repo",
					"owner" : "seyhunak",
					"created" : "2011-08-20T20:31:16-07:00",
					"followers" : 2566,
					"created_at" : "2011-08-20T20:31:16-07:00",
					"pushed_at" : "2012-12-29T16:05:43-08:00",
					"pushed" : "2012-12-29T16:05:43-08:00",
					"fork" : false,
					"forks" : 492,
					"watchers" : 2566,
					"size" : 300,
					"username" : "seyhunak",
					"description" : "Twitter Bootstrap for Rails 3.1 Asset Pipeline (Updated to Bootstrap 2)",
					"name" : "twitter-bootstrap-rails",
					"private" : false,
					"language" : "Ruby"
				}, {
					"type" : "repo",
					"owner" : "tpope",
					"created" : "2008-10-08T20:16:22-07:00",
					"followers" : 1769,
					"created_at" : "2008-10-08T20:16:22-07:00",
					"pushed_at" : "2012-12-07T21:46:53-08:00",
					"pushed" : "2012-12-07T21:46:53-08:00",
					"fork" : false,
					"forks" : 159,
					"watchers" : 1769,
					"size" : 252,
					"username" : "tpope",
					"description" : "rails.vim: Ruby on Rails power tools",
					"name" : "vim-rails",
					"private" : false,
					"language" : "VimL"
				}, {
					"type" : "repo",
					"owner" : "svenfuchs",
					"created" : "2008-07-31T06:07:53-07:00",
					"followers" : 1586,
					"created_at" : "2008-07-31T06:07:53-07:00",
					"pushed_at" : "2013-01-01T08:26:10-08:00",
					"pushed" : "2013-01-01T08:26:10-08:00",
					"fork" : false,
					"forks" : 605,
					"watchers" : 1586,
					"size" : 328,
					"username" : "svenfuchs",
					"description" : "Repository for collecting Locale data for Ruby on Rails I18n as well as other interesting, Rails related I18n stuff",
					"name" : "rails-i18n",
					"private" : false,
					"language" : "Ruby"
				}, {
					"type" : "repo",
					"owner" : "rspec",
					"created" : "2009-12-23T08:40:53-08:00",
					"followers" : 1223,
					"created_at" : "2009-12-23T08:40:53-08:00",
					"pushed_at" : "2012-12-30T20:30:49-08:00",
					"pushed" : "2012-12-30T20:30:49-08:00",
					"fork" : false,
					"forks" : 202,
					"watchers" : 1223,
					"size" : 400,
					"username" : "rspec",
					"description" : "Rspec-2 for Rails-3",
					"name" : "rspec-rails",
					"private" : false,
					"language" : "Ruby"
				}, {
					"type" : "repo",
					"owner" : "codebrew",
					"created" : "2011-05-11T16:18:08-07:00",
					"followers" : 1278,
					"created_at" : "2011-05-11T16:18:08-07:00",
					"pushed_at" : "2012-12-17T08:03:23-08:00",
					"pushed" : "2012-12-17T08:03:23-08:00",
					"fork" : false,
					"forks" : 169,
					"watchers" : 1278,
					"size" : 180,
					"username" : "codebrew",
					"description" : "Easily use backbone.js with rails 3.1",
					"name" : "backbone-rails",
					"private" : false,
					"language" : "Ruby"
				}, {
					"type" : "repo",
					"owner" : "cucumber",
					"created" : "2009-11-08T17:05:11-08:00",
					"followers" : 612,
					"created_at" : "2009-11-08T17:05:11-08:00",
					"pushed_at" : "2012-09-07T09:47:36-07:00",
					"pushed" : "2012-09-07T09:47:36-07:00",
					"fork" : false,
					"forks" : 174,
					"watchers" : 612,
					"size" : 148,
					"username" : "cucumber",
					"description" : "Rails Generators for Cucumber with special support for Capybara and DatabaseCleaner",
					"name" : "cucumber-rails",
					"private" : false,
					"language" : "Ruby"
				}]};
	
	/*********************/


  			var container = Titanium.UI.createScrollView({
				backgroundColor:'#fff',
                top: 54,
                right: 0,
                left: 0
            });
            win.add(container);


    for(var i=0, rLen = resObj.repositories.length; i<rLen; i++){
  			var rowContainer = Titanium.UI.createView({
				backgroundColor:'#ccc',
                height: 140,
                top: tIndex,
                right: 10,
                left: 10
            });
            container.add(rowContainer);
 
            var titleLabel = Ti.UI.createLabel({
            	text:resObj.repositories[i].username+"/"+resObj.repositories[i].name,
            	top:7,
            	height: 20,
            	color:'#4183C4',
            	left:10,
            	font:{fontSize:16, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(titleLabel);
 
             var updatedAt = Ti.UI.createLabel({
            	text:"last activity on "+formatDate(resObj.repositories[i].pushed_at),
            	top:30,
            	left:10,
            	color:'#444',
            	font:{fontSize:11, fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(updatedAt); 
                       
             var watcherIcon = Ti.UI.createImageView({
            	backgroundImage:'images/watch_icon.png',
            	top:45,
            	height: 30,
            	width: 30,
            	left:10
            });
            rowContainer.add(watcherIcon);
            
            var watcherValue = Ti.UI.createLabel({
            	text:resObj.repositories[i].watchers,
            	top:50,
            	height: 20,
            	color:'#000',
            	left:50,
            	font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(watcherValue);  


             //followers


             var followersIcon = Ti.UI.createImageView({
            	backgroundImage:'images/user_icon.png',
            	top:45,
            	height: 30,
            	width: 30,
            	left:105
            });
            rowContainer.add(followersIcon);
            
            var followersValue = Ti.UI.createLabel({
            	text:resObj.repositories[i].followers,
            	top:50,
            	height: 20,
            	color:'#000',
            	left:135,
            	font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(followersValue);  


             //forks


             var forksIcon = Ti.UI.createImageView({
            	backgroundImage:'images/fork_icon.png',
            	top:45,
            	height: 30,
            	width: 30,
            	left:175
            });
            rowContainer.add(forksIcon);
            
            var forksValue = Ti.UI.createLabel({
            	text:resObj.repositories[i].forks,
            	top:50,
            	height: 20,
            	color:'#000',
            	left:205,
            	font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(forksValue);  

            var repoSize = Ti.UI.createLabel({
            	text:Math.round((resObj.repositories[i].size/1024)*100)/100+"mb",
            	//text:resObj.repositories[i].size/1024 +"mb",
            	top:50,
            	height: 20,
            	color:'#000',
            	left:270,
            	font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(repoSize); 
                        
            var descText = Ti.UI.createLabel({
            	text:resObj.repositories[i].description,
            	top:80,
            	left:10,
            	color:'#444',
            	font:{fontSize:14, fontFamily:'Helvetica Neue'},
            	textAlign:"left"
            });
            rowContainer.add(descText); 
            
           tIndex = tIndex+150;
    }
    return win;
}
