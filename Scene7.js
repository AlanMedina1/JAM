class Scene7 extends Phaser.Scene {
    constructor() {
      super('icshop');
    }

    preload() {

        this.load.image('fon2', 'assets/heladeriainx.png')

        this.load.image('mhb', 'assets/hitboxes/mesa.png')

        this.load.image('hhb', 'assets/hitboxes/mostrador.png')

        this.load.image('candyman', 'assets/heladero.png')

        this.load.image('txt10', 'assets/txt/txt10.png')

        this.load.image('txt11', 'assets/txt/txt11.png')
    }

    create() {

        // Cámara

        camera = this.cameras.main; 
        
        this.cameras.main.setBounds(0, 0, 916, 500)

        // Fondo

        this.add.image(458, 250, 'fon2')

        // Player

        player = this.physics.add.sprite(905, 235, 'still');

        player.setScale(1.2)

        this.physics.add.collider(player, farmacia);

        if (cursors =! undefined){
            
            cursors = this.input.keyboard.createCursorKeys();
        }

        // Mesas

        mesas = this.physics.add.staticGroup(); 

        this.physics.add.collider(player, mesas);

        mesas.create(418, 90, 'mhb')

        mesas.create(642, 90, 'mhb')

        mesas.create(642, 380, 'mhb')

        mesas.create(418, 380, 'mhb')

        mesas.create(160, 238, 'hhb')

        // Señor

        candyman = this.physics.add.staticGroup()

        candyman.create(230, 238, 'candyman')

        this.physics.add.overlap(player, candyman, this.candytalk, null, this);

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

    candytalk(){

        this.physics.pause(); 
    
        instructions1 = this.add.image(400, 250, 'txt10'); 
    
        instructions1.scrollFactorX = 0 
        
        instructions1.scrollFactorY = 0 
    
        instructions1.setInteractive(); 
    
        instructions1.on('pointerdown', () => this.candytalk2() )
        
    }

    candytalk2() {

        var instructions2 = this.add.image(400, 250, 'txt11'); 
    
        instructions2.scrollFactorX = 0 
        
        instructions2.scrollFactorY = 0 
    
        instructions2.setInteractive(); 
    
        instructions2.on('pointerdown', () => this.scene.start('path'))
    }

}