class Recangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    render()
    {
        console.log(this.width,this.height);
    }

}

var obj = new Recangle(13,20);
obj.render();


class colorRedRectangle extends Recangle{
    constructor(width, height, color){
        super(width,height);
        this.color = color;
    }
    show()
    {
        return "<div style='width:"+this.width+"px;height:"+this.height+"px;background:"+this.color+"'></div>"
    }
}

var obj = new colorRedRectangle(100,50,'yellow');
var obj2 = new colorRedRectangle(200,100,'red')

document.getElementById('root').innerHTML = obj.show();
document.getElementById('root2').innerHTML = obj2.show();
