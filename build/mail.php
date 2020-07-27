<?php

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: noreply@autostyle.com\r\n";

$name = $_POST["name"];
$tel  = $_POST["tel"];

$to          = "timur53shakirov@mail.ru";
$subject     = "Заявка Автостиль";
$text        = $name;
$text       .= " ждёт звонка на номер";
$text       .= $tel;
$sendToMail  = mail($to,$subject,$text,$headers);

if ($sendToMail) {
  echo "ok";
}

?>
