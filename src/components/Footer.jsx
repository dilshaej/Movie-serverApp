import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
     <div style={{height:'300px'}} className='container mt-5 w-100'>
<div className="footer-content d-flex justify-content-between">
    <div style={{width:'400px'}} className="media">
    <h5 className='d-flex'><Link to={'/'} style={{ textDecoration: 'none', fontWeight: 'bold',color:'red' }}>MegaList</Link></h5>
    <p style={{textAlign:'justify'}}>Email us: customer@megalist.com</p>
    <span>Code licensed MIT, docs CC BY 3.0 </span>
    <span>Currently v5.3.2.</span>
    </div>
    <div className="links d-flex flex-column">
<h5>Links</h5>
<Link to={'/'} style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-chevron-right"style={{ color: 'red' }}></i> Landing Page</Link>
<Link to={'/movie'} style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-chevron-right" style={{ color: 'red' }}></i> Movie</Link>

<Link to={'/series'} style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-chevron-right" style={{ color: 'red' }}></i> Series</Link>



    </div>
    <div className="guides d-flex flex-column">
<h5>About Company</h5>
<a href="https://react.dev/" traget='_blank' style={{textDecoration:'none', color:'white'}}> <i className="fa-solid fa-chevron-right" style={{ color: 'red' }}></i> Contact Us</a>
<a href="https://reactrouter.com/en/main" traget='_blank' style={{textDecoration:'none', color:'white'}}> <i className="fa-solid fa-chevron-right" style={{ color: 'red' }}></i> Privacy Policy</a>
<a href="https://react-bootstrap.github.io/" traget='_blank' style={{textDecoration:'none', color:'white'}}> <i className="fa-solid fa-chevron-right" style={{ color: 'red' }}></i> Terms of Use</a>

    </div>
    <div className="contact">
        <h5>Contact Us</h5>
        <div className="d-flex">
            <input type="text" className="form-control me1" placeholder='Email*' />
            <button className='btn btn-danger'>Subscribe</button>
        </div>
        <div className="icons d-flex justify-content-between mt-3">
            <p>Follow Us :</p>
<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-1x"></i></a>
<a href="https://react.dev/ " target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-1x"></i></a>
<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-1x"></i></a>
<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-1x"></i></a>
<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-github fa-1x"></i></a>
<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-phone"></i></a>

        </div>
    </div>
</div>
<p className='text-center mt-5'>Copyright &copy; 2024 Media Player. Built with React.</p>
    </div>
    </>
  )
}

export default Footer