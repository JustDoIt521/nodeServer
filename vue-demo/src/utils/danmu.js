const runkeyframes =` @keyframes ball-run{
    0%{
        left: 10px;
        top: 10px;
    }
    100%{
        left: 100px;
        top: 100px;
    }
}`;
const style = document.createElement('style');
// 设置style属性
style.type = 'text/css';
// 将 keyframes样式写入style内
style.innerHTML = runkeyframes;
// 将style样式存放到head标签
document.getElementByTagName('head')[0].appendChild(style);