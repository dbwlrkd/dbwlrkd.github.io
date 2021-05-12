#### 20210512 작업내역
git clone 으로 프로젝트를 가져온 경우 이래 내용을 추가해야 합니다.
git config --list 확인해서 user.name / usea.eamil 없으면 아래 추가.
터미널에서 아래 2가지 실행
git config --local user.name 영문이름
git config --local user.eamil 영문이메일
프로젝트를 1명이 제작하는 경우 없기때문에, 2명일때 소스수정한 사람 확인용 정보.

#### 20210511 작업내역
로렘 입숨 한글URL http://guny.kr/stuff/klorem/#/table-html
URL경로(path): / 루트, /test/html5.html
-html 레이아웃 구조제작합니다
서버(응답하는프로그램=response) = 아파치서버, 톱캣서버
클라이언트(요청하는프로그램=request) 웹브라우저
HTML은 마크업이 태그로 구성됩니다 <의미있는문자>...</의미있는문자>
-http;/127.0.0.1;80생략[8000][9000][5500][6500]
pc의 네트워크 내부주소(공통): 74.6.143.25(IP주소) ==주민번호
IP주소버전 IPv4, IPv6
HTML 버전:HTML5, HTML4.01(old)
#### 20210510 작업내역
 개발PC(html) 와 깃 저장소와 연결시킵니다. 초기에 연결시 아래와 같은 문제점이 나올 수 있습니다.
 레포지토리(저장소) 초기화: git init 또는 VS code에서 레포지토리초기화 버튼 이후
--- Git 에서 'user.name' 및 'user.email'을 구성하라고 뜹니다 (해결책 아래2줄)
--- git config --local user.name dbwlrkd
--- git config --local user.email dbwlrkd@test.com
 브런치(branch)가 없다며 구성하라고 뜹니다 (해결책 아래1줄)
--- git branch -M master
 리모트(remote)가 없다며 구성하라고 뜹니다 (해결책 아래1줄)
--- git git remote add origin https://github.com/사용자저장소/사용자저장소.git
 작업결과는 .git 폴더안의 cogfig 파일에 저장됩니다.
 이후 VS code 프로그램에서 아래처럼 작업하면 됩니다.
 업로드절차 1. 커밋(comit) 2. 푸시(push)
 다운로드: 1. 풀(pull) : 교실에서 작업한 결과를 집에서 이어서 작업할 상황
 주의) 다른 신규 PC에서 작업시 아래 멍령어로 깃내용을 새로 가져옵니다.(아래)
 git clone https://github.com/학생저장소/학생저장소.github.io.git
 레포지토리(저장소) 초기화 git init
 개발PC (html) 과 깃 저장소와 연결시킵니다.
 포트의 역할 트렌드도 많이 사용됩니다.
 포트(port): 포트번호로 서비스fmf 만드는것이 트렌드
 이전에는 80 포트에 모든 서비스를 붙여놓았습니다.
 모든서비스를 개발부 분리하는 트렌드가 있습니다.
 마이크로서비스라고 합니다 ==RostAPI로 구현이 됩니다.
 도메인(ex. https:naver.com:23124134313/네이버 인증서비스 개발)
 외부인원 (네이버직원아닌) 위 포트기존으로 제작한 서비스를 갖다가 사용
 html : hyter text markUp Language 태그를 사용하는 언어
 md : markDown Language 태그를 사용하지 않는 언어