ig.module(
    'game.entities.window'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityWindow = ig.Entity.extend({
        // Set some of the properties
        collider: ig.Entity.COLLIDES.PASSIVE,
        type: ig.Entity.TYPE.B,
        size: {x: 32, y: 32},
        health: 50,
        posx:0,
        posy:0,
        sizex:7,
        sizey:7,
        windowtexsture: new ig.Image('media/wnd.png'),
        // Load an animation sheet
        update: function() {
            this.parent(); 
        },
        draw: function() {
            this.windowtexsture.draw(this.posx,this.posy);
            this.parent();
        },
        clicked: function(){
        },
        hover: function(){
        }
    });
});