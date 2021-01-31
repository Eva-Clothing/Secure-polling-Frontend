import React from 'react'
import './DataTable'

function Table({pollData}) {
    return (
        <div className="table">
            {pollData.map((data)=>(
                <tr>
                    <td>{data.casted_at}</td>
                    <td>
                        <strong>
                            {data.name}
                        </strong>
                    </td>
                    <td className={`choice ${data.choice && "choice-true"}`} >{data.choice.toString()}</td>
                </tr>
            ))}
        </div>
    )
}

export default Table
