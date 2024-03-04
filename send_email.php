<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "lukaamikulic@gmail.com";

mail($recipient, " ", $message, $mailheader) or die("Error!");

echo'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="thank-container">
		<img src="geek.png" alt="Vaš logo" class="logo">
		<h1 class="custom-heading">Thank You for contacting me. I will get back to you soon.</h1>
		<p class="back">Return to my <a href="index.html">Website</a>.</p>
	</div>
</body>
</html>
';


?>