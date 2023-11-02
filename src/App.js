import './App.css';

function App() {
  return (
    <div id='bg-color' style={{height:"100vh",padding:"4%"}}>
      <div id="main-cointainer" className='row'>
        <div className="col-lg-3 "></div>
        <div className='col-lg-6 text-center mt-3'>
          <div style={{background:"rgba(191, 177, 177, 0.5),",borderRadius:"20px"}} className='p-5'>
            <div>
              <h5 className='fw-bold'>Question 6/10</h5>
              <h5 className='mt-3 fw-bold'>After losing a key player in the first game, which team went onto the semi-finals of Euro 2020?</h5>
            </div>
            <div>
              <div style={{borderRadius:"14px"}} className='w-100 py-3 fw-bold d-flex align-items-left utharam'>
                <div className='d-flex align-items-center ms-3 mt-1'>
                  <h5 className='px-2 py-1 Asss rounded-circle fw-bold me-3'>A</h5>
                  <h5>Spain</h5>
                </div>
              </div>
              <div style={{borderRadius:"14px"}} className='w-100 py-3 fw-bold d-flex align-items-left utharam mt-3'>
                <div className='d-flex align-items-center ms-3 mt-1'>
                  <h5 className='px-2 py-1 Asss rounded-circle fw-bold me-3'>A</h5>
                  <h5>Denmark</h5>
                </div>
              </div>
              <div style={{borderRadius:"14px"}} className='w-100 py-3 fw-bold d-flex align-items-left utharam mt-3'>
                <div className='d-flex align-items-center ms-3 mt-1'>
                  <h5 className='px-2 py-1 Asss rounded-circle fw-bold me-3'>A</h5>
                  <h5>Wales</h5>
                </div>
              </div>
              <div style={{borderRadius:"14px"}} className='w-100 py-3 fw-bold d-flex align-items-left utharam mt-3'>
                <div className='d-flex align-items-center ms-3 mt-1'>
                  <h5 className='px-2 py-1 Asss rounded-circle fw-bold me-3'>A</h5>
                  <h5>England</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3'></div>
      </div>
    </div>
  );
}

export default App;
