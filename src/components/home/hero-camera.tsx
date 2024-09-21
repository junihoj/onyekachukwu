import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Group } from 'three';
type Props = {
    isMobile: boolean,
    children: React.ReactNode
}
const HeroCamera = ({ isMobile, children }: Props) => {
    const group = useRef<Group>(null);

    useFrame((state, delta) => {
        if (group?.current) {
            easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

            if (!isMobile) {
                easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
            }
        }
    });

    return <group ref={group}>{children}</group>;
};

export default HeroCamera;
