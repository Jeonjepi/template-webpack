import { Enemy } from "./Enemy";
import { Player } from "./Player";

class Round extends Phaser.Scene{
    constructor(){
        super('Round');
    }
    create(){
        
        const {x, y, width, height} = this.cameras.main;
        this.background = this.add.tileSprite(x, y, width, height, 'background')
        //0으로 설정하면 지정한 위치가 이미지의 좌측 상단 지점으로 설정
        .setOrigin(0).setScrollFactor(0,1)

        const center = {
            x: x+width/2,
            y:y+height/2
        }

        
        this.player = new Player(this, center.x, height * 4/5);
        this.enemy = new Enemy(this, center.x, height*1/5, this.player);

        // console.log("Adding enemy sprite...");
        // this.enemy = this.add.sprite(center.x, height * 1 / 5)
        //     .play('fishMove')
        //     .setDepth(5);
        // console.log("Enemy sprite added and animation started.");

        // this.player = this.add.image(center.x, height*4/5, 'player1')
        // // this.player2 = this.add.sprite(center.x, height*1/5, 'fish').play("fishMove")

        // console.log("Adding enemy sprite...");
        // this.enemy = this.add.sprite(center.x, height * 1 / 5);
        // console.log("Playing animation...");
        // this.enemy.play('guest08Move')
        //     .setDepth(5);
        // console.log("Enemy sprite added and animation started.");

        // console.log("Adding enemy sprite...");
        // this.test = this.add.sprite(center.x, height * 2 / 5);
        // console.log("Playing animation...");
        // this.test.play('fishMove')
        //     .setDepth(5);
        // console.log("Enemy sprite added and animation started.");

    }
}

export {Round}