import wrapperCreator from './wrapperCreator';

const componentWillReceiveProps = wrapperCreator('componentWillReceiveProps', (handler)=>function (nextProps) {
    handler(nextProps, this.props);
});

export default componentWillReceiveProps;