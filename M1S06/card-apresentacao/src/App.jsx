import Card from "./Card";

const usuario = {
  nome: "Leonardo Arena",
  idade: 19,
  foto: "https://avatars.githubusercontent.com/u/102748192?v=4",
  github: "https://github.com/leoarena",
  linkedin: "https://www.linkedin.com/in/leoarena/",
};

export default function App() {
  return (
    <>
      <Card usuario={usuario} />
    </>
  );
}
