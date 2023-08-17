import { DEVELOPMENT } from '@/src/redux/actions/types';
import cookie from 'cookie';


export default async (req, res) => {
    if(req.method === "POST") {
        res.setHeader("Set-Cookie", [
            cookie.serialize('access', '', {
                httpOnly: true,
                secure: DEVELOPMENT !== 'DEVELOPMENT',
                expires: new Date(0),
                sameSite: 'strict',
                path: '/'
            }),
            cookie.serialize('refresh', '', {
                httpOnly: true,
                secure: DEVELOPMENT !== 'DEVELOPMENT',
                expires: new Date(0),
                sameSite: 'strict',
                path: '/'
            })
        ])

        return res.status(200).json({success: "Successfuly logged out"});
    } else {
        res.setHeader("Allow", ["POST"])
        return res.status(405).json({"error": `Method ${req.method} not allowed.`})
    }
}