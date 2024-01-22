<?php
    ini_set('display_errors','0');
    header('Content-Type: application/json; charset=utf-8');

    require_once('./libs/HttpClient.php');

    require_once('./libs/StdPayUtil.php');
    $SignatureUtil = new StdPayUtil();

    $mid = "welcometst";                                  // 가맹점 ID(가맹점 수정후 고정)
    $signKey = "QjZXWDZDRmxYUXJPYnMvelEvSjJ5QT09";        // 가맹점에 제공된 웹 표준 사인키(가맹점 수정후 고정)
    $siteDomain = "http://192.168.1.6:8000/payment";    //가맹점 도메인 입력

    $timestamp = $SignatureUtil->getTimestamp();          // util에 의해서 자동생성
    $oid = $mid . "_" . $timestamp;   // 가맹점 주문번호(가맹점에서 직접 설정)
    $price = $_GET['price'];               // 상품가격(특수기호 제외, 가맹점에서 직접 설정)
    $tid = $_GET['tid'];
    $cardNoInterestQuota = "";                            // 카드 분담 무이자 여부 설정(별도 카드사와 계약한 가맹점에서 직접 설정 예시: 11-2:3,34-5:12,14-6:12:24,12-12:36,06-9:12,01-3:4)
    $cardQuotaBase = "2:3:4";                             // 가맹점에서 사용할 할부 개월수 설정
   
   
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
	

    $paramMap["payType"] = "card"; // 필수
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
            echo  $resultString;			//PRINT DATA
        } else {
            echo "Http Connect Error\n";
            echo $httpUtil->errormsg;
            throw new Exception("Http Connect Error");
        }
        // $resultMap = json_decode($resultString, true);
        // echo $resultMap."## 승인 API 결과 ##";
    } catch ( Exception $e ) {
        echo "HTTP Connect Error";
    }

