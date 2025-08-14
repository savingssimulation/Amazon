<?php
namespace App;
use Symfony\Component\Yaml\Yaml;
use Parsedown;
class ContentParser {
    private Parsedown $parsedown;
    public function __construct() {
        $this->parsedown = new Parsedown();
    }
    public function parseAllScenarios(string $directoryPath): array {
        $scenarios = [];
        if (!is_dir($directoryPath)) {
            return []; // ディレクトリが存在しない場合は空を返す
        }
        $files = glob($directoryPath . '/*.md');
        foreach ($files as $file) {
            $content = file_get_contents($file);
            if (preg_match('/^---\s*$(.*)^---\s*$(.*)/ms', $content, $matches)) {
                try {
                    $meta = Yaml::parse(trim($matches[1]));
                    $body = $this->parsedown->text(trim($matches[2]));
                    $scenarios[] = ['meta' => $meta, 'content_html' => $body];
                } catch (\Exception $e) {
                    error_log("YAML Parse Error in {$file}: " . $e->getMessage());
                    continue;
                }
            }
        }
        return $scenarios;
    }
}
