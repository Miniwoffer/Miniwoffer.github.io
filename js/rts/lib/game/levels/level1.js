ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.player','game.entities.part','game.entities.pointer','game.entities.window','game.entities.button','game.entities.cbt' )
.defines(function(){
LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":512,"y":224,"settings":{"id":3,"skin":3}},{"type":"EntityPlayer","x":128,"y":64,"settings":{"id":2,"skin":1,"mana":10,"hp":89}},{"type":"EntityPart","x":248,"y":88},{"type":"EntityPart","x":232,"y":40},{"type":"EntityPart","x":232,"y":104},{"type":"EntityPart","x":232,"y":72},{"type":"EntityPlayer","x":384,"y":224,"settings":{"id":1,"skin":2}},{"type":"EntityPointer","x":-4,"y":192},{"type":"EntityPlayer","x":64,"y":64,"settings":{"id":0,"mana":50,"hp":37}},{"type":"EntityPart","x":236,"y":136},{"type":"EntityPart","x":248,"y":120},{"type":"EntityPart","x":248,"y":56},{"type":"EntityWindow","x":0,"y":192,"settings":{"sizex":75,"sizey":132,"zIndex":5,"posx":5,"posy":5}},{"type":"EntityButton","x":-143,"y":5,"settings":{"text":"Wait","func":1,"zindex":15,"zIndex":10}},{"type":"EntityCbt","x":-143,"y":85,"settings":{"posy":100,"zindex":10,"zIndex":10}},{"type":"EntityButton","x":-143,"y":45,"settings":{"text":"Toogle Shield","posy":60,"func":2,"zIndex":10}}],"layer":[{"name":"envofloor","width":30,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/Terrain3.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,17,17,17,17,17,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,0],[0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0],[0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0],[0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0],[0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0],[0,0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,0,17,17,17,17,17,17,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"enviroment","width":30,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/Terrain3.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[7,11,11,11,11,11,15,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,13,0,0,0],[6,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0],[6,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0],[6,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0],[6,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0],[4,15,9,0,3,15,16,11,11,11,11,11,11,11,15,11,9,0,3,11,15,11,11,11,11,11,14,0,21,21],[0,6,0,0,0,6,0,0,0,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0,0,0,6,0,21,21],[0,6,0,0,0,6,0,0,0,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0,0,0,6,0,21,0],[0,6,0,0,0,2,0,0,0,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0],[30,6,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0],[30,6,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0],[0,6,0,0,0,5,0,0,0,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0],[0,6,0,0,0,6,0,0,0,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0],[0,6,0,0,0,6,0,0,0,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0,0,0,6,0,0,0],[0,6,0,0,0,4,11,11,11,11,11,11,11,11,12,11,9,0,3,11,12,11,9,0,3,11,12,11,13,0],[0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,19],[0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0],[0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,19],[0,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,19],[0,19,19,0,19,0,0,0,19,19,19,30,19,19,19,0,19,19,19,0,30,30,30,19,19,19,19,19,19,19]]},{"name":"collision","width":30,"height":20,"linkWithCollision":false,"visible":0,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/Terrain3.png'), new ig.Image('media/Terrain3.png')];
});