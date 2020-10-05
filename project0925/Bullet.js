/*총알을 정의한다*/

class Bullet{
    constructor(container,width,height,x,y,velX){
        this.x=x;//총알의 x좌표
        this.y=y;//총알의 y좌표
        this.velX=velX;//총알의 속도를 결정지을 변수
        this.img=document.createElement("img");
        this.img.src="../images/shooting/ball.png";
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        container.appendChild(this.img);
    }
    move(){
        this.x+=this.velX;
        this.img.style.left=this.x+"px";
    }
}