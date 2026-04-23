<?php
$marks = [85, 72, 49, 91, 60];
echo "Student Marks:<br>";
foreach ($marks as $index => $mark) {
    echo "Student " . ($index + 1) . ": $mark<br>";
}

$total = array_sum($marks);
$average = $total / count($marks);
$max = max($marks);
$min = min($marks);

echo "<br>Total Marks: $total<br>";
echo "Average Marks: $average<br>";
echo "Maximum Marks: $max<br>";
echo "Minimum Marks: $min<br>";

$passCount = 0;
$failCount = 0;
foreach ($marks as $mark) {
    if ($mark >= 50) {
        $passCount++;
    } else {
        $failCount++;
    }
}
echo "<br>Passed Students: $passCount<br>";
echo "Failed Students: $failCount<br>";

$student = [
    "name" => "Mashrur",
    "id" => "2026001",
    "cgpa" => 3.75
];

echo "<br>Student Details:<br>";
foreach ($student as $key => $value) {
    echo ucfirst($key) . ": $value<br>";
}

function calculateAverage($marksArray) {
    $total = array_sum($marksArray);
    $count = count($marksArray);
    return $total / $count;
}

echo "<br>Average (via function): " . calculateAverage($marks) . "<br>";

echo "<br>String Operations:<br>";
echo "Uppercase Name: " . strtoupper($student["name"]) . "<br>";
echo "Length of Name: " . strlen($student["name"]) . "<br>";

sort($marks);
echo "<br>Sorted Marks:<br>";
foreach ($marks as $mark) {
    echo $mark . " ";
}

$cgpaInt = (int)$student["cgpa"];
echo "<br><br>CGPA as Integer (Type Casting): $cgpaInt<br>";

if (isset($_GET['studentName'])) {
    $inputName = $_GET['studentName'];
    echo "<br>Student name from input: $inputName<br>";
} else {
    echo "<br>No student name provided via GET.<br>";
}
?>
