import './Dashboard.css';
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';


function Dashboard() {

    const currentArticlesData = [
        {
            "title": "Politics latest news: Queen pays tribute to 'grief and loss felt by so many on anniversary of lockdown",
            "publishedDate": "23-Mar-2021",
            "publishedExternally": "Yes"
        },
        {
            "title": "Angela Merkel backs EU threat of vaccine ban as Germany lockdown extended",
            "publishedDate": "23-Mar-2021",
            "publishedExternally": "No"
        },
        {
            "title": "Coronavirus lockdown one year on: Ten reasons why so many Britons have died",
            "publishedDate": "23-Mar-2021",
            "publishedExternally": "Yes"
        },
        {
            "title": "Key to how universe works may have been discovered",
            "publishedDate": "23-Mar-2021",
            "publishedExternally": "Yes"
        },
        {
            "title": "Travel news latest: Foreign holiday ban extended to July",
            "publishedDate": "23-Mar-2021",
            "publishedExternally": "Yes"
        }
    ];

    const renderCurrentArticlesData = (currentArticles, index) => {
        return (
            <tr key={index}>
                <td>{currentArticles.title}</td>
                <td>{currentArticles.publishedDate}</td>
                <td>{currentArticles.publishedExternally}</td>
                <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                    <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                    <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                </td>
            </tr>
        );
    }

    return (
        <div className="Dashboard">
            <main className="main-dbpg">
                <div className="container-fluid">
                    <div className="row">
                        {/* <Sidebar /> */}
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div
                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Articles Dashboard</h1>
                            </div>
                            <h2>Pending Articles</h2>
                            <div className="table-responsive table-striped table-condensed">
                                <ReactBootStrap.Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Publishing Date</th>
                                            <th>Published Externally?</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentArticlesData.map(renderCurrentArticlesData)}
                                    </tbody>
                                </ReactBootStrap.Table>
                            </div>

                            <h2>Approved Articles</h2>
                            <div className="table-responsive my-4 table-striped ">
                                <ReactBootStrap.Table responsive >
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Publishing Date</th>
                                            <th>Published Externally?</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentArticlesData.map(renderCurrentArticlesData)}
                                    </tbody>
                                </ReactBootStrap.Table>
                            </div>
                        </main>
                        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
