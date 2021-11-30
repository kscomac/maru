$(function() {
    
     /* -----------------------------------------------------------------
     * クッションギャラリー
     * -------------------------------------------------------------- */
    // モーダル
    $('.modaal-btn.inline').modaal({
        content_source: '#galleryArea'
    });
    
    // スライダー
     const slider = $('#galleryArea .slick-slider');
    slider.slick();
    
    $('.modaal-btn.inline').click(function() {
          slider.slick('setPosition');
    });
    
    /* -----------------------------------------------------------------
     * 応募規約
     * -------------------------------------------------------------- */
    // スクロールバー
    $('.scrollArea').each(function() {
        const ps = new PerfectScrollbar('.scrollArea');
    });

    /* ----------------------------------------------------------------
    * スロット
    * -------------------------------------------------------------- */

    /*
    * スロットのリール回転速度(実行毎秒数)
    */
    var sec = 100;

    /*
        * スロットのリール情報
        * ・スロットのリールelement
        * ・スロットのリール停止フラグ
        * ・スロットのリール回転数
        */
    var $reels = [],
        stopReelFlag = [],
        reelCounts = [];

    /*
        * 位置情報
        */
    var slotFrameWidth = 0,
        slotReelsWidth = 0,
        slotReelItemWidth = 0,
        slotReelStartWidth = 0;

    /**
     * スロット
     */
    var Slot = {
        /**
         * 初期化処理
         */
        init: function init() {
            $reels[0] = $reels[1] = $reels[2] = null;
            stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false;
            reelCounts[0] = reelCounts[1] = reelCounts[2] = 0;
        },
        /**
         * スタートボタンのクリックイベント
         */
        start: function() {
            for (var index = 0; index < 3; index++) {
                Slot.animation(index);
            }
        },
        /**
         * ストップボタンのクリックイベント
         */
        stop: function(index) {
            stopReelFlag[index] = true;  
            // remove any previous clone
            $('#tweetArea').empty()
            console.log(9 - reelCounts[index])
        
            // tweetボタンの生成
            // generate_tweet_button($('#tweetArea'), location.href + $('.reel').children('img').eq(8 - reelCounts[index]).attr('src') , '鮮度みそ占いやってみた', '結果はこちら', '結果をツイートする<span>【Twitter投稿画面が開きます】</span>');
            generate_tweet_button($('#tweetArea'), location.href + 'index.php?result=' + $('.reel').children('img').eq(8 - reelCounts[index]), '鮮度みそ占いやってみた', 'いつでもどこでも「鮮度みそ占い」キャンペーン 占い結果をツイートで総勢100名様に「巨大！鮮度みそクッション」などが当たる！！', '結果をツイートする<span>【Twitter投稿画面が開きます】</span>');            
            // tweetボタンを生成する関数ß
            function generate_tweet_button(area, url, hashtags, text, tweet) {
                var twHref = 'https://twitter.com/share?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url)+'&hashtags='+encodeURIComponent(hashtags);
                var twClass = 'btn btnOmikujiTweet';
                var twLink = '<a href="' + twHref + '" ' + 'target="_blank" rel="external noopener"' + 'class="' + twClass + '"' + '>' + tweet + '</a>';
                area.append(twLink);
            }
            if (stopReelFlag[0]) {
                // リール停止したらツイートボタンを押下できるようにする
                $(".btnOmikujiTweet").attr("disabled", false);
            }
        },
        /**
         * 位置情報の初期化処理
         */
        resetLocationInfo: function() {
            slotFrameWidth = $(".slotFrame").outerWidth();
            slotReelsWidth = $(".reels").eq(0).outerWidth();
            slotReelItemWidth = $(".reel").eq(0).outerWidth();
            slotReelStartWidth = -slotReelsWidth;
            slotReelStartWidth =
                slotReelStartWidth +
                slotFrameWidth;

            $(".reels").css({
                left: slotReelStartWidth,
            });
        },
        /**
         * スロットの回転アニメーション
         */
        animation: function(index) {
            console.log("アニメーション", "開始", index);
            if (reelCounts[index] >= 9) {
                reelCounts[index] = 0;
            }

            console.log("slotReelStartWidth", slotReelStartWidth);
            console.log("reelCounts[index]", reelCounts[index]);
            console.log("slotReelsWidth", slotReelsWidth);
            console.log(
                "left",
                slotReelStartWidth + reelCounts[index] * slotReelItemWidth
            );

            $(".reels")
                .eq(index)
                .animate({
                    left: slotReelStartWidth + reelCounts[index] * slotReelItemWidth,
                }, {
                    duration: sec,
                    easing: "linear",
                    complete: function() {
                        console.log("アニメーション", "完了", index, reelCounts[index]);
                        if (stopReelFlag[index]) {
                            console.log(
                                "アニメーション",
                                "ストップ",
                                index,
                                reelCounts[index]
                            );
                            return;
                        }
                        // 移動階数をカウント
                        reelCounts[index]++;
                        // スロット回転のアニメーションを実行する
                        Slot.animation(index);
                    },
                });
        },
    };
        
    /**
     * 読み込み後
     */
    $(document).ready(function() {
        /*
         * スロットの初期化処理を実行
         */
        Slot.init();
        Slot.resetLocationInfo();
        // スロットの回転を開始
        Slot.start();
    
        /**
         * おみくじを引くボタンのクリックイベント
         */
        $(".btnOmikujiStop").click(function() {
            $(this).css({
                'pointer-events': 'none',
                'opacity': '0.5'
            });
            // レールの回転を停止   
            Slot.stop($(this).attr("data-val"));
        });
    });
    
    /* -----------------------------------------------------------------
     * ムービーでわかる鮮度みそ
     * -------------------------------------------------------------- */
    // モーダル
    $('.modaal-btn.video').modaal({
        type: 'video'
    });
    
});
