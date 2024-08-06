// ボタン要素を取得
const button = document.getElementById('btn');
const h2 = document.getElementById('text');

// ボタンがクリックされたら文字を変更
button.addEventListener('click', () => {
    setTimeout(() => {
        h2.textContent = 'ボタンをクリックしました';
    }, 2000);
});