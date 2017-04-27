ig.module(
  'game.entities.kill'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityKill = ig.Entity.extend({
  	_wmScalable: true,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(255, 0, 0, 0.5)',
    collides: ig.Entity.COLLIDES.NEVER,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      
    },
    trigger: function(_other,_trigger)
    {
    	_other.kill();
    },
        update: function(){}
  });
});