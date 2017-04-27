ig.module(
  'game.entities.player'
)
.requires(
  'impact.entity',
  'game.entities.bullet'
)
.defines(function() {
  EntityPlayer = ig.Entity.extend({
  	size:{x:20,y:20},
  	health: 3,
  	lasthealth: 3,
  	type: ig.Entity.TYPE.A,
    shoot: new ig.Sound('media/audio/Shoot.ogg'),
    phurt: new ig.Sound('media/audio/Phurt.ogg'),
  	animSheet: new ig.AnimationSheet ('media/player.png', 20, 20),
    init: function(x, y, settings){
    this.addAnim('idle', 0.1,[0]);
    this.addAnim( 'dmg', 0.5, [0,1] );
    this.addAnim( 'dmgb', 0.2, [0,1] );
    this.parent(x, y, settings);
    },
    update: function(){
    	if (this.lasthealth > this.health)
    	{
        this.phurt.play();
    		ig.game.score -= 1000;
    		if(this.health < 2)
    		{
    			this.currentAnim = this.anims.dmgb;
    		} 
    		else if (this.health < 3)
    		{
    			this.currentAnim = this.anims.dmg;
    		}
    	}
    	this.lasthealth = this.health;
    	this.vel.y = 0;
    	this.vel.x = 0;
    	if(ig.input.state('up'))
    	{
    		this.vel.y  -= 100;
    	}
    	if(ig.input.state('down'))
    	{
    		this.vel.y  += 100;
    	}
    	if(ig.input.state('right'))
    	{
    		this.vel.x  -= 100;
    	}
    	if(ig.input.state('left'))
    	{
    		this.vel.x  += 100;
    	}
    	if( ig.input.pressed('shoot') ) {  
        this.shoot.play();
     	var mx = (ig.input.mouse.x + ig.game.screen.x);
     	var my = (ig.input.mouse.y + ig.game.screen.y);
     	var r = Math.atan2(my-this.pos.y+10, mx-this.pos.x+10);
     	ig.game.spawnEntity( EntityBullet, this.pos.x+10, this.pos.y+10, {flip:this.flip,angle:r} ); 
		}
		this.parent();
    },
    kill: function()
    {
      this.phurt.play();
    	ig.game.score -= 1000;
    	ig.game.over = true;
    	this.parent();
    }
  });
});