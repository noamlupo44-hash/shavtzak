function weekAhead()
{
    const today = new Date();
    let days = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        days.push(date.toISOString().split("T")[0]);
    }
  return days
}

export default weekAhead