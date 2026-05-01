from math import ceil

class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        n = len(position)

        cars = zip(position, speed)
        cars = sorted(cars, key=lambda c: c[0], reverse=True)

        print(f'{cars=}')
        etas = list(map(lambda pos, v: ceil((target - pos) / v), position, speed))
        print(f'{etas=}')
        
        fleets = []

        for s, v in cars:
            t = (target - s) / v

            # If it's the first car
            # or the car ahead is slower
            if not fleets or fleets[-1] < t:
                if fleets:
                    print(f'{t=}, {fleets[-1]=}')
                fleets.append(t)
            else:
                pass
                # car joins the car fleet

        print(f'{fleets=}')

        return len(fleets)
            