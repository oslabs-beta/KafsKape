import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';
import BottomBanner from './BottomBanner.jsx';
import CriticalMetrics from './CriticalMetrics.jsx';

const MainPageContainer =() => {
  return (
    <div style = {{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundImage: 'linear-gradient(to bottom left, #66a6ff, #89f7fe)'}}>
      <TopBannerContainer topBannerContainerTitle="Ecosystem Overview"/>
        <div style ={{display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
            <ClusterContainer />
          <div style={{marginTop: '10vh'}}>
            <CriticalMetrics />
          </div>
        </div>
      <div style = {{marginTop : '10vh'}}>
        <BottomBanner /> 
      </div>
    </div>
  )
}

export default MainPageContainer;