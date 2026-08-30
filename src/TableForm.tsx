import { use, useState } from 'react'
import "./NewTableForm.css"

interface TableFormProps{
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
    addTable:React.Dispatch<React.SetStateAction<string[]>>,
    tables:string[]
}
function TableForm({setShowForm, addTable, tables}:TableFormProps){
    const [input,setInput] = useState("");
    const [showInvalidInput, changeShowInvalid] = useState(false);

    function saveTable(input:string)
    {
        if(input !== "")
        {
            const update = [...tables,input];
            addTable(update);
            localStorage.setItem("tables", JSON.stringify(update));
            setShowForm(false);
        }
        else{
            changeShowInvalid(true);
        }
        
    }

    return(
        <div className='outer'>
            <div className='createForm'>
                <form>
                    <label htmlFor='whichTable'>enter table name:</label>
                    <input id="whichTable" onChange={(event)=>setInput(event.target.value)}></input>
                </form>
                {showInvalidInput &&
                    <span>invalid input</span>

                }
                <button className='exitButton' onClick={function(){
                    saveTable(input)
                }}>save</button>
            </div>
        </div>
    );
}

export default TableForm