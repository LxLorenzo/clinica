<?php
phpinfo();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $mensagem = $_POST['message'];

  $to = 'lorenzocasa1235@gmail.com'; // Insira o seu endereço de email aqui
  $assunto = "Assunto: $subject";
  $corpo = "Email: $email\n\nMensagem: $mensagem";

  $headers = "De: $email\r\n";
  $headers .= "Responder para: $email\r\n";

  if (mail($to, $assunto, $corpo, $headers)) {
    echo 'Email enviado com sucesso!';
  } else {
    echo 'Ocorreu um erro ao enviar o email.';
  }
}
?>