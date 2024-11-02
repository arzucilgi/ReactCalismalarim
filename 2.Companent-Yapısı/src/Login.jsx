import React from 'react'
export const users = [
    {
        username: "arzu",
        id: 1
    },
    {
        usernamae: "Samet",
        id: 2
    }
]

function Login() {
    return (
        <>
            <div>
                <div>
                    <label htmlFor="">Adınız</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Şifre</label>
                    <input type="password" />
                </div>
                <div>
                    <button>Gönder</button>
                </div>
            </div>
        </>
    )
}

export default Login // Logini dışardan kullanılabilir hale getirdik 
// Bir de sadece export ifadesi var her şeyi değil parça parça dışarıya açık hale getirmek istiyorsam bunu kullanmam lazım
//ve tek parça halinde export ettiğim parça bütün halde export ettiğim parçanın dışında olması lazım