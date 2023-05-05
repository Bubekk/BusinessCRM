import "../styles/NotificationsPageStyle.scss";

function NotificationsPage(props) {
  //Transmits which component schould be active and displayed on page
  const isActive = props.activeComponent === "NotificationsPage";

  return (
    <div
      className="notificationpage"
      style={{ display: isActive ? "none" : "flex" }}
    >
      <h1>NotificationsPage</h1>
    </div>
  );
}

export default NotificationsPage;
