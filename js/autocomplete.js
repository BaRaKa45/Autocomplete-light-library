class autocomplete {

    constructor(element, minLetter = 3, filter = false) {
        this.input = document.getElementById(element);
        this.minLetter = minLetter;
        this.filter = filter;
        this.liClass = "autocomplete-li";
        this.data = [];
        this.init();
    }

    init = () => {
            //retire l'autocompletion du navigateur
            this.input.setAttribute('autocomplete','off');

            //Creation du li et ajout d'une classe
            let li = document.createElement('li');
            li.className = this.liClass;
            //Réglage de la largeur du la liste par rapport a la taille de l'input
            li.style.width = getComputedStyle(this.input).width;

            //Evenement quand on écris dans l'input
            this.addInputEvent(this.input, li);
    };

    addInputEvent = (input, li) => {
        input.addEventListener('input', () => {
            li.innerHTML = '';
            li.remove();
            if (input.value.length >= this.minLetter) {
                let data = this.filter === true ? this.dataFilter(this.data, input) : this.data;
                data.forEach((item) => {
                    let ul = document.createElement('ul');
                    ul.innerText = item;
                    this.addClickEventOnLi(ul, input);
                    li.append(ul);
                    input.after(li);
                });
            }
        });
    };

    addClickEventOnLi = (element, input) => {
        element.addEventListener('click', function () {
            input.value = element.innerText;
            element.parentElement.remove();
        });
    };

    dataFilter = (data, input) => {
        return data.filter(item => item.toUpperCase().indexOf(input.value.toUpperCase()) !== -1);
    };

    setData = (data) => {
        this.data = data;
    };

    setMinLetters = (minLetter) => {
        this.minLetter = minLetter;
    };

    setFilter = (filter) => {
        this.filter = filter;
    }
}
