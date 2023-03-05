window.onload = function() {
    var back = document.getElementById('back');
    back.onclick = function() {
        location.href = "../../index.html";
    }

    //四大经典
    var content = document.querySelector('.content');
    var navs = content.querySelectorAll('.nav');
    var cons = content.querySelectorAll('.con');
    for (var i = 0; i < navs.length; i++) {
        navs[i].setAttribute('index', i);
        navs[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f7d68e';
        });
        navs[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = '#0e4738';
        });
        navs[i].addEventListener('click', function() {
            var index = parseInt(this.getAttribute('index'));
            for (var i = 0; i < navs.length; i++) {
                navs[i].style.backgroundColor = '#0e4738';
            }
            for (var j = 0; j < cons.length; j++) {
                cons[j].style.display = 'none';
            }
            cons[index].style.display = 'block';
            this.style.backgroundColor = '#f7d68e';
        });
    }

    //现代书籍跳转
    var pic_text = document.querySelector('.pic_text');
    var pic_btns = pic_text.querySelectorAll('button');
    pic_btns[0].onclick = function() {
        location.href = "../二级及以下页面/书籍子页/轻轻松松学中药方.html";
    }
    pic_btns[1].onclick = function() {
        location.href = "../二级及以下页面/书籍子页/经方百案研读.html";
    }
    pic_btns[2].onclick = function() {
        location.href = "../二级及以下页面/书籍子页/疑难病证思辨录.html";
    }

    //表单验证-邮箱
    var footer = document.querySelector('footer');
    var inputs = footer.querySelectorAll('input');
    var btn = footer.querySelector('button');

    inputs[0].addEventListener('focus', function() {
        btn.innerHTML = '确定';
        btn.style.color = 'white';
        if (this.value === '您所需要的书籍名称') {
            this.value = '';
        }
    });
    inputs[0].addEventListener('blur', function() {
        if (this.value === '') {
            this.value = '您所需要的书籍名称';
        }
    });
    inputs[1].addEventListener('focus', function() {
        btn.innerHTML = '确定';
        btn.style.color = 'white';
        if (this.value === '您的电子邮箱' || this.value === '您输入的邮箱格式有误，请重新输入') {
            this.value = '';
            this.style.color = 'white';
        }
    });
    inputs[1].addEventListener('blur', function() {
        if (this.value === '') {
            this.value = '您的电子邮箱';
        } else if (this.value !== '') {
            var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            var email = this.value;
            console.log(reg.test(email));
            if (reg.test(email) == false) {
                this.value = '您输入的邮箱格式有误，请重新输入';
                this.style.color = 'tomato';
            }
        }
    });
    btn.addEventListener('click', function() {
        if (inputs[0].value === '您所需要的书籍名称' || inputs[1].value === '您的电子邮箱' || inputs[1].value === '您输入的邮箱格式有误，请重新输入') {
            this.innerHTML = '请将信息填写完整';
            this.style.color = 'tomato';
        } else {
            this.innerHTML = '提交成功';
            this.style.color = 'white';
        }
    });
}