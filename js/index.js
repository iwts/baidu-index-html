// 鼠标点击搜索框时，搜索框边框变蓝
// search_box = getElementById("search-box");

// var click_box = function(){
// 	search_box.style.border = "1px solid #ddd";
// }

// 列表部分js
var more_dt = document.getElementById('more-dt');
var more_all = document.getElementById('more-all');
var dt = more_all.getElementsByTagName("dt");
var dd = more_all.getElementsByTagName("dd");

more_dt.onmouseover = function(){
	more_all.className = "more";
	dt.style.color = "black";
	dt.style.background = "white";
	dd.style.display = "inline-block";
}
more_dt.onmouseout = function(){
	more_all.className = "more-js";
	dt.style.color = "white";
	dt.style.background = "#3385ff";
	dd.style.display = "none";
}