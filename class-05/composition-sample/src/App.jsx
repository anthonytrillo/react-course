import ProfileCard from "./components/ProfileCard";

// Datos de ejemplo de un usuario
const user = {
  name: 'Anthony Trillo',
  bio: 'FullStack Developer',
  avatar: 'https://picsum.photos/200',
  socialLinks: [
    { url: 'https://www.linkedin.com/in/anthonytrillo/', label: 'LinkedIn' },
    { url: 'https://github.com/anthonytrillo', label: 'GitHub' },
  ],
};

function App() {

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <ProfileCard user={user} />
    </div>
  );
}

export default App
