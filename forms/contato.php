<?php
//destino
$to = "caiovrocha.contato@gmail.com";

//remetente
$email = $_POST["email"];

//assunto
$assunto = "[Contato do Site]";

//mensagem
$mensagem = $_POST["mensagem"]. " <p>Enviado por: ".$_POST["nome"]. "- Fone: ".$_POST["fone"]
."<p>";


//informações de cabeçalho
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $mail . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

//envio do email
$status = mail($to,$assunto,$mensagem,$headers);

if($status==true){
    print "<script>alert('Enviou com sucesso!'); </script>";
    print "<script>location.href='index.html';</script>";
}else{
    print "<script>alert('Não foi possível enviar!'); </script>";
    print print "<script>location.href='index.html';</script>";
}+
?>