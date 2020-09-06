import React from 'react'
import useUser from './useUser'

export default function Profile({ userId }) {
    const user = useUser.useUser(userId);
    return (
        <div>
            {!user && (<p>사용자 정보 가져오는 중</p>)}
            {user && (
                <>
                    <p>{`name is ${user.userName}`}</p>
                    <p>{`id is ${user.userId}`}</p>
                </>
            )}            
        </div>
    )
}