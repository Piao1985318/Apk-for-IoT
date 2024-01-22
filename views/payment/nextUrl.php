<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">
<title>웰컴PG Mobile Page</title>
</head>
<body>
    <?php
        header('Content-Type: text/html; charset=utf-8');

        require_once('./libs/HttpClient.php');

        if (isset($_GET['P_STATUS']))  $P_STATUS = $_GET['P_STATUS'];
        else if (isset($_POST['P_STATUS'])) $P_STATUS = $_POST['P_STATUS'];

        if (isset($_GET['P_TID']))  $P_TID = $_GET['P_TID'];
        else if (isset($_POST['P_TID'])) $P_TID = $_POST['P_TID'];

        if (isset($_GET['P_REQ_URL']))  $P_REQ_URL = $_GET['P_REQ_URL'];
        else if (isset($_POST['P_REQ_URL'])) $P_REQ_URL = $_POST['P_REQ_URL'];

        if (isset($_GET['P_RMESG1']))  $P_RMESG1 = $_GET['P_RMESG1'];
        else if (isset($_POST['P_RMESG1'])) $P_RMESG1 = $_POST['P_RMESG1'];

        if (isset($_GET['P_AMT']))  $P_AMT = $_GET['P_AMT'];
        else if (isset($_POST['P_AMT'])) $P_AMT = $_POST['P_AMT'];

        $P_MID 		= substr($P_TID,10,10);
        echo "<br><br>";
        echo "P_STATUS  =>  " . $P_STATUS ."<br>";
        echo "P_TID     =>  " . $P_TID ."<br>";
        echo "P_REQ_URL =>  " . $P_REQ_URL ."<br>";
        echo "P_RMESG1  =>  " . $P_RMESG1 ."<br>";
        echo "P_MID     =>  " . $P_MID ."<br>";
        echo "P_AMT     =>  " . $P_AMT ."<br>";
        echo "<br><br>";

        $paramMap["P_MID"] = $P_MID; // 필수
        $paramMap["P_TID"] = $P_TID; // 필수

        $resultString = "";

        try {
            if($P_STATUS =='00')
                {
                    try {
                        $httpUtil = new HttpClient();

                        if ($httpUtil->processHTTP($P_REQ_URL, $paramMap)) {
                            $resultString = $httpUtil->body;
                            echo "<p><b>RESULT DATA :</b> $resultString</p>";			//PRINT DATA
                        } else {
                            echo "Http Connect Error\n";
                            echo $httpUtil->errormsg;
                            throw new Exception("Http Connect Error");
                        }
                        $resultMap = json_decode($resultString, true);
                        echo $resultMap."## 승인 API 결과 ##";
                    } catch ( Exception $e ) {
                        echo "HTTP Connect Error";
                    }
                }
                else {
                    echo "<br/>";
                    echo "####인증실패####";
                    echo "<pre>" . var_dump($_REQUEST) . "</pre>";
                }
        } catch ( Exception $e ) {
                $s = $e->getMessage() . ' (오류코드:' . $e->getCode() . ')';
                echo $s;
        }
    ?>
</body>
<script>
    window.ReactNativeWebView.postMessage(JSON.stringify({
        type: "payment",
        p_status : '<?php echo $P_STATUS; ?>',
        p_price : '<?php echo $P_AMT; ?>',
        p_message : '<?php echo $P_RMESG1; ?>',
        p_results: '<?php echo $resultString; ?>',
      }));
</script>
</html>