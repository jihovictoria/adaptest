#!/usr/local/bin/php
<?php

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.cohere.ai/v1/generate');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, '{
      "model": "command-xlarge-nightly",
      "prompt": "Give me a quiz with 10 questions with four multiple-choice answers about integrals and series and sequences.\n\nBegin each question with a number followed by a period (“.”).\nPlace a linebreak after the question, then place answer choices below.\nPlease say which one is the right answer. Answers should not be be labeled with letters.",
      "max_tokens": 3338,
      "temperature": 0,
      "k": 0,
      "stop_sequences": [],
      "return_likelihoods": "NONE"
    }');

$headers = array();
$headers[] = 'Authorization: BEARER aaVUfr5ClQXrKKfimzp0VPWT0jAJgOYdegy8ClEZ';
$headers[] = 'Content-Type: application/json';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);

$arr = json_decode($result, true);
$generated_text = $arr["generations"][0]["text"];
$generated_text = convertWhitespaceNewlines($generated_text);

function convertWhitespaceNewlines(&$str) {
  // white space
  $str = str_replace('  ', '&nbsp;', $str);
  // new lines
  $str = str_replace("\n", '<br>', $str);
  return $str;
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>TEST</title>
  </head>

  <body>
    <header>
      <h1>TEST</h1>
    </header>

    <main>
      <p>
        <?php echo $generated_text; ?>
      </p>
    </main>

    <footer>
      <hr>
    </footer>

  </body>
</html>
