import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/login.scss';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='login'>
                <div className='login-header'>
                    <div className='fl'>头像</div>
                    <div className='fr'>标签</div>
                </div>
                <div className='login-content'>
                    Login内容
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <PageComponent />,
    document.querySelector('#container')
);