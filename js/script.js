const baseURL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(baseURL);
        const json = await data.json()

        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();