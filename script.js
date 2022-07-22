// const cat_btn = document.getElementById("cat_btn");
// const dog_btn = document.getElementById("dog_btn");
// const cat_result = document.getElementById("cat_result");
// const dog_result = document.getElementById("dog_result");

// cat_btn.addEventListener('click', getRandomCat);
// dog_btn.addEventListener('click', getRandomDog);

// function getRandomCat() {
//     fetch('https://cataas.com/cat')
//     .then(res => res.json())
//     .then(data => {
//         cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
//     })
// }

// function getRandomDog() {
//     fetch('https://random.dog/woof.json').then(res => res.json()).then(data => {
//         if (data.url.includes('.mp4')) {
//             getRandomDog();
//         } else {
//             cat_result.innerHTML = `<img src=${data.url} alt="dog" />`;
//         }
//     })
// }

const cat_btn = document.getElementById('cat_btn');
// const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

cat_btn.addEventListener('click', getRandomCat);
// cat_btn.addEventListener('click', getRandomDog);
// dog_btn.addEventListener('click', getRandomDog);

async function getRandomCat() {
	// fetch('https://aws.random.cat/meow')
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
	// 	});
    const response = await fetch ('https://aws.random.cat/meow');
    const cat = await response.json();
    cat_result.innerHTML = `<img src=${cat.file} alt="cat" />`

    getRandomDog();
}

async function getRandomDog() {
	const response = await fetch ('https://aws.random.cat/meow');
    const cat = await response.json();
    dog_result.innerHTML = `<img src=${cat.file} alt="cat" />`
}

setInterval(getRandomCat, 8000);
// setInterval(getRandomDog, 8000);
