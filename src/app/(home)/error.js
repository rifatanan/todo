'use client';
import React from 'react';

function error() {
    return (
        <div className="flex justify-center">
            <div className="mt-5 w-3/4 flex justify-center">
                <button type="button" disabled>
                    Error!
                </button>
            </div>
        </div>
    );
}

export default error;
