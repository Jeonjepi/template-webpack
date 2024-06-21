import { Scene } from 'phaser';
class Preloader extends Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.#background();
        this.#effects();
        this.#missiles();
        this.#shooter();
    }

    #background() {
        this.load.path = 'assets/background/';
        this.load.image('background', 'background.png')
        this.load.spritesheet('fish', 'fish.png', { frameWidth: 33, frameHeight: 70 })
        this.load.spritesheet('MonsterDefault', 'move-fs8.png', { frameWidth: 90, frameHeight: 118 });
        this.load.spritesheet('slime', 'slime.png', { frameWidth: 33, frameHeight: 21 })
    
    }

    #effects() {
        this.load.path = 'assets/effects/';
        this.load.image('effect1', 'spaceEffects_014.png')
        this.load.image('effect2', 'spaceEffects_015.png')
        this.load.image('effect3', 'spaceEffects_016.png')

    }

    #missiles() {
        this.load.path = 'assets/missiles/';
        this.load.image('laser', 'laserRed01.png')
        this.load.image('missiles', 'spaceMissiles_018.png')
    }

    #shooter() {
        this.load.path = 'assets/shooter/';
        this.load.image('PlayerDefault', 'playerShip2_red.png')
        this.load.image('player2', 'playerShip3_green.png')
        this.load.image('player3', 'playerShip3_orange.png')
    }

    #createAnimation() {
        this.anims.create({
            key: 'fishMove',
            frames: this.anims.generateFrameNumbers('fish', { start: 0, end: 12 }),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'guest08Move',
            frames: this.anims.generateFrameNumbers('guest_08_move', {
                start: 0,
                end: 20,
            }),
            frameRate: 15,
            repeat: -1,
        });
        this.anims.create({
            key: 'slimeMove',
            frames: this.anims.generateFrameNumbers('slime', { start: 0, end: 12 }),
            frameRate: 4,
            repeat: -1
        });
        
    }

    create() {
        this.#createAnimation();
        this.scene.start('Loading');
    }
}

export { Preloader };