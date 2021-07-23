function kakuninn(){
    if (confirm("移動しますか？")){
        alert("移動しました。");
    }
    else{
        alert("キャンセルしました。")
    }
}

window.onload = function() {
    Particles.init({
      selector: '.background',
      sizeVariations: 20,
      color: [
        '#000', 'rgba(204,0,0,.225)', 'rgba(0,187,221,.2)'
      ]
    });
} ;

var pics_src = new Array("./img/th.jfif","./img/Dead-by-Deadlight.jpg","./img/z_5dd752e3237a7.jpg");
var num = -1;
 
slideshow_timer();

function slideshow_timer(){
    if (num == 2){
        num = 0;
    } 
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
    setTimeout("slideshow_timer()",1000); 
}