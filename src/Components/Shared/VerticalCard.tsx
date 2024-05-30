import React from 'react'
import {  Maincontainer } from '../StyledComponents'
interface VerticalCardProps {
    textColor?:string,
    SubtextColor?:string,
    subBgColor?:string,
    Day?:string,
    Date?:string,
    time1?:string,
    time2?:string,
    time3?:string,
    border?:string,
    backgroundColor?:string,

}
const VerticalCard:React.FC<VerticalCardProps> = ({textColor,SubtextColor,subBgColor,Day,Date,time1,time2,time3,border,backgroundColor}) => {
   
  return (
    <div >
       
            <div >
            <Maincontainer border={border} backgroundColor={backgroundColor}>
                <div className={ `flex flex-col items-center justify-center xl:w-20 xl:h-20 lg:w-16 h-16 w-14  rounded-lg`}
                style={{ backgroundColor: subBgColor ||  '#FEE7DE' }}>
                   <h1 className='font-mona   xl:text-base text-sm font-normal'style={{color:textColor || '#3d3d4e'}}>{Day}</h1>
                   <h1 className='font-mona  xl:text-2xl text-md font-semibold'style={{color:textColor || '#3d3d4e'}}>{Date}</h1>
                </div>
                <div className='flex flex-col gap-8 justify-center text-xs md:text-sm items-center mt-3' style={{color:SubtextColor || '#3d3d4e'}}>
                    <h1 className='text-center'>
                        {time1}
                    </h1>
                    <h1 className='text-center'>
                     {time2}  
                    </h1>
                    <h1 className='text-center'>
                    {time3}  
                    </h1>
                </div>
            </Maincontainer>
        </div>
        
    </div>
  )
}

export default VerticalCard