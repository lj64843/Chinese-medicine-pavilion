window.onload = function() {
    var back = document.getElementById('back');
    back.onclick = function() {
        location.href = "../../index.html";
    }
    var input_text = document.querySelector('input');
    input_text.onfocus = function() {
        if (input_text.value === '黄芪/白芷/枸杞') {
            input_text.style.color = 'black';
            input_text.value = '';
        }

    }
    input_text.onblur = function() {
        if (input_text.value === '') {
            input_text.style.color = 'silver';
            input_text.value = '黄芪/白芷/枸杞';
        }

    }
    var search = document.querySelector('.myicon');
    search.onmouseover = function() {
        this.style.backgroundColor = '#f9c82b';
    }
    search.onmouseout = function() {
        this.style.backgroundColor = '#fdcd69';
    }



    var inul1 = document.getElementById('in1');
    var inul2 = document.getElementById('in2');
    var inul3 = document.getElementById('in3');
    var plant = document.querySelector('.plant');
    var animal = document.querySelector('.animal');
    var mineral = document.querySelector('.mineral');
    var typic1 = document.getElementById('typic1');
    var typic2 = document.getElementById('typic2');
    var typic3 = document.getElementById('typic3');
    console.dir(typic1);
    inul1.style.display = 'block';
    typic1.style.color = '#bda07e';
    inul2.style.display = 'none';
    inul3.style.display = 'none';
    plant.style.display = 'block';
    animal.style.display = 'none';
    mineral.style.display = 'none';
    typic1.onclick = function() {
        if (inul1.style.display === 'none') {
            inul1.style.display = 'block';
            inul2.style.display = 'none';
            inul3.style.display = 'none';
            inul1.style.color = 'black';
            plant.style.display = 'block';
            animal.style.display = 'none';
            mineral.style.display = 'none';
            this.style.color = '#bda07e';
            typic2.style.color = 'black';
            typic3.style.color = 'black';
        } else if (inul1.style.display === 'block') {
            inul1.style.display = 'none';
            // this.style.color = 'black';
        }
    }
    typic2.onclick = function() {
        if (inul2.style.display === 'none') {
            inul2.style.display = 'block';
            inul1.style.display = 'none';
            inul3.style.display = 'none';
            inul2.style.color = 'black';
            plant.style.display = 'none';
            animal.style.display = 'block';
            mineral.style.display = 'none';
            this.style.color = '#bda07e';
            typic3.style.color = 'black';
            typic1.style.color = 'black';
        } else if (inul2.style.display === 'block') {
            inul2.style.display = 'none';
            // this.style.color = 'black';
        }
    }
    typic3.onclick = function() {
        if (inul3.style.display === 'none') {
            inul3.style.display = 'block';
            inul2.style.display = 'none';
            inul1.style.display = 'none';
            inul3.style.color = 'black';
            plant.style.display = 'none';
            animal.style.display = 'none';
            mineral.style.display = 'block';
            this.style.color = '#bda07e';
            typic2.style.color = 'black';
            typic1.style.color = 'black';
        } else if (inul3.style.display === 'block') {
            inul3.style.display = 'none';
            // this.style.color = 'black';
        }
    }

    var nav = document.querySelector('.left_nav');
    var type = document.getElementsByClassName('type');
    var lis = nav.getElementsByTagName('a');
    console.dir(lis);
    console.dir(type);
    document.addEventListener("scroll", function() {
        for (var i = 0; i < type.length; i++) {
            var scope = (type[i].offsetHeight * (100 - 80)) / 100; //可出线范围大小
            var cH = document.documentElement.clientHeight; //当前页面可见区域高度
            var tY = type[i].getBoundingClientRect().top; //到可见区域顶端的高度
            var bY = type[i].getBoundingClientRect().bottom; //到可见区域底端的高度
            if (tY < -scope || bY > cH + scope) {
                lis[i].style.color = 'black';
            } else {
                lis[i].style.color = '#bda07e';
            }
        }
    });

    //跳转图片分页
    var sec = document.querySelector('section');
    var down_imgs = sec.getElementsByTagName('img');
    for (var i = 0; i < down_imgs.length; i++) {
        down_imgs[i].setAttribute('index', i);
        down_imgs[i].onclick = function() {
            // console.log(this.getAttribute('index'));
            var this_index = parseInt(this.getAttribute('index'));
            var this_text = this.nextElementSibling.innerText;
            // console.log(this_text);
            // console.log(this_index);
            if (this_index < 28) {
                location.href = "../二级及以下页面/分类分页/植物/" + this_text + ".html ";
            } else if (this_index >= 29 && this_index < 57) {
                location.href = "../二级及以下页面/分类分页/动物/" + this_text + ".html ";
            } else if (this_index >= 58 && this_index <= 85) {
                location.href = "../二级及以下页面/分类分页/矿物/" + this_text + ".html ";
            }

        }

    }


    //搜索功能
    var names = [];
    for (var i = 0; i < down_imgs.length; i++) {
        if (i != 28 && i != 57 && i != 86) {
            // console.log(i);
            var n_text = down_imgs[i].nextElementSibling.innerText;
            names[names.length] = n_text;
        }

    }
    search.onclick = function() {
        var search_text = input_text.value;
        console.log(search_text);
        for (var i = 0; i < names.length; i++) {
            if (search_text == names[i]) {

                console.log(i);
                if (i < 28) {
                    location.href = "../二级及以下页面/分类分页/植物/" + names[i] + ".html ";
                } else if (i < 56) {
                    location.href = "../二级及以下页面/分类分页/动物/" + names[i] + ".html ";
                } else if (i <= 84) {
                    location.href = "../二级及以下页面/分类分页/矿物/" + names[i] + ".html ";
                }
            } else if (names.indexOf(search_text) == -1) {
                location.href = "../../缺省页.html ";
            }
        }
    }

    // console.log(names);
}