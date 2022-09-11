import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <div className='home'>
      <div className="chatContainer">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}
