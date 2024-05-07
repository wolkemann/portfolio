export const Background = ({ ...props }) => {
  const { color } = props;
  return (
    <mesh {...props} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color={color ? color : "white"} />
    </mesh>
  );
};

export default Background;
