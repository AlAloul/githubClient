// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var search = require('search');

var win = Titanium.UI.createWindow({
	backgroundColor : '#fff',
	navBarHidden: true
});

//Custom Nav Bar
var navBar = Titanium.UI.createView({
	left : 0,
	top : 0,
	height : 44,
	width : Ti.Platform.displayCaps.platformWidth,
	backgroundImage : 'images/nav_bg.png'
});
win.add(navBar);

var navTitle = Ti.UI.createLabel({
	text : "Github Client",
	textAlign : 'center',
	top : 7,
	height : 28,
	width : 180,
	color : '#fff',
	font : {
		fontSize : 17,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
});
navBar.add(navTitle);

var searchLabel = Titanium.UI.createLabel({
	top : 100,
	color : '#000',
	text : 'Search...',
	font : {
		fontSize : 24,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	textAlign : 'center',
	width : 'auto'
});
win.add(searchLabel);


var searchReposBtn = Titanium.UI.createButton({
	color:'blue',
	title:'Repos',
	width:200,
	height:40,
	top:170
});
win.add(searchReposBtn); 

searchReposBtn.addEventListener('click', function (e) {
	alert("searchReposBtn Clicked");
	var window = search.search("Repo");
	window.open();
});

var searchUsersBtn = Titanium.UI.createButton({
	color:'blue',
	title:'Users',
	width:200,
	height:40,
	top:220
});
win.add(searchUsersBtn); 

searchUsersBtn.addEventListener('click', function (e) {
	alert("searchUsersBtn Clicked");
	var window = search.search("User");
	window.open();
});

win.open();

