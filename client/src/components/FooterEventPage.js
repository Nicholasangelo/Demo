// OK
import React from "react"
import { Link } from "react-router-dom";

function FooterEventPage() {
return (
    <>
    <div className="blurFoot"></div>
    <div className="eventFooter">
        <h1>demoDay</h1>
            
            <Link to="/" className="nav-link footerNav">
                signOut
            </Link>
    </div>
   </>
)
}

export default FooterEventPage;