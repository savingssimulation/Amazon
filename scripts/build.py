import os
import json
# ... (他のimport)

def main():
    # ... (スクレイピングとデータ生成のロジック)

    # 出力先を'public/data.json'に固定
    output_dir = 'public'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    output_path = os.path.join(output_dir, 'data.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(final_data, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully built {output_path}")

if __name__ == "__main__":
    main()