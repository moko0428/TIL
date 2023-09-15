N, K = map(int, input().split())
coin_list = list()
for i in range(N):
  coin_list.append(int(input()))

count = 0
for i in reversed(range(N)):
  count += K // coin_list[i]
  K = K % coin_list[i]

print(count)
