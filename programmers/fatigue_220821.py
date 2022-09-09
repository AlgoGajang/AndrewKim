# import copy module for using deepcopy method 
import copy

def solution(k, dungeons):
    dungeon_set_permu = []
    
    # determine all permutation list using Heap's algorithm
    def permutation(li, size):
        # case when it doesn't need to exchange element
        if size == 1:
            # deepcopy for reference type
            temp = copy.deepcopy(li)
            dungeon_set_permu.append(temp)
            return 0
        
        for i in range(size):
            # recurrsion
            permutation(li, size - 1)
            
            if size & 1:
                li[0], li[size - 1] = li[size - 1], li[0]
            else:
                li[i], li[size - 1] = li[size - 1], li[i]
            
    # determine permutation of touring all dungeons
    permutation(dungeons, len(dungeons))
    # list of the number of dungeons that player deal with each case
    num_of_dungeon = []
    for dungeon_set in dungeon_set_permu:
        count = 0
        k_temp = copy.copy(k)
        for dungeon in dungeon_set:
            # case when health is not enough to go dungeon
            if k_temp < dungeon[0]:
                num_of_dungeon.append(count)
                break
            else:
                k_temp -= dungeon[1]
                count += 1
            if k_temp > 0 and count == len(dungeon_set):
                return len(dungeon_set);
    return max(num_of_dungeon)