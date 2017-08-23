/**
 * Created by 王渣渣 on 2017/8/5.
 */
var textNum = document.getElementById("text");
var btnSub = document.getElementById("btnSub");
var rangeNum = document.getElementById("range");
var btnAdd = document.getElementById("btnAdd");
var button0ne = document.getElementById("buttonOne");
// var butt = document.getElementById("butt");
var killer = document.getElementById("killer");
var killerOne = document.getElementById("killerOne");
var player = '';
rangeNum.onchange = function (rangOne) {
    textNum.value = rangeNum.value
};
textNum.onchange = function (textOne) {
    if(textNum.value<6){
        alert("人太少懒得开");
        textNum.value= 6;
    }
    else if(textNum.value>18){
        alert("人太多太累不想开");
        textNum.value= 18;
    }
    else {
        rangeNum.value = textNum.value;
    }
};
btnSub.onclick = function (btnSub) {
    textNum.value--;
    if(textNum.value<6){
        alert("人太少懒得开");
        textNum.value= 6;
    }
    else if(textNum.value>18){
        alert("人太多太累不想开");
        textNum.value= 18;
    }
    else {
        rangeNum.value = textNum.value;
    }
};
btnAdd.onclick = function (btnAdd) {
    textNum.value++;
    if(textNum.value<6){
        alert("人太少懒得开");
        textNum.value= 6;
    }
    else if(textNum.value>18){
        alert("人太多太累不想开");
        textNum.value= 18;
    }
    else {
        rangeNum.value = textNum.value;
    }
};
// function butto() {
//     butt.innerHTML = "";
// }
// butto();
function setBtn() {
    var list = document.getElementById("list");
    var z = textNum.value ;
    var killer = [];
    var people = [];
    //清空list中的内容
    list.innerHTML = "";
    //设置num.value不同范围中killer数组的长度
    if (z >= 6 && z <= 8) {
        killer.length = 1;
    }
    else if (z >= 9 && z <= 11) {
        killer.length = 2;
    }
    else if (z >= 12 && z <= 14) {
        killer.length = 3;
    }
    else if (z >= 15 && z <= 18) {
        killer.length = 4;
    }
    else {
        alert("人数超出范围,不能进行游戏哦");

    }

    //设置平民数组的长度
    people.length = z - killer.length;
    //为数组killer和people填充元素
    for (var i = 0; i < killer.length; i++) {
        killer[i] = "杀手";
    }
    for (var j = 0; j <people.length; j++) {
        people[j] = "平民";
    }
    var all = killer.concat(people);
    function shuffle(all) {
        var m = all.length;
        // console.log(all);
        var t;
        var b;
        while (m) {
            b = Math.floor(Math.random() * m--);
            t = all[m];
            all[m] = all[b];
            all[b] = t;
        }
        return all;
    }
    shuffle(all);
    player = '';
    player = "<li class='killer-box'><span class='wan'></span>" + "杀手" + killer.length + "人" + "</li>" + "<li class='killer-box'><span class='box'></span>" + "平民" + people.length + "人" + "</li>";
    list.innerHTML = player;
    console.log(player);
    all=JSON.stringify(all);
    sessionStorage.setItem("play",all);
}
function next() {
    if (player == "") {
        alert("请点击设置身份哦");
    }
    else {
        window.location.href = "../task3/task3-1.html";
    }
}








