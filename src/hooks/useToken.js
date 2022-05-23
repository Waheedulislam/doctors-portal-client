import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log('user inside useToken', user);
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside your token', data);
                    const AccessToken = data.token;
                    localStorage.setItem('accessToken', AccessToken);
                    setToken(AccessToken)
                })
        }

    }, [user]);
    return [token, setToken];
}
export default useToken;