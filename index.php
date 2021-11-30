<!DOCTYPE html>
    <html lang="ja">
    <head>
<?php
$min = 1;
$max = 2;
if (isset($_GET['result']) && is_numeric($_GET['result']) && $_GET['result'] >= $min && $_GET['result'] <= $max) {
    $result = $_GET['result'];
    if ($result == 1) {
        $pic = "img01";
    } else if ($result == 2) {
        $pic = "img_omikuji02";
    }
    ?>
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="マルサンアイ株式会社｜豆乳と味噌メーカー">
    <meta property="og:title" content="いつでもどこでも「鮮度みそ占い」キャンペーン｜マルサンアイ株式会社">
    <meta property="og:description" content="いつでもどこでも「鮮度みそ占い」キャンペーン 占い結果をツイートで総勢100名様に「巨大！鮮度みそクッション」などが当たる！！">
    <meta property="og:image" content="https://kscomac.github.io/maru/<?php echo $pic ?>.jpg">
    <meta property="og:url" content="http://localhost/cp_miso_202112/index.php?result=<?php echo $result ?>">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="マルサンアイ株式会社｜豆乳と味噌メーカー" />
    <meta name="twitter:title" content="いつでもどこでも「鮮度みそ占い」キャンペーン｜マルサンアイ株式会社" />
    <meta name="twitter:description" content="いつでもどこでも「鮮度みそ占い」キャンペーン 占い結果をツイートで総勢100名様に「巨大！鮮度みそクッション」などが当たる！！" />
    <meta name="twitter:image" content="https://kscomac.github.io/maru/<?php echo $pic ?>.jpg">
    <meta name="twitter:url" content="https://kscomac.github.io/maru/index.php?result=<?php echo $result ?>">
<?php }else{ ?>
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="サイトネーム">
    <meta property="og:title" content="タイトル">
    <meta property="og:description" content="デフォルトのディスクリプション">
    <meta property="og:image" content="https://testooooooooooooo.co.jp/images/ogp.jpg">
    <meta property="og:url" content="https://testooooooooooooo.co.jp/index.php">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="サイトネーム" />
    <meta name="twitter:title" content="タイトル" />
    <meta name="twitter:description" content="デフォルトのディスクリプション" />
    <meta name="twitter:image" content="https://testooooooooooooo.co.jp/images/ogp.jpg">
    <meta name="twitter:url" content="https://testooooooooooooo.co.jp/index.php">
<?php } ?>
</head>
<body>
<!-- シェアがクリックされた際、このURLに飛ぶ -->
 <script type="text/javascript">
  // トップページのURLが一般的
  location.href = "https://www.marusanai.co.jp/";
 </script>
</body>
