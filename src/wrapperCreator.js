import React from 'react';

const wrapperCreator = (methodName, handlerCreator) => {
    return (handler)=> {
        return (Wrapped)=> {
            const Wrapper = React.createClass({
                [methodName]: handlerCreator(handler),
                render() {
                    return <Wrapped {...this.props}/>;
                }
            });

            return Wrapper;
        }
    };
};

export default wrapperCreator;