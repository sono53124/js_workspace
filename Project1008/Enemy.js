class Enemy extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        //부모를 먼저 초기화
        super(container,src,width,height,x,y,velX,velY);
    }
    
    tick(){
        this.x=this.x+this.velX; //기존 x위치에 속도만큼을 더해나간다
    }
    //화면에 출력
    render(){ 
        this.img.style.left=this.x+"px";
    }
}