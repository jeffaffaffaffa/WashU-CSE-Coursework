<?php
    function createList($listType="user") {
        $user = htmlentities($_SESSION["user"]); // Since this file is always included, the session has already been started
        $filePath = sprintf('/home/module2-users/%s-uploads/%s', $listType, $user);
        // Check if user directory exists; if it doesn't, create it.
        if (!file_exists($filePath)) {
            mkdir($filePath);
        }
        
        $fileArray = array_values(array_diff(scandir($filePath), array('.', '..'))); // found on https://stackoverflow.com/questions/15774669/list-all-files-in-one-directory-php and https://www.php.net/manual/en/function.scandir.php

        for ($i=0; $i<count($fileArray); $i++) {
            // found on https://stackoverflow.com/questions/528445/is-there-any-way-to-return-html-in-a-php-function-without-building-the-return and https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc
            echo <<<HTML
            <li>
            <div class="file"> $fileArray[$i]
                    <form action="view-$listType" method="GET"> 
                        <input type="submit" value="View">
                        <input type="hidden" name="file" value="$fileArray[$i]"/> <!-- from https://stackoverflow.com/questions/19814082/passing-a-value-through-button-to-php-function -->
                    </form>

                    <form action="delete.php" method="POST">
                        <input type="submit" value="Delete">
                        <input type="hidden" name="file" value="$fileArray[$i]"/>
                        <input type="hidden" name="userOwned" value="$listType" />
                    </form>
HTML;
            if ($listType == "user") {
                echo <<<HTML
                        <form action="share.php" method="GET">
                                Share With: <input name="sharedUser" type="text" />
                                <input type="hidden" name="file" value="$fileArray[$i]" />
                                <input type="submit" value="Share a Copy"/>
                        </form>
HTML;
            }
            
            echo "</div>";
            echo "</li>";
        }
    }
?>