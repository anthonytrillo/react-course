const SocialLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;