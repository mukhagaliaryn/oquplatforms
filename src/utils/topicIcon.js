import { 
    PiCodeLight, PiGameControllerLight, PiDeviceMobileSpeakerLight, PiLaptopLight,
    PiRobotLight,
    PiGooglePhotosLogoLight
} from "react-icons/pi";


export const setTopicIcon = (prop) => {
    switch (prop) {
        case "web-programming":
            return <PiCodeLight />
        case "game-development":
            return <PiGameControllerLight />
        case "mobile-app-development":
            return <PiDeviceMobileSpeakerLight />
        case "programmig-languages":
            return <PiLaptopLight />

        case "robotics":
            return <PiRobotLight />

        case "web-design":
            return <PiGooglePhotosLogoLight />
    }
}