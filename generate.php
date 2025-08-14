<?php
// --- 設定 ---
$siteTitle = "savingssimulation";
$baseUrl = "/Amazon/"; // GitHub Pagesのリポジトリ名

// --- データ ---
$scenarios = [
    [
        'slug' => 'test-scenario',
        'title' => '【検証用】シナリオページ',
        'content' => '<h3>このページが表示されれば、CSSとJavaScriptは正しく動作しています。</h3>'
    ]
];

// --- HTML生成関数 (ヘッダーとフッターを共通化) ---
function generate_html_page($title, $content, $baseUrl) {
    // heredoc構文でHTMLテンプレートを作成
    return <<<HTML
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{$title}</title>
    <link rel="stylesheet" href="{$baseUrl}style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1><a href="{$baseUrl}">{$GLOBALS['siteTitle']}</a></h1>
        </header>
        <main>
            {$content}
            <p id="js-message" class="hidden">JavaScriptが動作していません。</p>
        </main>
    </div>
    <script src="{$baseUrl}main.js"></script>
</body>
</html>
HTML;
}

// --- メイン処理 ---
$publicDir = __DIR__ . '/public';
if (!is_dir($publicDir)) { mkdir($publicDir, 0755, true); }

// 1. トップページを生成
$indexContent = "<h2>シナリオ一覧</h2><ul>";
foreach ($scenarios as $scenario) {
    $url = $baseUrl . $scenario['slug'] . '.html';
    $indexContent .= "<li><a href='{$url}'>{$scenario['title']}</a></li>";
}
$indexContent .= "</ul>";
file_put_contents($publicDir . '/index.html', generate_html_page("トップページ | {$siteTitle}", $indexContent, $baseUrl));

// 2. シナリオページを生成
foreach ($scenarios as $scenario) {
    file_put_contents(
        $publicDir . '/' . $scenario['slug'] . '.html', 
        generate_html_page("{$scenario['title']} | {$siteTitle}", $scenario['content'], $baseUrl)
    );
}

echo "Site generation completed successfully.";