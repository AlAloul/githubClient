exports.search = function(sType){
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
		text: sType+" Search",
		textAlign:'center',
		top:7,
		height:28,
		color:'#fff',
		font:{fontSize:17,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	});
	navBar.add(navTitle);

	var inputField = Titanium.UI.createTextField({
		top:110,
		hintText: "Enter "+sType+" Name",
		color : '#000',
		font: {
			fontSize: 14,
			fontFamily: 'Helvetica Neue'
		},
		height : 40,
		width : 250,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	win.add(inputField);

	var searchBtn = Titanium.UI.createButton({
		color:'#000',
		title:'Search',
		width:200,
		height:40,
		top:180
	});
	win.add(searchBtn); 
	
	var doSearch = function(arg) {
		if(Titanium.Network.online) {
				// Create our HTTP Client and name it "loader"
				var loader = Titanium.Network.createHTTPClient();
				// Sets the HTTP request method, and the URL to get data from
				loader.open("GET", arg.requestUrl);
			 
				// Runs the function when the data is ready for us to process
				loader.onload = function() 
				{  
					searchBtn.title  = "Search";
					searchBtn.enabled = true;
				    var response = this.responseText;
				    require('repoListing').repoListing(response).open();
				};
				
			    loader.onerror = function(e) {
					 searchBtn.title  = "Search";
					 searchBtn.enabled = true;
			         alert('Unable to connect to server');
			    };
			     
			    loader.timeout = 5000;  /* in milliseconds */
				
				// Send the HTTP request
				loader.send();
		}else{
			alert('Please check your Internet Connection');    
		}
	};

	var searchUsers = function(arg) {
	  
	};
	
	searchBtn.addEventListener('click', function (e) {
		inputField.blur();
		if(inputField.value){
			alert(inputField.value);
			searchBtn.title  = "Searching...";
			searchBtn.enabled = false;
			if(sType == "Repo"){
				var rUrl = "https://api.github.com/legacy/repos/search/"+inputField.value;
				//doSearch({requestUrl:rUrl});
				var response = null;
				require('repoListing').repoListing(response).open();
			}else{
				var rUrl = "https://api.github.com/legacy/user/search/"+inputField.value;
				//doSearch({requestUrl:rUrl});
				var response = null;
				require('userListing').userListing(response).open();
			}
		}else{
			alert("Please enter valid "+sType+" name");
		}
	});
   
    return win;
}
