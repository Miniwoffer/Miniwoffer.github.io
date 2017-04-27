ig.module(
  'game.entities.choice'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityChoice = ig.Entity.extend({
  	_wmScalable: true,
    _wmDrawBox: true,
    target: {},
    currentchoices: 1,
    texsts: {},
    _wmBoxColor: 'rgba(255, 0, 0, 0.5)',
    showoptions: false,
    print: '',
    font: new ig.Font( 'media/04b03.font.png' ),
    collides: ig.Entity.COLLIDES.NEVER,
    o: null,
    p: null,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      
    },
    trigger: function(_other,_trigger)
    {
    	if(ig.global.pcntrl == true)
    	{
    	o = _other;
    	if(this.showoptions == false)
    	{
    	this.print = 'Press E to interact.';
    	if( ig.input.pressed('interact') ) {
    	ig.global.pcntrl = false;
    	this.showoptions = true;
    }
    }

    }
    },
        update: function(){
        	
        	if (this.showoptions)
        	{
        		var i = 0;
        		this.print += 'options: \n'
        		for(var t in this.texsts){
        			if (t == this.currentchoices){
        				this.print += '>'
        		if (ig.input.pressed('enter')){
        		var ent = ig.game.getEntityByName(this.target[t]);
        		if( ent && typeof(ent.trigger) == 'function' ) {
    			console.log('triggerapprowed');
    			this.showoptions = false;
    			ent.trigger( o, this );
    			}
    			console.log('trigger');
        		}
        			}
        			else
        			{
        				this.print += '-'
        			}
        			this.print += this.texsts[t];
        			this.print += '\n';
        			i++;
        		}
        	if( ig.input.pressed('jump') ) {
        		if(this.currentchoices > 1)
        		{
        			this.currentchoices -= 1;
        			console.log('upapprowed');
        		}
        		        		console.log('up');
        	}
        	else if( ig.input.pressed('duck') ) {
        		if(this.currentchoices < i)
        		{
        			this.currentchoices += 1;
        			console.log('downpapprowed');
        		}
        		console.log('down');
        	}
        	}
        },
        draw: function() {
        	this.parent();
        	this.font.draw( this.print , 10, 20, ig.Font.ALIGN.LEFT );
        	this.print = '';
        }
  });
});