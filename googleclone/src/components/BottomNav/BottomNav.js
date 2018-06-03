import React, { Component } from 'react';
import './index.css';

class BottomNav extends Component {
    render() {
        return (
            <div className='bottomNav_wrapper'>
                <div className='bottomlinks'>
                    <a href="https://www.google.com/ads/"> <div className="bottomlink">Advertising</div></a>
                    <a href="https://www.google.com/search?q=google+business&rlz=1C1GCEA_enUS788US788&oq=google+bussi&aqs=chrome.1.69i57j0l5.11622j0j4&sourceid=chrome&ie=UTF-8">  <div className="bottomlink">Bussiness</div></a>
                </div>
                <div className='bottomlinks'>
                    <a href="https://privacy.google.com/#"><div className="linkbottom">Privacy</div></a>
                    <a href="https://policies.google.com/terms">  <div className="linkbottom">Terms</div></a >
                    <a href="https://support.google.com/accounts/answer/3118621?hl=en">  <div className="linkbottom">Setting</div></a >
                </div>
            </div>
        );
    }
}

export default BottomNav;