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

<!-- PHP if...else...elseif Statements -->



</body>
</html>
