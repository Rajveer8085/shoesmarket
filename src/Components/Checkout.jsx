import React, { useRef, useState } from 'react'


const Checkout = ({setdone}) => {
  const name = useRef();
  const phone = useRef();
  const pincode  = useRef();
  const states = useRef();
  const city = useRef();
  const HouseName = useRef();
  const RoadName = useRef();

  // error shower element

  const [nameError,setNameError] = useState();
  const [phoneError,setPhoneError] = useState();
  const [pincodeError,setPincodeError] = useState();
  const [stateError,setStateError] = useState();
  const [cityError,setCityError] = useState();
  const [HouseError,setHouseError] = useState();
  const [RoadError,setRoadError] = useState();
  const OncheckoutHandler = (e) =>{

    e.preventDefault()
  // 

    // name ele values

    const nameEle = name.current.value;
    const phoneEle = phone.current.value;
    const  pincodeEle = pincode.current.value;
    const statesEle = states.current.value;
    const cityEle = city.current.value;
    const HouseEle = HouseName.current.value;
    const RoadNameEle = RoadName.current.value;

    if(nameEle.length === 0){
      setNameError("please fill full name")
      
    }

   if(!isNaN(nameEle)){
      setNameError("please enter a valid name")

    }
    if(phoneEle.length === 0){
      setPhoneError("please fill Mobile No")

    }
    if(pincodeEle.length === 0){
      setPincodeError("Enter Pincode")
    }
    if(cityEle.length === 0){
      setCityError("Enter City Name")
    }
    if(statesEle.length === 0){
      setStateError("Enter your State Name")
    }
    if(HouseEle.length === 0){
      setHouseError("Enter Area Name")
    }
    if(RoadNameEle.length === 0){
      setRoadError("Enter the Road name")
    }

    else{
      setdone(false)  
    }
  }
  return (
    <>
    <div className='checkout_parent'>
    <form className='checkout_form' >
        <h1>Checkout</h1>
        <input type="text" placeholder='Full Name (Required)*' ref={name} />
          <h6 className='text-danger text-start'>{nameError}</h6>
        <input type="text" placeholder='phone number (Required)*' ref={phone} />
        <h6 className='text-danger text-start'>{phoneError}</h6>
        <input type="number" placeholder='Pincode (Required)*' ref={pincode} />
        <h6 className='text-danger text-start'>{pincodeError}</h6>
        <div className="city">
         <div className='w-100'>
         <input type="text" placeholder='State(Required)*' className='me-3 w-100' ref={states} />
         <h6 className='text-danger text-start'>{stateError}</h6>
         </div>
         <div className='w-100'>
         <input type="text" placeholder='City(Required)*' className='ms-3 w-100' ref={city}/>
         <h6 className='text-danger text-start ms-4'>{cityError}</h6>
         </div>
        </div>
        <input type="text" placeholder='House No. Building Name(Required)*'ref={HouseName} />
        <h6 className='text-danger text-start'>{HouseError}</h6>
        <input type="text" placeholder='Road Name Area Colony(Required)*' ref={RoadName} />
        <h6 className='text-danger text-start'>{RoadError}</h6>
        <div className='place_order'>
        <button  className='place_Order_btn' onClick={OncheckoutHandler}>place order</button>
        </div>
    </form>
    </div>
    </>
  )
}

export default Checkout