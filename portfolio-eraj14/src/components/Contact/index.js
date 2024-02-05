import { useTheme } from '../../ThemeContext';

const Contact = () => {
    const { theme } = useTheme(); 

    return (
        <div className={`container home-page ${theme}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div className="text-zone" style={{ width: '100%', maxWidth: '600px' }}> {/* Adjust maxWidth as needed */}
                <h1>Contact Page</h1>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeF7BpiPJl_cum34UpJOH0pSfoHsiqGJKLzLZdxNhh3GnRuHA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" title="Contact Form">Loading…</iframe>
            </div>
        </div>
    );
}

export default Contact;
