import React from 'react'

function NoData() {
  	return (
		<div className="flex justify-center">
            <div className="mt-5 w-3/4 flex justify-center">
                <button type="button" disabled>
                    No Data...
                </button>
				<p> You must be login first.</p>
            </div>
        </div>
  	)
}

export default NoData