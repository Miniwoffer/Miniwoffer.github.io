ig.module(
    'game.entities.cbt'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityCbt = ig.Entity.extend({

        // Set some of the properties
        collider: ig.Entity.COLLIDES.PASSIVE,
        type: ig.Entity.TYPE.B,
        size: {x: 64, y: 32},
        health: 50,
        posx:10,
        posy:20,
        text:"Combat",
        font: new ig.Font( 'media/04b03.font.png' ),
        mode:true,
        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'media/toogle.png', 64, 32 ),

        init: function( x, y, settings ) {
            // Add animations for the animation sheet
            this.addAnim( 'norm', 0.1, [0,0] );
            this.addAnim( 'hov', 0.1, [1,1] );
            this.addAnim( 'atc', 0.1, [2,2] );
            this.addAnim( 'toogle', 0.1, [3,3]);
            // Call the parent constructor
            this.parent( x, y, settings );
        },

        update: function() {
            this.parent(); 
        },
        draw: function() {
            this.pos.x = ig.game.screen.x +this.posx;
            this.pos.y = ig.game.screen.y +this.posy;
            // Draw all entities and backgrounsdMapss
            this.parent();
            if(this.mode)
            {
            this.text = "Movement";
            this.currentAnim = this.anims.norm.rewind();
            }
            else
            {
                this.text = "Combat";
                this.currentAnim = this.anims.toogle.rewind();
            }
            this.font.draw(this.text,this.posx+32,this.posy+13,ig.Font.ALIGN.CENTER);

        },
        clicked: function(){
            this.mode = !this.mode;
            this.currentAnim = this.anims.atc.rewind();
        },
        hover: function(){
            this.currentAnim = this.anims.hov.rewind();
        }
    });
});