

/**************************头部小广告轮播*********************/
window.onload = function() {
        // console.log(132);
        var advUl = document.querySelector('.topAdvUl');
        var advTop = 0;
        var oldAdvTop;
        var advList = document.querySelectorAll('.topAdvUl li');
        var timer;

        function run() {
            clearInterval(timer);
            oldAdvTop = advTop;
            timer = setInterval(function () {
                advTop -= 3.6;
                advUl.style.marginTop = advTop + 'px';
                if (advTop <= -(advList.length - 1) * 36) {

                    advTop = 0;
                    clearInterval(timer);
                } else if (Math.abs(advTop - oldAdvTop) >= 36) {
                    clearInterval(timer);
                }
            }, 50);
        }

        setInterval(run, 3000);



/******************************************************/









/**********************滚动显示隐藏的导航栏*********************************/

var nav = document.querySelector('.nav');
var bigHead = document.querySelector('.bigHead');
var hn = document.querySelector('.headnav');
var sn = document.querySelector('.scrollNav');

var snTop = parseInt(document.defaultView.getComputedStyle(sn,null).top);
// console.log(nav.offsetHeight+bigHead.offsetHeight-hn.offsetHeight);
var SIshow;
var SIhidden;

    window.onscroll = function(){
        //当页面顶部滚动到hn的头顶时,   获取页面到hn的距离  进行判断
        var docScroll = document.documentElement.scrollTop;
        if(docScroll>=nav.offsetHeight+bigHead.offsetHeight-hn.offsetHeight){
            //增加一个带有transition过渡的类名
            sn.className = 'scrollNav scrollNavEnd';
        }
        else if (docScroll<nav.offsetHeight+bigHead.offsetHeight-hn.offsetHeight){

            // 减去类名
            sn.className = 'scrollNav';
        }

    }












/*****************************************************************/












/*************************首页大banner轮播  pageBanner***************************/

       var myBigSwiper= new Swiper ('.pageBanner', {
            loop: true,
            spaceBetween : 10,
            effect : 'fade',
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,//3秒切换一次
            },
            pagination: {
                //小索引指示点
                el: '.swiper-pagination',
                clickable :true,
            },


        })

    myBigSwiper.el.onmouseenter = function(){
        myBigSwiper.autoplay.stop();
    }
    myBigSwiper.el.onmouseleave = function(){
        myBigSwiper.autoplay.start();
    }



/*****************************************************/


/***********************新品首发 轮播 newSwiper*******************************/

    var mySwiper = new Swiper ('.bigNewContent', {
    //水平方向滑动
        direction: 'horizontal',
//       loop: true,
        slidesPerView : 1,

         //间隔
        spaceBetween : 10,
        /*  slidesOffsetBefore : -430,*/
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.newleft',
            prevEl: '.newright',
        },
    })

/**********************************************************/

/******************** '大家都在说' 底部小轮播***********************************/

var mySmallSwiper= new Swiper ('.saidCon', {
    // direction: 'horizontal',
    loop: true,
    slidesPerView :3,
    spaceBetween : 12,
    // 前进后退按钮
    navigation: {
        prevEl: '.saidLeft',
        nextEl: '.saidRight',
    },
    autoplay: {
        delay: 1000,//1秒切换一次
    },

})
    mySmallSwiper.el.onmouseleave = function(){
        mySmallSwiper.autoplay.start();
    }







/*************************************************/
            }
