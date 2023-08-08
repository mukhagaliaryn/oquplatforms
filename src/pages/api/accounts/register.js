import { BACKEND_URL } from "@/src/redux/actions/types";

export default async (req, res) => {
    if(req.method === "POST") {
        const { first_name, last_name, username, email, password, re_password } = req.body;
        const body = JSON.stringify({ first_name, last_name, username, email, password, re_password })
        
        try {
            const response = await fetch(`${BACKEND_URL}/auth/users/`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body
            });
            const data = await response.json();

            if(response.status === 200) {
                return res.status(200).json({ success: data.success })
            } else {
                return res.status(response.status).json({error: data.error })
            }

        } catch (err) {
            return res.status(500).json({error: "Something went wrong when registering for an account"})
        }
    } else {
        res.setHeader("Allow", ["POST"])
        return res.status(405).json({"error": `Method ${req.method} not allowed.`})
    }
}