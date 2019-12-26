(function(){
    function slide(){
        var MOVING_IN = 500,
            AUTO_TIME = 6500,

            slideLength = 0,
            slideCurrent = 0,
            autoPlayNum = 0,
            $slideCnt = null,
            $slideBg = null,
            $slideArea = null,
            $sliderAuto = null,
            $sliderStop = null;

        $(document).ready(function(){
            slideinit();
            slideListener();
        });

        function slideinit(){
            $slideCnt = $('.slideCnt');
            $slideBg = $('.top');
            $slideArea = $('.slideArea li');
            slideLength = $slideCnt.children('li').length;
            $sliderStop = $('.playBtn .stop');
            $sliderAuto = $('.playBtn .play');
        };

        function slideListener(){
            $('.slide .slideBtn .prev').on('click', function(){
                prev()
            });
            $('.slide .slideBtn .next').on('click', function(){
                next()
            });
            $slideArea.on('click', function(){
                slideAfter = $slideArea.index(this);
                slideMoving(slideAfter);
                return false;
            });
            $sliderAuto.on('click', function(){
                slideOn();
            });
            $sliderStop.on('click', function(){
                slideOff();
            });
            slideOn();
        };

        function prev(){
            var slideAfter = slideCurrent - 1;
            if(slideAfter < 0){
                slideAfter = slideLength - 1;
            }
            slideMoving(slideAfter);
        };

        function next(){
            var slideAfter = slideCurrent + 1;
            if(slideAfter >= slideLength){
                slideAfter = 0;
            }
            slideMoving(slideAfter);
        };

        function slideOn(){
            if(this.autoPlayNum != 0){
                clearInterval(this.autoPlayNum);
            };

            this.autoPlayNum = setInterval(function(){
                next();
            }, AUTO_TIME);

            $sliderAuto.css({
                display: 'none'
            });
            $sliderStop.css({
                display: 'block'
            });
        };

        function slideOff(){
            if(this.autoPlayNum != 0){
                clearInterval(this.autoPlayNum);
            }
            this.autoPlayNum = 0;
            
            $sliderStop.css({
                display: 'none'
            });
            $sliderAuto.css({
                display: 'block'
            });
        };

        function slideMoving(slideAfter){
            $slideCnt.stop().children('li').eq(slideAfter).fadeIn(MOVING_IN).siblings().css({
                display: "none"
            });
            $slideBg.css({
                backgroundImage: "url(./common/images/slide_visual0" + slideAfter + ".png)"
            })
            $slideArea.eq(slideAfter).addClass('on').siblings().removeClass('on');
            slideCurrent = slideAfter;
        };
    };
    
    slide();
    
    
    function subSlide(){

        var SLIDE_TIME = 500,
            AUTO_TIME = 4000,
            
            $scrollSlide = null,
            $scrollSlideWrap = null,
            $scrollSlideCnt = null,
            $scrollBtnPrev = null,
            $scrollBtnNext = null,
            arrNum = null;
        
        $(document).ready(function(){
            init();
            eventInit();
        });
        
        function init(){
            $scrollSlide = $(".scroll");
            $scrollSlideWrap = $(".scrollWrap");
            $scrollSlideCnt = $(".scroll a > span");
            $scrollBtnPrev = $(".scrollBtn > .prev");
            $scrollBtnNext = $(".scrollBtn > .next");
        };
        
        function eventInit(){
            
            $scrollBtnPrev.on("click", function(){
                moving(-60, 90);
                setTimeout(function(){
                    $scrollSlide.append($scrollSlide.children("li").eq(0));
                }, 150);
            });
            
            $scrollBtnNext.on("click", function(){
                moving(74, -74);
                setTimeout(function(){
                    $scrollSlide.prepend($scrollSlide.children("li").eq(6));
                }, 150);
            });
            
            $scrollSlideWrap.on("mousewheel", function(e){
                if(e.originalEvent.wheelDelta > 0){
                    moving(-60, 90);
                    setTimeout(function(){
                        $scrollSlide.append($scrollSlide.children("li").eq(0));
                    }, 150);
                }else if(e.originalEvent.wheelDelta < 0){
                    moving(74, -74);
                    setTimeout(function(){
                        $scrollSlide.prepend($scrollSlide.children("li").eq(6));
                    }, 150);
                };
            })
            
            setInterval(function(){
                moving(74, -74);
                setTimeout(function(){
                    $scrollSlide.prepend($scrollSlide.children("li").eq(6));
                }, 150);
            }, AUTO_TIME);
            
        };
        
        function moving(before, after){
            
            $scrollSlideCnt.stop().animate({
                top: before + "px"
            }, 150, function(){
                $scrollSlideCnt.css({
                    top: after + "px"
                });
                $scrollSlideCnt.stop().animate({
                    top: "0"
                }, 400);
            });
        };
        
    };
    
    subSlide();
    
    function eventSlide(){
        
        var MOVING_TIME = 4000,
            
            $eventSlide = null,
            $eventSlideArea = null,
            $eventSlidePlay = null,
            eventSlideLength = 0,
            slideIndex = 0,
            slideNext = 0;
        
        $(document).ready(function(){
            init();
            eventInit();
        });
        
        function init(){
            $eventSlide = $(".eventBanner").children(".eventCnt");
            $eventSlideArea = $(".eventBtn .eventArea li");
            $eventSlidePlay = $(".eventPlayBtn button");
            eventSlideLength = $eventSlide.length;
        };
        
        function eventInit(){
            
            $eventSlide.eq(0).siblings("ul").css({
                left: "980px"
            });
            
            $eventSlideArea.on("click", function(){
                slideNext = $eventSlideArea.index(this);
                moving(slideIndex, slideNext);
                slideIndex = slideNext;
            });
            
            $eventSlidePlay.on("click", function(){
                
                $(this).css({
                    display: "none"
                }).siblings("button").css({
                    display: "block"
                });
                
                $eventSlidePlay.parent().toggleClass("on");
            });
            
            setInterval(function(){
                slideNext++;
                if(slideNext > 2){
                    slideNext = 0;
                };
                moving(slideIndex, slideNext);
                slideIndex = slideNext;
            }, 4000);
        };
        
        function moving(slideIndex, slideNext){
                
            if(slideNext != slideIndex){
                $eventSlide.eq(slideNext).stop().css({
                    left: "980px"
                }).animate({
                    left: "0px"
                });
                $eventSlide.eq(slideIndex).stop().animate({
                    left: "-980px"
                });
            };
            $eventSlideArea.eq(slideNext).addClass("on").siblings("li").removeClass("on");
        
        };
    };
    
    eventSlide();
    
    function data(){
        
        var MOVING_TIME = 3000,
            MOVING = 500,
            $dataValue = null,
            dataValueH = 0,
            dataValueLenght = 0,
            indexNum = 0,
            nextNum = 0;
        
        $(document).ready(function(){
            $dataValue = $(".dataValue");
            dataValueLenght = $dataValue.length;
            dataValueH = $dataValue.height();
            $dataValue.eq(0).siblings().css({
                bottom: -dataValueH + "px"
            });
        });
        
        setInterval(function(){
            nextNum++;
            if(nextNum >= dataValueLenght){
                nextNum = 0;
            };
            moveIndex(indexNum);
            moveNext(nextNum);
            indexNum = nextNum;
        }, MOVING_TIME);
        
        function moveIndex(value){
            $dataValue.eq(value).animate({
                bottom: dataValueH + "px"
            }, MOVING);
        };
        
        function moveNext(value){
            $dataValue.eq(value).css({
                bottom: -dataValueH + "px"
            });
            $dataValue.eq(value).animate({
                bottom: "0px"
            }, MOVING);
        };
    };
    
    data();
    
    function product(){
        
        var $listBtn = null,
            $listCnt = null,
            $productTit = null,
            $productTitColor = null,
            num = 0;
        
        $(document).ready(function(){
            init();
            eventInit();
        });
        
        function init(){
            $listBtn = $(".productCnt .listTit a");
            $listCnt = $(".productCnt .listCnt");
            $productTit = $(".productTit .txt");
            $productTitColor = $(".productTit em.txt");
        };
        
        function eventInit(){
            $listBtn.on("click", function(){
                num = $(this).parent("li").index();
                tab(num);
                txt(num);
                return false;
            });
        };
        
        function tab(num){
            $listBtn.parent("li").eq(num).addClass("on").siblings("li").removeClass("on");
            $listCnt.eq(num).addClass("on").siblings("ol").removeClass("on");
        };
        
        function txt(num){
            if(num == 0){
                $productTit.text("펀드");
                $productTitColor.css({
                    color: "#1598dc"
                });
            }else if(num == 1){
                $productTit.text("ELS/DLS");
                $productTitColor.css({
                    color: "#587cc5"
                });
            }else if(num == 2){
                $productTit.text("랩(Wrap)");
                $productTitColor.css({
                    color: "#7a5ab4"
                });
            };
        };
        
    };
    
    product();
    
    function infoBoxTab(){
        
        var $qmenuBtn = null,
            $qmenuCnt = null,
            $toggleBtn = null,
            $toggleCnt = null,
            num = 0;
        
        $(document).ready(function(){
            init();
            eventInit();
        });
        
        function init(){
            $qmenuBtn = $(".infoBox .qmenuTit a");
            $qmenuCnt = $(".infoBox .qmenuCnt");
            $toggleBtn = $(".infoBox .qmenuCnt .qmenuMore");
            $toggleCnt = $(".infoBox .qmenuCnt");
        };
        
        function eventInit(){
            $qmenuBtn.on("click", function(){
                num = $(this).parent("li").index();
                tab(num);
                return false;
            });
            
            $toggleBtn.on("click", function(){
                $(this).toggleClass("on").parents(".qmenuCnt").toggleClass("toggleOn");
            });
            
        };
        
        function tab(num){
            $qmenuBtn.parent("li").eq(num).addClass("on").siblings("li").removeClass("on");
            $qmenuCnt.eq(num).addClass("on").siblings("div").removeClass("on");
        };
        function toggleEvent(){
            
            
        };
    };
    
    infoBoxTab();
    
})();







