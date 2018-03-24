import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/common.scss';
import '../styles/post.scss';

class PageComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='post'>
                <div className='post-header'>
                    <div className='fl'>头像</div>
                    <div className='fr'>标签</div>
                </div>
                <div className='post-content'>
                    Post内容
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <PageComponent />,
    document.querySelector('#container')
);