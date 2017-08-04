/**
 * Created by 王渣渣 on 2017/8/3.
 */
function getcl(){
    var arr = []//定义一个空的数组
    i =0;//为while循环定义i的初始值
    C = '0123456789ABCDEF';
    //定义颜色代码的字符串
    while(i++ < 6){//循环6次
        x=Math.random()*16;
        //取0-16之间的随机数给变量x
        b=parseInt(x);//取0-16之前的整数给变量b
        c=C.substr(b,1);
        //由第b（0-16之间的整数）位开始取一个字符
        arr.push(c);
        //通过6次循环得到的随机位置取得的字符组合在一起把值给到arr这个数组
    }
    var cl = "#"+ arr.join('');
    //去掉之前数组之间的逗号，前面再加一个井号，
    //这样颜色随机的颜色代码就生成了，并且把颜色代码赋值给变量cl
    return cl;//把cl的值返回给函数getcl()
}

getcl();
//输出cl测试一下结果
//下面开始给div的背景颜色赋值
function setColor(){
    var box4 = Math.floor(Math.random()*8);
    var box5 = Math.floor(Math.random()*8);
    var box6 = Math.floor(Math.random()*8);
    if (box4===box5||box4===box6) {box4++;}
    if (box5===box4||box5===box6){box5++;}
    if (box6===box4||box6===box5){box6++;}
    document.getElementsByClassName("box2")[0].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[1].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[2].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[3].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[4].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[5].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[6].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[7].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[8].style.backgroundColor= "#f60" ;
    if (box8===box9||box8===box10) {box8++;}
    if (box9===box8||box9===box10){box9++;}
    if (box10===box8||box10===box9){box10++;}
    var box8 = document.getElementsByClassName("box2")[box4].style.backgroundColor= getcl();
    var box9 = document.getElementsByClassName("box2")[box5].style.backgroundColor= getcl();
    var box10 = document.getElementsByClassName("box2")[box6].style.backgroundColor= getcl();
}
var box7;
var btnStart = document.getElementsByClassName("start")[0];
var btnStop = document.getElementById("stop");
function start(){
    box7 = setInterval(setColor,1000);
    btnStart.disabled = true;
}
function stop(){
    window.clearInterval(box7);
    btnStart.disabled = false;
    document.getElementsByClassName("box2")[0].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[1].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[2].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[3].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[4].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[5].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[6].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[7].style.backgroundColor= "#f60" ;
    document.getElementsByClassName("box2")[8].style.backgroundColor= "#f60" ;
}