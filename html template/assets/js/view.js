let cnv;
let r = 50;
let colors;
let subjectnames = ["수학","국어","영어"];

class Ind{
  constructor(x,y,data,colors,num){
    this.x = x;
    this.y = y;
    this.data = data;
    this.r = r;
    this.colors = colors;
    this.num = num;
    
  }
  show(){
    
    for(let i = 0; i< this.colors.length; i++){
      
      noFill();
      
      stroke(this.colors[i]);
      let a = radians(map(this.data[i],0,100,0,360));
      
      let R = (this.r)/this.colors.length*(i+1)+5;
      strokeWeight(5);
      arc(this.x,this.y,R,R,-HALF_PI,a-HALF_PI);
      
      
    }
    noStroke();
    fill(255);
    textAlign(CENTER);
    text(this.num,this.x,this.y-this.r/2-8);
  }
}
let Inds = [];
let Pop = 28;
function setup(){
    let cnv = createCanvas(700,400);
    cnv.parent('divForCanvas');
    cnv.style('position','relative');
    cnv.style('border-radius','20px');
    cnv.style('margin-left','15%');
    let h = createP("<br/><br/>한달간 공부량을 시각화하여 보여줍니다.<br/>360°는 6시간을 의미합니다");
    h.parent('divForCanvas');
    background(50,222);
    colors = [color(250,20,0),color(20,255,20),color(80,150,255)];
    for(let i = 0; i<Pop; i++){
        let dataSet = [];
        for(let j = 0; j<3; j++){
        dataSet.push(ceil(random(10))*10);
        }
    let A = new Ind((i%7)*80+50,(i-i%7)*12+70,dataSet,colors,i+1);
    Inds.push(A);
  }
  for(let i = 0; i<Inds.length; i++){
    Inds[i].show();
  }
  showC(width-100,100);
}


function showC(x,y){
  rectMode(CORNER);
  textAlign(LEFT);
  noStroke();
  for(let i = 0; i< colors.length; i++){
    fill(colors[i]);
    rect(x,y+i*20,10,10);
    text(subjectnames[i],x+20,y+i*20+10);
  }
}