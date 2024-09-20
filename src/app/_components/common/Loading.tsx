import React from 'react';

const LoadingComponent = ({ width, height, customClass }: {width? : number, height?: number, customClass?: string}) => {
    return (
        <div className={`flex items-center justify-center ${width ? `w-[${width}px]` : ''} ${height ? `h-[${height}px]` : 'min-h-[calc(100vh_-_250px)]'} ${customClass ?? ''}`}>
            <div className='w-[20px] h-[20px] border-4 border-red-500 border-dashed rounded-full animate-spin'></div>
        </div>
    );
};

export default LoadingComponent;
