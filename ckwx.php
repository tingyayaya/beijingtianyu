<?php
require_once 'data/bootstrap.php';
require_once 'data/lib/Wechat.class.php';
require_once 'data/EasyWechat.class.php';
$options = array(
		'token'=>'hegewx', //填写应用接口的Token
		'encodingaeskey'=>'Usu1XgU2qTAlft1eMjrOKW1pJDJKAuHTPrLkAw5aAsu', //填写加密用的EncodingAESKey
		'appid'=>'wxb42d1e3cbe6daf70', //填写高级调用功能的app id
		'appsecret'=>'6cc16378dca46ac639e565add440e8e3', //填写高级调用功能的密钥
		'debug'=>true, //调试开关
		'logfile'=>dirname(__FILE__).'/log/run.log' //日志文件
);
$weObj = new EasyWechat($options); //创建实例对象
$weObj->valid();
//$weObj->logfile(date('Y-m-d H:i:s', time()));
//$weObj->logfile($weObj->getRev()->getRevFrom());

$openid = $weObj->getRev()->getRevFrom();
$type = $weObj->getRev()->getRevType();
switch($type) {
	case Wechat::MSGTYPE_TEXT:
		$weObj->text("你好")->reply();
		exit;
		break;
	case Wechat::MSGTYPE_EVENT:
		$revEvent = array();
        $revEvent = $weObj->getRev()->getRevEvent();
                switch ($revEvent['event']) {
                    //关注订阅事件
                    case "subscribe":
                        $weObj->text("你好, 欢迎关注lyedssj!")->reply();
                        $db->query("insert into SKT53 (SKF757,SF_CREATE_TIME) values ('".$openid."',now())");
                        break;
                    case "unsubscribe":
                        //$weObj->logfile("取消关注");
                        $db->query("delete from SKT53 where SKF757='".$openid."'");
                        break;
                    case "VIEW":
                        $weObj->getRev()->getRevLink();
                        break;
                }
                break;
		exit;
		break;
	case Wechat::MSGTYPE_IMAGE:
		echo '';
		exit;
		break;
	default:
		$weObj->text("help info")->reply();
		exit;
}
