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
  };
