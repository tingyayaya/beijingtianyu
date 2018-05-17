<?php
header('Content-Type: application/json');

$json = str_replace ( "\\", "", $_REQUEST ['data']);
$arr = json_decode($json, true);

if ($arr == null) {
	echo json_encode ( array (
			'rs' => 303,
			'msg' => 'empty json data!' 
	) );
	exit;
}

$appid = "wx50e81fa4e8b451bd";
$appsecret = "c1a9364e5d9aaed4560d3018e14a5716";

$type = $arr ['type'];  //模块
switch ($type) {
	case 'userInfo':
        $ACCESS_TOKEN = $arr ['access_token'];
        $OPENID = $arr ['openid'];
	    $url = "https://api.weixin.qq.com/sns/userinfo?access_token=$ACCESS_TOKEN&openid=$OPENID&lang=zh_CN";
		$data_ = getJson($url);
		echo json_encode($data_);
		break;
	
	default:
		break;
}
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
exit ();
?>