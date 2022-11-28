import { useEffect, useState } from "react"

const useBuyer = userType => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (userType) {
            fetch(`http://localhost:5000/users/buyer/${userType}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsBuyer(data.isBuyer);
                    setIsAdminLoading(false)
                })
        }
    }, [userType])
    return [isBuyer, isAdminLoading]
}


export default useBuyer;