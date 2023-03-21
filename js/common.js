
// a링크 속성 효과 무시
$('a[href="#"]').click(function(e) {
	e.preventDefault();
});



//1.제이쿼리로 슬라이드 구현하기
$(function(){
  //1.인덱스 값을 저장하기 위한 변수 선언 
  let n = $('.slide_pagination li').index();
  console.log(n); //0이 나온다

  //2. 사용자가 pagination 버튼 클릭 시 해당 index 값 구해보기
  $('.slide_pagination li').click(function(){
    n= $(this).index();
    console.log(n);

  //3.이미지 너비값 구하기
  let img_w = -($('.mbanner img').width()*n);
  console.log(img_w);

  $('.mbanner').stop().animate({'margin-left':img_w},700);
  $('.slide_pagination li').removeClass('on'); //콘트롤 버튼 전체 서식을 변경하고
  $(this).addClass('on'); //사용자가 선택한 콘트롤 버튼만 서식을 적용한다.
  
  });

  //4. 3초마다 반복호출하여 슬라이드가 자동으로 움직이게 한다.
  function autoSlide(n){
    n= -(n*$('.slides img').width());
    $('.slides').stop().animate({'margin-left':n},700);
  }
  let Timer = setInterval(function(){
    if(n==1){
      n=0;
      $('.slide_pagination li').removeClass('on');
      $('.slide_pagination li').eq(n).addClass('on');
    }else{
      n++;
      $('.slide_pagination li').removeClass('on');
      $('.slide_pagination li').eq(n).addClass('on');
    }
    autoSlide(n);
  },7000);

  // 두번째 영역 (탭 컨텐츠)
  $(document).ready(function(){
    $('.select_menu li').click(function(){

      let idx = $(this).index();
      console.log(idx);

      $('.select_menu li').removeClass('on2');
      $('.select_menu li').eq(idx).addClass('on2');
      $('.tabcont').hide();
      $('.tabcont').eq(idx).show();
    });
  });

});

//세번째 영역 (쿼카스크롤영역_자바스크립트)
let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax_title');
// let paralaxTitles2 = document.querySelectorAll('.p02');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 50 + "%)"
			// element.style.transform = "translateX("+ (-window.scrollY / 80) + "%)"
		})
		didScroll = false;
	}

	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)


// if(didScroll){
//   paralaxTitles.forEach((element, index) => {
//     element.style.transform = "translateX("+ (-window.scrollY / 80) + "%)"
//   })
// }
