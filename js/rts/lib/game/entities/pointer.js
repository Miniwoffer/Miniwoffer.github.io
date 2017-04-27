ig.module(
    'game.entities.pointer'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityPointer = ig.Entity.extend({

        // Set some of the properties
        type:ig.Entity.TYPE.NONE,
        checkAgainst: ig.Entity.TYPE.B,
        collides:ig.Entity.COLLIDES.LITE,
        size: {x: 1, y: 1},
        isClicking:false,
        init: function( x, y, settings ) {
            // Add animations for the animation sheet

            // Call the parent constructor
            this.parent( x, y, settings );
        },

        update: function() {
            this.pos.x = ig.input.mouse.x+ig.game.screen.x;
            this.pos.y = ig.input.mouse.y+ig.game.screen.y;
            this.isClicking = ig.input.pressed("mouse1");
        },
        check: function(other){
            if(this.isClicking && typeof(other.clicked == "function"))
            {
                other.clicked();
            }
            else if(typeof(other.hover == "function"))
            {
                other.hover();
            }
        }
    });
});