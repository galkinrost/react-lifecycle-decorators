import wrapperCreator from './wrapperCreator';

const shouldComponentUpdate = wrapperCreator('shouldComponentUpdate', (handler)=>function (nextProps) {
    return handler(nextProps, this.props);
});

export default shouldComponentUpdate;