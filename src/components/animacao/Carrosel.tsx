import { AndroidLogoIcon, AppleLogoIcon, WindowsLogoIcon } from '@phosphor-icons/react'
import './animacao.css'
export default function Carrosel(){
return(
<div className="carousel">
  <div className="track">
  <div className="group-1">

    <div className="card">
        <AppleLogoIcon size={40} weight="fill" />
      </div>
      <div className="card">
        <AndroidLogoIcon size={40} weight="fill" />
      </div>
      <div className="card">
        <WindowsLogoIcon size={40} weight="fill" />
      </div>
      <div className="card">
       <img src="/dell.png" alt="" className='w-10' />
      </div>
      <div className="card">
        <img src="/lenovo.png" alt="" className='w-20' />
      </div>
      <div className="card">
        <img src="/samsung.png" alt="" className='w-10' />
      </div>
      <div className="card">
        <img src="/vaio.png" alt="" className='w-20' />
      </div>
      <div className="card">
        <img src="/lg.png" alt="" className='w-15' />
      </div>
      <div className="card">
        <img src="/sony.png" alt="" className='w-10' />
      </div>
      <div className="card">
        <img src="/motorola.png" alt="" className='w-20' />
      </div>
      <div className="card">
        <img src="/asus.png" alt="" className='w-10' />
      </div>
      <div className="card">
        <img src="/acer.png" alt="" className='w-15' />
      </div>
  </div>

  <div className="group-1">
    <div className="card">
        <AppleLogoIcon size={40} weight="fill" />
      </div>
      <div className="card">
        <AndroidLogoIcon size={40} weight="fill" />
      </div>
      <div className="card">
        <WindowsLogoIcon size={40} weight="fill" />
      </div>
      <div className="card">
       <img src="/dell.png" alt="" className='w-10' />
      </div>
      <div className="card">
        <img src="/lenovo.png" alt="" className='w-20' />
      </div>
      <div className="card">
        <img src="/samsung.png" alt="" className='w-10' />
      </div>
      <div className="card">
        <img src="/vaio.png" alt="" className='w-20' />
      </div>
      <div className="card">
        <img src="/lg.png" alt="" className='w-15' />
      </div>
      <div className="card">
        <img src="/sony.png" alt="" className='w-10' />
      </div>
      <div className="card">
        <img src="/motorola.png" alt="" className='w-20' />
      </div>
      <div className="card">
        <img src="/asus.png" alt="" className='w-10' />
      </div>
      <div className="card">
        <img src="/acer.png" alt="" className='w-15' />
      </div>

  </div> </div>
</div>
)
}