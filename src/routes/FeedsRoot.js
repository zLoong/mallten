import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/common.scss';
import '../styles/feeds.scss';

class FeedsComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='feeds'>
                <div className='feeds-header'>
                    <div className='fl'>头像</div>
                    <div className='fr'>标签</div>
                </div>
                <div className='feeds-content'>
                    Feeds内容
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <FeedsComponent />,
    document.querySelector('#container')
);