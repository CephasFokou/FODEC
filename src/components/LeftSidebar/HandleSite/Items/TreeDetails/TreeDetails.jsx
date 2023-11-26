import './TreeDetails.css'
import React from 'react'

const TreeDetails = () => {
    return (
        
        <div className='absolute z-50 treeDetailsPosition hidden w-auto'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="246" height="137" viewBox="0 0 246 137" fill="none">
                <g clip-path="url(#clip0_772_1810)">
                <rect y="-2" width="246" height="141" fill="#F2F2F2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M123.837 52.6587L134.848 34.1525L162.494 80.6159H138.517C138.702 79.3512 138.797 78.0584 138.797 76.7439C138.797 66.2647 132.721 57.1683 123.837 52.6587ZM123.837 52.6587C120.037 50.73 115.723 49.6403 111.152 49.6403C95.8911 49.6403 83.5059 61.7827 83.5059 76.7439C83.5059 91.7051 95.8911 103.848 111.152 103.848C125.071 103.848 136.599 93.7451 138.517 80.6159H107.202L123.837 52.6587Z" fill="#5DB075"/>
                </g>
                <defs>
                <clipPath id="clip0_772_1810">
                <rect width="246" height="141" fill="white" transform="translate(0 -2)"/>
                </clipPath>
                </defs>
            </svg>

            <div className='px-2'>
            <div   className='mt-3.5 mb-2 border-[0.5px] border-solid border-black/10 w-full min-h-[40px] rounded py-1 px-2 flex items-center justify-between'>
                    <div>
                        <div className="font-['Open_Sans'] text-xs text-black/50 font-bold uppercase">Nom_parent_abre_1</div>
                        <div className="font-medium text-[10px] text-black manrope-font">CodeGPS | Mort | Male | Manquant</div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                            <path d="M11.2167 0C8.50636 0 6.30938 2.19699 6.30938 4.90729C6.30938 7.09844 9.51664 11.092 10.7454 12.5416C10.9943 12.8353 11.4394 12.8353 11.6879 12.5416C12.9167 11.092 16.124 7.09844 16.124 4.90729C16.124 2.19699 13.927 0 11.2167 0ZM11.2167 6.54306C10.3131 6.54306 9.5809 5.81086 9.5809 4.90729C9.5809 4.00373 10.3131 3.27153 11.2167 3.27153C12.1202 3.27153 12.8524 4.00373 12.8524 4.90729C12.8524 5.81086 12.1202 6.54306 11.2167 6.54306ZM0.783609 8.41055C0.552334 8.50306 0.354077 8.66273 0.214406 8.86897C0.0747344 9.07521 5.53904e-05 9.31857 0 9.56766L0 19.3168C0 19.7577 0.445162 20.0591 0.854492 19.8956L6.23148 17.4481V8.37044C5.88719 7.74807 5.60561 7.14206 5.40386 6.56253L0.783609 8.41055ZM11.2167 14.008C10.6687 14.008 10.1503 13.7673 9.79472 13.3474C9.02903 12.4439 8.21465 11.4149 7.47778 10.3594V17.4478L14.9556 19.9404V10.3598C14.2187 11.4149 13.4047 12.4443 12.6386 13.3478C12.283 13.7673 11.7646 14.008 11.2167 14.008ZM21.5788 6.27666L16.2019 8.72407V19.9407L21.6497 17.7617C21.881 17.6692 22.0793 17.5096 22.219 17.3033C22.3587 17.097 22.4333 16.8537 22.4333 16.6046V6.85541C22.4333 6.41453 21.9882 6.11308 21.5788 6.27666Z" fill="#979797"/>
                        </svg>
                        </div>
                    </div>
                </div>
                <div className="treeDetrails-bloc text-gray-true-600 manrope-font">
                    <ul >
                        <li>status: <span>Nouveau</span></li> 
                        <li>Etat sanitaire: <span>Mort</span></li> 
                        <li>Manquant: <span>Oui</span></li>
                        <li>Sex: <span>Oui</span></li>
                    </ul>
                    <ul>
                        <li className='font-bold'>Phénotype</li> 
                        <li>Forme: <span>Ronde</span></li> 
                        <li>couleur des feuilles: <span>Rouge</span></li> 
                        <li>Taille des fruits: <span> vert</span></li>
                        <li>Architecture: <span>Circulaire</span></li>
                        <li>Port de l'abre: <span>gauche</span></li>
                    </ul>
                
                    <ul>
                        <li className='font-bold'>Gènotype</li> 
                        <li>Forme: <span>Plate</span></li> 
                        <li>couleur des feuilles: <span>Vert</span></li> 
                        <li>Taille des fruits <span>Moyenne</span> </li>
                        <li>Architecture <span>Circulaire</span> </li>
                        <li>Port de l'abre <span>gauche</span></li>
                    </ul>
                </div>  
            </div>
        </div>
       
    )
}
export default TreeDetails;
