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
    <meta property="og:image" content="https://kscomac.github.io/maru/img01.jpg">
    <meta property="og:url" content="https://kscomac.github.io/maru/index.php?result=1">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@shinoha58653024" />
    <meta name="twitter:title" content="いつでもどこでも「鮮度みそ占い」キャンペーン｜マルサンアイ株式会社" />
    <meta name="twitter:description" content="いつでもどこでも「鮮度みそ占い」キャンペーン 占い結果をツイートで総勢100名様に「巨大！鮮度みそクッション」などが当たる！！" />
    <meta name="twitter:image" content="https://kscomac.github.io/maru/img01.jpg">
    <meta name="twitter:url" content="https://kscomac.github.io/maru/index.php?result=1">
<?php } ?>
</head>
<body>
<!-- シェアがクリックされた際、このURLに飛ぶ -->
 <script type="text/javascript">
  location.href = "http://localhost/cp_miso_202112";
 </script>
</body>
