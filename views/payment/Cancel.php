<?php
    ini_set('display_errors','0');
    header('Content-Type: application/json; charset=utf-8');

    require_once('./libs/HttpClient.php');

    require_once('./libs/StdPayUtil.php');
    $SignatureUtil = new StdPayUtil();

    $mid = "wpraise200";
    $signKey = "VFdNOTBUR2ZMSkJxMEVqMjhsaytkdz09";

    $timestamp = $SignatureUtil->getTimestamp();          // util에 의해서 자동생성
    $oid = $mid . "_" . $timestamp;   // 가맹점 주문번호(가맹점에서 직접 설정)
    $price = $_GET['price'];               // 상품가격(특수기호 제외, 가맹점에서 직접 설정)
    $tid = $_GET['tid'];
   
   
    $mKey = $SignatureUtil->makeHash($signKey, "sha256");
    $params = array(
        "mid" => $mid,
        "mkey" => $mKey,
        // "P_AMT" => $price,
        // "P_OID" => $oid,
        "timestamp" => $timestamp
    );
    // $params = array(
    //     "mkey" => $mKey,
    //     "P_AMT" => $price,
    //     "P_OID" => $oid,
    //     "P_TIMESTAMP" => $timestamp
    // );

	$url = "https://payapi.paywelcome.co.kr/cancel/cancel";
	$sign = $SignatureUtil->makeSignature($params, "sha256");
	

    $paramMap["payType"] = $_GET['method']; // 필수
    $paramMap["mid"] = "welcometst"; // 필수
    $paramMap["tid"] = $tid; // 필수
    $paramMap["price"] = $price; // 필수
    $paramMap["currency"] = "WON"; // 필수
    $paramMap["timestamp"] = $timestamp; // 필수
    $paramMap["signature"] = $sign; // 필수
   
    try {
        $httpUtil = new HttpClient();

        if ($httpUtil->processHTTP($url, $paramMap)) {
            $resultString = $httpUtil->body;
            echo json_encode($resultString);			//PRINT DATA
        } else {
            echo "Http Connect Error\n";
            echo $httpUtil->errormsg;
            throw new Exception("Http Connect Error");
        }
    } catch ( Exception $e ) {
        echo "HTTP Connect Error";
    }