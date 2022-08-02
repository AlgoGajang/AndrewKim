def solution(array, commands):
    answer = []
    for arr in commands:
        i = arr[0] # start index
        j = arr[1] # end index
        k = arr[2] # kth number
        # sort selected array and pick kth number 
        ans = sorted(array[i - 1 : j])[k - 1]
        answer.append(ans)
    return answer