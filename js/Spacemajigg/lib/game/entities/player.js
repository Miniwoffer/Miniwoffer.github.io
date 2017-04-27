ig.module(
  'game.entities.player'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityPlayer = ig.Entity.extend({
  		size: {x: 75, y: 100},
  		friction: {x: 300, y: 0},
  		maxVel: {x: 200, y: 200},
  		type: ig.Entity.TYPE.A,
  		falling: true,
  		lastpos: 0,
  		health: 100,
  		controls: true,
	animSheet: new ig.AnimationSheet('media/player3.png', 75,100),
    init: function(x, y, settings) {
    	this.addAnim('idle', 0.1, [3]);
    	this.addAnim('run', 0.2, [0,3,1,3]);
    	this.addAnim('jump', 0.1, [2]);
      this.parent(x, y, settings);
      //this.pos = ig.global.pspawn;
      
    },
    update: function(){
    	var x = ig.system.width/3,
			y = ig.system.height/3;
    	ig.game.screen.x = this.pos.x - x ;
    	ig.game.screen.y = this.pos.y - y ;
      this.accel.x = 0;
      this.accel.y = 0;
      this.friction.x = 50;
      if(this.falling == false)
      {
              this.friction.x = 300;
      }
    	if (this.lastpos == this.pos.y)
    	{
    		this.falling = false;
    		this.currentAnim = this.anims.idle;
    	}
    	else
    	{
    		this.falling = true;
    		this.currentAnim = this.anims.jump;
    	}
    	this.lastpos = this.pos.y;
    	if(ig.global.pcntrl)
    	{
    	if (this.falling == false)
    	{
    	if( ig.input.pressed('jump') ) {
            this.vel.y = -200;
            this.currentAnim = this.anims.jump;
        }
    }
        if( ig.input.state('left') ) {
        	this.currentAnim = this.anims.run;
            this.accel.x = -300;
            this.anims.idle.flip.x = false;
            this.anims.run.flip.x = false;
            this.anims.jump.flip.x = false;
        }
        else if( ig.input.state('right') ) {
        	this.currentAnim = this.anims.run;
            this.accel.x = 300;
            this.anims.idle.flip.x = true;
            this.anims.run.flip.x = true;
            this.anims.jump.flip.x = true;
        }
    }
    	this.parent();
    }
  });
});