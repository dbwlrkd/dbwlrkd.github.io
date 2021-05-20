$(document).ready(function(){
	$('.to_top a').smoothScroll();
		// 모바일용 메뉴 보이기/숨기기 액션처리
		$('.openMOgnb').click(function(){
			// alert('메뉴보이기 액션클릭');
			// $('.header_cont').css('display','block');
			$('.header_cont').slideDown("slow");
			$('#header').addClass('on');
		});
		$('.closePop').click(function(){
			// $('.header_cont').css('display','none');
			$('.header_cont').slideUp("fast");
			$('#header').removeClass('on');
		});
	});

	// PC용 대메뉴 마우스 롤아웃 이베트 만들기(아래)
//첫번째대메뉴 서브메뉴=.gnb_depth2_1 마우스 롤아웃 상태처리
var isOver1 = false;//대메뉴 1이 false 일때 서브메뉴가 사라지는 조건
var isOverSub1 = false;//서브메뉴1이 false 일때 서브메뉴가 사라지는 조건
function goHide1() {
	if(!isOver1 && !isOver21) {//2개변수 모두 false 일때 아래내용 실행됨
		//jQuery는 뒤에서 앞으로 해석(영어와 같은)
		$('.gnb_depth2_1').stop().fadeOut('fast');
		//대메뉴 중 1번의 2차메뉴가 .gnb_depth2_1 영역
	}
}
//두번째대메뉴 서브메뉴=.gnb_depth2_2 마우스 롤아웃 상태처리
var isOver2 = false;//대메뉴2이 false 일때 서브메뉴가 사라지는 조건
var isOverSub2 = false;// 서브메뉴2이 false 일때서브메뉴가 사라지는 조건
function goHide2() {
	if(!isOver2 && !isOver22) {
		$('.gnb_depth2_2').stop().fadeOut('fast');
	}
}
//PC용 대메뉴 마우스 롤오버 이벤트 만들기(아래)
$(document).ready(function(){
	// [대메뉴1번]의 마우스 오버 이벤트 => gnb_depth2_1 서브메뉴 보이기
	$('.openAll1').mouseover(function(){
		// alert($('header').css('width'));
		// parseInt 문자를 숫자로 변환하는 형변환 함수 1066(윈도우) == 1049(CSS))
		if(parseInt($('header').css('width'))>=1049) { //header태그의 가로크기가 1055 이상이라면
			$('.gnb_depth2_1').fadeIn('fast');
		}
		isOver1 = true;
	});
	// [대메뉴1번]의 마우스 아웃 이벤트 => .gbn_depth2_1 서브메뉴 숨기기
	$('.openAll1').mouseout(function(){
		isOver1 = false;
		setTimeout('goHide1()',200);//0.2마다 함수를 실행해서 서브메뉴를 숨기기처리 
	});
	// [서브메뉴] 마우스 오버 했을때
	$('.gnb_depth2_1').mouseover(function(){
		isOver21 = true;//fadeOut 작동을 하지 않겠다는 명시적인 변수값.
	});
	// [서브메뉴] 마우스 아웃 했을때
	$('.gnb_depth2_1').mouseout(function(){
		isOver21 = false;//faseOut 을 작동하겠다는 명시적인 변수값.
		setTimeout("goHide1()", 200);
	});
	//================================================================
	// [대메뉴2번]의 마우스 오버 이벤트 => .gnb_depth2_2 서브메뉴 보이기
	$('.openAll2').mouseover(function(){
		if(parseInt($('header').css('width'))>=1049) {
			$('.gnb_depth2_2').fadeIn('fast');
		}
		isOver2 = true;
	});
	// [대메뉴2번]의 마우스 아웃 이벤트 => .gbn_depth2_2 숨기기
	$('.openAll2').mouseout(function(){
		isOver2 = false;
		setTimeout('goHide2()',200);//서브메뉴 숨김
	});
	// [서브메뉴] 마우스 오버 했을때
	$('.gnb_depth2_2').mouseover(function(){
		isOver22 = true;//fadeOut 작동을 하지 않겠다는 명시적인 변수값.
	});
	// [서브메뉴] 마우스 아웃 했을때
	$('.gnb_depth2_2').mouseout(function(){
		isOver22 = false;//faseOut 을 작동하겠다는 명시적인 변수값.
		setTimeout("goHide2()", 200);
	});
});
// 메인페이지 전용 슬라이드 호출 부분
$(document).ready(function() {
	// 위에서 선언한 함수|변수 사용(아래)
	//여기서 함수호출(실행)
	slideAuto = setTimeout('play_w("right")', 3000);//3초마다 play_w함수 실행
	var slidePlayHide = setTimeout(function(){
		$('.rollplay').css('display','none');
	},3000);//3초 후에 rollplay클래스 플레이버튼 영역을 숨김
	// 3개의 슬라이드 버튼 클랙 액션처리
	$('.rollstop a').click(function(){
		// this는 클릭한 본인 태그를 말합니다.
		$(this).parent().hide();//현재 stop버튼 숨김.
		$('.rollplay').css('display','inline-block');
		if(slideAuto) {
			clearTimeout(slideAuto);//slideAuto변수가 없다면, play_w함수를 실행 중지.
		}
	});
	$('.rollplay a').click(function(){
		$(this).parent().hide();// a태그의 부모 rollplay영역 입니다.
		$('.rollstop').css('display','inline-block');
		play_w('right');//3초마다 슬라이드 이미지 액션일 발생합니다.

	});
	$('.rollingbtn li.seq a').each(function(index){
		$(this).click(function(){
			$('.rollplay').hide();
			$('.rollstop').css('display','inline-block');
			if(slideAuto) {
				clearTimeout(slideAuto);//슬라이드 중지
			}
			play_w(index);//슬라이드 재생 : 단 시작위치는 클릭한 index부터 무한반복
		});
	});
});