ArrayList < GameObject > gameObjects = new ArrayList();

int scaleFactor = 1;
int zoomFactor = 1;
int GRAVITY = 1;

int transAmountX = 0;
int transAmountY = 0;
int totalCoinsInLevel = 0;
int coinsCaptured = 0;
int gIndex = 0;
int playerX = 0;
int playerY = 0;
int oldPlayerX = 0;
int oldPlayerY = 0;
int levelSelectIndex = 0;
int levelIndex = 0;
int deathCount = 0;
int time = 0;
int flashCount = 0;
int editorIndex = 0;


int usersNameOffsetY = 0;
int MAX_LEVELS = 10;



var currentUserShowing = {username:null,data:null,loaded:false};
booelan previewedLevel = false;
int[] editingMap;
boolean iteratedOnce = false;
Boolean menuShowing = false;
Boolean levelSelectorShowing = false;

Boolean completedLevelMenuShowing = false;

boolean levelEditorShowing = false;
Boolean makingLevel=false;

boolean myLevelsPageShowing = false;
boolean otherUsersPageShowing = false;
boolean lightShowing = false;
boolean rightKeyDown = false;
boolean leftKeyDown = false;
boolean upKeyDown = false;
boolean mouseDown = false;


PFont arialBold;
PImage dollarSign;
PImage triangleTexture;
PShader blur;

Button testButton;
Button menuButton;
Button nextLevelButton;
Button restartLevelButton;
Button upButton;
Button rightButton;
Button leftButton;
Button[] levelEditorButtons = {};
Button backToEdit;
var componentKey;
GameObject mouseObj;
ScreenCollider screenCollider;

var allUserNames;
int[] lockedLevels = {};
var mapKey = {
  "p":Player,
  "*":Brick,
  "s":Spike,
  "f":Finisher,
  "c":Coin,
  "u":Up,
  "d":Down,
  "l":leftMovingSpike,
  "^":UpOnly,
  ">":RightOnly,
  "<":LeftOnly,
  "1":ArrowKeysToJump,
  "2":AvoidSpikes,
  "3":ElevatorText,
  "4":FallingText,
  "5":CollectCoins,
  "6":FinisherText1,
  "7":FinisherText2,
  "8":DirectionalText,
  "9":DirectionalText2
};


void loadUserData() {
   ajax({
      method:"POST", 
      destination:"http://coby.16mb.com/api/index.php",
      params:"getUserDataByName=true&username="+currentUserShowing.username,
      callback: function(e) {
         //console.log(currentUserShowing.data = JSON.parse(e));
         currentUserShowing.data = JSON.parse(e);
         currentUserShowing.data = JSON.parse(currentUserShowing.data);
         for(int i=0;i<currentUserShowing.data.games.vex.levels.length;i++) {
            if(currentUserShowing.data.games.vex.publishedLevels) {
                if(!currentUserShowing.data.games.vex.publishedLevels[i]) {
                   currentUserShowing.data.games.vex.levels.splice(i,1);
                }
            }
         }
         currentUserShowing.loaded = true;
         console.log(currentUserShowing);
      }
   });
}
void getAllUserNames() {
ajax({
     method:"POST",
     destination: "http://coby.16mb.com/api/index.php",
     params:"getUserNames=true",
     callback: function(e) {
        allUserNames = JSON.parse(e);
        console.log(allUserNames.sort());
     }
  });
}
void empt() {

}
void setup() {
    
    textMode(SCREEN);
    size(screenWidth, screenHeight,P3D);
	Game.start();
    mouseObj = new GameObject(0, 0, 1, 1);
    arialBold = createFont("Arial Bold",44);
    testButton = new Button("Hello ",10, 20, 30, al);
    menuButton = new Button("Menu",275,175,40,empt);
  
    menuButtonOnBar = new Button("Menu",275,175,20,empt);
    nextLevelButton = new Button("Next Level",75,175,40,gotoNextLevel);
    restartLevelButton = new Button("Reset Level",50,175,40,restartLevel);
  
    upButton=new Button("^",300,0,20);
  
    
  screenCollider = new ScreenCollider(-zoomFactor,-zoomFactor,screenWidth * 2, screenHeight * 2);
  
  for(var i = 0; i < map.length;i++) {
    lockedLevels.push(true);
  }
  
  lockedLevels[0] = false;
  currentMapParent = map;
  
  document.addEventListener("mouseup", function() {
    mousePressed = false;
  });
  
  getAllUserNames();
}

void draw() {
    mouseObj.x = mouseX;
    mouseObj.y = mouseY;
    if(COBY.Keyboard.isKeyDown(82)) {
			dyingMenuShowing = false;
			restartLevel();
			prom.innerHTML = "";
			hide(prom);
			prompting = false;
		}
    if (!menuShowing) {
	
      if(!levelEditorShowing) {
      hint(ENABLE_DEPTH_TEST);
      pushMatrix();
	  
	  if(!prompting)
		updateGameObjects();
      popMatrix();
     hint(DISABLE_DEPTH_TEST);
      

      if (completedLevelMenuShowing) {
            showCompletedMenu();
            completedLevelMenuShowing = false;
        }
      
        if (dyingMenuShowing) {
            showDyingMenu();
        }
      
        drawStatusBar();  
      } else {
        
        
      }
    } else {
      hint(DISABLE_DEPTH_TEST);
        if (!levelSelectorShowing) {
            if(myLevelsPageShowing) {
              
            } else
            if(otherUsersPageShowing) {
              
            } 
              
        } else   {
            
        }
      
    }
  
}



void destroyLevel() {
    gameObjects.clear();
}

void stopAndRun() {
    mainCobject = null;
    destroyLevel();
    totalCoinsInLevel = 0;
    coinsCaptured = 0;
    Game.myWorld.empty();
}


void makeLevel(String[] mapData) {
    stopAndRun();
    makingLevel=true;
	
    for (int r = 0; r < mapData.length; r++) {
        for (int c = 0; c < mapData[r].length; c++) {
            if(mapKey[mapData[r][c]]) {
              gameObjects.add(new (mapKey[mapData[r][c]])(c * tileSize, r * tileSize, 0));
              if(mapData[r][c] == "c") {
                totalCoinsInLevel++;
              } 
            }
           
        }
    }
  
  for(int i = 0; i < gameObjects.size();i++) {
    gameObjects.get(i).run();
  }
  
  makingLevel=false;
}

void updateGameObjects() {
  if(startedPlayingLevel) {
	destroyLevel();
	makeLevel(currentMapParent[curLevelIndex]);
	startedPlayingLevel = false;
  }
  
  if(isPreviewing && !startedPreviewing) {
	destroyLevel();
	makeLevel(currentLevel);
	startedPreviewing = true;
  }
  
  //background(145, 250, 255);
  screenCollider.update();

  translate(transAmountX, transAmountY, zoomFactor);
  
  strokeWeight = 1;
  
  if(!makingLevel)
  for (int i = 0; i < gameObjects.size(); i++) {
    
    if (gameObjects.get(i).levelNum == levelIndex) {
        
          gameObjects.get(i).run();
        
      
    }
  }
}

void showDyingMenu() {
   
    fill(255);
    //rect(screenWidth / 2 - 200,screenHeight / 2 - 100,400,200);
    fill(255);
    textSize(44);
    textFont(arialBold);
    strokeText("Game Over", screenWidth / 2 - textWidth("Game Over") / 2, 75,0,255);
    textSize(30);
    strokeText("Press R to restart", screenWidth / 2 - textWidth("Press R to restart") / 2, 175,0,255);
  
    if(keyPressed) {
      if(key == 'R' || key == 'r') {
        restartLevel();
      }
    }
    //menuButton.run();
    //restartLevelButton.run();
    
   
}

void showCompletedMenu() {
	if(completedLevelMenuShowing) {
		cPrompt("You Beat This Level, Congrats!!!","Next Level?","green",function(){gotoNextLevel();});
	}
    fill(255);
    //rect(screenWidth / 2 - 200,screenHeight / 2 - 100,400,200);
  
    fill(0);
    
    textSize(44);
    textFont(arialBold);
    strokeText("You won!", screenWidth / 2 - textWidth("You won!") / 2, 75,0,255);
    //menuButton.run();
    nextLevelButton.x = screenWidth / 2 - textWidth("Next Level") / 2;
    nextLevelButton.run();
    
}


void die() {
    
      if(!dyingMenuShowing) {
        deathCount++;
		
		cPrompt("Oooh, brutal. Game Over.",'Restart? (click or press "R")',"red",function() {
			dyingMenuShowing = false;
			restartLevel();
		});
	  }
      dyingMenuShowing = true;
    
    
}

void restartLevel() {
    if(isPreviewing) {
       destroyLevel(); 
       makeLevel(currentMapParent[curLevelIndex]);
       dyingMenuShowing = false;
       completedMenuShowing = false;
    } else {
    completedMenuShowing = false;
    destroyLevel();
    makeLevel(currentMapParent[curLevelIndex]);
    dyingMenuShowing = false;
    }
   
}

void gotoNextLevel() {
  if(isPreviewing) {
    destroyLevel();
    makeLevel(currentLevel);
    dyingMenuShowing = false;
    completedLevelMenuShowing = false;
  } else {
    
    dyingMenuShowing = false;
    completedLevelMenuShowing = false;
    destroyLevel();
    if(curLevelIndex < currentMapParent.length-1) {
      curLevelIndex++;
      makeLevel(currentMapParent[curLevelIndex]);
    }
    else {
      curLevelIndex = 0;
      makeLevel(currentMapParent[curLevelIndex]);
    }
}
    
}



void finishLevel() {
    completedLevelMenuShowing = true;
}

void drawStatusBar() {/*
  fill(0);
 // rect(0,0,screenWidth,20);
  
  fill(0);
  
  fill(255);
  
  textFont(arialBold);
  textSize(25);
  strokeText("Coins: ", 10, 0,0,255);
  strokeText(coinsCaptured + " / "+totalCoinsInLevel, 100, 0,0,255);
  //strokeText(totalCoinsInLevel, 130, 0,0,255);
  
  strokeText("Attempts: ", 250, 0,0,255);
  strokeText(deathCount, textWidth("Attempts: ") + 260, 0,0,255);
  
  
  menuButtonOnBar.x = 450;
  menuButtonOnBar.y = 0;
  if(!isPreviewing) {
  menuButtonOnBar.run();
  } else {
    
  }*/
  gameInfoDiv.innerHTML = "Coins: " + coinsCaptured + " / " + totalCoinsInLevel + ". Attempts: "+deathCount;
}


 boolean overRect(int x, int y, int width, int height) 

  {

    if (mouseX >= x && mouseX <= x+width && 

      mouseY >= y && mouseY <= y+height) {

      return true;

    } 

    else {

      return false;

    }

  }



GameObject pixelFree(int x, int y, GameObject g) {
    GameObject colRect = new GameObject(x, y, 1, 1);
    if (checkCollision(colRect, g)) {
        if (g.type == "brick")
            return false;
    }

    return true;
}

boolean checkCollision(GameObject r1, GameObject r2) {
    if (!(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y)) {

        return true;
    }
    return false;
}

void al() {
  alert("HELLO");
}


class Button {
    int x;
    int y;
    int width;
    int height;
    int r;
    int g;
    int b;
  int textColor = 255;
  int borderColor = 0;
    int fontSize = 0;
    void action;
    String txt;
  PFont fnt;
    Button(String txt, int x, int y, int height, void action) {
        this.txt = txt;
        this.x = x;
        this.y = y;
        this.height = height;
        fontSize = height;
        fnt = createFont("Arial Bold", fontSize);
        textFont(fnt);
        this.width = textWidth(txt);
        this.action = action;

    }
    void update() {
      if(overRect(x,y,width,height)) {
        borderColor = 255;
        textColor = 0;
        if(mousePressed) {
          if(!mouseDown) {
            action();
            mouseDown = true;
          }
        }
      } else {
        borderColor = 0;
        textColor = 255;
      }
      
    }

    void display() {
        fill(r, g, b);
        //rect(x, y, width, height);
        
        textFont(fnt);
        strokeText(txt, x, y,borderColor, textColor);
    }

    void run() {
        update();
        display();
    }
}

static class Game {
	static var myWorld = new COBY.World({
		width:window.innerWidth,
		height:window.innerHeight,
		textures: [
		  {name:"player",path:"textures/hat.jpg"},
		  {name:"brick",path:"textures/brick.png"},
		  {name:"elevator",path:"textures/elevator.png"},
		  {name:"coin",path:"textures/gold.jpg"},
		  {name:"rightArrow",path:"textures/rightArrow.png"},
		  {name:"leftArrow",path:"textures/leftArrow.png"},
		  {name:"upArrow",path:"textures/upArrow.png"},
		  {name:"downArrow",path:"textures/downArrow.png"},
		  {name:"fire",path:"textures/fire.jpg"},
		  {name:"lava",path:"textures/lava.jpg"},
		  {name:"shrinker",path:"textures/shrinker.png"},
		  {name:"finisher",path:"textures/finisher.png"},
		]
	});
	static void start() {
		myWorld.camera.rotation.set(PI,0, 0);
		myWorld.start(cobyGraphicsCanvasDiv);
		//myWorld.renderer.setClearColor( 0x000000 );
		THREEx.WindowResize(myWorld.renderer, myWorld.camera);
	}
}	

class GameObject {
    int z;
    int x;
    int y;
    int width;
    int height;
	int depth;
    int r = 0;
    int g = 0;
    int b = 0;
    int a = 255;
    int rotateAmountZ = 0;
    int rotateAmountX = 0;
    int rotateAmountY = 0;
    Boolean isDisplaying = true;
    int levelNum;
    String type = "";
	var cobject;
	String texture = "white";
	String shape = "cube";
	var custCob;
    GameObject(int x, int y, int width, int height,reference,shape,texture,int depth) {
        this.x = x;
        this.y = y;
		this.z = 0;
        this.width = width;
        this.height = height;
		this.depth = depth;
		cobject = new COBY.Cobject({
			width:width,
			height:height,
			depth:depth,
			forReference:reference,
			position: {
				x:x,
				y:y,
				z:z,
			  },
			  texture:texture,
			  shape:shape,
			  update: function(cob) {
				cobdate(cob);
			  },
			  
		});
		Game.myWorld.add(cobject);
		console.log(cobject);
    }
	GameObject(int x, int y, int width, int height,reference,shape,texture) {
		this(x,y,width,height,reference,shape,texture,height);
	}
	GameObject(int x, int y, int width, int height,texture) {
		this(x,y,width,height,false,"cube",texture);
	}
	GameObject(int x, int y, int width, int height) {
		this(x,y,width,height,false,"cube","white");
	}
    int centerX() {
        return x + (width / 2);
    }

    int centerY() {
        return y + (height / 2);
    }
    void display() {
        /*fill(r, g, b, a);
        pushMatrix();
        

        
        translate(x + width / 2, y + height / 2, z + height / 2);
        rotateX(rotateAmountX);
        rotateY(rotateAmountY);
        rotateZ(rotateAmountZ);
        box(width);
        popMatrix();*/

    }
	
	int cobX() {
	 return x;
	}
	
	int cobY() {
		return y;
	}
	
	int cobZ() {
		return z;
	}
	
	int cobWidth() {
		return width;
	}
	int cobHeight() {
		return height;
	}
	
	void cobdate(cob) {
		cob.position.x = cobX();
		cob.position.y = cobY();
		cob.position.z = cobZ();
		cob.rotation.x = -rotateAmountX;
		cob.rotation.y = -rotateAmountY;
		cob.rotation.z = -rotateAmountZ;
		cob.width = cobWidth();
		cob.height = cobHeight();
		cob.depth = depth;
	}
	
	void updateTexture(path) {
		
	}
	
    void update() {
		
    }

    void run() {
        if (!completedLevelMenuShowing && !dyingMenuShowing) {
            update();
	
		}
        if (isDisplaying && checkCollision(this, screenCollider)) {
         //   display();
		}
			
    }

}

class Text extends GameObject{
  String txt = "";
  int x;
  int y;
  Text(int x, int y, int levelNum) {
    this.x = x;
    this.y = y;
    this.type = "txt";
  }
  void display() {
    fill(0);
    pushMatrix();
    translate(x,y,0);
    text(txt,0,0);
    popMatrix();
  }
  void run() {
    //display();
  }
}

class ArrowKeysToJump extends Text {
  ArrowKeysToJump(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "Use  the Arrow Keys to Move";
  }

}

class AvoidSpikes extends Text {
  AvoidSpikes(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "Don't touch the gray blocks";
  }
}

class ElevatorText extends Text {
  ElevatorText(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "Pink blocks are elevators";
  }
}

class FallingText extends Text {
  FallingText(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "Purple blocks fade away, when on top of them";
  }
}

class CollectCoins extends Text {
  CollectCoins(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "Get all the coins to complete the level";
  }
}

class FinisherText1 extends Text {
  FinisherText1(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "Once you have all the coins, the yellow";
  }
}

class FinisherText2 extends Text {
  FinisherText2(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "block will turn green. Touch it to win!";
  }
}

class DirectionalText extends Text {
  DirectionalText(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "Blocks with arrows on them";
  }
}

class DirectionalText2 extends Text {
  DirectionalText2(int x, int y, int levelNum) {
    super(x,y,levelNum);
    this.txt = "boost you in a certain direction.";
  }
}

class ScreenCollider extends GameObject {
  ScreenCollider(int x, int y, int width, int height) {
    super(x,y,width,height);
    r=255;
    g=255;
    b=100;
  }
  
  void update() {
    x = playerX - screenWidth / 2;
    y = playerY - screenHeight / 2;
  }
}

class Cloud extends GameObject {
    Cloud(int x, int y, int levelNum) {
        this.width = tileSize
        this.levelNum = levelNum;
    }
}

class Spike extends GameObject {
    Spike(int x, int y, int levelNum) {
        super(x,y,tileSize,tileSize,"fire");
        this.levelNum = levelNum;


        this.type = "spike";
    }
    void display() {/*
        fill(168);
        pushMatrix();
        noStroke();
        translate(x + width / 2, y + height / 2, z + height / 2);
        box(width);
        popMatrix();*/
    }
}

class movingSpike extends Spike {
    int dx = 0;
    int dy = 0;
    int startX;
    int startY;
    int maxDistance = tileSize * 5;
    movingSpike(int x, int y, int levelNum) {
        super(x, y, levelNum);
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.width = tileSize;
        this.height = tileSize;
    }
    void update() {
        this.x += this.dx;
        this.y += this.dy;
        if (abs(x - startX) >= maxDistance || abs(x - startX) <= 0) {
            dx *= -1;
        }

        if (abs(y - startY) >= maxDistance) {
            dy *= -1;
        }

    }
}

class leftMovingSpike extends movingSpike {
    leftMovingSpike(int x, int y, levelNum) {
        super(x, y, levelNum);
        this.dx = 1;
    }


}

class Brick extends GameObject {
    GameObject b1;
	GameObjec b2;
    Brick(int x, int y, int levelNum) {
        super(x,y,tileSize,tileSize,"brick");
        this.levelNum = levelNum;
		b1 = new GameObject(x,y,tileSize,tileSize,"brick");
		b1.z -= depth;
		b2 = new GameObject(x,y,tileSize,tileSize,"brick");
		b2.z += depth;
        this.r = 255;

        this.type = "brick";
    }
    void move() {

    }
    void display() {/*
        fill(r, g, b);
        pushMatrix();
        translate(x + width / 2, y + height / 2, z + height / 2);
        scale(1,1,2);
        box(width);
        popMatrix();*/
    }
}

class OneDirection extends GameObject {
  int directionX = 0;
  int directionY = 0;
  int rotateAmount = 0;
    OneDirection(int x, int y, int levelNum,texture) {
        super(x,y,tileSize,tileSize,texture);
        this.levelNum = levelNum;
        this.r = 200;
        this.g = 200;
      
        this.type = "dirOnly";
    }
  void display() {/*
    //super.display();
    fill(r,g,b);
    pushMatrix();
    if(directionX == 1) {
      rotateAmount = PI / 2;
    } 
    if(directionX == -1) {
      rotateAmount = PI / -2;
    }
    translate(x + width / 2, y + height / 2, z + height / 2);
    
    rotateZ(rotateAmount);
    
    
    fill(r,g,b);
    box(width);
    fill(0);
pushMatrix();
   scale(0.5,0.5);
    translate(-width / 2, -height / 2,height * .6);
  
    triangle(0 + width / 2, 0, 0, 0+height, 0 + width, 0 + height);
popMatrix();
    popMatrix();*/
  }
}

class UpOnly extends OneDirection {
    UpOnly(int x, int y, int levelNum) {
        super(x,y,levelNum,"upArrow");
        this.directionX = 0;
        this.directionY = -1;
    }
}

class RightOnly extends OneDirection {
    RightOnly(int x, int y, int levelNum) {
        super(x,y,levelNum,"rightArrow");
        this.directionX = 1;
        this.directionY = 0;
    }
}

class LeftOnly extends OneDirection {
    LeftOnly(int x, int y, int levelNum) {
        super(x,y,levelNum,"leftArrow");
        this.directionX = -1;
        this.directionY = 0;
    }
}

class Coin extends GameObject {
    Boolean taken = false;
    Coin(int x, int y, int levelNum) {
        super(x,y,tileSize,tileSize,false,"cylinder","coin");
		
        this.levelNum = levelNum;
		this.rotateAmountZ += PI / 2;
        this.r = 255;
        this.g = 255;
        this.b = 25;
        this.type = "coin";
    }
	
	int cobHeight() {
		return height/4;
	}
	
    void take() {
        if (!taken) {
            coinsCaptured++;
            taken = true;
        }
    }
  void update() {
    rotateAmountY += 0.03;
    if(taken) {
      x -= 5;
      y -= 5;
      width -= 0.5;
      if(width<0){
        width=0;
      }
    }
  }
    void display() {/*
        fill(r, g, b);
        
        pushMatrix();
        translate(x + width / 2, y + height / 2, z + 20);
        rotateY(rotateAmountY);
        rotateX(rotateAmountX);
        
        pushMatrix();
        scale(1,1,.2);
        sphere(width/2);
        popMatrix();
        //drawCylinder(3, width/2, width/2, height / 8);
        
     
      fill(0);
      pushMatrix();
      scale(-1,1);
      translate(0,0,width/4);
      text("$",0,0);
      popMatrix();
      
      pushMatrix();
      translate(0,0,(2*width)/4);
      text("$",0,0);
      popMatrix();
      
        popMatrix();*/

    }
}

class Finisher extends GameObject {
    Finisher(int x, int y, int levelNum) {
        super(x,y,tileSize / 1.2 ,tileSize / 1.2,"finisher");
        this.levelNum = levelNum;
        this.r = 100;
        this.g = 200;
        this.b = 50;
        this.type = "finisher";
    }
  void update() {
    
    depth = tileSize - abs(sin(rotateAmountX) * tileSize / 2);
    width = tileSize - abs(cos(rotateAmountY) * tileSize / 2);
	height = tileSize - abs(sin(rotateAmountX) * tileSize / 2);
    if(coinsCaptured < totalCoinsInLevel) {
      this.g = 255;
      this.r = 255;
      this.b = 0;
      
      rotateAmountX += 0.07;
      //rotateAmountY += 0.1;
      //rotateAmountZ += 0.08;
    } else {
      this.r = 100;
      this.g=200;
      this.b=50;
      rotateAmountX -= 0.04;
      rotateAmountY -= 0.1;
      rotateAmountZ -= 0.1;
    }
  }
    void display() {/*
        stroke(0);
        super.display();*/
    }


}

class PhysicsObject extends GameObject {
    int dx = 0;
    int dy = 0;
    int maxVelocity = 7;
    int vx;
    int vy;
	PhysicsObject(int x, int y, int width, int height) {
		this(x,y,width,height,"white");
	}
    PhysicsObject(int x, int y, int width, int height,texture) {
		super(x,y,width,height,texture);
    }
    void update() {
        x += dx;
        y += dy;
        if (dy > maxVelocity) {
            dy = maxVelocity;
        }
      if(dx > maxVelocity) {
        dx = maxVelocity;
      }
    }
}

class Up extends PhysicsObject {
    int el = 1;
    int startX;
    int startY;
    Up(int x, int y, int levelNum) {
        super(x,y,tileSize,tileSize,"elevator");
        this.startX = x;
        this.startY = y;
        this.levelNum = levelNum;
        
        this.el = 1;
        this.r = 200;
        this.b = 100;
        this.type = "brick";
    }
    void update() {
        super.update();
        stop();

    }
    void move() {
        dy = -1;
    }
    void stop() {
        if (y < startY) {
            dy = 1;
        } else
            dy = 0;
    }

}

class Down extends PhysicsObject {
    int el = 2;
    int startX;
    int startY;
    int waitTime = 8;
    int time = 0;
    int maxDistance = tileSize * 5;
    int tempA = 255;
	int startWidth;
	int startHeight;
	int startDepth;
    Boolean spawning = false;
    int spawnTime = 100;
    int curSpawnTime = 0;
    Boolean started = false;
    Down(int x, int y, int levelNum) {
        super(x,y,tileSize,tileSize,"shrinker");
        this.startX = x;
        this.startY = y;
        this.levelNum = levelNum;
        startWidth=this.width;
		startHeight=this.height;
		startDepth=this.depth;
        this.el = 1;
        this.r = 100;
        this.b = 200;
        this.type = "brick";
    }
    void update() {
        super.update();
        if (started) {
            time++;
        }
        if (time >= waitTime) {
            a -= 10;
			width -= 0.5;
			height -= 0.5;
			depth -= 0.5;
            this.type = "none";
        }
		
		if(width <= 0) {
			spawning = true;
			isDisplaying = false;
			width = 0;
			height = 0;
			depth = 0;
		}

        if (spawning) {
            curSpawnTime++;
        }
        if (curSpawnTime >= spawnTime) {
            time = 0;
            curSpawnTime = 0;
            this.spawning = false;
            a = 255;
			width = startWidth;
			height = startHeight;
			depth = startDepth;
            this.type = "brick";
            isDisplaying = true;
            started = false;
        }

    }
    void move() {
        if (!started) {
            started = true;
        }

    }


}

class Player extends PhysicsObject {
    boolean isFalling = true;
    boolean movingRight = false;
    boolean movingLeft = false;
    boolean isJumping = false;
    boolean canMoveRight = true;
    boolean canMoveLeft = true;
    boolean upColliding = false;
    boolean isBoosting;
    boolean allCoinsCaptured = false;
	var isKeyDown = false;
    int jumpHeight = 3 * scaleFactor;
    int speed = 4 * scaleFactor;
    int maxXVelocity = 5 * scaleFactor;
  int horizontalDistance = 0;
  int verticleDistance = 0;
  double rotationIncreaseAmount = 0.03;
    GameObject colRectRight;
    GameObject colRectLeft;
    GameObject colRectTop;
    GameObject colRectBottom;
  
  String type = 'player';
    Player(int x, int y, int levelNum) {
	    this.texture = "player";
		super(x,y,tileSize / 2,tileSize / 2,"player");
		this.x=x;
		this.y=y;
		this.width = tileSize / 2;
		this.height = tileSize / 2;
        this.levelNum = levelNum;
        this.dx = 0;
        this.r = 0;
        this.g = 100;
        this.b = 255;
        rotateAmountX =   0.4;
      
        colRectRight = new GameObject(x,y, width/2,height/2,true,"","");
        colRectLeft = new GameObject(x,y,width/2,height/2,true,"","");
        colRectTop = new GameObject(x,y,width / 2,height/4,true,"","");
        colRectBottom = new GameObject(x,y,width / 2,height/4,true,"","");
        mainCobject = cobject;
        cobject.updateTexture(profiles[curProfile%profiles.length].path);
    }
function jumpHigher() {
    jumpHeight=6;
  
}
  function faster() {
    
    speed=8;
  }
  
  function easy(){
    /*for(int i = 0; i < gameObjects.size(); i++) {
      if(gameObjects.get(i).type == "spike")
        gameObjects.get(i).type = "brick";
      }
      if(gameObjects.get(i).el == 2)
        gameObjects.get(i).el = 0;
      }
  console.log("EASY");*/
  }
  
    int cobX() {
		return x - 8;
	}
	
	int cobY() {
		return y - 8;
	}
    void update() {
		
        this.super.update();
		
        rotateAmountY += dx * rotationIncreaseAmount;
        rotateAmountX -= dy * rotationIncreaseAmount;
        
	//	if(!isKeyDown) {
	/*		if(rotateAmountX >= PI) {
			  rotateAmountX = 0;
			}
		  
			if(rotateAmountX <= -PI) {
			  rotateAmountX = 0;
			}  
		  
			if(rotateAmountY >= PI) {
			  rotateAmountY = 0;
			}
		  
			if(rotateAmountY <= -PI) {
			  rotateAmountY = 0;
			}*/
	//	}
      /*
        if(dx == 0) {
          if(rotateAmountY > rotationIncreaseAmount * 4) {
            rotateAmountY -= rotationIncreaseAmount * 4;
          } else if(rotateAmountY < -rotationIncreaseAmount * 4) {
            rotateAmountY += rotationIncreaseAmount * 4;
          } else
            rotateAmountY = 0;
        }*/
        if(dy == 0) {
         /* if(rotateAmountX > rotationIncreaseAmount * 4) {
              console.log(rotateAmountX, "more");
            rotateAmountX -= rotationIncreaseAmount * 4;
          } else if(rotateAmountX < -rotationIncreaseAmount * 4) {
            //rotateAmountX += rotationIncreaseAmount * 4;
            rotateAmountX = radians(270);
            console.log(degrees(rotateAmountX), "less");
          } else*/

//            rotateAmountX = radians(90);
        }
        playerX = x;
        playerY = y;
        transAmountX = -x + screenWidth / 2 - width / 2;
        transAmountY = -y + screenHeight / 2 - height / 2;
        Game.myWorld.camera.position.set(x,y,-300);
        /*if(transAmountX > -tileSize) {
           transAmountX = -tileSize;
        }
        if(transAmountY > -tileSize) {
           transAmountY = -tileSize;
        }
        if(transAmountX < -currentMapParent[0][0].length * tileSize - screenWidth / 2) {
           transAmountX = -currentMapParent[0][0].length * tileSize - screenWidth / 2;

        }
console.log(transAmountX / tileSize, map[0][0].length);
        if(transAmountY < -currentMapParent[0].length * tileSize - screenHeight / 2) {
           transAmountY = -currentMapParent[0].length * tileSize - screenHeight / 2;
        }*/
        isFalling = true;
        canMoveLeft = true;
        canMoveRight = true;
        upColliding = false;
        isBoosting = false;
        colRectRight.x = x + width - colRectRight.width;
        colRectRight.y = y + (height / 4);
      
        colRectLeft.x = x;
        colRectLeft.y = y + (height / 4);
      
        colRectTop.x = x + (width / 2) - (colRectTop.width / 2);
        colRectTop.y = y;
      
        colRectBottom.x = x + (width / 2) - (colRectBottom.width / 2);
        colRectBottom.y = y + height - colRectBottom.height;
      
        for (int i = 0; i < gameObjects.size(); i++) {
            if (gameObjects.get(i).levelNum == levelIndex)
                if (checkCollision(this, gameObjects.get(i))) {

              if(gameObjects.get(i).type=="brick") {
                
                if(checkCollision(colRectRight, gameObjects.get(i))) {
                  canMoveRight = false;
                  if(dy < 4)
                    x = gameObjects.get(i).x - width;
                }
                
                if(checkCollision(colRectLeft, gameObjects.get(i))) {
                  canMoveLeft = false;
                  if(dy < 4)
                    x = gameObjects.get(i).x + gameObjects.get(i).width;
                }
                
                if(checkCollision(colRectBottom, gameObjects.get(i))) {
                  isFalling = false;
                  y = gameObjects.get(i).y - height;
                  if(upColliding) {
                    die();
				  }
                  gameObjects.get(i).move();
                  
                }
                
                if(checkCollision(colRectTop, gameObjects.get(i))) {
                  if(dy < 0) {
                    dy *= -1;
                  }
                  
                  upColliding = true;
                }
                
              }   
         
             if (gameObjects.get(i).type == "finisher") {
             
                    if (coinsCaptured == totalCoinsInLevel)
                        finishLevel();
                
            } else if (gameObjects.get(i).type == "spike") {
                    die();
            } else if (gameObjects.get(i).type == "coin") {
               
                    gameObjects.get(i).take();
                
               

            } else if(gameObjects.get(i).type=="dirOnly") {
                if(gameObjects.get(i).directionX != 0) {
                  dx = gameObjects.get(i).directionX * speed;
                  isBoosting = true;
                }
                if(gameObjects.get(i).directionY != 0) {
                  if(!upColliding)
                    dy = gameObjects.get(i).directionY * speed;
                  
                }
            } 
              
              
            }
        }

      if(coinsCaptured==totalCoinsInLevel){
       // allCoinsCaptured = true;
      }
        
        if(allCoinsCaptured) {
          easy();
          jumpHigher();
          faster();
          makeFreestyleLevel(); 
          allCoinsCaptured = false;
        }
        if (isFalling == true) {
            dy += GRAVITY / 9;
        } else {
            dy = 0;
        }

        if (!canMoveRight || !canMoveLeft) {
            dx = 0;
        }
		
		isKeyDown = false;
		
        if (COBY.Keyboard.isKeyDown(COBY.Keyboard.LEFT) || COBY.Keyboard.isKeyDown(65) ) {
			isKeyDown = true;
            if (canMoveLeft) {
                if (dx > -speed) {
                    dx -= .5;
                } else
                    dx = -speed;
            }
		//	cobject.updateTexture("textures/hat.jpg");
        } else

        if (COBY.Keyboard.isKeyDown(COBY.Keyboard.RIGHT) || COBY.Keyboard.isKeyDown(68) ) {
			isKeyDown = true;
            if (canMoveRight) {
                if (dx < speed) {
                    dx += .5;
                } else
                    dx = speed
            }
		//	cobject.updateTexture("textures/lava.jpg");
        } else {
            if (dx > speed) {
                dx -= -0.1;
            } else
            if (dx < -speed) {
                dx += 0.1;
            } else if(!isBoosting)
                dx = 0;
        }

        if (COBY.Keyboard.isKeyDown(COBY.Keyboard.UP) || COBY.Keyboard.isKeyDown(87) ) {
			isKeyDown = true;
	//		cobject.updateTexture("textures/player.png");
            if (!isFalling)
                if (!isJumping) {
                    dy = -jumpHeight;
                    isJumping = true;
                }
        }

        if (!isFalling) {
            isJumping = false;
        }

        if (key == LEFT) {
            movingLeft = false;
        }
        if(isEmptying) {
            stopAndRun();
            console.log("officially emptied??");
            isEmptying = false
        }
    }
  void display() {
   // super.display();
    /*
    pushMatrix();
    translate(colRectRight.x,colRectRight.y,20);
    fill(255,0,0);
    rect(0,0,colRectRight.width,colRectRight.height);
    popMatrix();
    
    pushMatrix();
    translate(colRectLeft.x,colRectLeft.y,20);
    fill(0,255,0);
    rect(0,0,colRectLeft.width,colRectLeft.height);
    popMatrix();
    
    pushMatrix();
    translate(colRectTop.x,colRectTop.y,20);
    fill(0,0,0);
    rect(0,0,colRectTop.width,colRectTop.height);
    popMatrix();
    
    pushMatrix();
    translate(colRectBottom.x,colRectBottom.y,20);
    fill(255,255,255);
    rect(0,0,colRectBottom.width,colRectBottom.height);
    popMatrix();*/
  }


}

String worldAt(int _x, int _y) {
  int tX = floor(_x / tileSize);
  int tY = floor(_y / tileSize);
  return map[levelIndex][tY][tX];
}

void drawCylinder( int sides, float r1, float r2, float h)
{
    float angle = 360 / sides;
    float halfHeight = h / 2;
    // top
    beginShape();
    stroke(0);
  //texture(dollarSign);
    for (int i = 0; i < sides; i++) {
        float x = cos( radians( i * angle ) ) * r1;
        float y = sin( radians( i * angle ) ) * r1;
        vertex( x, y, -halfHeight);
    }
    
    endShape(CLOSE);
  
    // bottom
    beginShape();
  //texture(dollarSign);
    for (int i = 0; i < sides; i++) {
        float x = cos( radians( i * angle ) ) * r2;
        float y = sin( radians( i * angle ) ) * r2;
        vertex( x, y, halfHeight);
    }
    endShape(CLOSE);
  noStroke();
    // draw body
    beginShape(TRIANGLE_STRIP);
    
    for (int i = 0; i < sides + 1; i++) {
        float x1 = cos( radians( i * angle ) ) * r1;
        float y1 = sin( radians( i * angle ) ) * r1;
        float x2 = cos( radians( i * angle ) ) * r2;
        float y2 = sin( radians( i * angle ) ) * r2;
        vertex( x1, y1, -halfHeight);
        vertex( x2, y2, halfHeight);
    }
    endShape(CLOSE);
}

void mouseReleased() {
  mouseDown = false;
}
void keyPressed() {
    if (keyCode == LEFT) {
        leftKeyDown = true;
    }
    if (keyCode == RIGHT) {
        rightKeyDown = true;
    }
    if (keyCode == UP) {
        upKeyDown = true;
    }
}

void keyReleased() {
    if (keyCode == LEFT) {
        leftKeyDown = false;
    }
    if (keyCode == RIGHT) {
        rightKeyDown = false;
    }
    if (keyCode == UP) {
        upKeyDown = false;
    }
}

void strokeText(String message, int x, int y, int outlineColor, int textColor) 
{ 
  
  fill(outlineColor); 
  text(message, x-2, y + 2); 
  text(message, x, y-2 + 2); 
  text(message, x+2, y + 2); 
  text(message, x, y+2 + 2); 
  fill(textColor); 
  text(message, x, y + 2); 
} 			 					