var student={
	name:"sagar",
	address:"arithang",
	age:24
};
console.log(student.age);


var nested=document.getElementById('nested');
for(i=0;i<10;i++)
{
	var row=document.createElement("tr")
	nested.append(row);
	
	for(j=0;j<10;j++)
	{
	var col=document.createElement("td")
		if(i%2==0){
			if(j%2==0)
				col.setAttribute("Class","Class1");
			else
			col.setAttribute("Class","Class2");
			}			
		else {
		    	if(j%2 ==0)
             col.setAttribute("Class","Class2");
                 else
				col.setAttribute("Class","Class1");
			}
			
	/*col.setAttribute("Class","tableData")*/
	row.append(col);
    }
}

function indexAt(str,char){
	for(i=0; i< str.length;i++){
		if(str.charAt (i)==char){
			console.log(i);
			break;
		    }


        }
  }

  indexAt("dog", "g");


  function includeschar(str,char){
  	for(var i = 0;i<str.length;i++){
		if(str.charAt(i)==char){
	       return true;
        }
  	 }
  	 return false;
  }

console.log( includeschar("fish", "g"));


function SliceString(str,start,stop){
var word="";
for(i=start;i<=stop;i++){
	word+=str[i];
}
console.log(word);
}
SliceString("apple",1,3);

function Replace(str, index, newChar){
	var string1=str.slice(0,index);
	var string2=str.slice(index+1);
	console.log(string1+newChar+string2);


}
Replace("butter", 1,"e");
