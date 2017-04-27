ig.module(
  'game.entities.bullet'
)
.requires(
  'impact.entity',
  'impact.entity-pool'
)
.defines(function() {
  EntityBullet = ig.Entity.extend({
    _wmIgnore: true,
  	size:{x:5,y:5},
    bounciness: 0.8, 
  	type: ig.Entity.TYPE.NONE,
    collides: ig.Entity.COLLIDES.PASSIVE,
    checkAgainst: ig.Entity.TYPE.B,
    bounceCounter: 0,
    hit: new ig.Sound('media/audio/Ehurt.ogg'),
  	animSheet: new ig.AnimationSheet ('media/bullet.png', 5, 5),
    update: function(){
    this.parent();
    },
    init: function( x, y, settings ) {
    this.addAnim( 'idle', 1, [0] );
    this.parent(x, y, settings);
    this.vel.y = Math.sin(this.angle) *250; //.desiredVel is just the velocity I would want if we were going in a straight line directly out of the right of the player. I just put it as a property of the entity since I refer to it in multiple locations
    this.vel.x =  Math.cos(this.angle) * 250;

    },
  
  reset: function( x, y, settings ) {
    this.vel.x = 100;
    // This function is called when an instance of this class is resurrected
    // from the entity pool. (Pooling is enabled at the bottom of this file).
    this.parent( x, y, settings );
    // Remember, this a used entity, so we have to reset our bounceCounter
    // as well
    this.bounceCounter = 0;
  },
    handleMovementTrace: function( res ) {
    this.parent( res );
    
    // Kill this fireball if it bounced more than 3 times
    if( res.collision.x || res.collision.y || res.collision.slope ) {
      this.bounceCounter++;
      if( this.bounceCounter > 3 ) {
        this.kill();
      }
    }
  },
    check: function( other ) {
    ig.game.score+= 100;
    other.receiveDamage( 1, this );
    this.hit.play();
    this.kill();
  } 
  });
});