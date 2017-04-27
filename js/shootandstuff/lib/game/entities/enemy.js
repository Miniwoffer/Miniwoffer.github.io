ig.module(
  'game.entities.enemy'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityEnemy = ig.Entity.extend({
  	size:{x:20,y:20},
  	type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    health: 1,
    bounciness: 1,
  	animSheet: new ig.AnimationSheet ('media/enemy.png', 20, 20),
    init: function(x, y, settings){
      this.addAnim('idle', 0.1,[0]);
      this.parent(x, y, settings);
      this.pos.x =(Math.random() * 580) + 20;
      this.pos.y =(Math.random() * 580) + 20;
      if (Math.random() > 0.5)
      {
      this.vel.x = Math.random() * 250;
      } 
      else{
      this.vel.x = Math.random() * -250;
      }
      if (Math.random() > 0.5)
      {
      this.vel.y = Math.random() * 250;
      } 
      else{
      this.vel.y = Math.random() * -250;
      }
    },
    check: function( other ) {
    other.receiveDamage( 1, this );
    this.kill();
  } 
  });
});