n, k = map(int, input().split())
h, m, s = 0, 0, 0
cnt = 0
k = str(k)
for h in range(0, n+1):
  if h < 10:
    h = '0' + str(h)
  for m in range(0, 60):
    if m < 10:
      m = '0' + str(m)
    for s in range(0, 60):
      if s < 10:
        s = '0' + str(s)
      if k in str(h) or k in str(m) or k in str(s):
        cnt += 1

print(cnt)
