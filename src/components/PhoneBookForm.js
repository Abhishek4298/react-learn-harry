import React, { useState } from 'react';
import InformationTable from './InformationTable';

const PhoneBookForm = () => {
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
    const [userFirstname, setUserFirstname] = useState("Coder");
    const [userLastname, setUserLastname] = useState("Byte");
    const [userPhone, setUserPhone] = useState(8885559999);

    const handleClick = (evt) => {
        evt.preventDefault();
        let userList = JSON.parse(localStorage.getItem('user'));
        if (!userList) {
            userList = []
        }
        const formData = {
            userFirstname,
            userLastname,
            userPhone
        }
        userList.push(formData)
        localStorage.setItem('user', JSON.stringify(userList));
    }
    return (<>
        <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                value={userFirstname}
                name='userFirstname'
                type='text'
                onChange={(e) => setUserFirstname(e.target.value)}

            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                type='text'
                value={userLastname}
                onChange={(e) => setUserLastname(e.target.value)}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
            />
            <br />
            <input
                onClick={handleClick}
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
        <InformationTable />
    </>);
}

export default PhoneBookForm;