ig.module(
  'game.entities.disp'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityDisp = ig.Entity.extend({
  	_wmScalable: true,
    _wmDrawBox: true,
    currentchoices: 1,
    text: '',
    _wmBoxColor: 'rgba(255, 0, 0, 0.5)',
    showoptions: false,
    print: '',
    enabled: false,
    font: new ig.Font( 'media/04b03.font.png' ),
    collides: ig.Entity.COLLIDES.NEVER,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      
    },
    trigger: function(_other,_trigger)
    {
    	if(this.showoptions == false)
    	{
    	ig.global.pcntrl = false;
    	this.showoptions = true;
    }
    },
        update: function(){
        	
        	if (this.showoptions)
        	{

        		if (ig.input.pressed('enter') && this.enabled){
                    this.showoptions = false;
                    ig.global.pcntrl = true;
        		}
                this.enabled = true;
                this.print = this.text + '\n press Enter to exit';
            }
            else
            {
                this.enabled = false;
            }
        },
        draw: function() {  
        	this.parent();
        	this.font.draw( this.print , 10, 20, ig.Font.ALIGN.LEFT );
        	this.print = '';
        }
  });
});