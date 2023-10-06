N = int(input())
plan = input().split()
x, y = 1, 1

type = ['L', 'R', 'U', 'D']

for i in range(len(plan)):
  if plan[i] == type[0]:
    if y - 1 == 0:
      continue
    else:
      y = y - 1
  if plan[i] == type[1]:
    if y + 1 == N + 1:
      continue
    else:
      y = y + 1
  if plan[i] == type[2]:
    if x - 1 == 0:
      continue
    else:
      x = x + 1
  if plan[i] == type[3]:
    if x + 1 == N + 1:
      continue
    else:
      x = x + 1
      
print(x, y)
