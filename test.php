#!/usr/local/bin/php
<?php
$curl = curl_init();
$file_name_with_full_path = '/net/laguna/h1/a/adithib1/public_html/php_practice/qualtrics-test.txt';
if (function_exists('curl_file_create')) { // php 5.5+
    $cFile = curl_file_create($file_name_with_full_path);
  } else { // 
    $cFile = '@' . realpath($file_name_with_full_path);
  }
//   $post = array('extra_info' => '123456','file_contents'=> $cFile);
//   $ch = curl_init();
//   curl_setopt($ch, CURLOPT_URL,$target_url);
//   curl_setopt($ch, CURLOPT_POST,1);
//   curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
//   $result=curl_exec ($ch);
//   curl_close ($ch);

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://ca1.qualtrics.com/API/v3/surveys?name=Test',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('fileUrl'=>'https://www.pic.ucla.edu/~adithib1/php_practice/qualtrics-test.txt','name'=>"Test", 'contentType'=> 'application/vnd.qualtrics.survey.txt'),

 //CURLOPT_POSTFIELDS => array('file'=> new CURLFILE('./qualtrics-test.txt', 'text/plain'),'name'=>"Test"),
  CURLOPT_HTTPHEADER => array(
    'X-API-TOKEN: z93joSb5GT3IBywmz9cGCdFfe8QFop2Y64rn7jNr'
  ),
));


$response = curl_exec($curl);

curl_close($curl);
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title> Pic40 A Intro</title>
        <script src="hello.js?v=1" defer></script>
    </head>
    <body>
        <header>
        </header>

        <main>
        <iframe src="https://berkeley.qualtrics.com/jfe/form/SV_7PQPo6RAb6VziDk" height="800px" 
            width="600px" scrolling="yes" class="iframe-class" frameborder="0"></iframe>
        </main>

        <footer>
            &copy Adithi Balasubramanian, 2023
        </footer>
    </body>

</html>