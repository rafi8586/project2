// JavaScript Document

	function abc()
	{
		document.getElementById('heading').style.background = 'blue';
		document.getElementById('para').style.fontSize = '24px';
	}
	
	
	function readmore()
	{
		document.getElementById('sec-para').style.display = 'block';
		document.getElementById('read').innerHTML = 'Read Less';
	}
	
	
	function example()
	{
		var a = 10;
		var b = 20;
		
		var c = a + b;
		
		//document.write(c);
		window.alert(c);
	}
	
	
	function xyz()
	{
		var x = document.getElementById('sec-para');
		var y = document.getElementById('read');
		
		if(x.style.display == 'block')
		{
			x.style.display = 'none';
			y.innerHTML = 'Read More';
		}
		else
		{
			x.style.display = 'block';
			y.innerHTML = 'Read Less';			
		}
	}
	
	
	
	function chngimg()
	{
		document.getElementById('img1').src = 'images/logo.png';
	}
	
	
	function imgover()
	{
		document.getElementById('img1').src = 'images/logo.png';
	}
	
	function imgout()
	{
		document.getElementById('img1').src = 'images/courses.png';
	}
	
	
	
	
	
	
	
	