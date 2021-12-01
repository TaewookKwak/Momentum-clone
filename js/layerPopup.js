const layer = document.querySelector('.todo__layer');
const exitbnt = layer.querySelector('i');
const todobnt = document.querySelector('.todoBtn');

todobnt.addEventListener('click', () => {
    layer.classList.toggle('hidden');
})

exitbnt.addEventListener('click', () => {
    layer.classList.add('hidden');
})