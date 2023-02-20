import React from 'react'
import { darjeelingData, localData, sikkimData } from '../assests/data';
import Cards from '../Component/Cards';

const datacard = (data, index) => {
    return (
        <Cards image={data.image} name={data.name} alt={data.alt} key={index} />
    );
}

const GalleryPage = () => {
    return (
        <div className='gallerypage container-fluid pt-2 pb-2'>
            <div className='pt-3 pb-3'>
                <h2 className='text-center'>- Sikkim Tour -</h2>
                <div className="row d-flex justify-content-center" id='sikkim'>
                    {sikkimData.map(datacard)}
                </div>
            </div>
            <div className='pt-3 pb-3'>
                <h2 className='text-center'>- Darjeeling Tour -</h2>
                <div className="row d-flex justify-content-center" id='darjeeling'>
                    {darjeelingData.map(datacard)}
                </div>
            </div>
            <div className='pt-3 pb-3'>
                <h2 className='text-center'>- Local & Others -</h2>
                <div className="row d-flex justify-content-center" id='darjeeling'>
                    {localData.map(datacard)}
                </div>
            </div>
        </div>
    )
}

export default GalleryPage