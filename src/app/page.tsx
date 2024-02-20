'use client'

import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Model from "@/components/model";

export default function Preview() {
    return <Canvas className="bg-neutral-900">
        <gridHelper args={[50, 50, 'lime', 'grey']} position={[0, -3.62, 0]}/>
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
        <Model path={"/objects/cow.obj"}/>
        <OrbitControls/>
    </Canvas>
}
