### 1. React.memo 
- 해당 속성이 변경될 때만 렌더링

### 2. custom hook
- 해당 훅을

### 3. useEffect
- 컴포넌트의 부수 효과 처리
- API 등 사용

### 4. 실 사용
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