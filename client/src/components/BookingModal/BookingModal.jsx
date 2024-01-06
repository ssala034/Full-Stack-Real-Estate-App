import React, { useContext, useState } from 'react'
import { Modal, Button} from '@mantine/core'
import {DatePicker} from '@mantine/dates'
import { useMutation } from 'react-query'
import UserDetailContext from "../../context/UserDetailContext.js"
import { bookVisit } from '../../utils/api.js'
import { toast } from 'react-toastify'
import dayjs from "dayjs"
import './BookingModal.css'

const BookingModal = ({opened, setOpened, email, propertyId}) => {

    const [value, setValue] = useState(null);
    const {userDetails, setUserDetails} = useContext(UserDetailContext);

    const handleBookingSuccess = () => {
        toast.success("You have booked your visit",{
            position: "bottom-right",
        });
        setUserDetails((prev) => ({
            ...prev,
            bookings:[
                ...prev.bookings,
                {
                    id: propertyId, 
                    date: dayjs(value).format('DD/MM/YYYY'),
                },
            ],
        }));
        
    };
    
    const{mutate, isLoading} = useMutation({
        mutationFn: ()=> bookVisit(value, propertyId, email),
        onSuccess: ()=> handleBookingSuccess(),
        onError: ({response}) => toast.error(response.data.message),
        onSettled: ()=> setOpened(false)
    })

  return (
    
    <Modal 
    className=' title-container'
    opened= {opened}
    onClose={ () => setOpened(false)} style={{gap: "1rem"}}
    title= ""
    centered //try positon
    >
        <div className="flexColCenter date-container" style={{gap: "1rem",}}>
            <DatePicker className="datebutton" value ={value} onChange={setValue} minDate={new Date()} 
            style={{inputWrapper: { border: '2px solid red' },
            dropdown: { backgroundColor: 'blue' },
            day: { color: 'blue' }}}
            />
            <Button disabled={!value || isLoading} onClick={() => mutate()}>
                Book Visit
            </Button>
        </div>
        
    </Modal>
    
  )
}

export default BookingModal
