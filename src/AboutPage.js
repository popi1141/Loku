import React, {Component, Fragment}  from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import './App.css';

export class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                 <Jumbotron className="aboutjumbo" fluid>
                     <Container>
                        <h1 className="display-1">  What is Loku? </h1>
                     </Container>
                </Jumbotron>
                <div className="about-section">
                    <h2 className="about-headers">1/10 Small Businesses Fail</h2>
                    <p className="about-text">It's tough, these business owners put everything they have
                    to serve their community, however the community often aren't
                    aware of this business</p>
                    <h2 className="about-headers">Local Businesses Make A Community</h2>
                    <p className="about-text"> But oftentimes, finding the support is extremely difficult since
                        there are soo many competiting businesses and money is extremely tight.
                        If you were a business owner and you had to chose between advertising
                        and paying your staff, which would you pick. Many would chose paying
                        their staff. These choices, even though both are important, are difficult
                        and the reason why many businesses struggle financially. </p>
                    <h2 className="about-headers">Bridging Communities through Loku</h2>
                    <p className="about-text">By having this platform, we believe that communities can grow and
                    depend on each other. Making the connection is the basis for this new
                    trend. Supporting local businesses will not only have a lasting impact
                    on one's community but also the enviornment, economy, etc. It is a positive
                    change for good, and it's just about time for people to start realizing this
                    new movement of locally driven consumers.</p>
                </div>
            </Fragment>

        );
    }
}

 export default AboutPage;