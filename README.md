# Hatena-Blog-Grid-Layout

# セットアップ

## Required Component

- [Node.js](https://nodejs.org/)

## モジュールのインストール

```
$ git clone git@github.com:ausnichts/hatena-blog-grid-layout.git
$ cd hatena-blog-grid-layout
$ npm install
```

# コンパイル

gulp をローカルにインストールしますので、gulpfile.js を実行するために npx が必要です。

npx は npm 5.2 以上に同梱されています。

```
$ npx gulp sass
```

css ディレクトリに `style.css` が作られます。


# 開発

ブログの「デザイン設定」->「カスタマイズ」->「デザインCSS」に下記のコメントを入れてください。

```
/* Responsive: yes */
```

ブログの「設定」->「詳細設定」->「headに要素を追加」に下記のコードを入れてください。

```
<link rel="stylesheet" href="http://localhost:3000/style.css"/>
<script async src="http://localhost:3000/browser-sync/browser-sync-client.js"></script>
```

```
$ npx gulp
```


`*.scss` ファイルを監視し、ブログを自動リロードします。

# ライセンス

このCSSおよびSCSSファイルはMITライセンスのもと自由に複製・再配布できます。 記事本文の書式やコメント欄のスタイルなど、必要な部分だけをコピーして使ってもかまいません。 このデザインテーマをもとにしたテーマの配布も自由です。
