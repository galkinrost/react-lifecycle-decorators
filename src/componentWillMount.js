import wrapperCreator from './wrapperCreator';

const componentWillMount = wrapperCreator('componentWillMount', (handler)=>function () {
    handler(this.props);
});

export default componentWillMount;