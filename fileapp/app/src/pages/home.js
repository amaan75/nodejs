import React, {Component} from 'react'
import Header from "../components/header";

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={'app-container'}>
                <Header/>
                <div className={'app-content'}>
                    <div className={'app-card'}>
                        <div className={'app-card-header'}>
                            <div className={'app-card-header-inner'}>

                                here is header
                            </div>
                        </div>

                        <div className={'app-card-content'}>
                            <div className={'app-card-content-inner'}>
                                here is content
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Home;