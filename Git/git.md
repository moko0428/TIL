## 실상황에 따른 git 명령어 사용법 (4) - commit 생성 요령

- 1. Commit 하나에 반영되는 내용
  - 메시지 작성 요령
    - 특정 기능을 추가했을 때, 해당 기능과 관련된 내용들만 해당 commit에 포함되어야 함.
    - Commit message도 자연스럽게 해당 기능만을 설명할 수 있게 됨.
    - 여러 기능을 하나의 commit에 포함하는 것은 코드의 변경사항을 추적하는 것을 어렵게 만듦.
    - 즉, 의미 단위로 commit을 구성해야 함.

## 실상황에 따른 git 명령어 사용법 (5) - 최근 commit 수정(Amend)

- 1. Commit된 변경사항을 수정해야 하는 경우
  - 추가한 기능에 대한 문서를 깜박한 경우를 가정
- 2. Commit의 특성 - 이전에 설명한 Commit의 실체 부분을 재확인 - 사진을 찍듯이 기록(Commit)을 남기므로 생성 후에 변경 불가능(Immutable) - Commit의 생성 기록을 모은 것을 이력(History)이라고 함.

> Commit의 실체란?
> commit이 수행된 시점의 repo의 상태 == 이전 commit 대비 변경이 발생한 파일과 그 파일들 내에서 변경된 내용들의 집합

- 3. 이미 생성된 commit에 변경사항을 추가하는 방법

  - 내부적으로 새로운 commit을 생성하고 대체(Replace)하는 방식으로 처리

- 4. Amend 옵션을 통한 가장 최근 commit 수정
  - A.txt 파일에 내용 추가
  ```
  $ notepad README.md
  ```
  - 상태 확인 - modified 상태
  ```
  $ git status
  ```
  - amend 옵션을 통해 기존의 최신 커밋에 변경사항을 추가
  ```
  $ git commit --amend -m "Add a log message with docs"
  ```
  - log와 show 명령어를 통해 기존 커밋에 변경된 내용을 확인(commit ID가 다른 것 확인)
  - 단, 이미 git push를 수행하여 local에서 remote 저장소로 동기화된 commit의 경우에는 이 방법을 사용하지 말아야 함.
    - --amend할 경우 push에러가 생김 이럴땐 git push --force로 푸시하면 정상적으로 푸시됨.

> --amend 최신 커밋의 변경사항을 수정한다.
