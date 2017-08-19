/**
* Created by 王渣渣 on 2017/8/13.
*/
var textNum = document.getElementById("textNum");
var all = sessionStorage.getItem("play");
all = JSON.parse(all);
console.log(all);
$(function(){
    $('#hidden_en').hide();
})
var j = 2;
var i = 2;
// var a = 1;
var b = 3;
$(function(){
    $('#click_event').click(function(){
        if($('#hidden_enent').is(':hidden')){
            $('#hidden_enent').show();
            $('#hidden_en').hide();
            $('#click_event').val("查看" + (j++) + "号身份");
            $("#number").text((b++));
        }
        else{
            $('#hidden_enent').hide();
            $('#hidden_en').show();
            $('#click_event').val("隐藏并传递给" + (i++) + "号");

        }
    })
})
$(function(){
    if (j++ < all.length){
        for ( a = 0; a < all.length; a++)
        $("#wan").text(all[a]);
    }
    else{
        window.location.href = "../task3/task2-2.html";
    }
})










