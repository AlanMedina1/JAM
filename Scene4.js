class Scene4 extends Phaser.Scene {
    constructor() {
      super('test');
    }

    preload() {

        this.load.image('piba', 'assets/nivel1/pibita.png')
        this.load.image('juancho', 'assets/nivel1/juancho.png')
        this.load.image('white', 'assets/nivel1/whitecop.png')
        this.load.image('coin', 'assets/nivel1/moneda.png')
        this.load.image('txt4', 'assets/txt/txt4.png')
        this.load.image('txt5', 'assets/txt/txt5.png')
        this.load.image('txt6', 'assets/txt/txt6.png')

        this.load.image('tilesfondo1', 'assets/forest_tiles.png')
        this.load.image('tilesfondo2', 'assets/pasto.png')
        this.load.tilemapTiledJSON('tilemapBosque', 'assets/MapaBosque.json')
        this.load.tilemapTiledJSON('tilemap', 'assets/MainMejorado.json')

        //cancion
        this.load.audio ('CancionNivel2', 'assets/sounds/CANCIONES/Cancion_Nivel_02.mp3')
        this.load.audio ('Linea8', 'assets/sounds/AUDIO INTRO 2/Linea_8.mp3'); 
    }

    create() {
        this.musicniv2 = this.sound.add('CancionNivel2')

        musicConfig ={
           mute: false,
           volume:0.3,
           rate: 1,
           detune: 0,
           seek: 0,
           loop: true,
           delay: 0
       }
       
        this.musicniv2.play(musicConfig)
        // Cámara

        camera = this.cameras.main; 
        
        this.cameras.main.setBounds(0, 0, 1440, 1440)

        // Mapa 

        map = this.make.tilemap({ key: 'tilemapBosque' });
 
        tileset1 = map.addTilesetImage('forest_tiles', 'tilesfondo1');
 
        tileset2 = map.addTilesetImage('pasto', 'tilesfondo2')
 
        layerfondobosque1 = map.createLayer('Fondo1', tileset2, 0, 0);
 
        layerfondobosque2 = map.createLayer('FondoCollidersBosque', tileset1, 0, 0);

        // Player

        player = this.physics.add.sprite(500, 800, 'still');

        this.physics.add.collider(player, farmacia);

        if (cursors =! undefined){
            
            cursors = this.input.keyboard.createCursorKeys();
        }


        //tilemap collider
 
        layerfondobosque2.setCollisionByProperty({collides: true})

        this.physics.add.collider(player, layerfondobosque2);


        // Coins 

        coinall = this.physics.add.group()

        coinall.create(320, 300, 'coin')

        coinall.create(850, 50, 'coin')

        coinall.create(500, 1250, 'coin')

        coinall.create(1200, 1050, 'coin')

        coinall.create(1150, 250, 'coin')

        this.physics.add.overlap(player, coinall, this.collectcoin, null, this);

        coincount = 0

        // Timer

        initialTime = 80

        timedEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });

        timeText = this.add.text(700, 16, '', { fontSize: '30px', fill: '#FFFFFF' });

        timeText.scrollFactorX = 0

        timeText.scrollFactorY = 0

    }

    update() {

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

    collectcoin(player, coinall) {

        coinall.disableBody(true, true);

        coincount += 1

        if (coincount == 5) {

            timedEvent.paused = true;

            crowded = this.physics.add.staticGroup();
            
            crowded.create(50, 380, 'white');

            this.physics.add.overlap(player, crowded, this.coptalk, null, this);

        }
    }

    coptalk() {

        coptalkie = this.add.image(400, 250, 'txt4')

        this.physics.pause()

        coptalkie.setInteractive() && this.sound.play('Linea8');

        coptalkie.scrollFactorX = 0 

        coptalkie.scrollFactorY = 0

        coptalkie.on('pointerdown', () => this.coptalkietalk())

        
    }

    coptalkietalk() { 

        var coptalkiex = this.add.image(400, 250, 'txt6') 

        this.physics.pause()

        coptalkiex.setInteractive();

        coptalkiex.scrollFactorX = 0

        coptalkiex.scrollFactorY = 0

        coptalkiex.on('pointerdown', () => this.scene.start('nivel2'))

    }

    timer() {

        if (! gameOver) {    

            initialTime = initialTime - 1; 
           
            timeText.setText('' + initialTime);

        }

        if (initialTime == 0) {

            timedEvent.paused = true;

            this.physics.pause() && this.musicniv2.stop(musicConfig)

            player.anims.play('still')

            youlost = this.add.image(400, 250, 'txt5')

            youlost.scrollFactorX = 0

            youlost.scrollFactorY = 0

            youlost.setInteractive();

            youlost.on('pointerdown', () => this.scene.start('test'))
            
        }
    }
}