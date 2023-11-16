let over=document.getElementById("form");
let name=document.getElementById("uname");
let email=document.getElementById("uemail");
let upwd=document.getElementById("upwd");
let error=document.getElementsByClassName("error");


over.addEventListener('submit',function (e){
	 e.preventDefault();
		
	test(name,0,"Username black");	
	test(email,1,"Email black");	
	test(upwd,2,"Password black");	
	
	
});

function test(id,serial,message){
	if(id.value.trim()==""){
		error[serial].innerHTML = message
		id.style.border="1px solid red";
		
	}
	else{
		error[serial].innerText="";
		id.style.border="1px solid green";
		update();
	}
}
function update(){
	
	if(name.value&&email.value&&upwd.value){
	localStorage.setItem('Idname',JSON.stringify(name.value)),
	localStorage.setItem('Idemail',JSON.stringify(email.value)),
	localStorage.setItem('Idpass',JSON.stringify(upwd.value));
	
	location.href="login.html";
	}
}
