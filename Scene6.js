class Scene6 extends Phaser.Scene {
    constructor() {
      super('kquest');
    }

    preload() {

        this.load.image('txt9', 'assets/txt/txt9.png')

        this.load.image('txt5', 'assets/txt/txt5.png')
    }
    create ()
    {
        // Cámara

        camera = this.cameras.main; 
        
        this.cameras.main.setBounds(0, 0, 1280, 1280)

        // Background 

        this.add.image(640, 640, 'fondo');

        // Player 

        player = this.physics.add.sprite(1115, 780, 'still');

        if (cursors =! undefined){
            
            cursors = this.input.keyboard.createCursorKeys();

        }

        // Background

        casasdeco = this.physics.add.staticGroup();

        this.physics.add.collider(player, casasdeco);

        casasdeco.create(640, 50, 'thb')

        casasdeco.create(1005, 1123, 'cshb')

        casasdeco.create(380, 150, 'cdhb')

        //casasdeco.create(1115, 655, 'cthb')

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

        // Llave 

        keys = this.physics.add.staticGroup()

        keys.create(100, 500, 'key')

        this.physics.add.overlap(player, keys, this.collectkey, null, this);

        keycount = 0

        // Enter heladería

        heladeriaz = this.physics.add.staticGroup();

        heladeriaz.create(1115, 655, 'cthb').refreshBody();

        this.physics.add.overlap(player, heladeriaz, this.check, null, this);

        // Timer 

        initialTime = 80

        timedEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });

        timeText = this.add.text(700, 16, '', { fontSize: '30px', fill: '#FFFFFF' });

        timeText.scrollFactorX = 0

        timeText.scrollFactorY = 0
        
    }

    update ()
    {
        camera.centerOn(player.x, player.y);

        if (gameOver) {      

            return

        }
        
        if (cursors.left.isDown) {

            player.setVelocityX(-90);

            player.anims.play('left', true);

        }

        else if (cursors.right.isDown) {

            player.setVelocityX(90);

            player.anims.play('right', true);

        }

        else if (cursors.up.isDown) {

            player.setVelocityY(-90);

            player.anims.play('back', true);

        }

        else if (cursors.down.isDown) {

            player.setVelocityY(90);

            player.anims.play('front', true);

        }

        else {

            player.setVelocityX(0);

            player.setVelocityY(0);

            player.anims.play('still', true);

        }
    }
    
    collectkey(player, keys) {

        keys.disableBody(true, true);

        keycount += 1

        if (keycount == 1) {

            timedEvent.paused = true
        }
    }
    
    check() {

        if (keycount <= 0) {

            this.physics.pause(); 

            cantgo = this.add.image(400, 250, 'txt9');

            cantgo.scrollFactorX = 0

            cantgo.scrollFactorY = 0

            cantgo.setInteractive();

            cantgo.on('pointerdown', () => this.scene.start('kquest')); 

        } if (keycount >= 1) {
            
            this.scene.start('icshop'); 
        
        }

    }

    timer() {

        if (! gameOver) {    

            initialTime = initialTime - 1; 

            timeText.setText('' + initialTime);

        }

        if (initialTime == 0) {

            timedEvent.paused = true;

            this.physics.pause()

            player.anims.play('still')

            youlost = this.add.image(400, 250, 'txt5')

            youlost.scrollFactorX = 0

            youlost.scrollFactorY = 0

            youlost.setInteractive();

            youlost.on('pointerdown', () => this.scene.start('kquest'))
            
        }
    }
}
