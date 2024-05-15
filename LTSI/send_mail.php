<?php

if(!empty($_POST['subject']))
{
    $firstName = $_POST["subject"];
    $lastName = $_POST["subject"];
    $subject = $_POST["subject"];
    $email = $_POST["subject"];

    $toEmail = $_POST["kitchua12@gmail.com"];

    $mailHeader = "Name: " . $firstName .
    "\r\n Email: " . $email .
    "\r\n Subject: " . $subject . "\r\n";

    if(mail($email, $firstName, $mailHeader))
    {
        $message = "Thank you for Inquiring!";
    }

}


?>