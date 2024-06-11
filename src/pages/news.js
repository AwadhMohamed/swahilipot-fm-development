import React from 'react';
import Header from "./header";
import Footer from "./footer";
import ContactSection from './Contactsection';

const NewsPage = () => {
    return (
        <>
            <Header />
            <main className="content">
                {/* Blog */}
                <div className="container content-space-1">
                    {/* Heading */}
                    <div className="w-lg-65 text-center mx-lg-auto mb-7">
                        <h3 className="main-heading">What's New at Swahilipot FM</h3>
                        <p className="fs-5">
                            Welcome to Swahilipot FM news portal! Stay updated with the latest news across various categories.
                        </p>
                    </div>
                    {/* End Heading */}
                    <div className="row mb-5 mb-sm-5">
                        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
                            {/* Card */}
                            <div className="card h-100 p-2 card-hover">
                                <img
                                    className="card-img"
                                    src="../assets/img/600x400/img2.jpg"
                                    alt="Image Description"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Technology</h5>
                                    <p className="card-text">
                                    Visual Studio Code (VS Code) has emerged as one of the most popular code editors among developers due to its versatility, lightweight nature, and extensive customization options. Configuring VS Code to suit your needs can significantly enhance your productivity. In this article,
                                    we’ll walk through the essential steps to set up Visual Studio Code in your development environment.
                                    </p>
                                    <a className="card-link" href="https://medium.com/@swahilipotengineering/visual-studio-code-setup-unleash-your-coding-creativity-b0791beaf8ab">
                                        Get More News <i className="bi-chevron-right small ms-1" />
                                    </a>
                                </div>
                            </div>
                            {/* End Card */}
                        </div>
                        {/* End Col */}
                        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
                            {/* Card */}
                            <div className="card h-100 p-2 card-hover">
                                <img
                                    className="card-img"
                                    src="../assets/img/600x400/img1.jpg"
                                    alt="Image Description"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Attachment</h5>
                                    <p className="card-text">
                                    Industrial Attachment, A Student’s Pain?
                                    At Swahilipot Hub Foundation, we pride ourselves with a rich culture of community, and sharing information(valuable) and opportunities to the youth. This of course is no easy task, but it’s a fun one to do.
                                    </p>
                                    <a className="card-link" href="https://medium.com/@swahilipotengineering/industrial-attachment-a-students-pain-99a8d03c52ec">
                                        Get More News <i className="bi-chevron-right small ms-1" />
                                    </a>
                                </div>
                            </div>
                            {/* End Card */}
                        </div>
                        {/* End Col */}
                        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
                            {/* Card */}
                            <div className="card h-100 p-2 card-hover">
                                <img
                                    className="card-img"
                                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*esP0qICe13EwiA0bbOyr9Q.jpeg"
                                    alt="Image Description"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Community</h5>
                                    <p className="card-text">
                                    The coastal region faces a notable deficit in female representation within these sectors, a challenge compounded by restricted access to education and a lack of necessary support systems for women to navigate through their educational journeys. This issue is further affected by economic disparities, societal norms, 
                                    and entrenched stereotypes. As a result, women find themselves in uncertain situations.
                                    </p>
                                    <a className="card-link" href="https://medium.com/@swahilipotengineering/swahili-tech-women-stw-269339dcf13e">
                                        Get More News <i className="bi-chevron-right small ms-1" />
                                    </a>
                                </div>
                            </div>
                            {/* End Card */}
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                    {/* Info */}
                    <div className="text-center">
                        <p className="mb-0">Want to read more?</p>
                        <a className="link" href="https://medium.com/@swahilipotengineering">
                            Explore Swahilipot FM News <i className="bi-chevron-right small ms-1" />
                        </a>
                    </div>
                    {/* End Info */}
                </div>
                {/* End Blog */}
            </main>
            <ContactSection />
            <Footer />
            <style jsx>{`
                .content {
                    padding-top: 80px; /* Reduced padding-top value */
                    padding-bottom: 60px; /* Adjust this value according to your footer height */
                    min-height: 100vh; /* Ensures the content area takes up at least the full height of the viewport */
                    box-sizing: border-box;
                }
                .main-heading {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #2c3e50; /* Darker shade for the main heading */
                    margin-bottom: 1rem;
                }
                .card-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #34495e; /* Slightly lighter shade for card titles */
                    margin-bottom: 0.75rem;
                }
                .card-hover {
                    background-color: #f8f9fa; /* Light background color for the cards */
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    border-radius: 10px; /* Rounded corners for the cards */
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow for the cards */
                }
                .card-hover:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }
                .card-img {
                    transition: transform 0.3s ease-in-out;
                    border-radius: 10px 10px 0 0; /* Rounded corners for the top of the card */
                }
                .card-hover:hover .card-img {
                    transform: scale(1.1);
                }
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .col-sm-6 {
                    flex: 1 1 calc(33.333% - 20px); /* Adjust to make sure three cards fit in a row */
                }
            `}</style>
        </>
    );
};

export default NewsPage;
