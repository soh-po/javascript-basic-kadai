// ボタン要素を取得
const button = document.getElementById('btn');

// ボタンがクリックされたら文字を変更
button.addEventListener('click', () => {
    const h2 = document.getElementById('text');
    h2.textContent = 'ボタンがクリックされました';
});