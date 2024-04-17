import { useProgress } from "@react-three/drei"

export default function Loader() {
    const {progress }= useProgress();

    return <div>{progress}</div>
}