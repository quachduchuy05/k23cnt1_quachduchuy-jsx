import React, { Component } from 'react'
import QdhControl from './componest/QdhControl'

export default class QdhApp extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center'> quách đức huy</h1>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/style.css" />
  <title>Basic React Lab</title>
  <section className="container-fluid mt-3">
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">

         {/*header*/}
        <QdhControl />
       {/* danh sách sinh viên*/} 
          <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>SV001</td>
                    <td>Nguyễn Văn A</td>
                    <td>20</td>
                    <td>Nam</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>SV002</td>
                    <td>Nguyễn Văn B</td>
                    <td>21</td>
                    <td>Nữ</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SV003</td>
                    <td>Nguyễn Văn C</td>
                    <td>19</td>
                    <td>Nam</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select className="form-control">
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input className="form-control" placeholder="dd/mm/yyyy" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select className="form-control">
                    <option>Hà Nội</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

      </div>
    )
  }
}
