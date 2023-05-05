function SettingPage(props) {

  //Transmits which component schould be active and displayed on page
    const isActive = props.activeComponent === 'SettingPage';
  
    return (
    <div className="settingpage" style={{ display: isActive ? 'none' : 'flex' }}>
      <h1>SettingPage</h1>
      </div>
    );
  }
  
  export default SettingPage;