import React from 'react';
import $ from 'jquery';

export default class App extends React.Component{
    componentDidMount() {
        $('h1').text('Webpack Config').css({
            textAlign: 'center',
            color: '#2020c1'
        }).appendTo($('header'))
    }

    render() {
        return (
            <React.Fragment>
                <h1 />
                <hr />
                <div className="box">
                    <h2 className="box-title">Box Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero!</p>
                </div>
            </React.Fragment>
        )
    }
}