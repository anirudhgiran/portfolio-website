import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from 'csstype';

export function Footer() {

    const date = new Date();

    const styles: CSS.Properties = {
        footer: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            width: '100%',
            borderTop: '1px solid var(--text-color)',
            userSelect: 'none',
        },
        p: {
            position: 'relative',
            margin: '10px 0 10px',
        },
        a: {
            color: 'red'
        }
    };

    const pStyle: CSS.Properties = {

    }

    return <footer style={styles.footer}>
        <p style={styles.p}>
            &copy;{date.getFullYear()}&nbsp;
            Built with&nbsp;<FontAwesomeIcon icon={['fas', 'heart']} style={styles.a} />
            <FontAwesomeIcon icon={['fas', 'heart']} style={styles.a} />
            <FontAwesomeIcon icon={['fas', 'heart']} style={styles.a} />&nbsp;by Anirudh Giran</p>
    </footer>
}