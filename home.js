let face=document.getElementById("face");
let input=document.getElementById("input");
let post=document.getElementById("post");



face.addEventListener('submit',function (e){
	e.preventDefault();
	readpost();
})

let data={}
 function readpost(){
	 data['text']=input.value
	
	createpost();
	 
 }
 
 function createpost(){
	 post.innerHTML += `<div>
	 <p>${data.text}</p>
	 <span>
			<i class="bi bi-pencil-square fs-4 px-2 text-success " onclick="change(this)"></i>
			<i class="bi bi-trash3 fs-4 px-2 text-danger" onclick="eraseitem(this)"></i>
	 </span>
	 </div>`
		input.value="";
 
 }
 function change(e){
	 input.value=e.parentElement.previousElementSibling.innerHTML;
	 e.parentElement.parentElement.remove();
 }
  function eraseitem(e){
	  e.parentElement.parentElement.remove();
  }
  
  
  var mymodal=document.getElementById("mymodal");
  var btn=document.getElementById("mybutton");
  
  btn.addEventListener('click',function(e){
	  e.preventDefault();
	  
	  mymodal.classList.toggle("modal");
	 
	  // modal.style.display="block";
	 
	 
  })
 
  
  
  
  function modalhide(){
	   mymodal.classList.toggle("modal");
  }
  


var sub=document.getElementById("sub");


sub.addEventListener('click',function(i){
	i.preventDefault();
	show.classList.remove("imagepost");
	
	var date=new Date();
var local=date.toLocaleTimeString();

	var time=document.getElementById("time");
	time.innerHTML=local;
	
	
})
function delimg(){
	show.classList.add("imagepost");
}

var like=document.getElementById("like");
let count=0;
function likecount(){
	count++;
	if(count==1){
		like.innerHTML="1";
		var clr=document.getElementById("clr");
		clr.style.color="blue";
	}else if(count>1){
		count=0;
		like.innerHTML="0";
		var clr=document.getElementById("clr");
		clr.style.color="black";
	}
}
var comtinput=document.getElementById("inputcomt");
var postcomt=document.getElementById("postcomt");
var inputbtn=document.getElementById("inputbtn");


function commenttext(){
	comm.classList.remove("comment");
	commentpost();
	
}
let comdata={}
 function commentpost(){
		comdata['text']=comtinput.value
	
	send();
	 
 }
 
	
	 function send(){
		 console.log(comdata.text);
	 postcomt.innerHTML += `<div>
	 <p>${comdata.text}</p>
	 </div>`
		comtinput.value="";
 
 }



	
	