import React, { Component } from 'react';


class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,

        };

        this.handleClick.bind(this);

    }

    render() {


        return (
            <div class="Counter">
                <p>
                    {this.state.count}
                </p>

                <div>
                <button onClick={() => this.handleClick(-5)}> -5 </button>
                <button onClick={() => this.handleClick(-1)}> -1 </button>
                <button onClick={() => this.handleClick(+1)}> +1 </button>
                    <button onClick={() => this.handleClick(5)}> +5 </button>
                </div>
            </div>

        );
    }


    handleClick(factor) {
        this.setState({
            count: this.state.count + factor,

        })
    }
}

                export default Counter; 