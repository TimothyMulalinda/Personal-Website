import React from 'react'

export const Header2 = () => {
  return (
    <header>
    <div className="cover bg-light">
      <div className="container px-3">
        <div className="row">
          <div className="col-lg-6 p-2"><img className="img-fluid" src="images/illustrations/hello3.svg" alt="hello" /></div>
          <div className="col-lg-6">
            <div className="mt-5">
              <p className="lead text-uppercase mb-1">Hello!</p>
              <h1 className="intro-title marker" data-aos="fade-left" data-aos-delay={50}>I’m Mulalinda, Timothy Joy</h1>
              <p className="lead fw-normal mt-3" data-aos="fade-up" data-aos-delay={100}>Student Of University Klabat</p>
              <div className="social-nav" data-aos="fade-up" data-aos-delay={200}>
                <nav role="navigation">
                  <ul className="nav justify-content-left">
   
                    <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/" title="Facebook"><i className="fab fa-facebook" /><span className="menu-title sr-only">Facebook</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/?hl=id" title="Instagram"><i className="fab fa-instagram" /><span className="menu-title sr-only">Instagram</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://github.com/TimothyMulalinda" title="Github"><i className="fab fa-github" /><span className="menu-title sr-only">Github</span></a></li>
   
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="wave-bg" />
  </header>
  )
}
