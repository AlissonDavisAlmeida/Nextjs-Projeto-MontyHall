import Porta from "../components/Porta";
import Presente from "../components/Presente";

export default function Home() {
  return (
    <div className="area">
      {/* <Presente></Presente> */}
      <Porta></Porta>
      <Porta selecionada></Porta>
      <Porta></Porta>
      <Porta></Porta>
    </div>
  )
}
