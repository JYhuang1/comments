import 'babel-core/polyfill';
import React from 'react';
import {Provider} from 'react-redux';

var CommentBox = React.createClass({
    render: function() {
        console.log(React);
        return (
            <div className="commentBox">
            Hello, world! I am a CommentBox.
        </div>
        );
    }
});
React.render(
<CommentBox />,
    document.getElementById('content')
);

