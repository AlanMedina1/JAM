class Scene8 extends Phaser.Scene {
    constructor() {
      super('path');
    }

    preload(){

        this.load.image('pathbg', 'assets/test1.png')
        this.load.image('enterph', 'assets/hitboxes/enterph.png')
        this.load.image('techoph', 'assets/hitboxes/techoph.png')

        this.load.spritesheet('playerx', 'assets/playerx.png', { frameWidth: 40, frameHeight: 40});
    }

    create ()
    {

        this.anims.create({

            key: 'leftx',

            frames: this.anims.generateFrameNumbers('playerx', { start: 0, end: 1 }),

            frameRate: 10,

            repeat: -1

        });

        this.anims.create({

            key: 'frontx',

            frames: this.anims.generateFrameNumbers('playerx', { start: 2, end: 4 }),

            frameRate: 10,

            repeat: -1 

        });

        this.anims.create({

            key: 'rightx',

            frames: this.anims.generateFrameNumbers('playerx', { start: 8, end: 9 }),

            frameRate: 10,

            repeat: -1

        });

        this.anims.create({

            key: 'backx',

            frames: this.anims.generateFrameNumbers('playerx', { start: 5, end: 7 }),

            frameRate: 10,

            repeat: -1

        });

        this.anims.create({

            key: 'stillx',

            frames: [ { key: 'playerx', frame: 4 } ],

            frameRate: 20, 

            //repeat: 0

        });

        // Cámara

        camera = this.cameras.main; 
        
        this.cameras.main.setBounds(0, 0, 1280, 1280)

        // Background 

        this.add.image(640, 640, 'pathbg');

        // Player 

        player = this.physics.add.sprite(1115, 780, 'stillx');

        if (cursors =! undefined){
            
            cursors = this.input.keyboard.createCursorKeys();

        }

        // Background

        casasdeco = this.physics.add.staticGroup();

        this.physics.add.collider(player, casasdeco);

        casasdeco.create(640, 50, 'thb')

        casasdeco.create(1005, 1100, 'techoph')

        casasdeco.create(380, 150, 'cdhb')

        casasdeco.create(1115, 655, 'cthb')

        casasdeco.create(540, 485, 'cflhb')

        casasdeco.create(650, 452, 'cfrhb')

        casasdeco.create(1040, 160, 'cchb')

        casasdeco.create(635, 850, 'cchb')

        casasdeco.create(128, 290, 'tree')

        casasdeco.create(20, 318, 'tree')

        casasdeco.create(93, 380, 'tree')

        casasdeco.create(22, 475, 'tree')

        casasdeco.create(160, 770, 'tree')

        casasdeco.create(95, 865, 'tree')

        casasdeco.create(160, 960, 'tree')

        casasdeco.create(255, 990, 'tree')

        casasdeco.create(145, 415, 'treet')

        casasdeco.create(110, 705, 'treet')

        casasdeco.create(815, 1250, 'treet')

        casasdeco.create(768, 250, 'treed')

        casasdeco.create(1215, 410, 'treed')

        casasdeco.create(575, 1245, 'treed')

        casasdeco.create(1230, 1234, 'exe')

        casasdeco.create(85, 100, 'exe2')

        casasdeco.create(190, 85, 'exe2')

        casasdeco.create(120, 1140, 'exe3')

        casasdeco.create(1200, 75, 'exe4')

        casasdeco.create(290, 1190, 'exe5')

        casasdeco.create(360, 1230, 'exe6')

        casasdeco.create(420, 1245, 'tree')

        // Farmacia

        pharmacy = this.physics.add.staticGroup();

        pharmacy.create(1005, 1170, 'enterph')

        this.physics.add.overlap(player, pharmacy, this.enterpharm, null, this);
        
    }

    update ()
    {
        camera.centerOn(player.x, player.y);

        if (gameOver) {      

            return

        }
        
        if (cursors.left.isDown) {

            player.setVelocityX(-90);

            player.anims.play('leftx', true);

        }

        else if (cursors.right.isDown) {

            player.setVelocityX(90);

            player.anims.play('rightx', true);

        }

        else if (cursors.up.isDown) {

            player.setVelocityY(-90);

            player.anims.play('backx', true);

        }

        else if (cursors.down.isDown) {

            player.setVelocityY(90);

            player.anims.play('frontx', true);

        }

        else {

            player.setVelocityX(0);

            player.setVelocityY(0);

            player.anims.play('stillx', true);

        }
    }

    enterpharm() {

        this.physics.pause(); 

        instructions1 = this.add.image(400, 250, 'enter'); 

        instructions1.scrollFactorX = 0 
    
        instructions1.scrollFactorY = 0 

        instructions1.setInteractive(); 

        instructions1.on('pointerdown', () => this.scene.start('pharmacy'))
    }
}