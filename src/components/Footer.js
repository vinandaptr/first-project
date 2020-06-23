import React from 'react';
import styled from 'styled-components';

const FooterContainerStyles = styled.footer`
.footer-middle {
    background-color: palevioletred;
    padding-top: 2rem;
}

.footer-bottom {
    padding-top: 2rem;
    padding-bottom: 1rem;
}

ul li a {
    color: lightgrey;
}

ul li a:hover {
    color: white;
}
`;

function Footer() {
    return (
        <FooterContainerStyles className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Customer Care</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Jakarta</a></li>
                                <li><a href="/">Tangerang</a></li>
                                <li><a href="/">Bandung</a></li>
                                <li><a href="/">Bogor</a></li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Company</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Our Team</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Awards</a></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Help</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">FAQs</a></li>
                                <li><a href="/">Lorem ipsum</a></li>
                                <li><a href="/">Lorem ipsum</a></li>
                                <li><a href="/">Lorem ipsum</a></li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Daily Updates</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Lorem ipsum</a></li>
                            </ul>
                        </div>

                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            Copyright &copy; {new Date().getFullYear()} Vins Store - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainerStyles>
    )
}


export default Footer;