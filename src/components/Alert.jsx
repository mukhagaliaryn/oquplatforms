import React from "react";
import { useSelector } from 'react-redux';


const Alert = () => {
    const alerts = useSelector(state => state.alert);

    return (
        <div className="relative w-full h-full z-50">
            {alerts !== null && alerts.length > 0 && alerts.map(alert => (
                <div key={alert.id} 
                    className={`fixed w-full transition-all bottom-0 right-0 p-2 text-center ${alert.alertType === "success" ? "text-white bg-green-500" : "text-white bg-red-500"}`}   
                >
                    <span className="font-medium text-sm">{ alert.msg }</span>
                </div>
            ))}
        </div>

    )
}

export default Alert;