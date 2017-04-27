ig.module(
  'game.entities.trigger'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityTrigger = ig.Entity.extend({
  	_wmScalable: true,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(0, 255, 0, 0.5)',
    collides: ig.Entity.COLLIDES.NEVER,
    checkAgainst: ig.Entity.TYPE.BOTH,
    target: {},
    size: {x: 50, y: 50},
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      
    },
    check: function(other) {
    	for(var t in this.target){
    		var ent = ig.game.getEntityByName(this.target[t]);

    		if( ent && typeof(ent.trigger) == 'function' ) {
    			ent.trigger( other, this );
    		}
    	}
    },
    update: function(){}
  });
});