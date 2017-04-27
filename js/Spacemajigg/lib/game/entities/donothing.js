ig.module(
  'game.entities.donothing'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityDonothing = ig.Entity.extend({
  	_wmScalable: true,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(255, 0, 0, 0.5)',
    collides: ig.Entity.COLLIDES.NEVER,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      
    },
    trigger: function(_other,_trigger)
    {
    	ig.global.pcntrl = true;
    },
        update: function(){}
  });
});