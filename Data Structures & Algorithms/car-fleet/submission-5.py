from math import ceil

class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        n = len(position)

        cars = zip(position, speed)
        cars = sorted(cars, key=lambda c: c[0], reverse=True)
        
        fleets = []

        for pos, v in cars:
            time = (target - pos) / v

            # If it's the first car or the car ahead is slower
            if not fleets or fleets[-1] < time:
                fleets.append(time)
            else:
                # car joins the car fleet
                pass

        return len(fleets)
            