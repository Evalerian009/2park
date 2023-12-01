import HeroBg from '../assets/herobg.jpg'
import CarPos from '../assets/car-location.webp'
import PhoneApp from '../assets/phone-car.jpg'

const Services2 = () => {
  return (
    <div className="mt-10 py-10 px-4 md:px-14 flex flex-col gap-14">
      <div className="flex flex-col lg:flex-row gap-7 items-center">    
        <div className="w-full lg:w-1/2">
          <img src={HeroBg} alt='map' className='max-w-[350px]' />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className='font-bold uppercase text-blue-600'>Market place</h3>
          <h4 className='capitalize text-3xl md:text-4xl font-bold mt-3'>Bring the economy to parking spots</h4>
          <p className='font-semibold  mt-4'>Monetize your extra assets & boost revenue. Earn extra income by listing your parking place while you`re not using it. Want to avoid parking hassles? Book one of our exclusive parking places in advance. Just arrive and park!</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 items-center">
        <div className="w-full lg:hidden lg:w-1/2">
            <img src={CarPos} alt='map' className='max-w-[350px]' />

        </div>  
        <div className="w-full lg:w-1/2">
          <h3 className='font-bold uppercase text-blue-600'>Visitor`s parking</h3>
          <h4 className='capitalize text-3xl md:text-4xl font-bold mt-3'>The world`s first Hardware & software solution</h4>
          <p className='font-semibold  mt-4'>Eliminates the hassle of handling visitors and simplifies their stay. You may now reserve parking places for your guests, so they`ll have a spot when they come. 2park also increases residents` and guests` security.</p>
        </div>
        <div className="hidden w-full lg:block lg:w-1/2">
          <img src={CarPos} alt='map' className='max-w-[350px]' />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 items-center">    
      <div className="w-full lg:w-1/2">
        <img src={PhoneApp} alt='map' className='max-w-[350px]' />
      </div>
      <div className="w-full lg:w-1/2">
        <h3 className='font-bold uppercase text-blue-600'>Mobile App</h3>
        <h4 className='capitalize text-3xl md:text-4xl font-bold mt-3'>Complete control through the 2park App</h4>
        <p className='font-semibold  mt-4'>Residents and allowed guests can access parking places using the 2park app on their mobile devices. Property owners, managers and condo boards may increase security and control, adding a much-valued feature. 2park app asle adds another layer of securiyt by removing the hassle of handling visitors.</p>
      </div>
      </div>
    </div>
  )
}

export default Services2

{/* 
        
          
        
       */}