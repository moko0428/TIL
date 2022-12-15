## 상황 1-1

- Commit 하려는 대상 (Stage(반영대상)에 들어갈 파일들을 결정) -> Changeset이라고 부름

Workspace에 발생한 변경사항을 stage에 add하지 않으면 Changeset에 포함되지 않음
-> local에서 A, B, C를 수정했다고 가정했을 때, A만 add를 했다면

```
$ git add A.txt
```

A는 Stage 영역에 들어가게 되고 B, C는 Stage에서 제외 됨.
그럼 이상태에서 commit을 하게 되면 A는 변경사항이 동기화 되고 B,C는 Workspace의 변경사항은 그대로 유지가됨.

Local Repo에는 동그래미 A,B,C가 있고, Workspace에는 네모 A,B,C가 있을 때, A만 add를 할 경우에 Stage에 네모 A가 올라오고 네모 B,C는 ChangeSet에 포함되지 않은 상태. 이 상태에서 commit을 하게 되면 ChangeSet에 반영되어 있는 네모 A만 local repo에 반영이되고 local repo엔 네모 A랑 동그래미 B,C가 되버리는 것임.
workspace는 네모 A,B,C가 있게 되는 거고.

## 상황 1-2

- 특정 소스코드의 Workspace - Stage - Local Repo 위치에서의 상태가 다른 경우

-> Local repo에 동그래미 B가 있는데 B를 수정하고 add를 해서 Stage엔 네모 B가 ChangeSet 된거야 근데 다시 또 B를 수정해서 결국엔 Workspace(세모 B)랑 Stage(네모 B)랑 Local repo(동그래미 B)랑 B의 상태가 다 다르게 되는거지.

이럴땐 그냥 다시 add를 해서 세모 B를 Stage 영역에 ChangeSet 해버리고 commit을 하면 local repo(동그래미 B)에 세모 B가 반영되는 거야.

여기서 세모 B와 네모 B의 변경사항을 확인해보는 방법은 git diff 고
네모 B랑 동그래미 B의 변경사항을 확인해보는 방법은 git diff --staged인거지

이 상태에서 commit을 하게 되면 세모 B가 local repo에 반영되는 것이고

현재 HEAD의 변경사항을 확인하는 것이 git diff HEAD이고

Stage에 아무것도 없을 경우 local repo 내용과 동일하게 출력돼

## push

- Local Repo에 반영한 변경사항을 remote repo로 반영하기

```
$ git push
```

-> 지금까지는 Local repo 즉, clone 된 내 PC에서 파일을 변경하는 작업을 수행한거고, Local repo에 저장된 것들을 remote repo에 반영시켜줘야 하는데, 그 명령어가 바로 git push가 되는 거야.

첫 push는 -u라는 옵션으로 local repo와 remote repo의 origin과 연결시켜줘야 해
그 다음 push 부턴 그냥 git push해도 반영이 돼

```
$ git push -u origin
```

push도 여러가지 방법이 있는데, 그건 차차 진도를 나가면서 알아보자.

## Branch

- Local repo에서 새로운 기능(feature)을 개발하던 중 remote repo에 부분적으로 반영해야 하는 경우
  - 내 PC에만 저장된 소스코드는 항상 유실의 위험성이 존재하므로 commit & push 수행 필요
  - 문제점 1. 미완성된 코드가 remote repo에 반영되는 상황 발생
  - 문제점 2. git commit을 의미단위로 저장해야 하는 원칙에 위배

-> 내가 어떤 프로젝트를 local에서 진행하고 있는데 local에서의 작업은 유실의 위험성이 존재하잖아. 언제 어떻게 없어질 수도 있다는 거지 그래서 commit & push는 필수적으로 해줘야 하는 일이야 근데 아직 미완성인 코드가 있는데도 불구하고 push를 하게 되면 remote에 반영이 되서 큰일나겠지 아니면 의미 단위로 저장해야 하는 원칙에 위배된다거나 이럴때 사용하는 것이 브랜치.

    - 내 수정사항을 특정 공간에 고립시켜 다른 사용자의 변경사항과 섞이지 않도록 만듦.
    - 이를 통해, 서로 간에 영향이 없게 만들어 줌

- Git에서 Branch의 실체 : 특정 commit을 가리키는 단순한 포인터(Pointer)역할

- 하나의 repo에 여러 branch가 있기 때문에, 내가 어떤 branch에서 작업 중인지 알기 위한 방법이 필요
- 내가 현재 어떤 branch를 사용하는지 알기 위해서 HEAD라는 개념을 사용
- HEAD는 branch에 대한 포인터이며, checkout 명령어 사용시 포인터가 가리키는 branch가 변경됨.
- branch에서 commit을 수행할 때 마다 포인터가 이동함.

- 하나의 git repo는 여러 개의 branch를 가질 수 있음
- 각 branch는 특정 commit에 대한 포인터 그 이상 그 이하도 아님

## Merge

- 특정 branch에서 main branch로 통합 또는 병합(Merge)를 수행하는 업무 흐름 -여러 개의 branch를 다룰 때 해야 할 일 두가지 - 1) 독립된 branch에서 작업을 수행할 것. - 2) 독립된 branch에서 작업한 내용을 다른 branch에 통합 또는 병합(merge)할 것. > 병합이란 서로 다른 branch의 changeset들을 결합하는 새로운 commit 만드는 것을 의미

### Fast-Forward Merges

- 병합하려는 branch들 사이에 분기(Diergence)가 존재하지 않는 경우 사용됨.
- FeatureA의 내용을 Main에 반영하기 위해서, main branch가 가리키는 commit을 1에서 2로 변경하게 됨

Git 명령어

```
$ git merge featureA
```

- 현재 작업 중인 branch에 대상이 되는 branch의 내용을 merge하게 됨.
- 현재 작업 중인 branch : main
- 대상 : featureA

-> merge 방법 중에 가장 쉽고 간편하게 되는 merge 중 하나

### Three-way Merges

- 병합하려는 branch에 존재하는 changeset들이 특정 branch에만 존재하는 경우

  - 여러 명의 개발자들이 하나의 소스코드 베이스(repo)에서 여러 branch를 활용해서 개발을 진행할 때 자연스럽게 발생하는 상황

- main branch에서 featureA와 featureB branch를 생성하고, 각 branch에서 changeset들을 발생시킨 경우

- featureB를 main branch에 merge 시킴
- commit 1은 main branch에서 더 이상 최신 commit이 아니게 됨
- 이러한, Three-way merges의 절차에는 3개의 포인트가 관여하게 됨
- base에서 source 까지의 changeset들과 base에서 target까지의 changeset들을 비교하여 병합을 수행
- FeatureA를 main branch에 merge 시킴
- 이를 위해서, commit 2과 commit 3의 changeset을 모두 포함하는 새로운 commit 4가 생성됨

### Merge confilicts

- Merge를 수행하는 과정에서 분기가 발생한 base를 기준으로, 병합하려는 두 branch에 동시에 존재하는 file의 특정 내용을 서로 다른 내용으로 수정한 경우 git에 의해 자동으로 merge가 되지 않음
- git 입장에서 소스코드의 의미를 알지 못하므로, 어느 것을 선택해야 할지 판단을 할 수 없음
- 변경사항 확인 시, 소스코드 파일 내의 line 단위로 비교가 되므로 서로 다른 line에서 발생한 변경사항은 conflict가 발생하지 않음
- 단, conflict가 발생하지 않기 위해서는 변경이 발생한 부분과 최소 한 줄 이상 떨어져야함.

### Fast-Forward Merges에서의 confilct

- 병합하려는 branch들 사이에 분기가 준재하지 않는 경우 사용된 -> 충돌이 발생할 수 없음

### Three-way Merges에서의 confilct

- 병합하려는 branch에 존재하는 changeset들이 특정 branch에만 존재하는 경우 -> conflict가 발생할 가능성 존재

- 해결방법
  - 가장 간단한 방법은 merge를 수행하는 사람이 직접 두 변경사항 중 적절한 것을 선택하고, 필요 시 추가적으로 수정하여 git에 반영하는 것
  - 두 branch의 변경사항을 직접 비교하여 editor를 이용해 수정
  - 이를 바탕으로, 서로 다른 변경사항을 적절히 합쳐서 conflict를 해결해야함.
  - 서로 다른 line이라고 하더라도, 변경이 발생한 라인 간에 한 줄 이상 차이가 있어야 conflict가 발생하지 않음

## Git을 이용한 협업

- Git repo를 local PC에 clone하면 remote repo를 그대로 복사해서 download하는 것과 동일함
- Local repo에서 clone을 수행한 remote repo를 origin이라는 이름으로 참조하게됨
- clone 직후에는 workspace가 clean 상태이며, main branch는 remote와 동일한 상태를 갖고 있음.
- git log 명령어를 통해 clone 할 당시 시점의 origin(==remote repo)의 main branch의 commit을 확인 가능
- origin/HEAD는 origin에 설정된 default branch를 가리킴
  - Local repo의 HEAD 포인터와 다른 역할
- local repo에서 생성한 branch를 remote repo에 upload하는 방법

```
$ git push <remote repo> <branch name>
$ git push origin featureA
```

- local repo는 origin/main과 origin/HEAD는 clone할 당시 시점의 값을 저장하고 있음.
- local repo에서 작업을 하는 동안 다른 개발자들이 main branch에 git push로 변경사항을 반영하면, remote의 실제 main branch가 가리키는 commit은 변경되지만, 사용자 A Local PC의 origin/main은 그대로 유지
- remote repo에 변경된 내용을 다시 local repo로 동기화 해야 origin/main이 현재 remote repo의 상태와 동일해짐

- Git commit history의 형태로 local repo와 remote repo 동기화 흐름 살펴보기

1. clone 직후
   -> remote에선 commit 1을 보고 있고 local에서도 commit 1을 보고 있다.

2) remote에 다른 개발자로부터 변경사항 반영된 이후
   -> remote는 새로운 commit 2를 보고 있고 local은 아직 반영되지 않아서 그대로 commit 1을 보고 있음.

3) git fetch 명령어로 remote에 변경된 내용을 local repo에 동기화한 후
   -> remote는 그대로 commit2를 보고 있고 local은 새로 반영된 commit2를 보고 있다.

4) git merge 명령어로 origin/main의 내용을 main에 반영한 이후
   -> remote는 commit2를 local은 merge가 되어 main과 origin/main 모두 commit2를 보고 있다.

## Rebase and Merge

- branch에서 작업을 진행하는 동안 해당 branch 생성 시점 이후로 main branch의 변경사항이 많이 발생했거나, bug 수정 등 중요한 내용이 main branch에 반영되었을 때 사용되는 merge 방식
- main branch에 새롭게 변경된 내용을 먼저 해당 branch로 반영한 후, 해당 branch의 작업이 완료되었을 때 다시 main branch로 merge할 수 있음
- rebase의 동작방식
  - featureA 기능을 개발하던 중, 기존 소스코드의 버그로 인해 개발 진행이 중단된 상황
  - 해당 bug에 대한 수정사항이 main branch에 반영
  - 그 내용을 featureA에 반영한 후 개발을 계속 진행
  - 명령어
  ```
  $ git rebase <target branch>
  ```
  - HEAD가 가리키는 branch와 target branch의 base를 기준으로 HEAD가 가리키는 branch에 생성된 commit들을 target branch가 가리키는 commit 뒤로 이동

## Squash and Merge

- 기능 개발을 위해 생성한 branch에서 작업을 하던 중, 중간중간 그때까지의 진행사항을 중간에 임시저장하는 경우가 있으며, 이때는 commit message를 크게 신경쓰지 않고 입력하게 됨
- 이러한 commit들은 그 자체로는 의미가 없으며, main branch에는 개별 commit 으로 반영되어서는 안됨
- merge를 수행할 때, 이런 임시 commit들을 제거하고 의미단위 commit message 구성을 위해 모든 commit 들을 하나의 commit으로 변환하여 반영함.
- squash의 동작 방식
  - 별도 생성한 branch에서 발생한 commit들을 모두 하나로 묶어서 별도의 commit을 생성하며, 합쳐지기 이전 commit들은 log에서 확인되지 않음
  - 명령어
    - main branch로 이동 후
    ```
    $ git merge --squash <source branch>
    ```
  - Three-way merge 방식과의 차이점
    - squash는 joint commit이 아닌, 완전히 별도의 commit을 생성하게 됨 -> squash는 새로운 commit을 생성해서 거기다 반영을 하고
      Three-way 는 중간 저장된 commit 위치의 뒤에 반영이 된다.
    - git log를 통해 확인 가능

## branch 삭제

- local branch 삭제

```
$ git branch -D [branch_name]
```

- remote branch 삭제
  - remote에 영향을 미치게 하기 위해서는 항상 동기화 방식을 사용해야함.
  - git push 명령어를 통해 local에서 삭제된 origin/feature branch가 remote에서도 삭제되도록 동기화

```
$ git push origin --delete [branch_name]
```

## 협업에서 실패 사례 및 해결방안

- local repo를 remote repo로 동기화
  - git push의 경우 branch 단위로 동기화가 진행
  - 이때, 기본적으로 fast-forward merge 방식으로 merge를 시도
  - 만약, merge가 되지 않으면 push는 실패하고, 사용자가 local repo에서 remote의 최신 상태를 업데이트 한 후 직접 merge를 수행하고, 다시 push 연산으로 동기화 해야함. -> 즉, fast-forward merge가 되도록 상태를 만들어주는 것
  - 성공적으로 진행되는 상황
    - clone 직후 혹은 remote와 동기화 완료 후
    - local에서 feature branch 생성 후, 작업 진행
    - local에서 main branch로 merge 수행
    - local repo의 main branch를 origin의 main branch로 동기화(local->remote)
  - 실패하는 상황 및 해결방안 (1)
    - clone 직후 혹은 remote와 동기화 완료 후
    - local에서 feature branch 생성 후, 작업 진행
    - local에서 main branch로 merge 수행
    - 다른 개발자가 작업 내용을 main branch에 반영
    - local repo의 main branch를 origin의 main branch로 동기화(local -> remote)
    - 동기화 (git push 명령어) 실패 후
    - origin/main과 main을 merge 수행
    - 다시 local repo의 main을 origin의 main과 동기화 수행
  - 실패하는 상황 및 해결방안 (2)
    - push로 동기화 실패 후 git fetch 실행
    - rebase를 통해 origin/main을 새로운 base로 지정
    - git push로 반영
- remote repo를 local repo로 동기화
  - git fetch의 경우 모든 branch에 대해서 새로운 내용을 update 수행

## 메인 기반 워크플로우(Main based workflow)와 풀 리퀘스트 기반 워크플로우(Pull Request based workflow)

- 메인 기반 워크플로우
  - 개발자가 새로운 기능을 개발할 때, branch를 생성해서 작업을 수행하고, 기능 개발이 완료된 후에 local repo의 main branch로 병합 후, 이를 remote repo와 동기화하는 방식(지금까지 배운 내용)
  - local repo와 remote repo 동기화 실패 시, merge 수행 후 다시 동기화해야 함
- 풀 리퀘스트 기반 워크플로우
  - GitHub을 통해 remote repo의 feature branch에서 직접 main branch로 병합을 수행
  - 병합을 위해서는 다른 사용자로부터 변경 내용에 대한 코드 리뷰를 받고, 지정된 사람들로부터 승인이 필요
  - remore repo에서 merge 이후에 remote repo의 main과 local repo의 main은 서로 다른 상태가 됨 -> 동기화가 필요
