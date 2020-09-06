const userList = [
    {
        userId: 'testUser01',
        userName: '테스트유저01'
    }, {
        userId: 'testUser02',
        userName: '테스트유저02'
    }
]

function getUser(userId) {
    return new Promise((res, rej) => {
        try {
            setTimeout(() => {
                const foundUser = userList.find(user => user.userId === userId);
                res(foundUser);
            }, 3000);
        } catch (e) {
            rej(e);
        }
    });
}

export default {
    getUser
}