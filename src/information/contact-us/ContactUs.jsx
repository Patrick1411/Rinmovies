import styles from './contact-us.module.scss'
import Back from '../back/Back'
import OutlineButton from '../../components/button/Button'

import clsx from 'clsx'
import { Helmet } from 'react-helmet-async'

function ContactUs() {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className={clsx(styles.wrapper,"global_content")}>
                <div className={clsx("coverage", styles.container)}>
                    <Back />
                    
                    <section className={clsx(styles.section)}>
                        <div className={clsx(styles.cover)}>
                            <div className={clsx(styles.contact)}>
                                <h1 className={clsx(styles.heading)}>Contact us</h1>
                            </div>
                            <div className={clsx(styles.body)}>
                                <form action="" className={clsx(styles.form)}>
                                    <div className={(styles.group)}>
                                        <input placeholder=" " type="text" id="name" name="name" className={clsx(styles.input)} autoComplete="off" />
                                        <label htmlFor="name" className={clsx(styles.label)}>Your full name</label>
                                        {/* <span className={(clsx(styles.span_error))}>
                                            <svg class={clsx(styles.icon_error)} width="16" height="16" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0z" fill="none"></path><path d="M15.2 13.1L8.6 1.6c-.2-.4-.9-.4-1.2 0L.8 13.1c-.1.2-.1.5 0 .7.1.2.3.3.6.3h13.3c.2 0 .5-.1.6-.3.1-.2.1-.5-.1-.7zM8.7 12H7.3v-1.3h1.3V12zm0-2.7H7.3v-4h1.3v4z" fill="currentColor"></path>
                                            </svg>
                                        </span>  */}  
                                        <div className={clsx(styles.message_error)}></div>
                                        
                                    </div>

                                    <div className={(styles.group)}>
                                        <input placeholder=" " type="email" id="email" name="email" className={clsx(styles.input)} autoComplete="off" />
                                        <label htmlFor="email" className={clsx(styles.label)}>Email</label>
                                        {/* <span className={(clsx(styles.span_error))}>
                                            <svg class={clsx(styles.icon_error)} width="16" height="16" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0z" fill="none"></path><path d="M15.2 13.1L8.6 1.6c-.2-.4-.9-.4-1.2 0L.8 13.1c-.1.2-.1.5 0 .7.1.2.3.3.6.3h13.3c.2 0 .5-.1.6-.3.1-.2.1-.5-.1-.7zM8.7 12H7.3v-1.3h1.3V12zm0-2.7H7.3v-4h1.3v4z" fill="currentColor"></path>
                                            </svg>
                                        </span>  */}  
                                        <div className={clsx(styles.message_error)}></div>
                                        
                                    </div>

                                    <div className={(styles.group)}>
                                        <input placeholder=" " type="text" id="phone" name="phone" className={clsx(styles.input)} autoComplete="off" />
                                        <label htmlFor="phone" className={clsx(styles.label)}>Your phone number</label>
                                        {/* <span className={(clsx(styles.span_error))}>
                                            <svg class={clsx(styles.icon_error)} width="16" height="16" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0z" fill="none"></path><path d="M15.2 13.1L8.6 1.6c-.2-.4-.9-.4-1.2 0L.8 13.1c-.1.2-.1.5 0 .7.1.2.3.3.6.3h13.3c.2 0 .5-.1.6-.3.1-.2.1-.5-.1-.7zM8.7 12H7.3v-1.3h1.3V12zm0-2.7H7.3v-4h1.3v4z" fill="currentColor"></path>
                                            </svg>
                                        </span>  */}  
                                        <div className={clsx(styles.message_error)}></div>
                                        
                                    </div>

                                    <div className={(styles.group)}>
                                        <textarea placeholder=" " className={clsx(styles.textArea)} name="content"></textarea>
                                        <label htmlFor="content" className={clsx(styles.label)}>Content</label>
                                        {/* <span className={(clsx(styles.span_error))}>
                                            <svg class={clsx(styles.icon_error)} width="16" height="16" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0z" fill="none"></path><path d="M15.2 13.1L8.6 1.6c-.2-.4-.9-.4-1.2 0L.8 13.1c-.1.2-.1.5 0 .7.1.2.3.3.6.3h13.3c.2 0 .5-.1.6-.3.1-.2.1-.5-.1-.7zM8.7 12H7.3v-1.3h1.3V12zm0-2.7H7.3v-4h1.3v4z" fill="currentColor"></path>
                                            </svg>
                                        </span>  */}  
                                        <div className={clsx(styles.message_error)}></div>
                                        
                                    </div>

                                    <OutlineButton className="small">Submit</OutlineButton>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ContactUs