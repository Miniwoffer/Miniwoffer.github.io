ig.module(
	'game.entities.part'
)
.requires(
	'impact.entity'
)
.defines(function(){
EntityPart = ig.Entity.extend({

    // Set some of the properties
    collides: ig.Entity.COLLIDES.LITE,
    type: ig.Entity.TYPE.NONE,
    checkAgainst: ig.Entity.TYPE.A,

    size: {x: 16, y: 16},
    health: 50,
    
    // Load an animation sheet
    animSheet: new ig.AnimationSheet( 'media/part1.png', 16, 16 ),
    
    init: function( x, y, settings ) {
        // Add animations for the animation sheet
        this.addAnim( 'idle', 0.5, [0,1,2,3] );
        
        // Call the parent constructor
        this.parent( x, y, settings );
    },

    update: function() {
        // Call the parent update() method to move the entity
        // according to its physics
        this.parent(); 
    },
    collideWith: function()
    {
        ig.game.parts++;
        ig.global.pickupsound.play();
        this.kill();
    }
});
});