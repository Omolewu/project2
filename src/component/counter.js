import React from 'react';
class Counter extends React.Component {
    state = {
        count: 0,
        // tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']
    };
    changeCounter() {
        console.log("Increament", this.state.count);
    }

    // gettags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>
    //     return <ul>{this.state.tags.map(tag => <li key={tag}> {tag}</li>)}</ul>

    // }
    // style = {
    //     fontSize: 20,
    //     textDecoration: 'none',
    //     margin: 10
    // }

    render() {
        return (
            <div>
                <span className={this.getClassesBadge()}>{this.formatcounter()}</span>
                <button onClick={this.changeCounter}> Increament </button>
                {/* {this.gettags()} */}
            </div>
        )
    }

    formatcounter() {
        const { count } = this.state.count;
        return this.state.count === 0 ? "Zero" : this.state.count
    }
    getClassesBadge() {
        let classes = "badge m-2 bg-";
        return classes += this.state.count === 0 ? "warning" : "primary";
    }
}
export default Counter;