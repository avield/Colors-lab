<?php

header('Content-Type: application/json');

$body = file_get_contents('php://input');
$input = json_decode($body, true);

if (!is_array($input)) {
	echo json_encode(array(
		"id" => 0,
		"firstName" => "",
		"lastName" => "",
		"error" => "Invalid JSON"
	));
	return;
}

$login = $input["login"] ?? "";
$password = $input["password"] ?? "";

if ($login === "demo" && $password === "password") {
	echo json_encode(array(
		"id" => 1,
		"firstName" => "Demo",
		"lastName" => "User",
		"error" => ""
	));
	return;
}

echo json_encode(array(
	"id" => 0,
	"firstName" => "",
	"lastName" => "",
	"error" => "No Records Found"
));
