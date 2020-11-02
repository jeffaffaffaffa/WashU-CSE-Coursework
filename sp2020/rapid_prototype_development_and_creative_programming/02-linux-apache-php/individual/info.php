<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Calculator</title>
</head>
<body>

<?php 
$op = htmlentities($_GET['operation']);
$one = htmlentities($_GET['firstnumber']);
$two = htmlentities($_GET['secondnumber']);

if (is_numeric($one) && is_numeric($two)){ //only allow numeric input
    if ($op == "addd") {
        echo $one + $two;
    } elseif ($op == "subb") {
        echo $one - $two;
    } elseif ($op == "multt") {
        echo $one * $two;
    } elseif ($op == "divv") {
        if ($two != 0) {
            echo $one / $two;
        } else {
            echo "undefined"; //undefined if divide by zero
        }
    }
}
else {
    echo "input numbers only";
}
?>

</body>
</html>