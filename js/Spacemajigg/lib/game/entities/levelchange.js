ig.module(
  'game.entities.levelchange'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityLevelchange = ig.Entity.extend({
  	_wmScalable: true,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(255, 0, 0, 0.5)',
    collides: ig.Entity.COLLIDES.NEVER,
    level: null,
    spawnlocation: {x:0,y:0},
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      
    },
    trigger: function(_other,_trigger)
    {
      ig.global.pspawn = this.spawnlocation;
      var lvl = ig.game.getMapByName(this.level);
      ig.game.loadLevel(lvl);
    },
        update: function(){}
  });
});