
function component(): JQuery {
    let element = $('<div id="HELLO">');
    element.append('<b>JQuery!</b><br>');
    element.append('<b>WebPack!</b><br>');
    element.append('<b>Typescript!</b><br>');
    element.append('<a href="/login">Login</a><br>');
    return element;
}

$(() => {
    $('body').append(component());
});