import weekAhead from "./weekAhead";

interface updateRowDatesTypes {
  whichTable: string;
}
function updateRowDates({ whichTable }: updateRowDatesTypes) {
  const saved = localStorage.getItem(whichTable);
  const table = saved ? JSON.parse(saved) : [];
  const today = new Date();
  let finalDay = new Date();
  finalDay.setDate(today.getDate() + 7);

  for (let i = 0; i < table.length; i++) {
    if (
      table[i].cells[table[i].cells.length - 1].date !==
      finalDay.toISOString().split("T")[0]
    ) {
      let newDate = new Date(table[i].cells[table[i].cells.length - 1].date);
      newDate.setDate(newDate.getDate() + 1);
      table[i].days.push({
        date: newDate.toISOString().split("T")[0],
        morning: "",
        night: "",
      });
    }
  }
}

export default updateRowDates;
