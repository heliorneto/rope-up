import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import "./blog.css";
import Card from '../../Components/BlogCard/blog_card';
import TextBox from '../../Components/TextBox/textBox';
import Carrousel from '../../Components/Carrousel/carrousel';

function Blog(){
    return(
        <div id="page-blog">
            <Header/>
            <div id="blog-general">
                <div id="line5">
                    <div id="text1-blog" >
                        <div id="text3">
                            <h2 style={{fontSize: 52}}>Publicações sobre gestão e desenvolvimento</h2>
                            <h3 style={{fontSize: 28}}>Porque nos movemos pelo conhecimento</h3>
                        </div>
                    </div>
                    <div id="image-top-blog">
                        <img src="/Imagens/1.png" alt="image1-blog" style={{width:"70vh", paddingTop:"15vh"}}></img>
                    </div>
                </div>
                <div id="column">
                    <div id="components">
                        <div id="midle1">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div>
                            <div id="midle2">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                            <div id="midle3">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                        </div>
                        <div id="midle4">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            <div id="midle5">
                                <Button width="200px" color="#D40F1C" label="Veja todos os assuntos"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="column">
                    <div id="title">
                        <h3>Mais Lidas</h3>
                    </div>
                    <div id="carrousel">
                        <Carrousel> 
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </Carrousel>
                    </div>
                </div>
                <div id="column">
                    <div id="title2">
                        <h3>Mais recentes</h3>
                    </div>    
                    <div id="line">
                        <div id="left">
                            <img src="/Imagens/8.png" alt="image1-blog" style={{width:"70vh", paddingTop:"10vh"}}></img>
                        </div>
                        <div id="right">
                            <div id="midle2">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                            <div id="midle2">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                            <div id="midle2">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="line3">
                    <div id="components2">
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                    </div>
                </div>
                <div id="line3">
                    <div id="components2">
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                    </div>
                </div>
                <div id="line4">
                    <div id="image-bottom-blog">
                        <div id="tb">
                            <TextBox color="#D40F1C"></TextBox>
                        </div>
                        <img src="/Imagens/9.png" alt="image1-blog" style={{width:"120vh", paddingTop:"2vh"}}></img>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;
