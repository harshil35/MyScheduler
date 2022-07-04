var enter=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul= document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength()
{
	return input.value.length;
}

function addDeleteButton(parent)
{
	var deleteButton=document.createElement("button");
	deleteButton.innerHTML="Delete";
	deleteButton.classList.toggle("button-81");
	deleteButton.addEventListener("click",
		function()
		{
			this.parentElement.remove();
		});
	parent.appendChild(deleteButton);
}

function addToList()
{
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value+"  "));
	li.addEventListener("click",addToggle);
	addDeleteButton(li);
	ul.appendChild(li);
	input.value="";
}

function addListAfterKeyPress(event)
{
	if(inputLength()>0 && event.which===13)
	{
		addToList();
	}
}

function addListAfterClick()
{
	if(inputLength()>0)
	{
		addToList();
	}	
}

function addToggle()
{
  this.classList.toggle("done");
}

enter.addEventListener("click",
	addListAfterClick);

input.addEventListener("keypress",
	addListAfterKeyPress);


for(var i=0; i<list.length; i++){
 list[i].addEventListener("click", addToggle);
 addDeleteButton(list[i]);
}

