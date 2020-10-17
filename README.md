# Simple Loading Screen
The simplest loading screen. Just read 3.3KB JavaScript file  write two lines! This script shows a loading screen until the window load event.

最もシンプルなローディング画面です。3.3KBのJavaScriptファイルを追加して、2行書けば実装できます。Window loadイベントが発生するまでの間、ローディング画面を表示します。

# Usage

1. Please download the file ```./dist/loading.js```.
1. Read the file with the script tag in the header part.
   ```HTML
   <script src="loading.js"></script>
   ```
1. Execute showLoadingScreen() immediately after the body tag.
   ```HTML
   <script>showLoadingScreen();</script>
   ```
   
# Example of full HTML.

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
# Sample image

![image](https://user-images.githubusercontent.com/73022530/96339821-ea4c2480-10d1-11eb-8e6a-e6462ed887fd.png)


