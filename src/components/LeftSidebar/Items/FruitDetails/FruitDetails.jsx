import '../itemDetails.css';
import React from 'react'

const FruitDetails = () => {
    return (
        <div className='absolute z-50 itemDetailPosition w-auto visible' style={{display:'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="246" height="109" viewBox="0 0 246 109" fill="none">
                <g clip-path="url(#clip0_778_3798)">
                    <rect y="-16" width="246" height="141" fill="#F2F2F2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M123.837 38.6587L134.848 20.1525L162.494 66.6159H138.517C138.702 65.3512 138.797 64.0584 138.797 62.7439C138.797 52.2647 132.721 43.1683 123.837 38.6587ZM123.837 38.6587C120.037 36.73 115.723 35.6403 111.152 35.6403C95.8911 35.6403 83.5059 47.7827 83.5059 62.7439C83.5059 77.7051 95.8911 89.8476 111.152 89.8476C125.071 89.8476 136.599 79.7451 138.517 66.6159H107.202L123.837 38.6587Z" fill="#F8E882"/>
                </g>
                <defs>
                    <clipPath id="clip0_778_3798">
                    <rect width="246" height="141" fill="white" transform="translate(0 -16)"/>
                    </clipPath>
                </defs>
            </svg>

            <div className='px-2'>
                <div   className='mt-3.5 mb-2 border-[0.5px] border-solid border-black/10 w-full min-h-[40px] rounded py-1 px-2 flex items-center justify-between'>
                    <div>
                        <div className="font-['Open_Sans'] text-xs text-black/50 font-bold uppercase">Non fruit type</div>
                        <div className="font-medium text-[10px] text-black manrope-font">Fruit Terrain | 5cm x 3cm | 1.5kg</div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                            <path d="M11.2167 0C8.50636 0 6.30938 2.19699 6.30938 4.90729C6.30938 7.09844 9.51664 11.092 10.7454 12.5416C10.9943 12.8353 11.4394 12.8353 11.6879 12.5416C12.9167 11.092 16.124 7.09844 16.124 4.90729C16.124 2.19699 13.927 0 11.2167 0ZM11.2167 6.54306C10.3131 6.54306 9.5809 5.81086 9.5809 4.90729C9.5809 4.00373 10.3131 3.27153 11.2167 3.27153C12.1202 3.27153 12.8524 4.00373 12.8524 4.90729C12.8524 5.81086 12.1202 6.54306 11.2167 6.54306ZM0.783609 8.41055C0.552334 8.50306 0.354077 8.66273 0.214406 8.86897C0.0747344 9.07521 5.53904e-05 9.31857 0 9.56766L0 19.3168C0 19.7577 0.445162 20.0591 0.854492 19.8956L6.23148 17.4481V8.37044C5.88719 7.74807 5.60561 7.14206 5.40386 6.56253L0.783609 8.41055ZM11.2167 14.008C10.6687 14.008 10.1503 13.7673 9.79472 13.3474C9.02903 12.4439 8.21465 11.4149 7.47778 10.3594V17.4478L14.9556 19.9404V10.3598C14.2187 11.4149 13.4047 12.4443 12.6386 13.3478C12.283 13.7673 11.7646 14.008 11.2167 14.008ZM21.5788 6.27666L16.2019 8.72407V19.9407L21.6497 17.7617C21.881 17.6692 22.0793 17.5096 22.219 17.3033C22.3587 17.097 22.4333 16.8537 22.4333 16.6046V6.85541C22.4333 6.41453 21.9882 6.11308 21.5788 6.27666Z" fill="#979797"/>
                        </svg>
                        </div>
                    </div>
                </div>
                <div className="itemDetail-bloc text-gray-true-600 manrope-font">
                    <ul >
                        <li>Type: <span>Fruit type</span></li> 
                        <li>Forme: <span>Ronde</span></li> 
                        <li>Taille: <span>5cm x 3cm</span></li>
                        <li>Poids: <span>1.5kg</span></li>
                        <li className='flex items-center'>
                            Couleur: <span>#F8e822</span>
                            <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.46997" r="4" fill="#F8E882"/>
                            </svg>
                        </li>
                    </ul>
                </div>  
            </div>
        </div>
       
    )
}
export default FruitDetails;
