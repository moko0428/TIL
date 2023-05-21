# git flow model

## 브랜치들의 역할

master 브랜치의 가장 최신 버전은 언제나 실행 가능한 상태이어야 한다.

실행 가능한 상태를 만들어 가는 과정은 develop 브랜치에서 진행한다.

feature 브랜치는 기능 개발에 쓰인다.

release 브랜치는 출시 할 때 쓰인다.

hotfixes 브랜치는 긴급사항을 패치할 때 쓰인다.

## 출시와 개발을 동시에 진행하는 방법

```
git checkout develop
git merge --no-ff release/1.0
git checkout master
git merge --no-ff release/1.0
git tag 1.0
git checkout develop
```

git flow를 이용하면 위의 명령어를 한줄로 표현이 가능하다.

```
git flow release finish 1.0
```

git flow를 사용하기 앞서 커맨드에 `git flow` 명령어를 입력해보면 다양한 옵션들을 볼 수 있다.

`git flow`를 사용하기 위해서는 `git flow init` 명령어를 입력해야한다.

그러면 브랜치들의 이름을 설정해야하는데 기본값으로 할 경우 엔터를 마구 눌러준다.

### 새 기능 시작하기

새 기능의 개발은 'develop' 브랜치에서 시작한다.

```
git flow feature start [myfeature]
```

이 명령어는 'develop'에 기반한 새 기능(feature) 브랜치를 생성하고 그 브랜치로 전환한다.
