ig.module(
  'game.entities.moveplayer'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityMoveplayer = ig.Entity.extend({
    _wmDrawBox: true,
    size: {x: 75, y: 100},
    _wmBoxColor: 'rgba(255, 0, 0, 0.5)',
    collides: ig.Entity.COLLIDES.NEVER,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      
    },
    trigger: function(_other,_trigger)
    {
      var pl = ig.game.getEntitiesByType(EntityPlayer)
      _other.pos = this.pos;
      ig.global.pcntrl = true;
    },
        update: function(){}
  });
});