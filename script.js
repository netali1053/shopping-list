const inputGroceries = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');
const classDone = document.querySelector('.done');


inputGroceries.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const messageText = inputGroceries.value;

        const newMessage = document.createElement('div');
        newMessage.textContent = messageText;

        newMessage.addEventListener('click', function() {
            newMessage.classList.toggle('done');
        })

        if (messageText != "") {
            itemsContainer.append(newMessage);
        }

        inputGroceries.value = '';
    }
});





/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */