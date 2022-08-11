document.body.onload = start;
var editorScreenOffsetX = 0;
var tileSize = 32;
var madeEditingMap = false;
var isPreviewing = false;
var loadedMap = null;
var levelViewingScreen = null;
var masterDiv = null;
var currentMapParent = null;
var cobyGraphicsCanvasDiv;
var curLevelIndex = 0;
var currentLevel = null;
var startedPreviewing = false;
var levelPreEnterScreen;
var startedPublishingLevel = false;
var stoppedPublishing = false;
var levelViewing = 1;
var graphicsCanvas;
var guiCanvas;
var mainLevels;
var inGameText;
var otherLevelsPage;
var myLevels;
var levelEditorCanvas;
var levelEditingCode;
var startedPlayingLevel = false;
var otherUserNames = [];
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var graphicsCode;
var processingInstance;
var gameShowing = false;
var isEmptying = false;
var levelGoingTo = "not";
var userNamesContainer;
var otherUserLevels = [];
var userLevelScreen;
var user;
var otherUserShowing = {};
var mapDataCode = "";
var userInfo;
var gameInfoDiv;
var prom;
var prompting = false;
var inGameMenu;
var dyingMenuShowing = false;
var mainCobject = null;
var API_STRING = "https://maamer.000webhostapp.com/api/index.php"
var profiles = [
    {"Name":"Pyis","path":"./textures/hat.jpg"},
    {"Name":"smi-Lee","path":"./textures/player.png"},
    {"Name":"law vah","path":"./textures/lava.jpg"},
];
var curProfile = 0;
function saveUserToServer(callback) {
    if (typeof user == "string") {
        user = JSON.parse(user);
    }
    localStorage.user = JSON.stringify(user);
    ajax({
        method: "POST",
        destination: API_STRING,
        params: "saveUser=true&user=" + JSON.stringify(user),
        callback: function(e) {
            console.log("just saved aparently",e);
		    localStorage.user = JSON.stringify(user);
            if (callback) {
                callback(e);
            }
        }
    });



}
var m = document.createElement("div");
m.style.width = screenWidth + "px";
m.style.height = screenHeight + "px";
m.style.background = "orange";
m.style.border = "5px solid black";
m.style.position = "absolute";
m.style.display = "none";
m.style.zIndex = "1000";
m.style.padding = "10px 10px 10px 10px";

function start() {
	
	masterDiv = document.createElement("div");
	masterDiv.style.position="absolute";
	masterDiv.style.left="0";
	masterDiv.style.top="0";
	masterDiv.style.width="100%";
	masterDiv.style.height="100%";
        masterDiv.style.textAlign="center";
	document.body.appendChild(masterDiv);
    masterDiv.appendChild(m);
	
	prom = document.createElement("div");
	prom.style.position="absolute";
	prom.style.fontSize="35px";
	prom.style.background="white";
	prom.style.textAlign="center";
	prom.style.padding="25px";
	prom.style.background = "orange";
	prom.style.border = "5px solid black";
	prom.style.position="absolute";
	prom.style.top="50%";
	prom.style.left="50%";
	prom.style.width="500px";
	prom.style.height="200px";
	prom.style.marginTop="-350px";
	prom.style.marginLeft="-250px";
	prom.style.zIndex="101";
	prom.style.textAlign="center";
	hide(prom);
	document.body.appendChild(prom);
	cobyGraphicsCanvasDiv = document.createElement("div");
	hide(cobyGraphicsCanvasDiv);
	masterDiv.appendChild(cobyGraphicsCanvasDiv);
	
	gameInfoDiv = document.createElement("div");
	gameInfoDiv.className="regTxt bordered";
	gameInfoDiv.style.position="absolute";
	gameInfoDiv.style.height="50px";
	gameInfoDiv.style.color="white";
	gameInfoDiv.style.padding="15px";
	gameInfoDiv.style.width="600px";
	gameInfoDiv.style.zIndex="5";
	gameInfoDiv.style.textAlign="center";
	cobyGraphicsCanvasDiv.appendChild(gameInfoDiv);
	
	inGameMenu = document.createElement("div");
	inGameMenu.className="btn";
	inGameMenu.style.background="green";
	inGameMenu.innerHTML="Menu";
	inGameMenu.style.zIndex="1023";
	inGameMenu.style.position="absolute";
	inGameMenu.style.left="15px";
	inGameMenu.style.top="15px";
	inGameMenu.onclick=function() {
		if(!prompting) {
			gotoMenu();
		}
	}
	cobyGraphicsCanvasDiv.appendChild(inGameMenu);
	
    graphicsCanvas = document.createElement("canvas");
    graphicsCanvas.width = screenWidth + "px";
    graphicsCanvas.style.display = "none";
    graphicsCanvas.height = screenHeight + "px";
	
    graphicsCanvas.style.position = "absolute";
	cobyGraphicsCanvasDiv.appendChild(graphicsCanvas);
    levelEditorCanvas = document.createElement("canvas");
    levelEditorCanvas.width = screenWidth + "px";
    levelEditorCanvas.height = screenHeight + "px";
    levelEditorCanvas.style.display = "none";
    levelEditorCanvas.style.position = "absolute";
    if(localStorage.user) {
    user = JSON.parse(localStorage.user);
    if (typeof user.Data == "string") {
        user.Data = JSON.parse(user.Data);
    }
    if(!user.Data.games) {
		user.Data = {games:{vex:{levels:[],publishedLevels:[]}}};
	}

    if (user.Data.games)
        for (var i = 0; i < user.Data.games.vex.levels.length; i++) {
            myEditingMaps.push(user.Data.games.vex.levels[i])
        }
    if (user.Data.games && user.Data.games.vex && user.Data.games.vex.lockedLevels) {
        lockedLevels = user.Data.games.vex.lockedLevels;
    }
        console.log(user.Data);
        if(user.Data) {
            curProfile = (user.Data.profilePicIndex || 0)%profiles.length;;
            updateProfilePic();
        }
	} else {
		user = {};
		user.Data = {games:{vex:{levels:[],publishedLevels:[]}}};
	}
    masterDiv.appendChild(graphicsCanvas);


    ajax({
        method: "GET",
        destination: "code.js",
        callback: function(e) {
            graphicsCode = eval(Processing.compile(e).sourceCode);
            processingInstance = new Processing(graphicsCanvas, graphicsCode);
            pagesSetup();
			ajax({
				method: "GET",
				destination: "levelEditor.js",
				callback: function(e) {
					levelEditingCode = eval(Processing.compile(e).sourceCode);
					processingInstance = new Processing(levelEditorCanvas, levelEditingCode);
					masterDiv.appendChild(levelEditorCanvas);
					ajax({
						method: "GET",
						destination: "mapData.js",
						callback: function(e) {
							eval(e);
							console.log(map);
						}
					});
				}
			});
        }
    });
    
	window.onresize = function() {
		masterDiv.style.height = window.innerHeight + "px";
	}
}

function cPrompt(contents, buttonTxt, buttonColor, buttonAction) {
	var p = document.createElement("div");
	p.className="regTxt";
	p.style.color="black";
	var btn = document.createElement('div');
	prompting = true;
	btn.innerHTML = buttonTxt;
	btn.className="btn";
	btn.style.background=buttonColor;
	btn.onclick = function() {
		buttonAction();
		hide(prom);
		prom.innerHTML = "";
		prompting = false;
	}
	p.innerHTML = contents;
	prom.appendChild(p);
	prom.appendChild(document.createElement("br"));
	prom.appendChild(btn);
	show(prom);
}

function coMessage(msg) {
    m.style.display = "block";
    m.innerHTML = msg
}

function stopMsg() {
    m.style.display = "none";
    m.innerHTML = "";
}



function getAllUserNames() {
    ajax({
        method: "POST",
        destination: API_STRING,
        params: "getUserNames=true",
        callback: function(e) {
            otherUserNames = JSON.parse(e);
			otherUserNames.sort();
            stopMsg();
            var userObjects = [];
            for (var i = 0; i < otherUserNames.length; i++) {
                var loadingObj;
                (function(ind) {
					
                    userObjects.push({
                        text: otherUserNames[ind],
                        color: "red",
                        x: 150,
                        y: 100 + 65 * ind,
						size:20,
                        action: function() {
                            show(userLevelScreen.pg);
                            updateUserLevelScreen(otherUserNames[ind]);
                            hide(otherLevelsPage.pg);
                        }

                    });

                })(i);

            }
            userNamesContainer.objs = userObjects;
            userNamesContainer.updateObjs();
        }
    });
}

function loadOtherUserLevels(cb) {
    ajax({
        method: "POST",
        destination: API_STRING,
        params: "getUserDataByName=true&username=" + otherUserShowing.name,
        callback: function(e) {
            parseUserData(e, cb);
        }
    });
}

function updateUserLevelScreen(n) {
    otherUserShowing.name = n;

    
	
	
	coMessage("Loading " + otherUserShowing.name + "'s levels...");
    loadOtherUserLevels(function() {
        var pgObjects = [{
            text: "Back",
            color: "green",
            x: 15,
            y: 15,
            action: function() {
                show(guiCanvas.pg);
                otherUserShowing = {};
                hide(userLevelScreen.pg);
            }
        },
        {
            text: otherUserShowing.name + "<div class='profilePic other' style='background-image:url(\"" + profiles[otherUserShowing.profilePicIndex].path+"\")'></div>",
            type:"text",
            size:50,
            x:200,
            y:100
        }];
        userLevelScreen.objs = pgObjects;
	    userLevelScreen.updateObjs();
		for(var i = 0; i < otherUserShowing.levels.length; i++) {
			(function(ind) {
                            if(otherUserShowing.publishedLevels[ind]) {
				pgObjects.push({
					text:ind + 1,
					color:"red",
					x:200 + ind * 50,
					y:200,
					action: function() {
						console.log("Level " + ind);
						playLevelWithParentAndId(otherUserShowing.levels,ind);
					}
				});
                            }
			})(i);
		}
		userLevelScreen.objs = pgObjects;
		userLevelScreen.updateObjs();
		stopMsg();
    });
}

function gotoMenu() {
  prompting = false;
  dyingMenuShowing = false;
  hide(cobyGraphicsCanvasDiv);
  isEmptying = true;
  show(guiCanvas.pg);
  hide(prom);
  prom.innerHTML="";
  stopMsg();
  
}

function playLevelWithParentAndId(parent,id) {
	currentMapParent = parent;
	curLevelIndex = id;
	hide(levelPreEnterScreen.pg);
	hide(userLevelScreen.pg);
	hide(mainLevels.pg);
	hide(guiCanvas.pg);
	hide(otherLevelsPage.pg);
	show(cobyGraphicsCanvasDiv);
	startedPlayingLevel = true;
	console.log(currentMapParent[curLevelIndex]);
}

function parseUserData(d, cb) {
    var data = JSON.parse(d);
    data = JSON.parse(data);
    otherUserShowing.profilePicIndex = data.profilePicIndex || 0;
    otherUserShowing.levels = data.games.vex.levels;
    otherUserShowing.publishedLevels = data.games.vex.publishedLevels;
    if (cb) {
        cb();
    }
}

function publishLevel(lev) {
	user.Data.games.vex.publishedLevels[lev] = true;
	saveUserToServer(function() {
             changePreviewScreen();
             stopMsg();
	console.log(user);
        });
}

function unpublishLevel(lev) {
	user.Data.games.vex.publishedLevels[lev] = false;
	saveUserToServer(function() {
             changePreviewScreen();
        stopMsg();
	console.log(user);
        });
        
}

function signout() {
	if(localStorage.user != undefined) {
		localStorage.removeItem("user");
	}
	location.reload();
}

function signin(txt) {
	cPrompt("<span class=msg>" + txt + "</span><br><span class=details>If you don't have an account yet, this will automatically make a new 1 4 u! </span><br><span class=form>Username: <input type=text name=username /> <br> Password: <input type=text name=password /></span>", "Sign in/Create account already!", "blue", function() {
		var username = document.querySelector("[name='username']").value;
		var password = document.querySelector("[name='password']").value;
		ajax({
			destination: API_STRING,
			method: "POST",
			params: "loginUser=true&username=" + username + "&password=" + password,
			callback: function(e) {
				console.log(e);
				if (e.indexOf("wrong") > -1) {
					console.log("you were wronged",e);
					ajax({
						destination: API_STRING,
						method: "POST",
						params:"createUser=true&username="+username+"&password="+password,
						callback: function(r) {
							if(r.indexOf("exists") <= -1) {
								var tempUser = JSON.parse(r);
								tempUser.Data = JSON.parse(tempUser.Data);
								localStorage.user = JSON.stringify(tempUser);
								location.reload();
								console.log("new but making", r);
							}
							console.log("used",r);
						}
					});
				} else {
					var tempUser = JSON.parse(e);
					if (typeof tempUser.Data == "string") {
						tempUser.Data = JSON.parse(tempUser.Data);
					}

                    localStorage.user = JSON.stringify(tempUser);
                    user = JSON.parse(localStorage.user);
                    console.log(e);
					location.reload();
				}
			}
		});

		console.log(username,password);
	});
}

function signinprompt() {
	signin("Get ready.. to sign in");
}

function updateProfilePic() {
    var p = document.getElementById("myProfilePic");
    if(p) {
        p.style.backgroundImage="url("+profiles[curProfile%profiles.length].path+")";
        if(mainCobject) {
            mainCobject.updateTexture(profiles[curProfile%profiles.length].path);
        }
        
        curProfile = curProfile%profiles.length;
        user.Data.profilePicIndex = curProfile;
        saveUserToServer(function(c) {
            console.log(c,"proof");
        });
    }
}
function pagesSetup() {
    //Main Menu
    userNamesContainer = new Page("blue", []);
    userNamesContainer.pg.style.position = "absolute";
    userNamesContainer.pg.style.left = "50%";
    userNamesContainer.pg.style.top = "50%";
    userNamesContainer.pg.style.marginTop = "-275px";
    userNamesContainer.pg.style.marginLeft = "-250px";
    userNamesContainer.pg.style.width = "500px";
    userNamesContainer.pg.style.height = "550px";
    userNamesContainer.pg.style.overflowX = "scroll";
    show(userNamesContainer.pg);
    userInfo = document.createElement("div");
    if(user.Username) {
		userInfo.innerHTML = '<span class="loggedInText">Logged in as: ' + user.Username + '</span><div onclick="curProfile++;updateProfilePic()" class="profilePic" id="myProfilePic"></div></br> <a href="#" onclick="signout()">Sign out</a>';
        
        
    } else {
		userInfo.innerHTML = 'You are not logged in.' + '</br> <a href="#" onclick="signinprompt()">Sign in?</a>';
	}
    userInfo.style.zIndex = "100";
    userInfo.style.position = "absolute";
    userInfo.style.left = "2%";
    userInfo.style.top =  "90%";
    userInfo.style.width= "250px";
	userInfo.style.padding="10px";
	userInfo.style.background="white";
	userInfo.style.border="3px solid black";
	userInfo.className="regTxt";
	userInfo.style.fontSize="15px";
    masterDiv.appendChild(userInfo);
    updateProfilePic();

    userLevelScreen = new Page("yellow", []);
    
    otherLevelsPage = new Page("yellow", [

        {
            text: "Menu",
            color: "green",
            x: 15,
            y: 15,
            action: function() {
                show(guiCanvas.pg);
                hide(mainLevels.pg);
                hide(userLevelScreen.pg);

            }
        }

    ]);
    otherLevelsPage.pg.appendChild(userNamesContainer.pg);
    guiCanvas = new Page("yellow", [{
        type: "text",
        align:"center",
        text: "Cobyk",
		color: "#8600b3",
		size:"160",
        x: 100,
        y: 0
    }, {
        text: "Main Levels",
        align:"center",
        size:40,
        padding:"20px",
        x: 275,
        y: 200,

        color: "blue",
        action: function() {
			if(!prompting) {
				show(mainLevels.pg);
			}
        }
    }, {
        text: "My Levels",
        align:"center", 
        size:40,
        padding:"20px",
        x: 275,
        y: 250,
        color: "blue",
        action: function() {
			if(!prompting) {
				if(user.Username) {
					show(myLevels.pg);
					changeMyLevelObjs();
				} else {
					signin("You've gotta be signed in to make your own levels!!");
				}
			}
        }
    }, {
        text: "Other Levels",
        align:"center",
        size:40,
        padding:"20px",
        x: 275,
        y: 300,
        color: "blue",
        action: function() {
			if(!prompting) {
				getAllUserNames();
				coMessage("Loading users...");
				hide(guiCanvas.pg);
				show(otherLevelsPage.pg);
			}
        }
    }, ]);

    //Main Level's menu
    var levelObjs = [{
        type: "text",
        text: "Main Levels",
        size: 50,
        x: 200,
        y: 50
    }, {
        text: "Menu",
        color: "green",
        x: 15,
        y: 15,
        action: function() {
            show(guiCanvas.pg);
            hide(mainLevels.pg);
        }
    }, ];

    for (var i = 0; i < 6; i++) {
        (function(index) {
            levelObjs.push({
                text: index + 1,
                x: 200 + index * 50,
                y: 200,
                color: "red",
                action: function() {
                    playLevelWithParentAndId(map,index);
                }

            });
        })(i);
    }

    mainLevels = new Page("yellow", levelObjs);


    myLevels = new Page("yellow", []);

    levelPreEnterScreen = new Page("yellow", [

    ]);
    changePreviewScreen();
    show(guiCanvas.pg);
}

function changePreviewScreen() {
    var result = [{
        text: "Menu",
        color: "green",
        x: 15,
        y: 15,
        action: function() {
            show(guiCanvas.pg);
            hide(levelPreEnterScreen.pg);
        }
    }, {
        type: "text",
        text: "Level " + levelViewing,
        size: 50,
        x: 200,
        y: 50
    }, {
        text: "Play Level",
        x: 275,
        y: 200,

        color: "blue",
        action: function() {
		    playLevelWithParentAndId(myEditingMaps,levelViewing - 1);
        }
    }, {
        text: "Edit Level",
        x: 275,
        y: 250,
        color: "blue",
        action: function() {
            show(myLevels.pg);
            loadedMap = levelViewing - 1;
            madeEditingMap = false;
            hide(guiCanvas.pg);
            hide(myLevels.pg);
            hide(levelPreEnterScreen.pg);
            show(levelEditorCanvas);
        }
    }];
	
	if(user.Data.games.vex.publishedLevels[levelViewing - 1]) {
		result.push({
			text: "Unpublish Level",
			x: 275,
			y: 300,
			color: "blue",
			action: function() {
				unpublishLevel(levelViewing-1);
				coMessage("Unpublishing...");
			}
		});
	} else {
		result.push({
			text: "Publish Level",
			x: 275,
			y: 300,
			color: "blue",
			action: function() {
				publishLevel(levelViewing-1);
				coMessage("Publishing...");
			}
		});
	}
	result.push({
        text: "Delete Level",
        x: 275,
        y: 350,
        color: "blue",
        action: function() {
			
            coMessage("Deleting level...");
			user.Data.games.vex.levels.splice(levelViewing - 1);
			saveUserToServer(function() {
					 hide(levelPreEnterScreen.pg);
					 changeMyLevelObjs();
					 show(myLevels.pg);
					 stopMsg();
					 console.log(user);
				});
        }
    });
    levelPreEnterScreen.objs = result;
    levelPreEnterScreen.updateObjs();
	
	
}


function showLoadingScreen() {

}

function changeMyLevelObjs() {
    var result = [{
        text: "Menu",
        color: "green",
        x: 15,
        y: 15,
        action: function() {
            show(guiCanvas.pg);
            hide(myLevels.pg);
        }
    }, {
        type: "text",
        text: "My Levels",
        size: 50,
        x: 200,
        y: 50
    }, {
        text: "Create New Level",
        x: 200,
        y: 350,
        color: "blue",
        action: function() {
            hide(guiCanvas.pg);
            hide(myLevels.pg);
            show(levelEditorCanvas);
        }
    }];
    for (var i = 0; i < user.Data.games.vex.levels.length; i++) {
        (function(index) {
            result.push({
                text: index + 1,
                x: 200 + index * 50,
                y: 200,
                color: "red",
                action: function() {
                    show(levelPreEnterScreen.pg);
                    hide(myLevels.pg);
                    levelViewing = index + 1;
                    changePreviewScreen();
                }
            });
        })(i);
    }

    

    myLevels.objs = result;
    myLevels.updateObjs();
}


function Page(back, objs) {
    this.objs = objs;
    this.pg = document.createElement("div");
    this.pg.style.width = "100%";
    this.pg.style.height = "100%";

    hide(this.pg);
    this.pg.style.background = back;
    this.pg.style.position = "absolute";
    this.updateObjs = function() {

        this.pg.innerHTML = "";
        for (var i = 0; i < this.objs.length; i++) {
            var btn = document.createElement("div");
            btn.innerHTML = this.objs[i].text;
            if(!this.objs[i].align) {
            btn.style.position = "absolute";
            btn.style.top = (this.objs[i].y) + "px";
            btn.style.left = this.objs[i].x + "px";
            } else {
               btn.style.textAlign = this.objs[i].align;
            }
            if(this.objs[i].padding) { 
               btn.style.padding = this.objs[i].padding;
            }
            if (this.objs[i].size) {
                btn.style.fontSize = this.objs[i].size + "px";
            }
			
            
            if (this.objs[i].type == "text") {
				btn.className = "txt";
				if (this.objs[i].color) {
					btn.style.color = this.objs[i].color;
				} else {
					btn.style.color = "#8600b3";
				}
            } else {
                btn.className = "btn";
				if (this.objs[i].color) {
					btn.style.background = this.objs[i].color;
				} 
                btn.onclick = this.objs[i].action;
            }
            this.pg.appendChild(btn);
        }
    }
    this.updateObjs();
    masterDiv.appendChild(this.pg);
}

function hide(obj) {
    obj.style.display = "none";
}

function show(obj) {
    obj.style.display = "block";
    obj.focus();
}

function guiText(parent, txt, x, y) {
    var btn = document.createElement("p");
    btn.innerHTML = txt;
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = (y - 190) + "px";
    btn.className = "bigText";
    parent.pg.appendChild(btn);
}

function guiBtn(parent, txt, x, y, color, action) {
    var btn = document.createElement("div");
    btn.innerHTML = txt;
    btn.className = "btn";
    if (color) {
        btn.style.background = color;
    }
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    btn.onclick = action;
    parent.pg.appendChild(btn);
}

function ajax(params) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            params.callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open(params.method, params.destination, true);
    if (params.method == "POST") {
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    if (params.method != "POST") {
        xmlhttp.send();
    } else {
        xmlhttp.send(params.params);
    }
}	