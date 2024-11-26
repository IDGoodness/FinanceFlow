import { useEffect } from 'react'
import { buttonData } from "../../buttonData"
import computerImage from "../assets/Apple Computers.png"
// import bigComputerImage from "../assets/Body Details.png"
import Button from "../Components/Button"
import { FcNeutralTrading } from "react-icons/fc";


const Home = () => {

  useEffect(() => {
    const btn2 = document.getElementById("btn2");
    if (btn2) {
      btn2.style.backgroundColor = 'white';
    }
    // console.log(btn2);
  }, []);

  return (
    <div className='bg-gray-900 text-white' >
      <div className="block lg:flex bg-gray-900 lg:p-10 ">
        <div className="">
          <p className="p-10 font-sans text-[38px] lg:text-[66px] text-white font-bold " >
            Buy, trade, and hold 350+ cryptocurrencies
          </p>

          <p className="p-10 text-white -mt-20 text-[18px] font-sans font-normal " >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
          </p>

          <div className="p-10 flex flex-col lg:flex-row " >
            <span className="" >
              {buttonData.slice(0, 1).map((buttonData, idx) => (
                <Button key={idx} name={buttonData.name} />
              ) )}
            </span>

            <span className=" mt-5 lg:mt-0 lg:ml-5 " >
              {buttonData.slice(1).map((buttonData, idx) => (
                <Button key={idx} name={buttonData.name} id={`btn2-${idx}`} style={{ backgroundColor: 'white' }} />
              ) )}
            </span>
          </div>
          
        </div>
        <div className="p-10">
          <img src={computerImage} alt="Apple Computer" className="lg:w-[1200px] lg:h-auto " />
        </div>
      </div>

      <div className='text-center font-sans font-normal text-[18px] text-white ' >
        <p>Finance flow has been featured on</p>
      </div>

      <div className='py-10 px-16 grid grid-cols-2 lg:flex lg:flex-row lg:gap-44 text-center font-bold ' >
        <p className='flex items-center pt-5 lg:pt-0' > <FcNeutralTrading className='w-8 h-8 mr-1' /> Company</p>
        <p className='flex items-center pt-5 lg:pt-0' > <FcNeutralTrading className='w-8 h-8 mr-1' /> Company</p>
        <p className='flex items-center pt-5 lg:pt-0' > <FcNeutralTrading className='w-8 h-8 mr-1' /> Company</p>
        <p className='flex items-center pt-5 lg:pt-0' > <FcNeutralTrading className='w-8 h-8 mr-1' /> Company</p>
        <p className='flex col-span-2 items-center pt-5 lg:pt-0 mx-auto lg:mx-0 '><FcNeutralTrading className='w-8 h-8 mr-1' /> Company</p>
      </div>
    </div>
  )
}

export default Home