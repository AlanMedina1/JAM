class Scene2 extends Phaser.Scene {
    constructor() {
      super('nivel2');
    }

    preload() {

        this.load.image('humberto', 'assets/humberto.png')
        this.load.image('txt7', 'assets/txt/txt7.png')
        this.load.image('txt8', 'assets/txt/txt8.png')

        this.load.audio ('CancionNivel3', 'assets/sounds/CANCIONES/Cancion_Nivel_03.mp3')
        this.load.audio ('Linea9', 'assets/sounds/AUDIO INTRO 2/Linea_9.mp3')
    }

    create ()
    {

        this.musicniv3 = this.sound.add('CancionNivel3')

        musicConfig ={
           mute: false,
           volume:0.3,
           rate: 1,
           detune: 0,
           seek: 0,
           loop: true,
           delay: 0
       }
       
        this.musicniv3.play(musicConfig)
        // Cámara

        camera = this.cameras.main; 
        
        this.cameras.main.setBounds(0, 0, 1280, 1280)

        // Background 

        this.add.image(640, 640, 'fondo');

        // Player 

        player = this.physics.add.sprite(30, 640, 'still');

        if (cursors =! undefined){
            
            cursors = this.input.keyboard.createCursorKeys();
        }

        // Casa 2

        casasdeco = this.physics.add.staticGroup();

        this.physics.add.collider(player, casasdeco);

        casasdeco.create(640, 50, 'thb')

        casasdeco.create(1005, 1123, 'cshb')

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

        // Heladeria

        heladeria = this.physics.add.staticGroup();

        heladeria.create(1093, 750, 'humberto').refreshBody();

        this.physics.add.overlap(player, heladeria, this.enterhela, null, this);
        
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

    enterhela(){

        this.physics.pause();

        player.anims.play('still', true); 

        enter = this.add.image(400, 250, 'txt7') && this.sound.play('Linea9'); 

        enter.scrollFactorX = 0

        enter.scrollFactorY = 0

        enter.setInteractive()

        enter.on('pointerdown', () => this.enteryes())

    }

    enteryes(){

        enteryes = this.add.image(400, 250, 'txt8') 

        enteryes.setInteractive()
        
        enteryes.on('pointerdown', () => this.scene.start('kquest') );

        enteryes.scrollFactorX = 0

        enteryes.scrollFactorY = 0    
    
    }
}