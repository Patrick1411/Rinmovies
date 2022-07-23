import clsx from 'clsx'
import { Helmet } from 'react-helmet-async'

import styles from './terms-of-use.module.scss'
import Button from '../back/Back'
    
function TermOfUse() {
    return (

        <>
            <Helmet>
            <title>Our Terms of Use</title>
            </Helmet>
            <div className={clsx(styles.wrapper,"global_content")}>
                <div className={clsx("coverage", styles.container)}>
                    <Button />
                    <h1 className={clsx(styles.heading)}>Terms Of Use</h1>
                    <div className={clsx(styles.information)}>
                        <p className={clsx(styles.paragraph)}>
                            We offers a tailored subscription service that allows our users to stream entertainment content to various Internet-connected devices through the Internet.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermOfUse