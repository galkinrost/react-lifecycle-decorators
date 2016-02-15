import wrapperCreator from './wrapperCreator';

const componentWillUnmount = wrapperCreator('componentWillUnmount', (handler)=>function () {
    handler(this.props);
});

export default componentWillUnmount;