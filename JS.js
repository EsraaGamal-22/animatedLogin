/* const---> refer to constant variable(can not be resign values to it).
queryselectorAll() --> Get all elements in the document with class="input".*/
const inputs=document.querySelectorAll('input');
function focusFun()
{
    /* let --> allows you to declare variables that are limited to a scope of a block statement*/
    let parent=this.parentNode.parentNode;
   
    parent.classList.add('focus');
 

}
function blur(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

/*forEach() method--> executes a provided function once for each array element.*/
inputs.forEach(input => {
    /*addeventlistern -->Add an event listener that fires when a user focus
    element.addEventListener(event, listener);*/
	input.addEventListener("focus",focusFun);
	input.addEventListener("blur", blur);
});