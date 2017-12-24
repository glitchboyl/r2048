import React, {Component} from 'react';

export default class Sharing extends Component {
    render() {
        return (
            <div className="sharing">
                If you like it, please give me a <iframe
                    src="https://ghbtns.com/github-btn.html?user=LonelyLiaR&amp;repo=R2048&amp;type=star&amp;count=false"
                    title='star'
                    frameBorder="0"
                    scrolling="0"
                    width="55px"
                    height="20px"></iframe> or you can <iframe
                    src="https://ghbtns.com/github-btn.html?user=LonelyLiaR&amp;repo=R2048&amp;type=fork&amp;count=false"
                    title='fork'
                    frameBorder="0"
                    scrolling="0"
                    width="55px"
                    height="20px"></iframe> it.
            </div>
        )
    }
}