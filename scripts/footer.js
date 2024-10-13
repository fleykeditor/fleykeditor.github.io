class Footer {
    constructor() {
        this.root = document.getElementById('footer');
        this.addFooter();
    }

    addColumn(name) {
        const column = document.createElement('ul');
        column.className = 'footer-column';
        this.columnsDiv.appendChild(column);

        const li = document.createElement('li');
        column.appendChild(li);

        const h3 = document.createElement('h3');
        h3.textContent = name;
        column.appendChild(h3);

        return column;
    }

    addColumnLink(column, href, text) {
        const li = document.createElement('li');
        column.appendChild(li);

        const link = document.createElement('a');
        link.href = href;
        link.textContent = text;
        link.className = 'footer-link';
        li.appendChild(link);
    }

    addFooter() {
        const container = document.createElement('div');
        container.className = 'container';
        this.root.appendChild(container);

        const fbody = document.createElement('div');
        fbody.className = 'footer-body';
        container.appendChild(fbody);

        this.columnsDiv = document.createElement('div');
        this.columnsDiv.className = 'footer-columns';
        fbody.appendChild(this.columnsDiv);

        const column1 = this.addColumn('Приватный сервер');
        const column2 = this.addColumn('Команда');

        this.addColumnLink(column1, 'https://discord.gg/TaZBNtAv', 'Дискорд');
        this.addColumnLink(column1, './download.html', 'Скачать');
        this.addColumnLink(column1, 'https://t.me/fleykeditor', 'Телеграм');
        this.addColumnLink(column1, 'https://www.youtube.com/@Fleykgdps', 'Ютуб');

        this.addColumnLink(column2, 'https://github.com/shizuketsu', 'GitHub');

        const copyright = document.createElement('div');
        fbody.appendChild(copyright);

        const h3 = document.createElement('h3');
        h3.textContent = 'Fleykeditor © 2024';
        copyright.appendChild(h3);
    }
    
    root;
    columnsDiv;
}

const footer = new Footer();