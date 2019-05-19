function transformToWinbaoxian(url) {
	const u = 'https://j.winbaoxian.com/webview/page?url='
	return u + encodeURIComponent(url)
}
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	// console.log(tabs[0]);
	const url = transformToWinbaoxian(tabs[0].url);
	let title = document.getElementById('title');
	// let u = document.getElementById('url');
	// u.innerHTML = url;
	title.innerHTML = tabs[0].title;
	QRCode.toCanvas(canvas, url, { width: 300 }, function (error) {
	  if (error) console.error(error)
	  console.log('success!');
	})
})
