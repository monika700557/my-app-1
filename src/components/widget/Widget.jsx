import "./widget.scss";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Widget = ({ type }) => {
  let data;
  let progressBarClass;

  switch (type) {
    case "user":
      data = {
        title: "Amount Due",
        amount: "1,234",
        isMoney: false,
        link: "See all users",
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{
              color: "#ffb800",
              backgroundColor: "#ffeec3",
              fontSize: '1.875rem', 
              borderRadius: "10px",
              padding: "10px",
              height: "3.5rem",
              width: "3.5rem"
            }}
          />
        ),
        progress: 60,
        text: (
          <div className="text-container">
            <ArrowDownwardOutlinedIcon 
              className="text-icon" 
              style={{ color: "red", fontSize: "20px" }}
              
            />
             <span className="text" style={{color: "red" , fontSize:"11px", fontWeight: "700"}}> 1.15%</span>
             <span className="text-common">since last week</span>
           
           
          </div>
        )
      };
      progressBarClass = "user-progress-bar";
      break;
    case "order":
      data = {
        title: "Customers",
        amount: "3,642",
        isMoney: false,
        link: "View all orders",
        icon: (
          <GroupsOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#d1f3ff",
              color: "#42cdff",
              fontSize: '1.875rem', 
              borderRadius: "10px",
              padding: "10px",
              height: "3.5rem",
              width: "3.5rem"
            }}
            />
          ),
          progress: 60,
          text: (
            <div className="text-container">
              <ArrowUpwardOutlinedIcon  
                className="text-icon" 
                style={{ color: "green", fontSize: "20px" }}
              />
         <span className="text" style={{color: "green" , fontSize:"11px", fontWeight: "700"}}> 1.15%</span>
              <span className="text-common">since last week</span>
            </div>
          )
        
      };
      progressBarClass = "order-progress-bar";
      break;
    case "earning":
      data = {
        title: "Invoices",
        amount: "1,021",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <DescriptionOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#ceffd5", color: "#52fb6a",  fontSize: '1.875rem', 
              borderRadius: "10px",
              padding: "10px",
              height: "3.5rem",
              width: "3.5rem" }}
          />
        ),
        progress: 80,
        text: (
          <div className="text-container">
            <ArrowUpwardOutlinedIcon  
              className="text-icon" 
              style={{ color: "green", fontSize: "20px" }}
            />
          
          <span className="text" style={{color: "green" , fontSize:"11px", fontWeight: "700"}}> 1.15%</span>
            <span className="text-common">since last week</span>
           
          </div>
        )
      };
      progressBarClass = "earning-progress-bar";
      break;
    case "balance":
      data = {
        title: "Estimates",
        amount: "8943",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#fccaff",
              color: "#f555ff",
              fontSize: '1.875rem', 
              borderRadius: "10px",
              padding: "10px",
              height: "3.5rem",
              width: "3.5rem"
            }}
          />
        ),
        progress: 90,
        text: (
          <div className="text-container">
            <ArrowDownwardOutlinedIcon 
              className="text-icon" 
              style={{ color: "red", fontSize: "20px" }}
            />
             <span className="text" style={{color: "red" , fontSize:"11px", fontWeight: "700"}}> 1.15%</span>
             <span className="text-common">since last week</span>
        
           
          </div>
        )
      };
      progressBarClass = "balance-progress-bar";
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="right">
        <span className="widget_icon">{data.icon}</span>
        <div className="left">
          <div className="left_title">
            <span className="title">{data.title}</span>
          </div>
          <div className="left_amount">
            <span className="amount">{data.amount}</span>
          </div>
        </div>
      </div>
     <div className="progress-list"> 
     <div className={`progress-container ${progressBarClass}`}>
        <ProgressBar now={data.progress} />
      </div>
     </div>
     <div className ="text-value">
           <p className="text-icon">{data.text}</p>
           
     </div>
     
    </div>
  );
};

export default Widget;
 