$(function () {
  //bander背景图
  var count = -1;
  $(".banner li").eq(0).show()
  setInterval(function () {
    count++;
    if (count > 4) {
      count = 0;
    }
    $(".banner li").eq(count).fadeIn().siblings().fadeOut();
  }, 3000)
  
  var navNum=50 //点击nav隐藏下边宽度
  // $(window).resize(function() {
    //设置导航nav-wrap的宽度
    var wrapWidth = $(".navbar .nav-wrap .navbar-brand").outerWidth()+$(".navbar .nav-wrap .navbar-nav").outerWidth()//获取导航标签真实宽度
    if($(window).width()>=768){
      $(".navbar .nav-wrap").width(wrapWidth)
      navNum=100;
    }
  // })
  
  //设置导航栏滚动定位
  $(document).scroll(function() {
  
    //屏幕滚动立即取消aboutme的marginTop
    $(".aboutme").css("marginTop","0")
    
    if($(document).scrollTop()>=$("header").height()){
      $("nav").addClass("navbar-fixed-top")
    }else {
      $("nav").removeClass("navbar-fixed-top")
    }
    
  });
  
  // $("[href='#aboutme']").on("click",fun)
  //导航a锚点跳转和动画
  $("nav a").on("click",function () {
    
    //解决点击关于我后,nav向下100px
    if($(this).text()=="关于我"){
      $(".aboutme").css("marginTop","100px")
    }else {
      $(".aboutme").css("marginTop","0")
    }
    
    if($(window).width()<768){
      $("nav button").click()//点击li跳转隐藏ul,使其点击次
    }
    
    
    // $($(this).attr("href")).offset().top 是获取id等于$(this).attr("href")块所在的位置
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -navNum+ "px"}, 500);
    return false;//不要这句会有点卡顿
  });
  
  
  // app页面点击li后让其ul隐藏
  // $(".navbar").on("click",".in li",function () {
  //   console.log(1);
  //   $(".navbar .in").hide()
  // })
});





