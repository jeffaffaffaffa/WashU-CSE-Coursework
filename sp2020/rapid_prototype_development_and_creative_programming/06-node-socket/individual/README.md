# CSE330
464957

Attempting to open phpinfo.php prompts the browser (Safari in my case) to ask to download the file.

phpinfo.php behaves the way it does because we are no longer running an Apache server, so it can no longer deal with PHP files; node.js is now our backend, which supports JavaScript. This makes sense, because the browser, even though it is unable to open it, downloads for user to use potentially for future reference. Note, it is possible for php to run on node.js, it is just not ideal (source: https://stackoverflow.com/questions/6542169/execute-php-scripts-within-node-js-web-server).

Basic link (without /hello.txt for example): http://ec2-18-220-90-16.us-east-2.compute.amazonaws.com:3456
- Note: link will not work because it is on same port as group portion.