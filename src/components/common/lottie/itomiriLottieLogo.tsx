import { Player } from "@lottiefiles/react-lottie-player";
import itomiriLogo from '../../../../public/itomiri_logo.json'

export default function ItomiriLogo() {
  return <Player
    autoplay
    loop
    src={itomiriLogo}
  />
}