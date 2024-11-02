import React from 'react'

function Dönüşüm() {
    return (
        <div>
            <div className="donusumKutusu">
                <div className='baslik'>
                    <h2>DÖVİZ KURU UYGULAMASI</h2>
                </div>
                <div className="donustur">
                    <input type="number" className='İnputs' />
                    <select className='Selects'>
                        <option value="">USD</option>
                        <option value="">EUR</option>
                        <option value="">TL</option>
                    </select>
                    <input type="number" className='İnputs' />
                    <select className='Selects'>
                        <option value="">TL</option>
                        <option value="">EUR</option>
                        <option value="">USD</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Dönüşüm