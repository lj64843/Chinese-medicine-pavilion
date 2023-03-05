window.onload = function() {
    var back = document.getElementById('back');
    back.onclick = function() {
        location.href = "../../index.html";
    }

    //四大名医
    var one_content = document.querySelector('.one_content');
    var ps = one_content.querySelectorAll('p');
    console.dir(ps);
    var divs = one_content.querySelectorAll('div');
    var as = one_content.querySelectorAll('a');
    console.dir(divs);
    for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute('index', i);
        divs[i].onmouseover = function() {
            var this_index = parseInt(this.getAttribute('index'));
            ps[this_index].style.display = 'none';
            as[this_index].style.display = 'block';

        }
        divs[i].onmouseout = function() {
            var this_index = parseInt(this.getAttribute('index'));
            ps[this_index].style.display = 'block';
            as[this_index].style.display = 'none';
        }
    }

    //切换页数
    var btns = document.querySelector('.two_btn');
    var btn1 = btns.querySelector('.btn1');
    var btn2 = btns.querySelector('.btn2');
    var one_page = document.querySelector('.one_page');
    var two_page = document.querySelector('.two_page');
    btn1.onclick = function() {
        one_page.style.display = 'block';
        two_page.style.display = 'none';
        btn1.className = 'btn1';
        btn2.className = 'btn_after';
    }
    btn2.onclick = function() {
        one_page.style.display = 'none';
        two_page.style.display = 'block';
        btn1.className = 'btn_after';
        btn2.className = 'btn1';
    }

    //答题板
    //1.点击打开
    var question_enter = document.querySelector('.question_enter');
    var enter_img = question_enter.querySelector('img');
    var question_box = document.querySelector('.question_box');
    enter_img.onclick = function() {
        question_box.style.display = 'block';
    }

    //2.点击关闭
    var close_question = document.querySelector('.icon-guanbi');
    close_question.onclick = function() {
        question_box.style.display = 'none';
    }

    //3.问题页
    var question = document.querySelector('.question');
    var q1 = question.querySelector('.q1');
    var options1 = q1.querySelectorAll('.option');
    var q2 = question.querySelector('.q2');
    var options2 = q2.querySelectorAll('.option');
    var q3 = question.querySelector('.q3');
    var options3 = q3.querySelectorAll('.option');
    var answer = document.querySelectorAll('.answer');
    var sure_btn = document.querySelectorAll('.sure_btn');
    var estimate = document.querySelector('.estimate');
    var estimate_p = estimate.querySelector('p');
    var analysis = document.querySelector('.analysis');
    var analysis_text = document.querySelectorAll('.analysis_text');
    var questions = [q1, q2, q3];
    console.log(questions);
    for (var i = 0; i < sure_btn.length; i++) {
        sure_btn[i].setAttribute('q_index', i);
    }
    var click_sure_btn = 0;
    //第一题
    var select_option1 = '';
    for (var i = 0; i < options1.length; i++) {
        options1[i].setAttribute('o1_index', i);
        options1[i].onclick = function() {
            select_option1 = this.getAttribute('o1_index');
            console.log(select_option1);
            for (var i = 0; i < options1.length; i++) {
                options1[i].style.backgroundColor = '';
                options1[i].style.color = 'black';
            }
            this.style.backgroundColor = '#bda07e';
            this.style.color = 'white';
            if (select_option1 == '') {
                sure_btn[0].disabled = true;
            } else if (select_option1 !== '') {
                sure_btn[0].onclick = function() {
                    click_sure_btn = 0;
                    question.style.display = 'none';
                    estimate.style.display = 'block';
                    console.log(options1[select_option1].innerHTML);
                    console.log(answer[0].innerHTML);
                    if (options1[select_option1].innerHTML == answer[0].innerHTML) {
                        estimate_p.innerHTML = '恭喜您！答对了';
                    } else if (options1[select_option1].innerHTML !== answer[0].innerHTML) {
                        estimate_p.innerHTML = '很遗憾！答错了';
                    }
                    prev_question.disabled = true;
                    prev_question.style.backgroundColor = '#a3a3a3';
                }
            }
        }
    }

    //第二题
    var select_option2 = '';
    for (var i = 0; i < options2.length; i++) {
        options2[i].setAttribute('o2_index', i);
        options2[i].onclick = function() {
            select_option2 = this.getAttribute('o2_index');
            console.log(select_option2);
            for (var i = 0; i < options2.length; i++) {
                options2[i].style.backgroundColor = '';
                options2[i].style.color = 'black';
            }
            this.style.backgroundColor = '#bda07e';
            this.style.color = 'white';
            if (select_option2 == '') {
                sure_btn[1].disabled = true;
            } else if (select_option2 !== '') {
                sure_btn[1].disabled = false;
                sure_btn[1].onclick = function() {

                    click_sure_btn = 1;
                    console.log(click_sure_btn);
                    question.style.display = 'none';
                    estimate.style.display = 'block';
                    console.log(options2[select_option2].innerHTML);
                    console.log(answer[1].innerHTML);
                    if (options2[select_option2].innerHTML == answer[1].innerHTML) {
                        estimate_p.innerHTML = '恭喜您！答对了';
                    } else if (options2[select_option2].innerHTML !== answer[1].innerHTML) {
                        estimate_p.innerHTML = '很遗憾！答错了';
                    }
                    prev_question.disabled = false;
                    prev_question.style.backgroundColor = '#bda07e';
                }
            }
        }

    }



    //第三题
    var select_option3 = '';
    for (var i = 0; i < options3.length; i++) {
        options3[i].setAttribute('o3_index', i);
        options3[i].onclick = function() {
            select_option3 = this.getAttribute('o3_index');
            console.log(select_option3);
            for (var i = 0; i < options3.length; i++) {
                options3[i].style.backgroundColor = '';
                options3[i].style.color = 'black';
            }
            this.style.backgroundColor = '#bda07e';
            this.style.color = 'white';
            if (select_option3 == '') {
                sure_btn[3].disabled = true;
            } else if (select_option3 !== '') {
                sure_btn[2].onclick = function() {
                    click_sure_btn = 2;
                    question.style.display = 'none';
                    estimate.style.display = 'block';
                    console.log(options3[select_option3].innerHTML);
                    console.log(answer[2].innerHTML);
                    if (options3[select_option3].innerHTML == answer[2].innerHTML) {
                        estimate_p.innerHTML = '恭喜您！答对了';
                    } else if (options3[select_option3].innerHTML !== answer[2].innerHTML) {
                        estimate_p.innerHTML = '很遗憾！答错了';
                    }
                    if (click_sure_btn == 2) {
                        console.log('click_sure_btn:' + click_sure_btn);
                        next_question.disabled = true;
                        next_question.style.backgroundColor = '#a3a3a3';
                    }
                    prev_question.disabled = false;
                    prev_question.style.backgroundColor = '#bda07e';
                }
            }
        }
    }



    //对错页
    var prev_question = document.querySelector('.prev_question');
    var again_btn = document.querySelector('.again_btn');
    var analysis_btn = document.querySelector('.analysis_btn');
    var next_question = document.querySelector('.next_question');
    again_btn.onclick = function() {
        question.style.display = 'block';
        estimate.style.display = 'none';
    }
    analysis_btn.onclick = function() {
        analysis.style.display = 'block';
        estimate.style.display = 'none';
        console.log(click_sure_btn);
        if (click_sure_btn == 0) {
            analysis_text[click_sure_btn].style.display = 'block';
        } else if (click_sure_btn !== 0) {
            analysis_text[click_sure_btn - 1].style.display = 'none';
            analysis_text[click_sure_btn].style.display = 'block';
        }


    }

    next_question.onclick = function() {
        // var next = ;
        question.style.display = 'block';
        analysis.style.display = 'none';
        estimate.style.display = 'none';
        questions[click_sure_btn].style.display = 'none';
        console.log(questions[parseInt(click_sure_btn + 1)]);
        questions[parseInt(click_sure_btn + 1)].style.display = 'block';
    }
    prev_question.onclick = function() {
        question.style.display = 'block';
        analysis.style.display = 'none';
        estimate.style.display = 'none';
        console.log(click_sure_btn + 'nnnnnn');
        questions[click_sure_btn].style.display = 'none';
        questions[parseInt(click_sure_btn - 1)].style.display = 'block';
    }



    //解析页
    var return_btn = document.querySelector('.return_btn');
    return_btn.onclick = function() {
        question.style.display = 'none';
        estimate.style.display = 'block';
        analysis.style.display = 'none';
    }
}