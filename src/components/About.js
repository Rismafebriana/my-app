import React from 'react';

  function About() {
    return (
       <>

        <div className="bg-light" id="about">
          <div className="container-fluid py-5">
            <h1 className='display-5 fw-bold'>FIRST PARAGRAF</h1>
                <p className="mt-4 mb-5">Hacktiv8 adalah pendidikan yang berdiri pada tahun 2016.
                Hacktiv8 didirikan oleh Roland Ishak dan Riza Fahmi, yang didasari oleh
                keresahan mereka melihat banyaknya kejadian saling bajak talent-talent
                pengembang di antara perusahaan-perusahaan teknologi. Hacktiv8 berfokus pada pengembangan
                talent digital, mulai dari pemula hingga menjadi tenaga ahli lewat program bootcamp.
                Dengan begitu diharapkan semakin banyak anak-anak muda yang berkompeten untuk berkarir
                di dunia teknologi.</p>
                <button className='btn btn-primary btn-lg' type='button' data-bs-toogle='modal' data-bs-target='#exampleModal'>
                  Click here to show Modal box
                </button>
             </div>   
          </div>

          {/*modal*/}  
           <div className='modal fade 'id='exampleModal' tabindex='-1' aria-labellebdy='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-tittle' id='exampleModalLabel'>Modal tittle</h5>
                  <button type='button' className='btn-close' data-bs-dismis='modal' aria-label='Close'>
                  </button>
                </div>
                <div className='modal-body'>
                  This is my first modal box
                </div>
                <div className='modalfooter'>
                  <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                  <button type='button' className='btn btn-primary'>Save Changes</button>
                </div>
              </div>
            </div>
           </div>
   </>
    );
  }
  
  export default About;