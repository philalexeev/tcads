<?php
    $to = "info@adsmobileou.com"; // емайл получателя данных из формы
    $tema = "Adsmobileou. Feedback message"; // тема полученного емайла
    $message = "Name: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
    $message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
    $message .= "Message: ".$_POST['message']."<br>"; //полученное из формы name=message
    $headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
    mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных

    $newURL = "/";
    header('Location: '.$newURL);
?>
