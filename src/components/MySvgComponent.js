
import React from 'react';

const MySVGComponent = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {/* Paste your inline SVG code here */}
            {<svg xmlns='http://www.w3.org/2000/svg'  width='100%' height='100%' viewBox='0 0 200 200'><rect fill='#ffffff' width='100%' height='!00%'/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'><stop  offset='0' stop-color='#005092'/><stop  offset='1' stop-color='#007cc4'/></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'><stop  offset='0' stop-color='#868686'/><stop  offset='0.09' stop-color='#ababab'/><stop  offset='0.18' stop-color='#c4c4c4'/><stop  offset='0.31' stop-color='#d7d7d7'/><stop  offset='0.44' stop-color='#e5e5e5'/><stop  offset='0.59' stop-color='#f1f1f1'/><stop  offset='0.75' stop-color='#f9f9f9'/><stop  offset='1' stop-color='#FFFFFF'/></linearGradient><filter id='c' x='0' y='0' width='200%' height='200%'><feGaussianBlur in='SourceGraphic' stdDeviation='12' /></filter></defs><polygon fill='url(#a)' points='0 174 0 0 174 0'/><path fill='#000' fill-opacity='0.37' filter='url(#c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/><path fill='url(#b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/></svg>}
            {/* <svg xmlns='http://www.w3.org/2000/svg' width='475' height='100%' viewBox='0 0 200 200'> */}
                <rect fill='#ffffff' width='200' height='200'/>
                <defs>
                    <linearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'>
                        <stop offset='0' stopColor='#005092'/>
                        <stop offset='1' stopColor='#007cc4'/>
                    </linearGradient>
                    {/* Define other gradients and filters here */}
                </defs>
                <polygon fill='url(#a)' points='0 174 0 0 174 0'/>
                <path fill='#000' fillOpacity='0.37' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/>
                <path fill='url(#b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/>
            
        </div>
    );
};

export default MySVGComponent;
