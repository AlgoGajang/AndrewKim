from copy import copy

def solution(numbers, target):
    arr = []
    count = 0
    for i in range(len(numbers)):
        arr_new = []
        # plus element and minus element for each case
        if i == 0:
            arr_new.append(numbers[i])
            arr_new.append(-numbers[i])
        else:
            for num in arr:
                arr_new.append(num + numbers[i])
                arr_new.append(num - numbers[i])
        arr = copy(arr_new)
    for num in arr_new:
        # searching for target number in final array and count + 1
        if num == target:
            count += 1
    return count