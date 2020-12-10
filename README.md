# 2020 Backend 평가 시험

## 평가 시험 안내

* 시험 일시: 2020. 12. 19. (토) 17:00 - 17:55 (55분간 진행)
* 온라인으로 진행, MS Teams에 접속 (공지사항의 용이한 전달을 위함)
* 타인과의 communication은 엄격히 금지합니다.
    - 적발 시 0점 처리 및 보충 스터디 참여 불가
* 평가 시험 Pass시 정회원으로 승급 / Fail시 겨울 보충 스터디 참여 후 가능
    - 겨울 보충 스터디 일정: 2021년 1/26, 1/28, 2/2, 2/4 (15시 - 17시)
* git을 이용하여 시험 문제 배부 및 답안 제출이 이루어짐
    - 업로드되는 구글 폼에 본인의 GitHub 계정 아이디를 제출
    - 각 GitHub 계정별로 저장소를 생성하여, 문제 배부 및 답안 제출
    - 자세한 진행 방식은 추후 공지

## git을 이용한 시험지 배부 및 답안 제출

### 시험지 저장소와 연동

```sh
$ git remote add problems https://github.com/KWEBofficial/20-backend-test
```

* 연동한 이후 다시 연동할 필요는 없음

### 시험지 다운로드

```sh
$ git pull problems master
```

* 시험지는 시험 시작 시 업로드될 예정

### 답안 제출

```sh
$ git add .
$ git commit -m "<commit-message>"
$ git push
```
