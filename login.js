 let hole=document.getElementById("hole");
 
 
			
	hole.addEventListener('submit',function(e){
		e.preventDefault();
		let uemail=document.getElementById("uemail").value;
		let upwd=document.getElementById("upwd").value;
		let checkname=JSON.parse(localStorage.getItem('Idemail'));
		let checkpass=JSON.parse(localStorage.getItem('Idpass'));
		if(uemail==checkname&&upwd==checkpass ){
			location.href="home.html";
		}else{
			alert("not match")

		}
		
});




