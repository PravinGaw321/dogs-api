export const tempAlert=(msg, duration)=> {
    var el = document.createElement("div");
    el.classList.add('alert-box');
    el.innerHTML = msg;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
}
