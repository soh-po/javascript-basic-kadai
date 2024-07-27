const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

let count = 0;
const len = holidays.length - 1;


// for文を使った場合
for (let i = 0; i <= len; i += 1) {
    console.log(holidays[i]);
}

// while文を使った場合
while (count <= len) {
    console.log(holidays[count]);
    count += 1;
}
