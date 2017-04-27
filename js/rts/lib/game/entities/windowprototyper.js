ig.module(
    'game.entities.windowprototyper'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityWindowprototyper = ig.Entity.extend({
        // Set some of the properties
        collider: ig.Entity.COLLIDES.PASSIVE,
        type: ig.Entity.TYPE.B,
        size: {x: 32, y: 32},
        health: 50,
        posx:0,
        posy:0,
        sizex:7,
        sizey:7,
        windowtexsture: new ig.Image('media/window.png'),
        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'media/bt.png', 64, 32 ),
        update: function() {
            this.parent(); 
        },
        draw: function() {
            this.windowtexsture.draw(this.posx,this.posy,0,0,3,3);
            this.windowtexsture.draw(this.posx+this.sizex-3,this.posy,4,0,3,3);
            this.windowtexsture.draw(this.posx,this.posy+this.sizey-3,0,4,3,3);
            this.windowtexsture.draw(this.posx+this.sizex-3,this.posy+this.sizey-3,4,4,3,3);
            
            for(var i = 0;i < this.sizex-6;i++)
            {
                this.windowtexsture.draw(this.posx+3+i,this.posy,3,0,1,3);
                this.windowtexsture.draw(this.posx+3+i,this.posy+this.sizey-3,3,4,1,3);
            }
            for(var i = 0;i < this.sizey-6;i++)
            {
                this.windowtexsture.draw(this.posx,this.posy+3+i,0,3,3,1);
                this.windowtexsture.draw(this.posx+this.sizex-3,this.posy+3+i,4,3,3,1);
                for(var j = 0; j < this.sizex-6;j++)
                {
                    this.windowtexsture.draw(this.posx+3+j,this.posy+3+i,3,3,1,1);
                }
            }
            this.parent();
        },
        clicked: function(){
        },
        hover: function(){
        }
    });
});