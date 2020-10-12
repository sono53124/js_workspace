/*
모든 인종을 아우를수있는 최상위 객체인 사람을 정의
상위 객체일 수록 보편적인 특징을 갖고 있다..(우리의 현실과 동일..)

자식에 상속시 부모객체부터 생성후 자식객체 생성
*/
class Person{
    constructor(eye,arm){
        this.eye=eye;
        this.arm=arm;
        console.log("i am supur class(person)");
        console.log("my eye %d , arm %d", this.eye,this.arm);
    }
    //행동은 함수로 표현한다.(즉 메서드 )
    walk(){
        console.log("두발로 걸어요");
    }
    speak(){
        console.log("말을 해요");
    }

}