import clsx from 'clsx'
import { Helmet } from 'react-helmet-async'

import styles from './privacy-policy.module.scss'
import Back from '../back/Back'

function PrivacyPolicy (){

  return (

    <>
        <Helmet>
            <title>Our Privacy Policy</title>
        </Helmet>
        <div className={clsx(styles.wrapper,"global_content")}>
            <div className={clsx("coverage", styles.container)}>
                <Back />
                <h1 className={clsx(styles.heading)}>Privacy Statement</h1>
                <div className={clsx(styles.information)}>
                    <p className={clsx(styles.paragraph)}>
                        Our Privacy Policy outlines our methods, including your options, for collecting, using, and disclosing certain information, including personal information, in connection with the Rinmovies service. If you have any questions about the customer services, please feel free to contact us by email at 
                        <a 
                            href="mailto:Rinmovies@gmail.com"
                        >
                            @Rinmovies@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default PrivacyPolicy