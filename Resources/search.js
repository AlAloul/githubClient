exports.search = function(sType){
    var win = Ti.UI.createWindow({backgroundColor:'#000'});
    
	//Custom Nav Bar
	var navBar = Titanium.UI.createView({
	    left : 0,
	    top: 0,
	    height : 44,
	    width : Ti.Platform.displayCaps.platformWidth,
	    backgroundImage:'images/nav_bg.png'
	});
	win.add(navBar);

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
		color:'blue',
		title:'Search',
		width:200,
		height:40,
		top:180
	});
	win.add(searchBtn); 
	
	searchBtn.addEventListener('click', function (e) {
		if(inputField.value){
			alert(inputField.value);
		}else{
			alert("Please enter valid "+sType+" name");
		}
	});
   
    return win;
}
