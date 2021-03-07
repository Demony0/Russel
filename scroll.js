var shrink = document.getElementById('name');
var contactSection= document.getElementById('contact');

addEventListener('scroll',function(){
	if (scrollY>0){
		shrink.classList.add('shrink');
	}else if (scrollY==0){
		shrink.classList.remove('shrink');
	}
})