import os
import json
# import time #
# import requests #
# from bs4 import BeautifulSoup # (スクレイピング実装時に有効化)

def main():
    # 現時点では、スクレイピングの代わりに、
    # PA-API承認前用の、一貫したダミーデータを生成する
    final_data = {
        "scenarios": [
            {
                "meta": {
                    "title": "【公開準備中】子育て世代の節約シミュレーション",
                    "description": "現在、価格情報を取得中です。まもなく詳細なシミュレーションが表示されます。",
                    "slug": "family-essentials"
                },
                "content_html": "<h3>サイトは正常に動作しています</h3><p>AmazonからのPA-APIの承認後、ここにリアルな商品情報と節約額が表示されます。</p>",
                "products": [
                    {
                        "asin": "B08P54L71B",
                        "name": "（商品情報取得中...）",
                        "price": 0,
                        "url": "https://www.amazon.co.jp/dp/B08P54L71B"
                    }
                ]
            }
        ]
    }

    output_dir = 'public'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    output_path = os.path.join(output_dir, 'data.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(final_data, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully built dummy data to {output_path}")

if __name__ == "__main__":
    main()