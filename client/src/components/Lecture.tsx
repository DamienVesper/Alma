import React from "react";

class Lecture extends React.Component {
    render = (): React.ReactNode => (
        <section className=" tw-font-poppins ">
            <img src="../assets/img/leftarrow.png" className="tw-z-50 tw-absolute tw-left-4 tw-bg-black tw-w-[84px] tw-h-[106px]" ></img>
            <div className="tw-opacity-70 tw-backdrop-blur-xl  tw-h-screen tw-w-screen tw-inset-0 tw-z-[40] tw-blur-md tw-absolute tw-l-0 tw-b-2 tw-t-3 tw-r-2 " />
            <div className="tw-absolute tw-inset-x-40 tw-inset-y-10 tw-bg-lightgray tw-shadow-sm tw-shadow-black tw-rounded-lg tw-z-50 tw-py-8 tw-px-16 tw-overflow-scroll">
                <h1 className="tw-text-[34px]">Tittle Of module</h1>
                <p className="tw-pt-4">Simple text element/container for the body that<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Hi</p>
            </div>
        </section>
    );
}

export default Lecture;