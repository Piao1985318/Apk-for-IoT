<?php
    ini_set('display_errors','0');

    require_once('./libs/StdPayUtil.php');
    $SignatureUtil = new StdPayUtil();

    $call_url="https://mobile.paywelcome.co.kr";
    $mid = "wpraise200";
    $signKey = "VFdNOTBUR2ZMSkJxMEVqMjhsaytkdz09";
    $siteDomain = "https://www.popupplace.co.kr/payment"; //가맹점 도메인 입력

    $timestamp = $SignatureUtil->getTimestamp();          // util에 의해서 자동생성
    $oid = $mid . "_" . $SignatureUtil->getTimestamp();   // 가맹점 주문번호(가맹점에서 직접 설정)
    $price = json_decode($_GET['p_price']);               // 상품가격(특수기호 제외, 가맹점에서 직접 설정)
    $cardNoInterestQuota = "";                            // 카드 분담 무이자 여부 설정(별도 카드사와 계약한 가맹점에서 직접 설정 예시: 11-2:3,34-5:12,14-6:12:24,12-12:36,06-9:12,01-3:4)
    $cardQuotaBase = "2:3:4";                             // 가맹점에서 사용할 할부 개월수 설정

    //###################################
    // 2. 가맹점 확인을 위한 signKey를 해시값으로 변경 (SHA-256방식 사용)
    //###################################
    $mKey = $SignatureUtil->makeHash($signKey, "sha256");
    $params = array(
        "mkey" => $mKey,
        "P_AMT" => $price,
        "P_OID" => $oid,
        "P_TIMESTAMP" => $timestamp
    );

    $sign = $SignatureUtil->makeSignature($params, "sha256");

    $u_name  = json_decode($_GET['u_name']);     // 고객명
    $p_name  = json_decode($_GET['p_name']);     // 상품명
    $u_phone  = json_decode($_GET['u_phone']);   // 고객 폰번호
    $type  = json_decode($_GET['p_type']);       // 결제방식
    $p_noti = "";

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html> 
<head>
<link rel="icon" href="data:;base64,=">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">
<title>웰컴PG</title>
<style>
	input[type=button] {
		width:100%;
		margin:5px 0;
		padding:7px;
	}
	
	input[type=text] {
		width:80%;
	}
	
	#quickMenuBtn {
		position:fixed;
		_position:absolute;
		top:0px;
		right:0px;
		background:red;
		cursor:pointer;
		color:#FFF;
		z-index:100
	}
	
	#quickMenuMiddle {
		position:fixed;
		_position:absolute;
		top:0px;
		right:48.5px;
		background:blue;
		cursor:pointer;
		color:#FFF;
		z-index:100
	}
	
	#quickMenuTop {
		position:fixed;
		_position:absolute;
		top:0px;
		right:99px;
		background:green;
		cursor:pointer;
		color:#FFF;
		z-index:100
	}
	
	.submenu .option-table {
		width : 100%;
	}
	
	.submenu .option-table input {
		width : 70%;
	}
</style>
<style>
	.option-table tr td { word-break:break-all;}
	.option-table tr > td { font-size:12px; }
</style>
</head>

<body onload="reserved_change();">

<form name="payForm" method="post" accept-charset="euc-kr">
	<table style="width:100%;" class="option-table">
		<input type="hidden" name="P_MID" id="P_MID" value="<?php echo $mid ?>"/>
		<input type="hidden" name="P_OID" id="P_OID" value="<?php echo $oid ?>">
		<input type="hidden" name="PAY_METHOD" id="PAY_METHOD" value="<?php echo $type ?>">
		<input type="hidden" name="CALL_URL" id="CALL_URL" value="<?php echo $call_url ?>">
		<input type="hidden" class="P_AMT" name="P_AMT" id="P_AMT" value="<?php echo $price ?>">
		<input type="hidden" name="P_UNAME" value="<?php echo $u_name ?>">
		<input type="hidden" name="P_MNAME" value="Wpraise">
		<input type="hidden" name="P_NOTI" value="<?php echo htmlspecialchars($p_noti) ?>" maxlength = "1024" >
		<input type="hidden" name="P_GOODS" value="<?php echo $p_name ?>">
		<input type="hidden" name="P_MOBILE" value="<?php echo $u_phone ?>">
		<tr style="display: none;">
			<td>P_CHARSET(인증/승인 결과 수신 CHARSET)</td>
			<td><select name="P_CHARSET" id="P_CHARSET"> 
				<option value="" >없음</option>
				<option value="utf8" selected>utf8</option>
			</select>
			</td>
		</tr>
		<input type="hidden" name="P_NEXT_URL" value="<?php echo $siteDomain ?>/nextUrl.php" />
		<input type="hidden" name="P_RETURN_URL" id="return" value="popupplace://" >
		<input type="hidden" name="P_NOTI_URL" id="P_NOTI_URL" value="<?php echo $siteDomain ?>/noti" />
		<input type="hidden" name="P_TIMESTAMP" value="<?php echo $timestamp ?>" >
		<input type="hidden" id="signature" name="P_SIGNATURE" value="<?php echo $sign ?>" >
		<input type="hidden" name="P_OFFER_PERIOD" value="" size="50">
	</table>

	<div id="middle" style="display: none;">
		<table border="1" style="width:100%;" class="option-table">
			<h4>옵션정보</h4>
			<tr>
				<td class="key">P_RESERVED</td>
				<td>
				<textarea name="P_RESERVED" id="reserved" style="width:100%; height:25px" onKeyDown="reserved_keyDown(this);"></textarea><br />
			</tr>
		</table>
	</div>
</form>
</body>

<script type="text/javascript">
	//paymethod : 신용카드 (visa3d), 계좌이체(bank)
	//call_url : 호출할 도메인
	//type : form target 설정 (현재창:self 새창:self외)
	function pay_submit(paymethod,call_url,type){
		var payForm = document.payForm;
		payForm.target = "_self";

		if(call_url.substr(-1,1).indexOf("/")<0){
			call_url+="/";
		}
		if (paymethod == 'visa3d') {
			payForm.action = call_url + "smart/wcard/";
		} else if (paymethod == 'bank') {
			payForm.action = call_url + "smart/bank/";
		} else {
			alert('등록되지 않은 지불 수단 입니다(paymethod:' + paymethod + ')');
			return;
		}
		document.charset = 'euc-kr';
		payForm.submit();
	}
	// checked된 항목 P_RESERVED필드 추가하기 위한 함수 
	function reserved_change(){
		var checkboxs = document.getElementsByName("p_rsd");
		var rVal;
	    if ( type == "card" ) //신용카드
	       rVal = "twotrs_isp=Y&block_isp=Y&twotrs_isp_noti=N&cp_yn=Y&apprun_check=Y&below1000=Y&app_scheme=popupplace://&";
	    else                  // 계좌이체
	       rVal = "Twotrs_bank=Y&apprun_check=Y&iosapp=Y&below1000=Y&app_scheme=popupplace://&";

		document.getElementById("reserved").value = rVal;
		var type = document.getElementById("PAY_METHOD").value;
		var call_url = document.getElementById("CALL_URL").value;
		if ( type === "card" )
		    type = "visa3d";
		pay_submit(type, call_url );
	}
</script>
</html>