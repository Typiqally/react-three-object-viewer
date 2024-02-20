import {useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/addons/loaders/OBJLoader.js";

export default function Model(props: { path: string }) {
    const obj = useLoader(OBJLoader, props.path)
    return <primitive object={obj} />
}
