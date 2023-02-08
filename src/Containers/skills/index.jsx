import React from 'react'
import './styles.scss';
import PageHeaderContent from '../../components/pageHeaderContent';
import { skillData } from './utils';
const Skills = () => {
    return (
        <section className="skills" id="skills">

            <PageHeaderContent
                headerText="Skills"
            // icon={<AiFillProject size={40} />}
            />

            <div class="skill">
                {
                    skillData.map((item) => (
                        <div class="card">
                            <div class="card2">
                                <image src={item.logo} alt="project " class="center" />
                                <h3>{item.skillName}</h3>
                            </div>
                        </div>
                    ))
                }


            </div>



        </section>
    )
}

export default Skills