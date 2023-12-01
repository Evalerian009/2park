import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBolt, faBowlFood, faBuilding, faBuildingColumns, faCar, faHome, faHotel, faParking, faPlane, faUserFriends, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      icon: faPlane,
      name: 'Airport Parking'
    },
    {
      icon: faBowlFood,
      name: 'Restaurant'
    },
    {
      icon: faBuildingColumns,
      name: 'Goverment Parking'
    },
    {
      icon: faHome,
      name: 'Residential Parking'
    },
    {
      icon: faBuilding,
      name: 'Corporate Building'
    },
    {
      icon: faUserFriends,
      name: 'Visitor`s Parking'
    },
    {
      icon: faCar,
      name: 'Valet'
    },
    {
      icon: faParking,
      name: 'Public Parking'
    },
    {
      icon: faHotel,
      name: 'Hotels'
    },
    {
      icon: faUserTie,
      name: 'Employee Parking'
    },
    {
      icon: faBagShopping,
      name: 'Shopping Centers'
    },
    {
      icon: faBolt,
      name: 'EV Parking'
    }
  ]

  return (
    <div className="pb-10 lg:py-16 px-4 md:px-14 bg-sky-100 rounded-3xl">
      <div className="lg:mt-20 text-center mt-10">
        <h2 className="text-3xl font-semibold">The Parking Solution for You</h2>
        <p className="mt-3">We offer and cater for all your parking needs. Here are some service options.</p>
        <div className='w-full mt-14 px-4 flex flex-wrap gap-x-4 gap-y-10 justify-around md:justify-center'>
          {services.map(service => (
            <div className='w-1/3 md:w-1/4 lg:w-1/5 text-center flex flex-col gap-2 cursor-pointer' key={service.name}>
                <div className='bg-blue-50 p-7 w-fit mx-auto rounded-lg shadow-xl hover:shadow-blue-500 transition-all duration-500'>
                  <FontAwesomeIcon icon={service.icon} className='text-blue-500' fontSize={20} />
                </div>
                <p className='text-xs font-bold'>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services