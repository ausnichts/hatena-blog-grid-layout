# Hatena-Blog-Grid-Layout

## Required Component

- [Node.js](https://nodejs.org/)

## モジュールのインストール

```
$ git clone git@github.com:ausnichts/hatena-blog-grid-layout.git
$ cd hatena-blog-grid-layout
$ npm install
```

## コンパイル

gulp をローカルにインストールしますので、gulpfile.js を実行するために npx が必要です。

npx は npm 5.2 以上に同梱されています。

```
$ npx gulp sass
```

css ディレクトリに `style.css` が作られます。


## 開発

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

## HTTPS 環境下での開発

[HTTPS環境下でBrowsersyncの自動リロードを実現](https://www.imuza.com/entry/2018/08/08/160915) をご覧ください。

自己署名証明書をインストールすれば HTTPS 環境下でも自動リロードが可能になります。

その場合は、`gulpfile.js` の `browserSync.init` に以下を追加してください。

```
        https: {
            key: "./server.key",
            cert: "./server.crt"
        },
```

## はてなブログProの場合

トップページを一覧表示にした場合、デフォルトではサムネール画像がトリミングされています。オリジナル画像に変更する場合は、「\設定ファイル\footer.html」を 「カスタマイズ」 -> 「フッタ」に入れてください。

詳しくは、[（bug fix）はてなブログ「一覧形式」の画像をオリジナルのものに変える](https://www.imuza.com/entry/2018/06/21/161021)およびその元記事をご覧ください。


## ライセンス

このCSSおよびSCSSファイルはMITライセンスのもと自由に複製・再配布できます。 記事本文の書式やコメント欄のスタイルなど、必要な部分だけをコピーして使ってもかまいません。 このデザインテーマをもとにしたテーマの配布も自由です。
