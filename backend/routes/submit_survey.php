<?php
// Database connection
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password (usually empty)
$dbname = "surveydb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the JSON data from the request body
$data = json_decode(file_get_contents('php://input'), true);

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO responses (question_id, response) VALUES (?, ?)");

foreach ($data['responses'] as $question_id => $response) {
    $stmt->bind_param("is", $question_id, $response);
    $stmt->execute();
}

$stmt->close();
$conn->close();

// Send a response back to the client
echo json_encode(['status' => 'success']);
?>
