
const Avatar = ({ profilePicture }: { profilePicture: string }) => {
  return (
    <img
      src={profilePicture}
      alt="Profile"
      width={80}
      height={80}
      className="rounded-full aspect-square"
    />
  );
};

export default Avatar;
