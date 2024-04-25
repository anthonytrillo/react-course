import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import SocialLinks from "./SocialLinks";


const ProfileCard = ({ user }) => {
  const { name, bio, avatar, socialLinks } = user;

  return (
    <div className="profile-card">
      <Avatar src={avatar} alt={name} />
      <UserInfo name={name} bio={bio} />
      <SocialLinks links={socialLinks} />
    </div>
  );
};

export default ProfileCard;