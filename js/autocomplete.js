class autocomplete {
    data = [];
    inputs = null;
    liClass = "autocomplete-li";
    minLetter = 3;

    constructor(elements) {
        this.inputs = document.getElementsByClassName(elements);
        this.init()
    }

    init = () => {
        //liste tous les inputs lié a la classe
        Array.prototype.forEach.call(this.inputs, (input) => {
            //retire l'autocompletion du navigateur
            input.setAttribute('autocomplete','off');

            //Creation du li et ajout d'une classe
            const li = document.createElement('li');
            li.className = this.liClass;
            //Réglage de la largeur du la liste par rapport a la taille de l'input
            li.style.width = getComputedStyle(input).width;

            //Evenement quand on écris dans l'input
            this.addInputEvent(input, li);
        });
    };

    addInputEvent = (input, li) => {
        input.addEventListener('input', () => {
            li.innerHTML = '';

            if (input.value.length >= this.minLetter) {
                let data = this.dataFilter(this.data, input);
                data.forEach((item) => {
                    let ul = document.createElement('ul');
                    ul.innerText = item;
                    this.addClickEventOnLi(ul, input);
                    li.append(ul);
                });
                input.after(li);
            }
        });
    };

    addClickEventOnLi = (element, input) => {
        element.addEventListener('click', function () {
            element.parentNode.remove();
            input.value = element.innerText;
        });
    };

    dataFilter = (data, input) => {
        return data.filter(item => item.toUpperCase().indexOf(input.value.toUpperCase()) !== -1);
    };

    setData = (data) => {
        this.data = data;
    };
}
