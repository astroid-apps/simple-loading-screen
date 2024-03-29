# Simple Loading Screen
The simplest loading screen. Just read a 2.7KB JavaScript file and write two lines! This script shows a loading screen until the window load event.

最もシンプルなローディング画面です。2.7KBのJavaScriptファイルを1個追加して、2行書けば実装できます。Window loadイベントが発生するまでの間、ローディング画面を表示します。

# Demo

https://astroid-apps.github.io/simple-loading-screen/

# Usage

1. Please download the file [./loading.js](./loading.js).
1. Read the file with the script tag in the header part.

   ```HTML
   <script src="loading.js"></script>
   ```
1. Execute ```showLoadingScreen()``` immediately after the ```<body>``` tag.

   ```HTML
   <script>showLoadingScreen();</script>
   ```
   
Example of full HTML.
```HTML
<!doctype html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<script src="loading.js"></script>
		
		<title>Simple Loading Screen</title>
	</head>
	<body>
		<script>showLoadingScreen();</script>
		
		<!-- Some heavy image -->
		<img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73884/world.topo.bathy.200411.3x5400x2700.jpg">
		
	</body>
</html>
```
# Sample Image

![sample](./sample.png)


