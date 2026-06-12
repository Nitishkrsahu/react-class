import React from 'react'

export default function Table(props) {
    return (
        <table className={`table table-hover caption-top`}>
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                    {
                        props.field.map(field => <th key={field}>{field}</th>)
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((record, index) =>
                        <tr key={index}>
                            {
                                Object.keys(record).map(key => <td key={key}>
                                    {record[key]}
                                </td>)
                            }
                            <td>
                                <button className='btn btn-danger bi bi-trash-fill'></button>
                                <button className='btn btn-warning bi bi-pen-fill mx-2'></button>
                                <button className='btn btn-primary bi bi-eye-fill'></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
