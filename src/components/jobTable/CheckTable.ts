import type { Row } from "../../types/Row"
import type { Cell } from "../../types/Cell"
import weekAhead from "../../utils/weekAhead"

interface checkTable{
    table:Row[]
    setTable: React.Dispatch<React.SetStateAction<Row[]>>
}

function CheckTable({table, setTable}:checkTable)
{
    const weekDates = weekAhead()
    if (table.length === 0)
    {
        let newTable = [];
        for(let i = 0; i< 15; i++)
        {
            let cells: Cell[] = []
            for(let j=0;j<7;j++)
            {
                cells.push({date:weekDates[j], morning:true, name:"",highlight:false})
                cells.push({date:weekDates[j], morning:false, name:"",highlight:false})
            }
            newTable.push({title:"", id:i,cells:cells}) 

        }
        setTable(newTable)
    }
    else{
        const update = table.map((row)=>{
        const newDate = new Date(row.cells[row.cells.length-1].date);
        const cells = [...row.cells];

        while(cells[cells.length-1].date !== weekDates[6])
        {
            newDate.setDate(newDate.getDate()+1);
            cells.push({date:newDate.toISOString().split("T")[0],morning:true,name:"",highlight:false})
            cells.push({date:newDate.toISOString().split("T")[0],morning:false,name:"", highlight:false})
        }

        return ({...row,cells})
    })
    setTable(update);
    }
    
}

export default CheckTable