<?php
$params = json_decode(file_get_contents('php://input'),true);
    echo $params['shopId'];
 //if($params['id']!=null){
 //  $error_respon = array('result' => 'ERROR_MSG_MISS', 'msg' => '��Ϣ����Ϊ��');
// }else{
//  $respon = array('result' => 'ERROR_MSG_MISS', 'msg' => '���ӳɹ�');
// }
?>