import { useEffect, useState } from "react"

const useSeller = userType => {
    const [isSeller, setIsSeller] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (userType) {
            fetch(`http://localhost:5000/users/seller/${userType}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSeller(data.isSeller);
                    setIsAdminLoading(false)
                })
        }
    }, [userType])
    return [isSeller, isAdminLoading]
}


export default useSeller;