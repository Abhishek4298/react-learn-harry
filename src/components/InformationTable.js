import React, { useState } from 'react';
const InformationTable = () => {
    let [tableConent, setTableConent] = useState(JSON.parse(localStorage.getItem('user')))
    const style = {
        table: {
            borderCollapse: 'collapse'
        },
        tableCell: {
            border: '1px solid gray',
            margin: 0,
            padding: '5px 10px',
            width: 'max-content',
            minWidth: '150px'
        },
        form: {
            container: {
                padding: '20px',
                border: '1px solid #F0F8FF',
                borderRadius: '15px',
                width: 'max-content',
                marginBottom: '40px'
            },
            inputs: {
                marginBottom: '5px'
            },
            submitBtn: {
                marginTop: '10px',
                padding: '10px 15px',
                border: 'none',
                backgroundColor: 'lightseagreen',
                fontSize: '14px',
                borderRadius: '5px'
            }
        }
    }


    return (<>
        <table style={style.table} className='informationTable'>
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableConent.map((el) => {
                        return <>
                            <tr>
                                <td>{el.userFirstname}</td>
                                <td>{el.userLastname}</td>
                                <td>{el.userPhone}</td>
                            </tr>

                        </>
                    })
                }

            </tbody>
        </table>
    </>);
}
export default InformationTable;