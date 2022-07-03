def solution(progresses, speeds):
    answer = []
    while len(progresses) != 0:
        count = 0
        while progresses[0] < 100:
            for i in range(len(progresses)):
                progresses[i] += speeds[i]
                if progresses[i] > 100:
                    progresses[i] = 100
        try:
            while progresses[0] == 100:
                progresses.pop(0)
                speeds.pop(0)
                count += 1
            answer.append(count)
        except IndexError:
            answer.append(count)
            return answer