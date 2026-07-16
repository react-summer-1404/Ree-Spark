import React from 'react'
import FooterLogo from './components/FooterLogo'
import FooterLink from './components/FooterLink'
import FooterIcons from './components/FooterIcons'
const Footer = () => {

  return (
    <>
    <div className='border-t-2 h-full flex justify-center sm:justify-between mr-4 ml-4  sm:flex-nowrap flex-wrap items-end gap-5'>
        {/* cyberspace// */}
        <FooterIcons/>
      {/* //{} */}

      {/* FooterLink */}
      <FooterLink/>
      {/* FooterLogo */}
      <FooterLogo/>
    </div>
    </>
  )
}

export default Footer;
