$fio = $_POST['fio'];
$email = $_POST['email'];
$message = $_POST['message'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);
$fio = urldecode($fio);
$email = urldecode($email);
$message = urldecode($message);
$fio = trim($fio);
$email = trim($email);
$message = trim($message);
//echo $fio;
//echo "<br>";
//echo $email;
//echo "<br>";
//echo $message;
if (mail("pavlex57@gmail.com", "Письмо с сайта школы №49", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}