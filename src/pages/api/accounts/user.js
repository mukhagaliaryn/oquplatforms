import { BACKEND_URL } from '@/src/redux/actions/types';
import cookie from 'cookie';


const user = async (req, res) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;

        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }

        try {
            const response = await fetch(`${BACKEND_URL}/auth/users/me/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `JWT ${access}`
                }
            });
            const data = await response.json();

            if (response.status === 200) {
                return res.status(200).json({
                    user: data
                });
            } else {
                return res.status(response.status).json({
                    error: data.error
                });
            }
        } catch(err) {
            return res.status(500).json({
                error: 'Something went wrong when retrieving user'
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            error: `Method ${req.method} not allowed`
        });
    }
};


export default user;