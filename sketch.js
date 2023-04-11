var dvd={
    x:100,
    y:100,
    xs:{
        magnitude:10,
        polarity:1,
    },
    ys:{
        magnitude:10,
        polarity:1
    },
    w:100,
    h:100,
    move:function(){
        this.xs,magnitude=map(mouseY, 0, 480,-30,-30)

        if (this.x>width-this.w||this.x<0){
            this.xs.polarity*=-1;
        }
        this.x+=this.xs.magnitude*this.xs.polarity;
        
        this.ys.magnitude=map(mouseY,0,480,-30,30)

        if(this.y>height-this.h||this.y<0){
            this.ys.polarity*=-1;
        }
        this.y+=this.ys.magnitude*this.ys.polarity;

    },
    draw:function(){
        push();
        translate(this.x);
        rotate(frameCount);
        rect(0,0,this.w,this.h);
        pop();
    }
};

var dvd2={
    x:450,
    y:100,
    xs:{
        magnitude:10,
        polarity:1,
    },
    ys:{
        magnitude:10,
        polarity:1
    },
    w:100,
    h:100,
    move:function(){
        this.xs.magnitude=map(mouseX,0,720,-30,30);

        if (this.x>width-this.w||this.x<0){
            this.xs.polarity*=-1;
        }
        this.x+=this.xs.magnitude*this.xs.polarity;
        
        this.ys.magnitude=map(mouseX,0,720,-30,30);

        if(this.y>height-this.h||this.y<0){
            this.ys.polarity*=-1;
        }
        this.y+=this.ys.magnitude*this.ys.polarity;
       
    },
    draw:function(){
        rect(this.x,this.y,this.w,this.h,);
    }
};
var speedSlider;

function setup(){
    createCanvas(1920,480);
    speedSlider=createSlider(-30,30,0);
    dvd2.x=random(width-dvd2.w);
    dvd2.y=random(height-dvd2.h);
}


function draw(){
    background("#87CEEB");
    dvd2.draw();
    dvd2.move();
};