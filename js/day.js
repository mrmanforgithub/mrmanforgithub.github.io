var d = new Date()
m = d.getMonth() + 1
dd = d.getDate()
y = d.getFullYear()

// 公祭日
if (m == 9 && dd == 18) {
	document
		.getElementsByTagName('html')[0]
		.setAttribute('style', 'filter: grayscale(60%);')
}

if (m == 12 && dd == 13) {
	document
		.getElementsByTagName('html')[0]
		.setAttribute('style', 'filter: grayscale(60%);')
}

if (m == 7 && dd == 14) {
	//建站日
	if (sessionStorage.getItem('isPopupWindow') != '1') {
		alert('Moran的温馨小屋建站' + (y - 2024).toString() + '周年啦！')
		sessionStorage.setItem('isPopupWindow', '1')
	}
}
