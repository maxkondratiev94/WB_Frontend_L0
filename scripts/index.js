let coll = document.querySelectorAll('.title__spoiler');
for (let i = 0; i< coll.length;i++){
    coll[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.parentElement.nextElementSibling;
        if (content.style.display == "none") {
            content.style.display = "flex";
        } else {
            content.style.display = "none";
        }
    })
}
// =====================================================
let checkbox_right_text = document.getElementById("checkbox_right_text");

function checkPay(){
    if (document.getElementById("checkbox_right").checked){
        checkbox_right_text.innerHTML = "Оплатить " + document.getElementById("all").innerHTML + " ком";
    } else if (document.getElementById("checkbox_right").checked == false){
        checkbox_right_text.innerHTML = "Заказать ";
    }
}
// =====================================================
let cart = {
    'tshirt': {
        'count' : document.getElementById("counter").innerHTML,
        'countall' : document.getElementById("kol").innerHTML,
        'price' : document.getElementById("price1").innerHTML/document.getElementById("counter").innerHTML,
        'priceaftersale' : document.getElementById("priceaftersale").innerHTML/document.getElementById("counter").innerHTML,
        'priceafter': document.getElementById("counter").innerHTML*(document.getElementById("price1").innerHTML/document.getElementById("counter").innerHTML),
        'priceaftersalesfter': document.getElementById("counter").innerHTML*(document.getElementById("priceaftersale").innerHTML/document.getElementById("counter").innerHTML),
    },
    'phone': {
        'count' : document.getElementById("counter2").innerHTML,
        'countall' : document.getElementById("kol2").innerHTML,
        'price' : document.getElementById("price2").innerHTML/document.getElementById("counter2").innerHTML,
        'priceaftersale' : document.getElementById("priceaftersale2").innerHTML/document.getElementById("counter2").innerHTML,
        'priceafter': document.getElementById("counter2").innerHTML*(document.getElementById("price2").innerHTML/document.getElementById("counter2").innerHTML),
        'priceaftersalesfter': document.getElementById("counter2").innerHTML*(document.getElementById("priceaftersale2").innerHTML/document.getElementById("counter2").innerHTML),
    },
    'pen': {
        'count' : document.getElementById("counter3").innerHTML,
        'countall' : document.getElementById("kol3").innerHTML,
        'price' : document.getElementById("price3").innerHTML/document.getElementById("counter3").innerHTML,
        'priceaftersale' : document.getElementById("priceaftersale3").innerHTML/document.getElementById("counter3").innerHTML,
        'priceafter': document.getElementById("counter3").innerHTML*(document.getElementById("price3").innerHTML/document.getElementById("counter3").innerHTML),
        'priceaftersalesfter': document.getElementById("counter3").innerHTML*(document.getElementById("priceaftersale3").innerHTML/document.getElementById("counter3").innerHTML),
    },
}

let elem_pl = document.querySelector(".act_p");
let elem = document.querySelector(".no_act_m");

let elem_pl3 = document.querySelector(".no-act-p3");
let elem3 = document.querySelector(".act-m3");

let elem_pl2 = document.querySelector(".act_p-2");
let elem2 = document.querySelector(".act_m-2");

let shopCart_count = document.getElementById('shopCart-count');
let shopCart_count2 = document.getElementById('shopCart-count2');

let issue__count = document.querySelector(".count_icon-class");
let issue__count2 = document.querySelector(".count_icon-class2");
let issue__count3 = document.querySelector(".count_icon-class3");
let issue__count4 = document.querySelector(".count_icon-class4");

let count_icon1 = document.getElementById('count_icon');
let count_icon2 = document.getElementById('count_icon2');
let count_icon3 = document.getElementById('count_icon3');
let count_icon4 = document.getElementById('count_icon4');

document.onclick = event => {
    console.log(event.target.classList);
    if (event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.id);
    }
}

const plusFunction = (id) => {
    // cart[id]['count']++;
    if (id == 'tshirt'){
            if (cart[id]['count'] < cart[id]['countall']){
                cart[id]['count']++;
                cart[id]['priceafter'] = cart[id]['count']*cart[id]['price'];
                cart[id]['priceaftersalesfter'] = cart[id]['count']*cart  [id]  ['priceaftersale'];
                document.getElementById("counter").innerHTML = cart[id]['count'];
                document.getElementById("price1").innerHTML = cart[id]['priceafter'];
                document.getElementById("priceaftersale").innerHTML = cart[id]['priceaftersalesfter'];

                if (flag == 1){
                    sumCart();
                    count_icon();
                    count_icon1.innerHTML = cart[id]['count'];
                } 
            if (cart[id]['count'] == cart[id]['countall']){
                elem_pl.classList.remove("act_p");
                elem_pl.classList.add("no_act_p");
            }
            if (cart[id]['count'] > 1){
                elem.classList.add("act_m");
                elem.classList.remove("no_act_m");
            }
        } 
    } else if (id == 'pen'){
        if (cart[id]['count'] < cart[id]['countall']){
            cart[id]['count']++;
            cart[id]['priceafter'] = cart[id]['count']*cart[id]['price'];
            cart[id]['priceaftersalesfter'] = cart[id]['count']*cart[id]  ['priceaftersale'];
            document.getElementById("price3").innerHTML = cart[id]['priceafter'];
            document.getElementById("priceaftersale3").innerHTML = cart[id]  ['priceaftersalesfter'];
            document.getElementById("counter3").innerHTML = cart[id]['count'];
            if (flag_pen == 1){
                    sumCart();
                    count_icon();
                    count_icon3.innerHTML = cart[id]['count'];
                } 
        } 
        if (cart[id]['count'] == cart[id]['countall']){
            elem_pl3.classList.remove("act-p3");
            elem_pl3.classList.add("no-act-p3");
        }
        if (cart[id]['count'] > 1){
            elem3.classList.remove("no-act-m3");
            elem3.classList.add("act-m3");
        }
    } else if (id == 'phone'){
        if (cart[id]['count'] < cart[id]['countall']){
            cart[id]['count']++;
            cart[id]['priceafter'] = cart[id]['count']*cart[id]['price'];
            cart[id]['priceaftersalesfter'] = cart[id]['count']*cart[id]  ['priceaftersale'];
            document.getElementById("price2").innerHTML = Math.round(cart[id]['priceafter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            document.getElementById("priceaftersale2").innerHTML = Math.round(cart[id]['priceaftersalesfter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            document.getElementById("counter2").innerHTML = cart[id]['count'];
            if (flag_phone == 1){
                    sumCart();
                    count_icon();
                    if (cart[id]['count']<=16){
                        count_icon4.innerHTML = cart[id]['count'];
                    } 
                    if (cart[id]['count']>16){
                        count_icon4.innerHTML = 16;
                        count_icon2.innerHTML = cart[id]['count'] -16;
                    }
                } 
        } 
        if (cart[id]['count'] == cart[id]['countall']){
            elem_pl2.classList.remove("act_p-2");
            elem_pl2.classList.add("no_act_p-2");
        }
        if (cart[id]['count'] > 1){
            elem2.classList.add("act_m-2");
            elem2.classList.remove("no_act_m-2");
        }
    }

    
    renderCart();
}

const minusFunction = (id) => {
    if (cart[id]['count']-1 <= 0){
        deleteFunction(id);
        return true;
    }
    // cart[id]['count']--;
    if (id == 'tshirt'){
        if (cart[id]['count']>=1){
            cart[id]['count']--;
            cart[id]['priceafter'] = cart[id]['priceafter']-cart[id]['price'];
            cart[id]['priceaftersalesfter'] = cart[id]['priceaftersalesfter']-cart[id]['priceaftersale'];
            document.getElementById("price1").innerHTML = cart[id]['priceafter'];
            document.getElementById("counter").innerHTML = cart[id]['count'];
            document.getElementById("priceaftersale").innerHTML = cart[id]  ['priceaftersalesfter'];
            if (flag == 1){
                sumCart();
                count_icon();
                count_icon1.innerHTML = cart[id]['count'];
            }
        if (cart[id]['count'] < cart[id]['countall']){
            elem_pl.classList.add("act_p");
            elem_pl.classList.remove("no_act_p");
        }
        if (cart[id]['count'] == 1){
            elem.classList.remove("act_m");
            elem.classList.add("no_act_m");
        }
    }
    } else if (id == 'pen'){
        if (cart[id]['count']>=1){
            cart['pen']['priceafter'] = cart['pen']['count']*cart['pen']['price'];
            cart['pen']['priceaftersalesfter'] = cart['pen']['count']*cart['pen']['priceaftersale'];
            cart[id]['count']--;
            cart[id]['priceafter'] = cart[id]['priceafter']-cart[id]['price'];
            cart[id]['priceaftersalesfter'] = cart[id]['priceaftersalesfter']-cart[id]['priceaftersale'];
            document.getElementById("price3").innerHTML = cart[id]['priceafter'];
            document.getElementById("priceaftersale3").innerHTML = cart[id]  ['priceaftersalesfter'];
            document.getElementById("counter3").innerHTML = cart[id]['count'];
            if (flag_pen == 1){
                    sumCart();
                    count_icon();
                    count_icon3.innerHTML = cart[id]['count'];
                } 
        }
        if (cart[id]['count'] < cart[id]['countall']){
            elem_pl3.classList.remove("no-act-p3");
            elem_pl3.classList.add("act-p3");
        }
        if (cart[id]['count'] == 1){
            elem3.classList.remove("act-m3");
            elem3.classList.add("no-act-m3");
        }
    } else if (id == 'phone'){
        if (cart[id]['count']>=1){
            cart['phone']['priceafter'] = cart['phone']['count']*cart['phone']['price'];
            cart['phone']['priceaftersalesfter'] = cart['phone']['count']*cart  ['phone']['priceaftersale'];
            cart[id]['count']--;
            cart[id]['priceafter'] = cart[id]['priceafter']-cart[id]['price'];
            cart[id]['priceaftersalesfter'] = cart[id]['priceaftersalesfter']-cart[id]['priceaftersale'];
            document.getElementById("price2").innerHTML = Math.round(cart[id]['priceafter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");;
            document.getElementById("priceaftersale2").innerHTML = Math.round(cart[id]['priceaftersalesfter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");;
            document.getElementById("counter2").innerHTML = cart[id]['count'];
            if (flag_phone == 1){
                    sumCart();
                    count_icon();
                    if (cart[id]['count']<=16){
                        count_icon4.innerHTML = cart[id]['count'];
                    } 
                    if (cart[id]['count']>16){
                        count_icon4.innerHTML = 16;
                        count_icon2.innerHTML = cart[id]['count'] -16;
                    }
                } 
        }
        if (cart[id]['count'] < cart[id]['countall']){
            elem_pl2.classList.add("act_p-2");
            elem_pl2.classList.remove("no_act_p-2");
        }
        if (cart[id]['count'] == 1){
            elem2.classList.remove("act_m-2");
            elem2.classList.add("no_act_m-2");
        }
    }

    renderCart();
}

const deleteFunction = (id) => {
    cart[id]['count'] = 1;
    renderCart();
}

const renderCart = (id) => {
    console.log(cart);
}

const sumCart = (id) => {
    document.getElementById("all").innerHTML = Math.round(cart['tshirt']['priceafter'] + cart['phone']['priceafter'] + cart['pen']['priceafter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    document.getElementById("allaftersale").innerHTML = Math.round(cart['tshirt']['priceaftersalesfter'] + cart['phone']['priceaftersalesfter'] + cart['pen']['priceaftersalesfter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    document.getElementById("sale").innerHTML = (Math.round(cart['tshirt']['priceafter'] + Math.round(cart['phone']['priceafter']) + cart['pen']['priceafter']) - (cart['tshirt']['priceaftersalesfter'] + Math.round(cart['phone']['priceaftersalesfter']) + cart['pen']['priceaftersalesfter'])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    checkPay();
}
renderCart();
// =====================================================
let flag = 0;
let flag_phone = 0;
let flag_pen = 0;
function validate() {
    if (document.getElementById('checkbox_2').checked){
        flag = 1;
        cart['tshirt']['priceafter'] = cart['tshirt']['count']*cart['tshirt']['price'];
        cart['tshirt']['priceaftersalesfter'] = cart['tshirt']['count']*cart  ['tshirt']  ['priceaftersale'];
        sumCart();
        count_icon();
    } else if (document.getElementById('checkbox_2').checked == false) {
        flag = 0;
        document.getElementById("shopCart-count").innerHTML = cart['tshirt']['count']-cart['tshirt']['count'];
        document.getElementById("shopCart-count2").innerHTML = cart['tshirt']['count']-cart['tshirt']['count'];
        cart['tshirt']['priceafter']=0;
        cart['tshirt']['priceaftersalesfter'] = 0;
        document.getElementById("all").innerHTML = Math.round(cart['tshirt']['priceafter'] + cart['phone']['priceafter'] + cart['pen']['priceafter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
        document.getElementById("allaftersale").innerHTML = Math.round(cart['tshirt']['priceaftersalesfter'] + cart['phone']['priceaftersalesfter'] + cart['pen']['priceaftersalesfter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
        document.getElementById("sale").innerHTML = (Math.round(cart['tshirt']['priceafter'] + Math.round(cart['phone']['priceafter']) + cart['pen']['priceafter']) - (cart['tshirt']['priceaftersalesfter'] + Math.round(cart['phone']['priceaftersalesfter']) + cart['pen']['priceaftersalesfter'])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        checkPay();
        count_icon();
    } 
}

function validatePhone() {
    if (document.getElementById('checkbox_3').checked){
        flag_phone = 1;
        cart['phone']['priceafter'] = cart['phone']['count']*cart['phone']['price'];
        cart['phone']['priceaftersalesfter'] = cart['phone']['count']*cart  ['phone']['priceaftersale'];
        sumCart();
        count_icon();
    } else if (document.getElementById('checkbox_3').checked == false) {
        flag_phone = 0;
        cart['phone']['priceafter']=0;
        cart['phone']['priceaftersalesfter'] = 0;
        document.getElementById("all").innerHTML = Math.round(cart['tshirt']['priceafter'] + cart['phone']['priceafter'] + cart['pen']['priceafter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    document.getElementById("allaftersale").innerHTML = Math.round(cart['tshirt']['priceaftersalesfter'] + cart['phone']['priceaftersalesfter'] + cart['pen']['priceaftersalesfter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    document.getElementById("sale").innerHTML = (Math.round(cart['tshirt']['priceafter'] + Math.round(cart['phone']['priceafter']) + cart['pen']['priceafter']) - (cart['tshirt']['priceaftersalesfter'] + Math.round(cart['phone']['priceaftersalesfter']) + cart['pen']['priceaftersalesfter'])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    checkPay();
    count_icon();
    }
}

function validatePen() {
    if (document.getElementById('checkbox_4').checked){
        flag_pen = 1;
        cart['pen']['priceafter'] = cart['pen']['count']*cart['pen']['price'];
        cart['pen']['priceaftersalesfter'] = cart['pen']['count']*cart['pen']['priceaftersale'];
        sumCart();
        count_icon();
    } else if (document.getElementById('checkbox_4').checked == false) {
        flag_pen = 0;
        cart['pen']['priceafter']=0;
        cart['pen']['priceaftersalesfter'] = 0;
        document.getElementById("all").innerHTML = Math.round(cart['tshirt']['priceafter'] + cart['phone']['priceafter'] + cart['pen']['priceafter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    document.getElementById("allaftersale").innerHTML = Math.round(cart['tshirt']['priceaftersalesfter'] + cart['phone']['priceaftersalesfter'] + cart['pen']['priceaftersalesfter']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    document.getElementById("sale").innerHTML = (Math.round(cart['tshirt']['priceafter'] + Math.round(cart['phone']['priceafter']) + cart['pen']['priceafter']) - (cart['tshirt']['priceaftersalesfter'] + Math.round(cart['phone']['priceaftersalesfter']) + cart['pen']['priceaftersalesfter'])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    checkPay();
    count_icon();
    }
}

function validateAll(){
    if (check_all.checked){
        flag = 1;
        flag_phone = 1;
        flag_pen = 1;

        document.getElementById("shopCart-count").innerHTML = 3;
        document.getElementById("shopCart-count2").innerHTML = 3;

        cart['tshirt']['priceafter'] = cart['tshirt']['count']*cart['tshirt']['price'];
        cart['tshirt']['priceaftersalesfter'] = cart['tshirt']['count']*cart  ['tshirt']  ['priceaftersale'];

        cart['phone']['priceafter'] = cart['phone']['count']*cart['phone']['price'];
        cart['phone']['priceaftersalesfter'] = cart['phone']['count']*cart  ['phone']['priceaftersale'];

        cart['pen']['priceafter'] = cart['pen']['count']*cart['pen']['price'];
        cart['pen']['priceaftersalesfter'] = cart['pen']['count']*cart['pen']['priceaftersale'];

        sumCart();
        count_icon();
    } else if (check_all.checked == false) {
        document.getElementById("shopCart-count").innerHTML = 0;
        document.getElementById("shopCart-count2").innerHTML = 0;

        cart['tshirt']['priceafter'] = 0;
        cart['tshirt']['priceaftersalesfter'] = 0;

        cart['phone']['priceafter'] = 0;
        cart['phone']['priceaftersalesfter'] = 0;

        cart['pen']['priceafter'] = 0;
        cart['pen']['priceaftersalesfter'] = 0;
        sumCart();
        count_icon();
    }
}

validate();
validatePhone();
validatePen();


function shopCart(){
    if (document.getElementById('checkbox_2').checked || document.getElementById('checkbox_3').checked || document.getElementById('checkbox_4').checked){
        document.getElementById("shopCart-count").innerHTML = 1;
        document.getElementById("shopCart-count2").innerHTML = 1;
    } 
    if ((document.getElementById('checkbox_2').checked && document.getElementById('checkbox_3').checked) || (document.getElementById('checkbox_2').checked && document.getElementById('checkbox_4').checked) || (document.getElementById('checkbox_3').checked && document.getElementById('checkbox_4').checked)){
        document.getElementById("shopCart-count").innerHTML = 2;
        document.getElementById("shopCart-count2").innerHTML = 2;
    }
    if (document.getElementById('checkbox_2').checked && document.getElementById('checkbox_3').checked && document.getElementById('checkbox_4').checked){
        document.getElementById("shopCart-count").innerHTML = 3;
        document.getElementById("shopCart-count2").innerHTML = 3;
    } 
    if (document.getElementById('checkbox_2').checked==false && document.getElementById('checkbox_3').checked==false && document.getElementById('checkbox_4').checked==false) {
        document.getElementById("shopCart-count").innerHTML = 0;
        document.getElementById("shopCart-count2").innerHTML = 0;
    }
}

shopCart();



function count_icon(){
    if(document.getElementById('checkbox_2').checked==false){
        document.querySelector(".product-icon-of").style.display = "none";
    } else if (cart['tshirt']['count'] == 1){
        issue__count.style.display = "none";
        document.querySelector(".product-icon-of").style.display = "flex";
        document.querySelector(".data_of").style.display = "flex";
        document.querySelector(".issue__data").style.display = "flex";
    } else {
        issue__count.style.display = "flex";
        document.querySelector(".product-icon-of").style.display = "flex";
        document.querySelector(".data_of").style.display = "flex";
        document.querySelector(".issue__data").style.display = "flex";
        count_icon1.innerHTML = cart['tshirt']['count'];
        if(cart['tshirt']['count']>=10){
            issue__count.style.width = "20px";
        } else if(cart['tshirt']['count']>=100){
            issue__count.style.width = "26px";
        } else if(cart['tshirt']['count']<10){
            issue__count.style.width = "16px";
        }
    }
    if(document.getElementById('checkbox_3').checked==false){
        document.querySelector(".product-icon-of2").style.display = "none";
        document.querySelector(".product-icon-of3").style.display = "none";
    } else if (cart['phone']['count'] == 1){
        issue__count2.style.display = "none";
        issue__count4.style.display = "none";
        document.querySelector(".product-icon-of2").style.display = "flex";
        document.querySelector(".data_of").style.display = "flex";
        document.querySelector(".issue__data").style.display = "flex";
    } else {
        if (cart['phone']['count']<=16){
            count_icon4.innerHTML = cart['phone']['count'];
            issue__count2.style.display = "flex";
            document.querySelector(".product-icon-of2").style.display = "flex";
            document.querySelector(".data_of").style.display = "flex";
            document.querySelector(".issue__data").style.display = "flex";
        } 
        if (cart['phone']['count']>16){
            count_icon4.innerHTML = 16;
            count_icon2.innerHTML = cart['phone']['count'] -16;
            issue__count2.style.display = "flex";
            issue__count4.style.display = "flex";
            document.querySelector(".product-icon-of3").style.display = "flex";
            document.querySelector(".product-icon-of2").style.display = "flex";
            document.querySelector(".data_of").style.display = "flex";
            document.querySelector(".issue__data").style.display = "flex";
        }

        if(cart['phone']['count']>=10){
            issue__count4.style.width = "20px";
            issue__count2.style.width = "20px";
        } else if(cart['phone']['count']>=100){
            issue__count4.style.width = "26px";
            issue__count2.style.width = "26px";
        } else if(cart['phone']['count']<10){
            issue__count4.style.width = "16px";
            issue__count2.style.width = "16px";
        }
    }
    if(document.getElementById('checkbox_4').checked==false){
        document.querySelector(".product-icon-of4").style.display = "none";
    } else if (cart['pen']['count'] == 1){
        issue__count3.style.display = "none";
        document.querySelector(".product-icon-of4").style.display = "flex";
        document.querySelector(".data_of").style.display = "flex";
        document.querySelector(".issue__data").style.display = "flex";
    } else {
        issue__count3.style.display = "flex";
        document.querySelector(".product-icon-of4").style.display = "flex";
        document.querySelector(".data_of").style.display = "flex";
        document.querySelector(".issue__data").style.display = "flex";
        count_icon3.innerHTML = cart['pen']['count'];

        if(cart['pen']['count']>=10){
            issue__count3.style.width = "20px";
        } else if(cart['pen']['count']>=100){
            issue__count3.style.width = "26px";
        } else if(cart['pen']['count']<10){
            issue__count3.style.width = "16px";
        }
    }
    if ((document.querySelector(".product-icon-of").style.display == "none")&&(document.querySelector(".product-icon-of4").style.display == "none")&&(document.querySelector(".product-icon-of2").style.display == "none")){
        document.querySelector(".data_of").style.display = "none";
        document.querySelector(".issue__data").style.display = "none";
    }else {
        document.querySelector(".data_of").style.display = "flex";
        document.querySelector(".issue__data").style.display = "flex";
    } 
    if ((document.querySelector(".product-icon-of3").style.display == "none")){
        document.querySelector(".data_of2").style.display = "none";
        document.querySelector(".issue__dataof").style.display = "none";
    } else {
        document.querySelector(".data_of2").style.display = "flex";
        document.querySelector(".issue__dataof").style.display = "flex";
    }
    
}

count_icon();
// =====================================================
let last1 = document.querySelector(".balance-block1");
let last2 = document.querySelector(".balance-block2");
let last3 = document.querySelector(".balance-block3");
if (cart['tshirt']['countall']>4){
    last1.style.display = "none";
}
if (cart['phone']['countall']>4){
    last2.style.display = "none";
}
if (cart['pen']['countall']>4){
    last3.style.display = "none";
}
// =====================================================

let check_all = document.getElementById("checkbox_1");
let check_1 = document.getElementById("checkbox_2");
let check_2 = document.getElementById("checkbox_3");
let check_3 = document.getElementById("checkbox_4");

function checkAll(){
if (check_all.checked){
    check_1.checked = true;
    check_2.checked = true;
    check_3.checked = true;
} else {
    check_1.checked = false;
    check_2.checked = false;
    check_3.checked = false;
}
}

function checkNoAll(){
    if (check_1.checked == false || check_2.checked == false || check_3.checked == false){
        check_all.checked = false;
    } else if (check_1.checked == true && check_2.checked == true && check_3.checked == true){
        check_all.checked = true;
    }
}
// =====================================================
function del(){
    document.getElementById("price2").innerHTML = document.getElementById("price2").innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.getElementById("priceaftersale2").innerHTML = document.getElementById("priceaftersale2").innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
del();
// =====================================================
let link = document.getElementsByClassName('review-block__info');


for (let i = 0; i < link.length; i++){
    link[i].onmouseover = function() {
        let tool = document.getElementsByClassName('review-block__info-text');
        let too = tool[i];
        too.style.opacity = "1";
        too.style.visibility = "visible";
    }

    link[i].onmouseout = function() {
        let tool = document.getElementsByClassName('review-block__info-text');
        let too = tool[i];
        too.style.opacity = "0";
        too.style.visibility = "hidden";
    }
}

let link2 = document.getElementsByClassName('info-title_mouse');

for (let i = 0; i < link2.length; i++){
    link2[i].onmouseover = function() {
        let tool = document.getElementsByClassName('info-title_mouse-text');
        let too = tool[i];
        too.style.opacity = "1";
        too.style.visibility = "visible";
    }

    link2[i].onmouseout = function() {
        let tool = document.getElementsByClassName('info-title_mouse-text');
        let too = tool[i];
        too.style.opacity = "0";
        too.style.visibility = "hidden";
    }
}

let link3 = document.getElementsByClassName('price-block__price');

for (let i = 0; i < link3.length; i++){
    link3[i].onmouseover = function() {
        let tool = document.getElementsByClassName('price-block__price-text');
        let too = tool[i];
        too.style.opacity = "1";
        too.style.visibility = "visible";
    }

    link3[i].onmouseout = function() {
        let tool = document.getElementsByClassName('price-block__price-text');
        let too = tool[i];
        too.style.opacity = "0";
        too.style.visibility = "hidden";
    }
}
// Валидация формы=====================================================
let name_title = document.querySelector(".receiver__name-title");
let name_form_err = document.querySelector(".receiver__name-err");

let surename_title = document.querySelector(".receiver__surename-title");
let surename_form_err = document.querySelector(".receiver__surename-err");

let email_title = document.querySelector(".receiver__email-title");
let email_form_err = document.querySelector(".receiver__email-err");

let tel_title = document.querySelector(".receiver__tel-title");
let tel_form_err = document.querySelector(".receiver__tel-err");

let inn_title = document.querySelector(".receiver__last-title");
let inn_form_err = document.querySelector(".receiver__inn-err");

let nameErr = true;

const main_form = document.forms.form;

const name_form = main_form.username;
const surename_form = main_form.usersurename;
const useremail_form = main_form.useremail;
const usertel_form = main_form.usertel;
const userinn_form = main_form.userinn;

name_form.addEventListener("change", function(e){
    var regex = /^[a-zA-Zа-яА-Я\s]+$/; 
    if (regex.test(name_form.value) == false){
        name_form_err.style.visibility = "visible";
        name_form_err.style.opacity = "1";
        name_form.style.color = "#F55123";
        name_title.style.visibility = "visible";
        name_title.style.opacity = "1";
    } else{
        name_form_err.style.visibility = "hidden";
        name_form_err.style.opacity = "0";
        name_form.style.color = "#000000";
        name_title.style.visibility = "visible";
        name_title.style.opacity = "1";
    }
});

surename_form.addEventListener("change", function(e){
    var regex = /^[a-zA-Zа-яА-Я\s]+$/; 
    if (regex.test(surename_form.value) == false){
        surename_form_err.style.visibility = "visible";
        surename_form_err.style.opacity = "1";
        surename_form.style.color = "#F55123";
        surename_title.style.visibility = "visible";
        surename_title.style.opacity = "1";
    } else{
        surename_form_err.style.visibility = "hidden";
        surename_form_err.style.opacity = "0";
        surename_form.style.color = "#000000";
        surename_title.style.visibility = "visible";
        surename_title.style.opacity = "1";
    }
});

useremail_form.addEventListener("change", function(e){
    var regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,8})+$/; 
    if (regex.test(useremail_form.value) == false){
        email_form_err.style.visibility = "visible";
        email_form_err.style.opacity = "1";
        useremail_form.style.color = "#F55123";
        email_title.style.visibility = "visible";
        email_title.style.opacity = "1";
    } else{
        email_form_err.style.visibility = "hidden";
        email_form_err.style.opacity = "0";
        useremail_form.style.color = "#000000";
        email_title.style.visibility = "visible";
        email_title.style.opacity = "1";
    }
});

usertel_form.addEventListener("change", function(e){
    var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/; 
    if (regex.test(usertel_form.value) == false){
        tel_form_err.style.visibility = "visible";
        tel_form_err.style.opacity = "1";
        usertel_form.style.color = "#F55123";
        tel_title.style.visibility = "visible";
        tel_title.style.opacity = "1";
    } else{
        tel_form_err.style.visibility = "hidden";
        tel_form_err.style.opacity = "0";
        usertel_form.style.color = "#000000";
        tel_title.style.visibility = "visible";
        tel_title.style.opacity = "1";
    }
});

userinn_form.addEventListener("change", function(e){
    var regex = /^[1-9]\d{9}$/; 
    if (regex.test(userinn_form.value) == false){
        inn_form_err.style.visibility = "visible";
        inn_form_err.style.opacity = "1";
        userinn_form.style.color = "#F55123";
        inn_title.style.visibility = "visible";
        inn_title.style.opacity = "1";
    } else{
        inn_form_err.style.visibility = "hidden";
        inn_form_err.style.opacity = "0";
        userinn_form.style.color = "#000000";
        inn_title.style.visibility = "visible";
        inn_title.style.opacity = "1";
    }
});

document.getElementById("phone").addEventListener("keydown", function(e) {
    const txt = this.value;
    if (txt.length == 0 ){
        this.value += "+";
    }
    if ((txt.length == 2 ||txt.length == 6 || txt.length == 10 || txt.length == 13))
        this.value = this.value + " ";
});

// менять оплату=====================================================

let radio_pay = document.getElementById("radio");
let radio_pay2 = document.getElementById("radio2");
let radio_pay3 = document.getElementById("radio3");
let radio_pay4 = document.getElementById("radio4");

radio_pay.checked=true;

function radioOnPay() {
    if (radio_pay.checked){
        document.querySelector(".cart_output").style.display = "flex";
        document.querySelector(".cart_output2").style.display = "none";
        document.querySelector(".cart_output3").style.display = "none";
        document.querySelector(".cart_output4").style.display = "none";
        document.querySelector(".cart_output5").style.display = "flex";
        document.querySelector(".cart_output6").style.display = "none";
        document.querySelector(".cart_output7").style.display = "none";
        document.querySelector(".cart_output8").style.display = "none";
    } else if (radio_pay2.checked){
        document.querySelector(".cart_output").style.display = "none";
        document.querySelector(".cart_output2").style.display = "flex";
        document.querySelector(".cart_output3").style.display = "none";
        document.querySelector(".cart_output4").style.display = "none";
        document.querySelector(".cart_output5").style.display = "none";
        document.querySelector(".cart_output6").style.display = "flex";
        document.querySelector(".cart_output7").style.display = "none";
        document.querySelector(".cart_output8").style.display = "none";
    } else if (radio_pay3.checked){
        document.querySelector(".cart_output").style.display = "none";
        document.querySelector(".cart_output2").style.display = "none";
        document.querySelector(".cart_output3").style.display = "flex";
        document.querySelector(".cart_output4").style.display = "none";
        document.querySelector(".cart_output5").style.display = "none";
        document.querySelector(".cart_output6").style.display = "none";
        document.querySelector(".cart_output7").style.display = "flex";
        document.querySelector(".cart_output8").style.display = "none";
    } else if (radio_pay4.checked){
        document.querySelector(".cart_output").style.display = "none";
        document.querySelector(".cart_output2").style.display = "none";
        document.querySelector(".cart_output3").style.display = "none";
        document.querySelector(".cart_output4").style.display = "flex";
        document.querySelector(".cart_output5").style.display = "none";
        document.querySelector(".cart_output6").style.display = "none";
        document.querySelector(".cart_output7").style.display = "none";
        document.querySelector(".cart_output8").style.display = "flex";
    }
}

radioOnPay();

// менять доставку=====================================================

let radio_del = document.getElementById("radio5");
let radio_del2 = document.getElementById("radio6");
let radio_del3 = document.getElementById("radio7");

let radio_del4 = document.getElementById("radio8");
let radio_del5 = document.getElementById("radio9");
let radio_del6 = document.getElementById("radio10");

radio_del.checked = true;

function radioOnDel() {
    if (radio_del.checked){
        document.querySelector(".del_title_output2").style.display = "flex";
        document.querySelector(".del_title_output4").style.display = "flex";
        document.querySelector(".del_title_output").style.display = "none";
        document.querySelector(".del_title_output3").style.display = "none";
        document.querySelector(".del_star").style.display = "none";
        document.querySelector(".del_output").style.display = "flex";
        document.querySelector(".del_output2").style.display = "none";
        document.querySelector(".del_output3").style.display = "none";
        document.querySelector(".del_output4").style.display = "flex";
        document.querySelector(".del_output5").style.display = "none";
        document.querySelector(".del_output6").style.display = "none";
        document.querySelector(".del_output7").style.display = "none";
        document.querySelector(".del_output8").style.display = "none";
        document.querySelector(".del_output9").style.display = "none";
        document.querySelector(".del_output10").style.display = "none";
        document.querySelector(".del_output11").style.display = "none";
        document.querySelector(".del_output12").style.display = "none";
    } else if (radio_del2.checked){
        document.querySelector(".del_title_output2").style.display = "flex";
        document.querySelector(".del_title_output4").style.display = "flex";
        document.querySelector(".del_title_output").style.display = "none";
        document.querySelector(".del_title_output3").style.display = "none";
        document.querySelector(".del_star").style.display = "none";
        document.querySelector(".del_output").style.display = "none";
        document.querySelector(".del_output2").style.display = "flex";
        document.querySelector(".del_output3").style.display = "none";
        document.querySelector(".del_output4").style.display = "none";
        document.querySelector(".del_output5").style.display = "flex";
        document.querySelector(".del_output6").style.display = "none";
        document.querySelector(".del_output7").style.display = "none";
        document.querySelector(".del_output8").style.display = "none";
        document.querySelector(".del_output9").style.display = "none";
        document.querySelector(".del_output10").style.display = "none";
        document.querySelector(".del_output11").style.display = "none";
        document.querySelector(".del_output12").style.display = "none";
    } else if (radio_del3.checked){
        document.querySelector(".del_title_output2").style.display = "flex";
        document.querySelector(".del_title_output4").style.display = "flex";
        document.querySelector(".del_title_output").style.display = "none";
        document.querySelector(".del_title_output3").style.display = "none";
        document.querySelector(".del_star").style.display = "none";
        document.querySelector(".del_output").style.display = "none";
        document.querySelector(".del_output2").style.display = "none";
        document.querySelector(".del_output3").style.display = "flex";
        document.querySelector(".del_output4").style.display = "none";
        document.querySelector(".del_output5").style.display = "none";
        document.querySelector(".del_output6").style.display = "flex";
        document.querySelector(".del_output7").style.display = "none";
        document.querySelector(".del_output8").style.display = "none";
        document.querySelector(".del_output9").style.display = "none";
        document.querySelector(".del_output10").style.display = "none";
        document.querySelector(".del_output11").style.display = "none";
        document.querySelector(".del_output12").style.display = "none";
    } else if (radio_del4.checked){
        document.querySelector(".del_title_output2").style.display = "none";
        document.querySelector(".del_title_output4").style.display = "none";
        document.querySelector(".del_title_output").style.display = "flex";
        document.querySelector(".del_title_output3").style.display = "flex";
        document.querySelector(".del_star").style.display = "flex";
        document.querySelector(".del_output").style.display = "none";
        document.querySelector(".del_output2").style.display = "none";
        document.querySelector(".del_output3").style.display = "none";
        document.querySelector(".del_output4").style.display = "none";
        document.querySelector(".del_output5").style.display = "none";
        document.querySelector(".del_output6").style.display = "none";
        document.querySelector(".del_output7").style.display = "flex";
        document.querySelector(".del_output8").style.display = "none";
        document.querySelector(".del_output9").style.display = "none";
        document.querySelector(".del_output10").style.display = "flex";
        document.querySelector(".del_output11").style.display = "none";
        document.querySelector(".del_output12").style.display = "none";
    } else if (radio_del5.checked){
        document.querySelector(".del_title_output2").style.display = "none";
        document.querySelector(".del_title_output4").style.display = "none";
        document.querySelector(".del_title_output").style.display = "flex";
        document.querySelector(".del_title_output3").style.display = "flex";
        document.querySelector(".del_star").style.display = "flex";
        document.querySelector(".del_output").style.display = "none";
        document.querySelector(".del_output2").style.display = "none";
        document.querySelector(".del_output3").style.display = "none";
        document.querySelector(".del_output4").style.display = "none";
        document.querySelector(".del_output5").style.display = "none";
        document.querySelector(".del_output6").style.display = "none";
        document.querySelector(".del_output7").style.display = "none";
        document.querySelector(".del_output8").style.display = "flex";
        document.querySelector(".del_output9").style.display = "none";
        document.querySelector(".del_output10").style.display = "none";
        document.querySelector(".del_output11").style.display = "flex";
        document.querySelector(".del_output12").style.display = "none";
    }else if (radio_del6.checked){
        document.querySelector(".del_title_output2").style.display = "none";
        document.querySelector(".del_title_output4").style.display = "none";
        document.querySelector(".del_title_output").style.display = "flex";
        document.querySelector(".del_title_output3").style.display = "flex";
        document.querySelector(".del_star").style.display = "flex";
        document.querySelector(".del_output").style.display = "none";
        document.querySelector(".del_output2").style.display = "none";
        document.querySelector(".del_output3").style.display = "none";
        document.querySelector(".del_output4").style.display = "none";
        document.querySelector(".del_output5").style.display = "none";
        document.querySelector(".del_output6").style.display = "none";
        document.querySelector(".del_output7").style.display = "none";
        document.querySelector(".del_output8").style.display = "none";
        document.querySelector(".del_output9").style.display = "flex";
        document.querySelector(".del_output10").style.display = "none";
        document.querySelector(".del_output11").style.display = "none";
        document.querySelector(".del_output12").style.display = "flex";
    }
}

radioOnDel();