import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
        <div className='border-t mx-4 pb-2 pt-2 flex mt-11'>
            <div className='left-content'>Made by Keshav Tomar</div>
            <div className='right-content'>
                <div className='github'>
                    <a>
                        <GitHubIcon/>
                    </a>
                </div>
                <div className='linkedin'>

                </div>
                <div className='insta'>
                    
                </div>
            </div>
        </div>
  )
}
