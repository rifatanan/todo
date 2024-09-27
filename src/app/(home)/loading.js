import React from 'react';

function loading() {
    return (
        <div className="flex justify-center">
            <div className="mt-5 w-3/4 flex justify-center">
                <button type="button" disabled>
                    Loading...
                </button>
            </div>
        </div>
    );
}

export default loading;
