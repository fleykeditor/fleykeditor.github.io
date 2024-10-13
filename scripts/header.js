class Header {
    constructor() {
        this.root = document.getElementById('header');
        this.addHeader();
    }
    
    addLink(list, href, text) {
        const item = document.createElement('li');
        list.appendChild(item);

        const link = document.createElement('a');
        link.textContent = text;
        link.href = href;
        item.appendChild(link);
    }

    addHeader() {
        const container = document.createElement('div');
        container.className = 'container';
        this.root.appendChild(container);

        const hbody = document.createElement('div');
        hbody.className = 'header-body';
        container.appendChild(hbody);

        const nav = document.createElement('nav');
        nav.className = 'header-nav';
        hbody.appendChild(nav);

        const logo = document.createElement('div');
        logo.className = 'logo';
        nav.appendChild(logo);

        const logoUrl = document.createElement('a');
        logoUrl.href = '/';
        logo.appendChild(logoUrl);

        const logoImg = document.createElement('img');
        logoImg.src = './img/logo/main.png';
        logoUrl.appendChild(logoImg);

        const logoText = document.createElement('h3');
        logoText.textContent = 'Fleykeditor';
        logoUrl.appendChild(logoText);

        const headerList = document.createElement('ul');
        headerList.className = 'header-list';
        headerList.id = 'menu';
        nav.appendChild(headerList);

        this.addLink(headerList, '/', 'Главная');
        this.addLink(headerList, './dl.html', 'Демонлист');
        this.addLink(headerList, 'https://fleykgdps.ps.fhgdps.com/dashboard/', 'Дэшборд');

        const utils = document.createElement('div');
        utils.className = 'header-utils';
        hbody.appendChild(utils);

        const dwnBtn = document.createElement('a');
        dwnBtn.className = 'download-gdps-btn';
        dwnBtn.href = './download.html';
        dwnBtn.textContent = 'Скачать';
        utils.appendChild(dwnBtn);

        document.body.style.overflowY = 'auto';
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            headerList.classList.toggle('active');
            document.body.style.overflowY = document.body.style.overflowY === 'auto' ? 'hidden' : 'auto';
        });
        utils.appendChild(hamburger);

        const span = document.createElement('span');
        hamburger.appendChild(span);
    }

    root;
}

const header = new Header();