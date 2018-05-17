<?php
$code = $_GET['code'];//前端传来的code值

$appid = "wx50e81fa4e8b451bd";
$appsecret = "c1a9364e5d9aaed4560d3018e14a5716";

header('Content-Type: application/json');

//获取openid
$url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$appsecret&code=$code&grant_type=authorization_code";
$oauth2 = getJson($url);

echo json_encode($oauth2);

function getJson($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    return json_decode($output, true);
}
?>