export function refresh(element) {
    element.insertAdjacentHTML('beforeend', '<li>Name: Score </li> ');
}

export function submit(name, score) {
    alert(name + ': ' + score);
}