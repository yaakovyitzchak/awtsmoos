int editorIndex = 0;
boolean mouseDown = false;
void setup() {
size(screenWidth, screenHeight);
textMode(SCREEN);
}
void draw() {
showLevelEditingScreen();
}

void mouseReleased() {
mouseDown = false;
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
		this.y += this.height / 1;
    }
    void update() {
      if(overRect(x,y - height / 2,width,height)) {
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

class EditComponent {
  int x;
  int y;
  int index;
  int r;
  int g;
  int b;
  String name;
  int width;
  int height;
  var customShape = (function() {});
  EditComponent(int x, int y, int index, int r, int g, int b,String name,var cShape) {
    this.x=x * tileSize;
    this.y=y * tileSize;
    this.width = tileSize;
    this.height = tileSize;
    this.index = index;
    this.r=r;
    this.g=g;
    this.b=b;
    this.name = name;
    if(cShape) {
       customShape = cShape;
    }
  }
  
  void switchEditorIndex() {
      editorIndex = this.index;
  }
  
  void update() {
    fill(r,g,b);
    if(overRect(x,y,width,height)) {
        fill(r + 10, g + 10, b + 10);
        if(mousePressed) {
          if(!mouseDown) {
            switchEditorIndex();
            mouseDown = true;
          }
        }
      }
    pushMatrix();
    translate(x,y);
    rect(0,0,width,height);
    popMatrix();
    customShape(x,y);
  }
  void run() {
    update();
  }
  
}
void showLevelEditingScreen() {
  background(145, 250, 255);
  int mapEditSize = tileSize / 1;
  int mouseSnapX = floor((mouseX - editorScreenOffsetX * tileSize) / mapEditSize) * mapEditSize;
  int mouseSnapY = floor(mouseY / mapEditSize) * mapEditSize;
  
  if(mouseX > screenWidth - tileSize) {
    if(editorScreenOffsetX > -editingMap[0].length / 2 - 4)
       editorScreenOffsetX -= 1;
    else
      editorScreenOffsetX = -editingMap[0].length / 2 - 4;
  }

  
  if(mouseX < tileSize) {
      if(editorScreenOffsetX < 0)
      editorScreenOffsetX += 1;
    else
      editorScreenOffsetX = 0;
  }
  
  if(!madeEditingMap) {
    levelEditorButtons = [];
    editingMap = {};
    
    if(loadedMap != null) {
      editingMap = myEditingMaps[loadedMap];
    } else
      makeEditingMap(53,15);
    componentKey = [
      {
        name:"*",
        r:255,
        g:0,
        b:0
      },
      {
        name:"c",
        r:255,
        g:255,
        b:0
      },
      {
        name:"p",
        r:0,
        g:100,
        b:255
      },
      {
        name:"f",
        r:0,
        g:255,
        b:0
      },
      {
        name:"s",
        r:100,
        g:100,
        b:100
      },
      {
        name:"u",
        r:200,
        g:0,
        b:100
      },
      {
        name:"d",
        r:100,
        g:0,
        b:200

      },
      {
        name:"<",
        r:200,
        g:200,
        b:00,
        customShape: function(x,y) {
           
pushMatrix();
translate(x,y);
   scale(0.5,0.5);
   
    translate(tileSize, tileSize);
    fill(0);
    rotate(-PI/2);
    pushMatrix();
    rotate(radians(45));
  //  translate(tileSize/2,tileSize/2);
    rect(-tileSize/2,-tileSize/2,tileSize,tileSize);
    rotate(radians(-45));
    fill(200,200,0);
    noStroke();
    rect(-tileSize,0,tileSize*2,tileSize);
    popMatrix();
    stroke(0);
popMatrix();
        }
      },

      {
        name:"^",
        r:200,
        g:200,
        b:00,
customShape: function(x,y) {

pushMatrix();
translate(x,y);
   scale(0.5,0.5);
   
    translate(tileSize, tileSize);
    fill(0);
    
    pushMatrix();
    rotate(radians(45));
  //  translate(tileSize/2,tileSize/2);
    rect(-tileSize/2,-tileSize/2,tileSize,tileSize);
    rotate(radians(-45));
    fill(200,200,0);
    noStroke();
    rect(-tileSize,0,tileSize*2,tileSize);
    popMatrix();
    stroke(0);
popMatrix();
        }
      },
      {
        name:">",
        r:200,
        g:200,
        b:00,
customShape: function(x,y) {
           
pushMatrix();
translate(x,y);
   scale(0.5,0.5);
   
    translate(tileSize, tileSize);
    fill(0);
    rotate(PI/2);
    pushMatrix();
    rotate(radians(45));
  //  translate(tileSize/2,tileSize/2);
    rect(-tileSize/2,-tileSize/2,tileSize,tileSize);
    rotate(radians(-45));
    fill(200,200,0);
    noStroke();
    rect(-tileSize,0,tileSize*2,tileSize);
    popMatrix();
    stroke(0);
popMatrix();
        }
      }, 
      {
        name:" ",
        r:145,
        g:250,
        b:255 
      }
    ];
    for(int i = 0; i < componentKey.length; i++) {
      levelEditorButtons[i] = new EditComponent(i,0,i,componentKey[i].r,componentKey[i].g,componentKey[i].b,componentKey[i].name, componentKey[i].customShape);
    }
    
    if(loadedMap != null) {
      levelEditorButtons[levelEditorButtons.length] = new Button("Save",(levelEditorButtons.length + 3) * tileSize,0,20,function() {
      myEditingMaps[loadedMap] = (editingMap);
      levelEditorShowing = false;
      menuShowing = true;
      levelSelectorShowing = false;
      myLevelsPageShowing = true;
      madeEditingMap = false;
      

      user.Data.games.vex.levels = myEditingMaps;
     hide(levelEditorCanvas);
	 show(guiCanvas.pg);
     saveUserToServer();
      loadedMap = null;
    });
    } else {
    levelEditorButtons[levelEditorButtons.length] = new Button("Save",(levelEditorButtons.length + 3) * tileSize,0,20,function() {
      myEditingMaps.push(editingMap);
      levelEditorShowing = false;
      menuShowing = true;
      levelSelectorShowing = false;
      myLevelsPageShowing = true;
      madeEditingMap = false;
      
      hide(levelEditorCanvas);
	  show(guiCanvas.pg);
      if(!user.Data.games) {
         user.Data.games = new Object();
      }
      
      if(!user.Data.games.vex) {
            user.Data.games.vex = new Object();
            
      }
      if(!user.Data.games.vex.levels) {
               user.Data.games.vex.levels = new Array();
      }
      
      
      user.Data.games.vex.levels = myEditingMaps;
      localStorage.user = JSON.stringify(user); 
      console.log(localStorage.user);
      saveUserToServer();
      
    });
    }
    levelEditorButtons[levelEditorButtons.length] = new Button("Exit to Menu",(levelEditorButtons.length + 5) * tileSize,0,20,function() {
      
      levelEditorShowing = false;
     // menuShowing = true;
      levelSelectorShowing = false;
      loadedMap = null;
	  hide(levelEditorCanvas);
	  show(guiCanvas.pg);
    });
  }
  
  function makeEditingMap(int mapWidth, int mapHeight) {
    madeEditingMap = true;
    for(int h = 0; h < mapHeight; h++) {
      editingMap[h] = {};
      for(int w = 0; w < mapWidth; w++) {
        editingMap[h][w] = " ";
        
        
      }
    }
    for(int h = 0; h < mapHeight; h++) {

      for(int w = 0; w < mapWidth; w++) {
        editingMap[h][0] = "*";
        editingMap[0][w] = "*";
        editingMap[mapHeight - 1][w] = "*";
        editingMap[h][mapWidth - 1] = "*";
      }
    }
    editingMap[mapHeight - 2][1] = "p";
    
  }
  
  function checkForMousePosition() {
  noStroke();
  if(mouseSnapX / tileSize < 1) {
    mouseSnapX = tileSize;
  }
    if(mouseSnapX / tileSize > editingMap[0].length - 2) {
    mouseSnapX = (editingMap[0].length - 2) * tileSize;
  }
    if(mouseSnapY / tileSize > editingMap.length - 2) {
      mouseSnapY = (editingMap.length - 2) * tileSize;
    }
    if(mouseSnapY < 1) {
      mouseSnapY = 1 * tileSize;
    }
    
   fill(20);
  rect(mouseSnapX-1 + editorScreenOffsetX * tileSize,mouseSnapY-1,mapEditSize+2,mapEditSize+2);      fill(levelEditorButtons[editorIndex].r,levelEditorButtons[editorIndex].g,levelEditorButtons[editorIndex].b);
    rect(mouseSnapX + editorScreenOffsetX * tileSize,mouseSnapY,mapEditSize,mapEditSize);
    if(levelEditorButtons[editorIndex].customShape) {
        levelEditorButtons[editorIndex].customShape(mouseSnapX+editorScreenOffsetX*tileSize,mouseSnapY);
    }
    if(mousePressed) {
      if(!mouseDown) {
        if(levelEditorButtons[editorIndex].name=="p") {
          for(int h = 0; h < editingMap.length; h++) {
            for(int w = 0; w < editingMap[h].length; w++) {
              if(editingMap[h][w] == "p") {
                editingMap[h][w] = " ";
              }
            }
          }
        }
        if(editingMap[mouseSnapY / mapEditSize][mouseSnapX / mapEditSize] == "p") {
          
        } else 
        editingMap[mouseSnapY / mapEditSize][mouseSnapX / mapEditSize] = levelEditorButtons[editorIndex].name;
        
        //mouseDown = true;
      }
    }
    
    
  }
 
  function drawComponentList() {
    fill(0);
    rect(0,0,screenWidth,tileSize);
    stroke(0);
    for(int i = 0; i < levelEditorButtons.length; i++) {
      levelEditorButtons[i].run();
    }
  }
  
  function drawObjects() {
    noStroke();
    //triangle(0,50,50,60,60,0);
    for(int h = 1; h < editingMap.length; h++) {
      for(int w = 0; w < editingMap[h].length; w++) {
        var comp = null;
        for(int i = 0; i < componentKey.length; i++) {
          if(componentKey[i].name == editingMap[h][w]) {
            comp = componentKey[i];
          }
        }
        if(comp) {
          fill(comp.r,comp.g,comp.b);
          rect((w + editorScreenOffsetX) * mapEditSize, h * mapEditSize, mapEditSize, mapEditSize);
if(comp.customShape)
          comp.customShape((w+editorScreenOffsetX)*mapEditSize,h*mapEditSize);
          noStroke();
        }
      }
    }
  }
  drawObjects();
  drawComponentList();
    
  checkForMousePosition();
 
 
}