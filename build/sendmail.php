<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';


  $mail = new PHPMailer(true);
  $mail->CharSet = "UTF-8";
  $mail->setLanguage("ru", "phpmailer/language/");
  $mail->IsHTML(true);


  // От кого письмо
  $mail->setFrom("info@nurmuhametov.ru", "nurmuhametov.ru");
  // Кому отправить
  $mail->addAddress("vladpivovarov2797@ya.ru");
  // Тема письма
  $mail->Subject = "Заявка с nurmuhametov.ru";

  // Этажи
  $floor = "1.5";
  if($_POST["floor"] == "1") {
    $floor = "1";
  }
  if($_POST["floor"] == "2") {
    $floor = "2";
  }

  // Тело письма
  $body = "<h1>Заявка с nurmuhametov.ru</h1>";

  if(trim(!empty($_POST["name"]))) {
    $body.="<p><strong>Имя:</strong> ".$_POST["name"]."</p>";
  }
  if(trim(!empty($_POST["phone"]))) {
    $body.="<p><strong>Телефон:</strong> ".$_POST["phone"]."</p>";
  }
  if(trim(!empty($_POST["area"]))) {
    $body.="<p><strong>Площадь объекта:</strong> ".$_POST["area"]."</p>";
  }
  if(trim(!empty($_POST["floor"]))) {
    $body.="<p><strong>Количество этажей:</strong> ".$floor."</p>";
  }

  $mail->Body = $body;

  // Отправляем
  if(!$mail->send()) {
    $message = "Ошибка";
  } else {
    $message = "Заявка отправлена!";
  }

  $response = ["message" => $message];

  header("Content-type: application/json");
  echo json_encode($response);
?>