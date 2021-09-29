class Scene11 extends Phaser.Scene {
    constructor() {
        super('creditos');
     }
     preload(){
        this.load.image('creditos', 'assets/creditos.png')
    }

    
     create() {
        var btn = this.add.image(400, 250, 'creditos')
        btn.setInteractive()
        btn.on('pointerdown', () => this.scene.start('inicio')) 


    }

}