import React from 'react';

const LoadingComponent = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh_-_250px)]">
            <div className="w-16 h-16 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingComponent;
