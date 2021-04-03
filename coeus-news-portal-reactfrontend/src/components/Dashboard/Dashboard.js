import './Dashboard.css';
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';

function Dashboard() {

    const [ArticlesData, setArticles] = useState([
        {
            "title": "Politics latest news: Queen pays tribute to 'grief and loss felt by so many on anniversary of lockdown",
            "publishedDate": "23-Mar-2021",
            "approved": true,
            "id": "1001"
        },
        {
            "title": "Angela Merkel backs EU threat of vaccine ban as Germany lockdown extended",
            "publishedDate": "23-Mar-2021",
            "approved": false,
            "id": "1002"
        },
        {
            "title": "Coronavirus lockdown one year on: Ten reasons why so many Britons have died",
            "publishedDate": "23-Mar-2021",
            "approved": true,
            "id": "1003"
        },
        {
            "title": "Key to how universe works may have been discovered",
            "publishedDate": "23-Mar-2021",
            "approved": false,
            "id": "1004"
        },
        {
            "title": "Travel news latest: Foreign holiday ban extended to July",
            "publishedDate": "23-Mar-2021",
            "approved": true,
            "id": "1005"
        },
        {
            "title": "US Capitol attack that left policeman dead raises fears over security at Congress",
            "publishedDate": "23-Mar-2021",
            "approved": true,
            "id": "1006"
        },
        {
            "title": "200,000 couples throwing away half a billion in pension rights every year",
            "publishedDate": "23-Mar-2021",
            "approved": false,
            "id": "1007"
        },
        {
            "title": "Great-grandmother mauled to death by escaped dogs will be 'dearly missed', family say",
            "publishedDate": "23-Mar-2021",
            "approved": true,
            "id": "1008"
        },
        {
            "title": "Coronavirus latest news: No evidence UK uptake of AstraZeneca vaccine is slowing, expert says",
            "publishedDate": "23-Mar-2021",
            "approved": false,
            "id": "1009"
        },
        {
            "title": "Millennials to be offered single-shot Johnson & Johnson Covid vaccine to ‘jab and go’",
            "publishedDate": "23-Mar-2021",
            "approved": true,
            "id": "1010"
        }
    ]);
    const deleteArticle = id => {
        const updatedArticles = ArticlesData.filter(Article => Article.id !== id);
        setArticles(updatedArticles);
    }

    const approvedArticles = ArticlesData.filter(Article => !Article.approved);
    const pendingArticles = ArticlesData.filter(Article => Article.approved);


    const renderArticlesData = (Articles, index) => {
        return (
            <tr key={index}>
                <td>{Articles.title}</td>
                <td>{Articles.publishedDate}</td>
                <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                    <a onClick={() => deleteArticle(Articles.id)} className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
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
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div
                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Articles Dashboard</h1>
                            </div>
                            <h2>Pending Articles</h2>
                            <div className="table-responsive table-striped table-condensed">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Publishing Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pendingArticles.map(renderArticlesData)}
                                    </tbody>
                                </Table>
                            </div>

                            <h2>Approved Articles</h2>
                            <div className="table-responsive my-4 table-striped ">
                                <Table responsive >
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Publishing Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {approvedArticles.map(renderArticlesData)}
                                    </tbody>
                                </Table>
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
