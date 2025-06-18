import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer id='contato' className='d-flex justify-content-center' style={{backgroundColor: 'rgb(33, 37, 41)', color: 'white', scrollMarginTop: '100px'}}>
            <div style={{marginTop: '100px', marginBottom: '250px'}}>
                <Row>
                    <Col>
                        <h1>Contatos</h1>
                        <ul className="list-unstyled d-flex justify-content-center gap-4 mt-3">
                            <li><a className="text-white text-decoration-none" href="https://www.linkedin.com/in/rafael-moura-b627071b3/" target='_blank'><FaLinkedin size={30} /></a></li>
                            <li><a className="text-white text-decoration-none" href="mailto:rafael.moura.souza707@gmail.com" target='_blank'><FaEnvelope size={30} /></a></li>
                            <li><a className="text-white text-decoration-none" href="https://github.com/RafaelSouza707" target='_blank'><FaGithub size={30} /></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer
