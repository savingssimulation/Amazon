<?php
// ... (ファイルの先頭部分は変更なし) ...
require_once __DIR__ . '/vendor/autoload.php';
use App\ContentParser;
use App\PaApiHandler;
use App\SimulationEngine;
use App\HtmlRenderer;

$accessKey = getenv('PAAPI_ACCESS_KEY') ?? '';
$secretKey = getenv('PAAPI_SECRET_KEY') ?? '';
$partnerTag = getenv('PAAPI_ASSOCIATE_TAG') ?? '';

if (empty($accessKey) || empty($secretKey) || empty($partnerTag)) {
    echo "Warning: PA-API credentials are not set. Site will be generated without product data.\n";
}

$contentParser = new ContentParser();
$paApiHandler = new PaApiHandler($accessKey, $secretKey, $partnerTag);
$simulationEngine = new SimulationEngine();
$htmlRenderer = new HtmlRenderer(__DIR__ . '/templates');

echo "Site generation started...\n";

try {
    $scenarios = $contentParser->parseAllScenarios(__DIR__ . '/content/scenarios');
    // ... (以降のシナリオ処理は変更なし) ...

    foreach ($scenarios as $scenario) {
        $simulationResult = $simulationEngine->simulate($scenario['meta']['products'], $paApiData);
        
        // ★★★ ここが修正箇所 ★★★
        // ページのタイトルから古いサイト名を削除し、_layout.htmlに委ねる
        $pageData = [
            'title' => $scenario['meta']['title'] ?? 'シナリオ', // "| Fixed-term delivery" を削除
            'description' => $scenario['meta']['description'] ?? '',
            'scenario' => $scenario,
            'simulation' => $simulationResult
        ];
        // ...
        $htmlRenderer->renderAndSave('scenario.html', $pageData, $outputFile);
        // ...
    }

    // ★★★ ここも修正箇所 ★★★
    // トップページのタイトルも、_layout.htmlに委ねる
    $indexData = [
        'title' => 'Amazon定期おトク便 節約額シミュレーター', // "| Fixed-term delivery" を削除
        'description' => 'Amazon定期おトク便の賢い使い方を、具体的なモデルケースと共に解説。',
        'scenarios' => $renderedScenariosForIndex
    ];
    $htmlRenderer->renderAndSave('index.html', $indexData, __DIR__ . '/public/index.html');

} catch (Exception $e) {
    die("An error occurred: " . $e->getMessage() . "\n");
}

echo "Site generation completed successfully.\n";