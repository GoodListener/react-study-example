import { useState, useEffect } from 'react'
import api from './api/simpleApi.js';

function useUser(userId) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        api.getUser(userId).then(data => {
            setUser(data);
        })
    });

    return user;
}

export default {
    useUser
}