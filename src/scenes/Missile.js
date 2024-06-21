class Missile extends Phaser.Physics.Arcade.Sprite{
    constructor(scene){
        super(scene)

        //장면 저장
        this.scene = scene

        //미사일 그룹 생성
        this.group = scene.physics.add.group({
            defaultKey:"fish",
            collideWorldBounds:true
        })

        //벽 충돌 시 소멸 처리 
        scene.physics.world.on('worldbounds', (body) => {
            body.gameObject.destory();
        })
    }

    //아래로 떨어지는 미사일
    createLinearDownMissile(target, speed){
        const missile = this.group.createMultiple({
            frameQuantity:1,
            key:'fish', //사용할 sprite 이미지
            frame:[Phaser.Math.Between(0, 9)], //사용할 frame 번호
            setXY:{x:100, y:50}
        })
        missile.forEach(element => {
            //y축 속도를 전달받은 속도로 설정해 아래로 이동 처리하고 있음
            element.setVelocityY()
        });
    }
}

export { Missile }