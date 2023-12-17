<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    // Prepare data to be written to CSV
    $data = array($name, $email, $phone);

    // Define the CSV file path
    $csvFilePath = 'data.csv';

    // Open or create the CSV file
    $csvFile = fopen($csvFilePath, 'a');

    // Lock the file for writing
    flock($csvFile, LOCK_EX);

    // Write data to CSV
    fputcsv($csvFile, $data);

    // Release the lock
    flock($csvFile, LOCK_UN);

    // Close the file
    fclose($csvFile);

    // Redirect back to the form
    header('index.html');
    exit();
}
?>
