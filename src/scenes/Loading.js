class Loading extends Phaser.Scene {
    constructor() {
        super('Loading') //식별자 설정
    }

    create(){
        //생성
        //0으로 설정하면 지정한 위치가 이미지의 좌측 상단 지점으로 설정
        const {x, y, width, height} = this.cameras.main;
        this.background = this.add.tileSprite(x, y, width, height, 'background')
        .setOrigin(0).setScrollFactor(0,1)

        const center = {
            x : x + width/2,
            y : y + height/2
        }

        //제목
        this.title = this.add.text(center.x, height*1/4, "test title")
            .setFill("#fff")
            .setFontSize(100)
            .setOrigin(0.5)
            .setDepth(999)
            .setAlign('center');
        this.tweens.add({
                targets: this.title,
                scale: 0.8,
                yoyo: true,
                repeat: 1,
                duration: 500,
            });

        this.clickToStart = this.add.text(
            center.x,
            height*3/4,
            'Click to start'
        )
        .setFill("#fff")
        .setFontSize(30)
        .setOrigin(0.5)
        .setDepth(999)
        .setAlign('center')

        this.input.once('pointerdown', () => {
            console.log("Preloader complete, starting 'Round' scene...");
            this.scene.start('Round')
        })
    }

    update(){
        //업데이트
    }
}

export { Loading }