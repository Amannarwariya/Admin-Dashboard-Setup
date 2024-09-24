import React from 'react'

function Home() {
  return (
    <>

      <div className="wrapper">
        {/* <!-- Content Wrapper. Contains page content --> */}
        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">DashBoard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.content-header --> */}
          {/* <!-- Main content --> */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <h1>Home</h1>
              </div>
              {/* <!-- /.row --> */}
            </div>
          </div>
          {/* <!-- /.content --> */}
        </div>
        {/* <!-- /.content-wrapper --> */}
      </div>
    </>
  )
}

export default Home