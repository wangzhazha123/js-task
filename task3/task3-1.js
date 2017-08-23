/**
* Created by 王渣渣 on 2017/8/13.
*/
var textNum = document.getElementById("textNum");
var all = sessionStorage.getItem("play");
all = JSON.parse(all);
console.log(all);
$(function(){
    $('#hidden_en').hide();
});
var a = -1;
var j = 1;
var i = 1;
var b = 1;

// $(function(){
//     $('#click_event').click(function(){
//         if($('#hidden_enent').is(':hidden')){
//             $('#hidden_enent').show();
//             $('#hidden_en').hide();
//             if(j++ <= all.length){
//                 $('#click_event').val("查看" + (j++) + "号身份");
//             }
//             if (b++ <= all.length){
//                 $("#number").text((b++));
//             }
//             console.log(j++);
//             // console.log(b++);
//         }
//         else{
//             $('#hidden_enent').hide();
//             if(z++ <= all.length){
//                 $('#click_event').val("隐藏并传递给" + (z++) + "号");
//             }
//
//             $('#hidden_en').show();
//
//             // console.log(z++);
//         }
//     })
// })
$(function(){
    $('#click_event').click(function(){
        if($('#hidden_enent').is(':hidden')){
            $("#number").text((++b));
            $('#hidden_enent').show();
            if (j< all.length){
                $('#click_event').val("查看" + (++j) + "号身份");
            }
            else{
                window.location.href = "https://wangzhazha123.github.io/-css-task/task13/task13-3.html";
            }
            console.log(j,b);
            $('#hidden_en').hide();

        }
        else{
            $('#hidden_enent').hide();
            $('#hidden_en').show();
            if (i<all.length&&a<all.length){
                $('#click_event').val("隐藏并传递给" + (++i) + "号");
                $("#wan").text(all[++a]);
            }
            else{
                $('#click_event').val("法官查看");
            }
            console.log(j,b,a);
        }
    })
});
// if ( a< all.length){
//     for ( var a = 0; a < all.length;a++;){
//         $("#wan").text(all[a]);
//         console.log(all[a]);
//     }
// }
// $(function(){
//     if (j++ < all.length){
//         for ( var a = 0; a < all.length;a++;){
//             $("#wan").text(all[a]);
//             console.log(all[a]);
//         }
//     }
//     else{
//         window.location.href = "../task3/task2-2.html";
//     }
// })










