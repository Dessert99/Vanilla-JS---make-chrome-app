const images = ["0.jpg", "1.jpg", "2.jpg"];

const randomImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImages}`;

document.body.appendChild(bgImage);

/*
🔹 src의 역할
✅ src는 <img> 요소가 표시할 이미지 파일의 경로를 지정하는 속성
✔ bgImage.src = "img/1.jpg";
✔ 이렇게 하면 <img src="img/1.jpg"> 태그가 생성됨.
✔ 브라우저는 "img/1.jpg" 파일을 찾아 화면에 표시함.
*/
