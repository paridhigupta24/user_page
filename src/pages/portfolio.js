import React from 'react';
import Menu from './Menu';

function Portfolio() {
    return (
        <>
            <div className="wrapper">
                <Menu />

                {/* Page Header Start */}
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>My Doctor</h2>
                            </div>
                            <div className="col-12">
                                <a href="/">Name</a>
                                <a href="/">Contact details</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}

                {/* Portfolio Start */}
                <div className="portfolio">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Prescription</h2>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".first">Complete</li>
                                    <li data-filter=".second">New</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container">
                            {
                                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="portfolio-warp">
                                        <div className="portfolio-img">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/img/portfolio-6.jpg'}
                                                alt="Team Image"
                                            />
                                            <div className="portfolio-overlay">
                                                <p>
                                                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>Week-1</h3>
                                            <a className="btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                                +
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        {/* Portfolio Item 2 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.2s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img
                                        src={process.env.PUBLIC_URL + '/assets/img/portfolio-5.jpg'}
                                        alt="Team Image"
                                    />
                                    <div className="portfolio-overlay">
                                        <p>
                                            Another description for Week-2. Replace this with your specific content.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Week-2</h3>
                                    <a className="btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                        +
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item 3 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img
                                        src={process.env.PUBLIC_URL + '/assets/img/portfolio-4.jpg'}
                                        alt="Team Image"
                                    />
                                    <div className="portfolio-overlay">
                                        <p>
                                            Description for Week-3. Customize it based on your needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Week-3</h3>
                                    <a className="btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                        +
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item 4 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.4s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img
                                        src={process.env.PUBLIC_URL + '/assets/img/portfolio-3.jpg'}
                                        alt="Team Image"
                                    />
                                    <div className="portfolio-overlay">
                                        <p>
                                            Description for Week-4. Customize it based on your specific details.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Week-4</h3>
                                    <a className="btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                        +
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item 5 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img
                                        src={process.env.PUBLIC_URL + '/assets/img/portfolio-2.jpg'}
                                        alt="Team Image"
                                    />
                                    <div className="portfolio-overlay">
                                        <p>
                                            Another description for Week-5. Adjust this content as needed.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Week-5</h3>
                                    <a className="btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                        +
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item 6 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.6s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img
                                        src={process.env.PUBLIC_URL + '/assets/img/portfolio-1.jpg'}
                                        alt="Team Image"
                                    />
                                    <div className="portfolio-overlay">
                                        <p>
                                            Description for Week-6. Customize it according to your project.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Week-6</h3>
                                    <a className="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                        +
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Continue adding more portfolio items as needed */}


                        <div className="row">
                            <div className="col-12 load-more">
                                <a className="btn" href="#">
                                    Load More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
