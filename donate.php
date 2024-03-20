<?php
// Start a session to store donation details
session_start();

// Retrieve form data
$amount = $_POST['amount'];
$frequency = $_POST['frequency'];

// Validate and sanitize data to prevent security vulnerabilities
// (e.g., using filter_var for numbers, escaping output for display)

// Store donation details in the session for later use
$_SESSION['donation_amount'] = $amount;
$_SESSION['donation_frequency'] = $frequency;

// Redirect to payment gateway for processing
if ($frequency === "one-time") {
    // Redirect to one-time payment gateway URL
    header("Location: https://example-payment-gateway.com/one-time-payment");
} else {
    // Redirect to recurring payment setup URL
    header("Location: https://example-payment-gateway.com/recurring-payment");
}

// Exit script to prevent further execution
exit();
?>
