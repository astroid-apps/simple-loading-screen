# Simple Loading Screen
The simplest loading screen. Just write two lines!

最もシンプルなローディング画面です。2行で実装できます。

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

