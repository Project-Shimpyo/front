# Shimpyo back-end

# 📑 목차

- [프로젝트 개요](#-프로젝트-개요)
- [프로젝트 기간](#-프로젝트-기간)
- [멤버 구성](#-멤버-구성)
- [개발 환경](#-개발-환경)
- [기술 스택](#-기술-스택)
- [주요 기능 및 상세](#-주요-기능-및-상세)

# 👋 프로젝트 개요

<div align="center">
<img width="329" alt="image" src="https://user-images.githubusercontent.com/50205887/207568862-cdc9e2c0-b03c-43ff-bf46-3ba79a110d0c.png">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FVoluntain-SKKU%2FVoluntain-2nd&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

#### 쉼표는 숙소를 직접 등록하거나 예약할 수 있는 통합 숙박예약 서비스입니다.

### [쉼표 바로가기](http://shimpyo.o-r.kr/)

# 📅 프로젝트 기간

> 2023. 06 ~ 2023. 07

# 👪 멤버 구성

| 이름  | 역할  | 기능                              |
|-----|-----|---------------------------------|
| 이지환 | 팀장  | AWS EC2 서버 구축, 배포 자동화, 숙소, 관심숙소 |
| 이호석 | 팀원  | 배포 자동화, JSON 응답 모듈화, 예약, 결제, 리뷰 |
| 한재민 | 팀원  | DB설계, 회원(JWT , SMS 인증, 소셜 로그인)  |

# 🔧 기술 스택

- Core:React18, TypeScript, Recoil
- CSS: Styled-Component, MaterialUI
- Code Management:Git, GitHub, 
- DevOps:AWS EC2, NGINX, GitHub Actions
- Communication: Slack, GoogleDocs 

# 💻 주요 기능 및 상세

### 회원 관리

| 기능          | 내용                                                                     |
|-------------|------------------------------------------------------------------------|
| 회원가입        | 개인 정보를 입력받아서 회원가입을 하거나 소셜 로그인(네이버, 구글)을 통하여 추가 정보를 입력받아서 회원가입을 할 수 있다. |
| 로그인         | Spring Security와 JWT 토큰을 이용하여 아이디와 비밀번호를 입력해 로그인하거나, 소셜 로그인으로 로그인할 수 있다.      |
| 회원 & 비회원 구분 | 스프링 시큐리티의 Anonymous를 통하여 회원과 비회원을 구분할 수 있다.                           |
| 회원 정보 수정    | 이메일, 패스워드, 휴대폰 번호 등 회원의 정보를 수정할 수 있다.                                  |
| 소셜 로그인      | 카카오, 네이버, 구글 등 소셜 로그인이 가능하다.                                           |
| JWT 토큰      | 로그인 시 Access Token과 Refresh Token을 발급 받아 인증할 수 있다.                     |
|             |                                                                        | 

### 숙소

| 기능         | 내용                                                                                      |
|------------|-----------------------------------------------------------------------------------------|
| 숙소 및 객실 등록 | 회원은 누구나 숙소를 등록할 수 있으며, 숙소 및 객실에 대한 세부적인 정보들을 유동적으로 등록할 수 있다.                            |
| 숙소 목록      | 예약 가능한 숙소 목록을 보여주며, 숙소 유형, 지역, 예약일자, 인원 수 등을 통한 조건부 검색이 가능하다.                           |
| 숙소 상세 정보   | 숙소 및 객실에 대한 정보를 상세하게 확인할 수 있으며 예약일자를 선택함에 따라 예약 가능 여부를 동적으로 확인할 수 있으며, 리뷰 현황을 확인할 수 있다. |
| 등록한 숙소 목록  | 자신이 등록한 숙소 목록을 확인 할 수 있다.                                                               |
| 숙소 수정      | 자신이 등록한 숙소 정보를 수정할 수 있다.                                                                |
| 객실 수정      | 자신이 등록한 숙소의 개별 객실에 대한 정보를 수정할 수 있다.                                                     |
| 숙소 삭제      | 자신이 등록한 숙소 정보를 삭제할 수 있으며, 숙소를 삭제하면 숙소와 관련된 객실 정보들까지 한번에 삭제된다.                           |
| 객실 삭제      | 숙소의 개별 객실 정보를 삭제할 수 있다.                                                                 |
| 관심 숙소 등록   | 회원은 최대 20개까지 원하는 숙소를 관심 숙소로 등록할 수 있다.                                                   |                                         |                                                                            |
| 관심 숙소 목록   | 관심 숙소로 등록한 숙소들의 목록을 확인할 수 있으며, 숙소 상세정보를 보거나 관심 숙소에서 삭제할 수 있다.                           |
| 관심 숙소 삭제   | 관심 숙소로 등록된 숙소를 관심 숙소 목록에서 삭제할 수 있다.                                                     |

### 결제, 예약

| 기능       | 내용                                                                                                                   |
|----------|----------------------------------------------------------------------------------------------------------------------|
| 결제 및 예약 생성 | 예약하고 싶은 숙소의 날짜를 선택하고 결제 페이지 진입시 결제 준비 페이지가 화면에 나타난다. 결제하기 버튼 선택시 포트원을 이용한 결제창이 생성된다. 회원, 비회원에 따라 등급할인, 쿠폰선택을 할 수 있다. |
| 결제 및 예약 수정 | 등록한 예약을 수정할 수 있다. |
| 결제 및 예약 삭제 | 등록한 예약을 삭제할 수 있다. |
| 숙소 예약 목록 | 자신이 등록한 숙소를 선택해서 숙소별, 예약 상태별로 예약 현황을 확인할 수 있다.                                                                       |
| 예약 조회    | 예약한 숙소의 정보, 예약 날짜를 확인할 수 있고, 숙소 주인의 마이 페이지로 이동이 가능하다.                                                                |

### 마이 페이지

| 기능       | 내용                                                            |
|----------|---------------------------------------------------------------|
| 예약 목록    | 예약한 현황을 볼 수 있으며, 예약 수정, 취소가 가능하다. 숙소 이용이 끝난 상태라면 리뷰작성이 가능하다.  |
| 리뷰 목록 조회    | 작성한 리뷰들을 확인할 수 있다.                     |
| 리뷰 목록 수정   | 작성한 리뷰들을 수정할 수 있다.                     |
| 리뷰 목록 삭제   | 작성한 리뷰들을 삭제할 수 있다.                     |
