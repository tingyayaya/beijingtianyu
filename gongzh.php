<?php

$code = $_GET["code"];
$state = $_GET["state"];
//echo "state=====:$state";
$urlredr="";
if($state=="url"){
	$urlredr="http://tydcxt.com/bjty/html/personalCenter.html";
}else if($state=="urlksd"){	
	$urlredr="http://dev.chenksoft.com:8082/ksd/weixinlogin";
}else{
	$urlredr="http://m.maesion.com/maesionapp/htmls/chooseclass.html";
}
$appid = "wx50e81fa4e8b451bd";
$appsecret = "d58056d1283c2e0feaca66ac16274dcb";
$url1 = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$appsecret&code=$code&grant_type=authorization_code";
//请求
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
$result = curl_exec($ch);
//echo $result;echo "<br/>";
$json=json_decode($result);
//请求结束
$token = $json->access_token;
$openid = $json->openid;



$url2 = "https://api.weixin.qq.com/sns/userinfo?access_token=$token&openid=$openid&lang=zh_CN";
//请求
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url2);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
$result2 = curl_exec($ch);
//echo $result2;echo "<br/>";
$json2=json_decode($result2);
$openid2 = $json2->openid;
$nickname = $json2->nickname;
$sex = $json2->sex;
$province = $json2->province;
$city = $json2->city;
$headimgurl = $json2->headimgurl;
//echo "urlredr=====:$urlredr";echo "\n";

//******获取用户详细信息*****//
/*$url3 = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url3);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
$result3 = curl_exec($ch);
$json3=json_decode($result3);
$token1 = $json3->access_token;
//echo $result3;echo "\n";*

/*$url4 = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=$token1&openid=$openid&lang=zh_CN";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url4);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
$result4 = curl_exec($ch);
$json4=json_decode($result4);
$subscribe_time = $json4->subscribe_time;
//echo $result4;echo "\n";*/
//******end获取用户详细信息*****//

//Header("Location:$urlredr?nickname=$nickname&openid=$openid&sex=$sex&city=$city&province=$province&userimg=$headimgurl&subscribe_time=$subscribe_time");
//Header("Location:$urlredr?nickname=$nickname&openid=$openid&sex=$sex&city=$city&province=$province&userimg=$headimgurl");
//
$url_kksd = "$urlredr?nickname=$nickname&openid=$openid&sex=$sex&city=$city&province=$province&userimg=$headimgurl&schoolname=$state";
//echo $url_kksd;
echo "<script> location.href=\"$url_kksd\";</script>"
//exit();
?>