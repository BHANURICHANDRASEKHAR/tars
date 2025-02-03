import React,{useEffect} from 'react'
import HomePage from './Components/Home/Main'
import Modal from './Components/Login/Model'
import { Toaster } from 'react-hot-toast'
import CardModal from './Components/RightComponent/Results/ModalComponent/Main'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <React.Fragment><HomePage/>
   <Modal/>
   <CardModal/>
   <Toaster/>
    </React.Fragment>
  )
}
export const ApiLink='http://localhost:3000'