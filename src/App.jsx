import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './component/Button'
const ParentComponent = () => {
  return (
    
    <div className='Container'>
      <div className="btn-left">
      <Button text='Button 1'  />
      <Button text='Button 2'/>
      <Button text='Button 3' />
      <Button text='Button 4'/>
      </div>
    </div>
    
  );
};

export default ParentComponent;
