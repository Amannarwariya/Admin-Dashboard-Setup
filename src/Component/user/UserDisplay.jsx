import React from 'react'
import TableData from './TableData'

function UserDisplay() {
    return (
        <>
            <div class="wrapper">
                {/* <!-- Content Wrapper. Contains page content --> */}
                <div class="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">User Display</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">Display</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.content-header --> */}

                    {/* <!-- Main content --> */}
                    <div class="content">
                        <div class="container-fluid">
                            <TableData/>
                        </div>
                    </div>
                    {/* <!-- /.content --> */}
                </div>
                {/* <!-- /.content-wrapper --> */}



            </div>
        </>
    )
}

export default UserDisplay