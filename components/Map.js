import ReactMapGL, {Marker} from "react-map-gl";
import {useState} from "react";
import getCenter from "geolib/es/getCenter";
import CustomMarker from "../components/CustomMarker";
function Map(props) {
    const latsLongs=props.locations.map(data=>{
        return {
            latitude:data.lat,
            longitude:data.long
        }
    })
    
    const center = getCenter(latsLongs);
    
    const [viewport,setViewport] =useState({
        width:"100%",
        height:"100%",
        zoom:11,
        latitude:center.latitude,
        longitude:center.longitude,
    })
    console.log(center.latitude)
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/assbomber/ckufekfq52ax817ql3g92xzml"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(newViewPort)=>setViewport(newViewPort)}
        >
            {props.locations.map((item,index)=>{
                return <Marker key={index}
                latitude={item.lat}
                longitude={item.long}
                >
                    <CustomMarker title={item.title}/>
                </Marker> 
            })}
            
        </ReactMapGL>
    )
}

export default Map
