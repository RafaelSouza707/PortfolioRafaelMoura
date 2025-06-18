import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projetos from '../data/projetos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
  return (
    <main className="bg-dark text-light py-5">
        <div className="container" id='qmsoueu' style={{marginTop: '100px', scrollMarginTop: '100px'}}>
            <h1 style={{marginLeft:'100px', marginBottom:'25px'}}>Me chamo <b>Rafael Moura</b></h1>
            <p className="mx-auto" style={{maxWidth: '950px'}}>Entusiasta de tecnologia e aspirante a programador, busco expandir meus conhecimentos e 
                desenvolver minhas habilidades ao máximo. Atualmente no quarto período de Sistemas para Internet no IFPB, 
                estou em busca de oportunidades para aplicar e ampliar meu conhecimento no desenvolvimento de software. 
                Comprometido, motivado e ansioso para aprender e crescer na área da programação.</p>
        </div>

        <div id='tecnologias' className="tencnologias d-flex justify-content-center" style={{marginTop: '300px', scrollMarginTop: '100px'}}>
            <Row>
                <h3>Linguagens</h3>
                <Col>
                    <li className='tecs'>JavaScript</li>
                    <li className='tecs'>Java</li>
                    <li className='tecs'>Python</li>
                    <li className='tecs'>C</li>
                </Col>
                <Col style={{marginBottom: '50px'}}>
                    <li className='tecs'>HTML</li>
                    <li className='tecs'>CSS</li>
                    <li className='tecs'>Node.js</li>
                    <li className='tecs'>PostgreSQL</li>
                </Col>

                <h3>Frameworks</h3>
                <Col>
                    <li className='tecs'>BootStrap</li>
                    <li className='tecs'>React</li>
                </Col>
            </Row>
        </div>

        
        <div id='projetos' className="cardProjetos" style={{marginTop: '300px', scrollMarginTop: '100px'}}>
            <div className="container mb-4">
                <h1 className="text-center">Projetos</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        projetos.map((item, index) => (
                            <div className="col-md-4 mb-3 mt-3 d-flex justify-content-center" key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.imagem}/>
                                    <Card.Body>
                                        <Card.Title>{item.titulo}</Card.Title>
                                        <Card.Text>
                                        {item.descricao}
                                        </Card.Text>
                                        <Button variant="primary"><a style={{color: 'white', textDecoration: 'none'}} target='_blank' href={item.link}>Link</a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        
    </main>
  );
};

export default Main;