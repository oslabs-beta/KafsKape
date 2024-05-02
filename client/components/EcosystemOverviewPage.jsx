import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';
import BottomBanner from './BottomBanner.jsx';
import CriticalMetrics from './CriticalMetrics.jsx';
import styles from './LandingPage.module.css'

const EcosystemOverviewPage =() => {
  return (
    <div className={styles.background}>
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

export default EcosystemOverviewPage;