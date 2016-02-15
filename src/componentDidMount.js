import wrapperCreator from './wrapperCreator';

const componentDidMount = wrapperCreator('componentDidMount', (handler)=> function () {
    handler(this.props);
});

export default componentDidMount;