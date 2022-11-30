import React from 'react'

export const About = () => {
  return (
    <div className="section pt-4 px-3 px-lg-4" id="about">
    <div className="container-narrow">
      <div className="row">
        <div className="col-md-6">
          <h2 className="h4 my-2">Hello! I’m Timothy Joy Mulalinda.</h2>
          <p>Saya adalah seorang anak sulung dari sebuah keluarga kecil yang sekarang berkuliah di Universitas Klabat dengan mengambil Fakultas Ilmu Komputer Jurusan Informatika semester 5.</p>
          <div className="row mt-3">
            <div className="col-sm-2">
              <div className="pb-1">Age:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">19</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Birthday:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">30 November 2003</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Email:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">t.mulalinda301103@gmail.com</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Phone:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">+62-88247203352</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Address:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">Sulawesi Utara, Manado</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Staus:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">Student</div>
            </div>
          </div>
        </div>
        <div className="col-md-5 offset-md-1" data-aos="fade-left" data-aos-delay={100}><img className="avatar img-fluid mt-2" src="images/avatar.png" width={350} height={400} alt="Walter Patterson" /></div>
      </div>
    </div>
  </div>
  )
}
