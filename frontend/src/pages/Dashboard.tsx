import Logo from "../components/Logo"


const Dashboard = () => {
  return (
    <>
        <div className="bg-gradient-to-r from-[#06071b] to-[#050736] w-full h-screen p-3">
           <div className="flex w-full h-full">
            <div className="flex justify-center items-center">
                <Logo />
            </div>
           </div>
        </div>
    </>
  )
}

export default Dashboard
