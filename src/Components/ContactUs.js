import React from "react";
import { PopupModal } from "react-calendly";


class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <button
         className="absolute lg:top-[24em] lg:left-[7%] bg-pink-200 hover:bg-pink-400 italic text-[20px] px-6 py-4 rounded-2xl xsm:left-[26%] xsm:top-[40rem] md:top-[24em] "
          onClick={() => this.setState({ isOpen: true })}
        >
          Book With Us!!
        </button>
        
        <PopupModal
          url="https://calendly.com/virasat-tech-calender/30min"
          styles={{minWidth:"320px", height:"750px"}}
          pageSettings={this.props.pageSettings}
          utm={this.props.utm}
          prefill={this.props.prefill}
          onModalClose={() => this.setState({ isOpen: false })}
          open={this.state.isOpen}
          rootElement={document.getElementById("root")}
        />

        
      </div>
    );
  }
}
export default ContactUs;