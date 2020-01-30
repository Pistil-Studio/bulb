<?php

/**
 * **********************************************************************
 * Configuration pour l'envoie SMTP
 * ********************************************************************** **/
add_action( 'phpmailer_init', 'bulb_phpmailer_configuration' );
function bulb_phpmailer_configuration( $phpmailer ) {
	$phpmailer->isSMTP();
	$phpmailer->SMTPDebug = false;
	$phpmailer->Host = "";
	$phpmailer->SMTPAuth = true; // Indispensable pour forcer l'authentification
	$phpmailer->Port = 587;
	$phpmailer->Username = "";
	$phpmailer->Password = "";
	$phpmailer->SMTPSecure = ""; // Sécurisation du serveur SMTP : ssl ou tls
	$phpmailer->From = ""; // Adresse email d'envoi des mails
	$phpmailer->FromName = ""; // Nom affiché lors de l'envoi du mail
}
