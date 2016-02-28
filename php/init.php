<!DOCTYPE html>
<html>
<body>

In PHP, all keywords (e.g. if, else, while, echo, etc.), classes, functions,
and user-defined functions are NOT case-sensitive.

Variable names are case-sensitive

<h1> <?= "Testing" ?> </h1>

<?php
  ECHO "<p> Hello <p>";
  ecHO "It'me <br />";
?>

<?php
  for ($i=0; $i < 5; $i++) {
?>
    <h3> <?= "peshko"?> </h3>
<?php
  }
?>

<?php
  $color = "red";
  echo "My car is " . $color . "<br>";
  // ERROR: echo "My house is " . $COLOR . "<br>";
  // ERROR: echo "My boat is " . $coLOR . "<br>";
?>

<?= "Color: " . $color . " haha" ?>

<br /> <br />

<?= "Color: $color" ?>

<?php
  $x = 5; // global scope

  function myTest() {
    // using x inside this function will generate an error
    // echo "<p>Variable x inside function is: $x</p>";

    $x = 10; // local scope
    echo "<p>Variable x inside function is: $x</p>";
  }
  myTest();

  echo "<p>Variable x outside function is: $x</p>";
?>

<?php
  $x = 5;
  $y = 10;

  function myTest_2() {
    global $x, $y;
    $y = $x + $y;
  }

  myTest_2();
  echo $y; // outputs 15
?>

<br /> <br />

<?php
  $x = 5;
  $y = 10;

  function myTest_3() {
    $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];

    // $GLOBALS['p']; ERROR
  }

  myTest_3();
  echo $y; // outputs 15
?>

<br /> <br />

<?php
  // static $p = 0;
  function myTest_4() {
    static $p = 0;
    // static $int = 1+2;        // wrong  (as it is an expression)
    // echo $GLOBALS['p'];
    echo $p;
    $p++;
  }

  myTest_4(); echo "-";
  myTest_4(); echo "-";
  myTest_4(); echo "-";
  // echo $GLOBALS['p']; echo "-"; ERROR, The variable is still local to the function
?>

<!-- PHP Variables -->

<?php
  $x = 5985;
  var_dump($x);
?>

<!-- PHP Data Types -->

<?php
  $cars = array("Volvo","BMW","Toyota");
  var_dump($cars);
?>

<?php
  class Car {
    function Car() {
        $this->model = "VW";
    }
  }
  // create an object
  $herbie = new Car();
  // show object properties
  echo $herbie->model;
?>

<?php
  $z;
  @var_dump($z)
?>

<!-- PHP Strings -->

<?php
  echo strlen("Hello world!"); // outputs 12
  echo str_word_count("Hello world!"); // outputs 2
  echo strrev("Hello world!"); // outputs !dlrow olleH
  echo strpos("Hello world!", "world"); // outputs 6
  echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
?>
<br />

<!-- PHP Constants -->

<?php
  # define(name, value, case-insensitive)
  define("GREETING", "babababa!");
  echo GREETING;
  # echo greeting;
  // define("GREETING", "Welcome to W3Schools.com!", true);
  // define("GREETING", "Welcome to W3Schools.com!");
  // echo greeting;
  echo GREETING;

  function myTest_5() {
    echo GREETING;
  }

 myTest_5();
?>
<br />

<!-- PHP Operators -->

<?php
  $a = 5;
  $b = "5";
  var_dump($a == $b); # true
  $a = 5;
  $b = "5";
  var_dump($a === $b); # false
  $a = 5;
  $b = "5";
  var_dump($a != $b); # false
  $a = 5;
  $b = "5";
  var_dump($a !== $b); # true
?>

<?php
  $text_1 = "Hello.";
  $text_2 = "It's me.";
  echo $text_1 . $text_2 . "<br />";
  echo $text_1 . "<br />";
  $text_1 .= $text_2;
  echo $text_1 . "<br />";
?>

<?php
  $x = array("a" => "red", "b" => "green");
  $y = array("c" => "blue", "d" => "yellow");
  var_dump($x == $y); # false
  $x = array("a" => "red", "b" => "green");
  $y = array("c" => "blue", "d" => "yellow");
  var_dump($x === $y); # false
  $x = array("a" => "red", "b" => "green");
  $y = array("b" => "green", "a" => "red");
  var_dump($x == $y); # true
  $x = array("a" => "red", "b" => "green");
  $y = array("b" => "green", "a" => "red");
  var_dump($x === $y); # false
?>
<br />

<!-- PHP if...else...elseif Statements -->

<?php
  $t = date("H");

  if ($t < "10") {
    echo "Have a good morning!";
  } elseif ($t < "20") {
    echo "Have a good day!";
  } else {
    echo "Have a good night!";
  }
  echo $t;
?>
<br />

<!-- PHP Switch -->

<?php
  $favcolor = "blue";

  switch ($favcolor) {
    case "red":
      echo "Your favorite color is red!";
      break;
    case "blue":
      echo "Your favorite color is blue!";
      break;
    case "green":
      echo "Your favorite color is green!";
      break;
    default:
      echo "Your favorite color is neither red, blue, nor green!";
  }
?>
<br />

<!-- PHP Loops -->

<?php
  $colors = array("red", "green", "blue", "yellow");

  foreach ($colors as $value) {
    echo "$value <br>";
  }
?>
<br />

<!-- PHP Functions -->
Function names are NOT case-sensitive. <br />

<?php
  function sum($x, $y = 0) {
    $z = $x + $y;
    return $z;
  }

  echo "5 + _ = " . sum(5) . "<br>";
  echo "7 + 13 = " . sum(7, 13) . "<br>";
?>
<br />

<!-- PHP Arrays -->
In PHP, there are three types of arrays: <br />
Indexed arrays - Arrays with a numeric index <br />
Associative arrays - Arrays with named keys <br />
Multidimensional arrays - Arrays containing one or more arrays <br />

<?php
  $cars = array("Volvo", "BMW", "Toyota");
  echo count($cars);
  echo "<br />";
  $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
  foreach($age as $x => $x_value) {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
  }
?>
<br />

<!-- PHP Sorting Arrays -->
sort() - sort arrays in ascending order <br />
rsort() - sort arrays in descending order <br />
asort() - sort associative arrays in ascending order, according to the value <br />
ksort() - sort associative arrays in ascending order, according to the key <br />
arsort() - sort associative arrays in descending order, according to the value <br />
krsort() - sort associative arrays in descending order, according to the key <br />
<br />

<!-- PHP Global Variables - Superglobals -->
Several predefined variables in PHP are "superglobals", which means that they are always accessible,
regardless of scope - and you can access them from any function, class or file without having to do anything special. <br />
The PHP superglobal variables are: <br />
<b>$GLOBALS</b> - PHP stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. <br />
<b>$_SERVER</b> - a PHP super global variable which holds information about headers, paths, and script locations. <br />
<b>$_REQUEST</b> - is used to collect data after submitting an HTML form. <br />
<b>$_POST</b> - is widely used to collect form data after submitting an HTML form with method="post". $_POST is also widely used to pass variables. <br />
<b>$_GET</b> - can also be used to collect form data after submitting an HTML form with method="get" and can also collect data sent in the URL. <br />
<b>$_FILES</b> <br />
<b>$_ENV</b> <br />
<b>$_COOKIE</b> <br />
<b>$_SESSION</b> <br />


</body>
</html>
