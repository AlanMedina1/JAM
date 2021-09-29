class Scene5 extends Phaser.Scene {
    constructor() {
      super('nivel1');
    }

    preload() {

        this.load.image('piba', 'assets/nivel1/pibita.png')
        this.load.image('juancho', 'assets/nivel1/juancho.png')
        this.load.image('whitex', 'assets/nivel1/whitecopx.png')
        this.load.image('sista', 'assets/nivel1/sister.png')
        this.load.image('muerto', 'assets/nivel1/muerto.png')
        this.load.image('chb', 'assets/hitboxes/crowd.png')
        this.load.image('txt1', 'assets/txt/txt1.png')
        this.load.image('txt2', 'assets/txt/txt2.png')
        this.load.image('txt3', 'assets/txt/txt3.png')

        // Hitboxes

        this.load.image('one', 'assets/nivel1/hb/one.png')
        this.load.image('two', 'assets/nivel1/hb/two.png')
        this.load.image('three', 'assets/nivel1/hb/three.png')
        this.load.image('four', 'assets/nivel1/hb/four.png')
        this.load.image('uno', 'assets/nivel1/hb/uno.png')
        this.load.image('do', 'assets/nivel1/hb/do.png')
        this.load.image('tre', 'assets/nivel1/hb/tre.png')
        this.load.image('cuatro', 'assets/nivel1/hb/cuatro.png')
        this.load.image('i', 'assets/nivel1/hb/i.png')
        this.load.image('know', 'assets/nivel1/hb/know.png')
        this.load.image('you', 'assets/nivel1/hb/you.png')
        this.load.image('want', 'assets/nivel1/hb/want.png')
        this.load.image('me', 'assets/nivel1/hb/me.png')
        this.load.image('u', 'assets/nivel1/hb/u.png')

        // Mapa

        this.load.image('tilesfondo1', 'assets/forest_tiles.png')
        this.load.image('tilesfondo2', 'assets/pasto.png')
        this.load.tilemapTiledJSON('tilemapBosque', 'assets/MapaBosque.json')
        this.load.tilemapTiledJSON('tilemap', 'assets/MainMejorado.json')

        //Canciones
        this.load.audio ('CancionNivel1', 'assets/sounds/CANCIONES/Cancion_Nivel_01.mp3') 
        this.load.audio ('Linea4', 'assets/sounds/AUDIO INTRO 2/Linea_4.mp3');
        this.load.audio ('Linea5', 'assets/sounds/AUDIO INTRO 2/Linea_5.mp3');
        this.load.audio ('Linea7', 'assets/sounds/AUDIO INTRO 2/Linea_7.mp3');
       
    }

    create() {
        this.music = this.sound.add('CancionNivel1')

     musicConfig ={
        mute: false,
        volume:0.3,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
    }
    
     this.music.play(musicConfig)

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

        this.add.image(750, 120, 'muerto')


        //tilemap collider
 
        layerfondobosque2.setCollisionByProperty({ collides: true})

        this.physics.add.collider(player, layerfondobosque2);


        // Crowd 

        crowd = this.physics.add.staticGroup()

        crowd.create(320, 300, 'piba')

        crowd.create(280, 320, 'juancho')

        crowd.create(360, 320, 'whitex')

        var chb = this.physics.add.staticGroup()

        chb.create(320, 310, 'chb')

        this.physics.add.overlap(player, chb, this.intercrowd, null, this);


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

    intercrowd() {

        this.physics.pause(); 

        instructions1 = this.add.image(400, 250, 'txt1'); 

        instructions1.scrollFactorX = 0 
    
        instructions1.scrollFactorY = 0 

        instructions1.setInteractive() && this.sound.play('Linea4'); 

        instructions1.on('pointerdown', () => this.txtpt2())
    }

    txtpt2() {

        this.physics.pause() ; 

        var instructions2 = this.add.image(400, 250, 'txt2'); 

        instructions2.scrollFactorX = 0 
    
        instructions2.scrollFactorY = 0 

        instructions2.setInteractive() && this.sound.play('Linea5'); 

        instructions2.on('pointerdown', () => this.txtpt3())

    }

    txtpt3() {

        this.physics.pause(); 

        var instructions3 = this.add.image(400, 250, 'txt3'); 

        instructions3.scrollFactorX = 0 
    
        instructions3.scrollFactorY = 0 

        instructions3.setInteractive() && this.sound.play('Linea7'); 

        instructions3.on('pointerdown', () => this.scene.start('test') && this.music.stop(musicConfig))
    }
}