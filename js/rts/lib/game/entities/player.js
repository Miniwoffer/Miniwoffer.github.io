ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function(){
    var posx;
    var posy;
    EntityPlayer = ig.Entity.extend({

        // Set some of the properties
        collides: ig.Entity.COLLIDES.ACTIVE,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.B,

        size: {x: 32, y: 32},
        health: 50,
        timer: 0,
        maxtime:0.4,
        camshake:false,
        camshakestrenght:5,
        oldskin:-2,
        skin:0,
        id:0,
        hp:100,
        mana:100,
        shieldon:true,
        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'media/brobot5000.png', 32, 32 ),
        brobot: new ig.AnimationSheet( 'media/brobot5000.png', 32, 32 ),
        normpl: new ig.AnimationSheet( 'media/player.png', 32, 32 ),
        happypl: new ig.AnimationSheet( 'media/happyplayer.png', 32, 32 ),
        guy: new ig.AnimationSheet( 'media/guy.png', 32, 32 ),
        shild: new ig.Image('media/shield.png'),
        moveboiler: function()
        {
            this.timer = this.maxtime;
            go = false;
            ig.game.turns--;
        },

        loadsheet: function(anim)
        {
            this.animSheet = anim;
            this.addAnim( 'forward', 0.1, [0,0] );
            this.addAnim( 'sidetoside', 0.1, [1,1] );
            this.addAnim( 'backwards', 0.1, [2,2] );
            this.currentAnim = this.anims.forward.rewind();
            this.currentAnim.flip.x  = false;
        },
        init: function( x, y, settings ) {
            this.loadsheet(this.normpl);
            this.posx = Math.floor(this.pos.x / 32);
            this.posy = Math.floor(this.pos.y / 32);
            // Add animations for the animation sheet
            // Call the parent constructor
            this.parent( x, y, settings );
        },
        draw: function() {
            // Draw all entities and backgrounsdMapss
            this.parent();
            if(this.shieldon)
            {
                this.shild.draw(this.pos.x - ig.game.screen.x,this.pos.y - ig.game.screen.y);
            }
        },
        update: function() {
            //checks if the player is close to the grid and snaps it to it if its close to hinder jittering
            if(this.pos.x - this.posx*32 < 2 && this.pos.x - this.posx*32 > -2)
            {
                this.pos.x = this.posx*32;
            }
            if(this.pos.y - this.posy*32 < 2 && this.pos.y - this.posy*32 > -2)
            {
                this.pos.y = this.posy*32;
            }
            // This method is called for every frame on each entity.
            // React to input, or compute the entity's AI here.
            this.timer -= ig.system.tick;
            if(this.oldskin != this.skin)
            {
                this.oldskin = this.skin;
                switch(this.skin)
                {
                    case 0:
                        this.loadsheet(this.brobot);
                        break;
                    case 1:
                        this.loadsheet(this.normpl);
                        break;
                    case 2:
                        this.loadsheet(this.happypl);
                        break;
                    case 3:
                        this.loadsheet(this.guy);
                        break;
                }
            }
            if(this.timer <= 0 || ig.game.playercur != this.id )
            {
                this.posx = Math.floor(this.pos.x / 32 + 0.5);
                this.posy = Math.floor(this.pos.y / 32 + 0.5);
                this.pos.x = this.posx*32;
                this.pos.y = this.posy*32;
            }
            if(ig.game.playercur == this.id)
            {
                ig.game.HP = this.hp;
                ig.game.Mana = this.mana;
                if(ig.game.toogleshiled)
                {
                    this.shieldon = !this.shieldon;
                    ig.game.toogleshiled = false;
                }
                if(this.timer <= 0)
                {
                    var go = true;
                    if(go){
                        if(ig.input.state('D')) {
                            this.posx++;
                            this.currentAnim = this.anims.sidetoside.rewind();
                            this.currentAnim.flip.x = false;
                            this.moveboiler();
                        }
                    }
                    if(go){
                        if( ig.input.state('A') ) {
                            this.posx--;
                            this.currentAnim = this.anims.sidetoside.rewind();
                            this.currentAnim.flip.x  = true;
                            this.moveboiler();
                        }
                    }
                    if(go){
                        if( ig.input.state('W') ) {
                            this.posy--;
                            this.currentAnim = this.anims.backwards.rewind();
                            this.currentAnim.flip.x  = false;
                            this.moveboiler();
                        }
                    }
                    if(go){
                        if( ig.input.state('S') ) {
                            this.posy++;
                            this.currentAnim = this.anims.forward.rewind();
                            this.currentAnim.flip.x  = false;
                            this.moveboiler();
                        }
                    }
                }
            }
            //setting velosity to 0
            this.vel.x = 0;
            this.vel.y = 0;

            //Doing y movement
            if(this.pos.y > this.posy*32)
            {
                this.vel.y  = -100;
            }
            else if(this.pos.y < this.posy*32)
            {
                this.vel.y = 100;
            }

            //doing x movement
            if(this.pos.x > this.posx*32)
            {
                this.vel.x  = -100;
            }
            else if(this.pos.x < this.posx*32)
            {
                this.vel.x = 100;
            }
            if(ig.game.playercur == this.id)
            {
                ig.game.screen.x = this.pos.x - ig.system.width/2;
                ig.game.screen.y = this.pos.y - ig.system.height/2;
            }
            if(this.camshake)
            {
                ig.game.screen.x += ((Math.random()*2)-1)*this.camshakestrenght;
                ig.game.screen.y += ((Math.random()*2)-1)*this.camshakestrenght;
            }
            // Call the parent update() method to move the entity
            // according to its physics
            this.parent(); 
        },
        clicked: function(){
            if(ig.game.playercur != this.id)
            {
                if(this.shieldon)
                {
                    this.hp-=10;
                }
                else
                {
                    this.hp-=1;
                    this.mana-=9;
                }
                ig.game.turns--;
            }
        },
        hover: function(){
            if(ig.game.playercur != this.id)
            {
                ig.game.cnum=1;
            }
        }
    });
});