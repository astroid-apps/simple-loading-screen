/*
	Simple Loading Screen
	
	2020/10/17 アイコンをdataURLに変更
	2020/08/26 新規作成
*/

window.showLoadingScreen = function(){
	
	//CSS
	const style = document.createElement("style");
	document.head.appendChild(style);
	const sheet = style.sheet;
	
	//IEでは第2引数必須
	sheet.insertRule(".hide_scrollbar { overflow: hidden; }",0);
	sheet.insertRule(".hide_loading_screen { opacity:0.0; transition: 0.5s; }",0);
	
	//LoadingScreen
	const screen = document.createElement("div");
	screen.setAttribute("style","position:absolute;margin:0px;top:0px;right:0px;bottom:0px;left:0px;background-color:#fff;cursor:progress;z-index:100000;");
	
	const center = document.createElement("div");
	center.setAttribute("style","position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);text-align:center;");
	
	const icon = document.createElement("img");
	icon.src = iconDataURL;
	center.appendChild(icon);
	
	const msg = document.createElement("div");
	msg.innerHTML = "Loading...";
	center.appendChild(msg);
	
	screen.appendChild(center);
	
	//init
	document.body.classList.add("hide_scrollbar");
	document.body.appendChild(screen);
	
	//after load event
	addEventListener("load",function(){
		screen.classList.add("hide_loading_screen");
		
		setTimeout(function(){
			document.body.removeChild(screen);
			document.body.classList.remove("hide_scrollbar");
		},500);
	});
};

const iconDataURL = "data:image/gif;base64,R0lGODlhHQAdALMAAP///93d3dXV1dHR0c/Pz83NzZmZmWZmZjIyMgAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAKACwAAAAAHQAdAAAEgVCBSau9V+LNu/9gIoLhSFqIJSaWACJwtVZC7cE4NU91f+MpwK5n+wBTM6KLBGz5ToDYpQitXg7Y7IEz6HoHVy2W++2GxeSydV0xGDAEQtXttsTjJ3q9wAfc8R96bwB8BRN/ch2CFIUUiB50FY2OgJAWk45smGyMfZyfoBUaoQAKEQAh+QQFBwAKACwDAAMAFQAVAAAETVDJSZGlOE+LND4YhyXfAW7XlKyT6aKdtM6te4rKzFI2KOqkjG1E85g0O48yY2g6DUvK0xmdTJvVrFZSKGwn3e43LNaSvWbyVxFec78RACH5BAUHAAoALAMAAwAXABUAAARWUMlJj6U4Y3u0NttFIZ8BTtyIkJTpoqKyzphrSqk8s7WtpDtexqdaeSa3jPHIPBae0MIxQa0motCplYp9arfNsFgiEIwz5fKZklavye03PC1X0Ot2SgQAIfkEBQcACgAsBQADABUAFQAABExQySmNpThPazQuGIcdXwFu13Ssk+minbTOrXuKysxSNijqpIxtRPOYNDuPcslUIJ5QRFMShU6dVel1S0kkuBKvFywec8vfc5lsJlMiACH5BAUHAAoALA0AAwANABcAAARFsEhFq5XFaoW1uVNljFVHjShloqQ6sd+msLIY1/h27Pyh97sfMFdDIHJGoybBVCSVFWaC8jxSpJXqtZmFKrAW63aKA9ciACH5BAUHAAoALAUABQAVABUAAARLUMlJqyo228K156C3gZhIkaU5kerYvq8hz0ZMy/YNi0mSHQdPr1cBAjNDImKpMB4pSZ9iiZA4g5LohDq5ToYUbvf5rYi7qjNMbYkAACH5BAUHAAoALAMADQAXAA0AAARAMMmZlL236F3oxCC3eRKIiZqpriuCqIbBWq4LxjFb20ev4DnT7qXoHSxAGWZ4MV6SoBrG+QxGQdTnbOrbrrKqCAAh+QQJBwAKACwAAAAAHQAdAAAEWVDJSau9OOvNu/8gmIRaYpKXqaKWerKUO8KTS8fzrStI7yO0ny8oBO6OlcPhUiiElMpKs/mBRg1YxZTKsS4VWINk69R4J+EJeQOlpNVcduWtZtFvd6R+z4kAADs=";
