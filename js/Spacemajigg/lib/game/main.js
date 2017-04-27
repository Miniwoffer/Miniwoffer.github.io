ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.debug.debug',

	'game.entities.player',
	'game.entities.kill',
	'game.entities.trigger',
	'game.entities.choice',
	'game.entities.disp',
	'game.entities.donothing',
	'game.entities.levelchange',
	'game.entities.moveplayer',


	'game.levels.main',
	'game.levels.cryoroom'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	gravity: 300,
	pspawn: {x: 0, y: 0},
	pcntrl: true,
	init: function() {
		pcntrl = true;
		pspawn = {x:0,y:0};
		ig.input.bind( ig.KEY.UP_ARROW, 'jump' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'duck' );
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.E, 'interact' );
		ig.input.bind( ig.KEY.ENTER, 'enter' );
		// Initialize your game here; bind keys etc.
		this.loadLevel(LevelMain);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		
		
		this.font.draw( '', 10, 10, ig.Font.ALIGN.LEFT );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 400, 250, 2 );

});
