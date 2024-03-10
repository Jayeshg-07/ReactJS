import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [userName, setUserName] = useState('');
    const [userList, setUserList] = useState([]);

    const handleAddUser = () => {
        setUserList([...userList, userName]);
        setUserName('');
    };

    return (
        <div>
            <h1>Hello World</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter user name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={handleAddUser}>Add</button>
            </div>
            <div>
                <h2>User List</h2>
                <ul>
                    {userList.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
