import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/post.css';
import '../styles/comment.scss';

class CommentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='comment'>
                <div className='comment-header'>
                    <div className='fl'>头像</div>
                    <div className='fr'>标签</div>
                </div>
                <div className='comment-content'>
                    内容
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <CommentComponent />,
    document.querySelector('#container')
);