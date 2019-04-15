<?php
  echo "var ip = '".getenv("REMOTE_ADDR")."';"; 
?>

document.write("<font color='#ff0000'><b>"+ip+"</b></font>");