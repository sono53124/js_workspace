/*총알을 정의한다*/
class Bullet{
    //총알이 태어날때 부여할 속성들을 생성자에서 처리한다..
    constructor(src,x,y,width,height,velX,velY){
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
    
        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        wrapper.appendChild(this.img);

    }
    tick(){
        this.y+=this.velY;
    }
    render(){
        //변화된 물리량을 화면에 표시한다(그래픽처리)
        this.img.style.top=this.y+"px";
    }
}
