const AvatarInfor = ({photosProfile, nameProfile, timePost}) => {

    // Define a default profile picture
  const defaultPic = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"; 

  return (
    <div className="avatar h-16 w-52 flex gap-2">
      <div className="ring-primary ring-offset-base-100 h-14 w-14 rounded-full ring ring-offset-2">
        <img src={photosProfile||defaultPic}/>
      </div>
      <div className="text-wrap w-28">
        <h3 className="px-1 text-base font-bold">{nameProfile}</h3>
        <p className="px-1 text-sm font-normal ">{timePost}</p>
      </div>
    </div>
  );
};
export default AvatarInfor;
