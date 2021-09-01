import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from './StateProvider'


function Sidebar() {
  const [{user}]=useStateValue()
 
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
          title="COVID-19 information Centre"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
          title="Friends"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
          title="Groups"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
          title="Vidoes"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png"
          title="Ads"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/p1ZJABzCAAS.png"
          title="Blood donations"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/Doj4fJpfxHx.png"
          title="Business Suite"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png"
          title="Crisis Response"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
          title="Events"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/SWt1APlIN82.png"
          title="Films"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"
          title="Friend Lists"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
          title="Fundraisers"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
          title="Games"
        />

        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"
          title="Jobs"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"
          title="Live videos"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"
          title="Memories"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"
          title="Messenger"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png"
          title="Messenger Kids"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"
          title="Most recent"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"
          title="Offers"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
          title="Pages"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png"
          title="Recent ad activity"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
          title="Saved"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png"
          title="Weather"
        />
      </div>
    </div>
  );
}

export default Sidebar;
