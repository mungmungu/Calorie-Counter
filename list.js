document.write("<table>");
document.write("<th>Food</th>");	
document.write("<th>Calorie</th>");
	
for (var i = 0; i < arr.length; i++) {
	document.write("<tr><td><li>" + arr[i][0] + "</td>");
	document.write("<td>" + arr[i][1] + "kcal</td>");
	document.write("<td><input type='button' onclick=update() value='edit'</td>");
	document.write("<td><input type='button' onclick=delete() value='delete'</li></td></tr>");
}
document.write("</table>");