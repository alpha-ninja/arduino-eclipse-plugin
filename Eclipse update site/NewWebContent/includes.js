document.getElementsByTagName('header')[0].innerHTML = "<ul>\
<li><a href='./index.html'>Eclipse for Arduino</a></li>\
<li><a href='./faq.html'>FAQ</a></li>\
<li><a href='./getstarted.html'>Get it</a></li>\
<li><a href='./donate.html'>Donate</a></li>\
<li><a href='/'>Blog</a></li>\
<li><a href='http://github.com/'><span class='fa fa-github fa-lg'></span></a></li>\
</ul>";

//INCLUDES
document.getElementsByTagName('body')[0].innerHTML += '<link href="styles.css" rel="stylesheet" type="text/css">\
<link href="font-awesome.css" rel="stylesheet" type="text/css">';

document.getElementsByTagName('footer')[0].innerHTML = "<h2>You can find more information on:</h2>\
<ul>\
<li>Install</li>\
<li>Compatibility</li>\
</ul>";

document.getElementsByTagName('title')[0].innerHTML += " — The Arduino Eclipse Plugin";

document.getElementById('broadcast').innerHTML = "\
<h2>Please help us!</h2>\
<ul>\
	<li>Programmers: Help us at github.</li>\
	<li>Tweet or Blog about us.</li>\
	<li>Send some money!</li>\
</ul>";

document.getElementById('news').innerHTML = "\
<h2>News</h2>\
<p>V2.2 is out</p>";