/*충돌체크를 학습하기 위한 박스 객체 정의*/
class Box{
    constructor(bg,x,y){
        this.div=document.createElement("div");
        this.bg=bg; //인스턴스의 색상 결정
        this.x=x;
        this.y=y;
        this.width=100;
        this.height=100;

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.bg;        
        
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.color="white"//글씨색상


        document.body.appendChild(this.div);
    }
}