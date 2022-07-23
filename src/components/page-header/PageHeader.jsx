import bg from '../../assets/footer-bg.jpg'
import './page-header.scss'

function PageHeader(props) {
    return (
            <div 
                className="page_header" 
                style={{backgroundImage: `url(${bg})`}}
            >
                <h2>{props.children}</h2>
            </div>
    )
}

export default PageHeader