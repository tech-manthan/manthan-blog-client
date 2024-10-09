type AvatarProps = {
  imageUrl: string;
};

const Avatar = ({ imageUrl }: AvatarProps) => {
  return (
    <div className="w-12 h-12 flex justify-center items-center border border-b-dark-grey hover:border-twitter rounded-3xl">
      <img src={imageUrl} className="w-full h-full rounded-full" />
    </div>
  );
};

export default Avatar;
