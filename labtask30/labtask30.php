<?php
header('Content-Type: application/json');

$students = array(
    array(
        "name" => "Adeeb",
        "id" => "19-39469-1",
        "department" => "CSE",
        "cgpa" => "3.00"
    ),
    array(
        "name" => "Rahin",
        "id" => "20-39469-1",
        "department" => "CSE",
        "cgpa" => "3.10"
    ),
    array(
        "name" => "Akash",
        "id" => "20-39469-2",
        "department" => "CSE",
        "cgpa" => "3.05"
    )
);

echo json_encode($students);
?>