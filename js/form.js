'use strict';

// function buttonClick(){
//     let confirm_user_name = document.getElementById('user_name');
//     let confirm_user_comment = document.getElementById('user_comment');
    
//     console.log(confirm_user_name.value);
//     console.log(confirm_user_comment.value);
// }
{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const upload = document.getElementById('upload');
    const user_name = document.getElementById('user_name'); //お名前
    const comment = document.getElementById('user_comment'); //コメント
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    const ulNode = document.querySelector('ul'); 
    const name_data = document.createElement('li');
    const comment_data = document.createElement('li');
    

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        name_data.textContent = "名前：" + user_name.value;
        ulNode.appendChild(name_data);
        comment_data.textContent = "コメント：" + comment.value;
        ulNode.appendChild(comment_data);
    })

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    })

    upload.addEventListener('click', () => {
        console.log(user_name.value);
        console.log(comment.value);
    })

}