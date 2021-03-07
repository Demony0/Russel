var expanded=document.getElementById('contact');
var folded = document.getElementById('contact');


expanded.addEventListener('click',function(){
	if (expanded.classList=='expanded'){
		expanded.classList.remove('expanded');
	}else{
		expanded.classList.add('expanded');
	}
	console.log('click');
});
