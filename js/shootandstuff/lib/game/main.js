ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'game.entities.player',
	'game.entities.bullet',
	'game.entities.enemy',

	'game.levels.main'	
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	score: 0,
	running: true,
	over: false,
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		ig.input.bind(ig.KEY.W, 'up');
		ig.input.bind(ig.KEY.A, 'right');
		ig.input.bind(ig.KEY.S, 'down');
		ig.input.bind(ig.KEY.D, 'left');

		ig.input.bind(ig.KEY.SPACE, 'pause');

		ig.input.bind(ig.KEY.MOUSE1, 'shoot');
		ig.input.initMouse();
		this.loadLevel(LevelMain);
		// Initialize your game here; bind keys etc.
	},
	
	update: function() {
		if(this.over)
		{
			if(ig.input.pressed('pause'))
    	{
    		this.over = false;
    		this.loadLevel(LevelMain);
    		this.score = 0;
    	}
    	return;
		}
		if(ig.input.pressed('pause'))
    	{
    		if(this.running)
    		{
    			//ig.system.stopRunLoop.call(ig.system);
    			this.running = false;
    		}
    		else
    		{
    			//ig.system.startRunLoop.call(ig.system);
    			this.running = true;
    		}
    	}
    	if (!this.running)
    	{
    		return;
    	}
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
				var x = ig.system.width/2,
			y = ig.system.height/2;
		if(!this.running)
		{
		this.font.draw( '-paused-', x, y, ig.Font.ALIGN.CENTER )
		}
		if(this.over)
		{
		this.font.draw( '-game over-', x, y, ig.Font.ALIGN.CENTER )
		this.font.draw( 'press "space" to try agien', x, y-10, ig.Font.ALIGN.CENTER )
		}
		// Add your own drawing code heres
		this.font.draw( 'Score:' + this.score, 30, 30, ig.Font.ALIGN.LEFT );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 600, 600, 1 );

});
