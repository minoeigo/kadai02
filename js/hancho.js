$(".cho").on("click", function () {
const random = Math.floor(Math.random() * 6) + 1;
console.log(random);
if(random == 1){
    console.log("1")
    $(".sai_img").attr('src', 'img/1.png');
    $("h1").text("半！あんたの負けや");
    alterLife(-10);
}else if(random == 2){
    console.log("2")
    $(".sai_img").attr('src', 'img/2.png');
    $("h1").text("丁！あんたの勝ちや");
    alterLife(10);
}else if(random == 3){
    console.log("3")
    $(".sai_img").attr('src', 'img/3.png');
    $("h1").text("半！あんたの負けや");
    alterLife(-10);
}else if(random == 4){
    console.log("4")
    $(".sai_img").attr('src', 'img/4.png');
    $("h1").text("丁！あんたの勝ちや");
    alterLife(10);
}else if(random == 5){
    console.log("5")
    $(".sai_img").attr('src', 'img/5.png');
    $("h1").text("半！あんたの負けや");
    alterLife(-10);
}else if(random == 6){
    console.log("6")
    $(".sai_img").attr('src', 'img/6.png');
    $("h1").text("丁！あんたの勝ちや");
    alterLife(10);
}
});

$(".han").on("click", function () {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    if(random == 1){
        console.log("1")
        $(".sai_img").attr('src', 'img/1.png');
        $("h1").text("半！あんたの勝ちや");
        alterLife(10);
    }else if(random == 2){
        console.log("2")
        $(".sai_img").attr('src', 'img/2.png');
        $("h1").text("丁！あんたの負けや");
        alterLife(-10);
    }else if(random == 3){
        console.log("3")
        $(".sai_img").attr('src', 'img/3.png');
        $("h1").text("半！あんたの勝ちや");
        alterLife(10);
    }else if(random == 4){
        console.log("4")
        $(".sai_img").attr('src', 'img/4.png');
        $("h1").text("丁！あんたの負けや");
        alterLife(-10);
    }else if(random == 5){
        console.log("5")
        $(".sai_img").attr('src', 'img/5.png');
        $("h1").text("半！あんたの勝ちや");
        alterLife(10);
    }else if(random == 6){
        console.log("6")
        $(".sai_img").attr('src', 'img/6.png');
        $("h1").text("丁！あんたの負けや");
        alterLife(-10);
    }
    });



    /* ライフゲージここから　*/

    const lifeBar = document.getElementById('life-bar')         // ライフバー
    const lifeMark = document.getElementById('life-mark')       // ライフの光部分
    /* const increaseBtn = document.getElementById('increase-btn') // + ボタン
    const decreaseBtn = document.getElementById('decrease-btn') // - ボタン*/
    const increaseBtn = document.getElementById('btn') 
    const decreaseBtn = document.getElementById('btn') 
    let life = 50                                              // ライフ初期値
    lifeBar.style.width = "50%"                                // ライフ初期幅
    
    // *** ライフ変更処理 ***
    function alterLife( value ){
        // lifeの値を算出する
        life += value 
        if ( life <= 0 ){
            // 算出の結果 0 以下になった場合
            life = 0
            $("h2").text("もうやめとけ…");
            $("#finish").attr('src', 'img/nirami.png');
            $("#life-bar").css('background-color', '#e2041b')
            // 0.3秒後に光部分を非表示にする
            setTimeout(function(){
                lifeMark.style.visibility = 'hidden'
            }, 300)
        }else if( life >30, life<49){
          $("#life-bar").css('background-color', '#c97586')
        }else if(life >50, life<80){
          $("#life-bar").css('background-color', '#cb8347')
        }else {
            // 算出の結果 100 を超過した場合
            if ( life > 100 ) {
                life = 100
                $("h2").text("もう十分だろ？帰れ！")
                $("#finish").attr('src', 'img/kuyashii.png');
                $("#life-bar").css('background-color', '#e6b422')
              }
            
            // 光部分を表示する
            lifeMark.style.visibility = 'visible'
        }
        // スタイル(幅)を更新する
        lifeBar.style.width = life + "%"
    }

    // 表情変更 
    if (life < 50)  {
      $(".face-img").attr('src', '/img/win.png');
    }else if( life > 50 ) {
      $(".face-img").attr('src', '/img/lose.png');
    }else{
      $(".face-img").attr('src', '/img/base.png');
    }

    //
