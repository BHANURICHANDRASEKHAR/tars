import React, { useState,useContext, useRef, useEffect } from 'react';
import Input from '../../../Login/Input';
import { Upload } from 'antd';
import UpdateNotes from './helper'
import { UserContext } from '../../../Context/Context';
export default function Body({ SelectedData, SetSelectedData,isEditable, setIsEditable }) {

    const [ImgData, setImgData] = useState('');
    const checkbox = useRef(null)
    useEffect(()=>{
        checkbox.current.checked=isEditable
    },[isEditable])
    function onHandler(event) {
        SetSelectedData({ ...SelectedData, [event.target.name]: event.target.value });
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='form-check mb-3 me-3'>
                    <input 
                        ref={checkbox}
                        type='checkbox' 
                        className='form-check-input' 
                        id='editCheckbox' 
                        onChange={() => setIsEditable(!isEditable)}
                    />
                    <label className='form-check-label' htmlFor='editCheckbox'>Enable Editing</label>
                </div>
                <label className='m-0'>Caption of the Note</label>
                <Input
                    placeholder='e.g Abc.com'
                    name='caption'
                    type='text'
                    handler={onHandler}
                    value={SelectedData.caption}
                    disabled={!isEditable}
                />
                <label className='mt-5 mb-2'>Transcript of the Note</label>
                <textarea
                    placeholder='Change Transcript'
                    name='description'
                    className='form-control'
                    onChange={onHandler}
                    value={SelectedData.description}
                    disabled={!isEditable}
                />
            </div>
            <ImageComponent data={SelectedData.Img || []} SetData={setImgData} />
            {isEditable&&<p className='mt-4 text-danger text-center'>You have to save Changes</p>}

            <hr/>
            <Footer ImgData={ImgData} SelectedData={SelectedData} isEditable={isEditable}/>   
        </div>
    );
}

const ImageComponent = ({ data, SetData }) => {
    const handleFileChange = (info) => {
        SetData(info.target.files[0])
       
    };

    return (
        <div className='row'>
            {data?.map((val, index) => (
                <div key={index} className='col-sm-3 mt-3'>
                    <img width={150} height={100} src={val} alt="Uploaded" />
                </div>
            ))}
            <div className='col-sm-3 mt-3 d-flex justify-content-start '>
            <div className='mt-2'>
            <label className='mb-2'>Upload a Image</label>
            <input type="file" className='w-100' onChange={(e)=>{handleFileChange(e)}} /></div>
       
            </div></div>
    );
};
const Footer=({ImgData,SelectedData,isEditable})=>{
    const [Loader,SetLoader] =useState(false);
      const { showModal, setShowModal,SelectedIndex,SetSelectedIndex,Results, SetResults } = useContext(UserContext);
    
    return(
        <div className='row'>
            <div className='col-md-12 text-center d-flex justify-content-end'>
                <button className='btn w-50 btn-primary' disabled={!isEditable} onClick={()=>{UpdateNotes(SetLoader,SetResults,Results,SelectedIndex,SelectedData,ImgData)}}>{Loader ? 'Saving...' : 'Save'}</button>
            </div>
        </div>
    )}
    