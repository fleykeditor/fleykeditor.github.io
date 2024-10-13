class Demonlist {
    constructor() {
        this.list = document.getElementById('dl');
        this.loadLevels();
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    loadLevels() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './demonlist/dl.txt?' + this.getRandomInt(0, 999), true);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const lines = xhr.responseText.split('\n');

                for(let i = 0; i < lines.length; i++) {
                    if(!lines[i]) continue;

                    const params = lines[i].split(';');
                    this.addLevel(params[0], params[1], params[2], params[3]);
                }
            } else {
                console.error('Ошибка при выполнении запроса: ', xhr.statusText);
            }
        }

        xhr.send();
    }

    addLevel(id, lvlname, author, link) {
        const item = document.createElement('li');
        item.addEventListener('click', () => window.location.href = link);
        item.className = 'dl-item';
        this.list.appendChild(item);

        const img = document.createElement('img');
        img.src = `./img/levels/${id}.png`;
        item.appendChild(img);

        const text = document.createElement('div');
        text.className = 'dl-item-text';
        item.appendChild(text);

        const h3 = document.createElement('h3');
        h3.textContent = `#${this.position} ${lvlname}`;
        text.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = `By ${author}`;
        text.appendChild(p);

        this.position++;
    }

    position = 1;
    list;
}

const dl = new Demonlist();