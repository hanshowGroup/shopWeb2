<?php
$params = json_decode(file_get_contents('php://input'),true);
    echo $params['shopId'];
 //if($params['id']!=null){
 //  $error_respon = array('result' => 'ERROR_MSG_MISS', 'msg' => '信息不能为空');
// }else{
//  $respon = array('result' => 'ERROR_MSG_MISS', 'msg' => '增加成功');
// }
?>