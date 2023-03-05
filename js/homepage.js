window.onload = function() {
    var ip = document.querySelector('.ip');
    var ip_img = ip.querySelector('img');
    var chat = document.querySelector('.chat');
    var close = document.querySelector('.icon-guanbi');
    var first_question = document.querySelector("#first_question");
    ip_img.onclick = function() {
        chat.style.display = 'block';
        setTimeout(function() {
            first_question.style.opacity = '1';
        }, 500);
    }

    close.onclick = function() {
        chat.style.display = 'none';
    }

    var chat_box = document.querySelector('.chat_box');
    var input_text = document.querySelector('textarea');
    var send_btn = document.querySelector('.send');
    input_text.onfocus = function() {
        input_text.value = '';
        input_text.style.color = 'black';
    }
    input_text.onblur = function() {
        if (input_text.value == '') {
            input_text.value = '您可以在这里输入想和小本说的话哦';
            input_text.style.color = 'silver';
        }
    }
    send_btn.addEventListener("click", function() {
        var user_div = document.createElement('div');
        var ip_div = document.createElement('div');
        var user_input = document.createElement('p');
        var ip_input = document.createElement('p');
        user_div.className = 'user_div';
        ip_div.className = 'ip_div';
        user_input.className = 'user_input';
        ip_input.className = 'ip_input';
        chat_box.appendChild(user_div);
        user_div.appendChild(user_input);
        user_input.innerHTML = input_text.value;
        setTimeout(function() {
            user_div.style.opacity = '1';
        }, 500);
        chat_box.appendChild(ip_div);
        ip_div.appendChild(ip_input);
        if (input_text.value == '' || input_text.value == '您可以在这里输入想和小本说的话哦') {
            user_input.innerHTML = '';
            ip_input.innerHTML = '您并没有输入内容呢';
        } else if (input_text.value !== '') {
            if (input_text.value == '你好' || input_text.value == 'hello' || input_text.value == 'hi' || input_text.value == '嗨') {
                ip_input.innerHTML = '你好呐🌺';
            } else if (input_text.value == '再见' || input_text.value == 'byebye' || input_text.value == '拜拜') {
                ip_input.innerHTML = '拜拜，下次见哦🍀';
            } else if (input_text.value == '谢谢') {
                ip_input.innerHTML = '不客气呢🌻';
            } else {
                ip_input.innerHTML = '抱歉，您输入的问题小本暂时无法解答。请稍后再来询问。';
            }
        }

        setTimeout(function() {
            ip_div.style.opacity = '1';
        }, 1100);
        input_text.value = '您可以在这里输入想和小本说的话哦';
        input_text.style.color = 'silver';
        setTimeout(function() {
            chat_box.scrollTop = chat_box.scrollHeight;
        }, 100);
    });

    //四大典籍
    var books = document.querySelector('.threeleft').querySelectorAll('input');
    books[0].onclick = function() {
        location.href = "./html/二级及以下页面/书籍子页/难经.html";
    }
    books[1].onclick = function() {
        location.href = "./html/二级及以下页面/书籍子页/伤寒杂病论.html";
    }
    books[2].onclick = function() {
        location.href = "./html/二级及以下页面/书籍子页/黄帝内经.html";
    }
    books[3].onclick = function() {
        location.href = "./html/二级及以下页面/书籍子页/神农本草经.html";
    }

    //望闻问切
    var look = document.getElementById('look');
    look.onclick = function() {
        location.href = "./html/二级及以下页面/望.html";
    }
    var listen = document.getElementById('listen');
    listen.onclick = function() {
        location.href = "./html/二级及以下页面/闻.html";
    }
    var ask = document.getElementById('ask');
    ask.onclick = function() {
        location.href = "./html/二级及以下页面/问.html";
    }
    var touch = document.getElementById('touch');
    touch.onclick = function() {
        location.href = "./html/二级及以下页面/切.html";
    }

}