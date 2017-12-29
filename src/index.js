import _ from 'lodash';
import './style/crawler.css';
import Icon from './assets/img/test.jpg';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Levi Moon'], ' ');
    element.classList.add('page-head');

    // 将图像添加到我们现有的 div。
    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    //
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console! levi';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

// document.body.appendChild(component());
document.getElementById('document_page').appendChild(component());