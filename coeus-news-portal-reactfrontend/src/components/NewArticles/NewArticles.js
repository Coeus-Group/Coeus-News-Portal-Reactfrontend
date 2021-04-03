import React from 'react'
import './NewArticles.css';
import "bootstrap/dist/css/bootstrap.min.css";

function NewArticles() {
    return (
        <div className="NewArticles">
            <main className="article-main">
                <div className="container-fluid">
                    <form className="form-article">
                        <div className="container-newarticle">
                            <form formAction="action_page.php">
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label htmlFor="title">Article Title</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <input type="text" id="title" name="articletitle" placeholder="Your title..">
                                        </input>
                                    </div>
                                </div>
                                {/* <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label htmlFor="notes">Article Notes</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <textarea id="notes" name="notes" placeholder="Comments.."
                                            style="height:200px" />
                                    </div>
                                </div> */}
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label htmlFor="articlecategory">Article Category</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <select id="articlecategory" name="articlecategory">
                                            <option value="politics">Politics</option>
                                            <option value="education">Education</option>
                                            <option value="finance">Finance</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label htmlFor="tags">Article Tags</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <input type="text" id="tags" name="articletags" placeholder="Your Tags..">
                                        </input>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label htmlFor="notes">Article Text Content</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <input type="file" className="form-file-txt">
                                        </input>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label htmlFor="notes">Article Media Content</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <input type="file" className="form-file-txt">
                                        </input>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="form-newarticle">
                                        <button className="btn-submit btn-sm btn-primary" type="submit"
                                            formAction="dashboard.html">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default NewArticles;
