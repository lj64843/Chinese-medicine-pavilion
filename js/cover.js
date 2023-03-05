window.onload = function() {
    //关于我们按钮
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var message = document.getElementById('message');
    console.log(message);
    btn1.onclick = function() {
        if (message.style.display = "none") {
            message.style.display = "block";
            this.style.display = 'none';
            btn2.style.display = 'inline-block';
        }
    }
    btn2.onclick = function() {
        if (message.style.display = "block") {
            message.style.display = "none";
            this.style.display = 'none';
            btn1.style.display = 'inline-block';
        }
    }

    //进入首页
    var go1 = document.getElementById('goto1');
    var go2 = document.getElementById('goto2');
    go1.onclick = function() {
        location.href = "../index.html";
    }
    go2.onclick = function() {
        location.href = "../index.html";
    }
}