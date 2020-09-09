import React, { useState } from 'react'
const UserContext = React.createContext({ username: '' });

export default function App() {
    const [user, setUser] = useState({ username: 'ekim' });
    return (
        <div>
            <UserContext.Provider value={user}>
                <div>상단메뉴</div>
                <Profile />
                <div>하단메뉴</div>
            </UserContext.Provider>
        </div>
    )
}

function Profile() {
    return(
        <div>
            <Greeting />
        </div>
    )
}

function Greeting() {
    return (
        <UserContext.Consumer>
            {user => (
                <>
                    <p>인사 : </p>
                    <p>{`${user.username}님 하이요.`}</p>
                </>
            )}
        </UserContext.Consumer>
    )
}