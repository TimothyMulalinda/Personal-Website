import React from 'react'

export const Footer = () => {
  return (
    <footer className="pt-4 pb-4 text-center bg-light">
        <div className="container">
          <div className="my-3">
            <div className="h4">MULALINDA</div>
            <p>Human Stranger</p>
            <div className="social-nav">
              <nav role="navigation">
                <ul className="nav justify-content-center">
                  <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/" title="Facebook"><i className="fab fa-facebook" /><span className="menu-title sr-only">Facebook</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/?hl=id" title="Instagram"><i className="fab fa-instagram" /><span className="menu-title sr-only">Instagram</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://github.com/TimothyMulalinda" title="Github"><i className="fab fa-github" /><span className="menu-title sr-only">Github</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
  )
}
