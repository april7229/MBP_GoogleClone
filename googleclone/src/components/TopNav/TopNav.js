import React, { Component } from 'react';
import './index.css';

class TopNav extends Component {
    render() {
        return (
            <div className='TopNav_wrapper'>
                <div className='toplinks'>
                    <a href="https://www.google.com/about/">   <div className="toplink">About</div></a>
                    <a href="https://store.google.com/?gclid=Cj0KCQjwgMnYBRDRARIsANC2dfktjOqWQt30QZpkV0D2zcDmGlWQUViLRsE_PreonQBpGQtj4i2brygaAtjOEALw_wcB&gclsrc=aw.ds&dclid=CLu9-LrmttsCFdQONwodEWsAVQ">   <div className="toplink">Store</div></a>
                </div>
                <div className='toplinks'>
                    <a href="https://mail.google.com/mail"> <div className="linktop">Gmail</div></a>
                    <a href="https://images.google.com/"> <div className="linktop">Images</div></a>
                    <i class="material-icons">favorite</i>
                    <i class="material-icons">computer</i> 
                    
                    
                </div>
            </div>
        );
    }
}

export default TopNav;