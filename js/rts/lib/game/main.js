ig.module( 
    'game.main' 
)
.requires(
    'impact.game',
    'impact.font',

    'game.entities.player',
    'game.entities.part',
    'game.entities.button',
    'game.entities.cbt',
    'game.entities.pointer',


    'game.levels.level1'

)
.defines(function(){
    var themesong;
    MyGame = ig.Game.extend({
        // Load a font
        parts: 0,
        currentplayer: "default",
        currentskin: 1,
        playercur: 0,
        turns:10,
        timeoutp:0,
        font: new ig.Font( 'media/04b03.font.png' ),
        overlay: new ig.Image("media/bc.png"),
        toogleshiled:false,
        paused:false,
        HP:100,
        Mana:100,
        Bar: new ig.Image("media/bar.png"),
        cimg: new ig.Image("media/Cursor.png"),
        cnum:0,
        init: function() {
            ig.system.cour
            parts = 0;
            //Input binding
            ig.input.bind(ig.KEY.W, "W");
            ig.input.bind(ig.KEY.A, "A");
            ig.input.bind(ig.KEY.S, "S");
            ig.input.bind(ig.KEY.D, "D");
            ig.input.bind(ig.KEY.SPACE, "Space");
            ig.input.bind(ig.KEY.MOUSE1,"mouse1");


            //loading songs
            themesong = new ig.Sound( 'media/theme.ogg');
            pickupsound = new ig.Sound( 'media/pick.ogg');


            //Starting game
            //themesong.play();
            this.loadLevel(LevelLevel1);
        },
        nextplayer:function()
        {
            this.playercur++;
            if(this.playercur == 4)
                this.playercur=0;

        },
        update: function() {
            if(this.turns <= -1)
            {
                this.nextplayer();
                this.turns = 10;
                this.paused = true;
            }
            // Update all entities and backgroundMaps
            if(this.paused)
            {
                this.timeoutp++;
                console.log(this.timeoutp);
                if(this.timeoutp > 10)
                {
                    this.paused = false;
                    this.timeoutp = 0;
                }
                return;
            }
            this.parent();
            // Add your own, additional update code here
        },

        draw: function() {
            // Draw all entities and backgroundMaps
            var x = ig.system.width/2,
                y = ig.system.height/2;
            this.parent();
            this.font.draw(this.turns + " turns left",40,10,ig.Font.ALIGN.CENTER);
            this.Bar.draw(351,5,0,0,64,16);
            this.Bar.draw(351,25,0,0,64,16);
            this.Bar.draw(351,5,64,0,0.64*this.HP,16);
            this.Bar.draw(351,25,128,0,0.64*this.Mana,16);
            if(this.paused)
            {
                this.overlay.draw(0,0);
                //this.font.draw("Next players turn, Press space to continue", x,y,ig.Font.ALIGN.CENTER);
            }
            this.cimg.draw(ig.input.mouse.x,ig.input.mouse.y,16*this.cnum,0,16,16);
            this.cnum = 0;
        },
        
    });

    // Start the Game with 60fps, a resolution of 320x240, scaled
    // up by a factor of 2
    ig.main( '#canvas', MyGame, 60, 420, 240, 2 );

});
