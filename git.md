## 12주차 과제
(pick-your-features)
$ git rebase feature-b
(pick-your-features)
$ git rebase feature-a
(pick-your-features)
$ git merge --squash feature-c
(pick-your-features)
$ notepad program.txt
(pick-your-features)
$ git add program.txt
(pick-your-features)
$ git commit -m "Implement Feature C"
(pick-your-features)
$ git verify

(pick-your-features)
$ git merge feature-a
(feature-b)
$ git rebase pick-your-features
(pick-your-features)
$ git merge feature-b
(pick-your-features)
$ git merge --squash feature-c
(pick-your-features)
$ notepad program.txt
(pick-your-features)
$ git add program.txt
(pick-your-features)
$ git commit -m "Implement Feature C"
(pick-your-features)
$ git verify

(pick-your-features)
$ git cherry-pick feature-a
(pick-your-features)
$ git cherry-pick feature-b
(pick-your-features)
$ git cherry-pick feature-c
충돌 해결
add, commit
git verify

