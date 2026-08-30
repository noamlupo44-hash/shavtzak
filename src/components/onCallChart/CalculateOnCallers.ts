import type { onCaller } from "../../types/OnCaller";
interface calculateOnCallers{
    onCallers:onCaller[];
}
function CalculateOnCallers({onCallers}:calculateOnCallers)
{
  const week: (onCaller | null)[] = Array(7).fill(null);
  const currentPoints = new Map<string, number>();
  const assignments = new Map<string, number>();

  for (const caller of onCallers) {
    currentPoints.set(caller.name, caller.points);
    assignments.set(caller.name, 0);
  }

  const available = [...onCallers];

  function assign(day: number, caller: onCaller) {
    week[day] = caller;

    const count = assignments.get(caller.name) ?? 0;

    assignments.set(caller.name, count + 1);

    currentPoints.set(
      caller.name,
      (currentPoints.get(caller.name) ?? caller.points) + 1
    );
  }

  function randomChoice<T>(array: T[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function randomEmptyWeekday() {
    const days = [0, 1, 2, 3].filter(
      (day) => week[day] === null
    );

    return randomChoice(days);
  }

  const specialDays = [5, 4, 6];

  for (const day of specialDays) {
    const candidates = available.filter(
      (caller) => !caller.far
    );

    if (candidates.length === 0) {
      continue;
    }

    const lowestPoints = Math.min(
      ...candidates.map(
        (caller) => currentPoints.get(caller.name)!
      )
    );

    const lowestCandidates = candidates.filter(
      (caller) =>
        currentPoints.get(caller.name) === lowestPoints
    );

    const selected = randomChoice(lowestCandidates);

    assign(day, selected);

    const index = available.indexOf(selected);
    available.splice(index, 1);
  }


  while (
    [0, 1, 2, 3].some((day) => week[day] === null)
  ) {
    const candidates = available.filter((caller) => {
      const count =
        assignments.get(caller.name) ?? 0;

      if (caller.far) {
        return count < 2;
      }

      return count === 0;
    });

    if (candidates.length === 0) {
      break;
    }

    const lowestPoints = Math.min(
      ...candidates.map(
        (caller) => currentPoints.get(caller.name)!
      )
    );

    const lowestCandidates = candidates.filter(
      (caller) =>
        currentPoints.get(caller.name) === lowestPoints
    );

    const selected = randomChoice(lowestCandidates);

    const day = randomEmptyWeekday();

    assign(day, selected);

    const count =
      assignments.get(selected.name) ?? 0;

    if (!selected.far) {
      const index = available.indexOf(selected);
      available.splice(index, 1);
    }

    if (selected.far && count >= 2) {
      const index = available.indexOf(selected);
      available.splice(index, 1);
    }
  }

  return week;
}



export default CalculateOnCallers