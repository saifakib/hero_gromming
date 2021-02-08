let getbtn = document.querySelector('#get');
let postbtn = document.querySelector('#post');

//common 
const xmlRequest = function (method, url, data) {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(data);

    xhr.onload = function () {
        if (xhr.status >= 400) {
            let error = `Something was wrong`;
            return error;
        } else {
            return xhr.response;
        }
    }
    xhr.onerror = function (e) {
        return e;
    }
};

const getInfo = function () {
    let result = xmlRequest('GET', 'https://jsonplaceholder.typicode.com/todos');
    console.log(result[0]);
}

const postInfo = function () {

    let response = xmlRequest(
        'POST',
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    );
    console.log(response);
}


getbtn.addEventListener('click', getInfo);

postbtn.addEventListener('click', postInfo);