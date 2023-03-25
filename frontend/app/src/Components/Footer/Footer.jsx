import './Footer.css';
import footerLogo from './footerLogo.png';

const Footer = () => {
  const contact = {
    moez: 'https://www.linkedin.com/in/abdul-moez-a00250190',
    talha: 'https://www.linkedin.com/in/talha-husnain-a93139206',
    abdullah: 'https://www.linkedin.com/in/abdullahehsan11',
    maha: 'https://www.linkedin.com/in/syeda-mah-noor-asad',
    rimsha: 'https://www.linkedin.com/in/rimsha-sarfaraz/',
    husnain: 'https://www.linkedin.com/in/joshua-harris-12b10b190/',
  };
  return (
    <div className='footer'>
      <div className='footer-inside'>
        <div className='footer-imcont'>
          <img src={footerLogo} alt='logo' className='footerLogo' />
        </div>

        <div className='footer-text'>
          <p className='footer-text-p'>
            Get in touch <br /> with our team
          </p>
        </div>

        <div className='footer-contrb'>
          <p className='footer-contrb-p'>Contributors</p>

          <div className='footer-contrb-names'>
            <div className='first1'>
              <a className='tag' href={contact.abdullah} target='blank'>
                Abdullah Ehsan
              </a>
              <br />
              <a className='tag' href={contact.moez} target='blank'>
                Abdul Moez
              </a>
            </div>
            <div className='sec2'>
              <a className='tag' href={contact.talha} target='blank'>
                Talha Husnain Bhatti
              </a>
              <br />
              <a className='tag' href={contact.maha} target='blank'>
                Syeda Mah Noor Asad
              </a>
            </div>
            <div className='third3'>
              <a className='tag' href={contact.rimsha} target='blank'>
                Rimsha Sarfaraz
              </a>
              <br />
              <a className='tag' href={contact.husnain} target='blank'>
                Hasnain Mubeen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
