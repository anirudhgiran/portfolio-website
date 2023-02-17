import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LinkStack.scss';



export function LinkStack() {
    return <div className="linkStack">
        <a href="https://linkedin.com/in/anirudhgiran" target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
        </a>
        <a href="https://github.com/anirudhgiran" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </a>
        <a href="https://www.hackerrank.com/anirudhgiran56" target="_blank">
            <FontAwesomeIcon icon={['fab', 'hackerrank']} size='2x' />
        </a>
        <div className="line"></div>
    </div>
}