import { Header } from "../../components/sobre/Header"
import Team from "../../components/sobre/Team"
import { Valores } from "../../components/sobre/Valores"


function Sobre(){
    return(
        <>
    <div className="bg-gray-900">
        <Header/>
        <Valores />
 
    <div className="px-4 py-10 mx-auto md:px-24 lg:px-8 bg-emerald-700 w-full">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 text-white">
        <div className="text-center transform transition duration-300 hover:scale-110">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144K
          </h6>
          <p className="font-bold">Downloads</p>
        </div>
        <div className="text-center transform transition duration-300 hover:scale-110">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            32.1K
          </h6>
          <p className="font-bold">Users</p>
        </div>
        <div className="text-center transform transition duration-300 hover:scale-110">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            12.9K
          </h6>
          <p className="font-bold">Subscribers</p>
        </div>
        <div className="text-center transform transition duration-300 hover:scale-110">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            24.5K
          </h6>
          <p className="font-bold">Cookies</p>
        </div>
      </div>
    </div>

        <Team/>
        </div>
        </>

    )
}
export default Sobre