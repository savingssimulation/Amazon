// ページの全てのコンテンツが読み込まれた後に、このコードを実行します
document.addEventListener('DOMContentLoaded', () => {
    // コンソールに、成功のメッセージを表示します
    console.log('JavaScript is running correctly!');
    
    // id="js-message"という要素を探して、その中身を書き換えます
    const messageElement = document.getElementById('js-message');
    if (messageElement) {
        messageElement.textContent = 'JavaScriptが正常に動作しました！';
        messageElement.style.color = 'green';
        messageElement.classList.remove('hidden');
    }
});