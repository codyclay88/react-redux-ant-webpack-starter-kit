import React, { defaultProps } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col,  } from 'antd';

import moment from 'moment';
import _ from "underscore";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

HomePage.defaultProps = {
    //stream: []
};

function mapStateToProps(state, ownProps) {
    //return {
    //    stream: state.stream
    //}
}

function mapDispatchToProps(dispatch) {
    //return {
    //    actions: bindActionCreators(streamActions, dispatch)
    //};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
