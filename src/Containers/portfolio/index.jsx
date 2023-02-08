import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import { AiFillProject } from 'react-icons/ai'
import './styles.scss';
import { portfolioData } from './utils';


const Portfolio = () => {
    return (
        <section id="portfolio" className='portfolio'>
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<AiFillProject size={40} />}
            />

            <div className='cards'>
                {
                    portfolioData.map((item) => (
                        <div className='card__main'>
                            <div class="card-image">
                                <img src={item.pngg} alt="" />
                            </div>
                            <div class="category"> {item.projectName} </div>
                            <div class="heading"> {item.projectTitle}
                                <div class="author">
                                    <a href={item.projectLink}><span class="name">Learn more <span>&rarr;</span></span></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


            {/* <div class="cards">
                <div class="card__main">
                    <div class="card-image"><img src={imageOne} alt="project image" /></div>
                    <div class="category"> Illustration </div>
                    <div class="heading"> A heading that must span over two lines
                        <div class="author">
                            <a href=''><span class="name">Learn more </span></a>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Portfolio;