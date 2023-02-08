import React, { useRef } from 'react';
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
//import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import './styles.scss';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dcanftb', 'template_76ge0ea', form.current, 'P7tCvceJf_p9KSqiP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };




    return (
        <section id="contact" className='contact'>
            <PageHeaderContent
                headerText="Contact Me"
                icon={<RiContactsFill size={40} />}
            />
            <div className='contact__content'>
                <h3 className='contact__content__header-text'> Let's Talk</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='contact__content__form'>
                        <div className='contact__content__form__controlsWrapper'>
                            <div className='nameWrapper'>
                                <input name='name' className='inputName' type="text" />
                                <label htmlFor='name' className='namelabel'>Name</label>
                            </div>
                            <div className='emailWrapper'>

                                <input name='email' className='inputEmail' type="text" />
                                <label htmlFor='email' className='emaillabel'>Email</label>
                            </div>
                            <div className='descriptionWrapper'>
                                <textarea
                                    name='description'
                                    className='inputDescription'
                                    type="text"
                                    rows={"5"}

                                />
                                <label htmlFor='description' className='descriptionlabel'>Description</label>
                            </div>
                        </div>
                        <button value="Send" >Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact