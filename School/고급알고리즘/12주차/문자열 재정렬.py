data = input()
result = []
value = 0

for one in data:
	if one.isalpha():
		result.append(one)
	else:
		value += int(one)
result.sort()

if value != 0:
	result.append(str(value))

print(''.join(result))
