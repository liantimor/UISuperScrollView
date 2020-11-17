
const {ccclass, property} = cc._decorator;
@ccclass
export default class main extends cc.Component {
    goto(event: any, scene: string){
        cc.director.loadScene(scene)
    }
}
