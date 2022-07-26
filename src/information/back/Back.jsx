import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from './back.module.scss'

function Button() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Link 
                to="/" className={clsx(styles.link)}
            > 
                <svg className={clsx(styles.icon_arrow_left)} width="24px" height="24px" fill="currentColor"viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="16.3515625 11.1015625 16.3515625 12.25 9.2421875 12.25 12.4960938 15.53125 11.6757812 16.3515625 7 11.6757812 11.6757812 7 12.4960938 7.8203125 9.2421875 11.1015625"></polygon>
                </svg>
                Back to Home
            </Link>
        </div>
    )
}

export default Button