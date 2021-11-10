// マルサンのデモ作成
// Twitter Card使用
// 画像サイズ注意　summuryは1:1, largeは1.91:1

$(function () {
  var imgs = new Array();
  var cnt = 9; // 画像枚数
  var speed = 500; // ミリ秒(1秒=1000)
  var now = -1;
  var timerName;
  
  for (i = 0; i < cnt; i++) {
    // imgs[i] = "img" + (i + 1) + ".jpg";
    imgs[i] = "img" + (i + 1);
    if (i < 9) {
      imgs[i] = "img" + '0' + (i + 1);
    }
  }
  
  

  timerName = setInterval(pars2images, speed);   // 自動的に開始する場合はコメント外す

  // パラパラ実行
  function pars2images() {
    now++;
    // var msg = imgs[now]
    // document.getElementById("PassageArea").innerHTML = msg;   // 表示更新

    $("#paraImage").attr("src", './' + imgs[now] + ".jpg");
    if (now >= imgs.length - 1) {
      now = -1;
    }
  }


  // スタート
  // $("#startButton").click(function () {
  //   timerName = setInterval(pars2images, speed);
  // });

  // ストップ
  $("#stopButton").click(function () {

    // remove any previous clone
    $('#tweet-area').empty()
  
    var tweetArea = document.getElementById('tweet-area');
   
  // tweetボタンの生成
  generate_tweet_button(tweetArea, 'https://kscomac.github.io/maru/' + imgs[now]+ '.html', '占い', 'ああ', '結果をツイートする<br>【Twitter投稿画面が開きます】');
   
  // tweetボタンを生成する関数ß
  function generate_tweet_button(area, url, hashtags, text, tweet) {
      var twBtn = document.createElement('div');
      twBtn.className = 'twitter-btn';
      var twHref = 'https://twitter.com/share?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url)+'&hashtags='+encodeURIComponent(hashtags);
      var clickEv = 'onclick="popupWindow(this.href); return false;"';
      var twLink = '<a href="' + twHref + '" ' + clickEv + '>' + tweet + '</a>';
      twBtn.innerHTML = twLink;
      area.appendChild(twBtn);
  }
  
   
  // クリック時にポップアップで表示させる関数
  function popupWindow(url) {
      window.open(url, '', 'width=580,height=400,menubar=no,toolbar=no,scrollbars=yes');
  }
        
      if (timerName) {
        clearInterval(timerName);
      }
    });
    

});