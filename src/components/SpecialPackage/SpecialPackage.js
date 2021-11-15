import React from 'react';
import PackagePicOne from '../PackagePicOne/PackagePicOne';
import PackagePicTwo from '../PackagePicTwo/PackagePicTwo';


const SpecialPackage = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row p-5 bg-dark">
                    <div className="col-md-6 col-sm-12">
                        <PackagePicOne></PackagePicOne>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <PackagePicTwo></PackagePicTwo>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialPackage;

