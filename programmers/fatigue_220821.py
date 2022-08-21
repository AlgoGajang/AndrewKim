import copy

def solution(k, dungeons):
    a = [1, 2, 3]
    li = []
    
    b = copy.deepcopy(a)
    
    def permu(a, size):
        if size == 1:
            b = copy.deepcopy(a)
            li.append(b)
            # print(a)
            return 0
            
        for i in range(size):
            permu(a, size - 1)
            
            if size & 1:
                a[0], a[size - 1] = a[size - 1], a[0]
            else:
                a[i], a[size - 1] = a[size - 1], a[i]
            
    
    permu(dungeons, len(dungeons))
    a = []
    for dungeonSet in li:
        count = 0
        k_temp = copy.copy(k)
        for dungeon in dungeonSet:
            if k_temp < dungeon[0]:
                a.append(count)
                break
            else:
                k_temp -= dungeon[1]
                count += 1
            if k_temp > 0 and count == len(dungeonSet):
                a.append(count)    
    return max(a)